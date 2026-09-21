#!/usr/bin/env python3
"""VANTA — compose high-fidelity PNG website mockups from cinematic plates."""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent
FONTS = ROOT / "fonts"
PLATES = ROOT / "plates"
OUT = ROOT / "mockups"
OUT.mkdir(parents=True, exist_ok=True)

# --- palette -----------------------------------------------------------------
VOID = (8, 8, 9)
INK = (12, 12, 14)
ANTH = (20, 21, 24)
GRAPH = (38, 40, 44)
GRAPH2 = (52, 54, 58)
MILK = (244, 241, 234)
MILK_SOFT = (210, 206, 196)
MUTED = (132, 128, 120)
DIM = (88, 86, 80)
AMBER = (201, 166, 107)
AMBER_HOT = (232, 198, 128)
HAIR = (255, 255, 255, 36)
NAV_LINKS = ["Collection", "Projects", "Studio", "Technology", "Journal"]


def _font(name: str, size: int, variation: str | None = None) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(FONTS / name), size)
    if variation:
        try:
            font.set_variation_by_name(variation.encode("ascii"))
        except Exception:
            try:
                font.set_variation_by_name(variation)
            except Exception:
                pass
    return font


def serif(size: int) -> ImageFont.FreeTypeFont:
    return _font("InstrumentSerif-Regular.ttf", size)


def serif_i(size: int) -> ImageFont.FreeTypeFont:
    return _font("InstrumentSerif-Italic.ttf", size)


def gloock(size: int) -> ImageFont.FreeTypeFont:
    return _font("Gloock-Regular.ttf", size)


def italiana(size: int) -> ImageFont.FreeTypeFont:
    return _font("Italiana-Regular.ttf", size)


def bodoni(size: int, weight: str = "Regular") -> ImageFont.FreeTypeFont:
    return _font("BodoniModa.ttf", size, weight)


def playfair(size: int, weight: str = "Regular") -> ImageFont.FreeTypeFont:
    return _font("PlayfairDisplay.ttf", size, weight)


def fraunces(size: int, weight: str = "Regular") -> ImageFont.FreeTypeFont:
    return _font("Fraunces.ttf", size, weight)


def news(size: int, weight: str = "Regular") -> ImageFont.FreeTypeFont:
    return _font("Newsreader.ttf", size, weight)


def sans(size: int, weight: str = "Regular") -> ImageFont.FreeTypeFont:
    return _font("InstrumentSans.ttf", size, weight)


def syne(size: int, weight: str = "Regular") -> ImageFont.FreeTypeFont:
    return _font("Syne.ttf", size, weight)


def mono(size: int, weight: str = "Light") -> ImageFont.FreeTypeFont:
    file = {
        "Light": "IBMPlexMono-Light.ttf",
        "Regular": "IBMPlexMono-Regular.ttf",
        "Medium": "IBMPlexMono-Medium.ttf",
    }[weight]
    return _font(file, size)


def plate(name: str) -> Image.Image:
    return Image.open(PLATES / name).convert("RGB")


def crop_frac(img: Image.Image, l: float, t: float, r: float, b: float) -> Image.Image:
    w, h = img.size
    return img.crop((int(l * w), int(t * h), int(r * w), int(b * h)))


def cover(img: Image.Image, tw: int, th: int) -> Image.Image:
    ir = img.width / img.height
    tr = tw / th
    if ir > tr:
        nh, nw = th, int(th * ir)
    else:
        nw, nh = tw, int(tw / ir)
    img = img.resize((max(1, nw), max(1, nh)), Image.Resampling.LANCZOS)
    left = max(0, (img.width - tw) // 2)
    top = max(0, (img.height - th) // 2)
    return img.crop((left, top, left + tw, top + th))


def tracked_width(font: ImageFont.FreeTypeFont, text: str, tracking: float) -> float:
    if not text:
        return 0
    return sum(font.getlength(c) for c in text) + tracking * (len(text) - 1)


def draw_tracked(
    draw: ImageDraw.ImageDraw,
    xy: tuple[float, float],
    text: str,
    font: ImageFont.FreeTypeFont,
    fill,
    tracking: float = 0,
    align: str = "left",
) -> float:
    x, y = xy
    total = tracked_width(font, text, tracking)
    if align == "center":
        x -= total / 2
    elif align == "right":
        x -= total
    cx = x
    for i, ch in enumerate(text):
        draw.text((cx, y), ch, font=font, fill=fill)
        cx += font.getlength(ch) + tracking
    return total


def draw_vertical(
    draw: ImageDraw.ImageDraw,
    x: float,
    y: float,
    text: str,
    font: ImageFont.FreeTypeFont,
    fill,
    tracking: float = 10,
) -> None:
    cy = y
    for ch in text:
        w = font.getlength(ch)
        draw.text((x - w / 2, cy), ch, font=font, fill=fill)
        box = font.getbbox(ch)
        cy += (box[3] - box[1]) + tracking


def wrap_text(text: str, font: ImageFont.FreeTypeFont, max_w: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    cur = ""
    for w in words:
        trial = f"{cur} {w}".strip()
        if font.getlength(trial) <= max_w or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def hgrad(w: int, h: int, c1: tuple[int, int, int], c2: tuple[int, int, int]) -> Image.Image:
    im = Image.new("RGB", (w, h))
    px = im.load()
    for x in range(w):
        t = x / max(1, w - 1)
        c = tuple(int(a + (b - a) * t) for a, b in zip(c1, c2))
        for y in range(h):
            px[x, y] = c
    return im


def glow(canvas: Image.Image, cx: int, cy: int, radius: int, color=AMBER, strength: float = 0.35) -> None:
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    r, g, b = color
    d.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=(r, g, b, int(255 * strength)))
    layer = layer.filter(ImageFilter.GaussianBlur(radius * 0.45))
    canvas.alpha_composite(layer)


class Sheet:
    def __init__(self, w: int, h: int, color=VOID):
        self.im = Image.new("RGBA", (w, h), (*color, 255))
        self.d = ImageDraw.Draw(self.im)
        self.w = w
        self.h = h

    def paste_cover(self, img: Image.Image, box: tuple[int, int, int, int]) -> None:
        x, y, w, h = box
        fitted = cover(img.convert("RGB"), w, h).convert("RGBA")
        self.im.paste(fitted, (x, y))

    def rect(self, box, fill=None, outline=None, width: int = 1) -> None:
        self.d.rectangle(box, fill=fill, outline=outline, width=width)

    def line(self, *xy, fill=GRAPH2, width: int = 1) -> None:
        self.d.line(xy, fill=fill, width=width)

    def hairline_h(self, y: int, x0: int | None = None, x1: int | None = None, fill=GRAPH) -> None:
        self.line((x0 or 0, y), (x1 or self.w, y), fill=fill, width=1)

    def button(self, xy: tuple[int, int], label: str, filled: bool = False, pad_x: int = 26, h: int = 42) -> int:
        font = sans(13, "Medium")
        tw = tracked_width(font, label, 1.1)
        w = int(tw + pad_x * 2)
        x, y = xy
        if filled:
            self.rect((x, y, x + w, y + h), fill=(*MILK, 255))
            draw_tracked(self.d, (x + w / 2, y + 12), label, font, VOID, 1.1, "center")
        else:
            self.rect((x, y, x + w, y + h), outline=(*MILK_SOFT, 160), width=1)
            draw_tracked(self.d, (x + w / 2, y + 12), label, font, MILK, 1.1, "center")
        return w

    def logo_mark(self, x: int, y: int, h: int = 22) -> int:
        w = 10
        self.rect((x, y, x + w, y + h), fill=(*GRAPH, 255))
        slit = 2
        self.rect((x + (w - slit) // 2, y + 3, x + (w + slit) // 2, y + h - 3), fill=(*AMBER, 255))
        return w

    def wordmark(self, x: int, y: int, size: int = 22) -> int:
        font = bodoni(size, "Regular")
        return int(draw_tracked(self.d, (x, y), "VANTA", font, MILK, tracking=size * 0.22))

    def nav(self, active: str | None = None, cta: str = "Design your lighting") -> None:
        y = 28
        mark_w = self.logo_mark(48, 30, 20)
        self.wordmark(48 + mark_w + 12, 30, 20)
        gap = 36
        fonts = [sans(13, "Medium") for _ in NAV_LINKS]
        widths = [tracked_width(f, t, 0.6) for f, t in zip(fonts, NAV_LINKS)]
        total = sum(widths) + gap * (len(NAV_LINKS) - 1)
        cx = (self.w - total) / 2
        for label, font, w in zip(NAV_LINKS, fonts, widths):
            color = MILK if label == active else MUTED
            draw_tracked(self.d, (cx, 34), label, font, color, 0.6)
            if label == active:
                self.line((cx, 56), (cx + w, 56), fill=AMBER, width=1)
            cx += w + gap
        bw = int(tracked_width(sans(12, "Medium"), cta, 1.1) + 44)
        self.button((self.w - 48 - bw, 24), cta, filled=False, pad_x=22, h=38)
        self.hairline_h(76, fill=GRAPH)

    def footer_meta(self, left: str = "45.4642 N   9.1900 E", right: str = "Architectural lighting systems") -> None:
        f = mono(10)
        draw_tracked(self.d, (48, self.h - 28), left, f, DIM, 1.2)
        draw_tracked(self.d, (self.w - 48, self.h - 28), right, f, DIM, 1.2, "right")

    def label(self, xy, text: str, fill=MUTED) -> None:
        draw_tracked(self.d, xy, text.upper(), mono(10), fill, 2.2)

    def save(self, name: str) -> Path:
        rgb = Image.new("RGB", self.im.size, VOID)
        rgb.paste(self.im, mask=self.im.split()[-1])
        path = OUT / name
        rgb.save(path, "PNG", optimize=True)
        print(f"wrote {path.name}  {rgb.size[0]}×{rgb.size[1]}")
        return path


def page_brand() -> None:
    s = Sheet(1920, 1080)
    s.logo_mark(80, 72, 28)
    s.wordmark(108, 72, 28)
    draw_tracked(s.d, (108, 112), "ARCHITECTURAL LIGHTING", mono(11), MUTED, 3.2)

    s.paste_cover(plate("plate-living-night.png"), (80, 180, 980, 780))
    # brand type over a dark veil on the left of the photo
    veil = Image.new("RGBA", (520, 280), (8, 8, 9, 0))
    s.im.alpha_composite(veil, (100, 620))
    draw_tracked(s.d, (110, 680), "LIGHT", gloock(86), MILK, -2)

    # identity column
    x = 1140
    s.label((x, 180), "01  Wordmark")
    s.logo_mark(x, 220, 36)
    draw_tracked(s.d, (x + 28, 224), "VANTA", bodoni(42), MILK, 10)
    draw_tracked(s.d, (x, 280), "An aperture of light in a dark plane.", news(18), MILK_SOFT)

    s.label((x, 360), "02  Palette")
    chips = [
        ("Void", VOID),
        ("Anthracite", ANTH),
        ("Graphite", GRAPH),
        ("Milk", MILK),
        ("Amber", AMBER),
    ]
    for i, (name, color) in enumerate(chips):
        cx = x + i * 132
        s.rect((cx, 396, cx + 112, 468), fill=(*color, 255), outline=(*GRAPH2, 255))
        draw_tracked(s.d, (cx, 480), name, mono(11), MUTED, 1.4)

    s.label((x, 540), "03  Materials")
    mats = plate("plate-materials-tech.png")
    s.paste_cover(crop_frac(mats, 0.0, 0.0, 0.38, 0.42), (x, 576, 150, 110))
    s.paste_cover(crop_frac(mats, 0.38, 0.0, 0.72, 0.42), (x + 166, 576, 150, 110))
    s.paste_cover(crop_frac(mats, 0.72, 0.0, 1.0, 0.42), (x + 332, 576, 150, 110))
    s.paste_cover(crop_frac(mats, 0.18, 0.42, 0.55, 1.0), (x + 498, 576, 150, 110))
    for i, n in enumerate(["Bronze", "Travertine", "Steel", "Optics"]):
        draw_tracked(s.d, (x + i * 166, 696), n, mono(11), MUTED, 1.2)

    s.label((x, 750), "04  Interface")
    s.button((x, 786), "Explore VANTA", filled=True)
    s.button((x + 200, 786), "Design your lighting", filled=False)
    draw_tracked(s.d, (x, 850), "SPACE    ·    MOOD    ·    2700K", mono(11), AMBER, 2.0)

    s.footer_meta()
    s.save("00-brand-system.png")


def page_home_hero() -> None:
    s = Sheet(1920, 1080)
    s.paste_cover(plate("plate-living-night.png"), (0, 0, 1920, 1080))
    # top gradient for nav legibility
    top = Image.new("RGBA", (1920, 160), (0, 0, 0, 0))
    td = ImageDraw.Draw(top)
    for i in range(160):
        a = int(180 * (1 - i / 160))
        td.line([(0, i), (1920, i)], fill=(8, 8, 9, a))
    s.im.alpha_composite(top, (0, 0))
    bot = Image.new("RGBA", (1920, 420), (0, 0, 0, 0))
    bd = ImageDraw.Draw(bot)
    for i in range(420):
        a = int(200 * (i / 420))
        bd.line([(0, i), (1920, i)], fill=(8, 8, 9, a))
    s.im.alpha_composite(bot, (0, 660))

    s.nav()
    s.label((72, 620), "01  /  Atmosphere")
    for i, line in enumerate(["LIGHT", "CHANGES", "EVERYTHING."]):
        draw_tracked(s.d, (72, 650 + i * 78), line, gloock(78), MILK, 0)
    draw_tracked(
        s.d,
        (76, 900),
        "Architectural lighting systems for spaces that must be felt.",
        news(20),
        MILK_SOFT,
    )
    s.button((76, 948), "Explore VANTA", filled=True)
    s.button((300, 948), "Design your lighting", filled=False)

    # scene control
    card = Image.new("RGBA", (400, 170), (8, 8, 9, 150))
    s.im.alpha_composite(card, (1460, 880))
    s.label((1500, 900), "Scene  04")
    draw_tracked(s.d, (1500, 928), "Night", serif(28), MILK)
    draw_tracked(s.d, (1500, 972), "22:14    2700K    Living", mono(11), MUTED, 1.6)
    # ticks
    s.line((1500, 1012), (1780, 1012), fill=GRAPH2, width=1)
    for i, name in enumerate(["Morning", "Day", "Evening", "Night"]):
        tx = 1500 + i * 94
        col = AMBER if name == "Night" else DIM
        s.d.ellipse((tx - 3, 1009, tx + 3, 1015), fill=col)
        draw_tracked(s.d, (tx, 1022), name, mono(9), col, 0.8, "center")
    s.save("01-home-hero.png")


def page_home_atmosphere() -> None:
    s = Sheet(1440, 2680)
    s.nav(active=None)
    # philosophy
    s.label((72, 120), "01  Philosophy")
    for i, line in enumerate(["We do not", "illuminate.", "We compose."]):
        draw_tracked(s.d, (72, 160 + i * 92), line, gloock(86), MILK, -1)
    para = (
        "VANTA designs complete lighting atmospheres for architecture — "
        "reading the space, placing every source, and calibrating the mood "
        "until light becomes the room."
    )
    y = 460
    for line in wrap_text(para, news(22), 520):
        s.d.text((800, y), line, font=news(22), fill=MILK_SOFT)
        y += 34
    s.button((800, y + 24), "Design your space", filled=True)

    # four scenes — editorial, not equal
    s.label((72, 700), "02  Four atmospheres")
    morning = crop_frac(plate("plate-morning-day.png"), 0.0, 0.0, 0.5, 1.0)
    day = crop_frac(plate("plate-morning-day.png"), 0.5, 0.0, 1.0, 1.0)
    evening = plate("plate-restaurant.png")
    night = plate("plate-living-night.png")
    s.paste_cover(night, (72, 748, 820, 520))
    s.paste_cover(morning, (910, 748, 458, 248))
    s.paste_cover(day, (910, 1012, 220, 256))
    s.paste_cover(evening, (1148, 1012, 220, 256))
    s.label((80, 1236), "Night")
    s.label((918, 968), "Morning")
    s.label((918, 1236), "Day")
    s.label((1156, 1236), "Evening")

    # featured
    s.label((72, 1340), "03  Featured objects")
    s.paste_cover(plate("plate-line-product.png"), (72, 1388, 420, 280))
    s.paste_cover(plate("plate-void-product.png"), (510, 1388, 420, 280))
    s.paste_cover(plate("plate-arc-product.png"), (948, 1388, 420, 280))
    for x, name, spec in (
        (72, "LINE", "Linear systems  ·  1800 mm"),
        (510, "VOID", "Aperture ring  ·  Ø 420"),
        (948, "ARC", "Sculptural bronze  ·  1620 mm"),
    ):
        draw_tracked(s.d, (x, 1684), name, italiana(28), MILK, 4)
        draw_tracked(s.d, (x, 1724), spec, mono(11), MUTED, 1.0)
    s.button((72, 1768), "Explore collection", filled=False)

    # project
    s.label((72, 1880), "04  Realized space")
    s.paste_cover(plate("plate-hotel-kyoto.png"), (72, 1924, 1296, 420))
    veil = Image.new("RGBA", (1296, 140), (8, 8, 9, 0))
    vd = ImageDraw.Draw(veil)
    for i in range(140):
        vd.line([(0, i), (1296, i)], fill=(8, 8, 9, int(i / 140 * 190)))
    s.im.alpha_composite(veil, (72, 2204))
    draw_tracked(s.d, (96, 2240), "Atelier Noir  —  Kyoto", serif(32), MILK)
    s.button((96, 2288), "View project", filled=True)

    # configurator strip
    s.label((72, 2400), "05  Light Studio")
    s.paste_cover(plate("plate-studio-room.png"), (72, 2440, 420, 160))
    draw_tracked(s.d, (520, 2470), "Compose a room before a single fixture is installed.", news(22), MILK_SOFT)
    s.line((520, 2530), (980, 2530), fill=GRAPH2, width=1)
    s.d.ellipse((760 - 5, 2525, 760 + 5, 2535), fill=AMBER)
    draw_tracked(s.d, (520, 2548), "Mood", mono(11), MUTED, 1.4)
    draw_tracked(s.d, (900, 2548), "2700K", mono(11), AMBER, 1.4, "right")
    s.button((1040, 2488), "Design your space", filled=True)

    s.footer_meta(right="Home  ·  Atmosphere")
    s.save("02-home-atmosphere.png")


def page_collection() -> None:
    s = Sheet(1920, 1080)
    s.nav("Collection", "Explore collection")
    s.label((72, 110), "Five lighting languages")
    for i, line in enumerate(["THE", "COLLECTION"]):
        draw_tracked(s.d, (72, 140 + i * 70), line, gloock(68), MILK, 1)

    # LINE oversized
    s.paste_cover(plate("plate-line-product.png"), (72, 320, 980, 620))
    draw_tracked(s.d, (96, 820), "LINE", italiana(54), MILK, 8)
    s.label((96, 890), "Blackened steel   ·   1800 mm   ·   2700K   ·   Recessed or pendant")
    # dimension ticks
    s.line((200, 860), (860, 860), fill=GRAPH2, width=1)
    draw_tracked(s.d, (530, 868), "1800 mm", mono(10), MUTED, 1.2, "center")

    # stacked editorial rows
    rows = [
        ("VOID", "A ring that disappears. Only the aperture remains.", "plate-void-product.png"),
        ("ARC", "A bronze gesture. Light as a single curved line.", "plate-arc-product.png"),
        ("LUMEN", "A glass column. Electric white held in smoke.", "plate-lumen-forma.png"),
        ("FORMA", "Stone geometry. A triangular slit of amber.", "plate-lumen-forma.png"),
    ]
    crops = [(0, 0, 1, 1), (0, 0, 1, 1), (0, 0, 0.5, 1), (0.5, 0, 1, 1)]
    y = 120
    for (name, blurb, img), (l, t, r, b) in zip(rows, crops):
        s.line((1120, y), (1850, y), fill=GRAPH, width=1)
        s.paste_cover(crop_frac(plate(img), l, t, r, b), (1120, y + 16, 200, 150))
        draw_tracked(s.d, (1350, y + 36), name, italiana(34), MILK, 5)
        for j, ln in enumerate(wrap_text(blurb, news(18), 470)):
            s.d.text((1350, y + 86 + j * 24), ln, font=news(18), fill=MILK_SOFT)
        y += 188
    s.line((1120, y), (1850, y), fill=GRAPH, width=1)

    s.label((72, 1028), "Material   Size   Color   Temperature   Power   Mounting")
    s.save("03-collection.png")


def page_product() -> None:
    s = Sheet(1920, 1080)
    s.nav("Collection", "Configure this product")
    s.paste_cover(plate("plate-void-product.png"), (40, 100, 980, 720))
    # 360 control
    s.line((180, 850), (860, 850), fill=GRAPH2, width=1)
    s.d.ellipse((500 - 6, 844, 500 + 6, 856), fill=MILK)
    draw_tracked(s.d, (180, 866), "360°", mono(11), MUTED, 1.6)
    draw_tracked(s.d, (860, 866), "Rotate", mono(11), MUTED, 1.6, "right")

    s.label((1120, 120), "Collection  Void")
    draw_tracked(s.d, (1120, 150), "VOID 01", gloock(72), MILK, 2)
    draw_tracked(s.d, (1120, 240), "An industrial-design object that holds darkness.", news(20), MILK_SOFT)

    specs = [
        ("Material", "Blackened aluminium"),
        ("Finish", "Soft matte"),
        ("Diameter", "420 mm"),
        ("Temperature", "2200K – 4000K"),
        ("Power", "18 W"),
        ("Mount", "Ceiling suspended"),
        ("CRI", "98"),
        ("Control", "DALI  ·  Casambi"),
    ]
    y = 300
    for k, v in specs:
        draw_tracked(s.d, (1120, y), k, mono(12), MUTED, 1.2)
        draw_tracked(s.d, (1420, y), v, sans(15), MILK)
        s.line((1120, y + 28), (1840, y + 28), fill=GRAPH, width=1)
        y += 40

    # finishes
    s.label((1120, y + 8), "Finish")
    for i, col in enumerate([(18, 18, 18), (110, 82, 52), (40, 40, 42), (180, 176, 168)]):
        cx = 1120 + i * 42
        s.d.ellipse((cx, y + 36, cx + 28, y + 64), fill=col, outline=GRAPH2)

    s.button((1480, y + 32), "Configure this product", filled=True)

    # technical ring drawing
    cx, cy, rad = 1748, 780, 46
    s.d.ellipse((cx - rad, cy - rad, cx + rad, cy + rad), outline=(*MILK_SOFT, 160), width=1)
    s.d.ellipse((cx - rad + 9, cy - rad + 9, cx + rad - 9, cy + rad - 9), outline=(*AMBER, 180), width=1)
    s.line((cx - rad - 16, cy), (cx + rad + 16, cy), fill=GRAPH2, width=1)
    draw_tracked(s.d, (cx, cy + rad + 6), "Ø 420", mono(11), MUTED, 1.2, "center")

    # before / after
    dark = ImageEnhance.Brightness(cover(plate("plate-living-night.png"), 420, 140)).enhance(0.14)
    s.im.paste(dark.convert("RGBA"), (80, 910))
    s.paste_cover(plate("plate-living-night.png"), (520, 910, 420, 140))
    s.rect((80, 1018, 500, 1048), fill=(*VOID, 200))
    s.rect((520, 1018, 940, 1048), fill=(*VOID, 200))
    s.label((88, 1024), "Without lighting")
    s.label((528, 1024), "With VANTA")
    s.save("04-product-void-01.png")


def page_projects() -> None:
    s = Sheet(1920, 1080)
    s.nav("Projects", "Start a project")
    draw_tracked(s.d, (72, 104), "PROJECTS", gloock(72), (42, 42, 44), 0)
    s.label((72, 186), "Architecture first. Light as the second material.")

    tiles = [
        (72, 230, 900, 430, plate("plate-hotel-kyoto.png"), "Luxury Hotel", "Kyoto"),
        (992, 230, 856, 210, plate("plate-restaurant.png"), "Restaurant", "Paris"),
        (992, 456, 856, 204, crop_frac(plate("plate-gallery.png"), 0.18, 0.08, 0.82, 0.92), "Gallery", "Basel"),
        (72, 680, 436, 230, crop_frac(plate("plate-morning-day.png"), 0.0, 0.0, 0.5, 1), "Private Residence", "Milan"),
        (528, 680, 436, 230, crop_frac(plate("plate-retail-office.png"), 0.0, 0.0, 0.5, 1), "Retail", "London"),
        (984, 680, 430, 230, crop_frac(plate("plate-retail-office.png"), 0.5, 0.0, 1, 1), "Office", "Zurich"),
    ]
    for x, y, w, h, img, title, city in tiles:
        s.paste_cover(img, (x, y, w, h))
        bar = Image.new("RGBA", (w, 36), (8, 8, 9, 150))
        s.im.alpha_composite(bar, (x, y + h - 36))
        s.label((x + 14, y + h - 26), f"{title}   ·   {city}")

    s.label((72, 930), "Architecture without lighting   →   Architecture with VANTA")
    twin = ImageEnhance.Brightness(cover(plate("plate-living-night.png"), 400, 110)).enhance(0.12)
    s.im.paste(twin.convert("RGBA"), (72, 956))
    s.paste_cover(plate("plate-living-night.png"), (488, 956, 400, 110))
    s.label((80, 1036), "Without")
    s.label((496, 1036), "With VANTA")
    s.button((960, 986), "View project", filled=True)
    s.save("05-projects.png")


def page_atelier() -> None:
    s = Sheet(1920, 1080)
    s.nav("Projects", "View project")
    draw_vertical(s.d, 70, 140, "ATELIER", italiana(42), (48, 48, 50), 14)

    meta = [
        ("Object", "Atelier Noir"),
        ("Type", "Luxury Hotel"),
        ("City", "Kyoto"),
        ("Concept", "Light as silence"),
        ("Products", "LINE  ·  VOID  ·  LUMEN"),
        ("Scenes", "Arrival  ·  Dining  ·  Suite  ·  Garden"),
    ]
    y = 140
    for k, v in meta:
        s.label((130, y), k)
        draw_tracked(s.d, (130, y + 22), v, news(22), MILK)
        y += 78
    s.button((130, y + 8), "Start a project", filled=True)

    s.paste_cover(plate("plate-hotel-kyoto.png"), (560, 100, 1320, 760))

    hotel = cover(plate("plate-hotel-kyoto.png"), 1320, 160)
    dark = ImageEnhance.Brightness(ImageEnhance.Color(hotel).enhance(0.15)).enhance(0.22)
    s.im.paste(dark.convert("RGBA"), (560, 880))
    s.paste_cover(crop_frac(plate("plate-hotel-kyoto.png"), 0.28, 0.28, 1.0, 0.88), (1220, 880, 660, 160))
    s.line((1220, 880), (1220, 1040), fill=AMBER, width=1)
    s.label((568, 1012), "Architecture without lighting")
    s.label((1236, 1012), "Architecture with VANTA")
    s.save("06-project-atelier-noir.png")


def page_studio() -> None:
    s = Sheet(1920, 1080)
    s.nav("Studio", "Create your lighting concept")
    # preview
    s.paste_cover(plate("plate-studio-room.png"), (0, 76, 1280, 1004))
    # scene tabs
    for i, name in enumerate(["Morning", "Day", "Evening", "Night"]):
        x = 48 + i * 110
        col = AMBER if name == "Evening" else MUTED
        draw_tracked(s.d, (x, 100), name, mono(11), col, 1.4)
        if name == "Evening":
            s.line((x, 120), (x + 70, 120), fill=AMBER, width=1)
    draw_tracked(s.d, (48, 1028), "X 0.40   Y 1.20   Z 2.80    ·    2700K    ·    Warm Evening", mono(11), MUTED, 1.4)

    # panel
    s.rect((1280, 76, 1920, 1080), fill=(*INK, 255))
    s.line((1280, 76), (1280, 1080), fill=GRAPH, width=1)
    s.label((1320, 110), "Light Studio")
    draw_tracked(s.d, (1320, 140), "Compose", fraunces(40), MILK)

    def field(y, k, v):
        draw_tracked(s.d, (1320, y), k, mono(11), MUTED, 1.6)
        draw_tracked(s.d, (1860, y), v, sans(15), MILK, 0, "right")
        s.line((1320, y + 30), (1860, y + 30), fill=GRAPH, width=1)

    field(220, "Space", "Living")
    field(270, "Mood", "Warm Evening")
    field(320, "Brightness", "72%")
    s.line((1320, 372), (1860, 372), fill=GRAPH2, width=2)
    s.d.ellipse((1320 + int(0.72 * 540) - 6, 366, 1320 + int(0.72 * 540) + 6, 378), fill=MILK)

    field(400, "Color temperature", "2700K")
    grad = hgrad(540, 8, (232, 176, 96), (232, 232, 236))
    s.im.paste(grad.convert("RGBA"), (1320, 448))

    s.label((1320, 490), "Fixtures")
    x = 1320
    for name, on in (("LINE", False), ("VOID", True), ("ARC", False)):
        w = s.button((x, 520), name, filled=on, pad_x=18, h=36)
        x += w + 10

    s.label((1320, 590), "Placement")
    draw_tracked(s.d, (1320, 618), "Ceiling  ·  centered over stone table", news(18), MILK_SOFT)

    s.label((1320, 680), "Scene")
    chips = ["Warm Evening", "Soft Ambient", "Gallery Mode", "Dining", "Focus"]
    x, y = 1320, 710
    for name in chips:
        on = name == "Warm Evening"
        w = s.button((x, y), name, filled=on, pad_x=14, h=34)
        x += w + 8
        if x > 1680:
            x = 1320
            y += 46

    s.button((1320, 980), "Create your lighting concept", filled=True, pad_x=28, h=44)
    s.save("07-light-studio.png")


def _polar(size: int) -> Image.Image:
    im = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    cx = cy = size // 2
    for r in (0.25, 0.5, 0.75, 1.0):
        rad = int(size / 2 * r * 0.92)
        d.ellipse((cx - rad, cy - rad, cx + rad, cy + rad), outline=(*AMBER, 140))
    d.line((cx, 8, cx, size - 8), fill=(*AMBER, 80), width=1)
    d.line((8, cy, size - 8, cy), fill=(*AMBER, 80), width=1)
    pts = []
    for i in range(0, 181, 2):
        a = math.radians(i)
        r = 0.22 + 0.62 * (math.sin(a) ** 1.6)
        pts.append((cx + r * (size / 2) * math.cos(a - math.pi / 2), cy + r * (size / 2) * math.sin(a - math.pi / 2)))
    if len(pts) > 1:
        d.line(pts, fill=(*AMBER, 255), width=3)
    return im


def page_technology() -> None:
    s = Sheet(1920, 1080)
    s.nav("Technology", "Explore technology")
    s.label((72, 120), "Engineering")
    for i, line in enumerate(["LIGHT", "BECOMES", "ATMOSPHERE."]):
        draw_tracked(s.d, (72, 150 + i * 78), line, gloock(72), MILK, -1)

    steps = ["Source", "Optics", "Distribution", "Space", "Atmosphere"]
    x0, x1, y = 820, 1840, 220
    s.line((x0, y), (x1, y), fill=AMBER, width=1)
    for i, name in enumerate(steps):
        x = x0 + i * ((x1 - x0) / 4)
        s.d.ellipse((x - 18, y - 18, x + 18, y + 18), outline=AMBER, width=1)
        s.d.ellipse((x - 4, y - 4, x + 4, y + 4), fill=AMBER)
        draw_tracked(s.d, (x, y + 32), name, mono(12), MILK, 1.6, "center")

    # diagrams
    s.rect((72, 460, 520, 900), outline=GRAPH, width=1)
    s.label((92, 480), "Distribution")
    polar = _polar(380)
    s.im.alpha_composite(polar, (142, 500))

    s.rect((548, 460, 1180, 900), outline=GRAPH, width=1)
    s.label((568, 480), "Optics  ·  linear module")
    s.paste_cover(crop_frac(plate("plate-materials-tech.png"), 0.28, 0.42, 0.78, 0.92), (568, 520, 580, 240))
    draw_tracked(s.d, (568, 780), "LED array  →  lens  →  batwing distribution  →  room", mono(12), MUTED, 1.2)
    s.line((568, 830), (1148, 830), fill=GRAPH2, width=1)
    draw_tracked(s.d, (568, 850), "12°  –  80° beam    ·    142 lm/W    ·    flicker-free", mono(12), MILK_SOFT, 1.2)

    s.rect((1208, 460, 1848, 900), outline=GRAPH, width=1)
    s.label((1228, 480), "Temperature  ·  control")
    grad = hgrad(560, 16, (210, 140, 70), (230, 230, 236))
    s.im.paste(grad.convert("RGBA"), (1228, 530))
    draw_tracked(s.d, (1228, 560), "2200K", mono(11), AMBER, 1.2)
    draw_tracked(s.d, (1788, 560), "4000K", mono(11), MILK, 1.2, "right")

    specs = [("CRI", "98"), ("Efficacy", "142 lm/W"), ("Control", "DALI / Casambi / 0–10V"), ("Lifetime", "60 000 h")]
    yy = 620
    for k, v in specs:
        draw_tracked(s.d, (1228, yy), k, mono(12), MUTED, 1.4)
        draw_tracked(s.d, (1788, yy), v, sans(16), MILK, 0, "right")
        s.line((1228, yy + 30), (1788, yy + 30), fill=GRAPH, width=1)
        yy += 48
    s.button((1228, 830), "Explore technology", filled=True)
    s.save("08-technology.png")


def page_services() -> None:
    s = Sheet(1440, 2480)
    s.nav(cta="Start a project")
    s.label((72, 120), "For architects, designers, and private clients")
    for i, line in enumerate(["FROM SPACE", "TO ATMOSPHERE."]):
        draw_tracked(s.d, (72, 156 + i * 78), line, gloock(72), MILK, -1)
    draw_tracked(
        s.d,
        (72, 340),
        "A complete lighting project — not a product purchase.",
        news(22),
        MILK_SOFT,
    )

    steps = [
        ("01", "Analysis", "We read the architecture, the materials, the path of the body through the room.", "plate-lighting-plan.png", None),
        ("02", "Scenario", "Morning, gathering, dining, night — atmospheres written before fixtures are chosen.", None, crop_frac(plate("plate-morning-day.png"), 0, 0, 0.5, 1)),
        ("03", "Concept", "A light idea with the precision of a drawing and the feeling of a film still.", "plate-living-night.png", None),
        ("04", "Specification", "Every optic, finish, and control protocol named.", "plate-line-product.png", None),
        ("05", "Visualization", "The room is seen at 2200K and at 4000K before it exists.", "plate-restaurant.png", None),
        ("06", "Installation", "Hidden lines, exact apertures, silence in the ceiling.", "plate-install.png", None),
        ("07", "Calibration", "Final night. We dim until the architecture starts to breathe.", "plate-hotel-kyoto.png", None),
    ]
    y = 420
    s.line((110, 420), (110, 2280), fill=GRAPH, width=1)
    for i, (num, title, blurb, pname, img) in enumerate(steps):
        photo = plate(pname) if pname else img
        left = i % 2 == 0
        s.d.ellipse((102, y + 18, 118, y + 34), fill=AMBER)
        if left:
            draw_tracked(s.d, (160, y), num, italiana(36), AMBER, 3)
            draw_tracked(s.d, (160, y + 50), title, serif(36), MILK)
            yy = y + 104
            for ln in wrap_text(blurb, news(18), 420):
                s.d.text((160, yy), ln, font=news(18), fill=MILK_SOFT)
                yy += 26
            s.paste_cover(photo, (720, y, 648, 220))
        else:
            s.paste_cover(photo, (160, y, 648, 220))
            draw_tracked(s.d, (860, y), num, italiana(36), AMBER, 3)
            draw_tracked(s.d, (860, y + 50), title, serif(36), MILK)
            yy = y + 104
            for ln in wrap_text(blurb, news(18), 480):
                s.d.text((860, yy), ln, font=news(18), fill=MILK_SOFT)
                yy += 26
        y += 260

    s.button((72, 2320), "Start a project", filled=True)
    s.footer_meta(right="Services  ·  Lighting design")
    s.save("09-services.png")


def page_journal() -> None:
    s = Sheet(1920, 1080)
    s.nav("Journal", "Read article")
    s.paste_cover(plate("plate-gallery.png"), (0, 76, 1120, 1004))
    veil = Image.new("RGBA", (1120, 360), (0, 0, 0, 0))
    vd = ImageDraw.Draw(veil)
    for i in range(360):
        vd.line([(0, i), (1120, i)], fill=(8, 8, 9, int(i / 360 * 210)))
    s.im.alpha_composite(veil, (0, 720))
    s.label((72, 760), "Essay   ·   14 min   ·   Issue 03")
    for i, line in enumerate(["LIGHT &", "ARCHITECTURE"]):
        draw_tracked(s.d, (72, 790 + i * 70), line, gloock(66), MILK, -1)
    s.button((72, 960), "Read article", filled=True)

    s.rect((1120, 76, 1920, 1080), fill=(*VOID, 255))
    s.line((1120, 76), (1120, 1080), fill=GRAPH, width=1)
    cats = ["Essays", "Materials", "Guides", "Technology"]
    x = 1160
    for c in cats:
        col = MILK if c == "Essays" else MUTED
        w = draw_tracked(s.d, (x, 110), c, mono(11), col, 1.6)
        if c == "Essays":
            s.line((x, 128), (x + w, 128), fill=AMBER, width=1)
        x += w + 28

    items = [
        ("Inside Modern Lighting", "How a single source can hold an entire room.", crop_frac(plate("plate-lumen-forma.png"), 0, 0, 0.5, 1)),
        ("Material Stories", "Bronze, glass, stone — finishes that keep the light.", crop_frac(plate("plate-materials-tech.png"), 0, 0, 0.4, 0.45)),
        ("Design Guides", "A lighting plan is a score, not a shopping list.", plate("plate-lighting-plan.png")),
        ("Technology", "From source to atmosphere, in five movements.", crop_frac(plate("plate-materials-tech.png"), 0.72, 0.55, 1, 1)),
        ("Projects", "Atelier Noir and the quiet hotel.", plate("plate-hotel-kyoto.png")),
    ]
    y = 170
    for title, deck, img in items:
        s.line((1160, y), (1860, y), fill=GRAPH, width=1)
        s.paste_cover(img, (1160, y + 16, 160, 120))
        draw_tracked(s.d, (1350, y + 28), title, serif(24), MILK)
        for j, ln in enumerate(wrap_text(deck, news(16), 500)):
            s.d.text((1350, y + 68 + j * 22), ln, font=news(16), fill=MILK_SOFT)
        y += 160
    s.save("10-journal.png")


def page_article() -> None:
    s = Sheet(1440, 2400)
    s.wordmark(72, 36, 20)
    s.logo_mark(48, 36, 20)
    draw_tracked(s.d, (1368, 40), "Journal  ·  Issue 03", mono(11), MUTED, 1.4, "right")
    s.hairline_h(76, fill=GRAPH)

    s.paste_cover(crop_frac(plate("12-journal-article.png"), 0.48, 0.02, 1.0, 0.28), (720, 76, 720, 420))
    s.label((72, 140), "Essay")
    for i, line in enumerate(["When light", "becomes", "structure"]):
        draw_tracked(s.d, (72, 180 + i * 78), line, gloock(64), MILK, -1)

    s.d.text((72, 460), "Atmosphere is a material.", font=serif_i(40), fill=MILK)

    col_w = 560
    left = (
        "Architectural lighting is not the art of making rooms brighter. "
        "It is the discipline of deciding what remains in shadow, and what "
        "is allowed to appear. VANTA treats every source as a structural line."
    )
    right = (
        "In the absence of daylight, artificial light must sculpt the room. "
        "A hidden linear slot can do the work of a wall. A single ring can "
        "hold a table the way a column holds a roof."
    )
    y = 540
    for i, ln in enumerate(wrap_text(left, news(20), col_w)):
        s.d.text((72, y + i * 30), ln, font=news(20), fill=MILK_SOFT)
    for i, ln in enumerate(wrap_text(right, news(20), col_w)):
        s.d.text((808, y + i * 30), ln, font=news(20), fill=MILK_SOFT)

    s.paste_cover(plate("plate-restaurant.png"), (72, 820, 1296, 520))
    s.label((72, 1360), "Private dining  ·  2700K  ·  LINE concealed")

    s.paste_cover(plate("plate-lighting-plan.png"), (72, 1420, 720, 380))
    s.paste_cover(crop_frac(plate("12-journal-article.png"), 0.0, 0.80, 1.0, 0.94), (808, 1420, 560, 380))
    s.label((72, 1816), "Lighting plan")
    s.label((808, 1816), "Bronze, brushed")

    s.d.text((72, 1900), "Next essay", font=serif_i(28), fill=MILK)
    draw_tracked(s.d, (72, 1948), "Inside Modern Lighting", serif(36), MILK)
    s.button((72, 2020), "Read article", filled=False)
    s.button((280, 2020), "Start a project", filled=True)
    s.footer_meta(right="Journal  ·  Light & Architecture")
    s.save("11-journal-article.png")


def page_contact() -> None:
    s = Sheet(1920, 1080)
    s.paste_cover(plate("plate-living-night.png"), (0, 0, 1920, 1080))
    top = Image.new("RGBA", (1920, 140), (0, 0, 0, 0))
    td = ImageDraw.Draw(top)
    for i in range(140):
        td.line([(0, i), (1920, i)], fill=(8, 8, 9, int(170 * (1 - i / 140))))
    s.im.alpha_composite(top)
    s.nav(cta="Start your project")

    s.label((80, 280), "Studio  ·  Milan")
    for i, line in enumerate(["LET'S CREATE", "THE LIGHT."]):
        draw_tracked(s.d, (80, 320 + i * 92), line, gloock(78), MILK, -1)
    info = [
        ("Email", "studio@vanta.light"),
        ("WhatsApp", "+39 02 9475 1100"),
        ("Telegram", "@vanta.studio"),
        ("Studio", "Via Piacenza 8, Milan"),
    ]
    y = 540
    for k, v in info:
        draw_tracked(s.d, (84, y), k, mono(11), MUTED, 1.6)
        draw_tracked(s.d, (84, y + 22), v, news(20), MILK)
        y += 70

    # form panel
    panel = Image.new("RGBA", (560, 820), (12, 12, 14, 210))
    s.im.alpha_composite(panel, (1280, 140))
    s.rect((1280, 140, 1840, 960), outline=(*GRAPH2, 180), width=1)
    fields = [
        "Name",
        "Email",
        "Phone",
        "Project type",
        "Location",
        "Space type",
        "Approximate area",
        "Message",
    ]
    y = 180
    for i, f in enumerate(fields):
        h = 86 if f == "Message" else 58
        draw_tracked(s.d, (1310, y), f, mono(11), MUTED, 1.6)
        s.line((1310, y + h - 10), (1810, y + h - 10), fill=GRAPH2, width=1)
        y += h
    s.button((1310, 880), "Start your project", filled=True, pad_x=28, h=44)
    s.save("12-contact.png")


def page_mobile() -> None:
    s = Sheet(390, 844)
    s.paste_cover(plate("plate-living-night.png"), (0, 0, 390, 844))
    top = Image.new("RGBA", (390, 90), (0, 0, 0, 0))
    td = ImageDraw.Draw(top)
    for i in range(90):
        td.line([(0, i), (390, i)], fill=(8, 8, 9, int(160 * (1 - i / 90))))
    s.im.alpha_composite(top)
    bot = Image.new("RGBA", (390, 340), (0, 0, 0, 0))
    bd = ImageDraw.Draw(bot)
    for i in range(340):
        bd.line([(0, i), (390, i)], fill=(8, 8, 9, int(i / 340 * 210)))
    s.im.alpha_composite(bot, (0, 504))

    s.logo_mark(20, 24, 16)
    s.wordmark(40, 24, 16)
    # menu marks
    s.line((350, 30), (372, 30), fill=MILK, width=1)
    s.line((350, 36), (372, 36), fill=MILK, width=1)

    s.label((24, 480), "01  /  Atmosphere")
    for i, line in enumerate(["LIGHT", "CHANGES", "EVERYTHING."]):
        draw_tracked(s.d, (24, 508 + i * 52), line, gloock(40), MILK, -0.5)
    draw_tracked(s.d, (24, 680), "Architectural lighting systems.", news(14), MILK_SOFT)
    s.button((24, 720), "Explore VANTA", filled=True, pad_x=18, h=38)
    s.button((24, 770), "Design your lighting", filled=False, pad_x=18, h=38)
    s.save("13-home-mobile.png")


def main() -> None:
    page_brand()
    page_home_hero()
    page_home_atmosphere()
    page_collection()
    page_product()
    page_projects()
    page_atelier()
    page_studio()
    page_technology()
    page_services()
    page_journal()
    page_article()
    page_contact()
    page_mobile()
    print("done", len(list(OUT.glob("*.png"))), "mockups")


if __name__ == "__main__":
    main()
