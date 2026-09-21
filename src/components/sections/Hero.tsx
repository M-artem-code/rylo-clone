import Image from "next/image";

import { GoldButton } from "@/components/site/GoldButton";
import { site } from "@/data/site";

type HeroProps = {
  content: typeof site.hero;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={content.image}
        alt={content.imageAlt}
        fill
        priority
        className="object-cover object-[70%_center]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#08090bd6] via-[#08090b88] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#08090baa] to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1920px] flex-col justify-between px-6 pt-32 pb-10 xl:px-24">
        <div className="max-w-[640px] pt-16">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] text-tv-gold uppercase">
            <span className="size-[7px] rounded-full bg-tv-gold" aria-hidden />
            {content.eyebrow}
          </p>
          <h1 className="font-display text-[40px] leading-[1.15] text-tv-text sm:text-[48px] xl:text-[56px]">
            <span className="font-light">{content.title[0]}</span>
            <br />
            <span className="font-medium">{content.title[1]}</span>
          </h1>
          <p className="mt-8 max-w-[620px] text-[18px] leading-7 text-tv-muted">
            {content.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-3.5">
            <GoldButton href={content.primaryCta.href} className="h-[50px] px-[26px]">
              {content.primaryCta.label}
            </GoldButton>
            <GoldButton
              href={content.secondaryCta.href}
              variant="ghost"
              className="h-[50px] px-[26px]"
            >
              {content.secondaryCta.label}
            </GoldButton>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 overflow-hidden rounded-[20px] border border-white/10 bg-[#0c0e11]/70 backdrop-blur-md sm:grid-cols-3">
          {content.chips.map((chip, index) => (
            <div
              key={chip.title}
              className={`flex items-start gap-3 px-8 py-7 ${
                index > 0 ? "border-t border-white/10 sm:border-t-0 sm:border-l" : ""
              }`}
            >
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-tv-gold" />
              <div>
                <p className="text-[16px] font-medium text-tv-text">{chip.title}</p>
                <p className="mt-1 text-[13px] text-tv-muted">{chip.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
