# Direccion 3: carton de titulo con frame real del portfolio.
from PIL import Image, ImageDraw, ImageFont, ImageChops, ImageEnhance
import os, sys

BASE = os.path.dirname(os.path.abspath(__file__))
LOGO = os.path.join(BASE, "..", "logo")
ASSETS = os.path.join(BASE, "..", "..", "assets", "videos")
SG700, SG600 = os.path.join(LOGO, "SG-700.ttf"), os.path.join(LOGO, "SG-600.ttf")

S = 2
W, H = 1080*S, 1350*S
OUT   = (5, 7, 9)
WHITE = (242, 245, 249)
BLUE  = (45, 114, 200)
SKY   = (156, 194, 237)
MUT   = (120, 136, 154)

f = lambda p, s: ImageFont.truetype(p, int(s*S))
def tw(d, t, font, tr=0): return sum(d.textlength(c, font=font) + tr*S for c in t) - (tr*S if t else 0)
def tracked(d, x, y, t, font, fill, tr=0):
    for c in t:
        d.text((x, y), c, font=font, fill=fill, anchor="ls")
        x += d.textlength(c, font=font) + tr*S
def centered(d, y, t, font, fill, tr=0): tracked(d, (W - tw(d, t, font, tr))/2, y, t, font, fill, tr)
def blend(c, a, bg): return tuple(int(bg[i] + (c[i]-bg[i])*a) for i in range(3))

PX = [(156,24,6,6),(156,32,6,6),(156,40,6,6),(164,24,6,6),(172,24,6,6),
      (180,32,6,6),(180,40,6,6),(190,27,4,4),(195,41,3,3)]
FADE = [1,1,1,1,1,1,.85,.5,.35]
def logo(d, x, y, k):
    tracked(d, x, y + 46*k, "resuelve", f(SG700, 40*k/S), WHITE, -1.3*k/S)
    for (rx, ry, rw, rh), a in zip(PX, FADE):
        d.rectangle([x+rx*k, y+ry*k, x+(rx+rw)*k-1, y+(ry+rh)*k-1], fill=blend(BLUE, a, OUT))
    d.text((x+202*k, y+26*k), "™", font=f(SG600, 12*k/S), fill=BLUE, anchor="ls")

def sin_barras(im, umbral=14):
    """Saca el letterbox negro que ya viene quemado en el thumbnail."""
    g = im.convert("L")
    w, h = g.size
    filas = [sum(g.crop((0, y, w, y+1)).getdata())/w for y in range(h)]
    y0, y1 = 0, h-1
    while y0 < h and filas[y0] < umbral: y0 += 1
    while y1 > y0 and filas[y1] < umbral: y1 -= 1
    return im.crop((0, y0, w, y1+1))

def encajar(im, w, h):
    im = sin_barras(im)
    r = max(w/im.width, h/im.height)
    im = im.resize((int(im.width*r)+1, int(im.height*r)+1), Image.LANCZOS)
    x = (im.width - w)//2
    y = int((im.height - h)*0.42)
    return im.crop((x, y, x+w, y+h))

VAR = {
    "f": (["Mostramos lo que", "todavía no existe."], "video14_thumbnail.jpg",
          "GENGHIS: BIRTH OF AN EMPIRE · AUTHORS FIRST · TEASER"),
    "g": (["La película", "antes de la película."], "video14_thumbnail.jpg",
          "GENGHIS: BIRTH OF AN EMPIRE · AUTHORS FIRST · TEASER"),
}
var = sys.argv[2] if len(sys.argv) > 2 else "f"
title, thumb, credit = VAR[var]

img = Image.new("RGB", (W, H), OUT)
d = ImageDraw.Draw(img)

fx0, fx1, fy0 = 90*S, W-90*S, 300*S
fw = fx1 - fx0
fh = int(fw/1.85)
fy1 = fy0 + fh

frame = encajar(Image.open(os.path.join(ASSETS, thumb)).convert("RGB"), fw, fh)
frame = ImageEnhance.Brightness(frame).enhance(0.92)
img.paste(frame, (fx0, fy0))
d = ImageDraw.Draw(img)
d.rectangle([fx0, fy0, fx1, fy1], outline=blend(SKY, .18, OUT), width=max(1, S//2))

logo(d, (W - 248*1.15*S)/2, 118*S, 1.15*S)

ft = f(SG700, 58)
for i, ln in enumerate(title):
    centered(d, (900 + i*72)*S, ln, ft, WHITE, -1.1)
centered(d, 1062*S, credit, f(SG600, 19), SKY, 4)
centered(d, 1268*S, "RESUELVEN.PRO", f(SG600, 20), MUT, 4)

noise = Image.effect_noise((W, H), 20).convert("RGB")
img = Image.blend(img, ImageChops.overlay(img, noise), 0.26)

out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(BASE, "ig-slide-01%s.png" % var)
img.resize((1080, 1350), Image.LANCZOS).save(out)
print("ok:", out)
