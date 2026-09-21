import Image from "next/image";

import { Eyebrow } from "@/components/site/Eyebrow";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { aboutHero, aboutOps } from "@/data/about";

export function AboutView() {
  return (
    <main>
      <section className="grid min-h-[calc(100vh-72px)] bg-white lg:grid-cols-[1fr_1fr]">
        <div className="relative min-h-[420px]">
          <Image src={aboutHero.image} alt="" fill className="object-cover object-[50%_45%]" sizes="50vw" />
        </div>
        <div className="flex flex-col justify-center px-8 py-14 lg:px-14">
          <Eyebrow>{aboutHero.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-[36px] leading-[1.05] font-extrabold text-navy md:text-[40px]">
            {aboutHero.lines[0]}
            <br />
            <span className="text-cobalt">{aboutHero.lines[1]}</span>
          </h1>
          <p className="mt-6 max-w-[760px] font-body text-[17px] leading-7 text-mute">{aboutHero.story}</p>
          <ul className="mt-10 space-y-6">
            {aboutHero.people.map((person) => (
              <li key={person.name} className="flex items-start gap-3">
                <span className="mt-2 size-3 shrink-0 rounded-full bg-violet" />
                <div>
                  <p className="font-ui text-[16px] font-semibold text-navy">{person.name}</p>
                  <p className="mt-1 font-body text-[14px] text-mute">{person.role}</p>
                </div>
              </li>
            ))}
          </ul>
          <OrbitalButton href={aboutHero.cta.href} className="mt-10 w-fit">
            {aboutHero.cta.label}
          </OrbitalButton>
          <p className="mt-6 font-mono text-[12px] text-mute">{aboutHero.note}</p>
        </div>
      </section>

      <section id={aboutOps.id} className="bg-ice px-page py-16">
        <Eyebrow>{aboutOps.eyebrow}</Eyebrow>
        <h2 className="mt-3 font-display text-[32px] font-bold text-navy md:text-[36px]">{aboutOps.title}</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[aboutOps.left, aboutOps.right].map((block) => (
            <figure key={block.caption}>
              <div className="relative h-[420px] overflow-hidden rounded-[22px]">
                <Image src={block.image} alt="" fill className="object-cover" sizes="800px" />
              </div>
              <figcaption className="mt-5 max-w-[820px] font-body text-[16px] text-mute">
                {block.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <OrbitalButton href={aboutOps.cta.href} className="mt-10">
          {aboutOps.cta.label}
        </OrbitalButton>
      </section>
    </main>
  );
}
