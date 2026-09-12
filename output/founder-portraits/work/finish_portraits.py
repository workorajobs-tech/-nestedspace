from pathlib import Path
from PIL import Image, ImageOps, ImageFilter, ImageDraw
import numpy as np

ROOT = Path('/Users/techman/NESTEDLOOP/NestedlooP.space')
WORK = ROOT / 'output/founder-portraits/work'
OUT = ROOT / 'output/founder-portraits'
PUBLIC = ROOT / 'public/images/founders'
SIZE = (1200, 1500)
sources = [
    ('01', Path('/Users/techman/Downloads/PHOTO-2026-09-12-11-23-44.jpg'), (380, 120, 1560, 1595)),
    ('02', Path('/Users/techman/Downloads/5AD47096-54E0-4E51-911E-6DB440EF6AC1.jpg'), (80, 90, 1120, 1390)),
]

def arr_image(a):
    return Image.fromarray(np.uint8(np.clip(a, 0, 255)))

def smooth(a, b, v):
    t = np.clip((v-a)/(b-a), 0, 1)
    return t*t*(3-2*t)

W, H = SIZE
Y, X = np.mgrid[0:H, 0:W].astype(float)
x, y = X / W, Y / H

def background():
    canvas = np.zeros((H,W,3)) + np.array([9, 4, 25])
    violet = np.exp(-(((x-.24)/.49)**2 + ((y-.37)/.48)**2)*1.6)
    peach = np.exp(-(((x-.87)/.36)**2 + ((y-.53)/.33)**2)*1.7)
    canvas += violet[..., None] * np.array([43, 12, 83])
    canvas += peach[..., None] * np.array([64, 24, 27])
    bg = arr_image(canvas)
    # Restrained orbital lines remain behind the person.
    rings = Image.new('RGBA', SIZE)
    rd = ImageDraw.Draw(rings)
    for radius, opacity in [(390, 33), (505, 15)]:
        rd.ellipse((600-radius, 580-radius, 600+radius, 580+radius), outline=(200,149,255,opacity), width=1)
    bg = Image.alpha_composite(bg.convert('RGBA'), rings).convert('RGB')
    rng = np.random.default_rng(721)
    dots = ImageDraw.Draw(bg)
    for _ in range(70):
        sx, sy = int(rng.uniform(48,W-48)), int(rng.uniform(55,H-90))
        luminosity = int(rng.uniform(50, 130))
        radius = float(rng.choice([.55,.7,.8,1.15]))
        dots.ellipse((sx-radius,sy-radius,sx+radius,sy+radius), fill=(luminosity, int(luminosity*.83), min(220,int(luminosity*1.3))))
    return np.array(bg, dtype=float)

for number, source, crop in sources:
    original = ImageOps.exif_transpose(Image.open(source)).convert('RGB')
    mask = Image.open(WORK / f'founder-{number}-mask.png').convert('L').resize(original.size, Image.Resampling.LANCZOS)
    if number == '02':
        # Remove a circular door fitting touching the outside of the hair.
        cleanup = Image.new('L', original.size, 255)
        ImageDraw.Draw(cleanup).polygon([(365,268),(426,268),(437,295),(418,316),(408,338),(387,348),(362,327)],fill=0)
        cleanup = cleanup.filter(ImageFilter.GaussianBlur(.7))
        mask = arr_image(np.array(mask,dtype=float)*np.array(cleanup,dtype=float)/255)
    mask = mask.filter(ImageFilter.MinFilter(3))
    portrait = original.crop(crop).resize(SIZE, Image.Resampling.LANCZOS)
    matte = mask.crop(crop).resize(SIZE, Image.Resampling.LANCZOS).filter(ImageFilter.GaussianBlur(.65))
    alpha = np.array(matte, dtype=float)/255
    lum = ImageOps.autocontrast(ImageOps.grayscale(portrait), cutoff=(.3,.3))
    lum = lum.filter(ImageFilter.UnsharpMask(radius=1.5, percent=70, threshold=3))
    l = np.array(lum, dtype=float)/255
    # Both source photographs share a photographic silver/plum tonal response.
    l = np.power(l, .95 if number == '01' else .90)
    shadow = np.array([11, 7, 22])
    mid = np.array([106, 91, 119])
    hi = np.array([244, 231, 240])
    lo_mix = np.minimum(l*2, 1)[...,None]
    hi_mix = np.maximum(l*2-1, 0)[...,None]
    subject = shadow*(1-lo_mix) + mid*lo_mix
    subject = subject*(1-hi_mix) + hi*hi_mix
    # Violet from the left and warm peach from the right, kept soft over faces.
    left = np.exp(-((x-.08)/.36)**2) * (0.25 + .75*l)
    right = np.exp(-((x-.92)/.33)**2) * (0.25 + .75*l)
    subject += left[...,None]*np.array([22,-3,48])
    subject += right[...,None]*np.array([45,7,-13])
    subject = np.clip(subject, 0, 255)
    fade = 1 - .98*smooth(.64, .985, y)
    alpha *= fade
    bg = background()
    blur = np.array(matte.filter(ImageFilter.GaussianBlur(24)),dtype=float)/255
    glow = np.clip(blur - np.array(matte,dtype=float)/255,0,1) * (1-smooth(.7,1,y))
    rimcolor = np.array([136,52,228])[None,None,:]*(1-x[...,None]) + np.array([237,112,69])[None,None,:]*x[...,None]
    bg += glow[...,None]*rimcolor*.48
    final = bg*(1-alpha[...,None]) + subject*alpha[...,None]
    # Fine photographic grain; no alteration of facial geometry or expression.
    rng = np.random.default_rng(150 + int(number))
    grain = rng.normal(0, .85, (H,W,1))
    final += grain
    finished = arr_image(final)
    finished.save(OUT / f'founder-{number}-cosmic-v1.png', optimize=True)
    finished.save(PUBLIC / f'founder-{number}-cosmic-v1.webp', quality=91, method=6)
    finished.resize((600,750),Image.Resampling.LANCZOS).save(WORK/f'founder-{number}-preview.webp',quality=85,method=6)
    portrait.resize((600,750),Image.Resampling.LANCZOS).save(WORK/f'founder-{number}-original.webp',quality=82,method=6)
    print(number, SIZE, (PUBLIC/f'founder-{number}-cosmic-v1.webp').stat().st_size)

pair = Image.new('RGB',(1248,798),(9,4,25))
for i in range(2):
    pair.paste(Image.open(WORK/f'founder-{i+1:02}-preview.webp'),(16+i*616,24))
pair.save(OUT/'founder-portrait-pair.jpg',quality=94)
