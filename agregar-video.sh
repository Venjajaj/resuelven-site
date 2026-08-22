#!/bin/bash
# Agrega un video a la galeria: lo comprime, le saca portada y arma la entrada.
#
#   ./agregar-video.sh /ruta/al/video.mp4 nombre-corto [segundo-de-la-portada]
#
# El nombre corto es el que va a llevar el archivo y el que se usa en el codigo.
# Sin espacios ni acentos. Ejemplo: ./agregar-video.sh ~/Desktop/trailer.mp4 nuevoteaser

set -e
cd "$(dirname "$0")"

SRC="$1"
NAME="$2"
POSTER_AT="${3:-}"

if [ -z "$SRC" ] || [ -z "$NAME" ]; then
  echo "Uso: ./agregar-video.sh /ruta/al/video.mp4 nombre-corto [segundo-de-la-portada]"
  exit 1
fi
[ -f "$SRC" ] || { echo "No encuentro el archivo: $SRC"; exit 1; }
command -v ffmpeg >/dev/null || { echo "Falta ffmpeg. Instalalo con: brew install ffmpeg"; exit 1; }

DEST="assets/videos/${NAME}.mp4"
POSTER="assets/videos/${NAME}_poster.jpg"
[ -e "$DEST" ] && { echo "Ya existe $DEST. Usa otro nombre."; exit 1; }

DUR=$(ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "$SRC")
[ -z "$POSTER_AT" ] && POSTER_AT=$(python3 -c "print(max(1, $DUR*0.15))")

echo "Comprimiendo (CRF 20, misma resolucion)..."
TMP=$(mktemp -t rsvvid).mp4
ffmpeg -hide_banner -loglevel error -y -i "$SRC" \
  -c:v libx264 -crf 20 -preset slow -pix_fmt yuv420p \
  -c:a aac -b:a 192k -movflags +faststart "$TMP"

# si comprimir lo hizo mas pesado, nos quedamos con el original
O=$(stat -f%z "$SRC"); C=$(stat -f%z "$TMP")
if [ "$C" -lt "$O" ]; then
  mv "$TMP" "$DEST"
  echo "  $(python3 -c "print(f'{$O/1048576:.1f} MB -> {$C/1048576:.1f} MB ({100*(1-$C/$O):.0f}% menos)')")"
else
  rm -f "$TMP"; cp "$SRC" "$DEST"
  echo "  el original ya estaba bien codificado, se deja tal cual ($(python3 -c "print(f'{$O/1048576:.1f}')") MB)"
fi

echo "Sacando portada del segundo $POSTER_AT..."
ffmpeg -hide_banner -loglevel error -y -ss "$POSTER_AT" -i "$DEST" -frames:v 1 -q:v 2 "$POSTER"

# aviso si la portada quedo casi negra
B=$(python3 -c "
from PIL import Image, ImageStat
print(int(ImageStat.Stat(Image.open('$POSTER').convert('L')).mean[0]))" 2>/dev/null || echo 99)
[ "$B" -lt 25 ] && echo "  OJO: la portada quedo muy oscura. Repetilo con otro segundo al final del comando."

echo
echo "Listo. Pega esta entrada en el array WORKS de js/main.js:"
echo
cat <<EOF
  { ...local("${NAME}", { poster: "${POSTER}" }), thumb: "${POSTER}", cat: "ficcion",
    title: "TITULO", client: null, country: "argentina", fmt: "teaser", roles: ["edit"] },
EOF
echo
echo "Ajusta cat (ficcion / animacion / publicidad), title, country, fmt y roles."
echo "Despues publica con:  git add -A && git commit -m 'video nuevo' && git push"
