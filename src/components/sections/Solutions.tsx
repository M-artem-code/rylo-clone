import Image from "next/image";

import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/data/site";

type SolutionsProps = {
  content: typeof site.solutions;
};

export function Solutions({ content }: SolutionsProps) {
  const portraits = content.cards.filter((card) => card.layout === "portrait");
  const landscapes = content.cards.filter((card) => card.layout === "landscape");

  return (
    <section
      id="solutions"
      className="min-h-[1080px] bg-tv-bg px-6 pt-[118px] pb-16 xl:px-24"
    >
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {portraits.map((card) => (
          <article
            key={card.id}
            className="overflow-hidden rounded-[18px] bg-tv-surface"
          >
            <div className="relative h-[230px]">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 33vw, 100vw"
              />
            </div>
            <div className="px-6 pt-6 pb-8">
              <p className="text-[12px] font-medium tracking-[0.12em] text-tv-gold">
                {card.number}
              </p>
              <h3 className="mt-2 text-[18px] font-semibold text-tv-text">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[22px] text-tv-muted">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {landscapes.map((card) => (
          <article
            key={card.id}
            className="flex flex-col overflow-hidden rounded-[18px] bg-tv-surface sm:flex-row"
          >
            <div className="relative h-[218px] shrink-0 sm:w-[234px]">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                className="object-cover"
                sizes="250px"
              />
            </div>
            <div className="px-7 py-10">
              <p className="text-[12px] font-medium tracking-[0.12em] text-tv-gold">
                {card.number}
              </p>
              <h3 className="mt-3 text-[22px] font-semibold text-tv-text">
                {card.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-6 text-tv-muted">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
