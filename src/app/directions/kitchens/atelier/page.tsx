import type { Metadata } from "next";
import Image from "next/image";

import { NlButton } from "@/components/northline/NlButton";
import { solutionPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Кухня Atelier",
};

export default function AtelierPage() {
  return (
    <main>
      <section className="px-5 pt-10 pb-8 md:px-[72px] md:pt-10">
        <p className="text-[12px] tracking-[0.06em] text-nl-muted">{solutionPage.breadcrumb}</p>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-[minmax(0,460px)_minmax(0,736px)]">
          <div>
            <p className="text-[12px] font-medium tracking-[0.14em] text-nl-muted">
              {solutionPage.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[48px] leading-none font-medium md:text-[56px]">
              {solutionPage.title}
            </h1>
            <p className="mt-8 max-w-[460px] text-[16px] leading-[1.45] text-nl-muted">
              {solutionPage.text}
            </p>
            <NlButton href={solutionPage.href} className="mt-10">
              {solutionPage.cta}
            </NlButton>
          </div>
          <div className="relative h-[320px] md:h-[460px]">
            <Image
              src={solutionPage.hero.src}
              alt={solutionPage.hero.alt}
              fill
              className="object-cover"
              sizes="736px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 px-5 py-8 md:grid-cols-3 md:px-[72px]">
        {solutionPage.details.map((detail) => (
          <figure key={detail.title}>
            <div className="relative h-[200px] md:h-[260px]">
              <Image src={detail.image} alt={detail.title} fill className="object-cover" sizes="420px" />
            </div>
            <figcaption className="mt-4 text-[14px] tracking-[0.1em] text-nl-muted">
              {detail.title}
            </figcaption>
          </figure>
        ))}
      </section>

      <div className="mx-5 border-t border-nl-line md:mx-[72px]" />

      <section className="grid gap-10 px-5 py-12 md:grid-cols-[480fr_1fr] md:px-[72px]">
        <div>
          <h2 className="font-display text-[26px] font-medium">{solutionPage.variants.title}</h2>
          <p className="mt-6 max-w-[480px] text-[15px] leading-[1.45] text-nl-muted">
            {solutionPage.variants.text}
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          {solutionPage.variants.chips.map((chip) => (
            <figure key={chip.title} className="w-[120px]">
              <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full">
                <Image src={chip.image} alt={chip.title} fill className="object-cover" sizes="120px" />
              </div>
              <figcaption className="mt-3 text-center text-[12px] text-nl-muted">
                {chip.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="mx-5 border-t border-nl-line md:mx-[72px]" />

      <section className="px-5 py-12 md:px-[72px]">
        <h2 className="font-display text-[26px] font-medium">{solutionPage.design.title}</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-[640fr_1fr] md:items-start">
          <div className="relative h-[280px] bg-nl-cream md:h-[360px]">
            <Image
              src={solutionPage.design.image}
              alt={solutionPage.design.imageAlt}
              fill
              className="object-contain"
              sizes="640px"
            />
          </div>
          <div>
            <p className="text-[16px] text-nl-ink">{solutionPage.design.lead}</p>
            <dl className="mt-6 border-t border-nl-line">
              {solutionPage.design.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-2 gap-4 border-b border-nl-line py-3.5 text-[14px]"
                >
                  <dt className="text-nl-muted">{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start justify-between gap-6 bg-nl-terr px-5 py-14 text-nl-cream md:flex-row md:items-center md:px-[72px]">
        <h2 className="font-display text-[22px] font-medium md:text-[24px]">
          {solutionPage.band.title}
        </h2>
        <NlButton href={solutionPage.band.href} variant="ghost-light">
          {solutionPage.band.label}
        </NlButton>
      </section>
    </main>
  );
}
