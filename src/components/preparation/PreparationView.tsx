import Image from "next/image";

import { Eyebrow } from "@/components/site/Eyebrow";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { preparation } from "@/data/preparation";

export function PreparationView() {
  return (
    <main className="bg-white pb-16">
      <section className="px-page grid items-start gap-10 pt-12 lg:grid-cols-[1fr_minmax(0,720px)]">
        <div>
          <Eyebrow>{preparation.eyebrow}</Eyebrow>
          <h1 className="mt-3 font-display text-[40px] leading-[0.95] font-extrabold text-navy md:text-[52px]">
            {preparation.lines[0]}
            <br />
            <span className="text-cobalt">{preparation.lines[1]}</span>
            <br />
            {preparation.lines[2]}
          </h1>
          <p className="mt-8 max-w-[520px] font-body text-[17px] leading-7 text-mute">{preparation.lead}</p>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-[24px] lg:min-h-[480px]">
          <Image
            src={preparation.image}
            alt=""
            fill
            className="object-cover object-[45%_40%]"
            sizes="720px"
          />
        </div>
      </section>

      <section className="px-page mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {preparation.weeks.map((week) => (
          <article key={week.num} className="rounded-[18px] bg-ice px-5 py-6">
            <p className="font-mono text-[12px] text-violet">{week.num}</p>
            <h2 className="mt-3 font-ui text-[16px] font-semibold text-navy">{week.title}</h2>
            <p className="mt-2 font-body text-[14px] text-mute">{week.desc}</p>
          </article>
        ))}
      </section>

      <section className="px-page mt-10">
        <div className="flex flex-col gap-6 rounded-[20px] bg-royal px-8 py-8 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-[11px] text-violet-soft">{preparation.expectEyebrow}</p>
            <p className="mt-3 max-w-4xl font-body text-[16px]">{preparation.expectText}</p>
          </div>
          <OrbitalButton href={preparation.cta.href} variant="inverse">
            {preparation.cta.label}
          </OrbitalButton>
        </div>
      </section>
    </main>
  );
}
