import Image from "next/image";

import { BrutalButton } from "@/components/brutal-button";

type HouseHeroProps = {
  name: string;
  kicker: string;
  oneLiner: string;
  image: string;
  alt: string;
};

export function HouseHero({ name, kicker, oneLiner, image, alt }: HouseHeroProps) {
  return (
    <section className="relative h-[620px] overflow-hidden bg-charcoal md:h-[840px]">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-x-0 bottom-0 bg-charcoal">
        <div className="h-px w-full bg-rule-dark" />
        <div className="page-shell page-gutter py-6 md:min-h-[300px] md:pb-8">
          <p className="font-mono text-[13px] font-medium tracking-[0.24em] text-iron">
            {kicker}
          </p>
          <h1 className="mt-1 text-[72px] leading-none font-black tracking-[-0.03em] text-bone md:text-[112px]">
            {name}
          </h1>
          <p className="mt-5 text-[18px] text-bone">{oneLiner}</p>
          <BrutalButton href="#request" className="mt-5">
            ОСТАВИТЬ ЗАЯВКУ
          </BrutalButton>
        </div>
      </div>
    </section>
  );
}
