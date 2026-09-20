#!/usr/bin/env python3
"""Compose BRUTAL desktop mockups: 1440px full-page PNGs. Visual output only."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFont

ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "assets"
FONTS = ROOT / "fonts"
OUT = ROOT

W = 1440
M = 64
G = 24
CW = W - M * 2
COL = (CW - 11 * G) / 12

CHARCOAL = (31, 30, 28)
BONE = (230, 225, 214)
SLAB = (42, 41, 38)
MUTED = (138, 133, 122)
RULE_DARK = (74, 71, 65)
RULE_PAPER = (200, 194, 180)
IRON = (166, 90, 50)
HEADER_H = 72


def cx(i: float) -> int:
    return int(round(M + i * (COL + G)))


def cw(span: float) -> int:
    return int(round(span * COL + (span - 1) * G))


def grotesk(size: int, weight: int = 400) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(FONTS / "Onest-variable.ttf"), size)
    font.set_variation_by_axes([float(weight)])
    return font


def mono(size: int, weight: str = "Regular") -> ImageFont.FreeTypeFont:
    name = {
        "Regular": "IBMPlexMono-Regular.ttf",
        "Medium": "IBMPlexMono-Medium.ttf",
        "Bold": "IBMPlexMono-Bold.ttf",
    }[weight]
    return ImageFont.truetype(str(FONTS / name), size)


def tw(text: str, font: ImageFont.FreeTypeFont, tracking: float = 0) -> float:
    if not text:
        return 0
    if tracking == 0:
        return font.getlength(text)
    return sum(font.getlength(ch) for ch in text) + tracking * (len(text) - 1)


def th(font: ImageFont.FreeTypeFont) -> int:
    ascent, descent = font.getmetrics()
    return ascent + descent


def draw_tracked(
    draw: ImageDraw.ImageDraw,
    xy: tuple[float, float],
    text: str,
    font: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
    tracking: float = 0,
) -> None:
    x, y = xy
    if tracking == 0:
        draw.text((x, y), text, font=font, fill=fill)
        return
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += font.getlength(ch) + tracking


def wrap(text: str, font: ImageFont.FreeTypeFont, max_w: float, tracking: float = 0) -> list[str]:
    words = text.split()
    lines: list[str] = []
    cur = ""
    for word in words:
        test = f"{cur} {word}".strip()
        if tw(test, font, tracking) <= max_w:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def cover(path: Path, width: int, height: int, saturation: float = 0.9) -> Image.Image:
    im = Image.open(path).convert("RGB")
    scale = max(width / im.width, height / im.height)
    nw, nh = max(1, int(round(im.width * scale))), max(1, int(round(im.height * scale)))
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = max(0, (nw - width) // 2)
    top = max(0, (nh - height) // 2)
    im = im.crop((left, top, left + width, top + height))
    im = ImageEnhance.Color(im).enhance(saturation)
    im = ImageEnhance.Contrast(im).enhance(1.03)
    return im


def new_band(height: int, color: tuple[int, int, int]) -> Image.Image:
    return Image.new("RGB", (W, height), color)


def paste(dst: Image.Image, src: Image.Image, xy: tuple[int, int]) -> None:
    dst.paste(src, xy)


def hline(draw: ImageDraw.ImageDraw, y: int, x0: int, x1: int, color: tuple[int, int, int]) -> None:
    draw.line([(x0, y), (x1, y)], fill=color, width=1)


def vline(draw: ImageDraw.ImageDraw, x: int, y0: int, y1: int, color: tuple[int, int, int]) -> None:
    draw.line([(x, y0), (x, y1)], fill=color, width=1)


def primary_button(label: str, compact: bool = False) -> Image.Image:
    font = mono(11, "Medium")
    tracking = 2.2
    pad_x = 18 if compact else 22
    pad_y = 11 if compact else 14
    text_w = tw(label, font, tracking)
    width = int(round(text_w + pad_x * 2))
    height = int(round(th(font) + pad_y * 2))
    img = Image.new("RGB", (width, height), IRON)
    draw = ImageDraw.Draw(img)
    draw_tracked(draw, ((width - text_w) / 2, (height - th(font)) / 2 - 1), label, font, BONE, tracking)
    return img


def ghost_button(label: str, dark: bool = True) -> Image.Image:
    font = mono(11, "Medium")
    tracking = 2.2
    pad_x, pad_y = 20, 13
    text_w = tw(label, font, tracking)
    width = int(round(text_w + pad_x * 2))
    height = int(round(th(font) + pad_y * 2))
    border = BONE if dark else CHARCOAL
    bg = CHARCOAL if dark else BONE
    ink = BONE if dark else CHARCOAL
    img = Image.new("RGB", (width, height), bg)
    draw = ImageDraw.Draw(img)
    draw.rectangle([0, 0, width - 1, height - 1], outline=border, width=1)
    draw_tracked(draw, ((width - text_w) / 2, (height - th(font)) / 2 - 1), label, font, ink, tracking)
    return img


def draw_header(active: str | None = None) -> Image.Image:
    img = new_band(HEADER_H, CHARCOAL)
    draw = ImageDraw.Draw(img)
    hline(draw, HEADER_H - 1, 0, W, RULE_DARK)
    mark = grotesk(13, 800)
    draw_tracked(draw, (M, 28), "BRUTAL", mark, BONE, -0.5)

    btn = primary_button("ЗАЯВКА", compact=True)
    bx = W - M - btn.width
    paste(img, btn, (bx, (HEADER_H - btn.height) // 2))

    nav_font = mono(11, "Medium")
    items = [("ЛИНЕЙКА", "lineup"), ("ПОДХОД", "path")]
    x = bx - 40
    for label, key in reversed(items):
        width = tw(label, nav_font, 2.6)
        x -= width
        draw_tracked(draw, (x, 29), label, nav_font, BONE, 2.6)
        if active == key:
            draw.rectangle([int(x), 50, int(x + width), 52], fill=IRON)
        x -= 36
    return img


def draw_footer() -> Image.Image:
    height = 236
    img = new_band(height, CHARCOAL)
    draw = ImageDraw.Draw(img)
    hline(draw, 0, 0, W, RULE_DARK)

    mark = grotesk(13, 800)
    draw_tracked(draw, (M, 48), "BRUTAL", mark, BONE, -0.5)
    body = grotesk(15, 400)
    for i, line in enumerate(wrap("Концептуальные модульные дома. Москва и область.", body, cw(4))):
        draw.text((M, 76 + i * 22), line, font=body, fill=MUTED)

    houses = ["01  ЛЕС", "02  ПОЛЕ", "03  СКЛОН"]
    hf = mono(12, "Medium")
    widths = [tw(label, hf, 1.4) for label in houses]
    total = sum(widths) + 56 * 2
    x = (W - total) / 2
    for label, width in zip(houses, widths):
        draw_tracked(draw, (x, 70), label, hf, BONE, 1.4)
        x += width + 56

    rf = mono(12, "Regular")
    contacts = ["T   +7 (•••) •••–••–••", "E   mail@••••", "TG  t.me/••••"]
    for i, line in enumerate(contacts):
        draw_tracked(draw, (cx(8), 48 + i * 26), line, rf, MUTED, 0.3)

    hline(draw, height - 52, M, W - M, RULE_DARK)
    draw_tracked(
        draw,
        (M, height - 34),
        "Проект и сопровождение строительства",
        mono(11, "Regular"),
        MUTED,
        1.6,
    )
    return img


def section_head(
    img: Image.Image,
    y: int,
    index: str,
    title: str,
    dark: bool,
    deck: str | None = None,
    deck_w: int | None = None,
) -> int:
    draw = ImageDraw.Draw(img)
    ink = BONE if dark else CHARCOAL
    draw_tracked(draw, (M, y), index, mono(13, "Medium"), MUTED, 2.8)
    y += 26
    draw_tracked(draw, (M, y), title, grotesk(40, 800), ink, -0.7)
    y += 56
    if deck:
        body = grotesk(17, 400)
        for line in wrap(deck, body, deck_w or cw(7)):
            draw.text((M, y), line, font=body, fill=ink)
            y += 28
        y += 4
    return y


def field_block(
    draw: ImageDraw.ImageDraw,
    x: int,
    y: int,
    width: int,
    label: str,
    hint: str,
    dark: bool = True,
    locked_value: str | None = None,
    height: int = 54,
) -> int:
    lab = mono(11, "Medium")
    val = grotesk(16, 400)
    draw_tracked(draw, (x, y), label, lab, MUTED, 1.8)
    y += 22
    fill = SLAB if dark else BONE
    border = IRON if locked_value else (RULE_DARK if dark else RULE_PAPER)
    draw.rectangle([x, y, x + width, y + height], fill=fill, outline=border, width=1)
    text = locked_value or hint
    color = (BONE if dark else CHARCOAL) if locked_value else MUTED
    draw.text((x + 16, y + (height - th(val)) // 2 - 1), text, font=val, fill=color)
    return y + height


def model_row(
    draw: ImageDraw.ImageDraw,
    x: int,
    y: int,
    width: int,
    selected: str,
    locked: bool,
    dark: bool = True,
) -> int:
    draw_tracked(draw, (x, y), "МОДЕЛЬ", mono(11, "Medium"), MUTED, 1.8)
    y += 22
    options = ["HOUSE 01 / ЛЕС", "HOUSE 02 / ПОЛЕ", "HOUSE 03 / СКЛОН", "пока не знаю"]
    gap = 8
    fw = (width - gap * 3) // 4
    h = 50
    mf = mono(11, "Medium")
    for i, opt in enumerate(options):
        ox = x + i * (fw + gap)
        selected_opt = opt == selected
        dim = locked and not selected_opt
        fill = SLAB if dark else BONE
        border = IRON if selected_opt else (RULE_DARK if dark else RULE_PAPER)
        ink = IRON if selected_opt else (MUTED if dim else (BONE if dark else CHARCOAL))
        draw.rectangle([ox, y, ox + fw, y + h], fill=fill, outline=border, width=1)
        if selected_opt:
            draw.rectangle([ox, y + h - 3, ox + fw, y + h], fill=IRON)
        label_w = tw(opt, mf, 0.3)
        draw_tracked(draw, (ox + (fw - label_w) / 2, y + 17), opt, mf, ink, 0.3)
    return y + h


def status_row(draw: ImageDraw.ImageDraw, x: int, y: int, width: int, dark: bool = True) -> int:
    draw_tracked(draw, (x, y), "УЧАСТОК — РАЙОН МО / СТАТУС", mono(11, "Medium"), MUTED, 1.8)
    y += 22
    left_w = int(width * 0.52)
    gap = 8
    right_w = width - left_w - gap
    each = (right_w - gap) // 2
    h = 54
    fill = SLAB if dark else BONE
    border = RULE_DARK if dark else RULE_PAPER
    val = grotesk(16, 400)
    draw.rectangle([x, y, x + left_w, y + h], fill=fill, outline=border, width=1)
    draw.text((x + 16, y + 16), "район МО", font=val, fill=MUTED)
    mf = mono(11, "Medium")
    for i, label in enumerate(("есть участок", "в поиске")):
        ox = x + left_w + gap + i * (each + gap)
        draw.rectangle([ox, y, ox + each, y + h], fill=fill, outline=border, width=1)
        label_w = tw(label, mf, 0.6)
        draw_tracked(draw, (ox + (each - label_w) / 2, y + 19), label, mf, MUTED, 0.6)
    return y + h


def draw_form(title: str, deck: str, selected_model: str, locked: bool, cta: str) -> Image.Image:
    img = new_band(900, CHARCOAL)
    draw = ImageDraw.Draw(img)
    y = 110
    y = section_head(img, y, "05", title, True, deck, cw(8))
    y += 32
    form_w = cw(8)
    half = (form_w - 16) // 2
    field_block(draw, M, y, half, "ИМЯ", "как к вам обращаться")
    y = field_block(draw, M + half + 16, y, half, "ТЕЛЕФОН ИЛИ TELEGRAM", "+7 или @имя")
    y += 26
    y = status_row(draw, M, y, form_w)
    y += 26
    y = model_row(draw, M, y, form_w, selected_model, locked)
    y += 26
    y = field_block(draw, M, y, form_w, "КОММЕНТАРИЙ", "рельеф, вид, лес, пожелание", height=86)
    y += 32
    paste(img, primary_button(cta), (M, y))
    return img.crop((0, 0, W, y + 44 + 120))


def module_slab(
    draw: ImageDraw.ImageDraw,
    x: int,
    y: int,
    w: int,
    h: int,
    label: str,
) -> None:
    draw.rectangle([x, y, x + w, y + h], fill=(78, 73, 66), outline=BONE, width=1)
    lf = mono(11, "Medium")
    label_w = tw(label, lf, 1.6)
    draw_tracked(draw, (x + (w - label_w) / 2, y + h + 10), label, lf, BONE, 1.6)


def draw_modules(kind: str, caption: str) -> Image.Image:
    img = new_band(620, CHARCOAL)
    draw = ImageDraw.Draw(img)
    section_head(img, 72, "03", "МОДУЛИ", True, caption, cw(8))

    board_x, board_y, board_w, board_h = M, 268, CW, 280
    draw.rectangle([board_x, board_y, board_x + board_w, board_y + board_h], fill=SLAB, outline=RULE_DARK, width=1)

    # faint modular grid
    for i in range(1, 12):
        gx = board_x + int(round(i * board_w / 12))
        draw.line([(gx, board_y + 1), (gx, board_y + board_h - 1)], fill=(48, 46, 42), width=1)
    for i in range(1, 4):
        gy = board_y + int(round(i * board_h / 4))
        draw.line([(board_x + 1, gy), (board_x + board_w - 1, gy)], fill=(48, 46, 42), width=1)

    if kind == "les":
        module_slab(draw, board_x + 360, board_y + 78, 210, 108, "01")
        module_slab(draw, board_x + 586, board_y + 58, 176, 128, "02")
        module_slab(draw, board_x + 778, board_y + 96, 148, 90, "03")
    elif kind == "pole":
        x0 = board_x + 196
        y0 = board_y + 96
        h = 72
        widths = (300, 340, 280)
        x = x0
        for i, mw in enumerate(widths):
            module_slab(draw, x, y0, mw, h, f"0{i + 1}")
            if i < 2:
                vline(draw, x + mw, y0, y0 + h, BONE)
            x += mw
    else:
        module_slab(draw, board_x + 320, board_y + 40, 220, 64, "01")
        module_slab(draw, board_x + 560, board_y + 96, 220, 64, "02")
        module_slab(draw, board_x + 800, board_y + 152, 220, 64, "03")
        draw.line([(board_x + 540, board_y + 104), (board_x + 560, board_y + 104)], fill=BONE, width=1)
        draw.line([(board_x + 780, board_y + 160), (board_x + 800, board_y + 160)], fill=BONE, width=1)
    return img


def stack(parts: list[Image.Image]) -> Image.Image:
    height = sum(p.height for p in parts)
    out = Image.new("RGB", (W, height), CHARCOAL)
    y = 0
    for part in parts:
        out.paste(part, (0, y))
        y += part.height
    return out


def home() -> Image.Image:
    parts: list[Image.Image] = [draw_header()]

    hero_h = 860
    hero = new_band(hero_h, CHARCOAL)
    paste(hero, cover(ASSETS / "house-02-pole-hero.png", W, hero_h), (0, 0))
    slab = Image.new("RGB", (W, 340), CHARCOAL)
    sd = ImageDraw.Draw(slab)
    hline(sd, 0, 0, W, RULE_DARK)
    draw_tracked(sd, (M, 24), "BRUTAL · МОСКВА И МО", mono(12, "Medium"), MUTED, 2.8)
    display = grotesk(82, 900)
    draw_tracked(sd, (M, 52), "ДОМ КАК МАССА", display, BONE, -2.0)
    draw_tracked(sd, (M, 138), "НА УЧАСТКЕ", display, BONE, -2.0)
    sd.text(
        (M, 236),
        "Концептуальные модульные дома. Проект и сопровождение строительства.",
        font=grotesk(17, 400),
        fill=BONE,
    )
    paste(slab, primary_button("ОБСУДИТЬ УЧАСТОК"), (M, 276))
    paste(hero, slab, (0, hero_h - 340))
    parts.append(hero)

    # Thesis — bone, text then full-bleed landscape
    text_h = 360
    photo_h = 460
    thesis = new_band(text_h + photo_h, BONE)
    section_head(
        thesis,
        100,
        "01",
        "СНАЧАЛА УЧАСТОК",
        False,
        "Дом не выбирают по картинке, чтобы потом поставить его куда угодно. Модель сажается на вид, рельеф, лес и ориентацию конкретного участка.",
        cw(8),
    )
    td = ImageDraw.Draw(thesis)
    draw_tracked(
        td,
        (M, 292),
        "МОДУЛЬНЫЙ ДОМ   ·   МОСКВА И МО   ·   ПРОЕКТ + СОПРОВОЖДЕНИЕ",
        mono(11, "Medium"),
        MUTED,
        1.6,
    )
    paste(thesis, cover(ASSETS / "landscape-plot.png", W, photo_h), (0, text_h))
    parts.append(thesis)

    # Material — dark
    mat = new_band(900, CHARCOAL)
    section_head(
        mat,
        100,
        "02",
        "БРУТАЛЬНАЯ МАССА",
        True,
        "Бетон, вес, честная конструкция. Никакого декора ради декора.",
        cw(5),
    )
    paste(mat, cover(ASSETS / "concrete-boardform.png", cw(8), 500), (cx(4), 300))
    paste(mat, cover(ASSETS / "concrete-corner.png", cw(4), 320), (M, 480))
    md = ImageDraw.Draw(mat)
    md.rectangle([cx(4), 300, cx(4) + cw(8) - 1, 799], outline=RULE_DARK, width=1)
    md.rectangle([M, 480, M + cw(4) - 1, 799], outline=RULE_DARK, width=1)
    parts.append(mat)

    head = new_band(250, CHARCOAL)
    section_head(
        head,
        88,
        "03",
        "ЛИНЕЙКА",
        True,
        "Три модели. Каждую сажаем на конкретный участок.",
        cw(8),
    )
    parts.append(head)

    rows = [
        ("01", "HOUSE 01", "ЛЕС", "лес", "Короткий объём. Держит деревья и входит из тени.", "СМОТРЕТЬ HOUSE 01", "house-01-les-hero.png"),
        ("02", "HOUSE 02", "ПОЛЕ", "поле", "Длинная горизонталь. Смотрит в поле и горизонт.", "СМОТРЕТЬ HOUSE 02", "house-02-pole-hero.png"),
        ("03", "HOUSE 03", "СКЛОН", "склон", "Ступени по рельефу. Платформы следуют за падением земли.", "СМОТРЕТЬ HOUSE 03", "house-03-sklon-hero.png"),
    ]
    for idx, house, name, site, sentence, cta, fname in rows:
        row = new_band(648, CHARCOAL)
        paste(row, cover(ASSETS / fname, W, 528), (0, 0))
        bar = Image.new("RGB", (W, 120), SLAB)
        bd = ImageDraw.Draw(bar)
        hline(bd, 0, 0, W, RULE_DARK)
        draw_tracked(bd, (M, 28), idx, mono(13, "Medium"), IRON, 2.2)
        draw_tracked(bd, (M + 56, 22), f"{house}  /  {name}", grotesk(26, 800), BONE, -0.4)
        draw_tracked(bd, (M + 56, 62), site, mono(12, "Medium"), MUTED, 3.2)
        bd.text((M + 140, 60), sentence, font=grotesk(16, 400), fill=BONE)
        btn = ghost_button(cta, dark=True)
        paste(bar, btn, (W - M - btn.width, (120 - btn.height) // 2))
        paste(row, bar, (0, 528))
        parts.append(row)

    path = new_band(560, BONE)
    y = 96
    y = section_head(path, y, "04", "КАК ИДЁМ", False)
    y += 28
    steps = [
        ("01", "Консультация", "Участок, вид, ограничения, какая модель имеет смысл."),
        ("02", "Проект", "Адаптация выбранной модели под место."),
        ("03", "Сопровождение", "Ведём дом на стройке, не оставляем набор картинок."),
    ]
    pd = ImageDraw.Draw(path)
    for i, (n, title, copy) in enumerate(steps):
        x = cx(i * 4)
        if i:
            vline(pd, x - G // 2, y, y + 200, RULE_PAPER)
        draw_tracked(pd, (x, y), n, mono(12, "Medium"), MUTED, 2.2)
        pd.text((x, y + 30), title, font=grotesk(24, 800), fill=CHARCOAL)
        for j, line in enumerate(wrap(copy, grotesk(16, 400), cw(4) - 12)):
            pd.text((x, y + 80 + j * 26), line, font=grotesk(16, 400), fill=CHARCOAL)
    parts.append(path)

    parts.append(
        draw_form(
            "ОБСУДИТЬ УЧАСТОК",
            "Напишите о месте. Модель можно выбрать позже.",
            "пока не знаю",
            False,
            "ОБСУДИТЬ УЧАСТОК",
        )
    )
    parts.append(draw_footer())
    return stack(parts)


def house_page(
    *,
    name: str,
    kicker: str,
    hero: str,
    mass: str,
    landscape: str,
    one_liner: str,
    concept: str,
    site_copy: str,
    planting: str,
    modules_kind: str,
    modules_caption: str,
    form_title: str,
    model: str,
) -> Image.Image:
    parts: list[Image.Image] = [draw_header(active="lineup")]

    hero_h = 840
    hero_im = new_band(hero_h, CHARCOAL)
    paste(hero_im, cover(ASSETS / hero, W, hero_h), (0, 0))
    slab = Image.new("RGB", (W, 300), CHARCOAL)
    sd = ImageDraw.Draw(slab)
    hline(sd, 0, 0, W, RULE_DARK)
    draw_tracked(sd, (M, 24), kicker, mono(13, "Medium"), IRON, 2.8)
    draw_tracked(sd, (M, 52), name, grotesk(112, 900), BONE, -2.2)
    sd.text((M, 180), one_liner, font=grotesk(18, 400), fill=BONE)
    paste(slab, primary_button("ОСТАВИТЬ ЗАЯВКУ"), (M, 220))
    paste(hero_im, slab, (0, hero_h - 300))
    parts.append(hero_im)

    concept_im = new_band(380, BONE)
    section_head(concept_im, 100, "01", "КОНЦЕПЦИЯ", False, concept, cw(8))
    parts.append(concept_im)

    spec = new_band(176, CHARCOAL)
    draw = ImageDraw.Draw(spec)
    cells = [
        ("тип", "модульный дом"),
        ("посадка", planting),
        ("программа", "загородный / гостевой"),
        ("адаптация", "под участок"),
        ("стоимость", "от …"),
    ]
    cell_w = CW / 5
    for i, (key, value) in enumerate(cells):
        x = M + int(i * cell_w)
        if i:
            vline(draw, x, 44, 132, RULE_DARK)
        draw_tracked(draw, (x + 20, 52), key, mono(11, "Medium"), MUTED, 2.0)
        color = MUTED if key == "стоимость" else BONE
        draw_tracked(draw, (x + 20, 88), value, mono(14, "Medium"), color, 0.6)
    hline(draw, 0, 0, W, RULE_DARK)
    hline(draw, 175, 0, W, RULE_DARK)
    parts.append(spec)

    site = new_band(780, BONE)
    y = 96
    y = section_head(site, y, "02", "ЛОГИКА УЧАСТКА", False, site_copy, cw(8))
    y += 28
    left = cover(ASSETS / landscape, cw(6), 400)
    right = cover(ASSETS / mass, cw(6), 400)
    paste(site, left, (M, y))
    paste(site, right, (cx(6), y))
    sd = ImageDraw.Draw(site)
    sd.rectangle([M, y, M + cw(6) - 1, y + 399], outline=RULE_PAPER, width=1)
    sd.rectangle([cx(6), y, cx(6) + cw(6) - 1, y + 399], outline=RULE_PAPER, width=1)
    parts.append(site)

    parts.append(draw_modules(modules_kind, modules_caption))

    cost = new_band(240, BONE)
    cd = ImageDraw.Draw(cost)
    draw_tracked(cd, (M, 56), "04", mono(13, "Medium"), MUTED, 2.8)
    draw_tracked(cd, (M, 84), "СТОИМОСТЬ", grotesk(40, 800), CHARCOAL, -0.7)
    draw_tracked(cd, (M, 150), "от …", mono(22, "Medium"), MUTED, 1.2)
    cd.text(
        (M + 140, 152),
        "смета после консультации по участку",
        font=grotesk(17, 400),
        fill=CHARCOAL,
    )
    parts.append(cost)

    parts.append(
        draw_form(
            form_title,
            "Модель уже выбрана. Напишите о месте.",
            model,
            True,
            "ОСТАВИТЬ ЗАЯВКУ",
        )
    )
    parts.append(draw_footer())
    return stack(parts)


def les() -> Image.Image:
    return house_page(
        name="ЛЕС",
        kicker="HOUSE 01",
        hero="house-01-les-hero.png",
        mass="house-01-les-mass.png",
        landscape="landscape-forest-edge.png",
        one_liner="Короткий объём для участка с деревьями.",
        concept="Короткий объём, чтобы оставить деревья. Вход из тени, свет — щелью в прогал или на вид.",
        site_copy="Край леса задаёт тень и дистанцию. Дом стоит как вырезанная масса, без декоративной маскировки под избу.",
        planting="лес",
        modules_kind="les",
        modules_caption="Модули собираются в короткий объём и сдвигаются под деревья.",
        form_title="ОБСУДИТЬ HOUSE 01",
        model="HOUSE 01 / ЛЕС",
    )


def pole() -> Image.Image:
    return house_page(
        name="ПОЛЕ",
        kicker="HOUSE 02",
        hero="house-02-pole-hero.png",
        mass="house-02-pole-mass.png",
        landscape="landscape-field.png",
        one_liner="Длинный горизонтальный дом для открытого поля и горизонта.",
        concept="Длинная горизонталь садится на открытое поле. Дом держит горизонт, а не спорит с ним.",
        site_copy="Поле и горизонт — главные границы участка. Длинный бар читается как линия, а не как усадьба.",
        planting="поле",
        modules_kind="pole",
        modules_caption="Модули выстраиваются в длинную горизонталь и держат линию горизонта.",
        form_title="ОБСУДИТЬ HOUSE 02",
        model="HOUSE 02 / ПОЛЕ",
    )


def sklon() -> Image.Image:
    return house_page(
        name="СКЛОН",
        kicker="HOUSE 03",
        hero="house-03-sklon-hero.png",
        mass="house-03-sklon-mass.png",
        landscape="landscape-slope.png",
        one_liner="Ступенчатые модули для рельефа.",
        concept="Модули встают ступенью по падению земли. Платформы повторяют рельеф, а не выравнивают его.",
        site_copy="Рельеф не мешает — он программа. Ступени держат уровень и вид, не превращая склон в цоколь-декор.",
        planting="склон",
        modules_kind="sklon",
        modules_caption="Модули садятся ступенью и сдвигаются вдоль падения рельефа.",
        form_title="ОБСУДИТЬ HOUSE 03",
        model="HOUSE 03 / СКЛОН",
    )


def save(img: Image.Image, name: str) -> Path:
    path = OUT / name
    img.save(path, "PNG", optimize=True, compress_level=9)
    print(f"{name}: {img.size[0]}×{img.size[1]}  {path.stat().st_size / 1024:.0f} KB")
    return path


def main() -> None:
    save(home(), "01-brutal-home.png")
    save(les(), "02-brutal-les.png")
    save(pole(), "03-brutal-pole.png")
    save(sklon(), "04-brutal-sklon.png")


if __name__ == "__main__":
    main()
