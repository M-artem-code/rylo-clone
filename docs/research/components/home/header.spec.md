---
component: SiteHeader
target: src/components/SiteHeader.tsx
page: /
screenshot: docs/design-references/rylo.com/header-pc.png
interaction_model: mixed
states: default, mobile-menu-open
assets: none
responsive: phone, ipad, pc
---

# SiteHeader Specification

## DOM Structure
- header.pointer-events-none.fixed > div.px-margin.pt-md > div.max-w-site.rounded-regular [1280×69]
  - span.bg-ink/5.rounded-regular [1278×67]
  - div.relative.z-30 [1254×51]
    - a.text-ink.focus-visible:ring-ink/40 > span.block.[&>svg]:h-auto > svg
    - div.flex.items-center
      - nav.group/navigation-menu.relative > ul
      - span.contents > a
  - div.relative.z-30 [0×0]
    - a.text-ink.focus-visible:ring-ink/40 > span.block.[&>svg]:h-auto > svg
    - button.text-ink.focus-visible:ring-ink/40
      - ×3 span.bg-ink.h-[1.5px]

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<header data-theme-nav="dark" class="pointer-events-none fixed inset-x-0 top-0 z-50 ease-cubic-default transition-[transform,translate,visibility] duration-1000 motion-reduce:transition-none nav-hidden:-translate-y-full nav-hidden:invisible toc-scrub:-translate-y-full toc-scrub:invisible"><div class="px-margin pt-md relative"><div class="max-w-site rounded-regular p-xs pl-md border-hairline ease-cubic-default pointer-events-auto relative mx-auto flex w-full items-center border transition-[color,border-color] duration-400 motion-reduce:transition-none"><span aria-hidden="true" class="bg-ink/5 rounded-regular ease-cubic-default pointer-events-none absolute inset-0 z-10 backdrop-blur-lg transition-[background-color] duration-400 motion-reduce:transition-none"></span><div class="relative z-30 hidden w-full items-center justify-between gap-4 lg:flex"><a href="/" aria-label="Home Page" class="text-ink focus-visible:ring-ink/40 w-nav-logo flex shrink-0 items-center focus-visible:ring-2 focus-visible:outline-none"><span aria-hidden="true" class="block [&amp;&gt;svg]:h-auto [&amp;&gt;svg]:w-full w-full"><svg viewBox="0 0 100 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="…" fill="var(--marketing-accent)"></path>
  <path d="…" fill="var(--marketing-accent)"></path>
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
</svg>
</span></a><div class="flex items-center gap-4"><nav data-slot="navigation-menu" aria-label="Main" class="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center"><ul data-slot="navigation-menu-list" class="group flex flex-1 list-none items-center justify-center gap-0"><li data-slot="navigation-menu-item" class="relative"><button type="button" aria-disabled="false" tabindex="0" aria-expanded="false" data-base-ui-navigation-menu-trigger="" data-slot="navigation-menu-trigger" class="group/navigation-menu-trigger inline-flex h-button-main w-max items-center justify-center gap-1 rounded-regular px-md text-nav text-ink transition-all outline-none hover:bg-ink/10 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[popup-open]:bg-ink/10 data-[open]:bg-ink/10 group">Products<span aria-hidden="true" class="block [&amp;&gt;svg]:size-full size-3"><svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="…" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</span></button></li><li data-slot="navigation-menu-item" class="relative"><button type="button" aria-disabled="false" tabindex="0" aria-expanded="false" data-base-ui-navigation-menu-trigger="" data-slot="navigation-menu-trigger" class="group/navigation-menu-trigger inline-flex h-button-main w-max items-center justify-center gap-1 rounded-regular px-md text-nav text-ink transition-all outline-none hover:bg-ink/10 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[popup-open]:bg-ink/10 data-[open]:bg-ink/10 group">Resources<span aria-hidden="true" class="block [&amp;&gt;svg]:size-full size-3"><svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="…" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</span></button></li><li data-slot="navigation-menu-item" class="relative"><button type="button" aria-disabled="false" tabindex="0" aria-expanded="false" data-base-ui-navigation-menu-trigger="" data-slot="navigation-menu-trigger" class="group/navigation-menu-trigger inline-flex h-button-main w-max items-center justify-center gap-1 rounded-regular px-md text-nav text-ink transition-all outline-none hover:bg-ink/10 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[popup-open]:bg-ink/10 data-[open]:bg-ink/10 group">Company<span aria-hidden="true" class="block [&amp;&gt;svg]:size-full size-3"><svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="…" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</span></button></li><li data-slot="navigation-menu-item" class="relative"><a data-slot="navigation-menu-link" href="/contact" class="rounded-xl px-4 py-3 data-[active]:bg-card [&amp;_svg:not([class*='size-'])]:size-4 group/navigation-menu-trigger inline-flex h-button-main w-max items-center justify-center gap-1 rounded-regular px-md text-nav text-ink transition-all outline-none hover:bg-ink/10 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[popup-open]:bg-ink/10 data-[open]:bg-ink/10">Support</a></li><li data-slot="navigation-menu-item" class="relative"><a data-slot="navigation-menu-link" href="/audiologist-hub" class="rounded-xl px-4 py-3 data-[active]:bg-card [&amp;_svg:not([class*='size-'])]:size-4 group/navigation-menu-trigger inline-flex h-button-main w-max items-center justify-center gap-1 rounded-regular px-md text-nav text-ink transition-all outline-none hover:bg-ink/10 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[popup-open]:bg-ink/10 data-[open]:bg-ink/10">For Audiologists</a></li></ul></nav><span data-modal-target="app-download" data-app-download-cta="true" class="contents" data-appsflyer-url="https://getapp.rylo.com/4XoB/mw6qn6dr?af_js_web=true&amp;af_ss_ver=2_7_3&amp;pid=website&amp;rylo_af_map_version=rylo-af-map-v3-2026-06-30&amp;af_ss_gtm_ui=true"><a href="/download" aria-label="Download" class="group relative inline-flex items-center justify-center rounded-small focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none h-button-main px-[clamp(1rem,0.7963rem_+_1.0186vw,1.713rem)]"><span aria-hidden="true" class="bg-accent group-hover:border-page/30 rounded-small ease-cubic-button absolute inset-0 border-0 border-transparent shadow-[0_8px_24px_#00000026,inset_0_0_0.5rem_#ffffff66] transition-[inset,background-color,border-color,border-width] duration-600 group-hover:inset-0.5 group-hover:border-2 group-hover:bg-[color-mix(in_srgb,var(--color-accent),white_20%)] motion-reduce:transition-none"></span><span aria-hidden="true" data-rolling-label="" class="text-ink-fixed relative z-10 flex overflow-hidden text-button"><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0s;">D</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.01s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.02s;">w</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.03s;">n</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.04s;">l</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.05s;">o</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.06s;">a</span><span class="ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none" style="transition-delay: 0.07s;">d</span></span></a></span></div></div><div class="relative z-30 flex w-full items-center justify-between lg:hidden"><a href="/" aria-label="Home Page" class="text-ink focus-visible:ring-ink/40 w-nav-logo flex shrink-0 items-center focus-visible:ring-2 focus-visible:outline-none"><span aria-hidden="true" class="block [&amp;&gt;svg]:h-auto [&amp;&gt;svg]:w-full w-full"><svg viewBox="0 0 100 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="…" fill="var(--marketing-accent)"></path>
  <path d="…" fill="var(--marketing-accent)"></path>
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
</svg>
</span></a><button type="button" aria-label="Menu" aria-expanded="false" aria-controls="mobile-nav-menu" class="text-ink focus-visible:ring-ink/40 mr-sm flex h-10 w-10 flex-col items-center justify-center gap-[6.5px] rounded-xl focus-visible:ring-2 focus-visible:outline-none"><span class="bg-ink h-[1.5px] w-6 origin-center rounded transition-[transform,opacity] duration-400 ease-cubic-default motion-reduce:transition-none"></span><span class="bg-ink h-[1.5px] w-6 origin-center rounded transition-[transform,opacity] duration-400 ease-cubic-default motion-reduce:transition-none"></span><span class="bg-ink h-[1.5px] w-6 origin-center rounded transition-[transform,opacity] duration-400 ease-cubic-default motion-reduce:transition-none"></span></button></div></div></div></header>
```

## Computed Styles
- **header.pointer-events-none.fixed** [1440×85]: fixed z50 bottom 814.594px
- **div.px-margin.pt-md > div.max-w-site.rounded-regular** [1280×69]: radius 15.9998px; border 1px solid color(srgb 0.980392 0.960784 0.94902 / 0.1); pad 8px 8px 8px 16px; flex row items center; max-w 1440px; relative
- **div.max-w-site.rounded-regular > span.bg-ink/5.rounded-regular** [1278×67]: bg oklab(0.973166 0.00403872 0.00540715 / 0.05); radius 15.9998px; absolute z10
- **div.max-w-site.rounded-regular > div.relative.z-30** [1254×51]: flex row gap 16px justify space-between items center; relative z30
- **div.relative.z-30 > a.text-ink.focus-visible:ring-ink/40** ×2 [109×36]: flex row items center
- **div.relative.z-30 > div.flex.items-center** [745×51]: flex row gap 16px items center
- **div.flex.items-center > nav.group/navigation-menu.relative** [592×51]: flex row justify center items center; max-w max-content; relative
- **div.relative.z-30 > button.text-ink.focus-visible:ring-ink/40** [0×0]: radius 12px; mr 12px; flex column gap 6.5px justify center items center
- … +1 more styled nodes — resolve any node with `node scripts/resolve-walk.mjs` (JSON is ground truth)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
- **Mobile Menu Toggle**: Trigger: click on hamburger button on mobile (<1024px); State A: menu closed; State B: mobile navigation dropdown rendered/visible; Transition: CSS opacity/transform duration-300.
- **Rolling Label CTA**: Trigger: hover/focus on Download button; State A: label in place; State B: letters translateY(-100%) with rolling text shadow offset; Transition: transition-transform duration-600 with staggered delays.
- **Scroll Stickiness**: Floating navbar with backdrop-blur pill fixed at page top with z-index 50.

## Per-State Content
- `default`: Desktop inline nav menu (Products, Resources, Company, Support, For Audiologists) + Download CTA. On mobile, Rylo logo + Download button + hamburger menu button.
- `mobile-menu-open`: Dropdown menu overlay containing all navigation links.

## Assets
None — text and CSS only.

## Text Content
- Links: Products, Resources, Company, Support, For Audiologists, Download

## Responsive Behavior
- phone 390: section 390×68px; body 15.0619px; 1 col (6 items, gap 4px); lh 19.5804px
- ipad 768: section 768×70px; body 15.3994px; 1 col (6 items, gap 4px); lh 20.0193px
- pc 1440: section 1440×85px; body 15.9995px; 5 cols (5 items, gap 0px); lh 20.7994px
- change: columns: 5 (pc) → 1 (phone)
- change: flex direction: row (pc) → column (phone)
- ipad matches phone layout
- exact per-property values: probe-header.json + responsive.json (ground truth)

## Notes
- Already implemented as shared chrome component `SiteHeader` in `src/components/header.tsx`.
- Data extracted into `src/data/navigation.ts`.
