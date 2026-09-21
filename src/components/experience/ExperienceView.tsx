import Image from "next/image";

import { Eyebrow } from "@/components/site/Eyebrow";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { experienceHero, experienceScenes } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExperienceView() {
  return (
    <main>
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
        <Image
          src={experienceHero.image}
          alt=""
          fill
          priority
          className="object-cover object-[45%_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-y-0 left-0 w-full max-w-[720px] bg-linear-to-r from-navy/80 via-navy/50 to-transparent" />
        <div className="px-page relative flex min-h-[calc(100vh-72px)] flex-col justify-center py-16">
          <Eyebrow className="text-violet-soft">{experienceHero.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-[56px] leading-[0.95] font-extrabold text-white md:text-[72px]">
            {experienceHero.lines[0]}
            <br />
            {experienceHero.lines[1]}
            <br />
            <span className="text-[#d2beff]">{experienceHero.lines[2]}</span>
          </h1>
          <p className="mt-8 max-w-[620px] font-condensed text-[28px] leading-9 text-white md:text-[34px]">
            {experienceHero.quote}
          </p>
          <p className="mt-4 font-ui text-[14px] text-white/80">{experienceHero.attribution}</p>
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3">
            {experienceHero.scenes.map((scene) => (
              <span
                key={scene}
                className={cn(
                  "font-ui text-[15px]",
                  scene === experienceHero.activeScene
                    ? "border-b-2 border-violet pb-1 font-semibold text-white"
                    : "text-white/70",
                )}
              >
                {scene}
              </span>
            ))}
          </div>
          <OrbitalButton href={experienceHero.cta.href} variant="inverse" className="mt-8 w-fit">
            {experienceHero.cta.label}
          </OrbitalButton>
        </div>
      </section>

      <section className="px-page bg-white py-16">
        <Eyebrow>{experienceScenes.eyebrow}</Eyebrow>
        <h2 className="mt-3 font-display text-[32px] font-bold text-navy md:text-[36px]">
          {experienceScenes.title}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {experienceScenes.items.map((item) => (
            <article key={item.title}>
              <div className="relative h-[320px] overflow-hidden rounded-[22px]">
                <Image src={item.image} alt="" fill className="object-cover object-[50%_40%]" sizes="420px" />
              </div>
              <div className="mt-3 rounded-[20px] bg-ice px-6 py-6">
                <h3 className="font-display text-[22px] font-bold text-navy">{item.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-6 text-mute">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
