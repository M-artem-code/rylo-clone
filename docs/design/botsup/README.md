# BotSup — Electric Chlorophyll Pulse

Визуальная концепция многостраничного лендинга. **Только PNG-макеты**, без вёрстки сайта.

## Бренд

**BotSup** — AI WhatsApp-бот, который сам продаёт, записывает и отвечает.

Оригинальный знак: стеклянная хлорофилльная капля с кольцом `online`. Не чужой логотип.

## Система

| Роль | Значение |
|---|---|
| Фарфор | `#FAFDF8` |
| Молоко | `#F4F8EE` |
| Фисташка | `#D6F5C4` |
| Chlorophyll | `#B6FF00` |
| Pulse | `#7CFF2A` |
| Чернила леса | `#0C1F12` |
| Display | Unbounded Black |
| UI | Geologica Sharp |
| Body | Onest |

Белый = ясный диалог. Ядовитый лайм = WhatsApp, online, деньги, ответ сразу.

## Макеты (`mockups/`)

| Файл | Экран |
|---|---|
| `00-identity-styleboard.png` | Фирменная система |
| `00-identity-logo.png` | Локкап логотипа |
| `01-home-hero.png` | Главная, первый экран |
| `01-home-page.png` | Главная целиком |
| `02-platform.png` | `/platform` |
| `03-solutions.png` | `/solutions` |
| `04-cases.png` | `/cases` |
| `05-pricing.png` | `/pricing` |
| `06-launch.png` | `/launch` |
| `07-mobile-home.png` | Главная, mobile |
| `08-mobile-launch.png` | Запуск, mobile |
| `09-mobile-pricing.png` | Тарифы, mobile |
| `10-campaign-night-burst.png` | Кампания «ночной всплеск» |

3D-кадры и исходные арт-референсы — в `raw/`.

Пересобрать набор: `python3 render_mockups.py` (нужны Pillow, numpy, fonttools).
