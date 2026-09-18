---
component: Section12Section
target: src/components/Section12Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-12-pc.png
interaction_model: static
states: default
assets: public/images/prod-cta-background.CQJ-AY5P_Z17gijI.avif
responsive: phone, ipad, pc
tier: light
---

# Section12Section Specification

## DOM Structure
- img.pointer-events-none.absolute [1440×1725]

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<img src="/_astro/prod-cta-background.CQJ-AY5P_Z2uXlWw.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/prod-cta-background.CQJ-AY5P_ZswKsF.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 640w, /_astro/prod-cta-background.CQJ-AY5P_1ppbc0.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 750w, /_astro/prod-cta-background.CQJ-AY5P_1mVNph.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 828w, /_astro/prod-cta-background.CQJ-AY5P_afMeR.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1080w, /_astro/prod-cta-background.CQJ-AY5P_Z2vV2Kz.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1280w, /_astro/prod-cta-background.CQJ-AY5P_Z17gijI.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1668w, /_astro/prod-cta-background.CQJ-AY5P_Z2qQ7oN.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 2048w" alt="" aria-hidden="true" loading="eager" fetchpriority="low" decoding="async" sizes="100vw" data-astro-image="full-width" data-astro-image-fit="cover" data-astro-image-pos="center" width="2500" height="2516" class="pointer-events-none absolute z-0 w-full object-cover inset-x-0 bottom-0 min-h-full">
```

## Computed Styles
- **img.pointer-events-none.absolute** [1440×1725]: max-w 100%; absolute z0
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- img prod-cta-background.CQJ-AY5P_Z17gijI.avif (1440×1449) → public/images/prod-cta-background.CQJ-AY5P_Z17gijI.avif

## Text Content
None — no text nodes in this section.

## Responsive Behavior
- phone 390: section 390×750px; body 15.0619px
- ipad 768: section 768×1075px; body 15.3994px
- pc 1440: section 1440×1725px; body 15.9995px
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-section-12.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
