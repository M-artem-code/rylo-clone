---
component: Section22Section
target: src/components/Section22Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-22-pc.png
interaction_model: static
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
---

# Section22Section Specification

## DOM Structure
- ul.grid.w-full [1280×228]
  - ×4 li.rounded-large.bg-card > a.flex.h-full [638×112]
    - span.flex.size-3xl > svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString]
    - span.text-h3.text-trim — "Phone Call Captioning"

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<ul role="list" class="grid w-full grid-cols-1 gap-1 @2xl:grid-cols-2"> <li class="rounded-large bg-card transition-[background-color,color] duration-300 ease-cubic-default motion-reduce:transition-none hover:bg-ink hover:text-page"> <a href="/" class="flex h-full items-center gap-md rounded-large px-2xl py-xl focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"> <span class="flex size-3xl shrink-0 items-center justify-center text-accent"> <svg viewBox="0 0 96 96" fill="none" slot="icon" class="w-full" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
</svg> </span> <span class="text-h3 text-trim min-w-0">Phone Call Captioning</span> </a> </li><li class="rounded-large bg-card transition-[background-color,color] duration-300 ease-cubic-default motion-reduce:transition-none hover:bg-ink hover:text-page"> <a href="/live-transcribe" class="flex h-full items-center gap-md rounded-large px-2xl py-xl focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"> <span class="flex size-3xl shrink-0 items-center justify-center text-accent"> <svg viewBox="-75.5 -36 257 257" fill="none" slot="icon" class="w-full" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
</svg> </span> <span class="text-h3 text-trim min-w-0">Live Transcribe</span> </a> </li><li class="rounded-large bg-card transition-[background-color,color] duration-300 ease-cubic-default motion-reduce:transition-none hover:bg-ink hover:text-page"> <a href="/sidekick" class="flex h-full items-center gap-md rounded-large px-2xl py-xl focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"> <span class="flex size-3xl shrink-0 items-center justify-center text-accent"> <svg viewBox="0 0 48 48" fill="none" slot="icon" class="w-full" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
</svg> </span> <span class="text-h3 text-trim min-w-0">Sidekick for Mac</span> </a> </li><li class="rounded-large bg-card transition-[background-color,color] duration-300 ease-cubic-default motion-reduce:transition-none hover:bg-ink hover:text-page"> <a href="/sign" class="flex h-full items-center gap-md rounded-large px-2xl py-xl focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"> <span class="flex size-3xl shrink-0 items-center justify-center text-accent"> <svg viewBox="0 0 48 48" fill="none" slot="icon" class="w-full" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
</svg> </span> <span class="text-h3 text-trim min-w-0">Sign</span> </a> </li> </ul>
```

## Computed Styles
- **ul.grid.w-full** [1280×228]: grid cols [638px 638px] gap 4px
- **ul.grid.w-full > li.rounded-large.bg-card** ×4 [638×112]: bg rgb(49, 38, 35); radius 40px
- **li.rounded-large.bg-card > a.flex.h-full** ×4 [638×112]: radius 40px; pad 31.9998px 39.9995px 31.9998px 39.9995px; flex row gap 16px items center
- **a.flex.h-full > span.flex.size-3xl** ×4 [48×48]: flex row justify center items center
- **a.flex.h-full > span.text-h3.text-trim ("Phone Call Captioning")** ×4 [236×18]: 23.9998px/600/26.3998px -0.719995px rgb(250, 245, 242)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- inline SVG ×4 — use/extend components in src/components/icons.tsx

## Text Content
- span: "Phone Call Captioning"
- span: "Live Transcribe"
- span: "Sidekick for Mac"
- span: "Sign"

## Responsive Behavior
- phone 390: section 350×385px; body 15.0619px; 1 col (4 items, gap 4px)
- ipad 768: section 685×204px; body 15.3994px; 2 cols (4 items, gap 4px)
- pc 1440: section 1280×228px; body 15.9995px; 2 cols (4 items, gap 4px)
- change: columns: 2 (pc) → 1 (phone)
- change: grid-template columns: 2 (pc) → 1 (phone)
- ipad matches pc layout
- exact per-property values: probe-section-22.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
