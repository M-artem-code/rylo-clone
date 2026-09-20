import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { home } from "@/data/home";

export function Thesis() {
  const { thesis } = home;

  return (
    <section className="bg-bone">
      <div className="pt-[100px] pb-10">
        <SectionHeading
          index={thesis.index}
          title={thesis.title}
          copy={thesis.copy}
        />
        <p className="page-gutter mt-8 font-mono text-[11px] font-medium tracking-[0.16em] text-muted-ink">
          {thesis.tags}
        </p>
      </div>
      <div className="relative h-[280px] md:h-[460px]">
        <Image
          src={thesis.image}
          alt={thesis.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
