---
component: Section8Section
target: src/components/Section8Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-8-pc.png
interaction_model: static
states: default
assets: none
responsive: phone, ipad, pc
tier: light
---

# Section8Section Specification

## DOM Structure
- h2.text-display.text-trim [1220×253] — "Professionally recommended. Personally loved."

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<h2 class="text-display text-trim mb-section-sm max-w-[20ch] text-balance">
Professionally recommended. Personally loved.
</h2>
```

## Computed Styles
- **h2.text-display.text-trim ("Professionally recomm…")** [1220×253]: 96px/600/91.2px -3.84px rgb(250, 245, 242); mb 105.135px; max-w 1220px
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
- h2: "Professionally recommended. Personally loved."

## Responsive Behavior
- phone 390: section 350×115px; body 43.5px
- ipad 768: section 685×165px; body 62.4px
- pc 1440: section 1220×253px; body 96px
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-section-8.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
