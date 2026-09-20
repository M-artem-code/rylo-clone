import Image from "next/image";

import { BrutalButton } from "@/components/brutal-button";
import { home } from "@/data/home";

export function HomeHero() {
  const { hero } = home;

  return (
    <section className="relative h-[640px] overflow-hidden bg-charcoal md:h-[860px]">
      <Image
        src={hero.image}
        alt={hero.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-x-0 bottom-0 bg-charcoal">
        <div className="h-px w-full bg-rule-dark" />
        <div className="page-shell page-gutter py-6 md:min-h-[340px] md:pt-6 md:pb-8">
          <p className="font-mono text-[12px] font-medium tracking-[0.24em] text-muted-ink">
            {hero.kicker}
          </p>
          <h1 className="mt-2 text-[42px] leading-[0.95] font-black tracking-[-0.03em] text-bone md:text-[82px]">
            {hero.title[0]}
            <br />
            {hero.title[1]}
          </h1>
          <p className="mt-6 max-w-[720px] text-[17px] text-bone">{hero.deck}</p>
          <BrutalButton href={hero.ctaHref} className="mt-5">
            {hero.cta}
          </BrutalButton>
        </div>
      </div>
    </section>
  );
}
