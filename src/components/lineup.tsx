import Image from "next/image";

import { BrutalButton } from "@/components/brutal-button";
import { SectionHeading } from "@/components/section-heading";
import { home } from "@/data/home";

export function Lineup() {
  const { lineup } = home;

  return (
    <section id="lineup" className="bg-charcoal">
      <div className="pt-[88px] pb-8">
        <SectionHeading
          index={lineup.index}
          title={lineup.title}
          copy={lineup.copy}
          dark
        />
      </div>
      <div>
        {lineup.rows.map((row) => (
          <article key={row.href}>
            <div className="relative h-[320px] md:h-[528px]">
              <Image
                src={row.image}
                alt={row.imageAlt}
                fill
                loading="eager"
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="border-t border-rule-dark bg-slab">
              <div className="page-shell page-gutter flex min-h-[120px] flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-[13px] font-medium tracking-[0.18em] text-iron">
                      {row.index}
                    </span>
                    <h3 className="text-[22px] font-extrabold tracking-[-0.02em] text-bone md:text-[26px]">
                      {row.house}  /  {row.name}
                    </h3>
                  </div>
                  <p className="mt-2 flex flex-wrap items-baseline gap-x-4 text-[16px] text-bone">
                    <span className="font-mono text-[12px] font-medium tracking-[0.28em] text-muted-ink">
                      {row.site}
                    </span>
                    {row.sentence}
                  </p>
                </div>
                <BrutalButton href={row.href} variant="ghost">
                  {row.cta}
                </BrutalButton>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
