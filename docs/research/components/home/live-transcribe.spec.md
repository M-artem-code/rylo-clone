---
component: LiveTranscribeSection
target: src/components/LiveTranscribeSection.tsx
page: /
screenshot: docs/design-references/rylo.com/live-transcribe-pc.png
interaction_model: scroll-driven
states: default
assets: public/images/prod-cta-background.CQJ-AY5P_Z17gijI.avif, public/images/prod-cta-foreground.DqiXt8Fm_Z4hWeD.avif
responsive: phone, ipad, pc
---

# LiveTranscribeSection Specification

## DOM Structure
- section.relative.overflow-clip [1440×1725]
  - img.pointer-events-none.absolute [1440×1725]
  - div.pointer-events-none.absolute > svg.[object.SVGAnimatedString] [1440×179]
    - ×2 path.[object.SVGAnimatedString]
  - div.container-site.gap-4xl [1280×1531]
    - header.w-full
      - div.text-display.gap-[0.5em]
        - span.bg-accent.rounded-medium > svg.[object.SVGAnimatedString]
        - h2.text-trim.text-balance — "Live Transcribe"
      - p.text-large.text-trim — "Use Rylo Live Transcribe to caption the world a…"
      - div.mt-xl.inline-flex > a.group.relative
        - span.bg-accent.group-hover:border-page/30
        - span.text-ink-fixed.relative
        - span.sr-only — "Learn more about Live Transcribe"
    - div.relative.mx-auto > img.absolute.inset-0
  - div.pointer-events-none.absolute [1440×1725]

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<section data-surface="dark" data-section-parallax="" class="relative overflow-clip z-2 rounded-t-huge -mb-band-overlap pt-section-main" style="will-change: transform; translate: none; rotate: none; scale: none; transform: translate(0px, 0px);">   <img src="/_astro/prod-cta-background.CQJ-AY5P_Z2uXlWw.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/prod-cta-background.CQJ-AY5P_ZswKsF.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 640w, /_astro/prod-cta-background.CQJ-AY5P_1ppbc0.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 750w, /_astro/prod-cta-background.CQJ-AY5P_1mVNph.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 828w, /_astro/prod-cta-background.CQJ-AY5P_afMeR.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1080w, /_astro/prod-cta-background.CQJ-AY5P_Z2vV2Kz.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1280w, /_astro/prod-cta-background.CQJ-AY5P_Z17gijI.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1668w, /_astro/prod-cta-background.CQJ-AY5P_Z2qQ7oN.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 2048w" alt="" aria-hidden="true" loading="eager" fetchpriority="low" decoding="async" sizes="100vw" data-astro-image="full-width" data-astro-image-fit="cover" data-astro-image-pos="center" width="2500" height="2516" class="pointer-events-none absolute z-0 w-full object-cover inset-x-0 bottom-0 min-h-full"> <div aria-hidden="true" data-path-draw="true" class="pointer-events-none absolute inset-x-0 z-1 bottom-[25%] flex justify-center sm:bottom-[28%] md:bottom-[32%]" data-astro-cid-r32rvswh="">  <svg viewBox="0 0 1440 179" preserveAspectRatio="none" fill="none" class="aspect-1440/179 w-screen">
  <path data-path-line="" d="…" stroke="var(--marketing-accent)" stroke-width="4" vector-effect="non-scaling-stroke" style="stroke-dashoffset: 0; stroke-dasharray: none;"></path>
  <path data-path-line="" d="…" stroke="var(--marketing-light)" stroke-width="4" vector-effect="non-scaling-stroke" style="stroke-dashoffset: 0; stroke-dasharray: 1536.75px, 0.1px;"></path>
</svg>  </div> <div class="container-site gap-4xl z-2 flex flex-col"> <header class="w-full">  <div class="text-display gap-[0.5em] flex flex-col flex-wrap md:flex-row md:items-center"> <span class="bg-accent rounded-medium text-page shadow-small flex size-[1em] shrink-0 items-center justify-center md:size-[0.9em]"> <svg viewBox="-75.5 -36 257 257" fill="none" slot="icon" class="size-full" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
</svg> </span> <h2 class="text-trim text-balance">Live Transcribe</h2> </div>    <p class="text-large text-trim text-ink/70 mt-3xl max-w-[45ch] text-pretty">
Use Rylo Live Transcribe to caption the world around you. In-person interactions just got a
        whole lot better.
</p> <div class="mt-xl inline-flex"> <a href="/live-transcribe" aria-label="Learn more about Live Transcribe" class="group relative inline-flex items-center justify-center rounded-small focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none h-button-main px-[clamp(1rem,0.7963rem_+_1.0186vw,1.713rem)]"><span aria-hidden="true" class="bg-accent group-hover:border-page/30 rounded-small ease-cubic-button absolute inset-0 border-0 border-transparent shadow-[0_8px_24px_#00000026,inset_0_0_0.5rem_#ffffff66] transition-[inset,background-color,border-color,border-width] duration-600 group-hover:inset-0.5 group-hover:border-2 group-hover:bg-[color-mix(in_srgb,var(--color-accent),white_20%)] motion-reduce:transition-none"></span><span aria-hidden="true" data-rolling-label="" class="text-ink-fixed relative z-10 flex overflow-hidden text-button"><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0s;">L</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.01s;">e</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.02s;">a</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.03s;">r</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.04s;">n</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none whitespace-pre" style="transition-delay: 0.05s;"> </span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.06s;">m</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.07s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.08s;">r</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.09s;">e</span></span><span class="sr-only">Learn more about Live Transcribe</span></a> </div>  </header> <div class="relative mx-auto aspect-square w-full max-w-300">  <img src="/_astro/prod-cta-foreground.DqiXt8Fm_Z4hWeD.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/prod-cta-foreground.DqiXt8Fm_Zt41gK.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 480w, /_astro/prod-cta-foreground.DqiXt8Fm_2cB2Le.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 768w, /_astro/prod-cta-foreground.DqiXt8Fm_ZwbrK0.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1200w, /_astro/prod-cta-foreground.DqiXt8Fm_Z4hWeD.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1920w" alt="Middle-aged man in orange sweater shows a smartphone to a woman in a cream sweater and jeans as they engage in conversation." loading="lazy" decoding="async" sizes="(min-width: 1920px) 1920px, 100vw" data-astro-image="constrained" data-astro-image-fit="cover" data-astro-image-pos="center" width="1920" height="1920" class="absolute inset-0 size-full object-cover"> </div> </div>  <div aria-hidden="true" data-section-parallax-overlay="" class="pointer-events-none absolute inset-0 z-10 bg-black opacity-0" style="will-change: opacity; opacity: 0;"></div> </section>
```

## Computed Styles
- **section.relative.overflow-clip** [1440×1725]: bg rgb(25, 20, 18); radius 79.9994px 79.9994px 0px 0px; pad 194.272px 0px 0px 0px; mb -97.1338px; relative z2; transform matrix(1, 0, 0, 1, 0, 0)
- **section.relative.overflow-clip > img.pointer-events-none.absolute** [1440×1725]: max-w 100%; absolute z0
- **section.relative.overflow-clip > div.pointer-events-none.absolute** [1440×179]: flex row justify center; absolute z1 top 994.25px bottom 552.109px
- **section.relative.overflow-clip > div.container-site.gap-4xl** [1280×1531]: flex column gap 64px; max-w 1440px; relative z2
- **header.w-full > div.text-display.gap-[0.5em]** [1280×86]: flex row gap 48px items center
- **div.text-display.gap-[0.5em] > span.bg-accent.rounded-medium** [86×86]: bg rgb(255, 139, 43); radius 23.9995px; shadow rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0,…; flex row justify center items center
- **div.text-display.gap-[0.5em] > h2.text-trim.text-balance ("Live Transcribe")** [635×71]: 96px/600/91.2px -3.84px rgb(250, 245, 242)
- **header.w-full > p.text-large.text-trim ("Use Rylo Live Transcr…")** [630×49]: 21.9998px/400/32.9998px oklab(0.973166 0.00403872 0.00540715 / 0.7); mt 47.9994px; max-w 630px
- … +7 more styled nodes — resolve any node with `node scripts/resolve-walk.mjs` (JSON is ground truth)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
- **Scroll Parallax Overlay**: Section has `data-section-parallax` and `data-section-parallax-overlay` opacity transition on scroll.
- **Drawn Path Animation**: Curved line SVG drawn as user views the section.
- **Rolling Label CTA**: "Learn more" button features rolling hover text effect.

## Per-State Content
- N/A — single feature highlight state.

## Assets
- img prod-cta-background.CQJ-AY5P_Z17gijI.avif (1440×1449) → public/images/prod-cta-background.CQJ-AY5P_Z17gijI.avif
- img prod-cta-foreground.DqiXt8Fm_Z4hWeD.avif (1440×1440) alt "Middle-aged man in orange sweater shows…" → public/images/prod-cta-foreground.DqiXt8Fm_Z4hWeD.avif
- inline SVG ×2 — use/extend components in src/components/icons.tsx

## Text Content
- h2: "Live Transcribe"
- p: "Use Rylo Live Transcribe to caption the world around you. In-person interactions just got a whole lot better."
- span: "Learn more about Live Transcribe"

## Responsive Behavior
- phone 390: section 390×750px; heading 43.5px; body 15.0619px; 2 cols (4 items, gap normal); pt 87.1417px, lh 19.5804px
- ipad 768: section 768×1075px; heading 62.4px; body 15.3994px; 2 cols (4 items, gap normal); pt 125.709px, lh 20.0193px
- pc 1440: section 1440×1725px; heading 96px; body 15.9995px; 2 cols (4 items, gap normal); pt 194.272px, lh 20.7994px
- change: heading size: 96px (pc) → 43.5px (phone)
- ipad matches pc layout
- exact per-property values: probe-live-transcribe.json + responsive.json (ground truth)

## Notes
- Feature data can be passed as props.
- Image layering: background image with dark overlay, curved SVG stroke, foreground image mockup.
