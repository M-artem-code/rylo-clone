import Image from "next/image";

import {
  BatteryIcon,
  DevicesIcon,
  HomeIcon,
  InverterIcon,
  PanelIcon,
  SunIcon,
} from "@/components/sections/SystemIcons";
import { site } from "@/data/site";

const icons = {
  sun: SunIcon,
  panel: PanelIcon,
  inv: InverterIcon,
  bat: BatteryIcon,
  home: HomeIcon,
  dev: DevicesIcon,
} as const;

type SystemProps = {
  content: typeof site.system;
};

export function System({ content }: SystemProps) {
  return (
    <section id="system" className="relative min-h-[1080px] overflow-hidden">
      <Image
        src={content.image}
        alt={content.imageAlt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#090a0cc6]" />
      <div className="relative z-10 mx-auto flex min-h-[1080px] max-w-[1920px] flex-col px-6 pt-[130px] pb-16 xl:px-24">
        <p className="mb-3 flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] text-tv-gold uppercase">
          <span className="size-[7px] rounded-full bg-tv-gold" aria-hidden />
          {content.eyebrow}
        </p>
        <h2 className="font-display text-[36px] font-medium text-tv-text md:text-[40px]">
          {content.title}
        </h2>
        <p className="mt-4 max-w-4xl text-[17px] leading-7 text-tv-muted">
          {content.subtitle}
        </p>
        <div className="relative mt-24 flex-1">
          <div className="absolute top-[70px] right-10 left-10 hidden h-px bg-tv-gold/40 lg:block" />
          <div className="absolute top-[68px] right-16 left-16 hidden justify-between lg:flex">
            {Array.from({ length: 15 }).map((_, i) => (
              <span
                key={i}
                className="size-1.5 rounded-full bg-tv-gold"
                aria-hidden
              />
            ))}
          </div>
          <ol className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {content.nodes.map((node) => {
              const Icon = icons[node.kind];
              return (
                <li key={node.title} className="flex flex-col items-center text-center">
                  <div className="flex size-[140px] items-center justify-center rounded-[40px] border border-tv-gold/35 bg-tv-surface text-tv-gold shadow-[0_10px_30px_rgb(0_0_0_/_0.35)]">
                    <Icon className="size-12" />
                  </div>
                  <p className="mt-7 text-[16px] font-semibold text-tv-text">
                    {node.title}
                  </p>
                  <p className="mt-1 text-[13px] text-tv-muted">{node.subtitle}</p>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="mt-16 rounded-2xl border border-white/10 bg-[#121418]/80 px-6 py-8 text-center text-[16px] text-tv-muted backdrop-blur-md">
          {content.note}
        </div>
      </div>
    </section>
  );
}
