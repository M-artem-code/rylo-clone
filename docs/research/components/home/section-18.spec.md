---
component: Section18Section
target: src/components/Section18Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-18-pc.png
interaction_model: static
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
---

# Section18Section Specification

## DOM Structure
- div.pointer-events-none.absolute [1440×504]
  - svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString] [1929×516]
  - ×2 div.text-ink.border-ink/10 [250×65]
    - svg.[object.SVGAnimatedString]
      - ×5 ellipse.[object.SVGAnimatedString]
    - span — "Hi, love! How are you?"

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<div aria-hidden="true" data-path-draw="true" class="pointer-events-none absolute inset-x-0 z-1 bottom-[30%]" data-astro-cid-r32rvswh="">  <svg viewBox="0 0 1440 504" preserveAspectRatio="none" fill="none" class="aspect-1440/504 w-full">
  <path data-path-line="" data-path-lead="180" d="…" stroke="color-mix(in srgb, var(--marketing-light) 15%, transparent)" stroke-width="4" vector-effect="non-scaling-stroke" style="stroke-dashoffset: -179.995; stroke-dasharray: 1978.69px, 180.105px;"></path>
</svg> <div data-path-bubble="" class="text-ink border-ink/10 rounded-small md:rounded-regular gap-xs px-sm py-xs md:px-md md:py-sm lg:px-lg lg:py-md absolute flex -translate-x-1/2 -translate-y-1/2 items-center border-2 bg-white/5 text-small font-semibold whitespace-nowrap backdrop-blur-[20px] top-[83.2%] left-[16.2%]" data-astro-cid-muobrt2o="" style="translate: none; rotate: none; scale: none; transform-origin: 50% 50%; transform: translate3d(197.715px, -37.8453px, 0px) rotate(0.01deg); opacity: 1; visibility: inherit;"> <svg viewBox="0 0 40 29" fill="currentColor" class="text-accent aspect-40/29 w-2xl shrink-0" aria-hidden="true" data-astro-cid-muobrt2o="true">
  <ellipse cx="3.6" cy="14.4" rx="3.6" ry="5.6"></ellipse>
  <ellipse cx="11.6" cy="14.4" rx="3.6" ry="8"></ellipse>
  <ellipse cx="19.6" cy="14.4" rx="3.6" ry="14.4"></ellipse>
  <ellipse cx="27.6" cy="14.4" rx="3.6" ry="8.8"></ellipse>
  <ellipse cx="35.6" cy="14.4" rx="3.6" ry="9.6"></ellipse>
</svg> <span data-astro-cid-muobrt2o="">Hi, love! How are you?</span> </div> <div data-path-bubble="" class="text-ink border-ink/10 rounded-small md:rounded-regular gap-xs px-sm py-xs md:px-md md:py-sm lg:px-lg lg:py-md absolute flex -translate-x-1/2 -translate-y-1/2 items-center border-2 bg-white/5 text-small font-semibold whitespace-nowrap backdrop-blur-[20px] top-[45.9%] left-[83.5%]" data-astro-cid-muobrt2o="" style="translate: none; rotate: none; scale: none; transform-origin: 50% 50%; transform: translate3d(160.124px, -258.6px, 0px) rotate(0.01deg); opacity: 0; visibility: hidden;"> <svg viewBox="0 0 40 29" fill="currentColor" class="text-accent aspect-40/29 w-2xl shrink-0" aria-hidden="true" data-astro-cid-muobrt2o="true">
  <ellipse cx="3.6" cy="14.4" rx="3.6" ry="5.6"></ellipse>
  <ellipse cx="11.6" cy="14.4" rx="3.6" ry="8"></ellipse>
  <ellipse cx="19.6" cy="14.4" rx="3.6" ry="14.4"></ellipse>
  <ellipse cx="27.6" cy="14.4" rx="3.6" ry="8.8"></ellipse>
  <ellipse cx="35.6" cy="14.4" rx="3.6" ry="9.6"></ellipse>
</svg> <span data-astro-cid-muobrt2o="">It’s so wonderful to talk</span> </div>  </div>
```

## Computed Styles
- **div.pointer-events-none.absolute** [1440×504]: absolute z1 top 673.984px bottom 504.844px
- **div.pointer-events-none.absolute > div.text-ink.border-ink/10** [250×65]: bg oklab(0.999994 0.0000455678 0.0000200868 / 0.05); radius 15.9998px; border 2px solid oklab(0.973166 0.00403872 0.00540715 / 0.1); pad 16px 23.9998px 16px 23.9998px; flex row gap 8px items center; absolute top 419.312px bottom 19.7031px; transform matrix(1, 0.000174533, -0.000174533…
- **div.text-ink.border-ink/10 > span ("Hi, love! How are you?")** ×2 [150×18]: 13.9995px/600/18.1994px rgb(250, 245, 242)
- **div.pointer-events-none.absolute > div.text-ink.border-ink/10** [266×65]: bg oklab(0.999994 0.0000455678 0.0000200868 / 0.05); radius 15.9998px; border 2px solid oklab(0.973166 0.00403872 0.00540715 / 0.1); pad 16px 23.9998px 16px 23.9998px; flex row gap 8px items center; absolute top 231.328px bottom 207.688px; opacity 0; transform matrix(1, 0.000174533, -0.000174533…
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- inline SVG ×3 — use/extend components in src/components/icons.tsx

## Text Content
- span: "Hi, love! How are you?"
- span: "It’s so wonderful to talk"

## Responsive Behavior
- phone 390: section 390×137px; body 15.0619px; 1 hidden children
- ipad 768: section 768×269px; body 15.3994px; 1 col (3 items, gap normal); 1 hidden children
- pc 1440: section 1440×504px; body 15.9995px; 1 col (3 items, gap normal); 1 hidden children
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-section-18.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
