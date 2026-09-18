# Rylo.com Landing Page Topology & Behaviors

## Page Topology (Route: `/`)

| Order | Section Name | Selector | Type / Interaction Model | Description |
|---|---|---|---|---|
| 0 | `header` | `header.pointer-events-none` | Floating / Sticky (`z-50`) | Floating navbar with backdrop-blur pill, logo, navigation links, and "Download" CTA button. On mobile (<1024px), hamburger button. |
| 1 | `hero` | `section#captioning` | Scroll parallax / animated SVG | Dark hero with background image, curved speech-bubble path with animated bubbles, headline, rating/certifications, CTA, and phone screenshot portrait. |
| 2 | `seen-on` | `main#main > section:nth-of-type(2)` | Static / Logo marquee | "Seen on" press logos (Forbes, Comcast, WSJ, Hearing Review, Yahoo Finance) + mission statement "Communication without confusion" with cards. |
| 3 | `call-with-clarity` | `main#main > section:nth-of-type(3)` | Tabbed / Click-driven / Grid | "Call with clarity" headline, interactive feature demo tab showing real-time captions on a phone mockup, followed by 6 feature cards grid with icons. |
| 4 | `testimonials` | `main#main > section:nth-of-type(4)` | Scroll carousel / reviews | "Professionally recommended. Personally loved." section with featured testimonial card and user reviews. |
| 5 | `live-transcribe` | `main#main > section:nth-of-type(5)` | Media showcase | "Live Transcribe" feature demonstration with background video/sky poster, floating transcription bubbles, and feature highlights. |
| 6 | `conversations` | `main#main > section:nth-of-type(6)` | Card grid / Blog preview | "Conversations" section with 3 article cards from the community blog. |
| 7 | `start-captioning` | `main#main > section:nth-of-type(7)` | CTA banner | Large conversion CTA section with background image ("Start captioning") and download action. |
| 8 | `faqs` | `main#main > section:nth-of-type(8)` | Accordion / Click-driven | Collapsible FAQ items answering common questions about Rylo. |
| 9 | `footer` | `footer.-mt-band-overlap` | Navigation / Links | Multi-column footer with links, large Rylo logo branding, copyright, and social icons. |

## Interactive Behaviors

- **Sticky Navigation:** Header floats over page content at top with rounded container, frosted background (`backdrop-blur-lg bg-ink/5`), transitions on scroll.
- **Rolling Label Buttons:** Primary CTA buttons feature a rolling character slide transition on hover (`group-hover:-translate-y-full`).
- **Feature Tabs:** Interactive tabs in `call-with-clarity` allow toggling between call captioning features.
- **FAQ Accordion:** Click on FAQ header expands/collapses answer content.
