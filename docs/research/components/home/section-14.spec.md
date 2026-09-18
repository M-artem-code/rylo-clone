---
component: Section14Section
target: src/components/Section14Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-14-pc.png
interaction_model: static
states: default
assets: public/images/prod-cta-foreground.DqiXt8Fm_Z4hWeD.avif
responsive: phone, ipad, pc
tier: light
---

# Section14Section Specification

## DOM Structure
- img.absolute.inset-0 [1200×1200]

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<img src="/_astro/prod-cta-foreground.DqiXt8Fm_Z4hWeD.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/prod-cta-foreground.DqiXt8Fm_Zt41gK.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 480w, /_astro/prod-cta-foreground.DqiXt8Fm_2cB2Le.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 768w, /_astro/prod-cta-foreground.DqiXt8Fm_ZwbrK0.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1200w, /_astro/prod-cta-foreground.DqiXt8Fm_Z4hWeD.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1920w" alt="Middle-aged man in orange sweater shows a smartphone to a woman in a cream sweater and jeans as they engage in conversation." loading="lazy" decoding="async" sizes="(min-width: 1920px) 1920px, 100vw" data-astro-image="constrained" data-astro-image-fit="cover" data-astro-image-pos="center" width="1920" height="1920" class="absolute inset-0 size-full object-cover">
```

## Computed Styles
- **img.absolute.inset-0** [1200×1200]: max-w 100%; absolute
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- img prod-cta-foreground.DqiXt8Fm_Z4hWeD.avif (1440×1440) alt "Middle-aged man in orange sweater shows…" → public/images/prod-cta-foreground.DqiXt8Fm_Z4hWeD.avif

## Text Content
None — no text nodes in this section.

## Responsive Behavior
- phone 390: section 350×350px; body 15.0619px
- ipad 768: section 685×685px; body 15.3994px
- pc 1440: section 1200×1200px; body 15.9995px
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-section-14.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
