# Still + subtitulo quemado, formato de post de cine.
from PIL import Image, ImageDraw, ImageFont
import os, sys

BASE = os.path.dirname(os.path.abspath(__file__))
SG700 = os.path.join(BASE, "..", "logo", "SG-700.ttf")
ASSETS = os.path.join(BASE, "..", "..", "assets", "videos")

S = 2
W, H = 1080*S, 1350*S
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED   = (226, 36, 36)

def sin_barras(im, umbral=14):
    g = im.convert("L"); w, h = g.size
    filas = [sum(g.crop((0, y, w, y+1)).getdata())/w for y in range(h)]
    y0, y1 = 0, h-1
    while y0 < h and filas[y0] < umbral: y0 += 1
    while y1 > y0 and filas[y1] < umbral: y1 -= 1
    return im.crop((0, y0, w, y1+1))

def llenar(im, w, h, foco=0.42):
    r = max(w/im.width, h/im.height)
    im = im.resize((max(w, int(im.width*r)+1), max(h, int(im.height*r)+1)), Image.LANCZOS)
    return im.crop(((im.width-w)//2, int((im.height-h)*foco), (im.width-w)//2+w, int((im.height-h)*foco)+h))

FRASES = {
    "1": ["Nadie financia lo que", "no puede ver."],
    "2": ["Mostramos lo que", "todavía no existe."],
    "3": ["La película existe", "antes de la película."],
}
frase = FRASES[sys.argv[1] if len(sys.argv) > 1 else "1"]
thumb = sys.argv[2] if len(sys.argv) > 2 else "video14_thumbnail.jpg"
color = {"blanco": WHITE, "rojo": RED}[sys.argv[3] if len(sys.argv) > 3 else "blanco"]
modo  = sys.argv[4] if len(sys.argv) > 4 else "lleno"   # lleno | letterbox
out   = sys.argv[5] if len(sys.argv) > 5 else os.path.join(BASE, "ig-sub.png")

src = sin_barras(Image.open(os.path.join(ASSETS, thumb)).convert("RGB"))
img = Image.new("RGB", (W, H), BLACK)

if modo == "lleno":
    img.paste(llenar(src, W, H, 0.30), (0, 0))
    y_sub = int(H - 150*S)
else:
    iw = W
    ih = int(iw * src.height / src.width)
    top = (H - ih)//2 - 40*S
    img.paste(llenar(src, iw, ih), (0, top))
    y_sub = top + ih + 118*S

d = ImageDraw.Draw(img)
font = ImageFont.truetype(SG700, int(46*S))
lead = 60*S
for i, ln in enumerate(reversed(frase)):
    w = d.textlength(ln, font=font)
    d.text(((W-w)/2, y_sub - i*lead), ln, font=font, fill=color,
           anchor="ls", stroke_width=int(3.5*S), stroke_fill=BLACK)

img.resize((1080, 1350), Image.LANCZOS).save(out)
print("ok:", out)
