---
component: Section26Section
target: src/components/Section26Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-26-pc.png
interaction_model: static
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
tier: light
---

# Section26Section Specification

## DOM Structure
- a.bg-ink-fixed.text-card-fixed > svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString] [21×22]

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<a data-cookie-settings="" href="/legal/privacy#cookies-and-other-information-collected-by-automated-means" aria-label="Cookie preferences" class="bg-ink-fixed text-card-fixed focus-visible:ring-ink/40 fixed bottom-[19px] left-5 z-40 inline-flex size-13 items-center justify-center toc-scrub:translate-y-[200%] ease-cubic-default rounded-full transition-[opacity,translate] [transition-duration:200ms,1000ms] hover:opacity-70 focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none [.show--consent_&amp;]:hidden [.show--preferences_&amp;]:hidden"> <!-- 32px box, not 24: the artwork carries ~34% padding inside its 29×28
       viewBox, so this is what puts the glyph at the launcher icon's 21px. --> <svg viewBox="0 0 29 28" fill="none" class="size-8 shrink-0" aria-hidden="true">
  <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="…"></path>
</svg> </a>
```

## Computed Styles
- **a.bg-ink-fixed.text-card-fixed** [52×52]: bg rgb(25, 20, 18); radius 3.35544e+07px; flex row justify center items center; fixed z40 top 829px bottom 19px
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- inline SVG ×1 — use/extend components in src/components/icons.tsx

## Text Content
None — no text nodes in this section.

## Responsive Behavior
- phone 390: section 52×52px; body 15.0619px
- ipad 768: section 52×52px; body 15.3994px
- pc 1440: section 52×52px; body 15.9995px
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-section-26.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
