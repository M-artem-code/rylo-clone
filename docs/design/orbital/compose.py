#!/usr/bin/env python3
"""ORBITAL — PNG website mockup compositor. Visual design only."""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent
PLATES = ROOT / "plates"
FONTS = ROOT / "fonts"
OUT = ROOT / "screens"
OUT.mkdir(parents=True, exist_ok=True)

# --- palette ---------------------------------------------------------------
WHITE = (255, 255, 255, 255)
ICE = (244, 248, 255, 255)
ICE2 = (232, 240, 255, 255)
MIST = (226, 233, 246, 255)
LINE = (210, 220, 238, 255)
NAVY = (8, 18, 48, 255)
INK = (11, 21, 51, 255)
MUTED = (92, 104, 132, 255)
COBALT = (21, 76, 255, 255)
COBALT_DEEP = (10, 28, 120, 255)
ROYAL = (6, 22, 84, 255)
VIOLET = (124, 58, 237, 255)
VIOLET_SOFT = (167, 139, 250, 255)
GREEN = (22, 163, 116, 255)
AMBER = (217, 119, 6, 255)

W, H = 1920, 1080
PX = 80  # page x padding


# --- fonts -----------------------------------------------------------------
def _axis_name(axis) -> str:
    name = axis.get("name") if isinstance(axis, dict) else axis
    if isinstance(name, bytes):
        name = name.decode("ascii", "ignore")
    return str(name)


def _font(name: str, size: int, weight: float = 400, width: float | None = None) -> ImageFont.FreeTypeFont:
    path = FONTS / name
    font = ImageFont.truetype(str(path), size)
    try:
        values = []
        for axis in font.get_variation_axes():
            tag = _axis_name(axis).lower()
            minimum = axis.get("minimum", 100)
            maximum = axis.get("maximum", 900)
            default = axis.get("default", 400)
            if "weight" in tag:
                values.append(max(minimum, min(maximum, weight)))
            elif "width" in tag:
                values.append(width if width is not None else default)
            else:
                values.append(default)
        if values:
            font.set_variation_by_axes(values)
    except Exception:
        pass
    return font


def F_display(size: int, w: float = 800) -> ImageFont.FreeTypeFont:
    return _font("Unbounded-Variable.ttf", size, w)


def F_condensed(size: int, w: float = 700) -> ImageFont.FreeTypeFont:
    return _font("AlumniSans-Variable.ttf", size, w)


def F_ui(size: int, w: float = 500) -> ImageFont.FreeTypeFont:
    return _font("Onest-Variable.ttf", size, w)


def F_body(size: int, w: float = 400) -> ImageFont.FreeTypeFont:
    return _font("GolosText-Variable.ttf", size, w)


def F_mono(size: int, w: float = 500) -> ImageFont.FreeTypeFont:
    return _font("MartianMono-Variable.ttf", size, w, width=87.5)


# --- primitives ------------------------------------------------------------
def new_canvas(w: int = W, h: int = H, color=WHITE) -> Image.Image:
    return Image.new("RGBA", (w, h), color)


def cover(path: Path, box: tuple[int, int, int, int], focus: tuple[float, float] = (0.5, 0.5)) -> Image.Image:
    im = Image.open(path).convert("RGBA")
    x0, y0, x1, y1 = box
    tw, th = max(1, x1 - x0), max(1, y1 - y0)
    scale = max(tw / im.width, th / im.height)
    nw, nh = int(im.width * scale), int(im.height * scale)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    cx, cy = int((nw - tw) * focus[0]), int((nh - th) * focus[1])
    return im.crop((cx, cy, cx + tw, cy + th))


def paste(base: Image.Image, plate: Path, box: tuple[int, int, int, int], radius: int = 0, focus=(0.5, 0.5)) -> None:
    x0, y0, x1, y1 = [int(v) for v in box]
    img = cover(plate, (0, 0, x1 - x0, y1 - y0), focus)
    if radius:
        mask = Image.new("L", img.size, 0)
        ImageDraw.Draw(mask).rounded_rectangle((0, 0, img.size[0] - 1, img.size[1] - 1), radius, fill=255)
        base.paste(img, (x0, y0), mask)
    else:
        base.paste(img, (x0, y0), img)


def shadow(base: Image.Image, box, radius=24, blur=22, dy=10, opacity=28) -> Image.Image:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    x0, y0, x1, y1 = box
    d.rounded_rectangle((x0 + 2, y0 + dy, x1 + 2, y1 + dy), radius, fill=(8, 18, 48, opacity))
    layer = layer.filter(ImageFilter.GaussianBlur(blur))
    return Image.alpha_composite(base, layer)


def rrect(draw: ImageDraw.ImageDraw, box, radius, fill=None, outline=None, width=1) -> None:
    draw.rounded_rectangle(box, radius, fill=fill, outline=outline, width=width)


def glass(base: Image.Image, box, radius=22, alpha=188, blur=10, outline=(255, 255, 255, 90)) -> Image.Image:
    x0, y0, x1, y1 = [int(v) for v in box]
    crop = base.crop((x0, y0, x1, y1)).filter(ImageFilter.GaussianBlur(blur))
    veil = Image.new("RGBA", crop.size, (255, 255, 255, alpha))
    panel = Image.alpha_composite(crop, veil)
    mask = Image.new("L", panel.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, panel.size[0] - 1, panel.size[1] - 1), radius, fill=255)
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    overlay.paste(panel, (x0, y0), mask)
    out = Image.alpha_composite(base, overlay)
    d = ImageDraw.Draw(out)
    rrect(d, (x0, y0, x1 - 1, y1 - 1), radius, outline=outline, width=1)
    return out


def text(draw, xy, s, font, fill=INK, anchor="lt") -> None:
    if "\n" in s:
        x, y = xy
        lines = s.split("\n")
        for i, line in enumerate(lines):
            draw.text((x, y + i * int(font.size * 1.35)), line, font=font, fill=fill, anchor=anchor)
        return
    draw.text(xy, s, font=font, fill=fill, anchor=anchor)


def twidth(font, s: str) -> float:
    return font.getlength(s)


def wrap(s: str, font, max_w: int) -> list[str]:
    words = s.split()
    lines, cur = [], ""
    for word in words:
        trial = (cur + " " + word).strip()
        if twidth(font, trial) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def gradient(size, c0, c1, horizontal=False) -> Image.Image:
    w, h = size
    im = Image.new("RGBA", size, c0)
    px = im.load()
    for i in range(w if horizontal else h):
        t = i / max(1, (w if horizontal else h) - 1)
        col = tuple(int(a + (b - a) * t) for a, b in zip(c0, c1))
        if horizontal:
            for y in range(h):
                px[i, y] = col
        else:
            for x in range(w):
                px[x, i] = col
    return im


def fade_left(base: Image.Image, box, color=WHITE, width=420) -> None:
    x0, y0, x1, y1 = box
    band = Image.new("RGBA", (width, y1 - y0), (0, 0, 0, 0))
    px = band.load()
    r, g, b, a = color
    for x in range(width):
        alpha = int(255 * (1 - x / width) ** 1.15)
        for y in range(y1 - y0):
            px[x, y] = (r, g, b, alpha)
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    overlay.paste(band, (x0, y0), band)
    composed = Image.alpha_composite(base, overlay)
    base.paste(composed, (0, 0))


def logo(draw, x, y, color=NAVY, word=True, scale=1.0) -> int:
    r = 13 * scale
    draw.ellipse((x, y, x + 2 * r, y + 2 * r), outline=color, width=max(2, int(2.4 * scale)))
    # satellite on the ring
    draw.ellipse((x + 2 * r - 3 * scale, y + 3 * scale, x + 2 * r + 5 * scale, y + 11 * scale), fill=VIOLET)
    if not word:
        return int(x + 2 * r)
    font = F_display(int(20 * scale), 700)
    text(draw, (x + 2 * r + 10 * scale, y + r), "ORBITAL", font, color, "lm")
    return int(x + 2 * r + 10 * scale + twidth(font, "ORBITAL"))


def pill(draw, xy, label, fill=COBALT, fg=WHITE, font=None, pad_x=22, pad_y=12, radius=999) -> tuple[int, int, int, int]:
    font = font or F_ui(15, 600)
    tw = twidth(font, label)
    x, y = xy
    box = (x, y, x + tw + pad_x * 2, y + font.size + pad_y * 2)
    rrect(draw, box, radius, fill=fill)
    text(draw, ((box[0] + box[2]) / 2, (box[1] + box[3]) / 2), label, font, fg, "mm")
    return box


def ghost_btn(draw, xy, label, fg=NAVY, bd=LINE) -> tuple[int, int, int, int]:
    font = F_ui(15, 600)
    tw = twidth(font, label)
    x, y = xy
    box = (x, y, x + tw + 44, y + 44)
    rrect(draw, box, 999, fill=WHITE, outline=bd, width=1)
    text(draw, ((box[0] + box[2]) / 2, (box[1] + box[3]) / 2), label, font, fg, "mm")
    return box


def browser(base: Image.Image, url: str) -> Image.Image:
    d = ImageDraw.Draw(base)
    d.rectangle((0, 0, base.width, 42), fill=(248, 250, 253, 255))
    d.line((0, 42, base.width, 42), fill=LINE, width=1)
    for i, col in enumerate([(255, 95, 87, 255), (254, 188, 46, 255), (40, 200, 64, 255)]):
        d.ellipse((18 + i * 20, 14, 30 + i * 20, 26), fill=col)
    # url
    font = F_mono(12, 500)
    tw = twidth(font, url)
    x0 = (base.width - tw - 48) / 2
    rrect(d, (x0, 8, x0 + tw + 48, 34), 10, fill=WHITE, outline=LINE, width=1)
    text(d, (base.width / 2, 21), url, font, MUTED, "mm")
    return base


NAV = [
    ("Миссии", "/missions"),
    ("Капсула", "/capsule"),
    ("Опыт", "/experience"),
    ("Подготовка", "/preparation"),
    ("О компании", "/about"),
    ("Контакты", "/contacts"),
]


def header(base: Image.Image, active: str | None = None, cta: str = "Выбрать миссию") -> Image.Image:
    d = ImageDraw.Draw(base)
    y0 = 42
    d.rectangle((0, y0, base.width, y0 + 72), fill=(255, 255, 255, 230))
    d.line((0, y0 + 72, base.width, y0 + 72), fill=LINE, width=1)
    logo(d, PX, y0 + 22)
    x = 400
    for label, _ in NAV:
        wt = 650 if label == active else 480
        nf2 = F_ui(14, wt)
        w = twidth(nf2, label)
        col = COBALT if label == active else MUTED
        text(d, (x, y0 + 36), label, nf2, col, "lm")
        if label == active:
            d.line((x, y0 + 56, x + w, y0 + 56), fill=VIOLET, width=2)
        x += w + 28
    pill(d, (base.width - PX - twidth(F_ui(14, 650), cta) - 40, y0 + 16), cta, font=F_ui(14, 650), pad_y=10)
    return base


def footer(base: Image.Image, y: int | None = None) -> None:
    d = ImageDraw.Draw(base)
    y = y if y is not None else base.height - 56
    d.line((PX, y, base.width - PX, y), fill=LINE, width=1)
    logo(d, PX, y + 16, scale=0.78)
    text(d, (base.width - PX, y + 28), "© 2026 ORBITAL · Atlantic Spaceport", F_ui(12, 400), MUTED, "rm")


def save(im: Image.Image, name: str) -> Path:
    path = OUT / name
    rgb = Image.new("RGB", im.size, (255, 255, 255))
    rgb.paste(im, mask=im.split()[-1])
    rgb.save(path, "PNG", optimize=True)
    print("wrote", path.name, rgb.size)
    return path


def frame(url: str, active: str | None = None, h: int = H, bg=WHITE, cta: str = "Выбрать миссию") -> Image.Image:
    im = new_canvas(W, h, bg)
    browser(im, url)
    header(im, active, cta)
    return im


# --- pages -----------------------------------------------------------------
def page_brand() -> None:
    im = new_canvas(W, H, WHITE)
    d = ImageDraw.Draw(im)
    browser(im, "orbital.space / brand")
    # left photography
    paste(im, PLATES / "plate-earth-light-orbit.png", (0, 42, 1120, H), focus=(0.55, 0.42))
    fade_left(im, (720, 42, 1200, H), WHITE, 380)
    d = ImageDraw.Draw(im)
    logo(d, 72, 80, scale=1.15)
    text(d, (72, 200), "ORBITAL", F_display(72, 800), NAVY)
    text(d, (72, 290), "Премиальные суборбитальные путешествия", F_body(22, 400), MUTED)
    # color chips
    chips = [
        ((255, 255, 255, 255), "Белый", "Surface"),
        (COBALT, "Cobalt", "#154CFF"),
        (ROYAL, "Royal", "#061654"),
        (VIOLET, "Violet", "#7C3AED"),
    ]
    x = 72
    for col, name, hexn in chips:
        rrect(d, (x, 360, x + 86, 446), 16, fill=col, outline=LINE, width=1)
        text(d, (x + 43, 466), name, F_ui(13, 600), NAVY, "mt")
        text(d, (x + 43, 486), hexn, F_mono(10, 500), MUTED, "mt")
        x += 110
    # type
    text(d, (72, 560), "МИССИЯ", F_condensed(86, 700), NAVY)
    text(d, (72, 650), "Высота  ·  Невесомость  ·  Орбита", F_ui(20, 400), MUTED)
    pill(d, (72, 720), "Выбрать миссию")
    ghost_btn(d, (300, 720), "Изучить капсулу")
    # right tokens
    rrect(d, (1240, 90, 1840, 990), 28, fill=ICE)
    text(d, (1300, 140), "СИСТЕМА", F_mono(12, 600), VIOLET)
    text(d, (1300, 172), "Future Orbital Luxury", F_display(26, 700), NAVY)
    items = [
        ("Типографика", "Unbounded + Alumni Sans + Onest"),
        ("Поверхности", "Белый, лёд, стекло, cobalt-поля"),
        ("Акцент", "Electric violet orbital glow"),
        ("UI", "Flight data, glass, mission cards"),
        ("Образ", "Земля + капсула + траектория"),
    ]
    y = 250
    for t, s in items:
        text(d, (1300, y), t, F_ui(16, 650), NAVY)
        text(d, (1300, y + 28), s, F_body(15, 400), MUTED)
        d.line((1300, y + 72, 1780, y + 72), fill=LINE, width=1)
        y += 96
    text(d, (1300, 860), "Не sci-fi. Не агентство.\nНастоящий премиальный полёт.", F_body(16, 400), MUTED)
    save(im, "00-brand-system.png")


def page_home_hero() -> None:
    im = frame("orbital.space", None)
    paste(im, PLATES / "plate-earth-light-orbit.png", (480, 114, W, H), focus=(0.62, 0.45))
    fade_left(im, (480, 114, 980, H), WHITE, 380)
    # extra soft white veil on far left
    veil = Image.new("RGBA", im.size, (0, 0, 0, 0))
    vd = ImageDraw.Draw(veil)
    vd.rectangle((0, 114, 700, H), fill=(255, 255, 255, 40))
    im = Image.alpha_composite(im, veil)
    d = ImageDraw.Draw(im)
    text(d, (PX, 200), "YOUR FIRST ORBIT  ·  ОКНО 14:22 UTC", F_mono(13, 550), VIOLET)
    text(d, (PX, 250), "ВАША", F_display(86, 800), NAVY)
    text(d, (PX, 344), "ПЕРВАЯ", F_display(86, 800), NAVY)
    text(d, (PX, 438), "ОРБИТА", F_display(86, 800), COBALT)
    lead = "Премиальный космический туризм нового поколения. Суборбитальные путешествия для частных клиентов — от выбора миссии до возвращения на Землю."
    y = 550
    for line in wrap(lead, F_body(18, 400), 520):
        text(d, (PX, y), line, F_body(18, 400), MUTED)
        y += 28
    pill(d, (PX, 660), "Выбрать свою миссию →")
    ghost_btn(d, (PX + 280, 660), "Изучить капсулу")
    # coordinates
    text(d, (PX, 760), "51.2°N  ·  107.3°W  ·  ALT 100.2 KM", F_mono(12, 500), MUTED)
    # flight data glass
    im = glass(im, (PX, 860, 1040, 1020), 22, alpha=210)
    d = ImageDraw.Draw(im)
    stats = [
        ("100 км", "Высота апогея"),
        ("12 мин", "Длительность"),
        ("4 мин", "Невесомость"),
        ("6 мест", "Капсула"),
        ("14:22", "Окно запуска"),
    ]
    for i, (v, k) in enumerate(stats):
        x = PX + 36 + i * 188
        text(d, (x, 900), k.upper(), F_mono(11, 550), MUTED)
        text(d, (x, 930), v, F_display(28, 700), NAVY)
    save(im, "01-home-hero.png")


def page_home_missions() -> None:
    im = frame("orbital.space", None, bg=ICE)
    # faint earth
    paste(im, PLATES / "plate-earth-curve-dawn.png", (900, 420, W, H), focus=(0.5, 0.65))
    fade_left(im, (900, 420, W, H), ICE, 260)
    d = ImageDraw.Draw(im)
    text(d, (PX, 160), "LAUNCH WINDOW 2026", F_mono(12, 550), VIOLET)
    text(d, (PX, 190), "БЛИЖАЙШИЕ", F_display(54, 800), NAVY)
    text(d, (PX, 256), "МИССИИ", F_display(54, 800), COBALT)
    lead = "Каждая миссия — отдельный премиальный опыт: маршрут, высота, окно запуска и характер вида на Землю."
    y = 330
    for line in wrap(lead, F_body(17, 400), 460):
        text(d, (PX, y), line, F_body(17, 400), MUTED)
        y += 26

    missions = [
        ("AURORA", "Первый рассвет над Землёй", "18 марта 2026", "12 мин", "100 км", "3 места", "Открыта", GREEN, "plate-earth-curve-dawn.png"),
        ("ZENITH", "Максимальная высота", "4 июня 2026", "14 мин", "110 км", "2 места", "Ограничена", AMBER, "plate-earth-window.png"),
        ("HORIZON", "Панорама 360°", "21 сентября 2026", "13 мин", "104 км", "4 места", "Открыта", GREEN, "plate-earth-light-orbit.png"),
    ]
    x = 620
    for name, sub, date, dur, alt, seats, st, stc, plate in missions:
        box = (x, 170, x + 380, 980)
        im = shadow(im, box, 26)
        rrect(ImageDraw.Draw(im), box, 26, fill=WHITE)
        paste(im, PLATES / plate, (x + 16, 186, x + 364, 400), radius=18, focus=(0.5, 0.45))
        d = ImageDraw.Draw(im)
        text(d, (x + 32, 430), name, F_display(22, 750), NAVY)
        text(d, (x + 32, 466), sub, F_body(15, 400), MUTED)
        rows = [("Дата", date), ("Длительность", dur), ("Высота", alt), ("Места", seats)]
        yy = 520
        for k, v in rows:
            text(d, (x + 32, yy), k, F_ui(13, 400), MUTED)
            text(d, (x + 348, yy), v, F_ui(13, 650), NAVY, "rm")
            d.line((x + 32, yy + 28, x + 348, yy + 28), fill=LINE, width=1)
            yy += 48
        text(d, (x + 32, 750), "Статус", F_ui(13, 400), MUTED)
        text(d, (x + 348, 750), st, F_ui(13, 650), stc, "rm")
        pill(d, (x + 32, 880), "Выбрать миссию →", font=F_ui(14, 600))
        x += 404
    save(im, "01-home-missions.png")


def page_home_journey() -> None:
    im = frame("orbital.space", None)
    paste(im, PLATES / "plate-earth-capsule-orbit.png", (860, 114, W, H), focus=(0.62, 0.48))
    fade_left(im, (860, 114, 1400, H), WHITE, 420)
    d = ImageDraw.Draw(im)
    text(d, (PX, 160), "YOUR JOURNEY", F_mono(12, 550), VIOLET)
    text(d, (PX, 188), "КАК ПРОХОДИТ", F_display(46, 800), NAVY)
    text(d, (PX, 246), "ПОЛЁТ", F_display(46, 800), COBALT)

    steps = [
        ("T−03:00", "База", "Прибытие на космодром и персональный брифинг миссии."),
        ("T−00:40", "Подготовка", "Костюм, проверка систем и посадка в капсулу."),
        ("T+00:00", "Запуск", "Старт носителя и выход на суборбитальную дугу."),
        ("T+02:10", "Высота", "100 км. Кривизна Земли становится очевидной."),
        ("T+04:40", "Невесомость", "Четыре минуты свободного полёта у панорамы."),
        ("T+12:00", "Возвращение", "Спуск в атмосфере и посадка на воду / полосу."),
    ]
    y = 330
    for t, title, desc in steps:
        d.ellipse((PX, y + 6, PX + 10, y + 16), fill=VIOLET)
        if title != steps[-1][1]:
            d.line((PX + 5, y + 16, PX + 5, y + 72), fill=LINE, width=1)
        text(d, (PX + 28, y), t, F_mono(11, 550), VIOLET)
        text(d, (PX + 120, y), title, F_ui(16, 650), NAVY)
        text(d, (PX + 120, y + 24), desc, F_body(14, 400), MUTED)
        y += 78

    im = glass(im, (1240, 200, 1840, 520), 22, alpha=200)
    d = ImageDraw.Draw(im)
    text(d, (1280, 230), "ТЕХНОЛОГИЯ КАПСУЛЫ", F_mono(11, 550), VIOLET)
    specs = [("Панорама", "220°"), ("Места", "6"), ("Автономия", "24 ч"), ("Оболочка", "Ti / carbon")]
    for i, (k, v) in enumerate(specs):
        x = 1280 + (i % 2) * 260
        yy = 290 + (i // 2) * 90
        text(d, (x, yy), k, F_ui(13, 400), MUTED)
        text(d, (x, yy + 24), v, F_display(28, 700), NAVY)

    # cobalt CTA band
    rrect(d, (PX, 880, W - PX, 1020), 28, fill=ROYAL)
    text(d, (PX + 40, 920), "Земля становится личной историей.", F_display(26, 700), WHITE)
    text(d, (PX + 40, 962), "Выберите миссию и начните подготовку к первому полёту.", F_body(15, 400), (190, 200, 230, 255))
    pill(d, (W - PX - 340, 922), "Выбрать свою миссию →", fill=WHITE, fg=ROYAL)
    save(im, "01-home-journey.png")


def page_missions() -> None:
    im = frame("orbital.space/missions", "Миссии", cta="Выбрать миссию")
    d = ImageDraw.Draw(im)
    text(d, (PX, 150), "КАТАЛОГ ПУТЕШЕСТВИЙ", F_mono(12, 550), VIOLET)
    text(d, (PX, 176), "МИССИИ", F_display(58, 800), NAVY)
    # filters
    filters = ["Все", "Рассвет", "Высота", "Панорама", "Ночной старт"]
    x = PX
    for i, f in enumerate(filters):
        if i == 0:
            box = pill(d, (x, 268), f)
            x = box[2] + 12
        else:
            box = ghost_btn(d, (x, 268), f)
            x = box[2] + 12

    missions = [
        ("01", "AURORA", "Первый рассвет над Землёй", "18 мар 2026", "100 км", "12 мин", "4:10", "Atlantic", "3 / 6", True),
        ("02", "ZENITH", "Максимальная высота", "4 июн 2026", "110 км", "14 мин", "4:40", "Atlantic", "2 / 6", False),
        ("03", "HORIZON", "Круговая панорама", "21 сен 2026", "104 км", "13 мин", "4:20", "Pacific", "4 / 6", False),
        ("04", "ECLIPSE", "Ночной старт и звёзды", "11 дек 2026", "102 км", "13 мин", "4:05", "Atlantic", "5 / 6", False),
    ]
    y = 350
    for num, name, sub, date, alt, dur, wl, start, seats, on in missions:
        box = (PX, y, 820, y + 150)
        fill = (236, 242, 255, 255) if on else WHITE
        rrect(d, box, 20, fill=fill, outline=COBALT if on else LINE, width=2 if on else 1)
        text(d, (PX + 24, y + 28), num, F_mono(12, 550), VIOLET)
        text(d, (PX + 24, y + 50), name, F_display(24, 750), NAVY)
        text(d, (PX + 24, y + 90), sub, F_body(14, 400), MUTED)
        cols = [(date, "Дата"), (alt, "Высота"), (dur, "Полёт"), (seats, "Места")]
        cx = 400
        for val, lab in cols:
            text(d, (cx, y + 48), lab, F_mono(10, 500), MUTED)
            text(d, (cx, y + 74), val, F_ui(15, 650), NAVY)
            cx += 100
        y += 164

    # map
    paste(im, PLATES / "plate-earth-window.png", (860, 176, W - PX, 1000), radius=28, focus=(0.5, 0.5))
    im = glass(im, (900, 210, 1320, 390), 18, alpha=200)
    d = ImageDraw.Draw(im)
    text(d, (928, 232), "ORBITAL MAP", F_mono(11, 550), VIOLET)
    text(d, (928, 258), "AURORA  ·  активна", F_display(20, 700), NAVY)
    text(d, (928, 300), "Маршрут: Atlantic Spaceport → апогей 100 км → Тихий коридор", F_body(13, 400), MUTED)
    text(d, (928, 328), "Окно запуска 14:22 UTC  ·  3 места", F_body(13, 400), MUTED)
    # trajectory overlay
    ov = Image.new("RGBA", im.size, (0, 0, 0, 0))
    od = ImageDraw.Draw(ov)
    od.arc((900, 280, 1800, 980), 200, 350, fill=VIOLET_SOFT, width=3)
    od.ellipse((1488, 430, 1504, 446), fill=VIOLET)
    od.ellipse((1120, 700, 1134, 714), fill=COBALT)
    im = Image.alpha_composite(im, ov)
    d = ImageDraw.Draw(im)
    pill(d, (900, 930), "Выбрать миссию AURORA →")
    save(im, "02-missions.png")


def page_mission_briefing() -> None:
    im = frame("orbital.space/missions/aurora", "Миссии", cta="Забронировать")
    paste(im, PLATES / "plate-earth-window.png", (700, 114, W, H), focus=(0.55, 0.5))
    fade_left(im, (700, 114, 1280, H), WHITE, 480)
    d = ImageDraw.Draw(im)
    text(d, (PX, 170), "MISSION BRIEFING  ·  ORB-AUR-026", F_mono(12, 550), VIOLET)
    text(d, (PX, 204), "AURORA", F_display(78, 800), NAVY)
    text(d, (PX, 298), "Первый рассвет над Землёй", F_condensed(42, 600), COBALT)
    lead = "Суборбитальная дуга на 100 км в момент восхода. Пассажиры видят линию терминатора — ночь и день на одной планете."
    y = 370
    for line in wrap(lead, F_body(18, 400), 560):
        text(d, (PX, y), line, F_body(18, 400), MUTED)
        y += 28
    data = [
        ("18 марта 2026", "Дата запуска"),
        ("12 мин 40 с", "Длительность"),
        ("100 км", "Апогей"),
        ("4 мин 10 с", "Невесомость"),
        ("Atlantic SP", "Точка старта"),
        ("3 / 6", "Места"),
    ]
    y = 500
    for i, (v, k) in enumerate(data):
        col = i % 3
        row = i // 3
        x = PX + col * 230
        yy = y + row * 96
        text(d, (x, yy), k.upper(), F_mono(11, 500), MUTED)
        text(d, (x, yy + 24), v, F_display(22, 700), NAVY)
    pill(d, (PX, 720), "Забронировать место на миссии →")
    ghost_btn(d, (PX + 390, 720), "Открыть конфигуратор")

    im = glass(im, (PX, 820, 760, 1020), 20, alpha=220)
    d = ImageDraw.Draw(im)
    text(d, (PX + 28, 850), "ТРАЕКТОРИЯ", F_mono(11, 550), VIOLET)
    text(d, (PX + 28, 878), "Старт 28.5°N  ·  Апогей 100.2 км  ·  Спуск 19.1°N", F_body(15, 400), INK)
    text(d, (PX + 28, 914), "Скорость макс. 3 700 км/ч  ·  Перегрузка 3.2 g  ·  Коридор C-4", F_body(15, 400), MUTED)
    text(d, (PX + 28, 958), "Маршрут согласован с окном 14:22–14:41 UTC", F_ui(14, 500), COBALT)
    save(im, "03-mission-aurora.png")


def page_mission_itinerary() -> None:
    im = frame("orbital.space/missions/aurora", "Миссии", bg=ICE, cta="Забронировать")
    d = ImageDraw.Draw(im)
    text(d, (PX, 150), "СЦЕНАРИЙ ПУТЕШЕСТВИЯ", F_mono(12, 550), VIOLET)
    text(d, (PX, 176), "12 минут, которые", F_display(40, 800), NAVY)
    text(d, (PX + 520, 176), "делят жизнь", F_display(40, 800), COBALT)

    scenes = [
        ("01", "База", "T−3 ч", "Прибытие, медитация вида, личный брифинг."),
        ("02", "Капсула", "T−40 мин", "Посадка, проверка герметичности, связь с семьёй."),
        ("03", "Запуск", "T+0", "Голубое пламя, набор, голос оператора."),
        ("04", "Высота", "T+2:10", "Небо чернеет. Земля становится шаром."),
        ("05", "Невесомость", "T+4:40", "Тело отпускает. Панорама 220°."),
        ("06", "Возвращение", "T+12", "Плазма, тишина, вода, первое слово."),
    ]
    x = PX
    for num, title, t, desc in scenes:
        box = (x, 280, x + 280, 520)
        rrect(d, box, 20, fill=WHITE)
        text(d, (x + 20, 300), num, F_mono(12, 550), VIOLET)
        text(d, (x + 20, 328), title, F_display(20, 700), NAVY)
        text(d, (x + 20, 366), t, F_mono(12, 500), COBALT)
        yy = 410
        for line in wrap(desc, F_body(14, 400), 236):
            text(d, (x + 20, yy), line, F_body(14, 400), MUTED)
            yy += 22
        x += 300

    # seats + specs
    paste(im, PLATES / "plate-seat-map.png", (PX, 560, 900, 1020), radius=24, focus=(0.5, 0.5))
    rrect(d, (940, 560, W - PX, 1020), 24, fill=WHITE)
    text(d, (980, 580), "МЕСТА В КАПСУЛЕ", F_mono(12, 550), VIOLET)
    text(d, (980, 608), "Шесть кресел у панорамы. A1–A3 — первый ряд к Земле.", F_body(15, 400), MUTED)
    seats = [("A2", "Рассветный край", "Свободно"), ("B1", "Центр панорамы", "Выбрано вами"), ("B2", "Звёздный борт", "Занято")]
    yy = 660
    for code, name, st in seats:
        rrect(d, (980, yy, 1760, yy + 78), 16, fill=ICE if st != "Выбрано вами" else (236, 236, 255, 255), outline=VIOLET if st == "Выбрано вами" else LINE)
        text(d, (1004, yy + 24), code, F_display(18, 700), NAVY)
        text(d, (1100, yy + 28), name, F_ui(15, 500), INK)
        text(d, (1728, yy + 40), st, F_ui(13, 600), VIOLET if st == "Выбрано вами" else MUTED, "rm")
        yy += 90
    pill(d, (980, 940), "Забронировать место на миссии →")
    save(im, "03-mission-aurora-itinerary.png")


def page_configure() -> None:
    im = frame("orbital.space/configure", None, bg=ICE, cta="Создать миссию")
    d = ImageDraw.Draw(im)
    text(d, (PX, 148), "MISSION BUILDER", F_mono(12, 550), VIOLET)
    text(d, (PX, 174), "СОБЕРИТЕ", F_display(36, 800), NAVY)
    text(d, (PX, 220), "СВОЮ МИССИЮ", F_display(36, 800), COBALT)

    selectors = [
        ("Миссия", "AURORA  ·  рассвет"),
        ("Дата", "18 марта 2026"),
        ("Программа", "Signature"),
        ("Пассажиры", "2 путешественника"),
        ("Место", "B1  ·  центр панорамы"),
        ("Опции", "Архив полёта 8K"),
    ]
    y = 300
    for k, v in selectors:
        rrect(d, (PX, y, 470, y + 88), 16, fill=WHITE)
        text(d, (PX + 22, y + 18), k.upper(), F_mono(10, 550), MUTED)
        text(d, (PX + 22, y + 44), v, F_ui(17, 650), NAVY)
        d.polygon([(430, y + 40), (442, y + 40), (436, y + 50)], fill=VIOLET)
        y += 100

    paste(im, PLATES / "plate-capsule-studio.png", (500, 240, 1450, 1000), focus=(0.5, 0.42))
    chips = [
        (620, 300, "Высота", "100 км"),
        (1180, 320, "Невесомость", "4 мин 10 с"),
        (700, 860, "Место B1", "выбрано"),
    ]
    for x, y, k, v in chips:
        im = glass(im, (x, y, x + 220, y + 78), 16, alpha=230)
        d = ImageDraw.Draw(im)
        text(d, (x + 18, y + 16), k.upper(), F_mono(10, 550), MUTED)
        text(d, (x + 18, y + 40), v, F_display(18, 700), NAVY)

    rrect(ImageDraw.Draw(im), (1488, 148, W - PX, 1008), 24, fill=WHITE)
    d = ImageDraw.Draw(im)
    text(d, (1520, 178), "ЖИВАЯ СМЕТА", F_mono(11, 550), VIOLET)
    text(d, (1520, 208), "2 480 000 €", F_display(32, 800), NAVY)
    text(d, (1520, 258), "за двоих · Signature", F_body(14, 400), MUTED)
    rows = [
        ("Длительность", "12 мин 40 с"),
        ("Высота", "100 км"),
        ("Невесомость", "4 мин 10 с"),
        ("Места", "B1 + B2"),
        ("Подготовка", "5 недель"),
        ("Архив 8K", "включено"),
    ]
    yy = 310
    for k, v in rows:
        text(d, (1520, yy), k, F_ui(14, 400), MUTED)
        text(d, (1830, yy), v, F_ui(14, 650), NAVY, "rm")
        d.line((1520, yy + 30, 1830, yy + 30), fill=LINE, width=1)
        yy += 52
    rrect(d, (1520, 640, 1830, 728), 14, fill=ICE)
    text(d, (1540, 660), "Изменение", F_ui(12, 400), MUTED)
    text(d, (1540, 686), "+ 180 000 €  ·  архив", F_ui(14, 650), VIOLET)
    pill(d, (1520, 770), "Создать мою миссию →")
    text(d, (1520, 850), "Ответ консультанта — 24 часа.", F_body(13, 400), MUTED)
    save(im, "04-configure.png")


def page_capsule() -> None:
    im = frame("orbital.space/capsule", "Капсула", bg=WHITE, cta="Смотреть миссии")
    paste(im, PLATES / "plate-capsule-studio.png", (380, 200, W - 80, 1000), focus=(0.5, 0.42))
    d = ImageDraw.Draw(im)
    text(d, (PX, 160), "VEHICLE", F_mono(12, 550), VIOLET)
    text(d, (PX, 188), "КАПСУЛА", F_display(64, 800), NAVY)
    text(d, (PX, 268), "ORBITAL C-1", F_display(28, 600), COBALT)
    lead = "Между премиальным автомобильным показом и аэрокосмическим интерфейсом. Шесть мест, панорама 220°, автономные системы."
    y = 330
    for line in wrap(lead, F_body(17, 400), 380):
        text(d, (PX, y), line, F_body(17, 400), MUTED)
        y += 26

    hotspots = [
        (980, 280, "Панорама 220°"),
        (1280, 360, "Кресла Signature"),
        (1500, 620, "Жизнеобеспечение"),
        (860, 720, "Оболочка Ti-C"),
    ]
    for x, y, label in hotspots:
        d.ellipse((x, y, x + 12, y + 12), fill=VIOLET, outline=WHITE, width=2)
        rrect(d, (x + 22, y - 10, x + 22 + twidth(F_ui(13, 600), label) + 24, y + 24), 10, fill=(255, 255, 255, 230), outline=LINE)
        text(d, (x + 34, y + 7), label, F_ui(13, 600), NAVY, "lm")

    im = glass(im, (PX, 820, 820, 1020), 20, alpha=230)
    d = ImageDraw.Draw(im)
    specs = [("9.4 м", "длина"), ("6", "мест"), ("24 ч", "автономия"), ("3.2 g", "макс. g")]
    for i, (v, k) in enumerate(specs):
        x = PX + 28 + i * 190
        text(d, (x, 860), v, F_display(26, 750), NAVY)
        text(d, (x, 900), k, F_mono(11, 500), MUTED)
    pill(d, (PX, 940), "Посмотреть доступные миссии →")
    save(im, "05-capsule.png")


def page_capsule_interior() -> None:
    im = frame("orbital.space/capsule", "Капсула", cta="Смотреть миссии")
    paste(im, PLATES / "plate-capsule-interior.png", (0, 114, 1040, H), focus=(0.5, 0.55))
    fade_left(im, (700, 114, 1040, H), WHITE, 1)  # noop-ish
    # right panel
    d = ImageDraw.Draw(im)
    d.rectangle((1040, 114, W, H), fill=WHITE)
    paste(im, PLATES / "plate-capsule-exploded.png", (1100, 150, 1840, 560), radius=20, focus=(0.5, 0.45))
    d = ImageDraw.Draw(im)
    text(d, (1100, 590), "ИНТЕРЬЕР И СИСТЕМЫ", F_mono(12, 550), VIOLET)
    text(d, (1100, 618), "Шесть кресел смотрят на Землю.", F_display(26, 700), NAVY)
    items = [
        ("Панорамный купол", "Непрерывный обзор без стоек в поле зрения."),
        ("Кресла Signature", "Фиксация на старте, свобода в невесомости."),
        ("Жизнеобеспечение", "Замкнутый контур на 24 часа автономии."),
        ("Связь и архив", "Канал с Землёй и личная 8K-запись полёта."),
    ]
    y = 680
    for t, s in items:
        text(d, (1100, y), t, F_ui(16, 650), NAVY)
        text(d, (1100, y + 24), s, F_body(14, 400), MUTED)
        y += 70
    save(im, "05-capsule-interior.png")


def page_experience() -> None:
    im = new_canvas()
    browser(im, "orbital.space/experience")
    paste(im, PLATES / "plate-weightlessness.png", (0, 42, W, H), focus=(0.45, 0.4))
    # dark-to-light editorial veil from left
    veil = gradient((720, H - 42), (8, 18, 48, 200), (8, 18, 48, 0), horizontal=True)
    overlay = Image.new("RGBA", im.size, (0, 0, 0, 0))
    overlay.paste(veil, (0, 42), veil)
    im = Image.alpha_composite(im, overlay)
    header(im, "Опыт", cta="Представить полёт")
    d = ImageDraw.Draw(im)
    text(d, (PX, 200), "THE EXPERIENCE", F_mono(12, 550), VIOLET_SOFT)
    text(d, (PX, 230), "ЗЕМЛЯ", F_display(72, 800), WHITE)
    text(d, (PX, 316), "ПЕРЕСТАЁТ", F_display(72, 800), WHITE)
    text(d, (PX, 402), "БЫТЬ КАРТОЙ", F_display(72, 800), (210, 190, 255, 255))
    quote = "«Четыре минуты, которые нельзя рассказать — только прожить.»"
    y = 520
    for line in wrap(quote, F_condensed(34, 500), 620):
        text(d, (PX, y), line, F_condensed(34, 500), WHITE)
        y += 40
    text(d, (PX, y + 10), "Мария В., миссия AURORA · 2025", F_ui(14, 400), (210, 220, 240, 255))

    scenes = ["Старт", "Высота", "Невесомость", "Рассвет", "Возвращение"]
    x = PX
    for i, s in enumerate(scenes):
        col = WHITE if i == 2 else (255, 255, 255, 160)
        text(d, (x, 860), s, F_ui(15, 650 if i == 2 else 500), col)
        if i == 2:
            d.line((x, 888, x + twidth(F_ui(15, 650), s), 888), fill=VIOLET, width=2)
        x += 170
    pill(d, (PX, 940), "Представить своё путешествие →", fill=WHITE, fg=ROYAL)
    save(im, "06-experience.png")


def page_experience_scenes() -> None:
    im = frame("orbital.space/experience", "Опыт", bg=WHITE, cta="Представить полёт")
    d = ImageDraw.Draw(im)
    text(d, (PX, 150), "ПЯТЬ СОСТОЯНИЙ ПОЛЁТА", F_mono(12, 550), VIOLET)
    text(d, (PX, 176), "Не инструкция. Ощущение.", F_display(36, 750), NAVY)

    blocks = [
        (PLATES / "plate-night-launch.png", "Старт", "Тело становится частью машины, а затем — частью неба."),
        (PLATES / "plate-earth-curve-dawn.png", "Высота", "Горизонт изгибается. Привычный мир заканчивается."),
        (PLATES / "plate-weightlessness.png", "Невесомость", "Тишина, в которой слышно собственное дыхание."),
        (PLATES / "plate-traveler-window.png", "Рассвет", "Ночь и день встречаются на одной планете."),
    ]
    x = PX
    for plate, title, desc in blocks:
        paste(im, plate, (x, 280, x + 420, 780), radius=22, focus=(0.5, 0.4))
        # caption plate
        rrect(d, (x, 800, x + 420, 1020), 20, fill=ICE)
        text(d, (x + 24, 830), title, F_display(22, 750), NAVY)
        yy = 880
        for line in wrap(desc, F_body(15, 400), 372):
            text(d, (x + 24, yy), line, F_body(15, 400), MUTED)
            yy += 24
        x += 448
    save(im, "06-experience-scenes.png")


def page_preparation() -> None:
    im = frame("orbital.space/preparation", "Подготовка", bg=WHITE, cta="Программа")
    paste(im, PLATES / "plate-training-center.png", (1000, 160, W - PX, 640), radius=24, focus=(0.45, 0.4))
    d = ImageDraw.Draw(im)
    text(d, (PX, 156), "PRE-FLIGHT", F_mono(12, 550), VIOLET)
    text(d, (PX, 184), "ПОДГОТОВКА", F_display(52, 800), NAVY)
    text(d, (PX, 252), "К ЧЕЛОВЕКУ,", F_display(52, 800), COBALT)
    text(d, (PX, 320), "НЕ К РАКЕТЕ", F_display(52, 800), NAVY)
    lead = "Пять недель, чтобы тело, внимание и команда стали одним контуром. Медицина, инструктаж, невесомость, экипаж, день старта."
    y = 410
    for line in wrap(lead, F_body(17, 400), 520):
        text(d, (PX, y), line, F_body(17, 400), MUTED)
        y += 26

    weeks = [
        ("01", "Неделя 1", "Медицинский контур и допуск"),
        ("02", "Неделя 2", "Брифинг миссии и капсулы"),
        ("03", "Неделя 3", "Невесомость и перегрузки"),
        ("04", "Неделя 4", "Экипаж и сценарии"),
        ("05", "Неделя 5", "Костюм и репетиция"),
        ("00", "День старта", "Тишина, запуск, Земля"),
    ]
    x = PX
    for num, title, desc in weeks:
        rrect(d, (x, 720, x + 280, 900), 18, fill=ICE)
        text(d, (x + 20, 740), num, F_mono(12, 550), VIOLET)
        text(d, (x + 20, 770), title, F_ui(16, 650), NAVY)
        text(d, (x + 20, 806), desc, F_body(14, 400), MUTED)
        x += 296

    rrect(d, (PX, 930, W - PX, 1036), 20, fill=ROYAL)
    text(d, (PX + 32, 962), "WHAT TO EXPECT", F_mono(11, 550), VIOLET_SOFT)
    text(d, (PX + 32, 988), "Допуск, питание, связь с семьёй, конфиденциальность, личные вещи в капсуле — в одной программе.", F_body(16, 400), WHITE)
    pill(d, (W - PX - 380, 960), "Получить программу подготовки →", fill=WHITE, fg=ROYAL)
    save(im, "07-preparation.png")


def page_about() -> None:
    im = frame("orbital.space/about", "О компании", cta="Узнать больше")
    paste(im, PLATES / "plate-engineering-hall.png", (0, 114, 980, H), focus=(0.5, 0.45))
    d = ImageDraw.Draw(im)
    d.rectangle((980, 114, W, H), fill=WHITE)
    text(d, (1040, 170), "DOCUMENTARY", F_mono(12, 550), VIOLET)
    text(d, (1040, 200), "МЫ ОТКРЫВАЕМ", F_display(40, 800), NAVY)
    text(d, (1040, 254), "ЗЕМЛЮ ЗАНОВО", F_display(40, 800), COBALT)
    story = (
        "ORBITAL возник не как туристический бренд, а как способ вернуть человеку масштаб. "
        "Инженеры, операторы миссий и специалисты по полётам собирают путешествие, в котором техника исчезает — остаётся только вид."
    )
    y = 330
    for line in wrap(story, F_body(17, 400), 760):
        text(d, (1040, y), line, F_body(17, 400), MUTED)
        y += 28
    people = [
        ("Лена Орлова", "Директор полётов"),
        ("Марк Эллис", "Главный инженер капсулы"),
        ("Айя Нгуен", "Подготовка пассажиров"),
        ("Ноа Берг", "Оператор миссий"),
    ]
    y = 540
    for name, role in people:
        d.ellipse((1040, y + 6, 1052, y + 18), fill=VIOLET)
        text(d, (1068, y), name, F_ui(16, 650), NAVY)
        text(d, (1068, y + 24), role, F_body(14, 400), MUTED)
        y += 70
    pill(d, (1040, 860), "Узнать больше об ORBITAL →")
    text(d, (1040, 940), "Atlantic Spaceport  ·  конструкторский зал C-1", F_mono(12, 500), MUTED)
    save(im, "08-about.png")


def page_about_ops() -> None:
    im = frame("orbital.space/about", "О компании", bg=ICE, cta="Узнать больше")
    d = ImageDraw.Draw(im)
    text(d, (PX, 150), "КАК СОБИРАЕТСЯ ПОЛЁТ", F_mono(12, 550), VIOLET)
    text(d, (PX, 176), "Не офис. Контур миссии.", F_display(36, 750), NAVY)
    paste(im, PLATES / "plate-mission-control.png", (PX, 260, 920, 780), radius=22, focus=(0.5, 0.45))
    paste(im, PLATES / "plate-briefing.png", (960, 260, W - PX, 780), radius=22, focus=(0.5, 0.4))
    captions = [
        (PX, 800, "Операторы ведут траекторию как партитуру: окна, коридоры, погода, экипаж."),
        (960, 800, "Перед полётом человек встречает тех, кто будет говорить с ним из центра."),
    ]
    for x, y, s in captions:
        for i, line in enumerate(wrap(s, F_body(16, 400), 820)):
            text(d, (x, y + i * 26), line, F_body(16, 400), MUTED)
    pill(d, (PX, 920), "Узнать больше об ORBITAL →")
    save(im, "08-about-operations.png")


def page_contacts() -> None:
    im = frame("orbital.space/contacts", "Контакты", bg=WHITE, cta="Обсудить полёт")
    d = ImageDraw.Draw(im)
    text(d, (PX, 150), "CONCIERGE", F_mono(12, 550), VIOLET)
    text(d, (PX, 176), "ОБСУДИМ", F_display(44, 800), NAVY)
    text(d, (PX, 232), "ВАШ ПОЛЁТ", F_display(44, 800), COBALT)

    fields = [
        ("Имя", "Александра Волкова"),
        ("Телефон", "+33 6 18 00 00 00"),
        ("Email", "a.volkova@mail.com"),
        ("Путешественники", "2"),
        ("Миссия", "AURORA  ·  18 марта 2026"),
        ("Комментарий", "Хотим места у рассвета, ряд A"),
    ]
    y = 320
    for i, (lab, val) in enumerate(fields):
        col = i % 2
        row = i // 2
        x = PX + col * 420
        yy = y + row * 110
        text(d, (x, yy), lab, F_ui(13, 500), MUTED)
        rrect(d, (x, yy + 26, x + 390, yy + 78), 14, fill=ICE, outline=LINE)
        text(d, (x + 16, yy + 52), val, F_ui(15, 500), NAVY, "lm")
    pill(d, (PX, 680), "Обсудить путешествие с консультантом →")

    # map / spaceport
    paste(im, PLATES / "plate-spaceport.png", (1000, 160, W - PX, 700), radius=24, focus=(0.7, 0.45))
    im = glass(im, (1040, 200, 1500, 360), 16, alpha=220)
    d = ImageDraw.Draw(im)
    text(d, (1064, 220), "ATLANTIC SPACEPORT", F_mono(11, 550), VIOLET)
    text(d, (1064, 248), "28.5°N  ·  операционный центр ORBITAL", F_ui(15, 600), NAVY)
    text(d, (1064, 280), "concierge@orbital.space  ·  +1 305 010 1000", F_body(14, 400), MUTED)

    # what next
    rrect(d, (PX, 780, W - PX, 1020), 24, fill=ROYAL)
    text(d, (PX + 36, 810), "WHAT HAPPENS NEXT", F_mono(12, 550), VIOLET_SOFT)
    steps = [
        ("01", "Консультация", "Личный разговор о мотивации и датах."),
        ("02", "Подбор миссии", "Маршрут, высота, характер вида."),
        ("03", "Подготовка", "Пятинедельный контур допуска."),
        ("04", "Бронирование", "Место в капсуле и сопровождение."),
    ]
    x = PX + 36
    for num, t, s in steps:
        text(d, (x, 860), num, F_mono(12, 550), VIOLET_SOFT)
        text(d, (x, 888), t, F_display(18, 700), WHITE)
        text(d, (x, 926), s, F_body(14, 400), (190, 200, 230, 255))
        x += 430
    save(im, "09-contacts.png")


def page_home_full() -> None:
    """Tall homepage combining the key narrative."""
    H2 = 3200
    im = new_canvas(W, H2, WHITE)
    browser(im, "orbital.space")
    header(im)
    paste(im, PLATES / "plate-earth-light-orbit.png", (600, 114, W, 1100), focus=(0.65, 0.42))
    fade_left(im, (600, 114, 1200, 1100), WHITE, 520)
    d = ImageDraw.Draw(im)
    text(d, (PX, 200), "YOUR FIRST ORBIT", F_mono(13, 550), VIOLET)
    text(d, (PX, 240), "ВАША", F_display(78, 800), NAVY)
    text(d, (PX, 326), "ПЕРВАЯ", F_display(78, 800), NAVY)
    text(d, (PX, 412), "ОРБИТА", F_display(78, 800), COBALT)
    y = 520
    for line in wrap("Премиальный космический туризм. Суборбитальные путешествия для частных клиентов.", F_body(18, 400), 500):
        text(d, (PX, y), line, F_body(18, 400), MUTED)
        y += 28
    pill(d, (PX, 620), "Выбрать свою миссию →")

    # advantages
    d.rectangle((0, 1100, W, 1680), fill=ICE)
    text(d, (PX, 1150), "ЗАЧЕМ ЛЕТЕТЬ", F_mono(12, 550), VIOLET)
    text(d, (PX, 1180), "Не отдых. Событие.", F_display(40, 750), NAVY)
    cards = [
        ("01", "Кривизна", "Увидеть Землю как целый объект, а не как страну."),
        ("02", "Невесомость", "Четыре минуты, которые меняют схему тела."),
        ("03", "Экипаж", "Персональное сопровождение на каждом этапе."),
        ("04", "Капсула", "Панорама и тишина вместо шумного шоу."),
    ]
    x = PX
    for num, t, s in cards:
        rrect(d, (x, 1280, x + 420, 1600), 22, fill=WHITE)
        text(d, (x + 28, 1310), num, F_mono(12, 550), VIOLET)
        text(d, (x + 28, 1350), t, F_display(24, 750), NAVY)
        yy = 1420
        for line in wrap(s, F_body(16, 400), 360):
            text(d, (x + 28, yy), line, F_body(16, 400), MUTED)
            yy += 26
        x += 448

    # missions strip
    text(d, (PX, 1740), "БЛИЖАЙШИЕ МИССИИ", F_display(36, 750), NAVY)
    missions = [("AURORA", "18 мар", "100 км"), ("ZENITH", "4 июн", "110 км"), ("HORIZON", "21 сен", "104 км")]
    x = PX
    for name, date, alt in missions:
        rrect(d, (x, 1820, x + 560, 2040), 20, fill=ICE)
        text(d, (x + 28, 1860), name, F_display(26, 750), NAVY)
        text(d, (x + 28, 1910), f"{date}  ·  {alt}  ·  открыта", F_ui(16, 400), MUTED)
        text(d, (x + 28, 1960), "Выбрать миссию →", F_ui(15, 650), COBALT)
        x += 588

    paste(im, PLATES / "plate-earth-curve-dawn.png", (0, 2120, W, 2680), focus=(0.5, 0.55))
    im = glass(im, (PX, 2220, 820, 2580), 22, alpha=210)
    d = ImageDraw.Draw(im)
    text(d, (PX + 36, 2260), "МАРШРУТ", F_mono(12, 550), VIOLET)
    text(d, (PX + 36, 2294), "Суборбитальная дуга над океаном. Апогей 100 км. Возвращение на воду.", F_body(18, 400), INK)
    text(d, (PX + 36, 2400), "Высота 100 км\nСкорость 3 700 км/ч\nОкно 14:22 UTC", F_display(22, 650), NAVY)

    rrect(d, (PX, 2780, W - PX, 3040), 28, fill=ROYAL)
    text(d, (PX + 48, 2840), "Готовы увидеть Землю целиком?", F_display(32, 750), WHITE)
    pill(d, (PX + 48, 2920), "Выбрать свою миссию →", fill=WHITE, fg=ROYAL)
    footer(im, 3100)
    save(im, "01-home-full.png")


def page_mobile_home() -> None:
    mw, mh = 860, 1864
    im = new_canvas(mw, mh, WHITE)
    # status
    d = ImageDraw.Draw(im)
    d.rectangle((0, 0, mw, 56), fill=WHITE)
    text(d, (40, 28), "9:41", F_ui(16, 600), NAVY, "lm")
    text(d, (mw - 40, 28), "ORBITAL", F_mono(11, 500), MUTED, "rm")
    logo(d, 36, 76, scale=0.95)
    # burger
    for i in range(2):
        d.line((mw - 64, 92 + i * 10, mw - 36, 92 + i * 10), fill=NAVY, width=2)
    paste(im, PLATES / "plate-earth-light-orbit.png", (0, 200, mw, 860), focus=(0.6, 0.4))
    fade_left(im, (0, 200, mw, 420), WHITE, 1)
    # overlay bottom of photo
    grad = gradient((mw, 180), (255, 255, 255, 0), WHITE)
    ov = Image.new("RGBA", im.size, (0, 0, 0, 0))
    ov.paste(grad, (0, 680), grad)
    im = Image.alpha_composite(im, ov)
    d = ImageDraw.Draw(im)
    text(d, (40, 230), "YOUR FIRST ORBIT", F_mono(11, 550), VIOLET)
    text(d, (40, 880), "ВАША", F_display(56, 800), NAVY)
    text(d, (40, 946), "ПЕРВАЯ ОРБИТА", F_display(40, 800), COBALT)
    y = 1020
    for line in wrap("Премиальные суборбитальные путешествия для частных клиентов.", F_body(16, 400), 780):
        text(d, (40, y), line, F_body(16, 400), MUTED)
        y += 26
    pill(d, (40, 1100), "Выбрать свою миссию →")
    stats = [("100 км", "высота"), ("12 мин", "полёт"), ("4 мин", "невесомость")]
    x = 40
    for v, k in stats:
        rrect(d, (x, 1200, x + 250, 1320), 18, fill=ICE)
        text(d, (x + 20, 1230), v, F_display(22, 750), NAVY)
        text(d, (x + 20, 1272), k, F_mono(11, 500), MUTED)
        x += 266
    text(d, (40, 1380), "Ближайшая · AURORA", F_ui(14, 500), MUTED)
    rrect(d, (40, 1420, mw - 40, 1620), 20, fill=ICE)
    text(d, (64, 1456), "AURORA", F_display(22, 750), NAVY)
    text(d, (64, 1500), "18 марта 2026  ·  100 км  ·  3 места", F_body(15, 400), MUTED)
    text(d, (64, 1550), "Выбрать миссию →", F_ui(15, 650), COBALT)
    # tab bar
    d.rectangle((0, mh - 96, mw, mh), fill=WHITE)
    d.line((0, mh - 96, mw, mh - 96), fill=LINE, width=1)
    tabs = ["Главная", "Миссии", "Капсула", "Контакты"]
    for i, t in enumerate(tabs):
        text(d, (mw / 8 + i * mw / 4, mh - 48), t, F_ui(12, 650 if i == 0 else 400), COBALT if i == 0 else MUTED, "mm")
    save(im, "10-home-mobile.png")


def page_mobile_missions() -> None:
    mw, mh = 860, 1864
    im = new_canvas(mw, mh, ICE)
    d = ImageDraw.Draw(im)
    d.rectangle((0, 0, mw, 120), fill=WHITE)
    logo(d, 36, 40, scale=0.9)
    text(d, (40, 150), "МИССИИ", F_display(40, 800), NAVY)
    x = 40
    for i, f in enumerate(["Все", "Рассвет", "Высота", "Ночь"]):
        if i == 0:
            pill(d, (x, 220), f)
        else:
            ghost_btn(d, (x, 220), f)
        x += twidth(F_ui(15, 600), f) + 50
    items = [
        ("AURORA", "Рассвет над Землёй", "18 мар · 100 км · 3 места"),
        ("ZENITH", "Максимальная высота", "4 июн · 110 км · 2 места"),
        ("HORIZON", "Панорама 360°", "21 сен · 104 км · 4 места"),
        ("ECLIPSE", "Ночной старт", "11 дек · 102 км · 5 мест"),
    ]
    y = 320
    for name, sub, meta in items:
        rrect(d, (40, y, mw - 40, y + 220), 22, fill=WHITE)
        text(d, (64, y + 36), name, F_display(22, 750), NAVY)
        text(d, (64, y + 80), sub, F_body(15, 400), MUTED)
        text(d, (64, y + 120), meta, F_mono(12, 500), COBALT)
        text(d, (64, y + 164), "Выбрать миссию →", F_ui(14, 650), VIOLET)
        y += 244
    d.rectangle((0, mh - 96, mw, mh), fill=WHITE)
    d.line((0, mh - 96, mw, mh - 96), fill=LINE, width=1)
    tabs = ["Главная", "Миссии", "Капсула", "Контакты"]
    for i, t in enumerate(tabs):
        text(d, (mw / 8 + i * mw / 4, mh - 48), t, F_ui(12, 650 if i == 1 else 400), COBALT if i == 1 else MUTED, "mm")
    save(im, "10-missions-mobile.png")


def page_mobile_configure() -> None:
    mw, mh = 860, 1864
    im = new_canvas(mw, mh, WHITE)
    d = ImageDraw.Draw(im)
    d.rectangle((0, 0, mw, 120), fill=WHITE)
    logo(d, 36, 40, scale=0.9)
    text(d, (40, 150), "КОНФИГУРАТОР", F_display(32, 800), NAVY)
    paste(im, PLATES / "plate-capsule-studio.png", (40, 220, mw - 40, 720), radius=22, focus=(0.5, 0.4))
    rows = [
        ("Миссия", "AURORA"),
        ("Дата", "18 марта 2026"),
        ("Программа", "Signature"),
        ("Пассажиры", "2"),
        ("Место", "B1 · центр панорамы"),
        ("Опции", "Архив полёта 8K"),
    ]
    y = 750
    for k, v in rows:
        text(d, (48, y), k, F_ui(13, 400), MUTED)
        text(d, (mw - 48, y), v, F_ui(15, 650), NAVY, "rm")
        d.line((48, y + 32, mw - 48, y + 32), fill=LINE, width=1)
        y += 56
    rrect(d, (40, y + 10, mw - 40, y + 150), 20, fill=ICE)
    text(d, (64, y + 36), "2 480 000 €", F_display(28, 800), NAVY)
    text(d, (64, y + 86), "за двоих · 12 мин · 100 км", F_body(14, 400), MUTED)
    pill(d, (40, y + 180), "Создать мою миссию →")
    save(im, "10-configure-mobile.png")


def page_ui_kit() -> None:
    im = new_canvas(W, H, ICE)
    browser(im, "orbital.space / system")
    d = ImageDraw.Draw(im)
    text(d, (PX, 80), "ORBITAL UI", F_display(40, 800), NAVY)
    text(d, (PX, 140), "Компоненты интерфейса миссии", F_body(18, 400), MUTED)
    # buttons
    text(d, (PX, 210), "КНОПКИ", F_mono(12, 550), VIOLET)
    pill(d, (PX, 240), "Выбрать свою миссию →")
    ghost_btn(d, (PX + 300, 240), "Изучить капсулу")
    pill(d, (PX + 560, 240), "Создать мою миссию →", fill=ROYAL)
    # cards
    text(d, (PX, 340), "ДАННЫЕ ПОЛЁТА", F_mono(12, 550), VIOLET)
    for i, (v, k) in enumerate([("100 км", "Высота"), ("12 мин", "Полёт"), ("4 мин", "Невесомость"), ("6", "Мест")]):
        x = PX + i * 220
        rrect(d, (x, 380, x + 200, 500), 18, fill=WHITE)
        text(d, (x + 20, 410), k.upper(), F_mono(11, 500), MUTED)
        text(d, (x + 20, 440), v, F_display(24, 750), NAVY)
    # inputs
    text(d, (PX, 540), "ФОРМА", F_mono(12, 550), VIOLET)
    rrect(d, (PX, 580, 520, 640), 14, fill=WHITE, outline=LINE)
    text(d, (PX + 20, 610), "Имя пассажира", F_ui(15, 400), MUTED, "lm")
    rrect(d, (540, 580, 980, 640), 14, fill=WHITE, outline=VIOLET, width=2)
    text(d, (560, 610), "AURORA  ·  18 марта", F_ui(15, 500), NAVY, "lm")
    # status
    text(d, (PX, 690), "СТАТУСЫ", F_mono(12, 550), VIOLET)
    for x, lab, col in ((PX, "Открыта", GREEN), (PX + 200, "Ограничена", AMBER), (PX + 440, "Лист ожидания", VIOLET)):
        rrect(d, (x, 730, x + 180, 780), 999, fill=WHITE, outline=col)
        text(d, (x + 90, 755), lab, F_ui(13, 600), col, "mm")
    paste(im, PLATES / "plate-globe-model.png", (1100, 200, 1840, 980), radius=28, focus=(0.45, 0.4))
    save(im, "00-ui-kit.png")


def main() -> None:
    pages = [
        page_brand,
        page_ui_kit,
        page_home_hero,
        page_home_missions,
        page_home_journey,
        page_home_full,
        page_missions,
        page_mission_briefing,
        page_mission_itinerary,
        page_configure,
        page_capsule,
        page_capsule_interior,
        page_experience,
        page_experience_scenes,
        page_preparation,
        page_about,
        page_about_ops,
        page_contacts,
        page_mobile_home,
        page_mobile_missions,
        page_mobile_configure,
    ]
    for fn in pages:
        fn()


if __name__ == "__main__":
    main()
