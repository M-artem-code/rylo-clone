"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { DisplayLines } from "@/components/motion/DisplayLines";
import { HeroEyebrow } from "@/components/motion/HeroEyebrow";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { Eyebrow } from "@/components/site/Eyebrow";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { aboutHero, aboutOps } from "@/data/about";
import { duration, easeOutLux } from "@/lib/motion";

export function AboutView() {
  const reduce = useReducedMotion();

  return (
    <main>
      <section className="grid min-h-[calc(100vh-72px)] bg-white lg:grid-cols-[1fr_1fr]">
        <div className="relative min-h-[420px] overflow-hidden">
          <ParallaxMedia fromScale={1.12} toScale={1.05} strength={28}>
            <Image src={aboutHero.image} alt="" fill className="object-cover object-[50%_45%]" sizes="50vw" />
          </ParallaxMedia>
        </div>
        <div className="flex flex-col justify-center px-8 py-14 lg:px-14">
          <HeroEyebrow>{aboutHero.eyebrow}</HeroEyebrow>
          <DisplayLines
            className="mt-4 font-display text-[36px] leading-[1.05] font-extrabold text-navy md:text-[40px]"
            lines={aboutHero.lines}
            accentIndex={1}
            delay={0.16}
          />
          <motion.p
            className="mt-6 max-w-[760px] font-body text-[17px] leading-7 text-mute"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: duration.enter, delay: 0.42, ease: easeOutLux }}
          >
            {aboutHero.story}
          </motion.p>
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
            <figure key={block.caption} className="group">
              <div className="relative h-[420px] overflow-hidden rounded-[22px]">
                <Image
                  src={block.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  sizes="800px"
                />
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
