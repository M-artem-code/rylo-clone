import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";

type SiteLogicProps = {
  copy: string;
  landscape: { src: string; alt: string };
  mass: { src: string; alt: string };
};

export function SiteLogic({ copy, landscape, mass }: SiteLogicProps) {
  return (
    <section className="bg-bone py-24">
      <SectionHeading index="02" title="ЛОГИКА УЧАСТКА" copy={copy} />
      <div className="page-shell page-gutter mt-10 grid gap-6 md:grid-cols-2">
        {[landscape, mass].map((image) => (
          <div
            key={image.src}
            className="relative h-[240px] border border-rule-paper md:h-[400px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              loading="eager"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
