import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { home } from "@/data/home";

export function Material() {
  const { material } = home;

  return (
    <section className="bg-charcoal pb-16 pt-[100px] md:min-h-[900px] md:pb-0">
      <SectionHeading
        index={material.index}
        title={material.title}
        copy={material.copy}
        dark
        copyClassName="max-w-[480px]"
      />
      <div className="page-shell page-gutter mt-12 grid grid-cols-12 gap-6">
        <div className="relative col-span-12 h-[220px] border border-rule-dark md:col-span-4 md:mt-[180px] md:h-[320px]">
          <Image
            src={material.corner.src}
            alt={material.corner.alt}
            fill
            className="object-cover"
            loading="eager"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="relative col-span-12 h-[280px] border border-rule-dark md:col-span-8 md:h-[500px]">
          <Image
            src={material.board.src}
            alt={material.board.alt}
            fill
            className="object-cover"
            loading="eager"
            sizes="(min-width: 768px) 66vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
