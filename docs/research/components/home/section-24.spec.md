---
component: Section24Section
target: src/components/Section24Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-24-pc.png
interaction_model: static
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
---

# Section24Section Specification

## DOM Structure
- div [1280×95]
  - div.mb-lg.flex [1280×24]
    - div.flex.flex-wrap
      - p.text-footnote.text-trim — "© Rylo. All rights reserved."
        - span — "2026"
      - ul.group.flex
        - ×7 li.flex.transition-opacity > a.text-footnote.rounded-small > span
    - ul.flex.flex-wrap
      - ×5 li > a.-m-2.5.flex > svg.[object.SVGAnimatedString] > path
  - p.text-footnote.text-trim [1280×47] — "FEDERAL LAW PROHIBITS ANYONE BUT REGISTERED USE…"

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<div> <div class="mb-lg flex flex-wrap items-center justify-between gap-x-2xl gap-y-lg"> <div class="flex flex-wrap items-center gap-lg"> <p class="text-footnote text-trim">
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
</svg> </a> </li> </ul> </div> <p class="text-footnote text-trim max-w-[150ch] opacity-50">FEDERAL LAW PROHIBITS ANYONE BUT REGISTERED USERS WITH HEARING LOSS FROM USING INTERNET PROTOCOL (IP) CAPTIONED TELEPHONES WITH THE CAPTIONS TURNED ON. There is a cost for each minute of captions generated, paid from a federally administered fund. There are also eligibility requirements and a cost, paid by a federally administered fund for each minute of IP Relay service. Emergency calling through Rylo works similar to, but not the same as, calling 911 directly through a landline. It is important to keep your Rylo Registered Location updated.</p> </div>
```

## Computed Styles
- **div > div.mb-lg.flex** [1280×24]: mb 23.9998px; flex row gap 23.9998px 39.9995px justify space-between items center
- **div.mb-lg.flex > div.flex.flex-wrap** [986×19]: flex row gap 23.9998px items center
- **div.flex.flex-wrap > p.text-footnote.text-trim ("© Rylo. All rights re…")** [214×10]: 13.9995px/400/18.1994px rgb(250, 245, 242)
- **p.text-footnote.text-trim > span ("2026")** [34×18]: 13.9995px/400/18.1994px rgb(250, 245, 242)
- **div.flex.flex-wrap > ul.group.flex** [748×19]: flex row gap 23.9998px items center
- **ul.group.flex > li.flex.transition-opacity** ×7 [51×10]: flex row
- **li.flex.transition-opacity > a.text-footnote.rounded-small** ×7 [51×26]: radius 11.9998px; pad 8px 0px 8px 0px; mt -8px mb -8px; flex row gap 8px items center
- **div.mb-lg.flex > ul.flex.flex-wrap** [184×24]: flex row gap 16px
- … +2 more styled nodes — resolve any node with `node scripts/resolve-walk.mjs` (JSON is ground truth)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- inline SVG ×5 — use/extend components in src/components/icons.tsx

## Text Content
- p: "© Rylo. All rights reserved."
- span: "2026"
- p: "FEDERAL LAW PROHIBITS ANYONE BUT REGISTERED USERS WITH HEARING LOSS FROM USING INTERNET PROTOCOL (IP) CAPTIONED TELEPHONES WITH THE CAPTIONS TURNED ON. There is a cost for each minute of captions generated, paid from a federally administered fund. There are also eligibility requirements and a cost, paid by a federally administered fund for each minute of IP Relay service. Emergency calling through Rylo works similar to, but not the same as, calling 911 directly through a landline. It is importan"

## Responsive Behavior
- phone 390: section 350×366px; body 15.0619px; 1 col (2 items, gap normal)
- ipad 768: section 685×244px; body 15.3994px; 1 col (2 items, gap normal)
- pc 1440: section 1280×95px; body 15.9995px
- change: no layout change across viewports
- ipad matches phone layout
- exact per-property values: probe-section-24.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
