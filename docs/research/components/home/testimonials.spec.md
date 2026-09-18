---
component: TestimonialsSection
target: src/components/TestimonialsSection.tsx
page: /
screenshot: docs/design-references/rylo.com/testimonials-pc.png
interaction_model: scroll-driven
states: default
assets: public/images/review-card-background.BtV5Zgng_19sRub.avif, public/images/review-foreground.dkrTfeEF_Z8BHYM.avif
responsive: phone, ipad, pc
---

# TestimonialsSection Specification

## DOM Structure
- section.relative.overflow-clip [1440×2350]
  - div.container-site.flex [1280×1884]
    - h2.text-display.text-trim — "Professionally recommended. Personally loved."
    - div.relative
      - div.pointer-events-none.absolute > svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString]
      - div.rounded-large.relative
        - img.pointer-events-none.absolute
        - div.pt-xl.px-xl
          - p.text-h3.text-trim — "“I’ve seen countless patients grow more confide…"
          - div.gap-md.flex
        - div.relative.z-1 > img.absolute.inset-0
    - div.mt-1.flex
      - ×2 div.relative.flex > div.flex
        - ×3 ul.flex.flex-wrap
  - div.pointer-events-none.absolute [1440×2350]

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<section data-surface="dark" data-section-parallax="" class="relative overflow-clip z-2 rounded-t-huge -mb-band-overlap pt-section-main pb-section-lg" style="will-change: transform; translate: none; rotate: none; scale: none; transform: translate(0px, 0px);">  <div class="container-site flex flex-col"> <h2 class="text-display text-trim mb-section-sm max-w-[20ch] text-balance">
Professionally recommended. Personally loved.
</h2> <div class="relative"> <div aria-hidden="true" data-path-draw="true" class="pointer-events-none absolute inset-x-0 z-1 bottom-[15%] flex justify-center lg:bottom-[10%]" data-astro-cid-r32rvswh="">  <svg viewBox="0 0 1616 261" preserveAspectRatio="none" fill="none" class="aspect-1616/261 w-[110vw]">
  <path data-path-line="" d="…" stroke="color-mix(in srgb, var(--marketing-light) 15%, transparent)" stroke-width="4" vector-effect="non-scaling-stroke" style="stroke-dashoffset: 0; stroke-dasharray: none;"></path>
</svg>  </div> <div class="rounded-large relative flex flex-col justify-end overflow-clip">  <img src="/_astro/review-card-background.BtV5Zgng_Z20XLis.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/review-card-background.BtV5Zgng_Z1OjjiD.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 640w, /_astro/review-card-background.BtV5Zgng_Z20nQvS.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 750w, /_astro/review-card-background.BtV5Zgng_MqUfN.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 828w, /_astro/review-card-background.BtV5Zgng_10tlOs.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1080w, /_astro/review-card-background.BtV5Zgng_Z2kaucI.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1280w, /_astro/review-card-background.BtV5Zgng_19sRub.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1668w, /_astro/review-card-background.BtV5Zgng_2lFIGy.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 2048w" alt="" aria-hidden="true" loading="eager" fetchpriority="low" decoding="async" sizes="100vw" data-astro-image="full-width" data-astro-image-fit="cover" data-astro-image-pos="center" width="2500" height="2250" class="pointer-events-none absolute z-0 w-full object-cover inset-x-0 bottom-0 min-h-full">   <div class="pt-xl px-xl z-2 sm:pt-3xl sm:px-3xl lg:absolute lg:top-3xl lg:left-3xl lg:p-0"> <p class="text-h3 text-trim mb-xl max-w-[25ch] text-balance">“I’ve seen countless patients grow more confident with themselves and in their relationships since using the Rylo app.”</p> <div class="gap-md flex items-center"> <span class="bg-accent text-card shadow-small size-3xl flex shrink-0 items-center justify-center rounded-full"> <svg viewBox="0 0 24 24" fill="none" class="size-lg" aria-hidden="true">
  <path fill-rule="evenodd" clip-rule="evenodd" d="…" fill="currentColor"></path>
</svg> </span> <div class="gap-xs flex flex-col"> <p class="text-h4 text-trim">Dr. Nissen</p> <p class="text-small text-trim">Associated Audiologists</p> </div> </div> </div> <div class="relative z-1 mx-auto aspect-square w-full max-w-256">  <img src="/_astro/review-foreground.dkrTfeEF_Z8BHYM.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/review-foreground.dkrTfeEF_Z1PFWfe.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 480w, /_astro/review-foreground.dkrTfeEF_1a8ux8.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 768w, /_astro/review-foreground.dkrTfeEF_43kxs.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1024w, /_astro/review-foreground.dkrTfeEF_Z8BHYM.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 2445w" alt="Smiling middle-aged man with short gray hair wearing round glasses and a light blue shirt." loading="lazy" decoding="async" sizes="(min-width: 2445px) 2445px, 100vw" data-astro-image="constrained" data-astro-image-fit="cover" data-astro-image-pos="center" width="2445" height="2445" class="absolute inset-0 size-full object-cover"> </div> </div> </div> <div class="mt-1 flex w-full flex-col items-center gap-1"> <div data-scroll-marquee="" data-scroll-marquee-direction="left" class="relative flex overflow-hidden w-screen"> <div data-scroll-marquee-track="" class="flex" style="margin-left: -5%; width: 110%; translate: none; rotate: none; scale: none; transform: translate(5vw, 0px);">  <ul data-scroll-marquee-list="" aria-label="App Store reviews" class="flex flex-wrap items-stretch" style="flex-wrap: nowrap; flex-shrink: 0; width: max-content; translate: none; rotate: none; scale: none; transform: translate(-26.9859%, 0%) translate3d(0px, 0px, 0px);"> <li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Best captioned calling app I have ever used and it simply couldn't be easier to set up and use!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Mary Beth Maynard</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">This app is excellent for those of us with hearing issues or difficulty hearing. It allows your cell phone to easily transcribe the incoming conversation.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Roger Guillaumes</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I love Rylo!!! I feel so independent. I am deaf, and it’s so easy to use. Thank you!!!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Cindy Stone</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Outstanding app. I've been wearing hearing aids the past 40 years. THIS IS THE BEST EVER. The transcribe function is amazingly accurate.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Doug Jones</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Outstanding app if you are hard of hearing. I highly recommend it - you won't be disappointed.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Charles Davis</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Absolutely an amazing app to have for my father who was very hard of hearing. Thank you for designing this app.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Maggie Botek</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">So far haven't missed a word since installing! This means everything to me and I cannot express my gratitude enough!!!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Wanda Craig</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I love that now I don't have to worry about missing any important information from anyone that I am speaking to because Rylo got my back.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Michelle Cha</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I am hard of hearing. If you have problems hearing this is the place to go. If I could give Rylo a 10 star I would.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Carolyn Narramore</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Easiest setup of any of the closed caption phone apps out there. This is a game changer. Don't mess with any of the others, this truly is the one you.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Kevin Ward</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Rylo has given me the confidence to be independent and handle phone calls that I always had to rely on others to do for me.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">E.E. Garcia</p> </div> </li> </ul> <ul data-scroll-marquee-list="" aria-label="App Store reviews" class="flex flex-wrap items-stretch" style="flex-wrap: nowrap; flex-shrink: 0; width: max-content; translate: none; rotate: none; scale: none; transform: translate(-26.9859%, 0%) translate3d(0px, 0px, 0px);" aria-hidden="true"> <li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Best captioned calling app I have ever used and it simply couldn't be easier to set up and use!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Mary Beth Maynard</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">This app is excellent for those of us with hearing issues or difficulty hearing. It allows your cell phone to easily transcribe the incoming conversation.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Roger Guillaumes</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I love Rylo!!! I feel so independent. I am deaf, and it’s so easy to use. Thank you!!!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Cindy Stone</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Outstanding app. I've been wearing hearing aids the past 40 years. THIS IS THE BEST EVER. The transcribe function is amazingly accurate.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Doug Jones</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Outstanding app if you are hard of hearing. I highly recommend it - you won't be disappointed.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Charles Davis</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Absolutely an amazing app to have for my father who was very hard of hearing. Thank you for designing this app.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Maggie Botek</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">So far haven't missed a word since installing! This means everything to me and I cannot express my gratitude enough!!!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Wanda Craig</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I love that now I don't have to worry about missing any important information from anyone that I am speaking to because Rylo got my back.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Michelle Cha</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I am hard of hearing. If you have problems hearing this is the place to go. If I could give Rylo a 10 star I would.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Carolyn Narramore</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Easiest setup of any of the closed caption phone apps out there. This is a game changer. Don't mess with any of the others, this truly is the one you.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Kevin Ward</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Rylo has given me the confidence to be independent and handle phone calls that I always had to rely on others to do for me.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">E.E. Garcia</p> </div> </li> </ul><ul data-scroll-marquee-list="" aria-label="App Store reviews" class="flex flex-wrap items-stretch" style="flex-wrap: nowrap; flex-shrink: 0; width: max-content; translate: none; rotate: none; scale: none; transform: translate(-26.9859%, 0%) translate3d(0px, 0px, 0px);" aria-hidden="true"> <li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Best captioned calling app I have ever used and it simply couldn't be easier to set up and use!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Mary Beth Maynard</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">This app is excellent for those of us with hearing issues or difficulty hearing. It allows your cell phone to easily transcribe the incoming conversation.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Roger Guillaumes</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I love Rylo!!! I feel so independent. I am deaf, and it’s so easy to use. Thank you!!!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Cindy Stone</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Outstanding app. I've been wearing hearing aids the past 40 years. THIS IS THE BEST EVER. The transcribe function is amazingly accurate.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Doug Jones</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Outstanding app if you are hard of hearing. I highly recommend it - you won't be disappointed.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Charles Davis</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Absolutely an amazing app to have for my father who was very hard of hearing. Thank you for designing this app.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Maggie Botek</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">So far haven't missed a word since installing! This means everything to me and I cannot express my gratitude enough!!!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Wanda Craig</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I love that now I don't have to worry about missing any important information from anyone that I am speaking to because Rylo got my back.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Michelle Cha</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I am hard of hearing. If you have problems hearing this is the place to go. If I could give Rylo a 10 star I would.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Carolyn Narramore</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Easiest setup of any of the closed caption phone apps out there. This is a game changer. Don't mess with any of the others, this truly is the one you.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Kevin Ward</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Rylo has given me the confidence to be independent and handle phone calls that I always had to rely on others to do for me.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">E.E. Garcia</p> </div> </li> </ul></div> </div><div data-scroll-marquee="" data-scroll-marquee-direction="right" class="relative flex overflow-hidden w-screen"> <div data-scroll-marquee-track="" class="flex" style="margin-left: -5%; width: 110%; translate: none; rotate: none; scale: none; transform: translate(-5vw, 0px);">  <ul data-scroll-marquee-list="" aria-label="More App Store reviews" class="flex flex-wrap items-stretch" style="flex-wrap: nowrap; flex-shrink: 0; width: max-content; translate: none; rotate: none; scale: none; transform: translate(-29.7749%, 0%) translate3d(0px, 0px, 0px);"> <li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Captioning is accurate! Customer service is amazing 👏</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Hannah Currier</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">It is an amazing app for me to communicateI I am able to read what people are saying.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Stacey Sumner</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Rylo is a lifesaver for me being deaf. I have a hard time communicating with people. I'm very grateful for the service to communicate.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Tom Allen</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I have severe hearing loss with a word recognition of 25-50%. I depend on Rylo, and it doesn't let me down. It's accurate, and its speed impresses me.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Ruth Griffith</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Great app with clearly read dictation script! Has definitely been a tremendous help to me as I am very hard of hearing &amp; wear hearing aids in both ears.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Katharine Hernden</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">This app has helped me become more confident talking on the phone. Now I don't have to wait til somebody is around me that can hear.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Michelle Lett</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">It is so nice to be able to have a phone conversation again. There is no lag in the transcription and the two party conversation is very natural.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Chris Dahl</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">BEST APP EVER FOR HEARING IMPAIRED! Easy to use and they keep adding more great features. You can't go wrong with this app. THANK YOU, RYLO!!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Lorita Mayor</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I installed this for my dad who is hearing impaired and it's life changing! The translations are totally accurate and any delay is slight, if at all.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Robert Kerns</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I have tried many apps for words to readable type transcriptions live. This is by far the best one. Many people with hearing disabilities will benefit from it.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Carolyn Porter</p> </div> </li> </ul> <ul data-scroll-marquee-list="" aria-label="More App Store reviews" class="flex flex-wrap items-stretch" style="flex-wrap: nowrap; flex-shrink: 0; width: max-content; translate: none; rotate: none; scale: none; transform: translate(-29.7749%, 0%) translate3d(0px, 0px, 0px);" aria-hidden="true"> <li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Captioning is accurate! Customer service is amazing 👏</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Hannah Currier</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">It is an amazing app for me to communicateI I am able to read what people are saying.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Stacey Sumner</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Rylo is a lifesaver for me being deaf. I have a hard time communicating with people. I'm very grateful for the service to communicate.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Tom Allen</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I have severe hearing loss with a word recognition of 25-50%. I depend on Rylo, and it doesn't let me down. It's accurate, and its speed impresses me.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Ruth Griffith</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Great app with clearly read dictation script! Has definitely been a tremendous help to me as I am very hard of hearing &amp; wear hearing aids in both ears.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Katharine Hernden</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">This app has helped me become more confident talking on the phone. Now I don't have to wait til somebody is around me that can hear.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Michelle Lett</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">It is so nice to be able to have a phone conversation again. There is no lag in the transcription and the two party conversation is very natural.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Chris Dahl</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">BEST APP EVER FOR HEARING IMPAIRED! Easy to use and they keep adding more great features. You can't go wrong with this app. THANK YOU, RYLO!!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Lorita Mayor</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I installed this for my dad who is hearing impaired and it's life changing! The translations are totally accurate and any delay is slight, if at all.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Robert Kerns</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I have tried many apps for words to readable type transcriptions live. This is by far the best one. Many people with hearing disabilities will benefit from it.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Carolyn Porter</p> </div> </li> </ul><ul data-scroll-marquee-list="" aria-label="More App Store reviews" class="flex flex-wrap items-stretch" style="flex-wrap: nowrap; flex-shrink: 0; width: max-content; translate: none; rotate: none; scale: none; transform: translate(-29.7749%, 0%) translate3d(0px, 0px, 0px);" aria-hidden="true"> <li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Captioning is accurate! Customer service is amazing 👏</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Hannah Currier</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">It is an amazing app for me to communicateI I am able to read what people are saying.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Stacey Sumner</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Rylo is a lifesaver for me being deaf. I have a hard time communicating with people. I'm very grateful for the service to communicate.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Tom Allen</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I have severe hearing loss with a word recognition of 25-50%. I depend on Rylo, and it doesn't let me down. It's accurate, and its speed impresses me.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Ruth Griffith</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Great app with clearly read dictation script! Has definitely been a tremendous help to me as I am very hard of hearing &amp; wear hearing aids in both ears.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Katharine Hernden</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">This app has helped me become more confident talking on the phone. Now I don't have to wait til somebody is around me that can hear.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Michelle Lett</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">It is so nice to be able to have a phone conversation again. There is no lag in the transcription and the two party conversation is very natural.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Chris Dahl</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">BEST APP EVER FOR HEARING IMPAIRED! Easy to use and they keep adding more great features. You can't go wrong with this app. THANK YOU, RYLO!!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Lorita Mayor</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I installed this for my dad who is hearing impaired and it's life changing! The translations are totally accurate and any delay is slight, if at all.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Robert Kerns</p> </div> </li><li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">I have tried many apps for words to readable type transcriptions live. This is by far the best one. Many people with hearing disabilities will benefit from it.</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg><svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
  <path d="…"></path>
</svg> </span> <p class="text-main text-trim">Carolyn Porter</p> </div> </li> </ul></div> </div> </div> </div>  <div aria-hidden="true" data-section-parallax-overlay="" class="pointer-events-none absolute inset-0 z-10 bg-black opacity-0" style="will-change: opacity; opacity: 0;"></div> </section>
```

## Computed Styles
- **section.relative.overflow-clip** [1440×2350]: bg rgb(25, 20, 18); radius 79.9994px 79.9994px 0px 0px; pad 194.272px 0px 272px 0px; mb -97.1338px; relative z2; transform matrix(1, 0, 0, 1, 0, 0)
- **section.relative.overflow-clip > div.container-site.flex** [1280×1884]: flex column; max-w 1440px; relative
- **div.container-site.flex > h2.text-display.text-trim ("Professionally recomm…")** [1220×253]: 96px/600/91.2px -3.84px rgb(250, 245, 242); mb 105.135px; max-w 1220px
- **div.relative > div.pointer-events-none.absolute** [1280×207]: flex row justify center; absolute z1 top 714.891px bottom 102.391px
- **div.relative > div.rounded-large.relative** [1280×1024]: radius 40px; flex column justify flex-end; relative
- **div.rounded-large.relative > img.pointer-events-none.absolute** [1280×1152]: max-w 100%; absolute z0 top -127.844px
- **div.pt-xl.px-xl > p.text-h3.text-trim ("“I’ve seen countless …")** [375×97]: 23.9998px/600/26.3998px -0.719995px rgb(250, 245, 242); mb 31.9998px; max-w 375px
- **div.pt-xl.px-xl > div.gap-md.flex** [375×48]: flex row gap 16px items center
- … +8 more styled nodes — resolve any node with `node scripts/resolve-walk.mjs` (JSON is ground truth)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
- **Scroll Marquee Animation**: Infinite horizontal scrolling marquee for customer reviews lists (`data-scroll-marquee-list`).
- **Feature Review Focus**: Centered doctor/audiologist quote card with portrait image and badge.

## Per-State Content
- N/A — continuous scroll marquee with multiple user review cards and doctor endorsement.

## Assets
- img review-card-background.BtV5Zgng_19sRub.avif (1440×1295) → public/images/review-card-background.BtV5Zgng_19sRub.avif
- img review-foreground.dkrTfeEF_Z8BHYM.avif (1440×1440) alt "Smiling middle-aged man with short gray…" → public/images/review-foreground.dkrTfeEF_Z8BHYM.avif
- inline SVG ×1 — use/extend components in src/components/icons.tsx

## Text Content
- h2: "Professionally recommended. Personally loved."
- p: "“I’ve seen countless patients grow more confident with themselves and in their relationships since using the Rylo app.”"

## Responsive Behavior
- phone 390: section 390×1380px; heading 43.5px; body 15.0619px; 11 cols (11 items, gap normal); pt 87.1417px, pb 122.001px, lh 19.5804px
- ipad 768: section 768×1898px; heading 62.4px; body 15.3994px; 11 cols (11 items, gap normal); pt 125.709px, pb 176.001px, lh 20.0193px
- pc 1440: section 1440×2350px; heading 96px; body 15.9995px; 11 cols (11 items, gap normal); pt 194.272px, pb 272px, lh 20.7994px
- change: heading size: 96px (pc) → 43.5px (phone)
- ipad matches pc layout
- exact per-property values: probe-testimonials.json + responsive.json (ground truth)

## Notes
- Reviews should be placed in `src/data/testimonials.ts` with reviewer name, review quote, star count (5).
- Infinite marquee can use CSS animation or translate loop.
