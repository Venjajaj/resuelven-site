# Generador de slides 4:5 (1080x1350) para el Instagram de Resuelven.
# Marca: ink #0A0E14, azul #2D72C8, cielo #9CC2ED, Space Grotesk.
from PIL import Image, ImageDraw, ImageFont
import os, sys

BASE = os.path.dirname(os.path.abspath(__file__))
LOGO = os.path.join(BASE, "..", "logo")
SG700 = os.path.join(LOGO, "SG-700.ttf")
SG600 = os.path.join(LOGO, "SG-600.ttf")

S = 2                      # supersampling
W, H = 1080 * S, 1350 * S
M = 100 * S                # margen

INK   = (10, 14, 20)
WHITE = (242, 245, 249)
BLUE  = (45, 114, 200)
SKY   = (156, 194, 237)
MUT   = (147, 163, 182)
LINE  = (30, 42, 56)

def f(path, size):
    return ImageFont.truetype(path, int(size * S))

def tw(d, text, font, tracking=0):
    w = 0
    for ch in text:
        w += d.textlength(ch, font=font) + tracking * S
    return w - (tracking * S if text else 0)

def draw_tracked(d, xy, text, font, fill, tracking=0, anchor="ls"):
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill, anchor=anchor)
        x += d.textlength(ch, font=font) + tracking * S
    return x

def fit(d, text, path, target_w, start, floor=40):
    size = start
    while size > floor:
        font = f(path, size)
        if d.textlength(text, font=font) <= target_w:
            return font, size
        size -= 2
    return f(path, floor), floor

# --- isotipo: los 9 pixeles del logo, en el viewBox 248x60 ---
PX = [(156,24,6,6),(156,32,6,6),(156,40,6,6),(164,24,6,6),(172,24,6,6),
      (180,32,6,6),(180,40,6,6),(190,27,4,4),(195,41,3,3)]
FADE = [1,1,1,1,1,1,.85,.5,.35]

def blend(c, a, bg=INK):
    return tuple(int(bg[i] + (c[i]-bg[i]) * a) for i in range(3))

def logo(d, x, y, k, word_fill=WHITE, px_fill=BLUE):
    """Dibuja el logo horizontal. (x, y) = esquina sup. izq. del viewBox, k = escala."""
    font = f(SG700, 40 * k / S)
    draw_tracked(d, (x, y + 46*k), "resuelve", font, word_fill, tracking=-1.3*k/S)
    for (rx, ry, rw, rh), a in zip(PX, FADE):
        d.rectangle([x+rx*k, y+ry*k, x+(rx+rw)*k-1, y+(ry+rh)*k-1], fill=blend(px_fill, a))
    tm = f(SG600, 12 * k / S)
    d.text((x + 202*k, y + 26*k), "™", font=tm, fill=px_fill, anchor="ls")

img = Image.new("RGB", (W, H), INK)
d = ImageDraw.Draw(img)

# marca de agua: el isotipo ampliado, arriba a la derecha
wm = Image.new("RGB", (W, H), INK)
dw = ImageDraw.Draw(wm)
k = 11.0 * S
ox, oy = W - M - (198-156)*k - 24*S, M - 10*S
for (rx, ry, rw, rh), a in zip(PX, FADE):
    dw.rectangle([ox+(rx-156)*k, oy+(ry-24)*k, ox+(rx-156+rw)*k, oy+(ry-24+rh)*k], fill=blend(SKY, a))
img = Image.blend(img, wm, 0.13)
d = ImageDraw.Draw(img)

# logo
logo(d, M, M, 1.30 * S)

# bloque de texto, anclado abajo
VARIANTES = {
    # a: la creencia. Mas segura en una sala de productores tradicionales.
    "a": ("PRODUCTORA AUDIOVISUAL HÍBRIDA",
          ["Creemos", "en la cámara."],
          ["La IA entra cuando el presupuesto,", "el tiempo o la física dicen que no."]),
    # b: la capacidad. Mismo criterio, dicho como oferta y no como declaracion.
    "b": ("PRODUCTORA AUDIOVISUAL HÍBRIDA",
          ["Filmamos lo que", "se puede filmar."],
          ["Lo que no, lo generamos.", "Decide el proyecto, no la herramienta."]),
}
var = sys.argv[2] if len(sys.argv) > 2 else "a"
kicker, h1, sub = VARIANTES[var]

fs = f(SG600, 40)
sub_lead = 58 * S
sub_last = 1096 * S
for i, ln in enumerate(reversed(sub)):
    d.text((M, sub_last - i * sub_lead), ln, font=fs, fill=MUT, anchor="ls")

fh, hsize = fit(d, max(h1, key=len), SG700, W - 2*M, 116)
h_lead = hsize * 1.06 * S
h_last = sub_last - len(sub) * sub_lead - 46 * S
for i, ln in enumerate(reversed(h1)):
    draw_tracked(d, (M, h_last - i * h_lead), ln, fh, WHITE, tracking=-hsize*0.03)

fk = f(SG600, 25)
draw_tracked(d, (M, 258 * S), kicker, fk, SKY, tracking=5)

# pie
d.rectangle([M, 1192*S, W-M, 1192*S + max(1, S//2)], fill=LINE)
ff = f(SG600, 22)
draw_tracked(d, (M, 1248*S), "RESUELVEN.PRO", ff, MUT, tracking=3)

out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(BASE, "ig-slide-01%s.png" % ("" if var == "a" else var))
img.resize((1080, 1350), Image.LANCZOS).save(out)
print("ok:", out)
