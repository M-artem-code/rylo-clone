---
component: Header2Section
target: src/components/Header2Section.tsx
page: /
screenshot: docs/design-references/rylo.com/header-2-pc.png
interaction_model: static
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
---

# Header2Section Specification

## DOM Structure
- header.w-full [1280×267]
  - div.text-display.gap-[0.5em] [1280×86]
    - span.bg-accent.rounded-medium > svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString]
    - h2.text-trim.max-w-[16ch] — "Call"
      - span.text-ink/50 — "with clarity"
  - p.text-large.text-trim [630×49] — "Phone calls should feel simple, not stressful. …"
  - div.mt-xl.inline-flex > a.group.relative [205×51]
    - span.bg-accent.group-hover:border-page/30
    - span.text-ink-fixed.relative
      - ×16 span.ease-cubic-button.inline-block — "D"

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<header class="w-full">  <div class="text-display gap-[0.5em] flex flex-col flex-wrap md:flex-row md:items-center"> <span class="bg-accent rounded-medium text-page shadow-small flex size-[1em] shrink-0 items-center justify-center md:size-[0.9em]"> <svg viewBox="0 0 96 96" fill="none" slot="icon" class="size-full" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
</svg> </span> <h2 class="text-trim max-w-[16ch] text-balance">
Call <span class="text-ink/50">with clarity</span> </h2> </div>    <p class="text-large text-trim text-ink/70 mt-3xl max-w-[45ch] text-pretty">
Phone calls should feel simple, not stressful. With Rylo, you see every word as it is spoken so
    you can follow along.
</p> <div data-modal-target="app-download" data-app-download-cta="true" class="mt-xl inline-flex" data-appsflyer-url="https://getapp.rylo.com/4XoB/mw6qn6dr?af_js_web=true&amp;af_ss_ver=2_7_3&amp;pid=website&amp;rylo_af_map_version=rylo-af-map-v3-2026-06-30&amp;af_ss_gtm_ui=true"> <a href="/download" aria-label="Download the app" class="group relative inline-flex items-center justify-center rounded-small focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none h-button-main px-[clamp(1rem,0.7963rem_+_1.0186vw,1.713rem)]"><span aria-hidden="true" class="bg-accent group-hover:border-page/30 rounded-small ease-cubic-button absolute inset-0 border-0 border-transparent shadow-[0_8px_24px_#00000026,inset_0_0_0.5rem_#ffffff66] transition-[inset,background-color,border-color,border-width] duration-600 group-hover:inset-0.5 group-hover:border-2 group-hover:bg-[color-mix(in_srgb,var(--color-accent),white_20%)] motion-reduce:transition-none"></span><span aria-hidden="true" data-rolling-label="" class="text-ink-fixed relative z-10 flex overflow-hidden text-button"><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0s;">D</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.01s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.02s;">w</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.03s;">n</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.04s;">l</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.05s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.06s;">a</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.07s;">d</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none whitespace-pre" style="transition-delay: 0.08s;"> </span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.09s;">t</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.1s;">h</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.11s;">e</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none whitespace-pre" style="transition-delay: 0.12s;"> </span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.13s;">a</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.14s;">p</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.15s;">p</span></span></a> </div>  </header>
```

## Computed Styles
- **header.w-full > div.text-display.gap-[0.5em]** [1280×86]: flex row gap 48px items center
- **div.text-display.gap-[0.5em] > span.bg-accent.rounded-medium** [86×86]: bg rgb(255, 139, 43); radius 23.9995px; shadow rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0,…; flex row justify center items center
- **div.text-display.gap-[0.5em] > h2.text-trim.max-w-[16ch] ("Call")** [634×71]: 96px/600/91.2px -3.84px rgb(25, 20, 18); max-w 976px
- **h2.text-trim.max-w-[16ch] > span.text-ink/50 ("with clarity")** [457×120]: 96px/600/91.2px -3.84px oklab(0.196595 0.00668062 0.0062332 / 0.5)
- **header.w-full > p.text-large.text-trim ("Phone calls should fe…")** [630×49]: 21.9998px/400/32.9998px oklab(0.196595 0.00668062 0.0062332 / 0.7); mt 47.9994px; max-w 630px
- **header.w-full > div.mt-xl.inline-flex** [205×51]: mt 31.9998px; flex row
- **div.mt-xl.inline-flex > a.group.relative** [205×51]: radius 11.9998px; pad 0px 27.408px 0px 27.408px; flex row justify center items center; relative
- **a.group.relative > span.bg-accent.group-hover:border-page/30** [205×51]: bg rgb(255, 139, 43); radius 11.9998px; shadow rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0,…; absolute
- … +2 more styled nodes — resolve any node with `node scripts/resolve-walk.mjs` (JSON is ground truth)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- inline SVG ×1 — use/extend components in src/components/icons.tsx

## Text Content
- h2: "Call"
- span: "with clarity"
- p: "Phone calls should feel simple, not stressful. With Rylo, you see every word as it is spoken so
    you can follow along."
- span: "D"
- span: "o"
- span: "w"
- span: "n"
- span: "l"
- span: "o"
- span: "a"
- span: "d"
- span: "t"
- span: "h"
- span: "e"
- span: "a"
- span: "p" ×2

## Responsive Behavior
- phone 390: section 350×271px; heading 43.5px; body 15.0619px; 1 col (3 items, gap normal)
- ipad 768: section 685×215px; heading 62.4px; body 15.3994px; 1 col (3 items, gap normal)
- pc 1440: section 1280×267px; heading 96px; body 15.9995px; 1 col (3 items, gap normal)
- change: heading size: 96px (pc) → 43.5px (phone)
- ipad matches pc layout
- exact per-property values: probe-header-2.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
