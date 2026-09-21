import Image from "next/image";

import { GoldButton } from "@/components/site/GoldButton";
import { site } from "@/data/site";

type CtaProps = {
  content: typeof site.cta;
};

export function Cta({ content }: CtaProps) {
  return (
    <section id="cta" className="relative min-h-[1080px] overflow-hidden">
      <Image
        src={content.image}
        alt={content.imageAlt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#08090b73]" />
      <div className="absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-t from-[#08090bb0] to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[1080px] max-w-[1920px] items-center px-6 xl:px-24">
        <div className="w-full max-w-[884px] rounded-[24px] border border-white/15 bg-white/[0.04] px-12 py-16 backdrop-blur-md">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] text-tv-gold uppercase">
            <span className="size-[7px] rounded-full bg-tv-gold" aria-hidden />
            {content.eyebrow}
          </p>
          <h2 className="font-display text-[34px] leading-[1.2] text-tv-text md:text-[42px]">
            <span className="font-light">{content.title[0]}</span>
            <br />
            <span className="font-medium">{content.title[1]}</span>
            <br />
            <span className="font-medium">{content.title[2]}</span>
          </h2>
          <p className="mt-8 max-w-xl text-[17px] text-tv-muted">{content.subtitle}</p>
          <GoldButton href={content.button.href} className="mt-10 h-[52px] px-7">
            {content.button.label}
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
