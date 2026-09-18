---
component: StartCaptioningSection
target: src/components/StartCaptioningSection.tsx
page: /
screenshot: docs/design-references/rylo.com/start-captioning-pc.png
interaction_model: scroll-driven
states: default
assets: public/images/cta-background.qn7Z5g_h_LDU9H.avif, public/images/cta-couple-phone.DDfwRSnv_Z1Q42Ao.avif
responsive: phone, ipad, pc
---

# StartCaptioningSection Specification

## DOM Structure
- section.relative.overflow-clip [1440×1683]
  - img.pointer-events-none.absolute [1440×1820]
  - div.pointer-events-none.absolute [1440×504]
    - svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString]
    - ×2 div.text-ink.border-ink/10
      - svg.[object.SVGAnimatedString]
        - ×5 ellipse.[object.SVGAnimatedString]
      - span — "Hi, love! How are you?"
  - div.container-site.z-2 [1280×1489]
    - div
      - div.text-ink/70.gap-x-md
        - div.flex.items-center
          - span.text-main.font-semibold — "4.6"
          - span.relative.inline-flex
          - span.text-ink/50.text-[0.6875rem] — "(3,574)"
        - span.hidden.h-4.5
        - div.gap-xs.text-tiny
          - span.flex.shrink-0 > svg
- … truncated — full tree in the section JSON (ground truth)

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<section data-surface="dark" class="relative overflow-clip z-2 rounded-huge pt-section-main">   <img src="/_astro/cta-background.qn7Z5g_h_UsGtW.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/cta-background.qn7Z5g_h_Drr1z.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 640w, /_astro/cta-background.qn7Z5g_h_Z14sKSO.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 750w, /_astro/cta-background.qn7Z5g_h_1CmOCe.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 828w, /_astro/cta-background.qn7Z5g_h_ZmWgk0.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1080w, /_astro/cta-background.qn7Z5g_h_25fmPV.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1280w, /_astro/cta-background.qn7Z5g_h_LDU9H.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1668w, /_astro/cta-background.qn7Z5g_h_1liQto.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 2048w" alt="" aria-hidden="true" loading="eager" fetchpriority="low" decoding="async" sizes="100vw" data-astro-image="full-width" data-astro-image-fit="cover" data-astro-image-pos="center" width="2500" height="3159" class="pointer-events-none absolute z-0 w-full object-cover inset-x-0 bottom-0 min-h-full"> <div aria-hidden="true" data-path-draw="true" class="pointer-events-none absolute inset-x-0 z-1 bottom-[30%]" data-astro-cid-r32rvswh="">  <svg viewBox="0 0 1440 504" preserveAspectRatio="none" fill="none" class="aspect-1440/504 w-full">
  <path data-path-line="" data-path-lead="180" d="…" stroke="color-mix(in srgb, var(--marketing-light) 15%, transparent)" stroke-width="4" vector-effect="non-scaling-stroke" style="stroke-dashoffset: -179.995; stroke-dasharray: 1978.69px, 180.105px;"></path>
</svg> <div data-path-bubble="" class="text-ink border-ink/10 rounded-small md:rounded-regular gap-xs px-sm py-xs md:px-md md:py-sm lg:px-lg lg:py-md absolute flex -translate-x-1/2 -translate-y-1/2 items-center border-2 bg-white/5 text-small font-semibold whitespace-nowrap backdrop-blur-[20px] top-[83.2%] left-[16.2%]" data-astro-cid-muobrt2o="" style="translate: none; rotate: none; scale: none; transform-origin: 50% 50%; transform: translate3d(-52.3321px, -43.7696px, 0px) rotate(0.01deg); opacity: 1; visibility: inherit;"> <svg viewBox="0 0 40 29" fill="currentColor" class="text-accent aspect-40/29 w-2xl shrink-0" aria-hidden="true" data-astro-cid-muobrt2o="true">
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
</svg> <span data-astro-cid-muobrt2o="">It’s so wonderful to talk</span> </div>  </div> <div class="container-site z-2 flex flex-col"> <div> <div class="text-ink/70 gap-x-md gap-y-sm mb-xl md:mb-3xl flex flex-wrap items-center"> <div class="flex items-center gap-1 text-small"> <span class="text-main font-semibold">4.6</span> <span class="relative inline-flex" role="img" aria-label="Rated 4.6 out of 5 on the App Store, (3,574)"> <span class="text-ink/30 -space-x-0.5 flex"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4.5 shrink-0" aria-hidden="true">
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
</p> <div data-modal-target="app-download" data-app-download-cta="true" class="inline-flex" data-appsflyer-url="https://getapp.rylo.com/4XoB/mw6qn6dr?af_js_web=true&amp;af_ss_ver=2_7_3&amp;pid=website&amp;rylo_af_map_version=rylo-af-map-v3-2026-06-30&amp;af_ss_gtm_ui=true"> <a href="/download" aria-label="Download for free" class="group relative inline-flex items-center justify-center rounded-small focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none h-button-main px-[clamp(1rem,0.7963rem_+_1.0186vw,1.713rem)]"><span aria-hidden="true" class="bg-accent group-hover:border-page/30 rounded-small ease-cubic-button absolute inset-0 border-0 border-transparent shadow-[0_8px_24px_#00000026,inset_0_0_0.5rem_#ffffff66] transition-[inset,background-color,border-color,border-width] duration-600 group-hover:inset-0.5 group-hover:border-2 group-hover:bg-[color-mix(in_srgb,var(--color-accent),white_20%)] motion-reduce:transition-none"></span><span aria-hidden="true" data-rolling-label="" class="text-ink-fixed relative z-10 flex overflow-hidden text-button"><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0s;">D</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.01s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.02s;">w</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.03s;">n</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.04s;">l</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.05s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.06s;">a</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.07s;">d</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none whitespace-pre" style="transition-delay: 0.08s;"> </span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.09s;">f</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.1s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.11s;">r</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none whitespace-pre" style="transition-delay: 0.12s;"> </span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.13s;">f</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.14s;">r</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.15s;">e</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.16s;">e</span></span></a> </div> </div> <div class="relative mx-auto aspect-square w-full max-w-288">  <img src="/_astro/cta-couple-phone.DDfwRSnv_Z1Q42Ao.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/cta-couple-phone.DDfwRSnv_ZFouwm.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 480w, /_astro/cta-couple-phone.DDfwRSnv_ZwXIT7.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 768w, /_astro/cta-couple-phone.DDfwRSnv_ESnGA.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1152w, /_astro/cta-couple-phone.DDfwRSnv_Z1Q42Ao.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 2000w" alt="Smiling woman in an orange knit sweater and clear-framed glasses, reading captions on her phone." loading="lazy" decoding="async" sizes="(min-width: 2000px) 2000px, 100vw" data-astro-image="constrained" data-astro-image-fit="cover" data-astro-image-pos="center" width="2000" height="2000" class="absolute inset-0 size-full object-cover"> </div> </div>   </section>
```

## Computed Styles
- **section.relative.overflow-clip** [1440×1683]: bg rgb(25, 20, 18); radius 79.9994px; pad 194.272px 0px 0px 0px; relative z2
- **section.relative.overflow-clip > img.pointer-events-none.absolute** [1440×1820]: max-w 100%; absolute z0 top -137.016px
- **div.pointer-events-none.absolute > div.text-ink.border-ink/10** [250×65]: bg oklab(0.999994 0.0000455678 0.0000200868 / 0.05); radius 15.9998px; border 2px solid oklab(0.973166 0.00403872 0.00540715 / 0.1); pad 16px 23.9998px 16px 23.9998px; flex row gap 8px items center; absolute top 419.312px bottom 19.7031px; transform matrix(1, 0.000174533, -0.000174533…
- **div.text-ink.border-ink/10 > span ("Hi, love! How are you?")** ×2 [150×18]: 13.9995px/600/18.1994px rgb(250, 245, 242)
- **div.pointer-events-none.absolute > div.text-ink.border-ink/10** [266×65]: bg oklab(0.999994 0.0000455678 0.0000200868 / 0.05); radius 15.9998px; border 2px solid oklab(0.973166 0.00403872 0.00540715 / 0.1); pad 16px 23.9998px 16px 23.9998px; flex row gap 8px items center; absolute top 231.328px bottom 207.688px; opacity 0; transform matrix(1, 0.000174533, -0.000174533…
- **section.relative.overflow-clip > div.container-site.z-2** [1280×1489]: mr 80px ml 80px; flex column; max-w 1440px; relative z2
- **div > div.text-ink/70.gap-x-md** [1280×21]: mb 47.9994px; flex row gap 12px 16px items center
- **div.text-ink/70.gap-x-md > div.flex.items-center** [147×21]: flex row gap 4px items center
- … +14 more styled nodes — resolve any node with `node scripts/resolve-walk.mjs` (JSON is ground truth)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
- **Speech Bubble Animation**: Speech bubbles float along curved path SVG over background with stagger.
- **Rating / Certification Badges**: 4.6 App Store stars rating, FCC Certified, 100% Private indicators.
- **Rolling Label CTA**: "Download for free" primary button with hover letter rolling animation.

## Per-State Content
- Single conversion banner state.

## Assets
- img cta-background.qn7Z5g_h_LDU9H.avif (1440×1820)
- img cta-couple-phone.DDfwRSnv_Z1Q42Ao.avif (1440×1440)

## Text Content
- Rating: "4.6 (3,574)"
- Badges: "Certified by FCC", "100% Private"
- h2: "Start captioning"
- p: "The completely free call captioning app making it easy to communicate with anyone, anywhere."
- cta: "Download for free"

## Responsive Behavior
- phone 390: section 390×750px; heading 43.5px; body 15.0619px; 2 cols (4 items, gap normal); pt 87.1417px, lh 19.5804px
- ipad 768: section 768×1075px; heading 62.4px; body 15.3994px; 2 cols (4 items, gap normal); pt 125.709px, lh 20.0193px
- pc 1440: section 1440×1683px; heading 96px; body 15.9995px; 2 cols (4 items, gap normal); pt 194.272px, lh 20.7994px
- change: heading size: 96px (pc) → 43.5px (phone)
- ipad matches pc layout
- exact per-property values: probe-start-captioning.json + responsive.json (ground truth)

## Notes
- Background image with couple holding phone overlay.
- Audio wave speech bubble decoration.

## Assets
- img cta-background.qn7Z5g_h_LDU9H.avif (1440×1819) → public/images/cta-background.qn7Z5g_h_LDU9H.avif
- img cta-couple-phone.DDfwRSnv_Z1Q42Ao.avif (1440×1440) alt "Smiling woman in an orange knit sweater…" → public/images/cta-couple-phone.DDfwRSnv_Z1Q42Ao.avif
- inline SVG ×3 — use/extend components in src/components/icons.tsx

## Text Content
- span: "Hi, love! How are you?"
- span: "It’s so wonderful to talk"
- span: "4.6"
- span: "(3,574)"
- span: "Certified by FCC"
- span: "100% Private"
- h2: "Start captioning"
- p: "The completely free call captioning app making it easy to communicate with anyone, anywhere."

## Responsive Behavior
- phone 390: section 390×726px; heading 43.5px; body 15.0619px; 1 col (3 items, gap normal); pt 87.1417px, lh 19.5804px
- ipad 768: section 768×1085px; heading 62.4px; body 15.3994px; 1 col (3 items, gap normal); pt 125.709px, lh 20.0193px
- pc 1440: section 1440×1683px; heading 96px; body 15.9995px; 1 col (3 items, gap normal); pt 194.272px, lh 20.7994px
- change: heading size: 96px (pc) → 43.5px (phone)
- ipad matches pc layout
- exact per-property values: probe-start-captioning.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
