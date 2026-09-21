#!/usr/bin/env python3
"""NORTHLINE — high-fidelity website mockup renderer.

Composes editorial furniture-studio screens from photoreal assets
and a shared design system. Output: PNG mockups only.
"""

from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent
ASSETS = Path("/opt/cursor/artifacts/assets")
PHOTO_DIR = ROOT / "photos"
OUT = ROOT / "mockups"
EXPLORE = ROOT / "explorations"
FONT_DIR = ROOT / "fonts"

W = 1440
M = 72
NAV_H = 80

BG = (243, 238, 230)
BG2 = (236, 229, 218)
INK = (28, 25, 22)
MUTED = (107, 100, 92)
LINE = (209, 200, 188)
TERR = (184, 92, 56)
CREAM = (250, 246, 240)
WHITE = (253, 250, 246)

ONEST = str(FONT_DIR / "Onest.ttf")
UNBOUND = str(FONT_DIR / "Unbounded.ttf")

NAV = [
    ("Направления", "directions"),
    ("Проекты", "projects"),
    ("Процесс", "process"),
    ("Материалы", "materials"),
    ("Контакты", "contact"),
]


def font(path: str, size: int, weight: int = 400) -> ImageFont.FreeTypeFont:
    f = ImageFont.truetype(path, size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        pass
    return f


def f_ui(size: int, weight: int = 400) -> ImageFont.FreeTypeFont:
    return font(ONEST, size, weight)


def f_display(size: int, weight: int = 500) -> ImageFont.FreeTypeFont:
    return font(UNBOUND, size, weight)


def measure(text: str, fnt: ImageFont.FreeTypeFont) -> tuple[int, int]:
    box = fnt.getbbox(text)
    return box[2] - box[0], box[3] - box[1]


def text_width(text: str, fnt: ImageFont.FreeTypeFont, tracking: float = 0) -> int:
    if not text:
        return 0
    if tracking == 0:
        return measure(text, fnt)[0]
    x = 0
    for i, ch in enumerate(text):
        x += measure(ch, fnt)[0]
        if i < len(text) - 1:
            x += int(tracking * fnt.size)
    return x


def wrap(text: str, fnt: ImageFont.FreeTypeFont, max_w: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    cur = ""
    for word in words:
        trial = f"{cur} {word}".strip()
        if measure(trial, fnt)[0] <= max_w or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def cover(src: Image.Image, w: int, h: int) -> Image.Image:
    if src.mode != "RGB":
        src = src.convert("RGB")
    sw, sh = src.size
    scale = max(w / sw, h / sh)
    nw, nh = int(sw * scale + 1), int(sh * scale + 1)
    resized = src.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    top = (nh - h) // 2
    return resized.crop((left, top, left + w, top + h))


def load(name: str) -> Image.Image:
    path = PHOTO_DIR / name
    if not path.exists():
        raise FileNotFoundError(path)
    return Image.open(path).convert("RGB")


@dataclass
class Canvas:
    im: Image.Image
    d: ImageDraw.ImageDraw
    w: int
    h: int

    @classmethod
    def new(cls, w: int, h: int, color: tuple[int, int, int] = BG) -> "Canvas":
        im = Image.new("RGB", (w, h), color)
        return cls(im, ImageDraw.Draw(im), w, h)

    def save(self, name: str) -> Path:
        OUT.mkdir(parents=True, exist_ok=True)
        path = OUT / name
        self.im.save(path, "PNG", optimize=True)
        print(f"wrote {path} {self.im.size}")
        return path

    def line(self, x1: int, y1: int, x2: int, y2: int, color: tuple[int, int, int] = LINE, width: int = 1) -> None:
        self.d.line([(x1, y1), (x2, y2)], fill=color, width=width)

    def rect(self, box: tuple[int, int, int, int], color: tuple[int, int, int]) -> None:
        self.d.rectangle(box, fill=color)

    def paste(self, img: Image.Image, x: int, y: int) -> None:
        self.im.paste(img, (x, y))

    def photo(self, name: str, x: int, y: int, w: int, h: int) -> None:
        self.paste(cover(load(name), w, h), x, y)

    def text(
        self,
        xy: tuple[int, int],
        text: str,
        fnt: ImageFont.FreeTypeFont,
        fill: tuple[int, int, int] = INK,
        tracking: float = 0,
    ) -> int:
        x, y = xy
        if tracking == 0:
            self.d.text((x, y), text, font=fnt, fill=fill)
            return x + measure(text, fnt)[0]
        for i, ch in enumerate(text):
            self.d.text((x, y), ch, font=fnt, fill=fill)
            x += measure(ch, fnt)[0]
            if i < len(text) - 1:
                x += int(tracking * fnt.size)
        return x

    def multiline(
        self,
        xy: tuple[int, int],
        text: str,
        fnt: ImageFont.FreeTypeFont,
        fill: tuple[int, int, int],
        max_w: int,
        leading: float = 1.2,
    ) -> int:
        x, y = xy
        lines = wrap(text, fnt, max_w)
        lh = int(fnt.size * leading)
        for line in lines:
            self.d.text((x, y), line, font=fnt, fill=fill)
            y += lh
        return y

    def button(
        self,
        xy: tuple[int, int],
        label: str,
        kind: str = "primary",
        pad_x: int = 22,
        pad_y: int = 12,
    ) -> tuple[int, int]:
        fnt = f_ui(13, 500)
        tw, th = measure(label, fnt)
        x, y = xy
        w, h = tw + pad_x * 2, th + pad_y * 2
        if kind == "primary":
            self.rect((x, y, x + w, y + h), TERR)
            self.d.text((x + pad_x, y + pad_y - 1), label, font=fnt, fill=CREAM)
        else:
            self.d.rectangle((x, y, x + w, y + h), outline=INK, width=1)
            self.d.text((x + pad_x, y + pad_y - 1), label, font=fnt, fill=INK)
        return w, h

    def mark(self, x: int, y: int, h: int = 16) -> int:
        gap = 12
        self.rect((x, y, x + 2, y + h), INK)
        self.rect((x + gap, y, x + gap + 2, y + h), INK)
        self.rect((x, y + h // 2 - 1, x + gap + 2, y + h // 2 + 1), TERR)
        return x + gap + 10

    def wordmark(self, x: int, y: int, size: int = 16) -> int:
        mx = self.mark(x, y + 2, h=size - 2)
        return self.text((mx, y), "NORTHLINE", f_ui(size, 500), INK, tracking=0.16)

    def header(self, active: str | None = None) -> None:
        self.rect((0, 0, self.w, NAV_H), BG)
        self.wordmark(M, 30, 15)
        links_w = 0
        fnt = f_ui(14, 400)
        gaps = []
        for label, _ in NAV:
            gaps.append(text_width(label, fnt, 0.02) + 40)
            links_w += gaps[-1]
        x = (self.w - links_w) // 2 + 10
        for (label, key), gw in zip(NAV, gaps):
            color = INK if active == key else MUTED
            self.text((x, 31), label, fnt, color, tracking=0.02)
            if active == key:
                tw = text_width(label, fnt, 0.02)
                self.d.line([(x, 56), (x + tw, 56)], fill=TERR, width=1)
            x += gw
        label = "Обсудить проект"
        bw = text_width(label, f_ui(13, 500)) + 32
        self.button((self.w - M - bw, 24), label, "ghost", 16, 10)
        self.line(M, NAV_H - 1, self.w - M, NAV_H - 1, LINE)

    def footer(self, y: int) -> int:
        self.line(M, y, self.w - M, y, LINE)
        self.wordmark(M, y + 36, 14)
        self.text((M, y + 70), "Москва · студия и производство", f_ui(13, 400), MUTED)
        self.text((M, y + 92), "+7 495 120 44 80  ·  studio@northline.ru  ·  @northline.studio", f_ui(13, 400), MUTED)
        x = self.w - M
        for label, _ in reversed(NAV):
            tw = text_width(label, f_ui(13, 400))
            x -= tw
            self.text((x, y + 40), label, f_ui(13, 400), MUTED)
            x -= 28
        self.text((M, y + 130), "© NORTHLINE", f_ui(12, 400), MUTED)
        return y + 168

    def finish(self, name: str, y: int) -> Path:
        h = min(self.h, max(200, y + 8))
        if h < self.h:
            self.im = self.im.crop((0, 0, self.w, h))
            self.h = h
        return self.save(name)


def crop_save(src: Image.Image, box: tuple[int, int, int, int], name: str) -> None:
    PHOTO_DIR.mkdir(parents=True, exist_ok=True)
    src.crop(box).convert("RGB").save(PHOTO_DIR / name, "PNG")


def split_panels(im: Image.Image, n: int, name_prefix: str, names: list[str]) -> None:
    w, h = im.size
    # detect white gutters roughly by equal split
    pw = w // n
    for i, name in enumerate(names):
        # trim a couple px of divider
        left = i * pw + (4 if i else 0)
        right = (i + 1) * pw - (4 if i < n - 1 else 0)
        crop_save(im, (left, 0, right, h), name)


def extract_photos() -> None:
    PHOTO_DIR.mkdir(parents=True, exist_ok=True)
    if not ASSETS.exists():
        print("source assets missing — using existing photos/")
        return

    hero = Image.open(ASSETS / "photo-hero-kitchen.png")
    hero.save(PHOTO_DIR / "hero-kitchen.png")

    split_panels(
        Image.open(ASSETS / "photo-wardrobe-restaurant-office.png"),
        3,
        "tri",
        ["wardrobe.png", "office.png", "restaurant.png"],
    )
    split_panels(
        Image.open(ASSETS / "photo-sofa-country.png"),
        2,
        "sc",
        ["sofa.png", "country.png"],
    )
    split_panels(
        Image.open(ASSETS / "photo-kitchen-details.png"),
        3,
        "det",
        ["detail-stone.png", "detail-walnut.png", "detail-handle.png"],
    )
    split_panels(
        Image.open(ASSETS / "photo-workshop-plan.png"),
        2,
        "wp",
        ["workshop.png", "plan.png"],
    )

    macros = Image.open(ASSETS / "photo-materials-macros.png")
    # 3x2 sample tiles on cream
    boxes = [
        (70, 40, 390, 360, "macro-oak.png"),
        (480, 40, 800, 360, "macro-stone.png"),
        (890, 40, 1210, 360, "macro-metal.png"),
        (70, 390, 390, 700, "macro-glass.png"),
        (480, 390, 800, 700, "macro-linen.png"),
        (890, 390, 1210, 700, "macro-hardware.png"),
    ]
    for x1, y1, x2, y2, name in boxes:
        crop_save(macros, (x1, y1, x2, y2), name)

    p06 = Image.open(ASSETS / "06-projects.png")
    crop_save(p06, (0, 186, 864, 416), "project-apartment.png")
    crop_save(p06, (0, 700, 864, 836), "project-office.png")
    crop_save(p06, (0, 888, 430, 1108), "project-restaurant.png")

    p08 = Image.open(ASSETS / "08-materials.png")
    pairs = [
        (40, 186, 418, 308, "app-oak.png"),
        (432, 186, 824, 308, "app-oak-kitchen.png"),
        (40, 342, 418, 468, "app-stone.png"),
        (432, 342, 824, 468, "app-stone-room.png"),
        (40, 502, 418, 628, "app-metal.png"),
        (432, 502, 824, 628, "app-metal-table.png"),
        (40, 658, 418, 788, "app-glass.png"),
        (432, 658, 824, 788, "app-glass-cabinet.png"),
        (40, 818, 418, 938, "app-linen.png"),
        (432, 818, 824, 938, "app-linen-sofa.png"),
        (40, 962, 418, 1084, "app-hinge.png"),
        (432, 962, 824, 1084, "app-drawer.png"),
    ]
    for x1, y1, x2, y2, name in pairs:
        crop_save(p08, (x1, y1, x2, y2), name)

    p05 = Image.open(ASSETS / "05-solution-atelier.png")
    crop_save(p05, (400, 72, 864, 428), "atelier-hero.png")
    crop_save(p05, (40, 450, 288, 628), "atelier-stone.png")
    crop_save(p05, (300, 450, 558, 628), "atelier-drawer.png")
    crop_save(p05, (572, 450, 830, 628), "atelier-handle.png")

    p01 = Image.open(ASSETS / "01-home-hero.png")
    crop_save(p01, (620, 78, 1260, 678), "kitchen-island.png")

    empty = ASSETS / "photo-empty-room.png"
    if empty.exists():
        Image.open(empty).convert("RGB").save(PHOTO_DIR / "empty-room.png")

    p09 = Image.open(ASSETS / "09-contact.png")
    crop_save(p09, (48, 700, 300, 980), "still-life.png")

    p03 = Image.open(ASSETS / "03-home-projects-cta.png")
    crop_save(p03, (48, 118, 420, 330), "home-apt.png")
    crop_save(p03, (444, 118, 816, 330), "home-house.png")

    print("photos extracted", len(list(PHOTO_DIR.glob("*.png"))))


def copy_explorations() -> None:
    EXPLORE.mkdir(parents=True, exist_ok=True)
    if not ASSETS.exists():
        return
    for name in sorted(os.listdir(ASSETS)):
        if name.endswith(".png"):
            src = ASSETS / name
            dst = EXPLORE / name
            if src.exists():
                Image.open(src).save(dst, "PNG")


def render_brand() -> None:
    c = Canvas.new(1600, 1000, BG)
    c.wordmark(80, 72, 22)
    c.text((80, 120), "Визуальная система сайта", f_display(28, 500), INK)
    c.text((80, 168), "Editorial furniture atelier · 2026", f_ui(14, 400), MUTED, 0.08)

    swatches = [
        (BG, "Milk", "#F3EEE6"),
        (INK, "Graphite", "#1C1916"),
        (TERR, "Terracotta", "#B85C38"),
        ((90, 64, 50), "Walnut", "#5A4032"),
        ((196, 165, 116), "Oak", "#C4A574"),
        ((201, 187, 168), "Stone", "#C9BBA8"),
        (LINE, "Hairline", "#D1C8BC"),
        (MUTED, "Muted", "#6B645C"),
    ]
    c.text((80, 230), "Цвет", f_ui(12, 500), MUTED, 0.14)
    for i, (col, name, hexv) in enumerate(swatches):
        x = 80 + i * 180
        c.rect((x, 258, x + 156, 258 + 72), col)
        if col == BG:
            c.d.rectangle((x, 258, x + 156, 330), outline=LINE)
        c.text((x, 342), name, f_ui(13, 500), INK)
        c.text((x, 364), hexv, f_ui(12, 400), MUTED)

    c.text((80, 420), "Типографика", f_ui(12, 500), MUTED, 0.14)
    c.text((80, 450), "Мебель как часть", f_display(52, 500), INK)
    c.text((80, 518), "архитектуры.", f_display(52, 500), INK)
    c.multiline(
        (80, 600),
        "Unbounded для крупных заголовков. Onest для навигации, подписей и текста. Широкий трекинг в слове NORTHLINE.",
        f_ui(16, 400),
        MUTED,
        520,
        1.45,
    )

    c.text((720, 450), "Компоненты", f_ui(12, 500), MUTED, 0.14)
    c.button((720, 486), "Обсудить проект", "primary")
    c.button((920, 486), "Смотреть направления", "ghost")
    c.line(720, 560, 1520, 560)
    labels = ["Направления", "Проекты", "Процесс", "Материалы", "Контакты"]
    x = 720
    for i, lab in enumerate(labels):
        col = INK if i == 0 else MUTED
        c.text((x, 580), lab, f_ui(14, 400), col, 0.04)
        if i == 0:
            tw = text_width(lab, f_ui(14, 400), 0.04)
            c.d.line([(x, 604), (x + tw, 604)], fill=TERR, width=1)
        x += text_width(lab, f_ui(14, 400), 0.04) + 32

    c.photo("macro-oak.png", 720, 640, 180, 180)
    c.photo("macro-stone.png", 916, 640, 180, 180)
    c.photo("macro-linen.png", 1112, 640, 180, 180)
    c.photo("atelier-hero.png", 1308, 640, 212, 180)
    c.text((720, 836), "Дуб", f_ui(12, 400), MUTED, 0.1)
    c.text((916, 836), "Камень", f_ui(12, 400), MUTED, 0.1)
    c.text((1112, 836), "Лён", f_ui(12, 400), MUTED, 0.1)
    c.text((1308, 836), "Интерьер", f_ui(12, 400), MUTED, 0.1)

    c.line(80, 900, 1520, 900)
    c.text((80, 930), "Сетка 1440 · поля 72 · волосяные линии 1 px · асимметрия editorial", f_ui(13, 400), MUTED)
    c.text((1100, 930), "Оригинальный знак · не является копией чужого бренда", f_ui(13, 400), MUTED)
    c.save("00-brand-system.png")


def render_home() -> None:
    h = 7000
    c = Canvas.new(W, h, BG)
    c.header()

    # Hero
    c.photo("hero-kitchen.png", 0, NAV_H, W, 760)
    # soft veil on left for type
    veil = Image.new("RGBA", (W, 760), (0, 0, 0, 0))
    vd = ImageDraw.Draw(veil)
    for i in range(640):
        a = int(95 * (1 - i / 640))
        vd.line([(i, 0), (i, 760)], fill=(28, 25, 22, a))
    c.im.paste(Image.alpha_composite(c.im.crop((0, NAV_H, W, NAV_H + 760)).convert("RGBA"), veil), (0, NAV_H))
    c.d = ImageDraw.Draw(c.im)

    c.text((M, 210), "Студия индивидуальной мебели", f_ui(13, 400), CREAM, 0.12)
    y = c.multiline((M, 250), "Мебель как часть архитектуры", f_display(58, 500), WHITE, 620, 1.12)
    c.multiline(
        (M, y + 16),
        "Проектируем и производим кухни, системы хранения и предметы интерьера для жилых и коммерческих пространств.",
        f_ui(17, 400),
        (235, 228, 220),
        520,
        1.45,
    )
    c.button((M, y + 130), "Обсудить проект", "primary", 22, 13)
    c.button((M + 210, y + 130), "Смотреть направления", "ghost", 22, 13)
    c.text((W - M - 220, NAV_H + 720), "Проект Atelier — Москва", f_ui(12, 400), CREAM, 0.06)

    # Manifesto
    y = NAV_H + 760 + 80
    c.text((M, y), "01  —  Подход", f_ui(12, 500), MUTED, 0.14)
    c.multiline((M, y + 36), "Мы проектируем мебель как часть стен, света и маршрутов.", f_display(40, 500), INK, 720, 1.15)
    c.multiline(
        (M + 780, y + 48),
        "Каждый объект начинается с пространства: пропорций комнаты, света, материалов стен и того, как человек движется по дому. Мебель NORTHLINE не ставится в интерьер — она собирает его.",
        f_ui(16, 400),
        MUTED,
        500,
        1.5,
    )
    c.photo("plan.png", M + 780, y + 220, 500, 200)
    y += 460
    c.line(M, y, W - M, y)

    # Directions
    y += 56
    c.text((M, y), "02  —  Направления", f_ui(12, 500), MUTED, 0.14)
    c.text((M, y + 32), "Шесть способов встроить мебель в пространство", f_display(28, 500), INK)
    y += 100

    c.photo("atelier-hero.png", M, y, 820, 420)
    c.rect((M, y + 420, M + 820, y + 500), INK)
    c.text((M + 28, y + 440), "Кухни", f_ui(20, 500), CREAM)
    c.text((M + 28, y + 470), "Встроенные системы для жилых интерьеров  →", f_ui(13, 400), (210, 200, 190))

    c.photo("wardrobe.png", M + 844, y, 452, 236)
    c.text((M + 844, y + 248), "Гардеробные", f_ui(18, 500), INK)
    c.text((M + 844, y + 276), "Хранение, продуманное до движения  →", f_ui(13, 400), MUTED)

    c.photo("office.png", M + 844, y + 320, 452, 180)
    c.text((M + 844, y + 508), "Системы хранения", f_ui(18, 500), INK)
    y += 560

    c.photo("sofa.png", M, y, 636, 340)
    c.text((M, y + 356), "Мягкая мебель", f_ui(18, 500), INK)
    c.text((M, y + 384), "Предметы, которые держат пространство  →", f_ui(13, 400), MUTED)

    c.photo("restaurant.png", M + 660, y, 636, 340)
    c.text((M + 660, y + 356), "Коммерческие пространства", f_ui(18, 500), INK)
    c.text((M + 660, y + 384), "Рестораны, офисы, общественные интерьеры  →", f_ui(13, 400), MUTED)
    y += 440

    c.photo("workshop.png", M, y, 420, 220)
    c.photo("plan.png", M + 444, y, 300, 220)
    c.photo("macro-oak.png", M + 768, y, 140, 220)
    c.photo("macro-stone.png", M + 920, y, 140, 220)
    c.text((M + 1084, y + 20), "Индивидуальные решения", f_ui(20, 500), INK)
    c.multiline(
        (M + 1084, y + 60),
        "По чертежам архитекторов и дизайнеров. Точные размеры, выбранные материалы, единый вид пространства.",
        f_ui(14, 400),
        MUTED,
        210,
        1.45,
    )
    c.text((M + 1084, y + 190), "Обсудить задачу  →", f_ui(13, 500), TERR)
    y += 280
    c.line(M, y, W - M, y)

    # Materials
    y += 56
    c.text((M, y), "03  —  Материалы", f_ui(12, 500), MUTED, 0.14)
    c.multiline((M, y + 32), "Поверхности, которые становятся интерьером", f_display(28, 500), INK, 640, 1.15)
    c.text((W - M - 200, y + 48), "Все материалы  →", f_ui(14, 500), TERR)
    y += 110
    for i, name in enumerate(["macro-oak.png", "macro-stone.png", "macro-metal.png", "macro-glass.png", "macro-linen.png", "macro-hardware.png"]):
        x = M + i * 216
        c.photo(name, x, y, 204, 160)
    labels = ["Дерево", "Камень", "Металл", "Стекло", "Текстиль", "Фурнитура"]
    for i, lab in enumerate(labels):
        c.text((M + i * 216, y + 172), lab, f_ui(13, 400), MUTED, 0.08)
    y += 230
    c.line(M, y, W - M, y)

    # Projects
    y += 56
    c.text((M, y), "04  —  Проекты", f_ui(12, 500), MUTED, 0.14)
    c.text((M, y + 32), "Пространства, собранные из мебели", f_display(28, 500), INK)
    c.text((W - M - 160, y + 48), "Все проекты  →", f_ui(14, 500), TERR)
    y += 110
    c.photo("project-apartment.png", M, y, 780, 360)
    c.photo("country.png", M + 804, y, 492, 360)
    c.text((M, y + 376), "01  Квартира  ·  Москва", f_ui(13, 400), INK)
    c.text((M, y + 398), "Кухня Atelier, хранение, мягкая мебель", f_ui(13, 400), MUTED)
    c.text((M + 804, y + 376), "02  Загородный дом  ·  Голицыно", f_ui(13, 400), INK)
    c.text((M + 804, y + 398), "Обеденная группа, встроенные шкафы", f_ui(13, 400), MUTED)
    y += 440
    c.photo("project-office.png", M, y, 636, 240)
    c.photo("project-restaurant.png", M + 660, y, 636, 240)
    c.text((M, y + 256), "03  Офис  ·  системы хранения", f_ui(13, 400), MUTED)
    c.text((M + 660, y + 256), "04  Ресторан  ·  посадочная мебель", f_ui(13, 400), MUTED)
    y += 310
    c.line(M, y, W - M, y)

    # Process
    y += 56
    c.text((M, y), "05  —  Процесс", f_ui(12, 500), MUTED, 0.14)
    c.text((M, y + 32), "Пять шагов от разговора до монтажа", f_display(28, 500), INK)
    y += 100
    steps = [
        ("01", "Консультация", "still-life.png"),
        ("02", "Замер", "empty-room.png"),
        ("03", "Проектирование", "plan.png"),
        ("04", "Производство", "workshop.png"),
        ("05", "Монтаж", "atelier-hero.png"),
    ]
    c.line(M + 40, y + 86, W - M - 40, y + 86, LINE)
    for i, (num, title, photo) in enumerate(steps):
        x = M + i * 260
        c.photo(photo, x, y, 220, 120)
        c.rect((x + 86, y + 78, x + 134, y + 96), BG)
        c.text((x + 94, y + 78), num, f_ui(13, 500), TERR)
        c.text((x, y + 140), title, f_ui(15, 500), INK)
    y += 200
    c.line(M, y, W - M, y)

    # Why
    y += 56
    c.text((M, y), "06  —  Почему NORTHLINE", f_ui(12, 500), MUTED, 0.14)
    reasons = [
        "Индивидуальное проектирование",
        "Работа с архитекторами и дизайнерами",
        "Подбор материалов",
        "Производство под конкретный проект",
        "Точный монтаж",
        "Полный цикл от идеи до установки",
    ]
    c.multiline((M + 720, y + 28), "Одно пространство — один авторский контур мебели. Мы держим проект от первого разговора до последнего шурупа на объекте.", f_ui(18, 400), MUTED, 560, 1.45)
    yy = y + 40
    for r in reasons:
        c.line(M, yy, M + 640, yy)
        c.text((M, yy + 14), r, f_ui(22, 400), INK)
        yy += 58
    c.line(M, yy, M + 640, yy)
    y = max(yy, y + 220) + 50

    # CTA
    c.rect((0, y, W, y + 380), BG2)
    c.text((M, y + 80), "Создадим мебель", f_display(48, 500), INK)
    c.text((M, y + 142), "для вашего пространства.", f_display(48, 500), INK)
    c.multiline(
        (M, y + 220),
        "Расскажите о проекте, интерьере или задаче — подготовим подходящее решение.",
        f_ui(17, 400),
        MUTED,
        560,
        1.45,
    )
    c.button((M, y + 290), "Обсудить проект", "primary", 24, 14)
    c.photo("still-life.png", W - M - 360, y + 50, 360, 280)

    c.finish("01-home.png", c.footer(y + 400))


def render_directions() -> None:
    h = 4000
    c = Canvas.new(W, h, BG)
    c.header("directions")
    y = NAV_H + 72
    c.text((M, y), "Направления", f_ui(12, 500), MUTED, 0.14)
    c.multiline((M, y + 28), "Шесть способов встроить мебель в пространство.", f_display(44, 500), INK, 900, 1.12)
    c.multiline(
        (M, y + 160),
        "Кухни, хранение, гардеробные, мягкая мебель, коммерческие интерьеры и решения по чертежам. Каждое направление — отдельный способ собрать пространство, а не полка интернет-магазина.",
        f_ui(16, 400),
        MUTED,
        720,
        1.5,
    )
    y += 250

    blocks = [
        ("atelier-hero.png", "Кухни", "Встроенные системы для жилых интерьеров. Остров, фасады, камень и свет как одна конструкция.", 480),
        ("office.png", "Системы хранения", "Стены, которые работают: библиотеки, ниши, скрытые шкафы в архитектуре комнаты.", 360),
        ("wardrobe.png", "Гардеробные", "Гардероб как отдельная комната: свет, ящики, наполнение, спокойный ритм фасадов.", 420),
        ("sofa.png", "Мягкая мебель", "Диваны и кресла, спроектированные к остальной мебели объекта — ткань, масштаб, посадка.", 400),
        ("restaurant.png", "Коммерческие пространства", "Посадка, стойки и хранение для ресторанов, офисов и общественных интерьеров.", 400),
        ("workshop.png", "Индивидуальные решения", "По чертежам архитектора: точные узлы, выбранные материалы, единый контур объекта.", 340),
    ]
    for i, (photo, title, desc, ph) in enumerate(blocks):
        if i % 2 == 0:
            c.photo(photo, M, y, 860, ph)
            c.text((M + 900, y + 24), f"0{i+1}", f_ui(13, 500), TERR)
            c.text((M + 900, y + 56), title, f_display(28, 500), INK)
            ny = c.multiline((M + 900, y + 110), desc, f_ui(15, 400), MUTED, 380, 1.45)
            c.text((M + 900, ny + 16), "Смотреть направление  →", f_ui(14, 500), TERR)
        else:
            c.photo(photo, W - M - 860, y, 860, ph)
            c.text((M, y + 24), f"0{i+1}", f_ui(13, 500), TERR)
            c.text((M, y + 56), title, f_display(28, 500), INK)
            ny = c.multiline((M, y + 110), desc, f_ui(15, 400), MUTED, 380, 1.45)
            c.text((M, ny + 16), "Смотреть направление  →", f_ui(14, 500), TERR)
        y += ph + 56

    c.finish("02-directions.png", c.footer(y + 20))


def render_solution() -> None:
    h = 2920
    c = Canvas.new(W, h, BG)
    c.header("directions")
    y = NAV_H + 40
    c.text((M, y), "Направления  /  Кухни  /  Atelier", f_ui(12, 400), MUTED, 0.06)
    y += 48
    c.text((M, y), "Кухни", f_ui(12, 500), MUTED, 0.14)
    c.text((M, y + 28), "Atelier", f_display(56, 500), INK)
    c.multiline(
        (M, y + 110),
        "Встроенная кухня с островом из камня. Фасады в шпоне ореха, скрытая фурнитура, свет в линии карниза.",
        f_ui(16, 400),
        MUTED,
        460,
        1.45,
    )
    c.button((M, y + 210), "Обсудить проект", "primary", 22, 13)
    c.photo("atelier-hero.png", M + 560, y, 736, 460)
    y += 500

    for i, (ph, lab) in enumerate(
        [("detail-stone.png", "Камень"), ("detail-walnut.png", "Орех"), ("detail-handle.png", "Фурнитура")]
    ):
        x = M + i * 432
        c.photo(ph, x, y, 420, 260)
        c.text((x, y + 276), lab, f_ui(14, 400), MUTED, 0.1)
    y += 340
    c.line(M, y, W - M, y)
    y += 48

    c.text((M, y), "Варианты исполнения", f_display(26, 500), INK)
    c.multiline(
        (M, y + 50),
        "Под проект выбираются фасады, камень острова, фурнитура и рисунок шпона. Atelier — не готовая модель, а система узлов.",
        f_ui(15, 400),
        MUTED,
        480,
        1.45,
    )
    chips = [
        ("macro-oak.png", "Дуб"),
        ("detail-walnut.png", "Орех"),
        ("macro-linen.png", "Лён"),
        ("macro-stone.png", "Камень"),
        ("macro-metal.png", "Металл"),
    ]
    for i, (ph, lab) in enumerate(chips):
        x = M + 560 + i * 140
        img = cover(load(ph), 120, 120)
        # circle crop
        mask = Image.new("L", (120, 120), 0)
        ImageDraw.Draw(mask).ellipse((0, 0, 119, 119), fill=255)
        circ = Image.new("RGB", (120, 120), BG)
        circ.paste(img, (0, 0))
        circ.putalpha(mask)
        c.im.paste(circ, (x, y + 20), circ)
        c.d = ImageDraw.Draw(c.im)
        c.text((x + 20, y + 152), lab, f_ui(12, 400), MUTED)
    y += 220
    c.line(M, y, W - M, y)
    y += 48

    c.text((M, y), "Проектирование", f_display(26, 500), INK)
    c.photo("plan.png", M, y + 56, 640, 360)
    specs = [
        ("Корпус", "Шпон ореха / дуб"),
        ("Столешница", "Кварц, матовый"),
        ("Фурнитура", "Скрытые петли, доводчики"),
        ("Размеры", "По объекту"),
        ("Свет", "Линейная подсветка"),
        ("Срок", "Проектирование 3–5 недель"),
    ]
    yy = y + 72
    c.text((M + 700, y + 56), "Каждое решение проектируется под объект.", f_ui(16, 400), INK)
    yy = y + 110
    for k, v in specs:
        c.line(M + 700, yy, W - M, yy)
        c.text((M + 700, yy + 14), k, f_ui(14, 400), MUTED)
        c.text((M + 980, yy + 14), v, f_ui(14, 400), INK)
        yy += 48
    c.line(M + 700, yy, W - M, yy)
    y += 460

    c.rect((0, y, W, y + 160), TERR)
    c.text((M, y + 56), "Обсудим Atelier для вашего интерьера", f_display(24, 500), CREAM)
    # ghost on terracotta
    fnt = f_ui(13, 500)
    label = "Обсудить проект"
    tw, th = measure(label, fnt)
    bx, by = W - M - tw - 44, y + 58
    c.d.rectangle((bx, by, bx + tw + 44, by + th + 24), outline=CREAM, width=1)
    c.d.text((bx + 22, by + 11), label, font=fnt, fill=CREAM)
    c.finish("03-solution-atelier.png", c.footer(y + 180))


def render_projects() -> None:
    h = 2860
    c = Canvas.new(W, h, BG)
    c.header("projects")
    y = NAV_H + 72
    c.text((M, y), "Проекты", f_ui(12, 500), MUTED, 0.14)
    c.multiline((M, y + 28), "Пространства, собранные из мебели.", f_display(44, 500), INK, 900, 1.12)
    c.multiline(
        (M, y + 140),
        "Квартиры, дома, офисы и рестораны. В каждом проекте — свой набор решений: кухня, хранение, мягкая группа, коммерческая посадка.",
        f_ui(16, 400),
        MUTED,
        700,
        1.5,
    )
    y += 230

    cases = [
        ("01", "Квартира", "Москва, Остоженка", "Кухня Atelier, системы хранения, мягкая мебель", "project-apartment.png", 420, True),
        ("02", "Загородный дом", "Голицыно", "Обеденная группа, буфет, встроенные шкафы", "country.png", 380, False),
        ("03", "Офис", "Studio North", "Стена хранения, стол совещаний, кабинеты", "project-office.png", 280, True),
        ("04", "Ресторан", "Коммерческое пространство", "Посадочная мебель, банкетки, сервисные зоны", "project-restaurant.png", 380, False),
    ]
    for num, title, place, items, photo, ph, full in cases:
        if full:
            c.photo(photo, M, y, W - 2 * M, ph)
            c.text((M, y + ph + 20), f"{num}   {title}", f_ui(18, 500), INK)
            c.text((M + 280, y + ph + 22), f"{place}  ·  {items}", f_ui(14, 400), MUTED)
            y += ph + 80
        else:
            c.photo(photo, M, y, 760, ph)
            c.text((M + 800, y + 40), num, f_ui(13, 500), TERR)
            c.text((M + 800, y + 72), title, f_display(32, 500), INK)
            c.text((M + 800, y + 130), place, f_ui(15, 400), MUTED)
            c.multiline((M + 800, y + 170), items, f_ui(15, 400), INK, 480, 1.45)
            y += ph + 56

    c.finish("04-projects.png", c.footer(y + 10))


def render_process() -> None:
    h = 1680
    c = Canvas.new(W, h, BG)
    c.header("process")
    y = NAV_H + 72
    c.text((M, y), "Процесс", f_ui(12, 500), MUTED, 0.14)
    c.multiline((M, y + 28), "Пять шагов от разговора до монтажа.", f_display(40, 500), INK, 820, 1.12)
    c.multiline(
        (M + 860, y + 40),
        "Короткий, прозрачный цикл. Мы не продаём готовые линейки — ведём один проект от консультации до установки на объекте.",
        f_ui(16, 400),
        MUTED,
        420,
        1.5,
    )
    y += 200
    c.line(M, y + 8, W - M, y + 8, LINE)

    steps = [
        ("01", "Консультация", "Задача, объект, бюджет и первые материалы.", "still-life.png"),
        ("02", "Замер", "Снимаем пространство и изучаем свет, оси, инженерию.", "empty-room.png"),
        ("03", "Проектирование", "Чертежи, узлы, образцы, согласование с архитектором.", "plan.png"),
        ("04", "Производство", "Корпуса, фасады, камень и мягкие элементы на нашем цикле.", "workshop.png"),
        ("05", "Доставка и монтаж", "Сборка на объекте, подгонка, сдача пространства.", "atelier-hero.png"),
    ]
    for i, (num, title, desc, photo) in enumerate(steps):
        x = M + i * 260
        c.rect((x + 92, y, x + 128, y + 16), BG)
        c.text((x + 100, y - 4), num, f_ui(14, 500), TERR)
        c.photo(photo, x, y + 36, 236, 160)
        c.text((x, y + 214), title, f_ui(16, 500), INK)
        c.multiline((x, y + 244), desc, f_ui(13, 400), MUTED, 236, 1.4)
    y += 420

    c.rect((M, y, W - M, y + 200), BG2)
    c.text((M + 48, y + 56), "Готовы начать с консультации?", f_display(26, 500), INK)
    c.text((M + 48, y + 110), "Пришлите план, референсы или просто опишите пространство.", f_ui(15, 400), MUTED)
    c.button((M + 48, y + 148), "Обсудить проект", "primary")
    c.photo("workshop.png", W - M - 280, y + 24, 232, 152)

    c.finish("05-process.png", c.footer(y + 240))


def render_materials() -> None:
    h = 2680
    c = Canvas.new(W, h, BG)
    c.header("materials")
    y = NAV_H + 72
    c.text((M, y), "Материалы", f_ui(12, 500), MUTED, 0.14)
    c.multiline((M, y + 28), "Поверхности, которые становятся интерьером.", f_display(40, 500), INK, 980, 1.12)
    c.multiline(
        (M, y + 150),
        "Дерево, камень, металл, стекло, текстиль и фурнитура. Сначала тактильный образец — затем тот же материал в готовом пространстве.",
        f_ui(16, 400),
        MUTED,
        720,
        1.5,
    )
    y += 230

    rows = [
        ("Дерево", "Шпон и массив дуба и ореха. Открытая текстура, спокойный мат.", "app-oak.png", "app-oak-kitchen.png"),
        ("Камень", "Кварц и известняк для островов и столешниц. Холод рядом с деревом.", "app-stone.png", "app-stone-room.png"),
        ("Металл", "Чёрнёная сталь и тонкие опоры. Конструктивный, не декоративный жест.", "app-metal.png", "app-metal-table.png"),
        ("Стекло", "Рифлёные фасады, которые держат свет и скрывают наполнение.", "app-glass.png", "app-glass-cabinet.png"),
        ("Текстиль", "Лён и букле для мягких групп, подобранных к корпусной мебели.", "app-linen.png", "app-linen-sofa.png"),
        ("Фурнитура", "Петли, направляющие, ручки. То, что ощущается каждый день.", "app-hinge.png", "app-drawer.png"),
    ]
    for title, desc, left, right in rows:
        c.photo(left, M, y, 420, 200)
        c.photo(right, M + 432, y, 520, 200)
        c.text((M + 980, y + 16), title, f_display(22, 500), INK)
        c.multiline((M + 980, y + 60), desc, f_ui(14, 400), MUTED, 300, 1.45)
        y += 232

    c.text((M, y + 10), "Обсудить материалы проекта  →", f_ui(15, 500), TERR)
    c.finish("06-materials.png", c.footer(y + 70))


def render_contact() -> None:
    h = 1280
    c = Canvas.new(W, h, BG)
    c.header("contact")
    y = NAV_H + 72
    c.wordmark(M, y, 18)
    c.text((M, y + 56), "Студия", f_ui(12, 500), MUTED, 0.14)
    c.text((M, y + 88), "+7 495 120 44 80", f_ui(20, 400), INK)
    c.text((M, y + 124), "studio@northline.ru", f_ui(20, 400), INK)
    c.text((M, y + 160), "Telegram  @northline.studio", f_ui(20, 400), INK)
    y2 = y + 220
    c.line(M, y2, M + 480, y2)
    c.text((M, y2 + 24), "Москва, Большая Никитская, 21", f_ui(15, 400), INK)
    c.text((M, y2 + 52), "Студия и шоурум материалов", f_ui(14, 400), MUTED)
    c.text((M, y2 + 88), "Работаем в Москве и области.", f_ui(15, 400), INK)
    c.text((M, y2 + 116), "Проекты по России — по запросу.", f_ui(15, 400), MUTED)
    c.photo("still-life.png", M, y2 + 170, 420, 280)

    # form
    fx = M + 640
    c.text((fx, y), "Заявка на проект", f_display(32, 500), INK)
    c.multiline((fx, y + 56), "Расскажите о пространстве — ответим в течение одного рабочего дня.", f_ui(15, 400), MUTED, 560, 1.45)

    fields = [
        ("Имя", ""),
        ("Телефон", ""),
        ("Тип объекта", "Квартира"),
        ("Что необходимо спроектировать", "Кухня"),
        ("Комментарий", ""),
    ]
    fy = y + 140
    for label, value in fields:
        c.text((fx, fy), label, f_ui(12, 400), MUTED, 0.08)
        extra = 48 if label == "Комментарий" else 0
        if value:
            c.text((fx, fy + 22), value, f_ui(16, 400), INK)
        c.line(fx, fy + 50 + extra, fx + 600, fy + 50 + extra, LINE)
        fy += 70 + extra
    c.button((fx, fy + 12), "Отправить заявку", "primary", 24, 14)
    c.finish("07-contact.png", c.footer(max(fy + 120, y2 + 490)))


def render_home_hero_frame() -> None:
    """Presentation crop of the homepage hero at 16:9."""
    full = Image.open(OUT / "01-home.png")
    frame = full.crop((0, 0, W, 840))
    frame.save(OUT / "01a-home-hero.png", "PNG", optimize=True)
    print("wrote", OUT / "01a-home-hero.png")


def _phone_canvas(h: int) -> tuple[Canvas, int, int, int]:
    pw, ph = 390, h
    pad = 28
    c = Canvas.new(pw + pad * 2, ph + pad * 2 + 40, (28, 25, 22))
    # phone body
    c.rect((pad, pad, pad + pw, pad + ph), BG)
    return c, pad, pad, pw


def render_mobile() -> None:
    # Home
    pw, ph = 390, 1680
    outer_w, outer_h = 454, 1760
    c = Canvas.new(outer_w, outer_h, (32, 29, 26))
    ox, oy = 32, 32
    c.rect((ox, oy, ox + pw, oy + ph), BG)

    def T(x, y, *a, **k):
        c.text((ox + x, oy + y), *a, **k)

    def P(name, x, y, w, h):
        c.paste(cover(load(name), w, h), ox + x, oy + y)

    T(20, 22, "NORTHLINE", f_ui(13, 500), INK, 0.14)
    # hamburger
    c.rect((ox + 350, oy + 28, ox + 370, oy + 29), INK)
    c.rect((ox + 350, oy + 34, ox + 370, oy + 35), INK)
    c.rect((ox + 350, oy + 40, ox + 370, oy + 41), INK)

    P("hero-kitchen.png", 0, 64, pw, 420)
    veil = Image.new("RGBA", (pw, 420), (20, 18, 16, 70))
    base = c.im.crop((ox, oy + 64, ox + pw, oy + 484)).convert("RGBA")
    c.im.paste(Image.alpha_composite(base, veil), (ox, oy + 64))
    c.d = ImageDraw.Draw(c.im)
    c.multiline((ox + 20, oy + 268), "Мебель как часть архитектуры", f_display(26, 500), WHITE, 350, 1.12)
    c.im_button_x = ox
    # buttons
    fnt = f_ui(12, 500)
    c.rect((ox + 20, oy + 400, ox + 168, oy + 432), TERR)
    c.d.text((ox + 36, oy + 408), "Обсудить проект", font=fnt, fill=CREAM)
    c.d.rectangle((ox + 180, oy + 400, ox + 318, oy + 432), outline=WHITE)
    c.d.text((ox + 196, oy + 408), "Направления", font=fnt, fill=WHITE)

    y = 500
    T(20, y, "Направления", f_ui(11, 500), MUTED, 0.12)
    for photo, title in [("atelier-hero.png", "Кухни"), ("wardrobe.png", "Гардеробные"), ("sofa.png", "Мягкая мебель")]:
        y += 28
        P(photo, 20, y, 350, 160)
        T(20, y + 168, title, f_ui(14, 500), INK)
        y += 196

    T(20, y + 10, "Создадим мебель для вашего пространства.", f_display(20, 500), INK)
    c.rect((ox + 20, oy + y + 90, ox + 176, oy + y + 122), TERR)
    c.d.text((ox + 36, oy + y + 98), "Обсудить проект", font=fnt, fill=CREAM)

    c.save("08-mobile-home.png")

    # Menu
    ph = 780
    c = Canvas.new(454, 844, (32, 29, 26))
    c.rect((32, 32, 32 + 390, 32 + ph), BG)
    ox, oy = 32, 32
    c.text((ox + 20, oy + 22), "NORTHLINE", f_ui(13, 500), INK, 0.14)
    c.text((ox + 350, oy + 22), "Закрыть", f_ui(12, 400), MUTED)
    items = ["Направления", "Проекты", "Процесс", "Материалы", "Контакты"]
    y = 90
    for i, lab in enumerate(items):
        c.text((ox + 24, oy + y), f"0{i+1}", f_ui(13, 400), TERR)
        c.text((ox + 24, oy + y + 28), lab, f_display(28, 500), INK)
        c.line(ox + 24, oy + y + 80, ox + 366, oy + y + 80)
        y += 96
    c.rect((ox + 24, oy + y + 16, ox + 200, oy + y + 52), TERR)
    c.d.text((ox + 40, oy + y + 26), "Обсудить проект", font=f_ui(12, 500), fill=CREAM)
    c.save("09-mobile-menu.png")

    # Contact
    ph = 980
    c = Canvas.new(454, 1044, (32, 29, 26))
    c.rect((32, 32, 422, 32 + ph), BG)
    ox, oy = 32, 32
    c.text((ox + 20, oy + 22), "NORTHLINE", f_ui(13, 500), INK, 0.18)
    c.text((ox + 20, oy + 70), "Обсудить проект", f_display(26, 500), INK)
    c.text((ox + 20, oy + 120), "Расскажите о пространстве", f_ui(13, 400), MUTED)
    fields = ["Имя", "Телефон", "Тип объекта  ·  Квартира", "Что спроектировать  ·  Кухня", "Комментарий"]
    y = 170
    for lab in fields:
        c.text((ox + 20, oy + y), lab, f_ui(12, 400), MUTED)
        extra = 40 if lab == "Комментарий" else 0
        c.line(ox + 20, oy + y + 32 + extra, ox + 370, oy + y + 32 + extra)
        y += 56 + extra
    c.rect((ox + 20, oy + y + 8, ox + 370, oy + y + 48), TERR)
    tw = measure("Отправить заявку", f_ui(13, 500))[0]
    c.d.text((ox + 20 + (350 - tw) // 2, oy + y + 18), "Отправить заявку", font=f_ui(13, 500), fill=CREAM)
    y += 80
    c.text((ox + 20, oy + y), "+7 495 120 44 80", f_ui(13, 400), INK)
    c.text((ox + 20, oy + y + 24), "studio@northline.ru  ·  @northline.studio", f_ui(12, 400), MUTED)
    c.text((ox + 20, oy + y + 48), "Москва, Большая Никитская, 21", f_ui(12, 400), MUTED)
    c.save("10-mobile-contact.png")


def render_sitemap() -> None:
    c = Canvas.new(1600, 900, BG)
    c.wordmark(80, 56, 18)
    c.text((80, 110), "Карта сайта", f_display(36, 500), INK)
    c.text((80, 168), "Семь маршрутов. Одна задача — привести к обсуждению проекта.", f_ui(16, 400), MUTED)

    pages = [
        ("/", "Главная", "Образ, направления, проекты, процесс, почему, заявка"),
        ("/directions", "Направления", "Editorial-каталог шести линий"),
        ("/directions/kitchens/atelier", "Решение Atelier", "Предмет в интерьере, узлы, материалы"),
        ("/projects", "Проекты", "Архитектурное портфолио объектов"),
        ("/process", "Процесс", "Пять шагов, мало текста"),
        ("/materials", "Материалы", "Макро + применение"),
        ("/contact", "Контакты", "Студия и форма заявки"),
    ]
    for i, (route, title, desc) in enumerate(pages):
        col = i % 4
        row = i // 4
        x = 80 + col * 370
        y = 240 + row * 260
        c.d.rectangle((x, y, x + 340, y + 220), outline=LINE, width=1)
        c.text((x + 24, y + 24), route, f_ui(12, 400), TERR)
        c.text((x + 24, y + 56), title, f_display(22, 500), INK)
        c.multiline((x + 24, y + 110), desc, f_ui(14, 400), MUTED, 292, 1.4)
    c.save("11-sitemap.png")


def main() -> None:
    extract_photos()
    render_brand()
    render_home()
    render_home_hero_frame()
    render_directions()
    render_solution()
    render_projects()
    render_process()
    render_materials()
    render_contact()
    render_mobile()
    render_sitemap()


if __name__ == "__main__":
    main()
