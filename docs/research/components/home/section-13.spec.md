---
component: Section13Section
target: src/components/Section13Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-13-pc.png
interaction_model: static
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
---

# Section13Section Specification

## DOM Structure
- header.w-full [1280×267]
  - div.text-display.gap-[0.5em] [1280×86]
    - span.bg-accent.rounded-medium > svg.[object.SVGAnimatedString]
      - ×2 path.[object.SVGAnimatedString]
    - h2.text-trim.text-balance — "Live Transcribe"
  - p.text-large.text-trim [630×49] — "Use Rylo Live Transcribe to caption the world a…"
  - div.mt-xl.inline-flex > a.group.relative [150×51]
    - span.bg-accent.group-hover:border-page/30
    - span.text-ink-fixed.relative
      - ×10 span.ease-cubic-button.inline-block — "L"
    - span.sr-only — "Learn more about Live Transcribe"

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<header class="w-full">  <div class="text-display gap-[0.5em] flex flex-col flex-wrap md:flex-row md:items-center"> <span class="bg-accent rounded-medium text-page shadow-small flex size-[1em] shrink-0 items-center justify-center md:size-[0.9em]"> <svg viewBox="-75.5 -36 257 257" fill="none" slot="icon" class="size-full" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
</svg> </span> <h2 class="text-trim text-balance">Live Transcribe</h2> </div>    <p class="text-large text-trim text-ink/70 mt-3xl max-w-[45ch] text-pretty">
Use Rylo Live Transcribe to caption the world around you. In-person interactions just got a
        whole lot better.
</p> <div class="mt-xl inline-flex"> <a href="/live-transcribe" aria-label="Learn more about Live Transcribe" class="group relative inline-flex items-center justify-center rounded-small focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none h-button-main px-[clamp(1rem,0.7963rem_+_1.0186vw,1.713rem)]"><span aria-hidden="true" class="bg-accent group-hover:border-page/30 rounded-small ease-cubic-button absolute inset-0 border-0 border-transparent shadow-[0_8px_24px_#00000026,inset_0_0_0.5rem_#ffffff66] transition-[inset,background-color,border-color,border-width] duration-600 group-hover:inset-0.5 group-hover:border-2 group-hover:bg-[color-mix(in_srgb,var(--color-accent),white_20%)] motion-reduce:transition-none"></span><span aria-hidden="true" data-rolling-label="" class="text-ink-fixed relative z-10 flex overflow-hidden text-button"><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0s;">L</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.01s;">e</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.02s;">a</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.03s;">r</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.04s;">n</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none whitespace-pre" style="transition-delay: 0.05s;"> </span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.06s;">m</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.07s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.08s;">r</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.09s;">e</span></span><span class="sr-only">Learn more about Live Transcribe</span></a> </div>  </header>
```

## Computed Styles
- **header.w-full > div.text-display.gap-[0.5em]** [1280×86]: flex row gap 48px items center
- **div.text-display.gap-[0.5em] > span.bg-accent.rounded-medium** [86×86]: bg rgb(255, 139, 43); radius 23.9995px; shadow rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0,…; flex row justify center items center
- **div.text-display.gap-[0.5em] > h2.text-trim.text-balance ("Live Transcribe")** [635×71]: 96px/600/91.2px -3.84px rgb(250, 245, 242)
- **header.w-full > p.text-large.text-trim ("Use Rylo Live Transcr…")** [630×49]: 21.9998px/400/32.9998px oklab(0.973166 0.00403872 0.00540715 / 0.7); mt 47.9994px; max-w 630px
- **header.w-full > div.mt-xl.inline-flex** [150×51]: mt 31.9998px; flex row
- **div.mt-xl.inline-flex > a.group.relative** [150×51]: radius 11.9998px; pad 0px 27.408px 0px 27.408px; flex row justify center items center; relative
- **a.group.relative > span.bg-accent.group-hover:border-page/30** [150×51]: bg rgb(255, 139, 43); radius 11.9998px; shadow rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0,…; absolute
- **a.group.relative > span.text-ink-fixed.relative** [95×22]: flex row; relative z10
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
- h2: "Live Transcribe"
- p: "Use Rylo Live Transcribe to caption the world around you. In-person interactions just got a
        whole lot better."
- span: "L"
- span: "e"
- span: "a"
- span: "r"
- span: "n"
- span: "m"
- span: "o"
- span: "r"
- span: "e"
- span: "Learn more about Live Transcribe"

## Responsive Behavior
- phone 390: section 350×271px; heading 43.5px; body 15.0619px; 1 col (3 items, gap normal)
- ipad 768: section 685×215px; heading 62.4px; body 15.3994px; 1 col (3 items, gap normal)
- pc 1440: section 1280×267px; heading 96px; body 15.9995px; 1 col (3 items, gap normal)
- change: heading size: 96px (pc) → 43.5px (phone)
- ipad matches pc layout
- exact per-property values: probe-section-13.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
