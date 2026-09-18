---
component: Section20Section
target: src/components/Section20Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-20-pc.png
interaction_model: static
states: default
assets: public/images/cta-couple-phone.DDfwRSnv_Z1Q42Ao.avif
responsive: phone, ipad, pc
tier: light
---

# Section20Section Specification

## DOM Structure
- img.absolute.inset-0 [1152×1152]

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<img src="/_astro/cta-couple-phone.DDfwRSnv_Z1Q42Ao.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/cta-couple-phone.DDfwRSnv_ZFouwm.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 480w, /_astro/cta-couple-phone.DDfwRSnv_ZwXIT7.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 768w, /_astro/cta-couple-phone.DDfwRSnv_ESnGA.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1152w, /_astro/cta-couple-phone.DDfwRSnv_Z1Q42Ao.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 2000w" alt="Smiling woman in an orange knit sweater and clear-framed glasses, reading captions on her phone." loading="lazy" decoding="async" sizes="(min-width: 2000px) 2000px, 100vw" data-astro-image="constrained" data-astro-image-fit="cover" data-astro-image-pos="center" width="2000" height="2000" class="absolute inset-0 size-full object-cover">
```

## Computed Styles
- **img.absolute.inset-0** [1152×1152]: max-w 100%; absolute
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- img cta-couple-phone.DDfwRSnv_Z1Q42Ao.avif (1440×1440) alt "Smiling woman in an orange knit sweater…" → public/images/cta-couple-phone.DDfwRSnv_Z1Q42Ao.avif

## Text Content
None — no text nodes in this section.

## Responsive Behavior
- phone 390: section 350×350px; body 15.0619px
- ipad 768: section 685×685px; body 15.3994px
- pc 1440: section 1152×1152px; body 15.9995px
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-section-20.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
