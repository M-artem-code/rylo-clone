#!/usr/bin/env python3
"""Tesla Volt — static PNG landing mockups. Design boards only, not a website."""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent
PHOTOS = ROOT / "photos"
FONTS = ROOT / "fonts"
OUT = ROOT / "screens"
INTER = Path("/usr/share/fonts/truetype/macos")

W, H = 1920, 1080
PAD = 96
CONTENT = W - PAD * 2
HEADER_H = 80

BG = (11, 13, 16, 255)
BG_SOFT = (16, 18, 22, 255)
SURFACE = (22, 25, 31, 230)
SURFACE_SOLID = (20, 23, 28, 255)
TEXT = (246, 247, 248, 255)
MUTED = (156, 163, 173, 255)
MUTED2 = (108, 116, 126, 255)
GOLD = (230, 195, 74, 255)
GOLD_DIM = (184, 154, 52, 255)
LINE = (255, 255, 255, 28)
WHITE = (255, 255, 255, 255)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    if name.startswith("U"):
        path = FONTS / {
            "U": "Unbounded-Regular.ttf",
            "UM": "Unbounded-Medium.ttf",
            "USB": "Unbounded-SemiBold.ttf",
            "UB": "Unbounded-Bold.ttf",
            "UL": "Unbounded-Light.ttf",
        }[name]
    else:
        path = INTER / {
            "R": "Inter-Regular.ttf",
            "M": "Inter-Medium.ttf",
            "SB": "Inter-SemiBold.ttf",
            "B": "Inter-Bold.ttf",
        }[name]
    return ImageFont.truetype(str(path), size)


def photo(name: str) -> Image.Image:
    return Image.open(PHOTOS / name).convert("RGBA")


def cover(img: Image.Image, w: int, h: int) -> Image.Image:
    iw, ih = img.size
    scale = max(w / iw, h / ih)
    nw, nh = int(iw * scale) + 1, int(ih * scale) + 1
    img = img.resize((nw, nh), Image.Resampling.LANCZOS)
    left, top = (nw - w) // 2, (nh - h) // 2
    return img.crop((left, top, left + w, top + h))


def new_canvas(color: tuple[int, int, int, int] = BG) -> Image.Image:
    return Image.new("RGBA", (W, H), color)


def overlay(base: Image.Image) -> tuple[Image.Image, ImageDraw.ImageDraw]:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    return layer, ImageDraw.Draw(layer)


def apply(base: Image.Image, layer: Image.Image) -> Image.Image:
    return Image.alpha_composite(base, layer)


def rounded_mask(size: tuple[int, int], radius: int) -> Image.Image:
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius, fill=255)
    return m


def paste_round(base: Image.Image, img: Image.Image, box: tuple[int, int, int, int], radius: int) -> None:
    x0, y0, x1, y1 = box
    cropped = cover(img, x1 - x0, y1 - y0)
    mask = rounded_mask(cropped.size, radius)
    base.paste(cropped, (x0, y0), mask)


def shadow(base: Image.Image, box: tuple[int, int, int, int], radius: int = 18, blur: int = 18, alpha: int = 90, dy: int = 10) -> Image.Image:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    x0, y0, x1, y1 = box
    d.rounded_rectangle((x0, y0 + dy, x1, y1 + dy), radius, fill=(0, 0, 0, alpha))
    return apply(base, layer.filter(ImageFilter.GaussianBlur(blur)))


def glass(base: Image.Image, box: tuple[int, int, int, int], radius: int = 18, fill: tuple[int, int, int, int] = (18, 20, 24, 168), stroke: tuple[int, int, int, int] = LINE) -> Image.Image:
    layer, d = overlay(base)
    d.rounded_rectangle(box, radius, fill=fill, outline=stroke, width=1)
    return apply(base, layer)


def rect(base: Image.Image, box: tuple[int, int, int, int], fill: tuple[int, int, int, int], radius: int = 0, stroke: tuple[int, int, int, int] | None = None, width: int = 1) -> Image.Image:
    layer, d = overlay(base)
    if radius:
        d.rounded_rectangle(box, radius, fill=fill, outline=stroke, width=width)
    else:
        d.rectangle(box, fill=fill, outline=stroke, width=width)
    return apply(base, layer)


def line(base: Image.Image, a: tuple[int, int], b: tuple[int, int], fill: tuple[int, int, int, int] = LINE, width: int = 1) -> Image.Image:
    layer, d = overlay(base)
    d.line((a, b), fill=fill, width=width)
    return apply(base, layer)


def text(
    base: Image.Image,
    xy: tuple[float, float],
    value: str,
    fnt: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int, int] = TEXT,
    anchor: str = "lt",
    tracking: float = 0,
) -> Image.Image:
    layer, d = overlay(base)
    if not tracking:
        d.text(xy, value, font=fnt, fill=fill, anchor=anchor)
        return apply(base, layer)
    chars = list(value)
    widths = [fnt.getlength(ch) + tracking for ch in chars]
    total = sum(widths) - tracking
    x, y = xy
    if "m" in anchor:
        x -= total / 2
    elif "r" in anchor:
        x -= total
    ax = "lm" if "m" in anchor and "t" not in anchor and "b" not in anchor else (
        "lb" if "b" in anchor else "lt"
    )
    cursor = x
    for ch, wch in zip(chars, widths):
        d.text((cursor, y), ch, font=fnt, fill=fill, anchor=ax[0] + ax[1])
        cursor += wch
    return apply(base, layer)


def text_width(value: str, fnt: ImageFont.FreeTypeFont, tracking: float = 0) -> float:
    if not tracking:
        return fnt.getlength(value)
    return sum(fnt.getlength(ch) + tracking for ch in value) - tracking


def wrap(value: str, fnt: ImageFont.FreeTypeFont, max_w: float) -> list[str]:
    words = value.split()
    lines: list[str] = []
    cur = ""
    for word in words:
        test = (cur + " " + word).strip()
        if fnt.getlength(test) <= max_w:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def multiline(
    base: Image.Image,
    xy: tuple[int, int],
    value: str,
    fnt: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int, int],
    max_w: float,
    leading: float,
) -> tuple[Image.Image, int]:
    x, y = xy
    lines = wrap(value, fnt, max_w)
    for i, ln in enumerate(lines):
        base = text(base, (x, y + int(i * leading)), ln, fnt, fill)
    return base, y + int(len(lines) * leading)


def gradient(size: tuple[int, int], left: tuple[int, int, int, int], right: tuple[int, int, int, int], vertical: bool = False) -> Image.Image:
    w, h = size
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    px = img.load()
    steps = h if vertical else w
    for i in range(steps):
        t = i / max(steps - 1, 1)
        col = tuple(int(left[c] + (right[c] - left[c]) * t) for c in range(4))
        if vertical:
            for x in range(w):
                px[x, i] = col
        else:
            for y in range(h):
                px[i, y] = col
    return img


def draw_logo(base: Image.Image, xy: tuple[int, int], size: int = 36, with_word: bool = True) -> Image.Image:
    x, y = xy
    layer, d = overlay(base)
    pad = 1
    d.rounded_rectangle((x, y, x + size, y + size), radius=size * 0.28, outline=GOLD, width=2)
    cx, cy = x + size / 2, y + size * 0.46
    r = size * 0.28
    d.arc((cx - r, cy - r, cx + r, cy + r), 200, 340, fill=GOLD, width=2)
    bar_w = max(2, int(size * 0.07))
    d.rounded_rectangle((cx - bar_w / 2, y + size * 0.42, cx + bar_w / 2, y + size * 0.78), 1, fill=GOLD)
    base = apply(base, layer)
    if with_word:
        base = text(base, (x + size + 12, y + size / 2 - 1), "TESLA VOLT", font("SB", 15), TEXT, anchor="lm", tracking=1.6)
    return base


def button(
    base: Image.Image,
    xy: tuple[int, int],
    label: str,
    primary: bool = True,
    pad_x: int = 22,
    h: int = 46,
) -> tuple[Image.Image, int]:
    fnt = font("M", 14)
    tw = fnt.getlength(label)
    bw = int(tw + pad_x * 2)
    x, y = xy
    if primary:
        base = rect(base, (x, y, x + bw, y + h), GOLD, radius=24)
        base = text(base, (x + bw / 2, y + h / 2), label, fnt, (20, 16, 6, 255), anchor="mm")
    else:
        base = rect(base, (x, y, x + bw, y + h), (255, 255, 255, 10), radius=24, stroke=(255, 255, 255, 46))
        base = text(base, (x + bw / 2, y + h / 2), label, fnt, TEXT, anchor="mm")
    return base, bw


def header(base: Image.Image, active: str | None = None, ghost: bool = False) -> Image.Image:
    if ghost:
        fade = gradient((W, HEADER_H + 40), (11, 13, 16, 160), (11, 13, 16, 0), vertical=True)
        base.paste(fade, (0, 0), fade)
    else:
        base = rect(base, (0, 0, W, HEADER_H), (11, 13, 16, 230))
        base = line(base, (0, HEADER_H), (W, HEADER_H), (255, 255, 255, 18))
    base = draw_logo(base, (PAD, 22), 36)
    links = ["Решения", "Система", "Проекты", "Процесс", "Контакты"]
    fnt = font("M", 14)
    x = 430
    for name in links:
        fill = TEXT if name == active else MUTED
        base = text(base, (x, HEADER_H / 2), name, fnt, fill, anchor="lm")
        x += text_width(name, fnt) + 36
    label = "Рассчитать проект"
    bw = int(font("M", 14).getlength(label) + 44)
    base, _ = button(base, (W - PAD - bw, 17), label, True, pad_x=22, h=46)
    return base


def eyebrow(base: Image.Image, xy: tuple[int, int], value: str) -> Image.Image:
    x, y = xy
    layer, d = overlay(base)
    d.ellipse((x, y + 4, x + 7, y + 11), fill=GOLD)
    base = apply(base, layer)
    return text(base, (x + 16, y), value.upper(), font("M", 12), GOLD, tracking=2.4)


def save(img: Image.Image, name: str) -> Path:
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / name
    img.convert("RGB").save(path, "PNG", optimize=True)
    print("wrote", path)
    return path


def screen_hero() -> Image.Image:
    img = cover(photo("photo-hero-house-only.png"), W, H)
    left = gradient((1100, H), (8, 9, 11, 210), (8, 9, 11, 0))
    img.paste(left, (0, 0), left)
    bottom = gradient((W, 280), (8, 9, 11, 0), (8, 9, 11, 170), vertical=True)
    img.paste(bottom, (0, H - 280), bottom)
    img = header(img, ghost=True)
    img = eyebrow(img, (PAD, 250), "Инженерная компания")
    img = text(img, (PAD, 300), "Энергия вашего дома.", font("UL", 56), TEXT)
    img = text(img, (PAD, 376), "Полностью под контролем.", font("UM", 56), TEXT)
    img, _ = multiline(
        img,
        (PAD, 470),
        "Проектируем и устанавливаем солнечные электростанции, системы бесперебойного питания и Умный дом под ключ.",
        font("R", 18),
        MUTED,
        620,
        28,
    )
    img, bw = button(img, (PAD, 560), "Рассчитать проект", True, pad_x=26, h=50)
    img, _ = button(img, (PAD + bw + 14, 560), "Посмотреть решения", False, pad_x=26, h=50)

    chips = [("Автономия", "объект работает независимо"), ("Резерв 24/7", "питание без перерывов"), ("Под ключ", "от расчёта до запуска")]
    panel_y = 930
    img = glass(img, (PAD, panel_y, W - PAD, 1044), 20, (12, 14, 17, 150), (255, 255, 255, 32))
    slot = CONTENT // 3
    for i, (title, sub) in enumerate(chips):
        x = PAD + 36 + i * slot
        layer, d = overlay(img)
        d.ellipse((x, panel_y + 38, x + 8, panel_y + 46), fill=GOLD)
        img = apply(img, layer)
        img = text(img, (x + 20, panel_y + 30), title, font("M", 16), TEXT)
        img = text(img, (x + 20, panel_y + 56), sub, font("R", 13), MUTED)
        if i < 2:
            img = line(img, (PAD + (i + 1) * slot, panel_y + 28), (PAD + (i + 1) * slot, panel_y + 90), (255, 255, 255, 22))
    return img


def screen_solutions() -> Image.Image:
    img = new_canvas()
    img = header(img, "Решения")
    img = eyebrow(img, (PAD, 118), "Направления")
    img = text(img, (PAD, 150), "Решения Tesla Volt", font("UM", 40), TEXT)
    img = text(img, (PAD, 208), "Инженерные системы для частных и коммерческих объектов.", font("R", 17), MUTED)

    cards = [
        ("photo-solar-roof.png", "01", "Солнечные электростанции", "Проектирование и монтаж автономных и гибридных станций под архитектуру объекта."),
        ("photo-ups-equipment.png", "02", "ИБП и резервное питание", "Бесперебойное питание дома, офиса или ресторана при отключении сети."),
        ("photo-battery-room.png", "03", "Системы хранения энергии", "Аккумуляторные массивы, которые держат резерв и сглаживают пики потребления."),
        ("photo-interior-evening.png", "04", "Умный дом", "Освещение, климат, безопасность и энергия в одном спокойном интерфейсе."),
        ("photo-premium-estate.png", "05", "Комплексные решения", "Солнце, резерв, хранение и автоматизация — одна система под ключ."),
    ]

    # 3 + 2
    gap = 20
    top_w = (CONTENT - gap * 2) // 3
    top_h = 430
    y0 = 270
    for i, (ph, num, title, desc) in enumerate(cards[:3]):
        x = PAD + i * (top_w + gap)
        box = (x, y0, x + top_w, y0 + top_h)
        img = shadow(img, box, 18, 16, 80, 8)
        paste_round(img, photo(ph), (x, y0, x + top_w, y0 + 230), 18)
        # square the photo top corners only by overlaying bottom card body
        img = rect(img, (x, y0 + 210, x + top_w, y0 + top_h), SURFACE_SOLID, radius=18)
        img = rect(img, (x, y0 + 210, x + top_w, y0 + 228), SURFACE_SOLID, radius=0)
        img = text(img, (x + 24, y0 + 236), num, font("M", 12), GOLD, tracking=1.5)
        img = text(img, (x + 24, y0 + 262), title, font("SB", 18), TEXT)
        img, _ = multiline(img, (x + 24, y0 + 300), desc, font("R", 14), MUTED, top_w - 48, 22)

    bot_w = (CONTENT - gap) // 2
    bot_h = 250
    y1 = y0 + top_h + 20
    for i, (ph, num, title, desc) in enumerate(cards[3:]):
        x = PAD + i * (bot_w + gap)
        box = (x, y1, x + bot_w, y1 + bot_h)
        img = shadow(img, box, 18, 16, 70, 8)
        img = rect(img, box, SURFACE_SOLID, radius=18)
        paste_round(img, photo(ph), (x + 16, y1 + 16, x + 250, y1 + bot_h - 16), 14)
        tx = x + 274
        img = text(img, (tx, y1 + 40), num, font("M", 12), GOLD, tracking=1.5)
        img = text(img, (tx, y1 + 72), title, font("SB", 22), TEXT)
        img, _ = multiline(img, (tx, y1 + 116), desc, font("R", 15), MUTED, bot_w - 300, 24)
    return img


def screen_numbers() -> Image.Image:
    img = cover(photo("photo-hero-house-only.png"), W, H)
    dim = Image.new("RGBA", (W, H), (8, 9, 11, 214))
    img = apply(img, dim)
    img = header(img, ghost=True)
    img = eyebrow(img, (PAD, 140), "Ориентиры концепции")
    img = text(img, (PAD, 176), "Энергия в цифрах", font("UM", 42), TEXT)
    img = text(
        img,
        (PAD, 236),
        "Цифры задают характер системы. Это визуальные ориентиры концепции, а не подтверждённые показатели.",
        font("R", 16),
        MUTED,
    )

    stats = [
        ("100%", "индивидуальный проект"),
        ("24/7", "резервное питание"),
        ("10+", "лет инженерного опыта"),
        ("под ключ", "от проекта до запуска"),
    ]
    gap = 22
    cw = (CONTENT - gap * 3) // 4
    y = 360
    for i, (num, label) in enumerate(stats):
        x = PAD + i * (cw + gap)
        box = (x, y, x + cw, y + 420)
        img = glass(img, box, 22, (16, 18, 22, 150), (255, 255, 255, 28))
        img = text(img, (x + 32, y + 70), f"0{i + 1}", font("M", 13), GOLD, tracking=2)
        size = 40 if len(num) > 5 else 64
        img = text(img, (x + 32, y + 168), num, font("UL", size), TEXT)
        img = line(img, (x + 32, y + 270), (x + 72, y + 270), GOLD, 2)
        img, _ = multiline(img, (x + 32, y + 300), label, font("R", 18), MUTED, cw - 64, 26)
    return img


def _node_icon(d: ImageDraw.ImageDraw, kind: str, cx: int, cy: int) -> None:
    g = GOLD
    if kind == "sun":
        d.ellipse((cx - 10, cy - 10, cx + 10, cy + 10), outline=g, width=2)
        for a in range(0, 360, 45):
            rad = math.radians(a)
            r1, r2 = 14, 19
            d.line(
                (cx + r1 * math.cos(rad), cy + r1 * math.sin(rad), cx + r2 * math.cos(rad), cy + r2 * math.sin(rad)),
                fill=g,
                width=2,
            )
    elif kind == "panel":
        d.rounded_rectangle((cx - 16, cy - 12, cx + 16, cy + 12), 3, outline=g, width=2)
        d.line((cx - 16, cy, cx + 16, cy), fill=g, width=1)
        d.line((cx - 5, cy - 12, cx - 5, cy + 12), fill=g, width=1)
        d.line((cx + 5, cy - 12, cx + 5, cy + 12), fill=g, width=1)
    elif kind == "inv":
        d.rounded_rectangle((cx - 16, cy - 12, cx + 16, cy + 12), 4, outline=g, width=2)
        d.arc((cx - 8, cy - 6, cx + 2, cy + 6), 0, 180, fill=g, width=2)
        d.arc((cx - 2, cy - 6, cx + 8, cy + 6), 180, 360, fill=g, width=2)
    elif kind == "bat":
        d.rounded_rectangle((cx - 14, cy - 10, cx + 12, cy + 10), 3, outline=g, width=2)
        d.rectangle((cx + 12, cy - 4, cx + 16, cy + 4), fill=g)
        d.rectangle((cx - 10, cy - 5, cx - 4, cy + 5), fill=g)
    elif kind == "home":
        d.polygon([(cx, cy - 14), (cx + 16, cy - 2), (cx + 16, cy + 12), (cx - 16, cy + 12), (cx - 16, cy - 2)], outline=g)
        d.rectangle((cx - 4, cy + 2, cx + 4, cy + 12), outline=g, width=2)
    else:
        d.rounded_rectangle((cx - 8, cy - 8, cx - 1, cy - 1), 2, outline=g, width=2)
        d.rounded_rectangle((cx + 1, cy - 8, cx + 8, cy - 1), 2, outline=g, width=2)
        d.rounded_rectangle((cx - 8, cy + 1, cx - 1, cy + 8), 2, outline=g, width=2)
        d.rounded_rectangle((cx + 1, cy + 1, cx + 8, cy + 8), 2, outline=g, width=2)


def screen_system() -> Image.Image:
    bg = cover(photo("photo-solar-roof.png"), W, H)
    img = apply(bg, Image.new("RGBA", (W, H), (9, 10, 12, 198)))
    img = header(img, "Система", ghost=True)
    img = eyebrow(img, (PAD, 130), "Архитектура")
    img = text(img, (PAD, 166), "Как работает система", font("UM", 40), TEXT)
    img = text(
        img,
        (PAD, 226),
        "Солнце собирается на кровле, преобразуется, сохраняется и распределяется по дому — включая умные устройства.",
        font("R", 17),
        MUTED,
    )

    nodes = [
        ("sun", "Солнце", "источник"),
        ("panel", "Панели", "генерация"),
        ("inv", "Инвертор", "преобразование"),
        ("bat", "Аккумулятор", "хранение"),
        ("home", "Дом", "потребление"),
        ("dev", "Устройства", "автоматизация"),
    ]
    y = 430
    n = len(nodes)
    usable = CONTENT - 80
    step = usable / (n - 1)
    xs = [PAD + 40 + int(i * step) for i in range(n)]

    img = line(img, (xs[0], y), (xs[-1], y), (230, 195, 74, 70), 2)
    layer, d = overlay(img)
    for i in range(n - 1):
        for t in (0.28, 0.5, 0.72):
            px = xs[i] + (xs[i + 1] - xs[i]) * t
            r = 3 if t != 0.5 else 4
            d.ellipse((px - r, y - r, px + r, y + r), fill=GOLD)
    img = apply(img, layer)

    for x, (kind, title, sub) in zip(xs, nodes):
        img = shadow(img, (x - 70, y - 70, x + 70, y + 70), 40, 14, 70, 6)
        img = rect(img, (x - 70, y - 70, x + 70, y + 70), SURFACE_SOLID, radius=40, stroke=(230, 195, 74, 80))
        layer, d = overlay(img)
        _node_icon(d, kind, x, y)
        img = apply(img, layer)
        img = text(img, (x, y + 110), title, font("SB", 16), TEXT, anchor="mt")
        img = text(img, (x, y + 138), sub, font("R", 13), MUTED, anchor="mt")

    note = "Поток энергии: генерация → преобразование → хранение → дом → сценарии умного дома"
    img = glass(img, (PAD, 880, W - PAD, 980), 16, (18, 20, 24, 200))
    img = text(img, (W / 2, 930), note, font("R", 16), MUTED, anchor="mm")
    return img


def _mini_chart(size: tuple[int, int]) -> Image.Image:
    w, h = size
    chart = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(chart)
    vals = [0.22, 0.34, 0.58, 0.80, 0.96, 0.88, 0.62, 0.48, 0.70, 0.54, 0.36, 0.24]
    coords = []
    for i, v in enumerate(vals):
        x = 8 + i * (w - 16) / (len(vals) - 1)
        y = h - 14 - v * (h - 28)
        coords.append((x, y))
    fill_pts = [(coords[0][0], h - 8), *coords, (coords[-1][0], h - 8)]
    d.polygon(fill_pts, fill=(230, 195, 74, 28))
    d.line(coords, fill=GOLD, width=2, joint="curve")
    for x, y in coords[::2]:
        d.ellipse((x - 3, y - 3, x + 3, y + 3), fill=GOLD)
    return chart


def screen_smarthome() -> Image.Image:
    img = new_canvas()
    img = header(img, "Система")
    img = eyebrow(img, (PAD, 118), "Автоматизация")
    img = text(img, (PAD, 152), "Умный дом", font("UM", 40), TEXT)
    img = text(img, (PAD, 210), "Один интерфейс для света, климата, безопасности и энергии.", font("R", 17), MUTED)

    paste_round(img, photo("photo-interior-evening.png"), (PAD, 270, 820, 1000), 22)

    dash = (860, 270, W - PAD, 1000)
    img = shadow(img, dash, 22, 18, 90, 8)
    img = glass(img, dash, 22, (16, 18, 22, 235), (255, 255, 255, 28))
    img = text(img, (892, 300), "TESLA VOLT HOME", font("M", 12), GOLD, tracking=2.2)
    img = text(img, (892, 328), "Резиденция · Основной контур", font("SB", 22), TEXT)
    img = text(img, (892, 364), "Все системы в норме  ·  автономный режим", font("R", 13), MUTED)

    tiles = [
        ("Освещение", "Сцены · 68%", "тёплый вечер"),
        ("Климат", "22.5 °C", "тихо, стабильно"),
        ("Безопасность", "Охрана вкл.", "8 датчиков"),
        ("Электропитание", "Резерв 94%", "сеть + батарея"),
        ("Ворота", "Закрыты", "подъезд"),
        ("Камеры", "6 онлайн", "периметр"),
        ("Зарядка авто", "78% · 11 кВт", "ночная сессия"),
        ("Потребление", "3.2 кВт", "ниже обычного"),
    ]
    tw, th, gap = 220, 108, 14
    for i, (title, value, sub) in enumerate(tiles):
        col, row = i % 4, i // 4
        x = 892 + col * (tw + gap)
        y = 400 + row * (th + gap)
        img = rect(img, (x, y, x + tw, y + th), (255, 255, 255, 10), radius=16, stroke=(255, 255, 255, 20))
        layer, d = overlay(img)
        d.ellipse((x + tw - 24, y + 18, x + tw - 14, y + 28), fill=GOLD)
        img = apply(img, layer)
        img = text(img, (x + 16, y + 14), title, font("R", 12), MUTED)
        img = text(img, (x + 16, y + 40), value, font("SB", 17), TEXT)
        img = text(img, (x + 16, y + 74), sub, font("R", 12), MUTED2)

    chart_box = (892, 640, W - PAD - 32, 970)
    img = rect(img, chart_box, (255, 255, 255, 8), radius=16, stroke=(255, 255, 255, 18))
    img = text(img, (916, 660), "Поток энергии за сутки", font("M", 14), TEXT)
    img = text(img, (916, 686), "генерация · хранение · дом", font("R", 12), MUTED)
    img = text(img, (W - PAD - 56, 672), "12.4 кВт сейчас", font("SB", 14), GOLD, anchor="rm")
    chart = _mini_chart((W - PAD - 32 - 892 - 48, 230))
    img.paste(chart, (916, 716), chart)
    return img


def screen_projects() -> Image.Image:
    img = new_canvas()
    img = header(img, "Проекты")
    img = eyebrow(img, (PAD, 118), "Портфолио")
    img = text(img, (PAD, 152), "Реализованные проекты", font("UM", 40), TEXT)
    img = text(img, (PAD, 210), "Архитектурные объекты, для которых Tesla Volt собирает энергетический контур.", font("R", 17), MUTED)

    items = [
        ("photo-cottage-day.png", "01  /  Резиденция", "Загородный коттедж", "Солнечная станция, резерв и тёплый контур"),
        ("photo-premium-estate.png", "02  /  Поместье", "Премиальный дом", "Комплекс: генерация, хранение, умный дом"),
        ("photo-commercial.png", "03  /  Коммерция", "Деловой павильон", "Резерв ресторана и офисного контура"),
        ("photo-minimal-house.png", "04  /  Минимум", "Минималистичный объект", "Скрытые панели и тихая автоматизация"),
    ]
    gap = 20
    cw = (CONTENT - gap * 3) // 4
    y = 280
    card_h = 700
    for i, (ph, tag, title, desc) in enumerate(items):
        x = PAD + i * (cw + gap)
        box = (x, y, x + cw, y + card_h)
        img = shadow(img, box, 18, 16, 80, 8)
        img = rect(img, box, SURFACE_SOLID, radius=18)
        paste_round(img, photo(ph), (x, y, x + cw, y + 470), 18)
        img = rect(img, (x, y + 452, x + cw, y + card_h), SURFACE_SOLID, radius=18)
        img = rect(img, (x, y + 452, x + cw, y + 470), SURFACE_SOLID)
        img = text(img, (x + 22, y + 490), tag, font("M", 12), GOLD, tracking=1.2)
        img = text(img, (x + 22, y + 524), title, font("SB", 20), TEXT)
        img, _ = multiline(img, (x + 22, y + 568), desc, font("R", 14), MUTED, cw - 44, 22)
    return img


def screen_why() -> Image.Image:
    img = new_canvas()
    img = header(img, None)
    img = eyebrow(img, (PAD, 130), "Подход")
    img = text(img, (PAD, 166), "Почему Tesla Volt", font("UM", 40), TEXT)
    img = text(img, (PAD, 226), "Одна инженерная команда ведёт объект от первого расчёта до сервисного контура.", font("R", 17), MUTED)

    items = [
        ("01", "Индивидуальное проектирование", "Система собирается под архитектуру, нагрузку и сценарии конкретного здания."),
        ("02", "Инженерный расчёт", "Генерация, резерв и ёмкость батареи считаются до закупки оборудования."),
        ("03", "Комплект оборудования", "Подбираем согласованный стек: панели, инвертор, накопители, автоматика."),
        ("04", "Профессиональный монтаж", "Аккуратная установка на кровле, в щитовой и по инженерным трассам объекта."),
        ("05", "Настройка и автоматизация", "Сценарии света, климата, резерва и зарядки собираются в одном контуре."),
        ("06", "Сервис и сопровождение", "Мониторинг, обслуживание и развитие системы после запуска."),
    ]
    gap = 18
    cw = (CONTENT - gap * 2) // 3
    ch = 250
    y0 = 310
    for i, (num, title, desc) in enumerate(items):
        col, row = i % 3, i // 3
        x = PAD + col * (cw + gap)
        y = y0 + row * (ch + gap)
        img = glass(img, (x, y, x + cw, y + ch), 18, (20, 23, 28, 255), (255, 255, 255, 22))
        img = rect(img, (x + 28, y, x + 68, y + 3), GOLD, radius=2)
        img = text(img, (x + 28, y + 32), num, font("M", 13), GOLD, tracking=2)
        img = text(img, (x + 28, y + 78), title, font("SB", 20), TEXT)
        img, _ = multiline(img, (x + 28, y + 126), desc, font("R", 15), MUTED, cw - 56, 24)
    return img


def screen_process() -> Image.Image:
    img = new_canvas()
    img = header(img, "Процесс")
    img = eyebrow(img, (PAD, 130), "Маршрут")
    img = text(img, (PAD, 166), "Процесс работы", font("UM", 40), TEXT)
    img = text(img, (PAD, 226), "Пять этапов — от заявки до запуска системы на объекте.", font("R", 17), MUTED)

    steps = [
        ("01", "Заявка", "Короткий бриф: объект, задачи, желаемый уровень автономии."),
        ("02", "Выезд и аудит", "Осмотр кровли, щитовой, нагрузок и сценариев использования."),
        ("03", "Проектирование", "Схема, спецификация и расчёт генерации, резерва и хранения."),
        ("04", "Монтаж и настройка", "Установка оборудования, трасс, автоматики и интерфейса."),
        ("05", "Запуск системы", "Пусконаладка, обучение и передача объекта в сервис."),
    ]
    gap = 18
    cw = (CONTENT - gap * 4) // 5
    y0 = 320
    ch = 420
    line_y = y0 + 56
    for i, (num, title, desc) in enumerate(steps):
        x = PAD + i * (cw + gap)
        img = glass(img, (x, y0, x + cw, y0 + ch), 18, (20, 23, 28, 240), (255, 255, 255, 22))
        cx = x + cw // 2
        img = rect(img, (cx - 16, line_y - 16, cx + 16, line_y + 16), SURFACE_SOLID, radius=16, stroke=GOLD, width=2)
        layer, d = overlay(img)
        d.ellipse((cx - 5, line_y - 5, cx + 5, line_y + 5), fill=GOLD)
        img = apply(img, layer)
        img = text(img, (x + 24, y0 + 100), num, font("M", 13), GOLD, tracking=2)
        img = text(img, (x + 24, y0 + 140), title, font("SB", 18), TEXT)
        img, _ = multiline(img, (x + 24, y0 + 190), desc, font("R", 14), MUTED, cw - 48, 22)
        if i < 4:
            x2 = PAD + (i + 1) * (cw + gap)
            img = line(
                img,
                (x + cw // 2 + 20, line_y),
                (x2 + cw // 2 - 20, line_y),
                (230, 195, 74, 110),
                2,
            )

    img = glass(img, (PAD, 880, W - PAD, 990), 16, (20, 23, 28, 255))
    img = text(img, (PAD + 36, 935), "Срок и состав работ фиксируются после аудита объекта.", font("R", 16), MUTED, anchor="lm")
    label = "Оставить заявку"
    bw = int(font("M", 14).getlength(label) + 48)
    img, _ = button(img, (W - PAD - 36 - bw, 908), label, True, pad_x=24, h=46)
    return img


def screen_cta() -> Image.Image:
    img = cover(photo("photo-premium-estate.png"), W, H)
    dim = Image.new("RGBA", (W, H), (8, 9, 11, 150))
    img = apply(img, dim)
    fade = gradient((W, 420), (8, 9, 11, 40), (8, 9, 11, 200), vertical=True)
    img.paste(fade, (0, H - 420), fade)
    img = header(img, ghost=True)
    panel = (PAD, 300, 980, 820)
    img = glass(img, panel, 24, (10, 12, 14, 150), (255, 255, 255, 28))
    img = eyebrow(img, (PAD + 48, 348), "Следующий шаг")
    img = text(img, (PAD + 48, 400), "Сделайте свой объект", font("UL", 42), TEXT)
    img = text(img, (PAD + 48, 460), "энергетически", font("UM", 42), TEXT)
    img = text(img, (PAD + 48, 516), "независимым.", font("UM", 42), TEXT)
    img, _ = multiline(
        img,
        (PAD + 48, 590),
        "Рассчитаем систему под ваш дом или коммерческий объект.",
        font("R", 17),
        MUTED,
        560,
        26,
    )
    img, _ = button(img, (PAD + 48, 690), "Получить расчёт", True, pad_x=28, h=52)
    return img


def field(base: Image.Image, box: tuple[int, int, int, int], label: str, value: str = "", placeholder: bool = True) -> Image.Image:
    x0, y0, x1, y1 = box
    base = text(base, (x0, y0), label, font("R", 12), MUTED)
    base = rect(base, (x0, y0 + 22, x1, y1), (255, 255, 255, 8), radius=12, stroke=(255, 255, 255, 22))
    fill = MUTED2 if placeholder else TEXT
    base = text(base, (x0 + 16, (y0 + 22 + y1) / 2), value, font("R", 14), fill, anchor="lm")
    return base


def screen_contacts() -> Image.Image:
    img = new_canvas()
    img = header(img, "Контакты")
    img = eyebrow(img, (PAD, 122), "Связь")
    img = text(img, (PAD, 158), "Контакты", font("UM", 40), TEXT)
    img = text(img, (PAD, 216), "Расскажите о объекте — подготовим предварительный расчёт.", font("R", 17), MUTED)

    left = (PAD, 280, 820, 900)
    img = glass(img, left, 20, (20, 23, 28, 255))
    img = draw_logo(img, (PAD + 36, 316), 40)
    img = text(img, (PAD + 36, 390), "Инженерные системы для домов и коммерции.", font("R", 15), MUTED)

    rows = [
        ("Телефон", "+7 495 120-45-80"),
        ("WhatsApp", "+7 495 120-45-80"),
        ("Telegram", "@teslavolt"),
        ("Email", "hello@teslavolt.ru"),
        ("Зона работы", "Москва, МО и объекты ЦФО"),
    ]
    for i, (k, v) in enumerate(rows):
        y = 450 + i * 70
        img = text(img, (PAD + 36, y), k, font("R", 12), MUTED)
        img = text(img, (PAD + 36, y + 22), v, font("SB", 18), TEXT)
        if i < len(rows) - 1:
            img = line(img, (PAD + 36, y + 54), (788, y + 54), (255, 255, 255, 16))

    form = (860, 280, W - PAD, 900)
    img = glass(img, form, 20, (20, 23, 28, 255))
    img = text(img, (896, 316), "Заявка на расчёт", font("SB", 22), TEXT)
    img = text(img, (896, 352), "Ответим в течение рабочего дня.", font("R", 14), MUTED)
    img = field(img, (896, 400, 1238, 470), "Имя", "Александр")
    img = field(img, (1258, 400, W - PAD - 36, 470), "Телефон", "+7")
    img = field(img, (896, 500, W - PAD - 36, 570), "Тип объекта", "Загородный дом")
    img = field(img, (896, 600, W - PAD - 36, 760), "Комментарий", "Нужна автономия и умный дом")
    img, _ = button(img, (896, 800), "Получить расчёт", True, pad_x=26, h=50)
    img = text(img, (896 + 220, 825), "Нажимая кнопку, вы соглашаетесь на связь по проекту.", font("R", 12), MUTED2, anchor="lm")

    img = line(img, (PAD, 960), (W - PAD, 960), (255, 255, 255, 16))
    img = text(img, (PAD, 1010), "TESLA VOLT", font("M", 12), MUTED, tracking=2, anchor="lm")
    img = text(img, (W - PAD, 1010), "Энергетическая независимость объекта", font("R", 12), MUTED2, anchor="rm")
    return img


def screen_logo() -> Image.Image:
    img = Image.new("RGBA", (1600, 1000), BG)
    img = draw_logo(img, (1600 // 2 - 18, 280), 72, with_word=False)
    img = text(img, (800, 400), "TESLA VOLT", font("USB", 42), TEXT, anchor="mt", tracking=6)
    img = text(img, (800, 460), "ENERGY ENGINEERING", font("M", 14), GOLD, anchor="mt", tracking=4)
    img = text(img, (800, 560), "Самостоятельный знак: дуга солнца и вертикаль напряжения.", font("R", 16), MUTED, anchor="mt")
    img = text(img, (800, 594), "Не использует эмблему и фирменный стиль Tesla Inc.", font("R", 16), MUTED2, anchor="mt")
    swatches = [(BG, "Graphite"), ((20, 23, 28, 255), "Panel"), (TEXT, "White"), (GOLD, "Solar gold")]
    x = 430
    for color, name in swatches:
        img = rect(img, (x, 700, x + 150, 820), color, radius=12, stroke=LINE)
        img = text(img, (x + 75, 850), name, font("R", 13), MUTED, anchor="mt")
        x += 190
    # expand to 1920x1080 board
    board = new_canvas()
    board.paste(img, ((W - 1600) // 2, (H - 1000) // 2), img)
    return board


def screen_hero_mobile() -> Image.Image:
    mw, mh = 430, 932
    img = cover(photo("photo-hero-house-only.png"), mw, mh)
    dim = gradient((mw, mh), (8, 9, 11, 20), (8, 9, 11, 175), vertical=True)
    img.paste(dim, (0, 0), dim)
    top = Image.new("RGBA", (mw, 80), (8, 9, 11, 70))
    img.paste(top, (0, 0), top)
    img = draw_logo(img, (20, 22), 32)
    img = rect(img, (mw - 62, 22, mw - 20, 56), (255, 255, 255, 12), radius=10, stroke=(255, 255, 255, 30))
    layer, d = overlay(img)
    d.line((mw - 50, 34, mw - 32, 34), fill=TEXT, width=2)
    d.line((mw - 50, 39, mw - 32, 39), fill=TEXT, width=2)
    d.line((mw - 50, 44, mw - 32, 44), fill=TEXT, width=2)
    img = apply(img, layer)
    img = text(img, (24, 430), "Энергия", font("UL", 34), TEXT)
    img = text(img, (24, 474), "вашего дома.", font("UM", 34), TEXT)
    img = text(img, (24, 522), "Полностью", font("UL", 34), TEXT)
    img = text(img, (24, 566), "под контролем.", font("UM", 34), TEXT)
    img, _ = multiline(
        img,
        (24, 630),
        "Солнечные станции, резерв и Умный дом под ключ.",
        font("R", 15),
        MUTED,
        380,
        22,
    )
    img, _ = button(img, (24, 720), "Рассчитать проект", True, pad_x=22, h=48)
    img, _ = button(img, (24, 782), "Посмотреть решения", False, pad_x=22, h=48)
    # letterbox onto 1920x1080 presentation board
    board = new_canvas((8, 9, 11, 255))
    phone = Image.new("RGBA", (mw + 24, mh + 24), (0, 0, 0, 0))
    ImageDraw.Draw(phone).rounded_rectangle((0, 0, mw + 23, mh + 23), 36, fill=(20, 22, 26, 255), outline=(255, 255, 255, 30))
    board.paste(phone, ((W - mw) // 2 - 12, (H - mh) // 2 - 12), phone)
    mask = rounded_mask((mw, mh), 28)
    framed = Image.new("RGBA", (mw, mh), (0, 0, 0, 0))
    framed.paste(img, (0, 0), mask)
    board.paste(framed, ((W - mw) // 2, (H - mh) // 2), framed)
    board = text(board, (PAD, H - 48), "Mobile  ·  430 × 932  ·  Hero", font("R", 13), MUTED2)
    return board


def screen_contacts_mobile() -> Image.Image:
    mw, mh = 430, 932
    img = Image.new("RGBA", (mw, mh), BG)
    img = draw_logo(img, (20, 22), 32)
    img = text(img, (20, 90), "Контакты", font("UM", 28), TEXT)
    img = text(img, (20, 132), "Предварительный расчёт объекта.", font("R", 14), MUTED)
    rows = [
        ("Телефон", "+7 495 120-45-80"),
        ("Telegram", "@teslavolt"),
        ("Email", "hello@teslavolt.ru"),
    ]
    for i, (k, v) in enumerate(rows):
        y = 180 + i * 70
        img = text(img, (20, y), k, font("R", 12), MUTED)
        img = text(img, (20, y + 22), v, font("SB", 16), TEXT)
    img = text(img, (20, 410), "Заявка", font("SB", 18), TEXT)
    img = field(img, (20, 450, 410, 520), "Имя", "Александр")
    img = field(img, (20, 540, 410, 610), "Телефон", "+7")
    img, _ = button(img, (20, 650), "Получить расчёт", True, pad_x=24, h=48)
    board = new_canvas((8, 9, 11, 255))
    phone = Image.new("RGBA", (mw + 24, mh + 24), (0, 0, 0, 0))
    ImageDraw.Draw(phone).rounded_rectangle((0, 0, mw + 23, mh + 23), 36, fill=(20, 22, 26, 255), outline=(255, 255, 255, 30))
    board.paste(phone, ((W - mw) // 2 - 12, (H - mh) // 2 - 12), phone)
    mask = rounded_mask((mw, mh), 28)
    framed = Image.new("RGBA", (mw, mh), (0, 0, 0, 0))
    framed.paste(img, (0, 0), mask)
    board.paste(framed, ((W - mw) // 2, (H - mh) // 2), framed)
    board = text(board, (PAD, H - 48), "Mobile  ·  430 × 932  ·  Contacts", font("R", 13), MUTED2)
    return board


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    jobs = [
        ("00-brand.png", screen_logo),
        ("01-hero.png", screen_hero),
        ("02-solutions.png", screen_solutions),
        ("03-numbers.png", screen_numbers),
        ("04-system.png", screen_system),
        ("05-smarthome.png", screen_smarthome),
        ("06-projects.png", screen_projects),
        ("07-why.png", screen_why),
        ("08-process.png", screen_process),
        ("09-cta.png", screen_cta),
        ("10-contacts.png", screen_contacts),
        ("11-hero-mobile.png", screen_hero_mobile),
        ("12-contacts-mobile.png", screen_contacts_mobile),
    ]
    for name, fn in jobs:
        save(fn(), name)


if __name__ == "__main__":
    main()
