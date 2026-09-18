---
component: Section10Section
target: src/components/Section10Section.tsx
page: /
screenshot: docs/design-references/rylo.com/section-10-pc.png
interaction_model: static
states: default
assets: none
responsive: phone, ipad, pc
---

# Section10Section Specification

## DOM Structure
- div.mt-1.flex [1280×498]
  - ×2 div.relative.flex > div.flex [1584×247]
    - ×3 ul.flex.flex-wrap
      - ×11 li.bg-card.rounded-large
        - p.text-h4.text-trim — "Best captioned calling app I have ever used and…"
        - div.gap-md.text-accent-secondary

## Source Markup
Utility CSS detected — translate this markup first, verify with probe values second.
```html
<div class="mt-1 flex w-full flex-col items-center gap-1"> <div data-scroll-marquee="" data-scroll-marquee-direction="left" class="relative flex overflow-hidden w-screen"> <div data-scroll-marquee-track="" class="flex" style="margin-left: -5%; width: 110%; translate: none; rotate: none; scale: none; transform: translate(5vw, 0px);">  <ul data-scroll-marquee-list="" aria-label="App Store reviews" class="flex flex-wrap items-stretch" style="flex-wrap: nowrap; flex-shrink: 0; width: max-content; translate: none; rotate: none; scale: none; transform: translate(-25.9765%, 0%) translate3d(0px, 0px, 0px);"> <li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Best captioned calling app I have ever used and it simply couldn't be easier to set up and use!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
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
</svg> </span> <p class="text-main text-trim">E.E. Garcia</p> </div> </li> </ul> <ul data-scroll-marquee-list="" aria-label="App Store reviews" class="flex flex-wrap items-stretch" style="flex-wrap: nowrap; flex-shrink: 0; width: max-content; translate: none; rotate: none; scale: none; transform: translate(-25.9765%, 0%) translate3d(0px, 0px, 0px);" aria-hidden="true"> <li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Best captioned calling app I have ever used and it simply couldn't be easier to set up and use!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
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
</svg> </span> <p class="text-main text-trim">E.E. Garcia</p> </div> </li> </ul><ul data-scroll-marquee-list="" aria-label="App Store reviews" class="flex flex-wrap items-stretch" style="flex-wrap: nowrap; flex-shrink: 0; width: max-content; translate: none; rotate: none; scale: none; transform: translate(-25.9765%, 0%) translate3d(0px, 0px, 0px);" aria-hidden="true"> <li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Best captioned calling app I have ever used and it simply couldn't be easier to set up and use!</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
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
</svg> </span> <p class="text-main text-trim">E.E. Garcia</p> </div> </li> </ul></div> </div><div data-scroll-marquee="" data-scroll-marquee-direction="right" class="relative flex overflow-hidden w-screen"> <div data-scroll-marquee-track="" class="flex" style="margin-left: -5%; width: 110%; translate: none; rotate: none; scale: none; transform: translate(-5vw, 0px);">  <ul data-scroll-marquee-list="" aria-label="More App Store reviews" class="flex flex-wrap items-stretch" style="flex-wrap: nowrap; flex-shrink: 0; width: max-content; translate: none; rotate: none; scale: none; transform: translate(-30.8852%, 0%) translate3d(0px, 0px, 0px);"> <li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Captioning is accurate! Customer service is amazing 👏</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
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
</svg> </span> <p class="text-main text-trim">Carolyn Porter</p> </div> </li> </ul> <ul data-scroll-marquee-list="" aria-label="More App Store reviews" class="flex flex-wrap items-stretch" style="flex-wrap: nowrap; flex-shrink: 0; width: max-content; translate: none; rotate: none; scale: none; transform: translate(-30.8852%, 0%) translate3d(0px, 0px, 0px);" aria-hidden="true"> <li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Captioning is accurate! Customer service is amazing 👏</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
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
</svg> </span> <p class="text-main text-trim">Carolyn Porter</p> </div> </li> </ul><ul data-scroll-marquee-list="" aria-label="More App Store reviews" class="flex flex-wrap items-stretch" style="flex-wrap: nowrap; flex-shrink: 0; width: max-content; translate: none; rotate: none; scale: none; transform: translate(-30.8852%, 0%) translate3d(0px, 0px, 0px);" aria-hidden="true"> <li class="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100"> <p class="text-h4 text-trim">Captioning is accurate! Customer service is amazing 👏</p> <div class="gap-md text-accent-secondary flex flex-wrap items-center">  <span aria-hidden="true" class="flex w-21 shrink-0 justify-between"> <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
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
</svg> </span> <p class="text-main text-trim">Carolyn Porter</p> </div> </li> </ul></div> </div> </div>
```

## Computed Styles
- **div.mt-1.flex** [1280×498]: mt 4px; flex column gap 4px items center
- **div.mt-1.flex > div.relative.flex** ×2 [1440×247]: flex row; relative
- **div.relative.flex > div.flex** [1584×247]: ml -72px; flex row; transform matrix(1, 0, 0, 1, 72, 0)
- **div.flex > ul.flex.flex-wrap** ×3 [4444×247]: flex row items stretch; transform matrix(1, 0, 0, 1, -1168.39, 0)
- **ul.flex.flex-wrap > li.bg-card.rounded-large** ×63 [400×247]: bg rgb(49, 38, 35); radius 40px; pad 31.9998px 31.9998px 31.9998px 31.9998px; mr 2px ml 2px; flex column gap 64px justify space-between
- **li.bg-card.rounded-large > p.text-h4.text-trim ("Best captioned callin…")** ×63 [336×59]: 19.9998px/600/21.9998px rgb(250, 245, 242)
- **li.bg-card.rounded-large > div.gap-md.text-accent-secondary** ×63 [336×16]: flex row gap 16px items center
- **div.relative.flex > div.flex** [1584×247]: ml -72px; flex row; transform matrix(1, 0, 0, 1, -72, 0)
- … +1 more styled nodes — resolve any node with `node scripts/resolve-walk.mjs` (JSON is ground truth)
- Key anchors only — the Source Markup above is the primary spec; resolve any node via resolve-walk.mjs.

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
- p: "Best captioned calling app I have ever used and it simply couldn't be easier to set up and use!"
- p: "This app is excellent for those of us with hearing issues or difficulty hearing. It allows your cell phone to easily transcribe the incoming conversation."
- p: "I love Rylo!!! I feel so independent. I am deaf, and it’s so easy to use. Thank you!!!"
- p: "Outstanding app. I've been wearing hearing aids the past 40 years. THIS IS THE BEST EVER. The transcribe function is amazingly accurate."
- p: "Outstanding app if you are hard of hearing. I highly recommend it - you won't be disappointed."
- p: "Absolutely an amazing app to have for my father who was very hard of hearing. Thank you for designing this app."
- p: "So far haven't missed a word since installing! This means everything to me and I cannot express my gratitude enough!!!"
- p: "I love that now I don't have to worry about missing any important information from anyone that I am speaking to because Rylo got my back."
- p: "I am hard of hearing. If you have problems hearing this is the place to go. If I could give Rylo a 10 star I would."
- p: "Easiest setup of any of the closed caption phone apps out there. This is a game changer. Don't mess with any of the others, this truly is the one you."
- p: "Rylo has given me the confidence to be independent and handle phone calls that I always had to rely on others to do for me."
- p: "Best captioned calling app I have ever used and it simply couldn't be easier to set up and use!"
- p: "This app is excellent for those of us with hearing issues or difficulty hearing. It allows your cell phone to easily transcribe the incoming conversation."
- p: "I love Rylo!!! I feel so independent. I am deaf, and it’s so easy to use. Thank you!!!"
- p: "Outstanding app. I've been wearing hearing aids the past 40 years. THIS IS THE BEST EVER. The transcribe function is amazingly accurate."
- p: "Outstanding app if you are hard of hearing. I highly recommend it - you won't be disappointed."
- p: "Absolutely an amazing app to have for my father who was very hard of hearing. Thank you for designing this app."
- p: "So far haven't missed a word since installing! This means everything to me and I cannot express my gratitude enough!!!"
- p: "I love that now I don't have to worry about missing any important information from anyone that I am speaking to because Rylo got my back."
- p: "I am hard of hearing. If you have problems hearing this is the place to go. If I could give Rylo a 10 star I would."
- p: "Easiest setup of any of the closed caption phone apps out there. This is a game changer. Don't mess with any of the others, this truly is the one you."
- p: "Rylo has given me the confidence to be independent and handle phone calls that I always had to rely on others to do for me."
- p: "Best captioned calling app I have ever used and it simply couldn't be easier to set up and use!"
- p: "This app is excellent for those of us with hearing issues or difficulty hearing. It allows your cell phone to easily transcribe the incoming conversation."
- p: "I love Rylo!!! I feel so independent. I am deaf, and it’s so easy to use. Thank you!!!"
- p: "Outstanding app. I've been wearing hearing aids the past 40 years. THIS IS THE BEST EVER. The transcribe function is amazingly accurate."
- p: "Outstanding app if you are hard of hearing. I highly recommend it - you won't be disappointed."
- p: "Absolutely an amazing app to have for my father who was very hard of hearing. Thank you for designing this app."
- p: "So far haven't missed a word since installing! This means everything to me and I cannot express my gratitude enough!!!"
- p: "I love that now I don't have to worry about missing any important information from anyone that I am speaking to because Rylo got my back."
- p: "I am hard of hearing. If you have problems hearing this is the place to go. If I could give Rylo a 10 star I would."
- p: "Easiest setup of any of the closed caption phone apps out there. This is a game changer. Don't mess with any of the others, this truly is the one you."
- p: "Rylo has given me the confidence to be independent and handle phone calls that I always had to rely on others to do for me."
- p: "Captioning is accurate! Customer service is amazing 👏"
- p: "It is an amazing app for me to communicateI I am able to read what people are saying."
- p: "Rylo is a lifesaver for me being deaf. I have a hard time communicating with people. I'm very grateful for the service to communicate."
- … +27 more text nodes — verbatim in the section JSON

## Responsive Behavior
- phone 390: section 350×453px; body 15.0619px; 11 cols (11 items, gap normal)
- ipad 768: section 685×473px; body 15.3994px; 11 cols (11 items, gap normal)
- pc 1440: section 1280×498px; body 15.9995px; 11 cols (11 items, gap normal)
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-section-10.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
