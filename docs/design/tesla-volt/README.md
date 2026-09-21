# Tesla Volt — visual design concept

PNG mockups for a premium multi-page landing. **No website code** — layout, type, and photography only.

Brand mark is original (sun arc + voltage bar). It does **not** use the Tesla Inc. emblem or visual system.

## Screens

| File | Section |
|---|---|
| `screens/00-brand.png` | Identity board |
| `screens/01-hero.png` | Hero |
| `screens/02-solutions.png` | Решения Tesla Volt |
| `screens/03-numbers.png` | Энергия в цифрах |
| `screens/04-system.png` | Как работает система |
| `screens/05-smarthome.png` | Умный дом |
| `screens/06-projects.png` | Реализованные проекты |
| `screens/07-why.png` | Почему Tesla Volt |
| `screens/08-process.png` | Процесс работы |
| `screens/09-cta.png` | Финальный CTA |
| `screens/10-contacts.png` | Контакты |
| `screens/11-hero-mobile.png` | Hero, mobile frame |
| `screens/12-contacts-mobile.png` | Contacts, mobile frame |

All desktop frames are 1920×1080.

## Visual system

- Graphite / black surfaces, white type, solar-gold accent `#E6C34A`
- Unbounded for display, Inter for UI
- Glass panels, hairline borders, wide margins
- Evening architecture + solar + storage + quiet automation
- Numbers on screen 03 are conceptual, not claimed metrics

The approved boards are implemented in the Next.js app:

- `/` full landing (all sections)
- `/solutions` `/system` `/projects` `/process` `/contacts`

Regenerate mockups: `python3 docs/design/tesla-volt/render_mockups.py`  
Unbounded is SIL Open Font License.
