import Image from "next/image";

import { EnergyChart } from "@/components/sections/EnergyChart";
import { site } from "@/data/site";

type SmartHomeProps = {
  content: typeof site.smartHome;
};

export function SmartHome({ content }: SmartHomeProps) {
  return (
    <section
      id="smarthome"
      className="min-h-[1080px] bg-tv-bg px-6 pt-[118px] pb-16 xl:px-24"
    >
      <p className="mb-3 flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] text-tv-gold uppercase">
        <span className="size-[7px] rounded-full bg-tv-gold" aria-hidden />
        {content.eyebrow}
      </p>
      <h2 className="font-display text-[36px] font-medium text-tv-text md:text-[40px]">
        {content.title}
      </h2>
      <p className="mt-4 text-[17px] text-tv-muted">{content.subtitle}</p>
      <div className="mt-12 grid items-stretch gap-6 xl:grid-cols-[724px_1fr]">
        <div className="relative min-h-[520px] overflow-hidden rounded-[22px] xl:min-h-[730px]">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 724px, 100vw"
          />
        </div>
        <div className="rounded-[22px] border border-white/10 bg-[#101216]/95 p-8">
          <p className="text-[12px] font-medium tracking-[0.18em] text-tv-gold">
            {content.brand}
          </p>
          <h3 className="mt-2 text-[22px] font-semibold text-tv-text">
            {content.residence}
          </h3>
          <p className="mt-2 text-[13px] text-tv-muted">{content.status}</p>
          <div className="mt-8 grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
            {content.tiles.map((tile) => (
              <article
                key={tile.title}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
              >
                <span className="absolute top-4 right-4 size-2.5 rounded-full bg-tv-gold" />
                <p className="text-[12px] text-tv-muted">{tile.title}</p>
                <p className="mt-2 text-[17px] font-semibold text-tv-text">
                  {tile.value}
                </p>
                <p className="mt-3 text-[12px] text-tv-muted-2">{tile.note}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 pt-5 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[14px] font-medium text-tv-text">
                  {content.chartTitle}
                </p>
                <p className="mt-1 text-[12px] text-tv-muted">{content.chartCaption}</p>
              </div>
              <p className="text-[14px] font-semibold text-tv-gold">
                {content.chartNow}
              </p>
            </div>
            <div className="mt-3">
              <EnergyChart values={content.chartValues} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
