---
component: Section25Section
target: src/components/Section25Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-25-pc.png
interaction_model: static
states: default
assets: none
responsive: phone, ipad, pc
tier: light
---

# Section25Section Specification

## DOM Structure
- div.bg-footer-dim.pointer-events-none [1440×1599]

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<div aria-hidden="true" data-footer-parallax-dark="" class="bg-footer-dim pointer-events-none absolute inset-0 opacity-0" style="will-change: opacity; opacity: 0.5;"></div>
```

## Computed Styles
- **div.bg-footer-dim.pointer-events-none** [1440×1599]: bg rgb(32, 29, 29); absolute; opacity 0.5
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
- phone 390: section 390×1620px; body 15.0619px
- ipad 768: section 768×1279px; body 15.3994px
- pc 1440: section 1440×1599px; body 15.9995px
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-section-25.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
