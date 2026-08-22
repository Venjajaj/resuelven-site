# resuelven.pro

Sitio de Resuelven, productora audiovisual híbrida (Santa Fe, Argentina). HTML, CSS y JavaScript a mano, sin framework ni build. Tres archivos y una carpeta de assets.

## Cómo se publica

Esta carpeta **es** el repositorio. Para publicar un cambio:

```bash
git add -A && git commit -m "que cambio" && git push
```

GitHub Pages reconstruye solo y en un minuto está en https://resuelven.pro. Para mirar el estado del build:

```bash
gh api repos/Venjajaj/resuelven-site/pages/builds/latest --jq .status
```

No hay que copiar archivos a ningún lado ni reescribir rutas. Las rutas son relativas porque el sitio se sirve desde la raíz del dominio.

## Reglas que no se rompen

**El archivo `CNAME` de la raíz no se borra nunca.** Contiene `resuelven.pro` y es lo que ata el dominio a GitHub Pages. Si desaparece, el sitio devuelve "Site not found". Ya pasó una vez al reescribir el historial.

**El DNS está en Spaceship y ahí también vive el mail.** Se pueden tocar los registros A de `@` y el CNAME de `www`. **Nunca** los nameservers, los MX ni los TXT: los MX apuntan a mx1/mx2.spacemail.com y sostienen hola@, info@ y team@resuelven.pro.

Registros actuales del web: cuatro A en `@` a 185.199.108.153, .109.153, .110.153 y .111.153, más un CNAME de `www` a venjajaj.github.io. Para volver atrás en una emergencia, el A viejo de Carrd era 172.66.0.70.

## Videos

Todos comprimidos con H.264 CRF 20 preset slow, misma resolución que el original. Los originales sin comprimir están en `assets/_originales-sin-comprimir/`, fuera del repositorio.

La única pieza que no se sirve desde acá es el cortometraje **Manual para cazar una ballena**, que sigue embebido desde Google Drive por su tamaño. Es una decisión tomada, no un pendiente.

Para agregar un video nuevo:

```bash
./agregar-video.sh /ruta/al/video.mp4 nombre-corto
```

Comprime, genera la portada y deja la entrada lista para pegar en el array `WORKS` de `js/main.js`.

Regla al comprimir: si el resultado pesa **más** que el original, se deja el original. Pasa cuando la fuente ya venía bien codificada a bitrate bajo.

## Estructura

- `index.html` — todo el marcado, con atributos `data-i18n` para los textos
- `css/style.css` — minificado en una sola línea por herencia de cuando el sitio se pegaba en Carrd. Ya no hace falta que lo esté.
- `js/main.js` — diccionarios de idioma, el array `WORKS` con las 16 piezas, filtros, lightbox y el opener
- `assets/` — videos, posters e imágenes
- `branding/` — logos en SVG y PNG, y el manual de marca
- `serve.mjs` — servidor para previsualizar local en el puerto 8791

## Textos

El sitio es bilingüe. Todo el copy vive en el objeto `I18N` de `js/main.js`, en `en` y `es`. El idioma por defecto es español.

**Nada de guiones largos en el copy.** Coma o punto y coma en su lugar. Es una preferencia explícita del dueño y aplica a todo el texto visible.

## Pendientes conocidos

- **SEO**: falta meta description por idioma, Open Graph, `sitemap.xml`, `robots.txt`, datos estructurados y alt text real en la galería. El problema grande (el sitio vivía dentro de un iframe en Carrd) ya está resuelto.
- `prologue.mp4` pesa 75 MB, por encima de los 50 MB que GitHub recomienda por archivo. Funciona, pero se puede bajar más.
- El CSS se puede desminificar, ya no hay motivo para tenerlo en una línea.
