#!/usr/bin/env python3
"""BotSup — Electric Chlorophyll Pulse. Typeset PNG website mockups."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent
RAW = ROOT / "raw"
FONTS = ROOT / "fonts"
OUT = ROOT / "mockups"
OUT.mkdir(parents=True, exist_ok=True)

PORCELAIN = (250, 253, 248, 255)
MILK = (244, 248, 238, 255)
PISTACHIO = (214, 245, 196, 255)
LIME = (182, 255, 0, 255)
LIME_DEEP = (124, 210, 0, 255)
PULSE = (124, 255, 42, 255)
FOREST = (12, 31, 18, 255)
FOREST_SOFT = (36, 62, 44, 255)
MUTED = (96, 118, 98, 255)
WHITE = (255, 255, 255, 255)
LINE = (220, 234, 214, 255)
INK = (12, 31, 18)


def rgba(c, a=255):
    return (c[0], c[1], c[2], a)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTS / name), size)


F_DISP = "Unbounded-Black.ttf"
F_DISP_XB = "Unbounded-ExtraBold.ttf"
F_DISP_B = "Unbounded-Bold.ttf"
F_UI = "Geologica-Medium.ttf"
F_UI_B = "Geologica-Bold.ttf"
F_UI_SB = "Geologica-SemiBold.ttf"
F_BODY = "Onest-Regular.ttf"
F_BODY_M = "Onest-Medium.ttf"
F_BODY_B = "Onest-Bold.ttf"


def knockout_white(im: Image.Image, threshold: int = 246, sat: int = 22) -> Image.Image:
    arr = np.array(im.convert("RGBA"))
    r = arr[:, :, 0].astype(np.int16)
    g = arr[:, :, 1].astype(np.int16)
    b = arr[:, :, 2].astype(np.int16)
    a = arr[:, :, 3]
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    white = (mx >= threshold) & ((mx - mn) <= sat)
    arr[:, :, 3] = np.where(white, 0, a)
    return Image.fromarray(arr)


def fit(im: Image.Image, w: int | None = None, h: int | None = None) -> Image.Image:
    iw, ih = im.size
    if w and h:
        scale = min(w / iw, h / ih)
    elif w:
        scale = w / iw
    else:
        scale = (h or ih) / ih
    return im.resize((max(1, int(iw * scale)), max(1, int(ih * scale))), Image.Resampling.LANCZOS)


def load_raw(name: str) -> Image.Image:
    return knockout_white(Image.open(RAW / name).convert("RGBA"))


def new_canvas(w: int, h: int, color=PORCELAIN) -> Image.Image:
    return Image.new("RGBA", (w, h), color)


def composite(base: Image.Image, layer: Image.Image, xy: tuple[int, int]) -> None:
    if layer.mode != "RGBA":
        layer = layer.convert("RGBA")
    tmp = Image.new("RGBA", base.size, (0, 0, 0, 0))
    tmp.paste(layer, xy, layer)
    base.alpha_composite(tmp)


def glow(base: Image.Image, box, radius: int, color, blur: int = 26, alpha: int = 88) -> None:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    ImageDraw.Draw(layer).rounded_rectangle(box, radius=radius, fill=rgba(color, alpha))
    base.alpha_composite(layer.filter(ImageFilter.GaussianBlur(blur)))


def shadow(base: Image.Image, box, radius: int, blur: int = 22, alpha: int = 28) -> None:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    pad = blur * 2
    ImageDraw.Draw(layer).rounded_rectangle(
        (box[0], box[1] + 8, box[2], box[3] + 10),
        radius=radius,
        fill=(12, 31, 18, alpha),
    )
    base.alpha_composite(layer.filter(ImageFilter.GaussianBlur(blur)))


def rr(draw: ImageDraw.ImageDraw, box, radius: int, fill, outline=None, width: int = 1) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def text_w(draw: ImageDraw.ImageDraw, text: str, fnt) -> float:
    return draw.textlength(text, font=fnt)


def wrap(draw: ImageDraw.ImageDraw, text: str, fnt, max_w: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    cur = ""
    for word in words:
        trial = (cur + " " + word).strip()
        if text_w(draw, trial, fnt) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def draw_lines(draw, xy, lines, fnt, fill, gap: int) -> int:
    x, y = xy
    for line in lines:
        draw.text((x, y), line, font=fnt, fill=fill)
        y += gap
    return y


def pill(base: Image.Image, box, label: str, fnt, fill, text_fill, glow_on: bool = False) -> None:
    x0, y0, x1, y1 = box
    r = (y1 - y0) // 2
    if glow_on:
        glow(base, (x0 - 6, y0 - 6, x1 + 6, y1 + 10), r, LIME, blur=18, alpha=110)
    shadow(base, box, r, blur=14, alpha=18)
    d = ImageDraw.Draw(base)
    rr(d, box, r, fill)
    tw = text_w(d, label, fnt)
    th = fnt.size
    d.text(((x0 + x1) / 2 - tw / 2, (y0 + y1) / 2 - th / 2 - 2), label, font=fnt, fill=text_fill)


def ghost_pill(base: Image.Image, box, label: str, fnt) -> None:
    d = ImageDraw.Draw(base)
    x0, y0, x1, y1 = box
    r = (y1 - y0) // 2
    rr(d, box, r, WHITE, outline=LINE, width=2)
    tw = text_w(d, label, fnt)
    th = fnt.size
    d.text(((x0 + x1) / 2 - tw / 2, (y0 + y1) / 2 - th / 2 - 2), label, font=fnt, fill=FOREST)


class Page:
    def __init__(self, w: int, h: int):
        self.w = w
        self.h = h
        self.im = new_canvas(w, h)
        self.d = ImageDraw.Draw(self.im)

    def save(self, name: str) -> Path:
        path = OUT / name
        self.im.convert("RGB").save(path, "PNG", optimize=True)
        print("saved", path.name, self.im.size)
        return path

    def crop_bottom(self, bottom: int, pad: int = 0) -> None:
        self.im = self.im.crop((0, 0, self.w, min(self.h, bottom + pad)))
        self.h = self.im.size[1]
        self.d = ImageDraw.Draw(self.im)


def make_mark(size: int) -> Image.Image:
    im = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.ellipse((1, 1, size - 2, size - 2), outline=LIME, width=max(2, size // 15))
    inset = size * 0.22
    d.ellipse((inset, inset * 0.78, size - inset, size - inset * 0.48), fill=LIME)
    hx, hy = size * 0.34, size * 0.26
    d.ellipse((hx, hy, hx + size * 0.20, hy + size * 0.13), fill=(255, 255, 255, 210))
    return im


def asset_drop(size: int = 56) -> Image.Image:
    src = load_raw("botsup-00-logo-lockup.png")
    drop = knockout_white(src.crop((40, 60, 520, 700)), 248, 20)
    drop = fit(drop, h=int(size * 1.15))
    return drop


def asset_splash(w: int = 900) -> Image.Image:
    return fit(load_raw("botsup-asset-splash-orbs.png"), w=w)


def asset_phone_burst(h: int = 980) -> Image.Image:
    return fit(load_raw("botsup-asset-night-burst.png"), h=h)


def asset_phone_chat(h: int = 980) -> Image.Image:
    return fit(load_raw("botsup-asset-phone-chat.png"), h=h)


def asset_panels(w: int = 1100) -> Image.Image:
    return fit(load_raw("botsup-asset-glass-panels.png"), w=w)


def asset_slabs(w: int = 1200) -> Image.Image:
    return fit(load_raw("botsup-asset-pricing-slabs.png"), w=w)


def asset_wordmark_3d(w: int = 520) -> Image.Image:
    src = load_raw("botsup-00-style-system.png")
    mark = src.crop((60, 40, 980, 300))
    return fit(knockout_white(mark, 250, 16), w=w)


def draw_mark(base: Image.Image, xy: tuple[int, int], size: int = 42) -> int:
    mark = make_mark(size)
    composite(base, mark, xy)
    return mark.size[0]


def wordmark(base: Image.Image, xy: tuple[int, int], size: int = 28) -> None:
    x, y = xy
    dw = draw_mark(base, (x, y - 4), int(size * 1.55))
    fnt = font(F_DISP_XB, size)
    ImageDraw.Draw(base).text((x + dw + 10, y), "BotSup", font=fnt, fill=FOREST)


NAV = ["Платформа", "Решения", "Кейсы", "Тарифы", "Запуск"]


def draw_nav(page: Page, active: str | None, cta: str = "Запустить бота") -> int:
    w, im = page.w, page.im
    d = ImageDraw.Draw(im)
    d.rectangle((0, 0, w, 92), fill=rgba(PORCELAIN, 240))
    wordmark(im, (56, 30), 26)
    ui = font(F_UI, 17)
    x = w * 0.30
    for label in NAV:
        tw = text_w(d, label, ui)
        color = FOREST if label == active else MUTED
        d.text((x, 36), label, font=ui, fill=color)
        if label == active:
            d.rounded_rectangle((x, 66, x + tw, 70), radius=2, fill=LIME)
        x += tw + 36
    pf = font(F_UI_B, 16)
    ctw = text_w(d, cta, pf) + 44
    pill(im, (w - 56 - ctw, 24, w - 56, 68), cta, pf, LIME, INK, glow_on=True)
    return 92


def draw_footer(page: Page, y: int, lime: bool = False) -> int:
    w = page.w
    h = 92
    if lime:
        page.d.rectangle((0, y, w, y + h), fill=LIME)
        color = INK
    else:
        page.d.rectangle((0, y, w, y + h), fill=MILK)
        color = FOREST_SOFT
    fnt = font(F_UI, 15)
    page.d.text((56, y + 36), "© BotSup  ·  AI WhatsApp-бот для продаж и сервиса", font=fnt, fill=color)
    links = "Платформа   Решения   Кейсы   Тарифы   Запуск"
    page.d.text((w - 56, y + 36), links, font=fnt, fill=color, anchor="rt")
    return y + h


def render_phone(height: int = 860, messages: list[tuple[str, str]] | None = None) -> Image.Image:
    if messages is None:
        messages = [
            ("user", "Привет! Есть окно на сегодня вечером?"),
            ("bot", "Да. Свободно в 19:00 — клиника на Лесной."),
            ("card", "Консультация  ·  4 900 ₽"),
            ("user", "Давайте 19:00, оплачу сейчас"),
            ("bot", "Готово. Слот ваш. Ссылка на оплату уже в чате."),
            ("pay", "Оплатить 4 900 ₽"),
        ]
    w = int(height * 0.49)
    phone = Image.new("RGBA", (w, height), (0, 0, 0, 0))
    d = ImageDraw.Draw(phone)
    d.rounded_rectangle((0, 0, w - 1, height - 1), radius=52, fill=(22, 28, 24, 255))
    d.rounded_rectangle((8, 8, w - 9, height - 9), radius=46, fill=(248, 252, 246, 255))
    d.rounded_rectangle((w * 0.32, 18, w * 0.68, 40), radius=14, fill=(18, 22, 20, 255))

    ui_b = font(F_UI_B, 18)
    ui = font(F_UI, 12)
    body = font(F_BODY_M, 15)
    d.text((28, 56), "BotSup", font=ui_b, fill=FOREST)
    d.ellipse((108, 64, 118, 74), fill=LIME)
    d.text((124, 60), "online  ·  отвечает 0.8с", font=ui, fill=MUTED)
    d.line((24, 92, w - 24, 92), fill=LINE, width=1)

    y = 110
    pad = 22
    for kind, text in messages:
        max_bubble = w - 70
        if kind == "user":
            lines = wrap(d, text, body, max_bubble - 36)
            bw = max(text_w(d, ln, body) for ln in lines) + 36
            bh = 16 + len(lines) * 22
            x0 = w - pad - bw
            d.rounded_rectangle((x0, y, x0 + bw, y + bh), radius=20, fill=(226, 255, 176, 255))
            ty = y + 8
            for ln in lines:
                d.text((x0 + 18, ty), ln, font=body, fill=FOREST)
                ty += 22
            y += bh + 12
        elif kind == "bot":
            lines = wrap(d, text, body, max_bubble - 36)
            bw = max(text_w(d, ln, body) for ln in lines) + 36
            bh = 16 + len(lines) * 22
            x0 = pad
            d.rounded_rectangle((x0, y, x0 + bw, y + bh), radius=20, fill=WHITE, outline=LINE, width=1)
            ty = y + 8
            for ln in lines:
                d.text((x0 + 18, ty), ln, font=body, fill=FOREST)
                ty += 22
            d.text((x0 + 8, y + bh + 2), "✓✓  прочитано", font=font(F_UI, 10), fill=LIME_DEEP)
            y += bh + 18
        elif kind == "card":
            d.rounded_rectangle((pad, y, w - pad, y + 78), radius=18, fill=WHITE, outline=LINE, width=1)
            d.ellipse((pad + 14, y + 22, pad + 50, y + 58), fill=LIME)
            d.text((pad + 24, y + 30), "✦", font=font(F_UI_B, 16), fill=INK)
            d.text((pad + 62, y + 18), text, font=font(F_UI_B, 16), fill=FOREST)
            d.text((pad + 62, y + 44), "слот 19:00  ·  оплата в чате", font=font(F_UI, 13), fill=MUTED)
            y += 90
        elif kind == "pay":
            d.rounded_rectangle((pad, y, w - pad, y + 48), radius=24, fill=LIME)
            tw = text_w(d, text, font(F_UI_B, 16))
            d.text(((w - tw) / 2, y + 13), text, font=font(F_UI_B, 16), fill=INK)
            y += 64

    d.ellipse((w / 2 - 18, height - 36, w / 2 + 18, height - 16), outline=LINE, width=2)
    return phone


def phone_with_splash(height: int = 900) -> Image.Image:
    phone = render_phone(height)
    splash = asset_splash(int(height * 1.35))
    canvas = Image.new("RGBA", (int(height * 1.15), int(height * 1.12)), (0, 0, 0, 0))
    composite(canvas, splash, (int(height * 0.18), int(height * 0.04)))
    composite(canvas, phone, (int(height * 0.08), int(height * 0.06)))
    return canvas


# ---------------------------------------------------------------------------
# Pages
# ---------------------------------------------------------------------------

def page_styleboard() -> None:
    p = Page(1920, 1080)
    composite(p.im, asset_splash(1000), (1000, -20))
    wordmark(p.im, (80, 48), 32)
    p.d.text((80, 108), "ELECTRIC CHLOROPHYLL PULSE", font=font(F_UI, 15), fill=MUTED)
    p.d.text((80, 136), "Визуальная система", font=font(F_DISP, 54), fill=FOREST)
    swatches = [
        ("Фарфор", PORCELAIN, "#FAFDF8"),
        ("Молоко", MILK, "#F4F8EE"),
        ("Фисташка", PISTACHIO, "#D6F5C4"),
        ("Chlorophyll", LIME, "#B6FF00"),
        ("Pulse", PULSE, "#7CFF2A"),
        ("Чернила леса", FOREST, "#0C1F12"),
    ]
    x = 80
    for name, color, hexcode in swatches:
        shadow(p.im, (x, 230, x + 168, 388), 26, 14, 14)
        rr(p.d, (x, 230, x + 168, 388), 26, color, outline=LINE if color[0] > 200 else None, width=1)
        label_c = FOREST if color[0] > 140 else WHITE
        p.d.text((x + 16, 324), name, font=font(F_UI_B, 15), fill=label_c)
        p.d.text((x + 16, 350), hexcode, font=font(F_UI, 12), fill=MUTED if color[0] > 140 else (230, 240, 230, 255))
        x += 184
    p.d.text((80, 424), "Мгновенный ответ", font=font(F_DISP, 58), fill=FOREST)
    p.d.text((80, 500), "Unbounded Black  ·  Geologica Sharp  ·  Onest", font=font(F_UI, 17), fill=MUTED)
    p.d.text((80, 536), "Экспериментальные гротески. Никакого Inter, Arial, Roboto, Helvetica.", font=font(F_BODY, 19), fill=FOREST_SOFT)
    pill(p.im, (80, 590, 330, 646), "Запустить бота", font(F_UI_B, 17), LIME, INK, True)
    ghost_pill(p.im, (350, 590, 670, 646), "Смотреть диалог вживую", font(F_UI_B, 17))
    p.d.text((80, 680), "UI: glass-пилюли, lime-glow CTA, чат как ювелирный объект.", font=font(F_BODY, 18), fill=FOREST_SOFT)
    p.d.text((80, 714), "Белый = ясный диалог. Зелёный = WhatsApp, online, деньги.", font=font(F_BODY, 18), fill=FOREST_SOFT)
    chips = ["0.8с ответ", "online", "Start bot", "WABA"]
    x = 80
    for chip in chips:
        tw = text_w(p.d, chip, font(F_UI, 15)) + 36
        ghost_pill(p.im, (x, 770, x + tw, 820), chip, font(F_UI, 15))
        x += tw + 14
    p.d.text((80, 860), "Бренд  ·  BotSup", font=font(F_DISP_B, 28), fill=FOREST)
    p.d.text((80, 910), "Стеклянная капля-пульс. Не чужой логотип.", font=font(F_BODY, 18), fill=MUTED)
    p.save("00-identity-styleboard.png")


def page_logo() -> None:
    p = Page(1920, 1080)
    composite(p.im, asset_splash(820), (1180, 80))
    drop = asset_drop(340)
    composite(p.im, drop, (160, 280))
    p.d.text((560, 360), "BotSup", font=font(F_DISP, 120), fill=FOREST)
    p.d.rounded_rectangle((568, 500, 1020, 508), 4, fill=LIME)
    p.d.text((568, 540), "AI-бот в WhatsApp, который сам продаёт", font=font(F_UI, 28), fill=FOREST_SOFT)
    p.d.text((568, 590), "Оригинальный знак: стеклянная хлорофилльная капля и пульс online.", font=font(F_BODY, 20), fill=MUTED)
    p.save("00-identity-logo.png")


def page_home_hero() -> None:
    p = Page(1920, 1080)
    slash = Image.new("RGBA", p.im.size, (0, 0, 0, 0))
    ImageDraw.Draw(slash).polygon([(1180, 0), (1920, 0), (1920, 520), (860, 1080)], fill=(182, 255, 0, 34))
    p.im.alpha_composite(slash)
    draw_nav(p, None)
    composite(p.im, asset_splash(980), (1080, 40))
    phone = render_phone(780)
    glow(p.im, (1280, 160, 1760, 980), 80, LIME, 40, 70)
    composite(p.im, phone, (1320, 170))

    p.d.text((80, 170), "AI WHATSAPP-БОТ", font=font(F_UI_SB, 16), fill=LIME_DEEP)
    p.d.rounded_rectangle((80, 198, 268, 202), 2, fill=LIME)
    y = draw_lines(p.d, (80, 220), ["Продажи", "в WhatsApp.", "Сами. Сейчас."], font(F_DISP, 72), FOREST, 80)
    sub = font(F_BODY, 22)
    lines = wrap(
        p.d,
        "BotSup отвечает за секунду, квалифицирует лид и закрывает запись или оплату — пока менеджер спит.",
        sub,
        700,
    )
    y = draw_lines(p.d, (80, y + 16), lines, sub, FOREST_SOFT, 30)
    pill(p.im, (80, y + 28, 360, y + 86), "Запустить бота", font(F_UI_B, 18), LIME, INK, True)
    ghost_pill(p.im, (380, y + 28, 740, y + 86), "Смотреть диалог вживую", font(F_UI_B, 18))

    stats = [("0.8с", "ответ"), ("+214%", "сделок"), ("24/7", "online")]
    sx = 80
    for num, label in stats:
        shadow(p.im, (sx, 900, sx + 200, 1010), 24, 12, 14)
        rr(p.d, (sx, 900, sx + 200, 1010), 24, WHITE, LINE, 1)
        p.d.text((sx + 22, 918), num, font=font(F_DISP_B, 28), fill=FOREST)
        p.d.text((sx + 22, 962), label, font=font(F_UI, 16), fill=MUTED)
        sx += 220
    p.save("01-home-hero.png")


def section_label(d, xy, text):
    d.text(xy, text, font=font(F_UI, 14), fill=MUTED)


def page_home_full() -> None:
    p = Page(1600, 4200)
    draw_nav(p, None)
    composite(p.im, asset_splash(760), (900, 80))
    phone = render_phone(640)
    composite(p.im, phone, (1040, 160))

    p.d.text((64, 140), "AI WHATSAPP-БОТ", font=font(F_UI_SB, 14), fill=LIME_DEEP)
    y = draw_lines(p.d, (64, 170), ["Продажи в WhatsApp.", "Сами. Сейчас."], font(F_DISP, 52), FOREST, 60)
    lines = wrap(p.d, "Клиент пишет — бот сам отвечает, продаёт и записывает. Хаос в чатах становится каналом выручки.", font(F_BODY, 20), 620)
    y = draw_lines(p.d, (64, y + 12), lines, font(F_BODY, 20), FOREST_SOFT, 28)
    pill(p.im, (64, y + 24, 330, y + 78), "Запустить бота", font(F_UI_B, 17), LIME, INK, True)
    ghost_pill(p.im, (350, y + 24, 700, y + 78), "Смотреть диалог вживую", font(F_UI_B, 17))

    y = 900
    section_label(p.d, (64, y), "КАК СООБЩЕНИЕ СТАНОВИТСЯ ОПЛАТОЙ")
    p.d.text((64, y + 28), "Не список фич. Кинопродукт.", font=font(F_DISP_B, 36), fill=FOREST)
    steps = [
        ("01", "Сообщение", "Клиент пишет в WhatsApp с рекламы, сайта или ночью."),
        ("02", "Сценарий", "Бот квалифицирует, предлагает слот, товар или оплату."),
        ("03", "Оплата", "Сделка закрыта. Горячий лид — только если нужна эскалация."),
    ]
    x = 64
    for num, title, body in steps:
        shadow(p.im, (x, y + 100, x + 470, y + 340), 28, 16, 16)
        rr(p.d, (x, y + 100, x + 470, y + 340), 28, WHITE, LINE, 1)
        p.d.text((x + 28, y + 124), num, font=font(F_DISP, 28), fill=LIME_DEEP)
        p.d.text((x + 28, y + 176), title, font=font(F_DISP_B, 26), fill=FOREST)
        bl = wrap(p.d, body, font(F_BODY, 17), 400)
        draw_lines(p.d, (x + 28, y + 226), bl, font(F_BODY, 17), FOREST_SOFT, 24)
        x += 492

    y = 1320
    section_label(p.d, (64, y), "ДО / ПОСЛЕ ХАОСА В ЧАТАХ")
    p.d.text((64, y + 26), "Из ленты сообщений — в управляемый канал.", font=font(F_DISP_B, 34), fill=FOREST)
    cards = [
        ("Хаос", "14 непрочитанных  ·  ночь  ·  потерянные заявки", False, ["Клиент 03:12  ждал ответ", "Клиент 03:18  ушёл в другой чат", "Реклама 09:40  без квалификации"]),
        ("BotSup inbox", "0 в очереди  ·  online  ·  сделки в статусах", True, ["Запись 19:00  закрыта", "Оплата 4 900 ₽  получена", "Лид  →  менеджеру, горячий"]),
    ]
    x = 64
    for title, meta, good, rows in cards:
        shadow(p.im, (x, y + 100, x + 720, y + 420), 30, 16, 16)
        rr(p.d, (x, y + 100, x + 720, y + 420), 30, WHITE, LIME if good else LINE, 2 if good else 1)
        p.d.text((x + 32, y + 124), title, font=font(F_DISP_B, 28), fill=FOREST)
        p.d.text((x + 32, y + 170), meta, font=font(F_UI, 15), fill=MUTED)
        yy = y + 220
        for row in rows:
            rr(p.d, (x + 32, yy, x + 688, yy + 52), 16, MILK if not good else (236, 255, 214, 255))
            p.d.text((x + 52, yy + 14), row, font=font(F_BODY_M, 16), fill=FOREST)
            yy += 62
        x += 752

    y = 1860
    section_label(p.d, (64, y), "ТРИ ЖИРНЫХ РЕЗУЛЬТАТА")
    nums = [("0.8с", "средний ответ бота"), ("+214%", "сделок с рекламы"), ("24/7", "без ночных потерь")]
    x = 64
    for num, label in nums:
        shadow(p.im, (x, y + 80, x + 470, y + 300), 32, 16, 16)
        rr(p.d, (x, y + 80, x + 470, y + 300), 32, WHITE, LINE, 1)
        p.d.text((x + 36, y + 110), num, font=font(F_DISP, 56), fill=FOREST)
        p.d.rounded_rectangle((x + 36, y + 190, x + 160, y + 196), 3, fill=LIME)
        p.d.text((x + 36, y + 220), label, font=font(F_BODY, 20), fill=FOREST_SOFT)
        x += 492

    y = 2240
    section_label(p.d, (64, y), "КОМУ УЖЕ ОТВЕЧАЕТ BOTSUP")
    brands = ["Лавка Ноль", "Клиника Пульс", "Школа Всход", "Агентство Срез", "Сервис Рама"]
    x = 64
    for b in brands:
        ghost_pill(p.im, (x, y + 50, x + 280, y + 110), b, font(F_UI, 16))
        x += 300

    y = 2420
    glow(p.im, (48, y, 1552, y + 280), 40, LIME, 18, 40)
    rr(p.d, (64, y, 1536, y + 260), 36, LIME)
    p.d.text((108, y + 48), "Включить BotSup", font=font(F_DISP, 48), fill=INK)
    p.d.text((108, y + 118), "Завтра утром чаты уже не будут хаосом.", font=font(F_BODY, 22), fill=FOREST_SOFT)
    pill(p.im, (108, y + 170, 460, y + 224), "Запустить бота", font(F_UI_B, 18), FOREST, LIME, False)
    ghost = (480, y + 170, 860, y + 224)
    rr(p.d, ghost, 27, (255, 255, 255, 180))
    tw = text_w(p.d, "Открыть запуск", font(F_UI_B, 18))
    p.d.text((480 + (380 - tw) / 2, y + 184), "Открыть запуск", font=font(F_UI_B, 18), fill=INK)

    bottom = draw_footer(p, 2760, lime=False)
    p.crop_bottom(bottom, 0)
    p.save("01-home-page.png")


def ui_panel(base, box, title: str, rows: list[str], accent: bool = False) -> None:
    x0, y0, x1, y1 = box
    shadow(base, box, 26, 14, 14)
    d = ImageDraw.Draw(base)
    rr(d, box, 26, WHITE, LIME if accent else LINE, 2 if accent else 1)
    d.text((x0 + 24, y0 + 20), title, font=font(F_UI_B, 18), fill=FOREST)
    yy = y0 + 64
    for row in rows:
        rr(d, (x0 + 24, yy, x1 - 24, yy + 40), 12, MILK)
        d.ellipse((x0 + 38, yy + 14, x0 + 54, yy + 30), fill=LIME)
        d.text((x0 + 66, yy + 10), row, font=font(F_BODY_M, 15), fill=FOREST)
        yy += 48


def page_platform() -> None:
    p = Page(1600, 3600)
    draw_nav(p, "Платформа", "Открыть демо платформы")
    composite(p.im, asset_splash(640), (1040, 60))
    p.d.text((64, 130), "ПЛАТФОРМА", font=font(F_UI_SB, 14), fill=LIME_DEEP)
    p.d.text((64, 158), "Приборная панель", font=font(F_DISP, 56), fill=FOREST)
    p.d.text((64, 232), "живого бота", font=font(F_DISP, 56), fill=FOREST)
    lines = wrap(p.d, "Конструктор сценариев, inbox WhatsApp, оплаты, эскалация и графики диалогов — как организм, а не набор иконок.", font(F_BODY, 20), 720)
    draw_lines(p.d, (64, 320), lines, font(F_BODY, 20), FOREST_SOFT, 28)
    pill(p.im, (64, 420, 430, 476), "Открыть демо платформы", font(F_UI_B, 17), LIME, INK, True)

    zones = [
        (64, 560, 760, 980, "Мозг бота", ["Квалификация лида", "Запись и слоты", "Скрипт оплаты", "Эскалация на человека"], True),
        (840, 560, 1536, 980, "Inbox WhatsApp", ["Клиника Пульс  ·  19:00", "Лавка Ноль  ·  оплата", "Школа Всход  ·  абонемент", "Новый лид  ·  0.8с"], False),
        (64, 1020, 760, 1440, "Каталог и оплаты", ["Абонемент 4 900 ₽", "Консультация 2 400 ₽", "Курс 12 000 ₽", "Счёт выставлен"], False),
        (840, 1020, 1536, 1440, "Аналитика диалогов", ["Ответы  ·  98%", "Запись  ·  +46%", "Оплата  ·  +38%", "Эскалации  ·  6%"], True),
    ]
    for box in zones:
        ui_panel(p.im, box[:4], box[4], box[5], box[6])

    p.d.text((64, 1500), "Каналы, интеграции, безопасность номера", font=font(F_DISP_B, 32), fill=FOREST)
    chips = ["Сайт", "CRM", "Календарь", "Оплата", "Реклама", "Номер WABA", "Шифрование", "Роли команды"]
    x, y = 64, 1570
    for chip in chips:
        tw = text_w(p.d, chip, font(F_UI, 16)) + 40
        ghost_pill(p.im, (x, y, x + tw, y + 52), chip, font(F_UI, 16))
        x += tw + 16
        if x > 1400:
            x = 64
            y += 68

    composite(p.im, fit(load_raw("botsup-asset-glass-panels.png"), w=1100), (250, 1760))

    glow(p.im, (48, 2480, 1552, 2720), 36, LIME, 16, 36)
    rr(p.d, (64, 2496, 1536, 2704), 32, LIME)
    p.d.text((108, 2540), "Открыть демо платформы", font=font(F_DISP_B, 36), fill=INK)
    p.d.text((108, 2600), "Посмотреть мозг бота, inbox и оплаты на живых данных.", font=font(F_BODY, 20), fill=FOREST_SOFT)
    bottom = draw_footer(p, 2780)
    p.crop_bottom(bottom)
    p.save("02-platform.png")


def page_solutions() -> None:
    p = Page(1600, 3800)
    draw_nav(p, "Решения", "Собрать сценарий под мой бизнес")
    p.d.text((64, 130), "РЕШЕНИЯ", font=font(F_UI_SB, 14), fill=LIME_DEEP)
    p.d.text((64, 158), "Отдельная вселенная", font=font(F_DISP, 50), fill=FOREST)
    p.d.text((64, 226), "для каждой задачи", font=font(F_DISP, 50), fill=FOREST)
    p.d.text((64, 300), "Не сетка из одинаковых карточек — журнал сценариев под бизнес.", font=font(F_BODY, 20), fill=FOREST_SOFT)

    rows = [
        ("E-commerce", "Корзина, которая сама дожимает", "Клиент спрашивает размер — бот показывает карточку и принимает оплату в чате.", "+38% к оплате", "размер → карточка → оплата"),
        ("Запись", "Календарь без молчания", "Слоты, напоминания и переносы. Ноль пропущенных окон после рекламы.", "0 потерянных слотов", "хочу на 19:00 → бронь"),
        ("Клиники", "Ночной рецепт ответа", "Симптом, филиал, врач, предоплата. Ночью бот пишет как администратор.", "ночная запись", "симптом → врач → слот"),
        ("Обучение", "Абонемент в одном диалоге", "Курс, расписание, оплата и прогрев тех, кто замолчал после заявки.", "100% дожим", "курс → абонемент"),
        ("Услуги", "Мастер выезжает вовремя", "Заявка, адрес, смета и эскалация на человека только когда нужно.", "15 минут до лида", "заявка → мастер"),
    ]
    y = 380
    objects = load_raw("botsup-asset-glass-panels.png")
    crops = [
        objects.crop((80, 520, 420, 980)),
        objects.crop((430, 520, 780, 1000)),
        objects.crop((40, 40, 420, 480)),
        objects.crop((1180, 40, 1600, 480)),
        objects.crop((860, 40, 1180, 480)),
    ]
    for i, ((title, lead, body, metric, chat), crop) in enumerate(zip(rows, crops)):
        h = 300
        shadow(p.im, (64, y, 1536, y + h), 32, 16, 14)
        rr(p.d, (64, y, 1536, y + h), 32, WHITE, LINE, 1)
        if i % 2 == 0:
            rr(p.d, (64, y, 78, y + h), 0, LIME)
        else:
            rr(p.d, (1522, y, 1536, y + h), 0, LIME)
        obj = fit(crop, h=220)
        ox = 110 if i % 2 == 0 else 1600 - 110 - obj.size[0]
        composite(p.im, obj, (ox, y + 40))
        tx = 420 if i % 2 == 0 else 110
        p.d.text((tx, y + 36), title, font=font(F_UI, 14), fill=MUTED)
        p.d.text((tx, y + 64), lead, font=font(F_DISP_B, 28), fill=FOREST)
        bl = wrap(p.d, body, font(F_BODY, 18), 700)
        draw_lines(p.d, (tx, y + 116), bl, font(F_BODY, 18), FOREST_SOFT, 26)
        p.d.text((tx, y + 200), metric, font=font(F_DISP_B, 26), fill=LIME_DEEP)
        p.d.text((tx, y + 242), chat, font=font(F_UI, 16), fill=MUTED)
        y += 328

    glow(p.im, (48, y + 20, 1552, y + 220), 30, LIME, 14, 30)
    rr(p.d, (64, y + 36, 1536, y + 204), 30, LIME)
    p.d.text((108, y + 70), "Собрать сценарий под мой бизнес", font=font(F_DISP_B, 32), fill=INK)
    p.d.text((108, y + 124), "Выберите нишу — справа сразу соберём превью будущего чата.", font=font(F_BODY, 18), fill=FOREST_SOFT)
    bottom = draw_footer(p, y + 240)
    p.crop_bottom(bottom)
    p.save("03-solutions.png")


def page_cases() -> None:
    p = Page(1600, 3400)
    draw_nav(p, "Кейсы", "Хочу такой же результат")
    composite(p.im, fit(load_raw("botsup-asset-splash-orbs.png"), w=520), (1140, 40))
    p.d.text((64, 130), "КЕЙСЫ", font=font(F_UI_SB, 14), fill=LIME_DEEP)
    p.d.text((64, 158), "Доказано деньгами", font=font(F_DISP, 56), fill=FOREST)
    p.d.text((64, 236), "и переписками", font=font(F_DISP, 56), fill=FOREST)
    p.d.text((64, 320), "Полноценные истории запуска, не отзывы в подвале.", font=font(F_BODY, 20), fill=FOREST_SOFT)

    stories = [
        ("Клиника Пульс", "+312%", "записей с рекламы", "Хаос ночных заявок → BotSup закрывает слот в чате.", "«Есть окно сегодня?»  →  «19:00, предоплата 1 500 ₽»"),
        ("Лавка Ноль", "₽ 4.8 млн", "дожим в WhatsApp", "Корзина брошена в 23:40. Бот вернул оплату до полуночи.", "«Размер 42 есть?»  →  «Карточка + оплата в одном пузыре»"),
        ("Школа Всход", "0.8с", "до первого ответа", "Менеджеры тонули в пробных уроках. Бот квалифицирует и берёт оплату.", "«Сколько курс?»  →  «12 000 ₽, осталось 4 места»"),
    ]
    y = 400
    for name, num, numl, story, quote in stories:
        shadow(p.im, (64, y, 1536, y + 280), 32, 16, 14)
        rr(p.d, (64, y, 1536, y + 280), 32, WHITE, LINE, 1)
        p.d.text((104, y + 36), name, font=font(F_UI, 16), fill=MUTED)
        p.d.text((104, y + 70), num, font=font(F_DISP, 64), fill=FOREST)
        p.d.text((104, y + 160), numl, font=font(F_UI_B, 18), fill=LIME_DEEP)
        sl = wrap(p.d, story, font(F_DISP_B, 24), 820)
        draw_lines(p.d, (640, y + 56), sl, font(F_DISP_B, 24), FOREST, 32)
        rr(p.d, (640, y + 150, 1460, y + 230), 20, (236, 255, 214, 255))
        ql = wrap(p.d, quote, font(F_BODY_M, 17), 760)
        draw_lines(p.d, (668, y + 168), ql, font(F_BODY_M, 17), FOREST, 24)
        y += 308

    glow(p.im, (48, y + 20, 1552, y + 220), 30, LIME, 14, 30)
    rr(p.d, (64, y + 36, 1536, y + 204), 30, LIME)
    p.d.text((108, y + 70), "Хочу такой же результат", font=font(F_DISP_B, 34), fill=INK)
    p.d.text((108, y + 128), "Разберём ваш inbox и покажем, где бот заберёт выручку.", font=font(F_BODY, 18), fill=FOREST_SOFT)
    bottom = draw_footer(p, y + 240)
    p.crop_bottom(bottom)
    p.save("04-cases.png")


def page_pricing() -> None:
    p = Page(1600, 3600)
    draw_nav(p, "Тарифы", "Выбрать тариф и запустить")
    composite(p.im, fit(load_raw("botsup-asset-splash-orbs.png"), w=480), (1180, 20))
    p.d.text((64, 130), "ТАРИФЫ", font=font(F_UI_SB, 14), fill=LIME_DEEP)
    p.d.text((64, 158), "Выберите пульс", font=font(F_DISP, 56), fill=FOREST)
    p.d.text((64, 240), "Три сочных плана и студия под ключ. Бот включается сегодня.", font=font(F_BODY, 20), fill=FOREST_SOFT)

    plans = [
        ("Старт", "9 900 ₽", "мес", ["1 номер", "3 сценария", "2 000 диалогов", "Базовая аналитика"], False),
        ("Пульс", "24 900 ₽", "мес", ["3 номера", "Безлимит сценариев", "12 000 диалогов", "Оплаты + календарь"], True),
        ("Студия", "49 900 ₽", "мес", ["Мультибренд", "AI-дообучение", "Эскалация 24/7", "Команда и роли"], False),
        ("Энтерпрайз", "индивид.", "", ["WABA и безопасность", "Интеграции под ключ", "SLA и запуск", "Выделенный архитектор"], False),
    ]
    x = 64
    y = 320
    for name, price, per, items, rec in plans:
        box = (x, y, x + 356, y + 520)
        if rec:
            glow(p.im, (x - 8, y - 8, x + 364, y + 532), 36, LIME, 20, 90)
        shadow(p.im, box, 32, 16, 14)
        rr(p.d, box, 32, WHITE if not rec else (246, 255, 230, 255), LIME if rec else LINE, 3 if rec else 1)
        if rec:
            pill(p.im, (x + 24, y + 24, x + 150, y + 58), "Берут", font(F_UI_B, 13), LIME, INK, False)
        p.d.text((x + 28, y + 80), name, font=font(F_DISP_B, 28), fill=FOREST)
        p.d.text((x + 28, y + 130), price, font=font(F_DISP, 30), fill=FOREST)
        if per:
            p.d.text((x + 28, y + 176), per, font=font(F_UI, 14), fill=MUTED)
        yy = y + 220
        for item in items:
            p.d.ellipse((x + 32, yy + 6, x + 46, yy + 20), fill=LIME)
            p.d.text((x + 58, yy), item, font=font(F_BODY_M, 16), fill=FOREST)
            yy += 40
        pill(p.im, (x + 28, y + 440, x + 328, y + 492), "Выбрать", font(F_UI_B, 16), LIME if rec else FOREST, INK if rec else LIME, rec)
        x += 380

    y = 900
    p.d.text((64, y), "Калькулятор диалогов", font=font(F_DISP_B, 28), fill=FOREST)
    shadow(p.im, (64, y + 60, 1536, y + 220), 28, 14, 12)
    rr(p.d, (64, y + 60, 1536, y + 220), 28, WHITE, LINE, 1)
    p.d.text((100, y + 88), "8 400 диалогов / мес", font=font(F_UI_B, 20), fill=FOREST)
    p.d.text((100, y + 124), "Рекомендуем тариф Пульс  ·  запас 30%", font=font(F_BODY, 16), fill=MUTED)
    rr(p.d, (100, y + 168, 1460, y + 184), 8, MILK)
    rr(p.d, (100, y + 168, 820, y + 184), 8, LIME)

    y = 1180
    p.d.text((64, y), "Менеджер vs бот", font=font(F_DISP_B, 28), fill=FOREST)
    left = (64, y + 60, 760, y + 420)
    right = (840, y + 60, 1536, y + 420)
    shadow(p.im, left, 28, 14, 12)
    shadow(p.im, right, 28, 14, 12)
    rr(p.d, left, 28, WHITE, LINE, 1)
    rr(p.d, right, 28, (246, 255, 230, 255), LIME, 2)
    p.d.text((96, y + 88), "Менеджер", font=font(F_DISP_B, 24), fill=FOREST)
    p.d.text((872, y + 88), "BotSup", font=font(F_DISP_B, 24), fill=FOREST)
    mgr = ["Ответ через 3 часа", "Ночь и выходные молчат", "Реклама сгорает", "Хаос в статусах"]
    bot = ["Ответ 0.8 секунды", "24/7 живые сценарии", "Дожим до оплаты", "Сделка видна в панели"]
    yy = y + 150
    for a, b in zip(mgr, bot):
        p.d.text((96, yy), "–  " + a, font=font(F_BODY, 18), fill=MUTED)
        p.d.text((872, yy), "•  " + b, font=font(F_BODY_M, 18), fill=FOREST)
        yy += 50

    y = 1660
    p.d.text((64, y), "FAQ про номер, лимиты и обучение", font=font(F_DISP_B, 28), fill=FOREST)
    faqs = [
        ("Нужен ли свой WhatsApp-номер?", "Можно подключить ваш WABA или выпустить новый. Номер остаётся вашим."),
        ("Что если диалогов станет больше?", "Пульс и Студия масштабируются. Калькулятор сразу показывает запас."),
        ("Кто обучает бота?", "Мы собираем сценарий на задачах бизнеса и запускаем тон общения вместе с вами."),
        ("Можно ли передать человека?", "Да. Эскалация на менеджера — часть живого сценария, не тупик бота."),
    ]
    y += 60
    for q, a in faqs:
        shadow(p.im, (64, y, 1536, y + 120), 22, 10, 10)
        rr(p.d, (64, y, 1536, y + 120), 22, WHITE, LINE, 1)
        p.d.text((96, y + 24), q, font=font(F_UI_B, 18), fill=FOREST)
        p.d.text((96, y + 64), a, font=font(F_BODY, 17), fill=FOREST_SOFT)
        y += 136

    glow(p.im, (48, y + 20, 1552, y + 210), 28, LIME, 14, 28)
    rr(p.d, (64, y + 36, 1536, y + 194), 28, LIME)
    p.d.text((108, y + 70), "Выбрать тариф и запустить", font=font(F_DISP_B, 32), fill=INK)
    p.d.text((108, y + 124), "Без сухой таблички. Пакет, сценарий, номер — и бот в эфире.", font=font(F_BODY, 18), fill=FOREST_SOFT)
    bottom = draw_footer(p, y + 230)
    p.crop_bottom(bottom)
    p.save("05-pricing.png")


def page_launch() -> None:
    p = Page(1920, 1200)
    draw_nav(p, "Запуск", "Включить BotSup в WhatsApp")
    p.d.text((80, 130), "ЗАПУСК", font=font(F_UI_SB, 14), fill=LIME_DEEP)
    p.d.text((80, 158), "Бот уже", font=font(F_DISP, 60), fill=FOREST)
    p.d.text((80, 232), "включается", font=font(F_DISP, 60), fill=FOREST)

    steps = ["Ниша", "Задачи", "Тон", "Интеграции", "Превью"]
    x = 80
    for i, s in enumerate(steps):
        on = i <= 1
        label = f"0{i+1}  {s}"
        tw = int(text_w(p.d, label, font(F_UI, 14)) + 36)
        box = (x, 340, x + tw, 388)
        if on:
            pill(p.im, box, label, font(F_UI, 14), LIME, INK, False)
        else:
            ghost_pill(p.im, box, label, font(F_UI, 14))
        x += tw + 12

    p.d.text((80, 420), "Ниша", font=font(F_UI, 14), fill=MUTED)
    chips = [("Клиника", True), ("Магазин", False), ("Школа", False), ("Услуги", False)]
    x = 80
    for label, on in chips:
        box = (x, 450, x + 150, 498)
        if on:
            pill(p.im, box, label, font(F_UI_B, 15), LIME, INK, True)
        else:
            ghost_pill(p.im, box, label, font(F_UI, 15))
        x += 166

    p.d.text((80, 530), "Задачи бота", font=font(F_UI, 14), fill=MUTED)
    tasks = [("Запись", True), ("Оплата", True), ("Квалификация", False), ("Сервис", False)]
    x = 80
    for label, on in tasks:
        box = (x, 560, x + 190, 608)
        if on:
            pill(p.im, box, label, font(F_UI_B, 15), LIME, INK, False)
        else:
            ghost_pill(p.im, box, label, font(F_UI, 15))
        x += 206

    p.d.text((80, 640), "Тон общения", font=font(F_UI, 14), fill=MUTED)
    p.d.text((80, 672), "Живой администратор", font=font(F_UI_B, 18), fill=FOREST)
    rr(p.d, (80, 712, 700, 728), 8, MILK)
    rr(p.d, (80, 712, 430, 728), 8, LIME)

    pill(p.im, (80, 780, 620, 850), "Включить BotSup в WhatsApp", font(F_UI_B, 18), LIME, INK, True)
    p.d.text((80, 880), "Это не форма «оставьте телефон». Это церемония старта.", font=font(F_BODY, 18), fill=FOREST_SOFT)

    composite(p.im, asset_splash(820), (1080, 80))
    phone = render_phone(
        760,
        [
            ("bot", "Здравствуйте! Клиника Пульс на связи."),
            ("user", "Хочу записаться на сегодня"),
            ("bot", "Есть 19:00 у терапевта. Забронировать?"),
            ("card", "Приём  ·  19:00  ·  2 400 ₽"),
            ("user", "Да, бронируйте"),
            ("pay", "Подтвердить запись"),
        ],
    )
    composite(p.im, phone, (1280, 200))
    p.save("06-launch.png")


def page_mobile_home() -> None:
    p = Page(1242, 2688)
    # header
    p.d.rectangle((0, 0, 1242, 140), fill=PORCELAIN)
    wordmark(p.im, (48, 48), 28)
    ghost_pill(p.im, (980, 44, 1190, 100), "Меню", font(F_UI_B, 16))
    p.d.text((64, 180), "AI WHATSAPP-БОТ", font=font(F_UI_SB, 18), fill=LIME_DEEP)
    y = draw_lines(p.d, (64, 220), ["Продажи", "в WhatsApp.", "Сами. Сейчас."], font(F_DISP, 64), FOREST, 74)
    lines = wrap(p.d, "Бот отвечает за секунду и закрывает запись или оплату.", font(F_BODY, 24), 1100)
    y = draw_lines(p.d, (64, y + 10), lines, font(F_BODY, 24), FOREST_SOFT, 34)
    splash = asset_splash(1100)
    composite(p.im, splash, (80, y + 10))
    phone = render_phone(980)
    composite(p.im, phone, (330, y + 40))
    y = y + 1080
    pill(p.im, (64, y, 600, y + 88), "Запустить бота", font(F_UI_B, 22), LIME, INK, True)
    ghost_pill(p.im, (624, y, 1178, y + 88), "Смотреть диалог", font(F_UI_B, 20))
    y += 140
    stats = [("0.8с", "ответ"), ("+214%", "сделок"), ("24/7", "online")]
    x = 64
    for num, label in stats:
        rr(p.d, (x, y, x + 350, y + 140), 28, WHITE, LINE, 1)
        p.d.text((x + 24, y + 24), num, font=font(F_DISP_B, 32), fill=FOREST)
        p.d.text((x + 24, y + 80), label, font=font(F_UI, 18), fill=MUTED)
        x += 370
    p.crop_bottom(y + 200)
    p.save("07-mobile-home.png")


def page_mobile_launch() -> None:
    p = Page(1242, 2688)
    wordmark(p.im, (48, 48), 28)
    p.d.text((64, 160), "ЗАПУСК", font=font(F_UI_SB, 16), fill=LIME_DEEP)
    p.d.text((64, 200), "Бот уже", font=font(F_DISP, 56), fill=FOREST)
    p.d.text((64, 270), "включается", font=font(F_DISP, 56), fill=FOREST)
    steps = ["Ниша", "Задачи", "Тон", "Связки", "Превью"]
    x, sy = 48, 360
    for i, s in enumerate(steps):
        on = i <= 1
        label = f"0{i+1} {s}"
        tw = int(text_w(p.d, label, font(F_UI, 15)) + 32)
        if x + tw > 1190:
            x = 48
            sy += 64
        box = (x, sy, x + tw, sy + 50)
        if on:
            pill(p.im, box, label, font(F_UI, 15), LIME, INK, False)
        else:
            ghost_pill(p.im, box, label, font(F_UI, 15))
        x += tw + 12
    p.d.text((64, sy + 80), "Ниша  ·  Клиника", font=font(F_UI_B, 22), fill=FOREST)
    chips = ["Клиника", "Магазин", "Школа", "Услуги"]
    x = 64
    cy = sy + 130
    for i, c in enumerate(chips):
        box = (x, cy, x + 260, cy + 62)
        if i == 0:
            pill(p.im, box, c, font(F_UI_B, 18), LIME, INK, True)
        else:
            ghost_pill(p.im, box, c, font(F_UI, 18))
        x += 280
    phone = render_phone(
        820,
        [
            ("bot", "Клиника Пульс на связи. Записать вас?"),
            ("user", "На сегодня вечером"),
            ("card", "Терапевт  ·  19:00  ·  2 400 ₽"),
            ("pay", "Подтвердить запись"),
        ],
    )
    composite(p.im, phone, (380, cy + 90))
    y = cy + 960
    pill(p.im, (64, y, 1178, y + 100), "Включить BotSup в WhatsApp", font(F_UI_B, 22), LIME, INK, True)
    p.d.text((64, y + 130), "Превью чата меняется от ваших ответов. Бот уже дышит.", font=font(F_BODY, 22), fill=FOREST_SOFT)
    p.crop_bottom(y + 220)
    p.save("08-mobile-launch.png")


def page_mobile_pricing() -> None:
    p = Page(1242, 2600)
    wordmark(p.im, (48, 48), 28)
    p.d.text((64, 160), "ТАРИФЫ", font=font(F_UI_SB, 16), fill=LIME_DEEP)
    p.d.text((64, 200), "Выберите пульс", font=font(F_DISP, 48), fill=FOREST)
    plans = [
        ("Старт", "9 900 ₽", False),
        ("Пульс", "24 900 ₽", True),
        ("Студия", "49 900 ₽", False),
    ]
    y = 300
    for name, price, rec in plans:
        box = (64, y, 1178, y + 220)
        if rec:
            glow(p.im, (56, y - 6, 1186, y + 228), 32, LIME, 16, 80)
        rr(p.d, box, 32, (246, 255, 230, 255) if rec else WHITE, LIME if rec else LINE, 3 if rec else 1)
        p.d.text((100, y + 36), name, font=font(F_DISP_B, 32), fill=FOREST)
        p.d.text((100, y + 96), price, font=font(F_DISP, 36), fill=FOREST)
        if rec:
            p.d.text((420, y + 48), "рекомендуем", font=font(F_UI, 16), fill=LIME_DEEP)
        pill(p.im, (820, y + 70, 1120, y + 150), "Выбрать", font(F_UI_B, 18), LIME if rec else FOREST, INK if rec else LIME, rec)
        y += 250
    pill(p.im, (64, y + 20, 1178, y + 120), "Выбрать тариф и запустить", font(F_UI_B, 22), LIME, INK, True)
    p.crop_bottom(y + 200)
    p.save("09-mobile-pricing.png")


def page_campaign() -> None:
    src = Image.open(RAW / "botsup-asset-night-burst.png").convert("RGBA")
    src = src.resize((1920, 1080), Image.Resampling.LANCZOS)
    p = Page(1920, 1080)
    p.im.paste(src, (0, 0))
    p.d = ImageDraw.Draw(p.im)
    veil = Image.new("RGBA", (1920, 1080), (0, 0, 0, 0))
    ImageDraw.Draw(veil).rectangle((0, 0, 820, 1080), fill=(250, 253, 248, 210))
    p.im.alpha_composite(veil)
    wordmark(p.im, (72, 60), 28)
    p.d.text((72, 280), "Ночной всплеск", font=font(F_DISP, 64), fill=FOREST)
    p.d.text((72, 360), "заявок", font=font(F_DISP, 64), fill=FOREST)
    lines = wrap(p.d, "Белый продукт взрывается хлорофилльным светом. Бот отвечает, пока город спит.", font(F_BODY, 22), 680)
    draw_lines(p.d, (72, 460), lines, font(F_BODY, 22), FOREST_SOFT, 30)
    pill(p.im, (72, 580, 430, 644), "Запустить бота", font(F_UI_B, 18), LIME, INK, True)
    p.save("10-campaign-night-burst.png")


def main() -> None:
    page_styleboard()
    page_logo()
    page_home_hero()
    page_home_full()
    page_platform()
    page_solutions()
    page_cases()
    page_pricing()
    page_launch()
    page_mobile_home()
    page_mobile_launch()
    page_mobile_pricing()
    page_campaign()
    print("done")


if __name__ == "__main__":
    main()
