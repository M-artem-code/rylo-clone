---
component: Section7Section
target: src/components/Section7Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-7-pc.png
interaction_model: static
states: default
assets: none
responsive: phone, ipad, pc
tier: light
---

# Section7Section Specification

## DOM Structure
- div.pointer-events-none.absolute [1440×2228]

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<div aria-hidden="true" data-section-parallax-overlay="" class="pointer-events-none absolute inset-0 z-10 bg-black opacity-0" style="will-change: opacity; opacity: 0;"></div>
```

## Computed Styles
- **div.pointer-events-none.absolute** [1440×2228]: bg rgb(0, 0, 0); absolute z10; opacity 0
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
None — no text nodes in this section.

## Responsive Behavior
- phone 390: section 390×2527px; body 15.0619px
- ipad 768: section 768×2582px; body 15.3994px
- pc 1440: section 1440×2228px; body 15.9995px
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-section-7.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
