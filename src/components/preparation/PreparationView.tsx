"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { DisplayLines } from "@/components/motion/DisplayLines";
import { HeroEyebrow } from "@/components/motion/HeroEyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { preparation } from "@/data/preparation";
import { duration, easeOutLux } from "@/lib/motion";

export function PreparationView() {
  return (
    <main className="bg-white pb-16">
      <section className="px-page grid items-start gap-10 pt-12 lg:grid-cols-[1fr_minmax(0,720px)]">
        <div>
          <HeroEyebrow>{preparation.eyebrow}</HeroEyebrow>
          <DisplayLines
            className="mt-3 font-display text-[40px] leading-[0.95] font-extrabold text-navy md:text-[52px]"
            lines={preparation.lines}
            accentIndex={1}
            delay={0.16}
          />
          <motion.p
            className="mt-8 max-w-[520px] font-body text-[17px] leading-7 text-mute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: duration.enter, delay: 0.52, ease: easeOutLux }}
          >
            {preparation.lead}
          </motion.p>
        </div>
        <motion.div
          className="relative min-h-[360px] overflow-hidden rounded-[24px] lg:min-h-[480px]"
          initial={{ clipPath: "inset(0 18% 0 0)", scale: 1.04 }}
          animate={{ clipPath: "inset(0 0 0 0)", scale: 1 }}
          transition={{ duration: 1.1, ease: easeOutLux }}
        >
          <Image
            src={preparation.image}
            alt=""
            fill
            className="object-cover object-[45%_40%]"
            sizes="720px"
          />
        </motion.div>
      </section>

      <section className="px-page mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {preparation.weeks.map((week, index) => (
          <Reveal key={week.num} delay={index * 0.05} y={14}>
            <article className="rounded-[18px] bg-ice px-5 py-6">
              <p className="font-mono text-[12px] text-violet">{week.num}</p>
              <h2 className="mt-3 font-ui text-[16px] font-semibold text-navy">{week.title}</h2>
              <p className="mt-2 font-body text-[14px] text-mute">{week.desc}</p>
            </article>
          </Reveal>
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
