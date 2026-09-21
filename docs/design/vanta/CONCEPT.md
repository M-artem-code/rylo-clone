# VANTA — Visual Design Concept

Premium architectural lighting brand. **Mockups only** — no website implementation.

VANTA does not sell lamps. It composes atmosphere.

> VANTA does not illuminate a space. VANTA creates its mood.

## Brand system

- **Wordmark:** VANTA — high-contrast modern Didot (Bodoni Moda), wide tracking
- **Mark:** a vertical amber aperture cut through a graphite plate
- **Palette:** Void black, anthracite, graphite, milk-white, restrained amber gold, electric white
- **Type:** Gloock + Instrument Serif + Italiana for display; Instrument Sans for UI; IBM Plex Mono for technical labels
- **Materials:** blackened steel, smoked glass, brushed bronze, honed travertine

Not a lamp shop. Not cyberpunk. A quiet international lighting / architecture studio.

## Information architecture

A multi-page site: products, realized architecture, a configurator, engineering, and a design service cannot live on one scroll without collapsing into a catalog.

| Route | Purpose | Primary CTA |
|---|---|---|
| `/` | Sell the philosophy of light | Explore VANTA / Design your lighting |
| `/collection` | Five lighting languages | Explore collection |
| `/collection/void/void-01` | One object as industrial design | Configure this product |
| `/projects` | Visual-first architecture index | View project |
| `/projects/atelier-noir` | Full lighting case study | Start a project |
| `/studio` | Visual lighting configurator | Create your lighting concept |
| `/technology` | Engineering behind the atmosphere | Explore technology |
| `/services` | Turnkey lighting design process | Start a project |
| `/journal` | Digital architecture magazine | Read article |
| `/journal/when-light-becomes-structure` | Long-form essay | Start a project |
| `/contact` | Private studio invitation | Start your project |

Each route has its own drama. None is a recycled hero + cards block.

## Collections

| Language | Character |
|---|---|
| **LINE** | Linear systems. Architecture as a continuous slit of light. |
| **VOID** | A ring that disappears. Only the aperture remains. |
| **ARC** | A bronze gesture. Light as a single curved line. |
| **LUMEN** | A glass column. Electric white held in smoke. |
| **FORMA** | Stone geometry. A triangular slit of amber. |

## Mockup index

Desktop viewports are 1920×1080. Long editorial pages are 1440× ~2400. Mobile is 390×844.

1. `mockups/00-brand-system.png` — identity board
2. `mockups/01-home-hero.png` — cinematic first screen
3. `mockups/02-home-atmosphere.png` — philosophy, scenes, objects, project, studio preview
4. `mockups/03-collection.png` — editorial collection
5. `mockups/04-product-void-01.png` — VOID 01 product object
6. `mockups/05-projects.png` — architecture index
7. `mockups/06-project-atelier-noir.png` — Kyoto hotel case
8. `mockups/07-light-studio.png` — configurator
9. `mockups/08-technology.png` — source → optics → atmosphere
10. `mockups/09-services.png` — 01–07 design process
11. `mockups/10-journal.png` — magazine index
12. `mockups/11-journal-article.png` — essay
13. `mockups/12-contact.png` — studio invitation
14. `mockups/13-home-mobile.png` — home on phone

Regenerate: `python3 docs/design/vanta/compose_mockups.py`

Display fonts are OFL (Google Fonts) and live in `fonts/`. Photographic plates in `plates/` are original concept imagery, not existing brand assets.
