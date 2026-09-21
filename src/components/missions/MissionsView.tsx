"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { DisplayLines } from "@/components/motion/DisplayLines";
import { HeroEyebrow } from "@/components/motion/HeroEyebrow";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { capsuleSeats, itineraryScenes, missionFilters, missions, type Mission } from "@/data/missions";
import { duration, easeOutLux } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function MissionsView() {
  const [filter, setFilter] = useState<(typeof missionFilters)[number]>("Все");
  const [activeSlug, setActiveSlug] = useState(missions[0].slug);

  const visible = useMemo(
    () => (filter === "Все" ? missions : missions.filter((mission) => mission.filter === filter)),
    [filter],
  );
  const active = visible.find((mission) => mission.slug === activeSlug) ?? visible[0] ?? missions[0];

  return (
    <main className="px-page min-h-[calc(100vh-72px)] bg-white pb-16">
      <div className="pt-10">
        <HeroEyebrow>КАТАЛОГ ПУТЕШЕСТВИЙ</HeroEyebrow>
        <DisplayLines
          className="mt-3 font-display text-[48px] font-extrabold text-navy md:text-[58px]"
          lines={["МИССИИ"]}
          delay={0.16}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {missionFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "relative h-11 rounded-full px-5 font-ui text-[15px] font-semibold",
                filter === item ? "text-white" : "border border-line bg-white text-navy hover:border-cobalt/40",
              )}
            >
              {filter === item ? (
                <motion.span
                  layoutId="mission-filter"
                  className="absolute inset-0 rounded-full bg-cobalt"
                  transition={{ duration: 0.35, ease: easeOutLux }}
                />
              ) : null}
              <span className="relative z-10">{item}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,820px)_1fr]">
        <ul className="space-y-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((mission) => (
              <motion.li
                key={mission.slug}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: duration.micro, ease: easeOutLux }}
              >
                <button
                  type="button"
                  onClick={() => setActiveSlug(mission.slug)}
                  className={cn(
                    "w-full rounded-[20px] border px-6 py-6 text-left transition-[border-color,background-color,transform] duration-300",
                    active.slug === mission.slug
                      ? "border-cobalt bg-[#ecf2ff]"
                      : "border-line bg-white hover:translate-x-1 hover:border-cobalt/30",
                  )}
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <p className="font-mono text-[12px] text-violet">{mission.number}</p>
                      <p className="mt-1 font-display text-[24px] font-bold text-navy">{mission.name}</p>
                      <p className="mt-2 font-body text-[14px] text-mute">{mission.subtitle}</p>
                    </div>
                    <dl className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">
                      <Meta label="Дата" value={mission.dateShort} />
                      <Meta label="Высота" value={mission.altitude} />
                      <Meta label="Полёт" value={mission.duration} />
                      <Meta label="Места" value={mission.seats} />
                    </dl>
                  </div>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <aside className="relative min-h-[520px] overflow-hidden rounded-[28px]">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={active.slug}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: easeOutLux }}
            >
              <Image src={active.image} alt="" fill className="object-cover" sizes="800px" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-8 left-8 max-w-[420px] rounded-[18px] bg-white/85 p-6 backdrop-blur-md">
            <p className="font-mono text-[11px] text-violet">ORBITAL MAP</p>
            <p className="mt-2 font-display text-[20px] font-bold text-navy">
              {active.name}  ·  активна
            </p>
            <p className="mt-3 font-body text-[13px] text-mute">{active.route}</p>
            <p className="mt-2 font-body text-[13px] text-mute">{active.window}</p>
          </div>
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 700" fill="none">
            <motion.path
              key={`${active.slug}-path`}
              d="M80 520 C 220 180, 620 120, 720 260"
              stroke="#A78BFA"
              strokeWidth="2.4"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.25, ease: easeOutLux }}
            />
            <motion.circle
              key={`${active.slug}-apogee`}
              cx="720"
              cy="260"
              r="6"
              fill="#7C3AED"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.35, ease: easeOutLux }}
            />
            <circle cx="220" cy="500" r="5" fill="#154CFF" />
          </svg>
          <div className="absolute bottom-8 left-8">
            <OrbitalButton href={`/missions/${active.slug}`}>
              Выбрать миссию {active.name} →
            </OrbitalButton>
          </div>
        </aside>
      </div>
    </main>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] text-mute">{label}</dt>
      <dd className="mt-1 font-ui text-[15px] font-semibold text-navy">{value}</dd>
    </div>
  );
}

export function MissionBriefing({ mission }: { mission: Mission }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[62%] max-lg:opacity-30">
        <ParallaxMedia fromScale={1.14} toScale={1.06} strength={30}>
          <Image src={mission.image} alt="" fill className="object-cover object-[55%_50%]" sizes="62vw" />
        </ParallaxMedia>
        <div className="absolute inset-y-0 left-0 w-[42%] bg-linear-to-r from-white via-white/85 to-transparent" />
      </div>
      <div className="px-page relative py-16">
        <HeroEyebrow>MISSION BRIEFING  ·  {mission.briefingId}</HeroEyebrow>
        <DisplayLines
          className="mt-4 font-display text-[56px] leading-none font-extrabold text-navy md:text-[78px]"
          lines={[mission.name]}
          delay={0.18}
        />
        <motion.p
          className="mt-3 font-condensed text-[34px] text-cobalt md:text-[42px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.enter, delay: 0.36, ease: easeOutLux }}
        >
          {mission.subtitle}
        </motion.p>
        <motion.p
          className="mt-6 max-w-[560px] font-body text-[18px] leading-7 text-mute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.48, ease: easeOutLux }}
        >
          {mission.lead}
        </motion.p>
        <motion.dl
          className="mt-10 grid max-w-[690px] grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.58, ease: easeOutLux }}
        >
          {[
            [mission.date, "Дата запуска"],
            [mission.durationLong, "Длительность"],
            [mission.altitude, "Апогей"],
            [mission.weightless, "Невесомость"],
            [mission.startFull, "Точка старта"],
            [mission.seats, "Места"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-mono text-[11px] text-mute uppercase">{label}</dt>
              <dd className="mt-2 font-display text-[22px] font-bold text-navy">{value}</dd>
            </div>
          ))}
        </motion.dl>
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.88, ease: easeOutLux }}
        >
          <OrbitalButton href={`/configure?mission=${mission.slug}`}>
            Забронировать место на миссии →
          </OrbitalButton>
          <OrbitalButton href={`/configure?mission=${mission.slug}`} variant="ghost">
            Открыть конфигуратор
          </OrbitalButton>
        </motion.div>
        <div className="mt-10 max-w-[680px] rounded-[20px] bg-white/85 p-7 backdrop-blur-md">
          <p className="font-mono text-[11px] text-violet">ТРАЕКТОРИЯ</p>
          {mission.trajectory.map((line, index) => (
            <p
              key={line}
              className={cn(
                "mt-3 font-body text-[15px]",
                index === mission.trajectory.length - 1 ? "font-ui text-cobalt" : "text-ink",
                index === 1 ? "text-mute" : "",
              )}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MissionItinerary({ slug }: { slug: string }) {
  return (
    <section className="bg-ice px-page py-16">
      <Eyebrow>СЦЕНАРИЙ ПУТЕШЕСТВИЯ</Eyebrow>
      <DisplayLines
        as="h2"
        inView
        className="mt-3 font-display text-[32px] font-extrabold text-navy md:text-[40px]"
        lines={["12 минут, которые", "делят жизнь"]}
        accentIndex={1}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {itineraryScenes.map((scene, index) => (
          <Reveal key={scene.num} delay={index * 0.04} y={16}>
            <article className="rounded-[20px] bg-white p-5">
              <p className="font-mono text-[12px] text-violet">{scene.num}</p>
              <h3 className="mt-2 font-display text-[20px] font-bold text-navy">{scene.title}</h3>
              <p className="mt-2 font-mono text-[12px] text-cobalt">{scene.time}</p>
              <p className="mt-4 font-body text-[14px] leading-6 text-mute">{scene.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="group relative min-h-[420px] overflow-hidden rounded-[24px]">
          <Image
            src="/orbital/plate-seat-map.png"
            alt=""
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="800px"
          />
        </div>
        <div className="rounded-[24px] bg-white p-8">
          <p className="font-mono text-[12px] text-violet">МЕСТА В КАПСУЛЕ</p>
          <p className="mt-2 font-body text-[15px] text-mute">
            Шесть кресел у панорамы. A1–A3 — первый ряд к Земле.
          </p>
          <ul className="mt-8 space-y-3">
            {capsuleSeats.map((seat) => (
              <li
                key={seat.code}
                className={cn(
                  "flex items-center justify-between rounded-[16px] border px-5 py-5",
                  seat.status === "selected" ? "border-violet bg-[#ececff]" : "border-line bg-ice",
                )}
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-[18px] font-bold text-navy">{seat.code}</span>
                  <span className="font-ui text-[15px] text-ink">{seat.name}</span>
                </div>
                <span
                  className={cn(
                    "font-ui text-[13px] font-semibold",
                    seat.status === "selected" ? "text-violet" : "text-mute",
                  )}
                >
                  {seat.statusLabel}
                </span>
              </li>
            ))}
          </ul>
          <OrbitalButton href={`/configure?mission=${slug}`} className="mt-8">
            Забронировать место на миссии →
          </OrbitalButton>
        </div>
      </div>
    </section>
  );
}
