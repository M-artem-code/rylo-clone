"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { FlightTimeline } from "@/components/home/FlightTimeline";
import { DisplayLines } from "@/components/motion/DisplayLines";
import { HeroEyebrow } from "@/components/motion/HeroEyebrow";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { Eyebrow } from "@/components/site/Eyebrow";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { homeAdvantages, homeCta, homeHero, homeJourney, homeMissionsIntro, homeRoute } from "@/data/home";
import { missions } from "@/data/missions";
import { duration, easeOutLux } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function HomeView() {
  const featured = missions.slice(0, 3);
  const reduce = useReducedMotion();

  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[68%] max-lg:opacity-40">
          <ParallaxMedia fromScale={1.18} toScale={1.08} strength={36}>
            <Image
              src={homeHero.image}
              alt=""
              fill
              priority
              className="object-cover object-[62%_45%]"
              sizes="70vw"
            />
          </ParallaxMedia>
          <div className="absolute inset-y-0 left-0 w-[42%] bg-linear-to-r from-white via-white/90 to-transparent" />
        </div>
        <div className="px-page relative flex min-h-[calc(100vh-72px)] flex-col justify-center py-16">
          <HeroEyebrow>{homeHero.eyebrow}</HeroEyebrow>
          <DisplayLines
            className="mt-5 font-display text-[56px] leading-[0.92] font-extrabold text-navy md:text-[72px] xl:text-[86px]"
            lines={homeHero.lines}
            accentIndex={2}
            delay={0.22}
          />
          <motion.p
            className="mt-8 max-w-[520px] font-body text-[18px] leading-7 text-mute"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.enter, delay: 0.72, ease: easeOutLux }}
          >
            {homeHero.lead}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.enter, delay: 0.86, ease: easeOutLux }}
          >
            <OrbitalButton href={homeHero.primaryCta.href}>{homeHero.primaryCta.label}</OrbitalButton>
            <OrbitalButton href={homeHero.secondaryCta.href} variant="ghost">
              {homeHero.secondaryCta.label}
            </OrbitalButton>
          </motion.div>
          <motion.p
            className="mt-10 font-mono text-[12px] text-mute"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.02, ease: easeOutLux }}
          >
            {homeHero.coords}
          </motion.p>
          <motion.div
            className="mt-8 grid max-w-[960px] grid-cols-2 gap-6 rounded-[22px] border border-white/60 bg-white/80 px-8 py-6 backdrop-blur-md sm:grid-cols-3 lg:grid-cols-5"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.08, ease: easeOutLux }}
          >
            {homeHero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-[11px] tracking-wide text-mute uppercase">{stat.label}</p>
                <p className="mt-2 font-display text-[28px] font-bold text-navy">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-ice py-20">
        <div className="px-page">
          <Eyebrow>{homeAdvantages.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-[36px] font-bold text-navy md:text-[40px]">
            {homeAdvantages.title}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homeAdvantages.items.map((item) => (
              <article
                key={item.num}
                className="rounded-[22px] bg-white px-7 py-8 transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <p className="font-mono text-[12px] text-violet">{item.num}</p>
                <h3 className="mt-4 font-display text-[24px] font-bold text-navy">{item.title}</h3>
                <p className="mt-4 font-body text-[16px] leading-6 text-mute">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ice py-20">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] md:block">
          <ParallaxMedia strength={28} fromScale={1.12} toScale={1.06}>
            <Image
              src="/orbital/plate-earth-curve-dawn.png"
              alt=""
              fill
              className="object-cover object-[50%_65%] opacity-80"
              sizes="46vw"
            />
          </ParallaxMedia>
          <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-ice to-transparent" />
        </div>
        <div className="px-page relative">
          <div className="max-w-[460px]">
            <Eyebrow>{homeMissionsIntro.eyebrow}</Eyebrow>
            <DisplayLines
              as="h2"
              inView
              className="mt-3 font-display text-[44px] leading-[0.95] font-extrabold text-navy md:text-[54px]"
              lines={homeMissionsIntro.title}
              accentIndex={1}
            />
            <p className="mt-6 font-body text-[17px] leading-7 text-mute">{homeMissionsIntro.lead}</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featured.map((mission) => (
              <article
                key={mission.slug}
                className="group rounded-[26px] bg-white p-4 shadow-[0_18px_40px_rgba(8,18,48,0.08)] transition-shadow duration-300 hover:shadow-[0_22px_48px_rgba(8,18,48,0.12)]"
              >
                <div className="relative h-[200px] overflow-hidden rounded-[18px]">
                  <Image
                    src={mission.cardImage}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="400px"
                  />
                </div>
                <div className="px-3 pt-5 pb-4">
                  <h3 className="font-display text-[22px] font-bold text-navy">{mission.name}</h3>
                  <p className="mt-1 font-body text-[15px] text-mute">{mission.subtitle}</p>
                  <dl className="mt-6 space-y-3">
                    {[
                      ["Дата", mission.date],
                      ["Длительность", mission.duration],
                      ["Высота", mission.altitude],
                      ["Места", mission.seatsLabel],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between border-b border-line pb-3">
                        <dt className="font-ui text-[13px] text-mute">{label}</dt>
                        <dd className="font-ui text-[13px] font-semibold text-navy">{value}</dd>
                      </div>
                    ))}
                    <div className="flex items-center justify-between">
                      <dt className="font-ui text-[13px] text-mute">Статус</dt>
                      <dd
                        className={cn(
                          "font-ui text-[13px] font-semibold",
                          mission.status === "open" ? "text-ok" : "text-warn",
                        )}
                      >
                        {mission.statusLabel}
                      </dd>
                    </div>
                  </dl>
                  <OrbitalButton href={`/missions/${mission.slug}`} className="mt-8">
                    Выбрать миссию →
                  </OrbitalButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%] max-lg:hidden">
          <ParallaxMedia strength={32} fromScale={1.12} toScale={1.06}>
            <Image
              src={homeJourney.image}
              alt=""
              fill
              className="object-cover object-[62%_48%]"
              sizes="55vw"
            />
          </ParallaxMedia>
          <div className="absolute inset-y-0 left-0 w-[38%] bg-linear-to-r from-white via-white/80 to-transparent" />
        </div>
        <div className="px-page relative grid gap-12 xl:grid-cols-[1fr_420px]">
          <div>
            <Eyebrow>{homeJourney.eyebrow}</Eyebrow>
            <DisplayLines
              as="h2"
              inView
              className="mt-3 font-display text-[40px] leading-[0.95] font-extrabold text-navy md:text-[46px]"
              lines={homeJourney.title}
              accentIndex={1}
            />
            <FlightTimeline steps={homeJourney.steps} />
          </div>
          <div className="relative z-10 h-fit rounded-[22px] border border-white/70 bg-white/80 p-8 backdrop-blur-md">
            <p className="font-mono text-[11px] text-violet">{homeJourney.techLabel}</p>
            <div className="mt-6 grid grid-cols-2 gap-8">
              {homeJourney.specs.map((spec) => (
                <div key={spec.label}>
                  <p className="font-ui text-[13px] text-mute">{spec.label}</p>
                  <p className="mt-2 font-display text-[28px] font-bold text-navy">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[560px] overflow-hidden">
        <ParallaxMedia strength={48} fromScale={1.14} toScale={1.08}>
          <Image src={homeRoute.image} alt="" fill className="object-cover object-[50%_55%]" sizes="100vw" />
        </ParallaxMedia>
        <div className="px-page relative flex h-full items-center">
          <div className="max-w-[740px] rounded-[22px] bg-white/85 p-8 backdrop-blur-md md:p-10">
            <Eyebrow>{homeRoute.eyebrow}</Eyebrow>
            <p className="mt-4 font-body text-[18px] text-ink">{homeRoute.text}</p>
            <p className="mt-8 font-display text-[22px] leading-8 font-semibold text-navy">
              {homeRoute.stats.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="px-page py-16">
        <div className="flex flex-col justify-between gap-6 rounded-[28px] bg-royal px-8 py-12 text-white md:flex-row md:items-center md:px-12">
          <div>
            <h2 className="font-display text-[26px] font-bold md:text-[32px]">{homeCta.title}</h2>
            <p className="mt-2 font-display text-[22px] text-white/90">{homeCta.quote}</p>
            <p className="mt-3 font-body text-[15px] text-white/70">{homeCta.lead}</p>
          </div>
          <OrbitalButton href={homeCta.cta.href} variant="inverse">
            {homeCta.cta.label}
          </OrbitalButton>
        </div>
      </section>
    </main>
  );
}
