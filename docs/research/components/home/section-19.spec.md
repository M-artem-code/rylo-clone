---
component: Section19Section
target: src/components/Section19Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-19-pc.png
interaction_model: static
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
---

# Section19Section Specification

## DOM Structure
- div [1280×337]
  - div.text-ink/70.gap-x-md [1280×21]
    - div.flex.items-center
      - span.text-main.font-semibold — "4.6"
      - span.relative.inline-flex
        - span.text-ink/30.-space-x-0.5
          - ×5 svg.[object.SVGAnimatedString] > path
        - span.text-ink/80.absolute
          - ×5 svg.[object.SVGAnimatedString] > path
      - span.text-ink/50.text-[0.6875rem] — "(3,574)"
    - span.hidden.h-4.5
    - div.gap-xs.text-tiny
      - span.flex.shrink-0 > svg.[object.SVGAnimatedString]
        - ×2 path.[object.SVGAnimatedString]
      - span — "Certified by FCC"
    - span.h-4.5.w-px
    - div.gap-xs.text-tiny
      - span.flex.shrink-0 > svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString]
- … truncated — full tree in the section JSON (ground truth)

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<div> <div class="text-ink/70 gap-x-md gap-y-sm mb-xl md:mb-3xl flex flex-wrap items-center"> <div class="flex items-center gap-1 text-small"> <span class="text-main font-semibold">4.6</span> <span class="relative inline-flex" role="img" aria-label="Rated 4.6 out of 5 on the App Store, (3,574)"> <span class="text-ink/30 -space-x-0.5 flex"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4.5 shrink-0" aria-hidden="true">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4.5 shrink-0" aria-hidden="true">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4.5 shrink-0" aria-hidden="true">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4.5 shrink-0" aria-hidden="true">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4.5 shrink-0" aria-hidden="true">
  <path d="…"></path>
</svg> </span> <span class="text-ink/80 absolute inset-0 -space-x-0.5 flex overflow-hidden" style="width:92%"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4.5 shrink-0" aria-hidden="true">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4.5 shrink-0" aria-hidden="true">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4.5 shrink-0" aria-hidden="true">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4.5 shrink-0" aria-hidden="true">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4.5 shrink-0" aria-hidden="true">
  <path d="…"></path>
</svg> </span> </span> <span class="text-ink/50 text-[0.6875rem]">(3,574)</span> </div> <span aria-hidden="true" class="hidden h-4.5 w-px bg-current/70 md:block"></span> <div class="gap-xs text-tiny flex items-center"> <span class="flex shrink-0 items-center justify-center size-5"> <svg viewBox="1 0.56 18 18" fill="none" slot="icon" class="w-full" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
</svg> </span> <span>Certified by FCC</span> </div> <span aria-hidden="true" class="h-4.5 w-px bg-current/70"></span> <div class="gap-xs text-tiny flex items-center"> <span class="flex shrink-0 items-center justify-center size-5"> <svg viewBox="-0.413 -0.579 21.825 21.825" fill="none" slot="icon" class="w-full" aria-hidden="true">
  <path fill-rule="evenodd" clip-rule="evenodd" d="…" fill="currentColor"></path>
</svg> </span> <span>100% Private</span> </div> </div> <h2 class="text-display text-trim mb-4xl max-w-[20ch] text-balance">Start captioning</h2> <p class="text-large text-trim mb-xl max-w-[38ch] text-pretty">
The completely free call captioning app making it easy to communicate with anyone, anywhere.
</p> <div data-modal-target="app-download" data-app-download-cta="true" class="inline-flex" data-appsflyer-url="https://getapp.rylo.com/4XoB/mw6qn6dr?af_js_web=true&amp;af_ss_ver=2_7_3&amp;pid=website&amp;rylo_af_map_version=rylo-af-map-v3-2026-06-30&amp;af_ss_gtm_ui=true"> <a href="/download" aria-label="Download for free" class="group relative inline-flex items-center justify-center rounded-small focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none h-button-main px-[clamp(1rem,0.7963rem_+_1.0186vw,1.713rem)]"><span aria-hidden="true" class="bg-accent group-hover:border-page/30 rounded-small ease-cubic-button absolute inset-0 border-0 border-transparent shadow-[0_8px_24px_#00000026,inset_0_0_0.5rem_#ffffff66] transition-[inset,background-color,border-color,border-width] duration-600 group-hover:inset-0.5 group-hover:border-2 group-hover:bg-[color-mix(in_srgb,var(--color-accent),white_20%)] motion-reduce:transition-none"></span><span aria-hidden="true" data-rolling-label="" class="text-ink-fixed relative z-10 flex overflow-hidden text-button"><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0s;">D</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.01s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.02s;">w</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.03s;">n</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.04s;">l</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.05s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.06s;">a</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.07s;">d</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none whitespace-pre" style="transition-delay: 0.08s;"> </span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.09s;">f</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.1s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.11s;">r</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none whitespace-pre" style="transition-delay: 0.12s;"> </span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.13s;">f</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.14s;">r</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.15s;">e</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.16s;">e</span></span></a> </div> </div>
```

## Computed Styles
- **div > div.text-ink/70.gap-x-md** [1280×21]: mb 47.9994px; flex row gap 12px 16px items center
- **div.text-ink/70.gap-x-md > div.flex.items-center** [147×21]: flex row gap 4px items center
- **div.flex.items-center > span.text-main.font-semibold ("4.6")** [26×21]: 15.9995px/600/20.7994px oklab(0.973166 0.00403872 0.00540715 / 0.7)
- **div.flex.items-center > span.relative.inline-flex** [82×18]: flex row; relative
- **span.relative.inline-flex > span.text-ink/30.-space-x-0.5** [82×18]: flex row
- **span.relative.inline-flex > span.text-ink/80.absolute** [75×18]: flex row; absolute
- **div.flex.items-center > span.text-ink/50.text-[0.6875rem] ("(3,574)")** [31×14]: 11px/400/14.3px oklab(0.973166 0.00403872 0.00540715 / 0.5)
- **div.text-ink/70.gap-x-md > span.hidden.h-4.5** ×2 [1×18]: bg oklab(0.973166 0.00403872 0.00540715 / 0.49)
- … +10 more styled nodes — resolve any node with `node scripts/resolve-walk.mjs` (JSON is ground truth)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- inline SVG ×12 — use/extend components in src/components/icons.tsx

## Text Content
- span: "4.6"
- span: "(3,574)"
- span: "Certified by FCC"
- span: "100% Private"
- h2: "Start captioning"
- p: "The completely free call captioning app making it easy to communicate with anyone, anywhere."
- span: "D"
- span: "o"
- span: "w"
- span: "n"
- span: "l"
- span: "o"
- span: "a"
- span: "d"
- span: "f"
- span: "o"
- span: "r"
- span: "f"
- span: "r"
- span: "e" ×2

## Responsive Behavior
- phone 390: section 350×289px; heading 43.5px; body 15.0619px; 1 col (3 items, gap normal)
- ipad 768: section 685×275px; heading 62.4px; body 15.3994px; 1 col (3 items, gap normal)
- pc 1440: section 1280×337px; heading 96px; body 15.9995px; 1 col (3 items, gap normal)
- change: heading size: 96px (pc) → 43.5px (phone)
- ipad matches pc layout
- exact per-property values: probe-section-19.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
