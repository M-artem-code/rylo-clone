---
component: Section16Section
target: src/components/Section16Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-16-pc.png
interaction_model: static
states: default
assets: none
responsive: phone, ipad, pc
---

# Section16Section Specification

## DOM Structure
- section.relative.overflow-clip [1440×1224]
  - div.container-site.gap-section-sm [1280×847]
    - header
      - h2.text-display.text-trim — "Conversations"
      - p.text-large.text-trim — "Read the latest from our community"
    - div.grid.grid-cols-1
      - ×3 a.group.bg-page
        - div.relative.aspect-3/2
          - div.absolute.top-3 > span
          - div.relative.size-full > img
        - div.gap-3xl.py-xl
          - div
          - div.gap-2xl.flex
  - div.pointer-events-none.absolute [1440×1224]

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<section data-surface="light" data-section-parallax="" class="relative overflow-clip z-2 rounded-t-huge -mb-band-overlap bg-card pt-section-sm pb-section-lg" style="will-change: transform; translate: none; rotate: none; scale: none; transform: translate(0px, 0px);">  <div class="container-site gap-section-sm flex flex-col"> <header> <h2 class="text-display text-trim max-w-[20ch] text-balance">Conversations</h2> <p class="text-large text-trim mt-4xl max-w-[60ch]">Read the latest from our community</p> </header> <div class="grid grid-cols-1 gap-1 md:grid-cols-3"> <a href="/post/how-to-call-a-deaf-person-on-the-phone" aria-labelledby="blog-card-how-to-call-a-deaf-person-on-the-phone" class="group bg-page rounded-large focus-visible:ring-ink/40 relative flex h-full w-full flex-col p-1 focus-visible:ring-2 focus-visible:outline-none"> <div class="relative aspect-3/2 w-full transition-[padding] duration-600 group-hover:p-1 motion-reduce:transition-none"> <div class="absolute top-3 left-3 z-1 lg:top-5 lg:left-5"> <span class="bg-accent-secondary text-ink-fixed text-main text-trim border-page/30 rounded-full border p-sm"> Deaf Culture </span> </div> <div class="relative size-full overflow-hidden rounded-[clamp(1.25rem,0.9643rem_+_1.4286vw,2.25rem)]">  <img src="/_astro/blog-how-to-call-a-deaf-person-on-the-phone.BL0W2BRJ_Z2ncxxf.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/blog-how-to-call-a-deaf-person-on-the-phone.BL0W2BRJ_1yjRg2.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 400w, /_astro/blog-how-to-call-a-deaf-person-on-the-phone.BL0W2BRJ_2aFsaC.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 640w, /_astro/blog-how-to-call-a-deaf-person-on-the-phone.BL0W2BRJ_IgyYE.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 900w" alt="A person holding a smartphone to their ear during a captioned call." loading="lazy" decoding="async" sizes="(min-width: 1999px) 1999px, 100vw" data-astro-image="constrained" data-astro-image-fit="cover" data-astro-image-pos="center" width="1999" height="1141" class="size-full object-cover transition-[scale] duration-600 group-hover:scale-110 motion-reduce:transition-none"> </div> </div> <div class="gap-3xl py-xl px-lg flex flex-1 flex-col justify-between lg:py-2xl lg:px-xl"> <div> <p id="blog-card-how-to-call-a-deaf-person-on-the-phone" class="text-h3 text-trim mb-md text-balance">How to Call a Deaf Person on the Phone: The Complete 2026 Guide</p> <p class="text-main text-ink/70 line-clamp-3">Need to call a deaf person on the phone? Learn how 711 relay services, VRS, captioned phones, and apps like Nagish make communication simple in 2026.</p> </div> <div class="gap-2xl flex w-full items-center justify-between"> <p class="text-footnote text-trim text-ink/70">June 12, 2026</p> <div aria-hidden="true" class="gap-xs flex items-center"> <span class="text-main leading-[0.95]">Read</span> <span class="bg-ink text-page group-hover:bg-accent group-hover:text-ink-fixed flex size-7 items-center justify-center rounded-full transition-colors duration-300 motion-reduce:transition-none"> <svg viewBox="0 0 20 20" fill="none" class="w-[60%]">
  <path d="…" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg> </span> </div> </div> </div> </a><a href="/post/how-to-sign-deaf-in-asl" aria-labelledby="blog-card-how-to-sign-deaf-in-asl" class="group bg-page rounded-large focus-visible:ring-ink/40 relative flex h-full w-full flex-col p-1 focus-visible:ring-2 focus-visible:outline-none"> <div class="relative aspect-3/2 w-full transition-[padding] duration-600 group-hover:p-1 motion-reduce:transition-none"> <div class="absolute top-3 left-3 z-1 lg:top-5 lg:left-5"> <span class="bg-accent-secondary text-ink-fixed text-main text-trim border-page/30 rounded-full border p-sm"> Deaf Culture </span> </div> <div class="relative size-full overflow-hidden rounded-[clamp(1.25rem,0.9643rem_+_1.4286vw,2.25rem)]">  <img src="/_astro/blog-how-to-sign-deaf-in-asl.BaKUCYa7_2uPPQx.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/blog-how-to-sign-deaf-in-asl.BaKUCYa7_ZDSnrT.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 400w, /_astro/blog-how-to-sign-deaf-in-asl.BaKUCYa7_2lGdK7.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 640w, /_astro/blog-how-to-sign-deaf-in-asl.BaKUCYa7_Z1p1F5X.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 900w" alt="A classroom demonstration of the American Sign Language sign for “deaf”." loading="lazy" decoding="async" sizes="(min-width: 2000px) 2000px, 100vw" data-astro-image="constrained" data-astro-image-fit="cover" data-astro-image-pos="center" width="2000" height="1200" class="size-full object-cover transition-[scale] duration-600 group-hover:scale-110 motion-reduce:transition-none"> </div> </div> <div class="gap-3xl py-xl px-lg flex flex-1 flex-col justify-between lg:py-2xl lg:px-xl"> <div> <p id="blog-card-how-to-sign-deaf-in-asl" class="text-h3 text-trim mb-md text-balance">How to Sign "Deaf" in ASL</p> <p class="text-main text-ink/70 line-clamp-3">Want to learn how to sign "deaf" in ASL? Follow step-by-step instructions, see accepted variations, avoid common mistakes, and understand Deaf culture.</p> </div> <div class="gap-2xl flex w-full items-center justify-between"> <p class="text-footnote text-trim text-ink/70">June 11, 2026</p> <div aria-hidden="true" class="gap-xs flex items-center"> <span class="text-main leading-[0.95]">Read</span> <span class="bg-ink text-page group-hover:bg-accent group-hover:text-ink-fixed flex size-7 items-center justify-center rounded-full transition-colors duration-300 motion-reduce:transition-none"> <svg viewBox="0 0 20 20" fill="none" class="w-[60%]">
  <path d="…" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg> </span> </div> </div> </div> </a><a href="/post/how-to-know-if-youre-going-deaf-in-one-ear" aria-labelledby="blog-card-how-to-know-if-youre-going-deaf-in-one-ear" class="group bg-page rounded-large focus-visible:ring-ink/40 relative flex h-full w-full flex-col p-1 focus-visible:ring-2 focus-visible:outline-none"> <div class="relative aspect-3/2 w-full transition-[padding] duration-600 group-hover:p-1 motion-reduce:transition-none"> <div class="absolute top-3 left-3 z-1 lg:top-5 lg:left-5"> <span class="bg-accent-secondary text-ink-fixed text-main text-trim border-page/30 rounded-full border p-sm"> Hearing Loss </span> </div> <div class="relative size-full overflow-hidden rounded-[clamp(1.25rem,0.9643rem_+_1.4286vw,2.25rem)]">  <img src="/_astro/blog-how-to-know-if-youre-going-deaf-in-one-ear.BXSX73zv_ZLJuTH.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/blog-how-to-know-if-youre-going-deaf-in-one-ear.BXSX73zv_GeV7k.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 400w, /_astro/blog-how-to-know-if-youre-going-deaf-in-one-ear.BXSX73zv_Z1LlrdJ.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 640w, /_astro/blog-how-to-know-if-youre-going-deaf-in-one-ear.BXSX73zv_lpmBq.webp?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 900w" alt="A person leaning in to listen, a hand cupped behind one ear." loading="lazy" decoding="async" sizes="(min-width: 1999px) 1999px, 100vw" data-astro-image="constrained" data-astro-image-fit="cover" data-astro-image-pos="center" width="1999" height="1311" class="size-full object-cover transition-[scale] duration-600 group-hover:scale-110 motion-reduce:transition-none"> </div> </div> <div class="gap-3xl py-xl px-lg flex flex-1 flex-col justify-between lg:py-2xl lg:px-xl"> <div> <p id="blog-card-how-to-know-if-youre-going-deaf-in-one-ear" class="text-h3 text-trim mb-md text-balance">How to Know If You're Going Deaf in One Ear: Common Signs, Causes, and What to Do Next</p> <p class="text-main text-ink/70 line-clamp-3">Wondering if you're going deaf in one ear? Learn the early signs of single-sided hearing loss, common causes, when it's an emergency, and what to do next.</p> </div> <div class="gap-2xl flex w-full items-center justify-between"> <p class="text-footnote text-trim text-ink/70">June 11, 2026</p> <div aria-hidden="true" class="gap-xs flex items-center"> <span class="text-main leading-[0.95]">Read</span> <span class="bg-ink text-page group-hover:bg-accent group-hover:text-ink-fixed flex size-7 items-center justify-center rounded-full transition-colors duration-300 motion-reduce:transition-none"> <svg viewBox="0 0 20 20" fill="none" class="w-[60%]">
  <path d="…" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg> </span> </div> </div> </div> </a> </div> </div>  <div aria-hidden="true" data-section-parallax-overlay="" class="pointer-events-none absolute inset-0 z-10 bg-black opacity-0" style="will-change: opacity; opacity: 0;"></div> </section>
```

## Computed Styles
- **section.relative.overflow-clip** [1440×1224]: bg rgb(238, 231, 225); radius 79.9994px 79.9994px 0px 0px; pad 105.135px 0px 272px 0px; mb -97.1338px; relative z2; transform matrix(1, 0, 0, 1, 0, 0)
- **section.relative.overflow-clip > div.container-site.gap-section-sm** [1280×847]: mr 80px ml 80px; flex column gap 105.135px; max-w 1440px; relative
- **header > h2.text-display.text-trim ("Conversations")** [1220×71]: 96px/600/91.2px -3.84px rgb(25, 20, 18); max-w 1220px
- **header > p.text-large.text-trim ("Read the latest from …")** [840×16]: 21.9998px/400/32.9998px rgb(25, 20, 18); mt 64px; max-w 840px
- **div.container-site.gap-section-sm > div.grid.grid-cols-1** [1280×590]: grid cols [424px 424px 424px] gap 4px
- **div.grid.grid-cols-1 > a.group.bg-page** ×3 [424×590]: bg rgb(250, 245, 242); radius 40px; pad 4px 4px 4px 4px; flex column; relative
- **div.relative.aspect-3/2 > div.relative.size-full** ×3 [416×277]: radius 36px; relative
- **a.group.bg-page > div.gap-3xl.py-xl** ×3 [416×305]: pad 39.9995px 31.9998px 39.9995px 31.9998px; flex column gap 47.9994px justify space-between
- … +2 more styled nodes — resolve any node with `node scripts/resolve-walk.mjs` (JSON is ground truth)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
- h2: "Conversations"
- p: "Read the latest from our community"

## Responsive Behavior
- phone 390: section 390×1745px; heading 43.5px; body 15.0619px; 1 col (3 items, gap 4px)
- ipad 768: section 768×919px; heading 62.4px; body 15.3994px; 3 cols (3 items, gap 4px)
- pc 1440: section 1440×1224px; heading 96px; body 15.9995px; 3 cols (3 items, gap 4px)
- change: columns: 3 (pc) → 1 (phone)
- change: grid-template columns: 3 (pc) → 1 (phone)
- change: heading size: 96px (pc) → 43.5px (phone)
- ipad matches pc layout
- exact per-property values: probe-section-16.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
