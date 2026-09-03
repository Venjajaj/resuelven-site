# Direccion 2: carton de titulo. Letterbox, grano, textura cartografica.
from PIL import Image, ImageDraw, ImageFont, ImageChops
import os, sys, math

BASE = os.path.dirname(os.path.abspath(__file__))
LOGO = os.path.join(BASE, "..", "logo")
SG700, SG600 = os.path.join(LOGO, "SG-700.ttf"), os.path.join(LOGO, "SG-600.ttf")

S = 2
W, H = 1080*S, 1350*S
OUT   = (5, 7, 9)          # negro de sala
INK   = (10, 14, 20)
WHITE = (242, 245, 249)
BLUE  = (45, 114, 200)
SKY   = (156, 194, 237)
MUT   = (120, 136, 154)

f = lambda p, s: ImageFont.truetype(p, int(s*S))

def tw(d, t, font, tr=0):
    return sum(d.textlength(c, font=font) + tr*S for c in t) - (tr*S if t else 0)

def tracked(d, x, y, t, font, fill, tr=0):
    for c in t:
        d.text((x, y), c, font=font, fill=fill, anchor="ls")
        x += d.textlength(c, font=font) + tr*S

def centered(d, y, t, font, fill, tr=0):
    tracked(d, (W - tw(d, t, font, tr)) / 2, y, t, font, fill, tr)

def blend(c, a, bg):
    return tuple(int(bg[i] + (c[i]-bg[i])*a) for i in range(3))

PX = [(156,24,6,6),(156,32,6,6),(156,40,6,6),(164,24,6,6),(172,24,6,6),
      (180,32,6,6),(180,40,6,6),(190,27,4,4),(195,41,3,3)]
FADE = [1,1,1,1,1,1,.85,.5,.35]

def logo(d, x, y, k, bg):
    tracked(d, x, y + 46*k, "resuelve", f(SG700, 40*k/S), WHITE, -1.3*k/S)
    for (rx, ry, rw, rh), a in zip(PX, FADE):
        d.rectangle([x+rx*k, y+ry*k, x+(rx+rw)*k-1, y+(ry+rh)*k-1], fill=blend(BLUE, a, bg))
    d.text((x+202*k, y+26*k), "™", font=f(SG600, 12*k/S), fill=BLUE, anchor="ls")

VAR = {
    "c": (["Mostramos lo que", "todavía no existe."], "TEASERS · TRAILERS · ESCENAS"),
    "d": (["La película", "antes de la película."], "TEASERS · TRAILERS · ESCENAS"),
    "e": (["El plano que no entra", "en el presupuesto."], "TEASERS · TRAILERS · ESCENAS"),
}
var = sys.argv[2] if len(sys.argv) > 2 else "c"
title, credit = VAR[var]

img = Image.new("RGB", (W, H), OUT)
d = ImageDraw.Draw(img)

# --- ventana de imagen, proporcion 1.85:1 ---
fx0, fx1 = 90*S, W - 90*S
fw = fx1 - fx0
fh = int(fw / 1.85)
fy0 = int(470*S)
fy1 = fy0 + fh
d.rectangle([fx0, fy0, fx1, fy1], fill=INK)

# textura cartografica dentro de la ventana
tex = Image.new("RGB", (fw, fh), INK)
dt = ImageDraw.Draw(tex)
cx, cy = fw*0.72, fh*0.52
for r in range(60, int(fw*0.9), 62):
    dt.ellipse([cx-r, cy-r, cx+r, cy+r], outline=blend(SKY, .085, INK), width=max(1, S//2))
for a in range(0, 360, 15):
    rad = math.radians(a)
    dt.line([cx + 40*math.cos(rad), cy + 40*math.sin(rad),
             cx + fw*math.cos(rad), cy + fw*math.sin(rad)],
            fill=blend(SKY, .055, INK), width=max(1, S//2))
img.paste(tex.crop((0, 0, fw, fh)), (fx0, fy0))
d = ImageDraw.Draw(img)

# titulo dentro de la ventana
ft = f(SG700, 62)
lead = 78*S
base = fy0 + fh/2 + 22*S
for i, ln in enumerate(reversed(title)):
    centered(d, base - i*lead, ln, ft, WHITE, -1.2)

# marco fino
d.rectangle([fx0, fy0, fx1, fy1], outline=blend(SKY, .16, OUT), width=max(1, S//2))

# creditos bajo la ventana
centered(d, fy1 + 76*S, credit, f(SG600, 21), SKY, 5)

# logo arriba, centrado
k = 1.15*S
logo(d, (W - 248*k)/2, 210*S, k, OUT)

# pie
centered(d, 1268*S, "RESUELVEN.PRO", f(SG600, 20), MUT, 4)

# grano
noise = Image.effect_noise((W, H), 22).convert("RGB")
img = Image.blend(img, ImageChops.overlay(img, noise), 0.30)

out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(BASE, "ig-slide-01%s.png" % var)
img.resize((1080, 1350), Image.LANCZOS).save(out)
print("ok:", out)
