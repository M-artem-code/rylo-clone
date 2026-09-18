---
component: SiteFooter
target: src/components/SiteFooter.tsx
page: /
screenshot: docs/design-references/rylo.com/footer-pc.png
interaction_model: static
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
---

# SiteFooter Specification

## DOM Structure
- footer.-mt-band-overlap.relative [1440×1599]
  - div.container-site.flex [1280×1599]
    - ul.grid.w-full
      - ×4 li.rounded-large.bg-card > a.flex.h-full
        - span.flex.size-3xl > svg
        - span.text-h3.text-trim — "Phone Call Captioning"
    - div.grid.grid-cols-1
      - ×3 div.flex.flex-col
        - h2.text-h6.text-trim — "Resources"
        - ul.flex.flex-col
          - ×3 li > a
    - div.max-w-full > svg.[object.SVGAnimatedString]
      - ×6 path.[object.SVGAnimatedString]
    - div
      - div.mb-lg.flex
        - div.flex.flex-wrap
          - p.text-footnote.text-trim — "© Rylo. All rights reserved."
          - ul.group.flex
- … truncated — full tree in the section JSON (ground truth)

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<footer data-surface="dark" data-footer-parallax="" class="-mt-band-overlap relative overflow-hidden"> <div data-footer-parallax-inner="" class="container-site flex flex-col gap-section-sm pt-section-lg pb-section-sm" style="will-change: transform; translate: none; rotate: none; scale: none; transform: translate(0%, -25%);"> <ul role="list" class="grid w-full grid-cols-1 gap-1 @2xl:grid-cols-2"> <li class="rounded-large bg-card transition-[background-color,color] duration-300 ease-cubic-default motion-reduce:transition-none hover:bg-ink hover:text-page"> <a href="/" class="flex h-full items-center gap-md rounded-large px-2xl py-xl focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"> <span class="flex size-3xl shrink-0 items-center justify-center text-accent"> <svg viewBox="0 0 96 96" fill="none" slot="icon" class="w-full" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
</svg> </span> <span class="text-h3 text-trim min-w-0">Phone Call Captioning</span> </a> </li><li class="rounded-large bg-card transition-[background-color,color] duration-300 ease-cubic-default motion-reduce:transition-none hover:bg-ink hover:text-page"> <a href="/live-transcribe" class="flex h-full items-center gap-md rounded-large px-2xl py-xl focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"> <span class="flex size-3xl shrink-0 items-center justify-center text-accent"> <svg viewBox="-75.5 -36 257 257" fill="none" slot="icon" class="w-full" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
</svg> </span> <span class="text-h3 text-trim min-w-0">Live Transcribe</span> </a> </li><li class="rounded-large bg-card transition-[background-color,color] duration-300 ease-cubic-default motion-reduce:transition-none hover:bg-ink hover:text-page"> <a href="/sidekick" class="flex h-full items-center gap-md rounded-large px-2xl py-xl focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"> <span class="flex size-3xl shrink-0 items-center justify-center text-accent"> <svg viewBox="0 0 48 48" fill="none" slot="icon" class="w-full" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
</svg> </span> <span class="text-h3 text-trim min-w-0">Sidekick for Mac</span> </a> </li><li class="rounded-large bg-card transition-[background-color,color] duration-300 ease-cubic-default motion-reduce:transition-none hover:bg-ink hover:text-page"> <a href="/sign" class="flex h-full items-center gap-md rounded-large px-2xl py-xl focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"> <span class="flex size-3xl shrink-0 items-center justify-center text-accent"> <svg viewBox="0 0 48 48" fill="none" slot="icon" class="w-full" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
</svg> </span> <span class="text-h3 text-trim min-w-0">Sign</span> </a> </li> </ul> <div class="grid grid-cols-1 gap-x-gutter gap-y-4xl md:grid-cols-3"> <div class="flex flex-col"> <h2 class="text-h6 text-trim mb-lg uppercase opacity-50">Resources</h2> <ul role="list" class="flex flex-col items-start"> <li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="/blog"> Blog </a> </li><li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="https://rylo.com/hearing-test/" target="_blank" rel="noopener noreferrer"> Free Hearing Test </a> </li><li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="/audiologist-hub"> Audiologist Hub </a> </li> </ul> </div><div class="flex flex-col"> <h2 class="text-h6 text-trim mb-lg uppercase opacity-50">Support</h2> <ul role="list" class="flex flex-col items-start"> <li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="/contact"> Contact </a> </li><li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="https://help.rylo.com/en/" target="_blank" rel="noopener noreferrer"> Help Center </a> </li> </ul> </div><div class="flex flex-col"> <h2 class="text-h6 text-trim mb-lg uppercase opacity-50">Company</h2> <ul role="list" class="flex flex-col items-start"> <li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="/about"> About </a> </li><li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="/careers"> Careers </a> </li> </ul> </div> </div> <div class="max-w-full"> <svg viewBox="0 0 100 33" fill="none" class="w-full" aria-hidden="true">
  <path d="…" fill="var(--marketing-accent)"></path>
  <path d="…" fill="var(--marketing-accent)"></path>
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
  <path d="…" fill="currentColor"></path>
</svg> </div> <div> <div class="mb-lg flex flex-wrap items-center justify-between gap-x-2xl gap-y-lg"> <div class="flex flex-wrap items-center gap-lg"> <p class="text-footnote text-trim">
© <span data-current-year="">2026</span> Rylo. All rights reserved.
</p> <ul role="list" class="group flex flex-wrap items-center gap-lg"> <li class="flex transition-opacity duration-300 ease-[ease] motion-reduce:transition-none group-has-[:hover]:not-hover:opacity-50"> <a class="text-footnote rounded-small -my-2 inline-flex items-center gap-xs py-2 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none" href="/legal/privacy"> <span class="text-trim">Privacy</span>  </a> </li><li class="flex transition-opacity duration-300 ease-[ease] motion-reduce:transition-none group-has-[:hover]:not-hover:opacity-50"> <a class="text-footnote rounded-small -my-2 inline-flex items-center gap-xs py-2 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none" href="/legal/terms"> <span class="text-trim">Terms</span>  </a> </li><li class="flex transition-opacity duration-300 ease-[ease] motion-reduce:transition-none group-has-[:hover]:not-hover:opacity-50"> <a class="text-footnote rounded-small -my-2 inline-flex items-center gap-xs py-2 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none" href="/legal/terms#annex-1-rylo-e911-services"> <span class="text-trim">911 Notice</span>  </a> </li><li class="flex transition-opacity duration-300 ease-[ease] motion-reduce:transition-none group-has-[:hover]:not-hover:opacity-50"> <a class="text-footnote rounded-small -my-2 inline-flex items-center gap-xs py-2 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none" href="/legal/accessibility"> <span class="text-trim">Accessibility</span>  </a> </li><li class="flex transition-opacity duration-300 ease-[ease] motion-reduce:transition-none group-has-[:hover]:not-hover:opacity-50"> <a class="text-footnote rounded-small -my-2 inline-flex items-center gap-xs py-2 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none" href="/legal/google-user-data"> <span class="text-trim">Google User Data</span>  </a> </li><li class="flex transition-opacity duration-300 ease-[ease] motion-reduce:transition-none group-has-[:hover]:not-hover:opacity-50"> <a class="text-footnote rounded-small -my-2 inline-flex items-center gap-xs py-2 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none" href="https://rylostatus.com/" target="_blank" rel="noopener noreferrer"> <span class="text-trim">Status</span>  </a> </li><li class="flex transition-opacity duration-300 ease-[ease] motion-reduce:transition-none group-has-[:hover]:not-hover:opacity-50"> <a class="text-footnote rounded-small -my-2 inline-flex items-center gap-xs py-2 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none" href="/legal/privacy#cookies-and-other-information-collected-by-automated-means" data-cookie-settings=""> <span class="text-trim">Your Privacy Choices</span> <svg viewBox="0 0 30 14" class="h-auto w-10" aria-hidden="true">
  <path fill="#fff" fill-rule="evenodd" clip-rule="evenodd" d="…"></path>
  <path fill="#06f" fill-rule="evenodd" clip-rule="evenodd" d="…"></path>
  <path fill="#fff" d="…"></path>
  <path fill="#06f" d="…"></path>
</svg> </a> </li> </ul> </div> <ul role="list" class="flex flex-wrap gap-md"> <li> <a class="-m-2.5 flex items-center justify-center rounded-small p-2.5 opacity-50 transition-opacity duration-300 ease-[ease] motion-reduce:transition-none hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none" href="https://x.com/RyloHQ" target="_blank" rel="noopener noreferrer" aria-label="Rylo on X"> <svg viewBox="0 0 24 24" fill="none" class="size-lg" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
</svg> </a> </li><li> <a class="-m-2.5 flex items-center justify-center rounded-small p-2.5 opacity-50 transition-opacity duration-300 ease-[ease] motion-reduce:transition-none hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none" href="https://www.linkedin.com/company/rylohq" target="_blank" rel="noopener noreferrer" aria-label="Rylo on LinkedIn"> <svg viewBox="0 0 24 24" fill="none" class="size-lg" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
</svg> </a> </li><li> <a class="-m-2.5 flex items-center justify-center rounded-small p-2.5 opacity-50 transition-opacity duration-300 ease-[ease] motion-reduce:transition-none hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none" href="https://www.tiktok.com/@rylohq" target="_blank" rel="noopener noreferrer" aria-label="Rylo on TikTok"> <svg viewBox="0 0 24 24" fill="none" class="size-lg" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
</svg> </a> </li><li> <a class="-m-2.5 flex items-center justify-center rounded-small p-2.5 opacity-50 transition-opacity duration-300 ease-[ease] motion-reduce:transition-none hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none" href="https://www.instagram.com/rylohq/" target="_blank" rel="noopener noreferrer" aria-label="Rylo on Instagram"> <svg viewBox="0 0 24 24" fill="none" class="size-lg" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
</svg> </a> </li><li> <a class="-m-2.5 flex items-center justify-center rounded-small p-2.5 opacity-50 transition-opacity duration-300 ease-[ease] motion-reduce:transition-none hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none" href="https://www.facebook.com/ryloHQ/" target="_blank" rel="noopener noreferrer" aria-label="Rylo on Facebook"> <svg viewBox="0 0 24 24" fill="none" class="size-lg" aria-hidden="true">
  <path d="…" fill="currentColor"></path>
</svg> </a> </li> </ul> </div> <p class="text-footnote text-trim max-w-[150ch] opacity-50">FEDERAL LAW PROHIBITS ANYONE BUT REGISTERED USERS WITH HEARING LOSS FROM USING INTERNET PROTOCOL (IP) CAPTIONED TELEPHONES WITH THE CAPTIONS TURNED ON. There is a cost for each minute of captions generated, paid from a federally administered fund. There are also eligibility requirements and a cost, paid by a federally administered fund for each minute of IP Relay service. Emergency calling through Rylo works similar to, but not the same as, calling 911 directly through a landline. It is important to keep your Rylo Registered Location updated.</p> </div> </div> <div aria-hidden="true" data-footer-parallax-dark="" class="bg-footer-dim pointer-events-none absolute inset-0 opacity-0" style="will-change: opacity; opacity: 0.5;"></div> </footer>
```

## Computed Styles
- **footer.-mt-band-overlap.relative** [1440×1599]: bg rgb(25, 20, 18); mt -97.1338px; relative
- **footer.-mt-band-overlap.relative > div.container-site.flex** [1280×1599]: pad 272px 0px 105.135px 0px; mr 80px ml 80px; flex column gap 105.135px; max-w 1440px; relative; transform matrix(1, 0, 0, 1, 0, -399.688)
- **div.container-site.flex > ul.grid.w-full** [1280×228]: grid cols [638px 638px] gap 4px
- **ul.grid.w-full > li.rounded-large.bg-card** ×4 [638×112]: bg rgb(49, 38, 35); radius 40px
- **li.rounded-large.bg-card > a.flex.h-full** ×4 [638×112]: radius 40px; pad 31.9998px 39.9995px 31.9998px 39.9995px; flex row gap 16px items center
- **a.flex.h-full > span.flex.size-3xl** ×4 [48×48]: flex row justify center items center
- **a.flex.h-full > span.text-h3.text-trim ("Phone Call Captioning")** ×4 [236×18]: 23.9998px/600/26.3998px -0.719995px rgb(250, 245, 242)
- **div.container-site.flex > div.grid.grid-cols-1** [1280×161]: grid cols [414.844px 414.859px 414.844px] gap 64px 17.7274px
- … +10 more styled nodes — resolve any node with `node scripts/resolve-walk.mjs` (JSON is ground truth)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
- **Card Hover Transitions**: Hover on product card items (Phone Call Captioning, Live Transcribe, Sidekick for Mac, Sign) transitions background to ink and text to page color.
- **Link Hover Underline/Pill**: Resource links hover transitions with background tint.
- **Social Icon Opacity**: Social media icons opacity 50% transitioning to 100% on hover.

## Per-State Content
- N/A — static multi-column footer with 4 product cards, 3 link columns, brand wordmark, legal notices, and social links.

## Assets
- inline SVG ×1 — use/extend components in src/components/icons.tsx

## Text Content
- span: "Phone Call Captioning"
- span: "Live Transcribe"
- span: "Sidekick for Mac"
- span: "Sign"
- h2: "Resources"
- h2: "Support"
- h2: "Company"
- p: "© Rylo. All rights reserved."
- p: "FEDERAL LAW PROHIBITS ANYONE BUT REGISTERED USERS WITH HEARING LOSS FROM USING INTERNET PROTOCOL (IP) CAPTIONED TELEPHONES WITH THE CAPTIONS TURNED ON. There is a cost for each minute of captions generated, paid from a federally administered fund. There are also eligibility requirements and a cost, paid by a federally administered fund for each minute of IP Relay service. Emergency calling through Rylo works similar to, but not the same as, calling 911 directly through a landline. It is importan"

## Responsive Behavior
- phone 390: section 390×1620px; heading 16px; body 15.0619px; 1 col (5 items, gap normal); mt -43.5691px, lh 19.5804px
- ipad 768: section 768×1279px; heading 16px; body 15.3994px; 1 col (5 items, gap normal); mt -62.8524px, lh 20.0193px
- pc 1440: section 1440×1599px; heading 16px; body 15.9995px; 1 col (6 items, gap normal); mt -97.1338px, lh 20.7994px
- change: no layout change across viewports
- ipad matches phone layout
- exact per-property values: probe-footer.json + responsive.json (ground truth)

## Notes
- Already implemented as shared chrome component `SiteFooter` in `src/components/footer.tsx`.
- Data extracted into `src/data/navigation.ts`.
