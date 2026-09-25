# ARCANA — Night Folio / Cut

Visual concept mockups. Not a website. Not production code.

**Primary direction:** Night Folio  
**Secondary:** Nocturne Cut  
**Rejected as system:** The Apparatus

Name **ARCANA** is real. Everything else on the mockups is **MOCK DATA**: series titles, Telegram handle, form values, “вход от · после брифа”. No invented clients, awards, addresses, or numbers presented as fact.

## Design DNA used

- Page is a scene, not a frame around a portfolio
- Light is the object
- Magazine spread + film title cut into the beam
- Contact strip as an organ, not an Instagram grid
- Two shelves: Portrait (accessible same gaze) / Fashion·Brand (deeper)
- Russian carries meaning; English is marks (`FOLIO 01`, `CUT 01`, `SECOND REEL`)
- Tar / bone / mercury / night-film green
- Ritual without symbols

## Pages

| File | Role |
|---|---|
| `desktop/01-home.png` | Full homepage. Rhythm: impact → pause → series → shelves → studio → script → convert |
| `desktop/01-home-hero-1920x1080.png` | First screen only |
| `desktop/02-series.png` | Editorial index of 1–3 nights |
| `desktop/03-portrait.png` | Accessible door |
| `desktop/04-brand-night.png` | Second reel: process, time, responsibility |
| `desktop/05-apply.png` | Casting, not a template form |
| `desktop/06-studio.png` | Black box as home of the brand |
| `mobile/*.png` | Same pages at 1170px (3× 390) |

## Type

- Wordmark / titles: Barlow Condensed
- Headlines: Cormorant Garamond
- UI / body: Onest (Cyrillic)

## How these were made

Photographic plates were generated as image-only stills. Typography and UI were composed in `scripts/compose-arcana-mockups.py` so letters stay real.

To rebuild:

```bash
pip install pillow fonttools numpy
python3 scripts/compose-arcana-mockups.py
```
