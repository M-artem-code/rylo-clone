---
component: CaptioningSection
target: src/components/CaptioningSection.tsx
page: /
screenshot: docs/design-references/rylo.com/captioning-pc.png
interaction_model: static
states: default
assets: public/images/rylo-hero-background.BlPcKf6v_1sUPOK.avif, public/images/rylo-hero-foreground-2.BG7O6dg4_ZpnWiN.avif
responsive: phone, ipad, pc
---

# CaptioningSection Specification

## DOM Structure
- section.-mb-band-overlap.relative [1440×1361]
  - img.pointer-events-none.absolute [1440×1361]
  - div.pointer-events-none.absolute [1440×504]
    - svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString]
    - ×2 div.text-ink.border-ink/10
      - svg.[object.SVGAnimatedString]
        - ×5 ellipse.[object.SVGAnimatedString]
      - span — "Good morning"
  - div.container-site.z-10 [1280×1361]
    - div.grid.items-end
      - h1.text-h1.text-balance — "The completely free call captioning and live tr…"
      - div.flex.flex-col
        - div.text-ink/70.flex
          - div.flex.items-center
          - span.hidden.h-4.5
          - div.gap-xs.text-tiny
          - span.h-4.5.w-px
          - div.gap-xs.text-tiny
- … truncated — full tree in the section JSON (ground truth)

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<section id="captioning" data-surface="dark" data-section-parallax="" class="-mb-band-overlap relative z-2 flex min-h-[110vh] flex-col overflow-clip" style="will-change: transform; translate: none; rotate: none; scale: none; transform: translate(0px, 0px);">  <img src="/_astro/rylo-hero-background.BlPcKf6v_1Ae9TE.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/rylo-hero-background.BlPcKf6v_ZLO0u.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 640w, /_astro/rylo-hero-background.BlPcKf6v_Z1Usapf.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 750w, /_astro/rylo-hero-background.BlPcKf6v_4xBPI.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 828w, /_astro/rylo-hero-background.BlPcKf6v_ZUmBz0.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1080w, /_astro/rylo-hero-background.BlPcKf6v_2pyJbs.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1280w, /_astro/rylo-hero-background.BlPcKf6v_1sUPOK.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1668w, /_astro/rylo-hero-background.BlPcKf6v_P6Soj.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 2048w, /_astro/rylo-hero-background.BlPcKf6v_Z2uvRlL.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 2560w" alt="" aria-hidden="true" loading="eager" fetchpriority="low" decoding="async" sizes="100vw" data-astro-image="full-width" data-astro-image-fit="cover" data-astro-image-pos="center" width="2758" height="2298" class="pointer-events-none absolute z-0 w-full object-cover inset-x-0 bottom-0 min-h-full object-bottom"> <div aria-hidden="true" data-path-draw="hero" class="pointer-events-none absolute inset-x-0 z-1 bottom-[20%]" data-astro-cid-r32rvswh="">  <svg viewBox="0 0 1440 504" preserveAspectRatio="none" fill="none" class="aspect-1440/504 w-full">
  <path data-path-line="" data-path-lead="180" d="…" stroke="color-mix(in srgb, var(--marketing-light) 15%, transparent)" stroke-width="4" vector-effect="non-scaling-stroke" style="stroke-dashoffset: -179.995; stroke-dasharray: 1978.69px, 180.105px;"></path>
</svg> <div data-path-bubble="" class="text-ink border-ink/10 rounded-small md:rounded-regular gap-xs px-sm py-xs md:px-md md:py-sm lg:px-lg lg:py-md absolute flex -translate-x-1/2 -translate-y-1/2 items-center border-2 bg-white/5 text-small font-semibold whitespace-nowrap backdrop-blur-[20px] top-[83.2%] left-[16.2%]" data-astro-cid-muobrt2o="" style="translate: none; rotate: none; scale: none; transform-origin: 50% 50%; transform: translate3d(761.099px, -92.525px, 0px) rotate(0.01deg); opacity: 1; visibility: inherit;"> <svg viewBox="0 0 40 29" fill="currentColor" class="text-accent aspect-40/29 w-2xl shrink-0" aria-hidden="true" data-astro-cid-muobrt2o="true">
  <ellipse cx="3.6" cy="14.4" rx="3.6" ry="5.6"></ellipse>
  <ellipse cx="11.6" cy="14.4" rx="3.6" ry="8"></ellipse>
  <ellipse cx="19.6" cy="14.4" rx="3.6" ry="14.4"></ellipse>
  <ellipse cx="27.6" cy="14.4" rx="3.6" ry="8.8"></ellipse>
  <ellipse cx="35.6" cy="14.4" rx="3.6" ry="9.6"></ellipse>
</svg> <span data-astro-cid-muobrt2o="">Good morning</span> </div> <div data-path-bubble="" class="text-ink border-ink/10 rounded-small md:rounded-regular gap-xs px-sm py-xs md:px-md md:py-sm lg:px-lg lg:py-md absolute flex -translate-x-1/2 -translate-y-1/2 items-center border-2 bg-white/5 text-small font-semibold whitespace-nowrap backdrop-blur-[20px] top-[45.9%] left-[83.5%]" data-astro-cid-muobrt2o="" style="translate: none; rotate: none; scale: none; transform-origin: 50% 50%; transform: translate3d(-1254.39px, 197.994px, 0px) rotate(0.01deg); opacity: 1; visibility: inherit;"> <svg viewBox="0 0 40 29" fill="currentColor" class="text-accent aspect-40/29 w-2xl shrink-0" aria-hidden="true" data-astro-cid-muobrt2o="true">
  <ellipse cx="3.6" cy="14.4" rx="3.6" ry="5.6"></ellipse>
  <ellipse cx="11.6" cy="14.4" rx="3.6" ry="8"></ellipse>
  <ellipse cx="19.6" cy="14.4" rx="3.6" ry="14.4"></ellipse>
  <ellipse cx="27.6" cy="14.4" rx="3.6" ry="8.8"></ellipse>
  <ellipse cx="35.6" cy="14.4" rx="3.6" ry="9.6"></ellipse>
</svg> <span data-astro-cid-muobrt2o="">It’s so wonderful to talk</span> </div>  </div> <div class="container-site z-10 flex flex-1 flex-col justify-between gap-3xl pt-page-top pb-16 md:pb-20"> <div class="grid items-end gap-x-2xl gap-y-3xl md:grid-cols-12"> <h1 data-animate="page-once" class="text-h1 text-balance md:col-span-7 motion-safe:animate-page-entrance">
The completely free call captioning and live transcription app
</h1> <div data-animate="page-once" class="flex flex-col items-start gap-lg md:col-span-5 md:col-start-8 motion-safe:animate-page-entrance motion-safe:[animation-delay:0.1s]"> <div class="text-ink/70 flex flex-wrap items-center gap-x-md gap-y-sm"> <div class="flex items-center gap-1 text-small"> <span class="text-main font-semibold">4.6</span> <span class="relative inline-flex" role="img" aria-label="Rated 4.6 out of 5 on the App Store, (3,574)"> <span class="text-ink/30 -space-x-0.5 flex"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4.5 shrink-0" aria-hidden="true">
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
</svg> </span> <span>100% Private</span> </div> </div> <p class="text-main text-ink max-w-96">
Caption your conversations and never miss a word
</p> <div data-modal-target="app-download" data-app-download-cta="true" class="contents" data-appsflyer-url="https://getapp.rylo.com/4XoB/mw6qn6dr?af_js_web=true&amp;af_ss_ver=2_7_3&amp;pid=website&amp;rylo_af_map_version=rylo-af-map-v3-2026-06-30&amp;af_ss_gtm_ui=true"> <a href="/download" aria-label="Download for free" class="group relative inline-flex items-center justify-center rounded-small focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none h-button-main px-[clamp(1rem,0.7963rem_+_1.0186vw,1.713rem)]"><span aria-hidden="true" class="bg-accent group-hover:border-page/30 rounded-small ease-cubic-button absolute inset-0 border-0 border-transparent shadow-[0_8px_24px_#00000026,inset_0_0_0.5rem_#ffffff66] transition-[inset,background-color,border-color,border-width] duration-600 group-hover:inset-0.5 group-hover:border-2 group-hover:bg-[color-mix(in_srgb,var(--color-accent),white_20%)] motion-reduce:transition-none"></span><span aria-hidden="true" data-rolling-label="" class="text-ink-fixed relative z-10 flex overflow-hidden text-button"><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0s;">D</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.01s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.02s;">w</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.03s;">n</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.04s;">l</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.05s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.06s;">a</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.07s;">d</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none whitespace-pre" style="transition-delay: 0.08s;"> </span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.09s;">f</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.1s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.11s;">r</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none whitespace-pre" style="transition-delay: 0.12s;"> </span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.13s;">f</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.14s;">r</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.15s;">e</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.16s;">e</span></span></a> </div> </div> </div> <div class="relative mx-auto aspect-square w-full max-w-208"> <picture> <source srcset="/_astro/rylo-hero-foreground-2.BG7O6dg4_CW3gA.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 520w, /_astro/rylo-hero-foreground-2.BG7O6dg4_ZpnWiN.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 832w, /_astro/rylo-hero-foreground-2.BG7O6dg4_Zl5Why.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1040w, /_astro/rylo-hero-foreground-2.BG7O6dg4_2oRSGC.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1440w" type="image/avif" sizes="(min-width: 832px) 832px, 100vw"><source srcset="/_astro/rylo-hero-foreground-2.BG7O6dg4_1dbKJF.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 520w, /_astro/rylo-hero-foreground-2.BG7O6dg4_9PKah.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 832w, /_astro/rylo-hero-foreground-2.BG7O6dg4_xYdDm.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1040w, /_astro/rylo-hero-foreground-2.BG7O6dg4_Z1Le4bo.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1440w" type="image/webp" sizes="(min-width: 832px) 832px, 100vw">  <img src="/_astro/rylo-hero-foreground-2.BG7O6dg4_Z1Le4bo.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/rylo-hero-foreground-2.BG7O6dg4_1dbKJF.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 520w, /_astro/rylo-hero-foreground-2.BG7O6dg4_9PKah.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 832w, /_astro/rylo-hero-foreground-2.BG7O6dg4_xYdDm.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1040w, /_astro/rylo-hero-foreground-2.BG7O6dg4_Z1Le4bo.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1440w" sizes="(min-width: 832px) 832px, 100vw" alt="Smiling older man with gray hair and beard wearing round glasses and orange sweater looking at a green smartphone." loading="eager" fetchpriority="high" decoding="async" width="1440" height="1440" class="absolute inset-x-0 top-0 h-[120%] w-full object-cover object-center"> </picture> </div> </div> <div aria-hidden="true" data-section-parallax-overlay="" class="pointer-events-none absolute inset-0 z-10 bg-black opacity-0" style="will-change: opacity; opacity: 0;"></div> </section>
```

## Computed Styles
- **section.-mb-band-overlap.relative** [1440×1361]: bg rgb(25, 20, 18); mb -97.1338px; flex column; relative z2; transform matrix(1, 0, 0, 1, 0, 0)
- **section.-mb-band-overlap.relative > img.pointer-events-none.absolute** [1440×1361]: max-w 100%; absolute z0
- **div.pointer-events-none.absolute > div.text-ink.border-ink/10** [199×65]: bg oklab(0.999994 0.0000455678 0.0000200868 / 0.05); radius 15.9998px; border 2px solid oklab(0.973166 0.00403872 0.00540715 / 0.1); pad 16px 23.9998px 16px 23.9998px; flex row gap 8px items center; absolute top 419.312px bottom 19.7031px; transform matrix(1, 0.000174533, -0.000174533…
- **div.text-ink.border-ink/10 > span ("Good morning")** ×2 [99×18]: 13.9995px/600/18.1994px rgb(250, 245, 242)
- **div.pointer-events-none.absolute > div.text-ink.border-ink/10** [266×65]: bg oklab(0.999994 0.0000455678 0.0000200868 / 0.05); radius 15.9998px; border 2px solid oklab(0.973166 0.00403872 0.00540715 / 0.1); pad 16px 23.9998px 16px 23.9998px; flex row gap 8px items center; absolute top 231.328px bottom 207.688px; transform matrix(1, 0.000174533, -0.000174533…
- **section.-mb-band-overlap.relative > div.container-site.z-10** [1280×1361]: pad 189.728px 0px 80px 0px; mr 80px ml 80px; flex column gap 47.9994px justify space-between; max-w 1440px; relative z10
- **div.container-site.z-10 > div.grid.items-end** [1280×211]: grid cols [70px 70px 70px 70px 70px 70px 70px 70px…] gap 47.9994px 39.9995px
- **div.grid.items-end > h1.text-h1.text-balance ("The completely free c…")** [730×211]: 64px/600/70.4px -1.92px rgb(250, 245, 242)
- … +9 more styled nodes — resolve any node with `node scripts/resolve-walk.mjs` (JSON is ground truth)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- img rylo-hero-background.BlPcKf6v_1sUPOK.avif (1440×1200) → public/images/rylo-hero-background.BlPcKf6v_1sUPOK.avif
- img rylo-hero-foreground-2.BG7O6dg4_ZpnWiN.avif (832×832) alt "Smiling older man with gray hair and be…" → public/images/rylo-hero-foreground-2.BG7O6dg4_ZpnWiN.avif
- inline SVG ×3 — use/extend components in src/components/icons.tsx

## Text Content
- span: "Good morning"
- span: "It’s so wonderful to talk"
- h1: "The completely free call captioning and live transcription app"
- p: "Caption your conversations and never miss a word"

## Responsive Behavior
- phone 390: section 390×929px; heading 37.75px; body 15.0619px; 3 cols (4 items, gap normal)
- ipad 768: section 768×1227px; heading 47.2px; body 15.3994px; 3 cols (4 items, gap normal)
- pc 1440: section 1440×1361px; heading 64px; body 15.9995px; 3 cols (4 items, gap normal)
- change: heading size: 64px (pc) → 37.75px (phone)
- ipad matches pc layout
- exact per-property values: probe-captioning.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
