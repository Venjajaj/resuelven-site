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

Comprime y genera la portada. **Ojo**: el script todavía imprime la entrada con el formato del array `WORKS`, que ya no existe; ignorá esa salida.

Después de correrlo, la ficha se escribe a mano en `index.html`, y hay que tocar **cuatro cosas** o el sitio queda inconsistente:

1. **La ficha** en `#workgrid`, copiando una existente. Los `data-*` mandan: `data-cat` (ficcion/animacion/publicidad), `data-media`, `data-src`, `data-fmt`, `data-client` (se omite si es igual al título), `data-country` (se omite si no aplica) y `data-roles` separados por coma. Además lleva **`style="--ar:<proporción>"` como número decimal** (1.778 para 16:9, 0.5625 para 9:16, 2.39 para cine): de ahí sale el ancho de la ficha. Escrito como `16/9` la ficha queda con ancho cero.
2. **Las banderas de visibilidad**: solo las primeras once llevan `data-hidden-by-more="false"` y no llevan la clase `work--hidden`; el resto al revés. Si agregás una arriba, hay que recalcular todas. La galería arma filas del mismo alto con cada pieza en su formato, así que el orden decide cómo quedan las filas: conviene mirar el resultado.
3. **El JSON-LD** del `<head>`: sumar el `ListItem`, renumerar todas las `position` y actualizar `numberOfItems`.
4. **Las etiquetas nuevas** en `TYPE_LABELS`, `COUNTRY_LABELS` o `ROLE_LABELS` de `js/main.js`, en inglés y castellano. Si falta una, el crédito sale como `undefined`.

El texto alternativo de la portada se escribe **mirando el fotograma**, describiendo lo que se ve, no repitiendo el título.

La portada va **sin franjas negras** (recortada al contenido real) y a no más de 1600 px de ancho; las verticales, a 900. Sin subtítulos quemados ni logos grandes si el video tiene un cuadro limpio.

Regla al comprimir: si el resultado pesa **más** que el original, se deja el original. Pasa cuando la fuente ya venía bien codificada a bitrate bajo.

## Archivo privado

`resuelven.pro/archivo/` es una página que no está linkeada ni indexada. Muestra arriba los trabajos que no pueden ser públicos y abajo toda la galería pública, que trae sola de `index.html`.

**El repo es público**: todo lo que entra a `assets/` lo puede bajar cualquiera aunque no esté linkeado. Por eso los trabajos privados se suben cifrados (AES-256-GCM) a `archivo/m/`, con nombres que no dicen nada. La clave viaja en el fragmento del link (`resuelven.pro/archivo/#clave`), que el navegador nunca manda al servidor, y la página la saca de la barra antes de que cargue la medición. Sin la clave, la página muestra solo lo público.

Las fuentes sin cifrar, la lista de trabajos (`trabajos.json`) y la clave (`clave.txt`) viven en `archivo/_privado/`, que está en `.gitignore`. **Si se pierde `clave.txt`, el link deja de andar** y hay que cifrar todo de nuevo con una clave nueva.

Para sumar un trabajo privado: copiar el video y su portada a `archivo/_privado/`, agregarlo a `trabajos.json` y correr:

```bash
node archivo/cifrar.mjs
```

Cifra solo lo nuevo, borra lo que ya no se usa e imprime el link para mandar. Los videos se cifran en pedazos de 1 MB (`<id>-000.bin`, `<id>-001.bin`...) y `archivo/sw.js`, un service worker, los descifra a medida que el reproductor los pide: el video arranca enseguida y se puede adelantar. En un navegador sin service worker se bajan todos los pedazos y recién ahí se reproduce.

## Estructura

- `index.html` — todo el marcado, con atributos `data-i18n` para los textos. **Las 16 fichas de la galería están escritas acá**, no las genera el JS: cada `.work` lleva en `data-*` su categoría, el medio del lightbox y los créditos (`fmt`, `client`, `country`, `roles`), y los textos en castellano ya vienen puestos para que los lea un buscador. Para agregar una pieza se agrega la ficha a mano.
- `css/style.css` — hoja formateada en varias líneas. Estuvo minificada en una sola línea por herencia de Carrd hasta agosto de 2026, cuando se desminificó porque cada lectura costaba carísimo.
- `js/main.js` — diccionarios de idioma y de etiquetas (`TYPE_LABELS`, `COUNTRY_LABELS`, `ROLE_LABELS`), traducción de los créditos de cada ficha, filtros, lightbox y el opener
- `assets/` — videos, posters e imágenes
- `branding/` — logos en SVG y PNG, y el manual de marca
- `serve.mjs` — servidor para previsualizar local en el puerto 8791

## Hero

El fondo del hero es un reel de unos 29 segundos sin sonido y con grano, armado con primeros planos y detalles de los trabajos públicos (los planos generales delatan la IA, por eso no van): `assets/videos/reel.mp4` (1080p) y `reel-540.mp4` (celular, lo elige el navegador por el `media` del `<source>`). Abre con la mano y la máquina a punto de tocarse. **No lleva trabajos privados ni retirados de la galería.**

Al cargar, el reel se resuelve desde los píxeles en un segundo y medio (`resolverReel()` en `js/main.js`), después del opener. Es el único movimiento que no dispara quien mira: no hay fundidos al hacer scroll.

## Diseño

Una sola familia, Space Grotesk. Sin etiquetas en mayúsculas arriba de los títulos ni datos unidos con puntos medios: los créditos se escriben como frase, con comas. La caja con borde queda solo para lo que es un objeto, como un video. La crítica completa que llevó a esto está en `https://claude.ai/code/artifact/ba273dd6-7b7e-4fcb-95c8-c9f261ab8ce1`.

## Textos

El sitio es bilingüe. Todo el copy vive en el objeto `I18N` de `js/main.js`, en `en` y `es`. El idioma por defecto es español.

**Nada de guiones largos en el copy.** Coma o punto y coma en su lugar. Es una preferencia explícita del dueño y aplica a todo el texto visible.

## Medición

Dos herramientas gratuitas, cada una para una pregunta distinta. Las dos se prenden pegando su ID en el objeto `MEDICION` de `js/analytics.js`. **Con los IDs vacíos no se carga ni se envía nada**, así que el archivo puede estar publicado sin medir.

- **GA4** contesta de dónde viene la gente y si el reach de LinkedIn funciona.
- **Clarity** graba las sesiones para ver qué miraron y dónde se fueron.

Eventos propios que ya están cableados:

| evento | dato | dónde se dispara |
|---|---|---|
| `trabajo_abierto` | nombre del trabajo | `openLightbox()` en `js/main.js` |
| `contacto` | `nav`, `hero` o `cierre` | clic en cualquier `.wa-link` |
| `mail` | la dirección | clic en cualquier `mailto:` |
| `idioma` | a qué idioma cambió | `setLang()` en `js/main.js` |

Todos pasan por `window.medir(evento, datos)`, que vive en `analytics.js` y no rompe si no hay nada configurado. Para sumar un evento nuevo alcanza con llamar `window.medir?.("nombre", { dato })` donde haga falta.

**Links para prospectos de LinkedIn.** El nombre del prospecto viaja en `utm_campaign`, en minúscula y con guiones:

```
https://resuelven.pro/?utm_source=linkedin&utm_medium=dm&utm_campaign=nombre-del-estudio
```

Se guarda en `sessionStorage` apenas entra, viaja en todos los eventos y además queda como etiqueta de Clarity, así se pueden filtrar las grabaciones de una persona concreta.

## Pendientes conocidos

- **SEO**: hechos en agosto 2026 la meta description por idioma, Open Graph y Twitter card completos (con `card.jpg` propia de 1200x630), canonical, hreflang, `sitemap.xml`, `robots.txt`, las fichas de la galería servidas en el HTML, los **datos estructurados** (un `@graph` de JSON-LD en el `<head>` de `index.html` con Organization, WebSite, WebPage y un ItemList de los 15 trabajos) y el **alt text real** de la galería, escrito mirando cada miniatura en vez de repetir el título. Queda pendiente **la línea de decisión por caso**, que diga en cada ficha qué se filmó y qué se generó. Esa línea la tiene que aportar el dueño, no se puede inferir del repo.
- `prologue.mp4` pesa 75 MB, por encima de los 50 MB que GitHub recomienda por archivo. Funciona, pero se puede bajar más.
- **Banner de consentimiento**: GA4 y Clarity usan cookies no esenciales, así que hace falta uno para los visitantes europeos. No está puesto. Mientras los IDs de `analytics.js` estén vacíos no se envía nada y el tema no corre.
