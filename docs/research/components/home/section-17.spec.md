---
component: Section17Section
target: src/components/Section17Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-17-pc.png
interaction_model: static
states: default
assets: public/images/cta-background.qn7Z5g_h_LDU9H.avif
responsive: phone, ipad, pc
tier: light
---

# Section17Section Specification

## DOM Structure
- img.pointer-events-none.absolute [1440×1820]

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<img src="/_astro/cta-background.qn7Z5g_h_UsGtW.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/cta-background.qn7Z5g_h_Drr1z.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 640w, /_astro/cta-background.qn7Z5g_h_Z14sKSO.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 750w, /_astro/cta-background.qn7Z5g_h_1CmOCe.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 828w, /_astro/cta-background.qn7Z5g_h_ZmWgk0.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1080w, /_astro/cta-background.qn7Z5g_h_25fmPV.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1280w, /_astro/cta-background.qn7Z5g_h_LDU9H.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1668w, /_astro/cta-background.qn7Z5g_h_1liQto.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 2048w" alt="" aria-hidden="true" loading="eager" fetchpriority="low" decoding="async" sizes="100vw" data-astro-image="full-width" data-astro-image-fit="cover" data-astro-image-pos="center" width="2500" height="3159" class="pointer-events-none absolute z-0 w-full object-cover inset-x-0 bottom-0 min-h-full">
```

## Computed Styles
- **img.pointer-events-none.absolute** [1440×1820]: max-w 100%; absolute z0 top -137.016px
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- img cta-background.qn7Z5g_h_LDU9H.avif (1440×1819) → public/images/cta-background.qn7Z5g_h_LDU9H.avif

## Text Content
None — no text nodes in this section.

## Responsive Behavior
- phone 390: section 390×726px; body 15.0619px
- ipad 768: section 768×1085px; body 15.3994px
- pc 1440: section 1440×1820px; body 15.9995px
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-section-17.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
