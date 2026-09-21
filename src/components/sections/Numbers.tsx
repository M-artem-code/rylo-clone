import Image from "next/image";

import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type NumbersProps = {
  content: typeof site.numbers;
};

export function Numbers({ content }: NumbersProps) {
  return (
    <section id="numbers" className="relative min-h-[1080px] overflow-hidden">
      <Image
        src={content.image}
        alt={content.imageAlt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#08090bd6]" />
      <div className="relative z-10 mx-auto min-h-[1080px] max-w-[1920px] px-6 pt-[140px] pb-16 xl:px-24">
        <p className="mb-3 flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] text-tv-gold uppercase">
          <span className="size-[7px] rounded-full bg-tv-gold" aria-hidden />
          {content.eyebrow}
        </p>
        <h2 className="font-display text-[36px] font-medium text-tv-text md:text-[42px]">
          {content.title}
        </h2>
        <p className="mt-5 max-w-3xl text-[16px] leading-7 text-tv-muted">
          {content.subtitle}
        </p>
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.stats.map((stat, index) => (
            <article
              key={stat.label}
              className="min-h-[420px] rounded-[22px] border border-white/10 bg-[#101216]/70 px-8 py-12 backdrop-blur-md"
            >
              <p className="text-[13px] font-medium tracking-[0.16em] text-tv-gold">
                {`0${index + 1}`}
              </p>
              <p
                className={cn(
                  "mt-16 font-display font-light text-tv-text",
                  stat.number.length > 5 ? "text-[40px]" : "text-[64px] leading-none",
                )}
              >
                {stat.number}
              </p>
              <span className="mt-12 block h-0.5 w-10 bg-tv-gold" />
              <p className="mt-7 text-[18px] leading-7 text-tv-muted">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
