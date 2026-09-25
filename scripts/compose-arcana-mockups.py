#!/usr/bin/env python3
"""Compose ARCANA Night Folio / Cut PNG mockups.

Concept mockups only. Name ARCANA is real. All contacts, series titles,
and form values are MOCK DATA — not facts about the studio.
"""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / "docs/research/arcana-mockups"
PLATES = BASE / "plates"
FONTS = BASE / "fonts"
OUT_DESK = BASE / "desktop"
OUT_MOB = BASE / "mobile"
ARTIFACTS = Path("/opt/cursor/artifacts/arcana-mockups")

BG = (11, 12, 10)
BONE = (232, 226, 214)
BONE_72 = (232, 226, 214, 184)
BONE_48 = (232, 226, 214, 122)
BONE_28 = (232, 226, 214, 72)
MERCURY = (197, 205, 209)
RULE = (38, 40, 37)
INK = (8, 9, 8)

NAV = ["Серии", "Вход", "Brands", "Студия", "Заявка"]


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTS / name), size)


def F_disp(size: int, weight: str = "SemiBold") -> ImageFont.FreeTypeFont:
    return font(f"BarlowCondensed-{weight}.ttf", size)


def F_serif(size: int, italic: bool = False, bold: bool = False) -> ImageFont.FreeTypeFont:
    if italic:
        return font("Cormorant-Italic-500.ttf", size)
    return font("Cormorant-600.ttf" if bold else "Cormorant-500.ttf", size)


def F_sans(size: int, medium: bool = False) -> ImageFont.FreeTypeFont:
    return font("Onest-500.ttf" if medium else "Onest-400.ttf", size)


def F_mark(size: int) -> ImageFont.FreeTypeFont:
    return font("Unbounded-300.ttf", size)


def open_plate(name: str) -> Image.Image:
    return Image.open(PLATES / name).convert("RGB")


def cover(src: Image.Image, w: int, h: int, focus: tuple[float, float] = (0.5, 0.42)) -> Image.Image:
    iw, ih = src.size
    scale = max(w / iw, h / ih)
    nw, nh = max(w, int(iw * scale) + 1), max(h, int(ih * scale) + 1)
    im = src.resize((nw, nh), Image.Resampling.LANCZOS)
    cx, cy = int(nw * focus[0]), int(nh * focus[1])
    left = max(0, min(nw - w, cx - w // 2))
    top = max(0, min(nh - h, cy - h // 2))
    return im.crop((left, top, left + w, top + h))


def tracked_width(text: str, fnt: ImageFont.FreeTypeFont, tracking: float) -> float:
    if not text:
        return 0
    extra = tracking * fnt.size * (len(text) - 1)
    return fnt.getlength(text) + extra


def draw_tracked(
    draw: ImageDraw.ImageDraw,
    xy: tuple[float, float],
    text: str,
    fnt: ImageFont.FreeTypeFont,
    fill,
    tracking: float = 0.08,
) -> float:
    x, y = xy
    for i, ch in enumerate(text):
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += fnt.getlength(ch) + (tracking * fnt.size if i < len(text) - 1 else 0)
    return x


def wrap(text: str, fnt: ImageFont.FreeTypeFont, max_w: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    cur = ""
    for word in words:
        test = word if not cur else f"{cur} {word}"
        if fnt.getlength(test) <= max_w:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def text_h(lines: list[str], fnt: ImageFont.FreeTypeFont, leading: float) -> int:
    if not lines:
        return 0
    bbox = fnt.getbbox("Hg")
    line = bbox[3] - bbox[1]
    return int(line + (len(lines) - 1) * leading)


def draw_lines(
    draw: ImageDraw.ImageDraw,
    xy: tuple[float, float],
    lines: list[str],
    fnt: ImageFont.FreeTypeFont,
    fill,
    leading: float,
) -> float:
    x, y = xy
    bbox = fnt.getbbox("Hg")
    lh = leading if leading > 20 else (bbox[3] - bbox[1]) * leading
    for line in lines:
        draw.text((x, y), line, font=fnt, fill=fill)
        y += lh
    return y


def rule(draw: ImageDraw.ImageDraw, x1: float, y: float, x2: float, fill=RULE, width: int = 1) -> None:
    draw.line([(x1, y), (x2, y)], fill=fill, width=width)


def ghost_button(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    label: str,
    fnt: ImageFont.FreeTypeFont,
    pad_x: int = 26,
    pad_y: int = 14,
    filled: bool = False,
) -> tuple[int, int]:
    x, y = xy
    w = int(fnt.getlength(label) + pad_x * 2)
    h = int((fnt.getbbox(label)[3] - fnt.getbbox(label)[1]) + pad_y * 2 + 4)
    if filled:
        draw.rectangle([x, y, x + w, y + h], fill=BONE)
        color = BG
    else:
        draw.rectangle([x, y, x + w, y + h], outline=BONE, width=1)
        color = BONE
    tw = fnt.getlength(label)
    th = fnt.getbbox(label)[3] - fnt.getbbox(label)[1]
    draw.text((x + (w - tw) / 2, y + (h - th) / 2 - 3), label, font=fnt, fill=color)
    return w, h


def add_grain(img: Image.Image, amount: int = 10) -> Image.Image:
    arr = np.asarray(img).astype(np.int16)
    rng = np.random.default_rng(7)
    noise = rng.integers(-amount, amount + 1, size=arr.shape, dtype=np.int16)
    # keep blacks blacker
    mask = arr.mean(axis=2, keepdims=True) > 12
    out = np.clip(arr + noise * mask, 0, 255).astype(np.uint8)
    return Image.fromarray(out)


def vignette_photo(photo: Image.Image, strength: float = 0.38) -> Image.Image:
    w, h = photo.size
    overlay = Image.new("RGB", (w, h), INK)
    mask = Image.new("L", (w, h), 0)
    md = ImageDraw.Draw(mask)
    inset = int(min(w, h) * 0.06)
    md.ellipse([-w * 0.05, -h * 0.12, w * 1.05, h * 1.18], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=min(w, h) * 0.18))
    mask = ImageEnhance.Brightness(mask).enhance(1.0 - strength)
    return Image.composite(photo, overlay, mask)


def canvas(w: int, h: int) -> Image.Image:
    return Image.new("RGB", (w, h), BG)


def draw_header(img: Image.Image, width: int, active: str | None = None, compact: bool = False) -> int:
    draw = ImageDraw.Draw(img)
    h = 88 if not compact else 76
    m = 56 if not compact else 36
    word = F_disp(28 if not compact else 24)
    nav_f = F_sans(15)
    mark_f = F_sans(11)

    draw_tracked(draw, (m, 28), "ARCANA", word, BONE, 0.14)
    folio = "FOLIO 01"
    fw = tracked_width(folio, mark_f, 0.18)
    draw_tracked(draw, (width - m - fw, 34), folio, mark_f, MERCURY, 0.18)

    # center nav
    gaps = 40
    widths = [nav_f.getlength(item) for item in NAV]
    total = sum(widths) + gaps * (len(NAV) - 1)
    x = (width - total) / 2
    for item, iw in zip(NAV, widths):
        color = BONE if item == active or active is None else (168, 163, 154)
        draw.text((x, 34), item, font=nav_f, fill=color)
        if item == active:
            rule(draw, x, 58, x + iw, fill=BONE, width=1)
        x += iw + gaps

    rule(draw, 0, h - 1, width, fill=RULE)
    return h


def draw_footer(img: Image.Image, y: int, width: int, m: int = 56) -> None:
    draw = ImageDraw.Draw(img)
    rule(draw, m, y, width - m, fill=RULE)
    word = F_disp(20)
    small = F_sans(12)
    tiny = F_sans(11)
    draw_tracked(draw, (m, y + 28), "ARCANA", word, BONE, 0.14)
    draw.text((m, y + 64), "Ночная авторская студия", font=small, fill=BONE)
    draw.text(
        (m, y + 88),
        "Заявка  ·  Telegram  ·  MOCK DATA — контакты не зафиксированы",
        font=tiny,
        fill=(140, 136, 128),
    )
    right = "Concept mockup  ·  не выдавать выдуманное за факт"
    rw = tiny.getlength(right)
    draw.text((width - m - rw, y + 64), right, font=tiny, fill=(92, 90, 86))


def save(img: Image.Image, rel: Path) -> Path:
    img = add_grain(img, 8)
    dests = [BASE / rel, ARTIFACTS / rel]
    for dest in dests:
        dest.parent.mkdir(parents=True, exist_ok=True)
        img.save(dest, "PNG", optimize=True)
    return dests[0]


# ---------------------------------------------------------------------------
# Desktop pages
# ---------------------------------------------------------------------------

def page_home_desktop() -> Image.Image:
    W, H = 1920, 4120
    img = canvas(W, H)
    d = ImageDraw.Draw(img)
    hh = draw_header(img, W)
    m = 56

    # HERO spread — first screen ends at 1080
    photo_w, photo_h = 1248, 1080 - hh
    face = vignette_photo(cover(open_plate("plate-hero-face.png"), photo_w, photo_h, (0.38, 0.46)), 0.22)
    img.paste(face, (0, hh))
    # condensed title cut into the dark under the face
    overlay = ImageDraw.Draw(img)
    draw_tracked(overlay, (48, hh + photo_h - 118), "ARCANA", F_disp(92), BONE, 0.08)
    cred = F_sans(11)
    draw_tracked(overlay, (52, hh + photo_h - 36), "NIGHT STUDIO  /  AUTHORIAL", cred, MERCURY, 0.16)

    # vertical folio mark
    mark = Image.new("RGBA", (420, 40), (0, 0, 0, 0))
    md = ImageDraw.Draw(mark)
    draw_tracked(md, (0, 8), "AFTER MIDNIGHT", F_sans(11), (*MERCURY, 180), 0.22)
    mark = mark.rotate(90, expand=True)
    img.paste(mark, (1188, hh + 70), mark)

    col_x = 1368
    col_w = W - col_x - m
    y = hh + 88
    draw_tracked(d, (col_x, y), "CUT 01", F_sans(11), MERCURY, 0.2)
    y = 220
    head = F_serif(64)
    for line in ["Ночь как", "материал,", "не как фильтр"]:
        d.text((col_x, y), line, font=head, fill=BONE)
        y += 74
    y += 28
    body = F_sans(15)
    copy = (
        "Авторская ночная студия. Не прокат площадки "
        "и не универсальный цех. Здесь собирают кадр, "
        "в котором тьма — материал, а человек — герой."
    )
    y = draw_lines(d, (col_x, y), wrap(copy, body, col_w), body, (196, 190, 180), 26)
    y += 36
    bw, bh = ghost_button(d, (col_x, int(y)), "Оставить заявку  →", F_sans(14, medium=True), filled=True)
    d.text((col_x + bw + 22, y + 14), "Telegram · mock", font=F_sans(13), fill=(140, 136, 128))

    # PAUSE
    y = 1180
    rule(d, 0, y, W, fill=RULE)
    y = 1288
    pause = F_serif(48)
    t1, t2 = "Это не зал.", "Это ночная студия."
    d.text(((W - pause.getlength(t1)) / 2, y), t1, font=pause, fill=BONE)
    d.text(((W - pause.getlength(t2)) / 2, y + 62), t2, font=pause, fill=BONE)
    draw_tracked(d, ((W - tracked_width("CUT 00", F_sans(11), 0.2)) / 2, y - 36), "CUT 00", F_sans(11), MERCURY, 0.2)

    # SERIES organ
    y = 1520
    rule(d, m, y, W - m)
    y += 28
    draw_tracked(d, (m, y), "СЕРИИ", F_sans(11), MERCURY, 0.18)
    draw_tracked(d, (m + 92, y), "SELECTED NIGHTS", F_sans(11), (140, 136, 128), 0.16)
    d.text((W - m - F_sans(13).getlength("Смотреть редакции  →"), y - 2), "Смотреть редакции  →", font=F_sans(13), fill=BONE)
    y += 28
    strip_h = 420
    strip = cover(open_plate("plate-contact-sheet.png"), W - m * 2, strip_h, (0.5, 0.42))
    img.paste(strip, (m, y))
    y += strip_h + 18
    cap = F_sans(12)
    d.text((m, y), "01  Ртуть", font=cap, fill=(168, 163, 154))
    d.text((m + 220, y), "02  После полуночи", font=cap, fill=(168, 163, 154))
    d.text((m + 520, y), "03  Чёрная коробка", font=cap, fill=(168, 163, 154))
    d.text((W - m - cap.getlength("MOCK DATA — названия серий демонстрационные"), y), "MOCK DATA — названия серий демонстрационные", font=cap, fill=(92, 90, 86))

    # TWO SHELVES
    y = 2088
    rule(d, m, y, W - m)
    y += 40
    left_w = 820
    right_x = m + left_w + 48
    right_w = W - m - right_x
    d.text((m, y), "PORTRAIT", font=F_serif(56), fill=BONE)
    d.text((right_x, y), "FASHION  /  BRAND", font=F_serif(56), fill=BONE)
    y += 78
    sub = F_sans(15)
    d.text((m, y), "Понятный вход в тот же взгляд", font=sub, fill=(196, 190, 180))
    d.text((right_x, y), "Полный кастом. Собирается заново.", font=sub, fill=(196, 190, 180))
    y += 36
    ph, fh = 520, 620
    img.paste(
        vignette_photo(cover(open_plate("plate-portrait-figure.png"), left_w, ph, (0.48, 0.32)), 0.12),
        (m, y),
    )
    img.paste(
        vignette_photo(cover(open_plate("plate-fashion-figure.png"), right_w, fh, (0.42, 0.38)), 0.12),
        (right_x, y),
    )
    d.text((m, y + ph + 16), "вход от  ·  после брифа", font=F_sans(13), fill=(168, 163, 154))
    d.text((m, y + ph + 38), "Меньше кастома. Тот же авторский свет.", font=F_sans(13), fill=(140, 136, 128))
    d.text((right_x, y + fh + 16), "Вторая глубина — не отдельный культ, а уровень сервиса", font=F_sans(13), fill=(168, 163, 154))

    # STUDIO insert
    y = 2920
    studio_h = 560
    studio = vignette_photo(cover(open_plate("plate-studio-beam.png"), W, studio_h, (0.62, 0.48)), 0.2)
    img.paste(studio, (0, y))
    draw_tracked(ImageDraw.Draw(img), (m, y + 36), "SCENE  /  STUDIO  /  AFTER HOURS", F_sans(11), MERCURY, 0.16)
    ImageDraw.Draw(img).text((m, y + studio_h - 72), "Пространство как сцена.", font=F_serif(40), fill=BONE)
    ImageDraw.Draw(img).text((m, y + studio_h - 28), "Дом бренда — своя студия. Город не главный.", font=F_sans(14), fill=(196, 190, 180))

    # NIGHT SCRIPT + CTA
    y = 3560
    rule(d, m, y, W - m)
    y += 48
    d.text((m, y), "Ночь по шагам", font=F_serif(44), fill=BONE)
    d.text((m + 520, y + 18), "не «наш процесс» — сценарий", font=F_sans(13), fill=(140, 136, 128))
    y += 88
    steps = [
        ("01", "Бриф об образе", "Короткий разговор. Что за ночь нужна и кому."),
        ("02", "Сцена и свет", "Собираем луч, а не декорацию."),
        ("03", "Съёмка", "Автор, команда, контролируемая тьма."),
        ("04", "Отбор и ретушь", "Кадры, которые можно сразу публиковать."),
    ]
    step_w = 400
    for i, (num, title, note) in enumerate(steps):
        sx = m + i * step_w
        d.text((sx, y), num, font=F_disp(28), fill=MERCURY)
        d.text((sx, y + 40), title, font=F_sans(16, medium=True), fill=BONE)
        d.text((sx, y + 68), note, font=F_sans(13), fill=(140, 136, 128))

    y = 3868
    ghost_button(d, (m, y), "Оставить заявку  →", F_sans(14, medium=True), filled=True)
    d.text((m + 250, y + 14), "Две полки: Portrait или более глубокий трек", font=F_sans(13), fill=(140, 136, 128))
    draw_footer(img, 3960, W, m)
    return img


def page_series_desktop() -> Image.Image:
    W, H = 1920, 1980
    img = canvas(W, H)
    d = ImageDraw.Draw(img)
    hh = draw_header(img, W, active="Серии")
    m = 56

    y = hh + 48
    draw_tracked(d, (m, y), "РЕДАКЦИЯ", F_sans(11), MERCURY, 0.18)
    y += 28
    d.text((m, y), "Выбранные ночи — не архив", font=F_serif(52), fill=BONE)
    y += 72
    note = F_sans(14)
    d.text((m, y), "1–3 законченные серии. Без фальшивого каталога и без громких имён.", font=note, fill=(168, 163, 154))

    y += 48
    left_w, left_h = 1100, 1240
    img.paste(
        vignette_photo(cover(open_plate("plate-hero-face.png"), left_w, left_h, (0.36, 0.48)), 0.16),
        (m, y),
    )
    od = ImageDraw.Draw(img)
    draw_tracked(od, (m + 36, y + left_h - 96), "SERIES 01", F_disp(56), BONE, 0.08)
    od.text((m + 40, y + left_h - 36), "Ртуть  ·  PORTRAIT", font=F_sans(13), fill=MERCURY)

    rx = m + left_w + 40
    rw = W - m - rx
    img.paste(
        vignette_photo(cover(open_plate("plate-fashion-figure.png"), rw, 580, (0.45, 0.36)), 0.14),
        (rx, y),
    )
    d.text((rx, y + 600), "SERIES 02", font=F_disp(22), fill=MERCURY)
    d.text((rx, y + 634), "После полуночи", font=F_serif(34), fill=BONE)
    d.text((rx, y + 680), "FASHION  ·  ткань, жест, луч", font=F_sans(13), fill=(140, 136, 128))

    img.paste(
        vignette_photo(cover(open_plate("plate-studio-beam.png"), rw, 360, (0.62, 0.5)), 0.18),
        (rx, y + 760),
    )
    d.text((rx, y + 1136), "SERIES 03", font=F_disp(22), fill=MERCURY)
    d.text((rx, y + 1170), "Чёрная коробка", font=F_serif(34), fill=BONE)
    d.text((rx, y + 1216), "Сцена как мир, не как циклорама", font=F_sans(13), fill=(140, 136, 128))

    d.text((m, 1928), "MOCK DATA — серии как визуальные placeholders, не портфолио фактов", font=F_sans(12), fill=(92, 90, 86))
    return img


def page_portrait_desktop() -> Image.Image:
    W, H = 1920, 1880
    img = canvas(W, H)
    d = ImageDraw.Draw(img)
    hh = draw_header(img, W, active="Вход")
    m = 56

    photo_w, photo_h = 980, 1880 - hh
    img.paste(
        vignette_photo(cover(open_plate("plate-portrait-figure.png"), photo_w, photo_h, (0.48, 0.36)), 0.2),
        (0, hh),
    )
    od = ImageDraw.Draw(img)
    draw_tracked(od, (48, hh + 64), "PORTRAIT", F_disp(86), BONE, 0.1)

    x = 1088
    y = hh + 88
    draw_tracked(d, (x, y), "ACCESSIBLE DOOR", F_sans(11), MERCURY, 0.18)
    y += 36
    d.text((x, y), "Тот же взгляд.", font=F_serif(52), fill=BONE)
    d.text((x, y + 64), "Меньше кастома.", font=F_serif(52), fill=BONE)
    y += 160
    body = F_sans(15)
    copy = (
        "Открытый вход в ту же авторскую ночь. "
        "Не пакет на час и не закрытый культ. "
        "Если нужен более глубокий трек — Fashion и Brand собираются заново."
    )
    y = draw_lines(d, (x, y), wrap(copy, body, W - m - x), body, (196, 190, 180), 26)
    y += 40
    steps = [
        ("01", "Бриф об образе"),
        ("02", "Сцена и свет"),
        ("03", "Съёмка"),
        ("04", "Отбор и ретушь"),
    ]
    for num, title in steps:
        rule(d, x, y, W - m, fill=RULE)
        d.text((x, y + 14), num, font=F_disp(18), fill=MERCURY)
        d.text((x + 64, y + 16), title, font=F_sans(16), fill=BONE)
        y += 52
    y += 20
    d.text((x, y), "вход от  ·  после брифа", font=F_sans(14), fill=(168, 163, 154))
    y += 22
    d.text((x, y), "Цена не витрина. Порядок входа — да.", font=F_sans(13), fill=(140, 136, 128))
    y += 40
    bw, _ = ghost_button(d, (x, y), "Заявка на Portrait  →", F_sans(14, medium=True), filled=True)
    d.text((x + bw + 20, y + 14), "Fashion / Brand — глубже", font=F_sans(13), fill=(140, 136, 128))
    return img


def page_brand_desktop() -> Image.Image:
    W, H = 1920, 2080
    img = canvas(W, H)
    d = ImageDraw.Draw(img)
    hh = draw_header(img, W, active="Brands")
    m = 56

    y = hh + 44
    draw_tracked(d, (m, y), "SECOND REEL", F_sans(11), MERCURY, 0.2)
    y += 26
    d.text((m, y), "Brand Night", font=F_serif(58), fill=BONE)
    d.text((m + 420, y + 22), "искусство с процессом", font=F_serif(28, italic=True), fill=(196, 190, 180))
    y += 88
    intro = (
        "Вторая лента сайта. Не вкладка услуг. "
        "Кампания и lookbook в той же ночи, но с дисциплиной: "
        "сроки, ответственность, понятный цикл."
    )
    y = draw_lines(d, (m, y), wrap(intro, F_sans(16), 1100), F_sans(16), (176, 171, 162), 26)

    y += 56
    img.paste(
        vignette_photo(cover(open_plate("plate-brand-production.png"), W - m * 2, 820, (0.48, 0.4)), 0.14),
        (m, y),
    )
    y += 856
    cols = [
        ("01  Процесс", "Бриф → сцена → свет → съёмка → отбор. Человеческий, не корпоративный."),
        ("02  Сроки", "Ночь назначается. Кадры не растворяются в «когда получится»."),
        ("03  Кто отвечает", "Авторский взгляд и команда. Не безымянный цех и не один человек с камерой."),
    ]
    cw = 560
    for i, (title, note) in enumerate(cols):
        cx = m + i * (cw + 28)
        rule(d, cx, y, cx + cw - 20, fill=RULE)
        d.text((cx, y + 18), title, font=F_sans(16, medium=True), fill=BONE)
        draw_lines(d, (cx, y + 52), wrap(note, F_sans(14), cw - 24), F_sans(14), (150, 146, 138), 22)

    y += 160
    ghost_button(d, (m, y), "Заявка для бренда  →", F_sans(14, medium=True), filled=True)
    d.text((m + 280, y + 14), "Форма глубже, чем Portrait  ·  MOCK", font=F_sans(13), fill=(140, 136, 128))
    return img


def page_apply_desktop() -> Image.Image:
    W, H = 1920, 1760
    img = canvas(W, H)
    d = ImageDraw.Draw(img)
    hh = draw_header(img, W, active="Заявка")
    m = 56

    img.paste(
        vignette_photo(cover(open_plate("plate-casting-seat.png"), 900, 1760 - hh, (0.5, 0.42)), 0.22),
        (0, hh),
    )
    od = ImageDraw.Draw(img)
    draw_tracked(od, (48, 1760 - 88), "CASTING", F_disp(64), BONE, 0.12)

    x = 1008
    y = hh + 72
    draw_tracked(d, (x, y), "ВХОД", F_sans(11), MERCURY, 0.2)
    y += 28
    d.text((x, y), "Короткий кастинг,", font=F_serif(46), fill=BONE)
    d.text((x, y + 58), "не форма из шаблона", font=F_serif(46), fill=BONE)
    y += 140
    d.text((x, y), "Portrait — мягче. Brand — глубже. Оба человеческие.", font=F_sans(14), fill=(168, 163, 154))
    y += 48

    fields = [
        ("Имя", "как к вам обращаться"),
        ("Контакт", "Telegram / почта — mock"),
        ("Какая ночь нужна", "Portrait  ·  Fashion  ·  Brand"),
        ("Образ или задача", "Два-три предложения"),
    ]
    fw = W - m - x
    for label, hint in fields:
        d.text((x, y), label, font=F_sans(12), fill=MERCURY)
        y += 28
        rule(d, x, y + 22, x + fw, fill=(70, 72, 68))
        if hint:
            d.text((x, y), hint, font=F_sans(15), fill=(88, 86, 82))
        y += 54

    y += 8
    modes = [("Portrait", True), ("Fashion", False), ("Brand", False)]
    mx = x
    for label, on in modes:
        f = F_sans(14, medium=on)
        d.text((mx, y), label, font=f, fill=BONE if on else (120, 116, 110))
        if on:
            rule(d, mx, y + 24, mx + f.getlength(label), fill=BONE)
        mx += 130

    y += 56
    ghost_button(d, (x, y), "Отправить заявку  →", F_sans(14, medium=True), filled=True)
    d.text((x + 250, y + 14), "или Telegram  ·  @arcana.night  ·  MOCK", font=F_sans(13), fill=(140, 136, 128))
    y += 64
    d.text((x, y), "Реальных контактов нет. Всё на этом экране — визуальный placeholder.", font=F_sans(12), fill=(92, 90, 86))
    return img


def page_studio_desktop() -> Image.Image:
    """Studio as inner page — space, not rental storefront."""
    W, H = 1920, 1680
    img = canvas(W, H)
    d = ImageDraw.Draw(img)
    hh = draw_header(img, W, active="Студия")
    m = 56
    img.paste(
        vignette_photo(cover(open_plate("plate-studio-beam.png"), W, 980, (0.58, 0.5)), 0.16),
        (0, hh),
    )
    od = ImageDraw.Draw(img)
    draw_tracked(od, (m, hh + 48), "BLACK BOX", F_sans(11), MERCURY, 0.2)
    od.text((m, hh + 80), "Студия как сцена", font=F_serif(52), fill=BONE)

    y = hh + 1020
    d.text((m, y), "Дом бренда.", font=F_serif(40), fill=BONE)
    copy = (
        "Своя ночная коробка: контролируемый свет, прибор, пыль луча. "
        "Съёмка может выходить в город, но характер держит сцена. "
        "Аренда для своих не вынесена на витрину."
    )
    draw_lines(d, (m, y + 64), wrap(copy, F_sans(16), 820), F_sans(16), (176, 171, 162), 26)
    d.text((m + 920, y + 8), "Свет — главный объект.", font=F_serif(28, italic=True), fill=(196, 190, 180))
    d.text((m + 920, y + 56), "Не фильтр. Не неон. Не декоративная тьма.", font=F_sans(15), fill=(140, 136, 128))
    return img


# ---------------------------------------------------------------------------
# Mobile pages (3× 390)
# ---------------------------------------------------------------------------

def mobile_header(img: Image.Image, width: int, active: str | None = None) -> int:
    d = ImageDraw.Draw(img)
    h = 120
    m = 48
    draw_tracked(d, (m, 40), "ARCANA", F_disp(34), BONE, 0.12)
    d.text((width - m - F_sans(18).getlength("Заявка"), 46), "Заявка", font=F_sans(18), fill=BONE)
    rule(d, 0, h - 1, width, fill=RULE)
    return h


def page_home_mobile() -> Image.Image:
    W, H = 1170, 4680
    img = canvas(W, H)
    d = ImageDraw.Draw(img)
    hh = mobile_header(img, W)
    m = 48

    ph = 1480
    img.paste(vignette_photo(cover(open_plate("plate-hero-face.png"), W, ph, (0.36, 0.46)), 0.2), (0, hh))
    od = ImageDraw.Draw(img)
    draw_tracked(od, (m, hh + ph - 140), "ARCANA", F_disp(86), BONE, 0.08)
    draw_tracked(od, (m, hh + ph - 48), "NIGHT STUDIO / AUTHORIAL", F_sans(14), MERCURY, 0.14)

    y = hh + ph + 64
    draw_tracked(d, (m, y), "CUT 01", F_sans(14), MERCURY, 0.18)
    y += 40
    head = F_serif(64)
    for line in ["Ночь как", "материал,", "не как фильтр"]:
        d.text((m, y), line, font=head, fill=BONE)
        y += 74
    y += 20
    copy = "Авторская ночная студия. Не прокат площадки и не универсальный цех."
    y = draw_lines(d, (m, y), wrap(copy, F_sans(22), W - m * 2), F_sans(22), (196, 190, 180), 34)
    y += 36
    ghost_button(d, (m, int(y)), "Оставить заявку  →", F_sans(18, medium=True), pad_x=28, pad_y=16, filled=True)
    y += 120

    rule(d, m, y, W - m)
    y += 72
    d.text((m, y), "Это не зал.", font=F_serif(44), fill=BONE)
    d.text((m, y + 56), "Это ночная студия.", font=F_serif(44), fill=BONE)
    y += 160

    draw_tracked(d, (m, y), "СЕРИИ  /  SELECTED NIGHTS", F_sans(14), MERCURY, 0.12)
    y += 36
    img.paste(cover(open_plate("plate-contact-sheet.png"), W - m * 2, 380, (0.5, 0.42)), (m, y))
    y += 420

    d.text((m, y), "PORTRAIT", font=F_serif(48), fill=BONE)
    y += 64
    d.text((m, y), "Понятный вход в тот же взгляд", font=F_sans(20), fill=(176, 171, 162))
    y += 40
    img.paste(cover(open_plate("plate-portrait-figure.png"), W - m * 2, 620, (0.48, 0.36)), (m, y))
    y += 660
    d.text((m, y), "FASHION / BRAND", font=F_serif(48), fill=BONE)
    y += 64
    img.paste(cover(open_plate("plate-fashion-figure.png"), W - m * 2, 720, (0.42, 0.36)), (m, y))
    y += 780

    img.paste(cover(open_plate("plate-studio-beam.png"), W, 520, (0.6, 0.5)), (0, y))
    ImageDraw.Draw(img).text((m, y + 28), "STUDIO / AFTER HOURS", font=F_sans(14), fill=MERCURY)
    y += 560

    d.text((m, y), "Ночь по шагам", font=F_serif(44), fill=BONE)
    y += 70
    for num, title in [("01", "Бриф об образе"), ("02", "Сцена и свет"), ("03", "Съёмка"), ("04", "Отбор и ретушь")]:
        d.text((m, y), num, font=F_disp(24), fill=MERCURY)
        d.text((m + 80, y + 4), title, font=F_sans(22), fill=BONE)
        y += 56
    y += 20
    ghost_button(d, (m, y), "Оставить заявку  →", F_sans(18, medium=True), pad_x=28, pad_y=16, filled=True)
    y += 100
    d.text((m, y), "MOCK DATA  ·  Telegram не зафиксирован", font=F_sans(16), fill=(92, 90, 86))
    return img


def page_series_mobile() -> Image.Image:
    W, H = 1170, 3200
    img = canvas(W, H)
    d = ImageDraw.Draw(img)
    hh = mobile_header(img, W, "Серии")
    m = 48
    y = hh + 48
    d.text((m, y), "Выбранные ночи —", font=F_serif(48), fill=BONE)
    d.text((m, y + 58), "не архив", font=F_serif(48), fill=BONE)
    y += 150
    img.paste(cover(open_plate("plate-hero-face.png"), W - m * 2, 920, (0.36, 0.48)), (m, y))
    ImageDraw.Draw(img).text((m + 24, y + 860), "SERIES 01  ·  Ртуть", font=F_disp(28), fill=BONE)
    y += 980
    img.paste(cover(open_plate("plate-fashion-figure.png"), W - m * 2, 640, (0.42, 0.36)), (m, y))
    d.text((m, y + 664), "SERIES 02  ·  После полуночи", font=F_serif(28), fill=BONE)
    y += 740
    img.paste(cover(open_plate("plate-studio-beam.png"), W - m * 2, 420, (0.6, 0.5)), (m, y))
    d.text((m, y + 444), "SERIES 03  ·  Чёрная коробка", font=F_serif(28), fill=BONE)
    return img


def page_portrait_mobile() -> Image.Image:
    W, H = 1170, 2520
    img = canvas(W, H)
    d = ImageDraw.Draw(img)
    hh = mobile_header(img, W, "Вход")
    m = 48
    img.paste(cover(open_plate("plate-portrait-figure.png"), W, 1100, (0.48, 0.34)), (0, hh))
    ImageDraw.Draw(img).text((m, hh + 40), "PORTRAIT", font=F_disp(56), fill=BONE)
    y = hh + 1160
    d.text((m, y), "Тот же взгляд.", font=F_serif(48), fill=BONE)
    d.text((m, y + 58), "Меньше кастома.", font=F_serif(48), fill=BONE)
    y += 150
    copy = "Открытый вход в ту же авторскую ночь. Не пакет и не закрытый культ."
    y = draw_lines(d, (m, y), wrap(copy, F_sans(22), W - m * 2), F_sans(22), (196, 190, 180), 34)
    y += 36
    for num, title in [("01", "Бриф об образе"), ("02", "Сцена и свет"), ("03", "Съёмка"), ("04", "Отбор и ретушь")]:
        rule(d, m, y, W - m, fill=RULE)
        d.text((m, y + 18), f"{num}   {title}", font=F_sans(22), fill=BONE)
        y += 64
    y += 20
    d.text((m, y), "вход от  ·  после брифа", font=F_sans(18), fill=(168, 163, 154))
    y += 48
    ghost_button(d, (m, y), "Заявка на Portrait  →", F_sans(18, medium=True), pad_x=28, pad_y=16, filled=True)
    return img


def page_brand_mobile() -> Image.Image:
    W, H = 1170, 2680
    img = canvas(W, H)
    d = ImageDraw.Draw(img)
    hh = mobile_header(img, W, "Brands")
    m = 48
    y = hh + 48
    draw_tracked(d, (m, y), "SECOND REEL", F_sans(14), MERCURY, 0.16)
    y += 36
    d.text((m, y), "Brand Night", font=F_serif(56), fill=BONE)
    y += 80
    y = draw_lines(
        d,
        (m, y),
        wrap("Искусство с процессом. Сроки, ответственность, та же ночь.", F_sans(22), W - m * 2),
        F_sans(22),
        (176, 171, 162),
        34,
    )
    y += 36
    img.paste(cover(open_plate("plate-brand-production.png"), W - m * 2, 820, (0.48, 0.4)), (m, y))
    y += 860
    for title, note in [
        ("01  Процесс", "Бриф → сцена → свет → съёмка → отбор."),
        ("02  Сроки", "Ночь назначается."),
        ("03  Кто отвечает", "Автор и команда, не безымянный цех."),
    ]:
        d.text((m, y), title, font=F_sans(22, medium=True), fill=BONE)
        d.text((m, y + 36), note, font=F_sans(18), fill=(140, 136, 128))
        y += 96
    ghost_button(d, (m, y), "Заявка для бренда  →", F_sans(18, medium=True), pad_x=28, pad_y=16, filled=True)
    return img


def page_apply_mobile() -> Image.Image:
    W, H = 1170, 2200
    img = canvas(W, H)
    d = ImageDraw.Draw(img)
    hh = mobile_header(img, W, "Заявка")
    m = 48
    img.paste(cover(open_plate("plate-casting-seat.png"), W, 720, (0.5, 0.45)), (0, hh))
    y = hh + 760
    d.text((m, y), "Короткий кастинг,", font=F_serif(44), fill=BONE)
    d.text((m, y + 56), "не форма", font=F_serif(44), fill=BONE)
    y += 150
    for label, hint in [
        ("Имя", "как к вам обращаться"),
        ("Контакт", "Telegram / почта — mock"),
        ("Какая ночь", "Portrait  ·  Fashion  ·  Brand"),
        ("Образ или задача", "Два-три предложения"),
    ]:
        d.text((m, y), label, font=F_sans(16), fill=MERCURY)
        y += 34
        rule(d, m, y + 28, W - m, fill=(70, 72, 68))
        if hint:
            d.text((m, y), hint, font=F_sans(20), fill=(88, 86, 82))
        y += 64
    ghost_button(d, (m, y), "Отправить заявку  →", F_sans(18, medium=True), pad_x=28, pad_y=16, filled=True)
    y += 80
    d.text((m, y), "MOCK  ·  @arcana.night  ·  контакты не реальные", font=F_sans(16), fill=(92, 90, 86))
    return img


def first_screen(img: Image.Image, path: Path) -> None:
    crop = img.crop((0, 0, img.width, min(img.height, int(img.width * 9 / 16))))
    save(crop, path)


def main() -> None:
    OUT_DESK.mkdir(parents=True, exist_ok=True)
    OUT_MOB.mkdir(parents=True, exist_ok=True)
    ARTIFACTS.mkdir(parents=True, exist_ok=True)

    pages = {
        "desktop/01-home.png": page_home_desktop,
        "desktop/02-series.png": page_series_desktop,
        "desktop/03-portrait.png": page_portrait_desktop,
        "desktop/04-brand-night.png": page_brand_desktop,
        "desktop/05-apply.png": page_apply_desktop,
        "desktop/06-studio.png": page_studio_desktop,
        "mobile/01-home.png": page_home_mobile,
        "mobile/02-series.png": page_series_mobile,
        "mobile/03-portrait.png": page_portrait_mobile,
        "mobile/04-brand-night.png": page_brand_mobile,
        "mobile/05-apply.png": page_apply_mobile,
    }
    rendered: dict[str, Image.Image] = {}
    for rel, fn in pages.items():
        print("compose", rel)
        im = fn()
        rendered[rel] = im
        save(im, Path(rel))

    first_screen(rendered["desktop/01-home.png"], Path("desktop/01-home-hero-1920x1080.png"))
    first_screen(rendered["desktop/02-series.png"], Path("desktop/02-series-hero-1920x1080.png"))
    first_screen(rendered["desktop/03-portrait.png"], Path("desktop/03-portrait-hero-1920x1080.png"))
    first_screen(rendered["desktop/05-apply.png"], Path("desktop/05-apply-hero-1920x1080.png"))
    print("done")


if __name__ == "__main__":
    main()
