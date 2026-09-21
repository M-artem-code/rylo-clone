"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { DisplayLines } from "@/components/motion/DisplayLines";
import { HeroEyebrow } from "@/components/motion/HeroEyebrow";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { Eyebrow } from "@/components/site/Eyebrow";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { experienceHero, experienceScenes } from "@/data/experience";
import { duration, easeOutLux } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ExperienceView() {
  const reduce = useReducedMotion();

  return (
    <main>
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
        <ParallaxMedia fromScale={1.16} toScale={1.08} strength={40}>
          <Image
            src={experienceHero.image}
            alt=""
            fill
            priority
            className="object-cover object-[45%_40%]"
            sizes="100vw"
          />
        </ParallaxMedia>
        <div className="absolute inset-y-0 left-0 w-full max-w-[720px] bg-linear-to-r from-navy/80 via-navy/50 to-transparent" />
        <div className="px-page relative flex min-h-[calc(100vh-72px)] flex-col justify-center py-16">
          <HeroEyebrow className="text-violet-soft">{experienceHero.eyebrow}</HeroEyebrow>
          <DisplayLines
            className="mt-4 font-display text-[56px] leading-[0.95] font-extrabold text-white md:text-[72px]"
            lines={[
              experienceHero.lines[0],
              experienceHero.lines[1],
              <span key="experience-accent" className="text-[#d2beff]">{experienceHero.lines[2]}</span>,
            ]}
            delay={0.2}
          />
          <motion.p
            className="mt-8 max-w-[620px] font-condensed text-[28px] leading-9 text-white md:text-[34px]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.headline, delay: 0.62, ease: easeOutLux }}
          >
            {experienceHero.quote}
          </motion.p>
          <motion.p
            className="mt-4 font-ui text-[14px] text-white/80"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.82, ease: easeOutLux }}
          >
            {experienceHero.attribution}
          </motion.p>
          <motion.div
            className="mt-16 flex flex-wrap gap-x-10 gap-y-3"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.94, ease: easeOutLux }}
          >
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
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 1.05, ease: easeOutLux }}
          >
            <OrbitalButton href={experienceHero.cta.href} variant="inverse" className="mt-8 w-fit">
              {experienceHero.cta.label}
            </OrbitalButton>
          </motion.div>
        </div>
      </section>

      <section className="px-page bg-white py-16">
        <Eyebrow>{experienceScenes.eyebrow}</Eyebrow>
        <h2 className="mt-3 font-display text-[32px] font-bold text-navy md:text-[36px]">
          {experienceScenes.title}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {experienceScenes.items.map((item) => (
            <article key={item.title} className="group">
              <div className="relative h-[320px] overflow-hidden rounded-[22px]">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover object-[50%_40%] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="420px"
                />
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
