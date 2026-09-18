---
component: Section23Section
target: src/components/Section23Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-23-pc.png
interaction_model: static
states: default
assets: none
responsive: phone, ipad, pc
---

# Section23Section Specification

## DOM Structure
- div.grid.grid-cols-1 [1280×161]
  - ×3 div.flex.flex-col [415×161]
    - h2.text-h6.text-trim — "Resources"
    - ul.flex.flex-col
      - ×3 li > a.text-h3.text-trim — "Blog"

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<div class="grid grid-cols-1 gap-x-gutter gap-y-4xl md:grid-cols-3"> <div class="flex flex-col"> <h2 class="text-h6 text-trim mb-lg uppercase opacity-50">Resources</h2> <ul role="list" class="flex flex-col items-start"> <li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="/blog"> Blog </a> </li><li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="https://rylo.com/hearing-test/" target="_blank" rel="noopener noreferrer"> Free Hearing Test </a> </li><li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="/audiologist-hub"> Audiologist Hub </a> </li> </ul> </div><div class="flex flex-col"> <h2 class="text-h6 text-trim mb-lg uppercase opacity-50">Support</h2> <ul role="list" class="flex flex-col items-start"> <li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="/contact"> Contact </a> </li><li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="https://help.rylo.com/en/" target="_blank" rel="noopener noreferrer"> Help Center </a> </li> </ul> </div><div class="flex flex-col"> <h2 class="text-h6 text-trim mb-lg uppercase opacity-50">Company</h2> <ul role="list" class="flex flex-col items-start"> <li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="/about"> About </a> </li><li> <a class="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent" href="/careers"> Careers </a> </li> </ul> </div> </div>
```

## Computed Styles
- **div.grid.grid-cols-1** [1280×161]: grid cols [414.844px 414.859px 414.844px] gap 64px 17.7274px
- **div.grid.grid-cols-1 > div.flex.flex-col** ×3 [415×161]: flex column
- **div.flex.flex-col > h2.text-h6.text-trim ("Resources")** ×3 [415×12]: 16px/600/20.8px rgb(250, 245, 242); uppercase; mb 23.9998px; opacity 0.5
- **div.flex.flex-col > ul.flex.flex-col** ×3 [415×125]: flex column items flex-start
- **li > a.text-h3.text-trim ("Blog")** ×7 [49×42]: 23.9998px/600/26.3998px -0.719995px rgb(250, 245, 242); radius 11.9998px; pad 12px 0px 12px 0px
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
- h2: "Resources"
- a: "Blog"
- a: "Free Hearing Test"
- a: "Audiologist Hub"
- h2: "Support"
- a: "Contact"
- a: "Help Center"
- h2: "Company"
- a: "About"
- a: "Careers"

## Responsive Behavior
- phone 390: section 350×426px; heading 16px; body 15.0619px; 1 col (3 items, gap 41.4997px 12.3577px)
- ipad 768: section 685×146px; heading 16px; body 15.3994px; 3 cols (3 items, gap 49.5999px 14.2908px)
- pc 1440: section 1280×161px; heading 16px; body 15.9995px; 3 cols (3 items, gap 64px 17.7274px)
- change: columns: 3 (pc) → 1 (phone)
- change: grid-template columns: 3 (pc) → 1 (phone)
- ipad has its own intermediate layout
- exact per-property values: probe-section-23.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
