---
component: Section9Section
target: src/components/Section9Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-9-pc.png
interaction_model: static
states: default
assets: public/images/review-card-background.BtV5Zgng_19sRub.avif, public/images/review-foreground.dkrTfeEF_Z8BHYM.avif
responsive: phone, ipad, pc
---

# Section9Section Specification

## DOM Structure
- div.relative [1280×1024]
  - div.pointer-events-none.absolute > svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString] [1276×204]
  - div.rounded-large.relative [1280×1024]
    - img.pointer-events-none.absolute
    - div.pt-xl.px-xl
      - p.text-h3.text-trim — "“I’ve seen countless patients grow more confide…"
      - div.gap-md.flex
        - span.bg-accent.text-card > svg.[object.SVGAnimatedString] > path
        - div.gap-xs.flex
          - p.text-h4.text-trim — "Dr. Nissen"
          - p.text-small.text-trim — "Associated Audiologists"
    - div.relative.z-1 > img.absolute.inset-0

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<div class="relative"> <div aria-hidden="true" data-path-draw="true" class="pointer-events-none absolute inset-x-0 z-1 bottom-[15%] flex justify-center lg:bottom-[10%]" data-astro-cid-r32rvswh="">  <svg viewBox="0 0 1616 261" preserveAspectRatio="none" fill="none" class="aspect-1616/261 w-[110vw]">
  <path data-path-line="" d="…" stroke="color-mix(in srgb, var(--marketing-light) 15%, transparent)" stroke-width="4" vector-effect="non-scaling-stroke" style="stroke-dashoffset: 0; stroke-dasharray: none;"></path>
</svg>  </div> <div class="rounded-large relative flex flex-col justify-end overflow-clip">  <img src="/_astro/review-card-background.BtV5Zgng_Z20XLis.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/review-card-background.BtV5Zgng_Z1OjjiD.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 640w, /_astro/review-card-background.BtV5Zgng_Z20nQvS.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 750w, /_astro/review-card-background.BtV5Zgng_MqUfN.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 828w, /_astro/review-card-background.BtV5Zgng_10tlOs.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1080w, /_astro/review-card-background.BtV5Zgng_Z2kaucI.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1280w, /_astro/review-card-background.BtV5Zgng_19sRub.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1668w, /_astro/review-card-background.BtV5Zgng_2lFIGy.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 2048w" alt="" aria-hidden="true" loading="eager" fetchpriority="low" decoding="async" sizes="100vw" data-astro-image="full-width" data-astro-image-fit="cover" data-astro-image-pos="center" width="2500" height="2250" class="pointer-events-none absolute z-0 w-full object-cover inset-x-0 bottom-0 min-h-full">   <div class="pt-xl px-xl z-2 sm:pt-3xl sm:px-3xl lg:absolute lg:top-3xl lg:left-3xl lg:p-0"> <p class="text-h3 text-trim mb-xl max-w-[25ch] text-balance">“I’ve seen countless patients grow more confident with themselves and in their relationships since using the Rylo app.”</p> <div class="gap-md flex items-center"> <span class="bg-accent text-card shadow-small size-3xl flex shrink-0 items-center justify-center rounded-full"> <svg viewBox="0 0 24 24" fill="none" class="size-lg" aria-hidden="true">
  <path fill-rule="evenodd" clip-rule="evenodd" d="…" fill="currentColor"></path>
</svg> </span> <div class="gap-xs flex flex-col"> <p class="text-h4 text-trim">Dr. Nissen</p> <p class="text-small text-trim">Associated Audiologists</p> </div> </div> </div> <div class="relative z-1 mx-auto aspect-square w-full max-w-256">  <img src="/_astro/review-foreground.dkrTfeEF_Z8BHYM.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR" srcset="/_astro/review-foreground.dkrTfeEF_Z1PFWfe.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 480w, /_astro/review-foreground.dkrTfeEF_1a8ux8.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 768w, /_astro/review-foreground.dkrTfeEF_43kxs.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 1024w, /_astro/review-foreground.dkrTfeEF_Z8BHYM.avif?dpl=dpl_7oLfk1SKag5mwN8gXXB3UQDZL8JR 2445w" alt="Smiling middle-aged man with short gray hair wearing round glasses and a light blue shirt." loading="lazy" decoding="async" sizes="(min-width: 2445px) 2445px, 100vw" data-astro-image="constrained" data-astro-image-fit="cover" data-astro-image-pos="center" width="2445" height="2445" class="absolute inset-0 size-full object-cover"> </div> </div> </div>
```

## Computed Styles
- **div.relative** [1280×1024]: relative
- **div.relative > div.pointer-events-none.absolute** [1280×207]: flex row justify center; absolute z1 top 714.891px bottom 102.391px
- **div.relative > div.rounded-large.relative** [1280×1024]: radius 40px; flex column justify flex-end; relative
- **div.rounded-large.relative > img.pointer-events-none.absolute** [1280×1152]: max-w 100%; absolute z0 top -127.844px
- **div.pt-xl.px-xl > p.text-h3.text-trim ("“I’ve seen countless …")** [375×97]: 23.9998px/600/26.3998px -0.719995px rgb(250, 245, 242); mb 31.9998px; max-w 375px
- **div.pt-xl.px-xl > div.gap-md.flex** [375×48]: flex row gap 16px items center
- **div.gap-md.flex > span.bg-accent.text-card** [48×48]: bg rgb(255, 139, 43); radius 3.35544e+07px; shadow rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0,…; flex row justify center items center
- **div.gap-md.flex > div.gap-xs.flex** [168×33]: flex column gap 8px
- … +3 more styled nodes — resolve any node with `node scripts/resolve-walk.mjs` (JSON is ground truth)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- img review-card-background.BtV5Zgng_19sRub.avif (1440×1295) → public/images/review-card-background.BtV5Zgng_19sRub.avif
- img review-foreground.dkrTfeEF_Z8BHYM.avif (1440×1440) alt "Smiling middle-aged man with short gray…" → public/images/review-foreground.dkrTfeEF_Z8BHYM.avif
- inline SVG ×2 — use/extend components in src/components/icons.tsx

## Text Content
- p: "“I’ve seen countless patients grow more confident with themselves and in their relationships since using the Rylo app.”"
- p: "Dr. Nissen"
- p: "Associated Audiologists"

## Responsive Behavior
- phone 390: section 350×547px; body 15.0619px; 2 cols (3 items, gap normal)
- ipad 768: section 685×883px; body 15.3994px; 2 cols (3 items, gap normal)
- pc 1440: section 1280×1024px; body 15.9995px; 1 col (3 items, gap normal)
- change: columns: 1 (pc) → 2 (phone)
- ipad matches phone layout
- exact per-property values: probe-section-9.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
