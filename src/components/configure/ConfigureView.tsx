"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { type ReactNode, useMemo, useState } from "react";

import { CountNumber } from "@/components/motion/CountNumber";
import { DisplayLines } from "@/components/motion/DisplayLines";
import { HeroEyebrow } from "@/components/motion/HeroEyebrow";
import { SwapText } from "@/components/motion/SwapText";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { configure } from "@/data/configure";
import { missions } from "@/data/missions";
import { duration, easeOutLux } from "@/lib/motion";

export function ConfigureView() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("mission") ?? "aurora";
  const [slug, setSlug] = useState(missions.some((item) => item.slug === initial) ? initial : "aurora");
  const [program] = useState(configure.programs[0]);
  const [passengers, setPassengers] = useState(configure.defaultPassengers);
  const [seat, setSeat] = useState(configure.seats[0].code);
  const [archive, setArchive] = useState(true);
  const mission = missions.find((item) => item.slug === slug) ?? missions[0];
  const seatLabel = configure.seats.find((item) => item.code === seat)?.label ?? seat;

  const estimate = useMemo(() => {
    const perPair = configure.basePairPrice;
    const scaled = Math.round((perPair / 2) * passengers);
    const extra = archive ? configure.options[0].price : 0;
    return { total: scaled + extra, extra };
  }, [archive, passengers]);

  function submit() {
    const query = new URLSearchParams({
      mission: mission.slug,
      passengers: String(passengers),
      seat,
      program,
    });
    router.push(`/contacts?${query.toString()}`);
  }

  return (
    <main className="min-h-[calc(100vh-72px)] bg-ice px-page py-12">
      <HeroEyebrow>{configure.eyebrow}</HeroEyebrow>
      <DisplayLines
        className="mt-3 font-display text-[36px] leading-[0.95] font-extrabold text-navy"
        lines={configure.lines}
        accentIndex={1}
        delay={0.14}
      />

      <div className="mt-10 grid gap-8 xl:grid-cols-[390px_minmax(0,1fr)_360px]">
        <div className="space-y-4">
          <Field label="Миссия">
            <select
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
              className="w-full bg-transparent font-ui text-[17px] font-semibold text-navy outline-none"
            >
              {missions.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}  ·  {item.filter.toLowerCase()}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Дата">
            <SwapText value={mission.date} className="block font-ui text-[17px] font-semibold text-navy" />
          </Field>
          <Field label="Программа">
            <p className="font-ui text-[17px] font-semibold text-navy">{program}</p>
          </Field>
          <Field label="Пассажиры">
            <select
              value={passengers}
              onChange={(event) => setPassengers(Number(event.target.value))}
              className="w-full bg-transparent font-ui text-[17px] font-semibold text-navy outline-none"
            >
              {[1, 2, 3, 4].map((count) => (
                <option key={count} value={count}>
                  {count} {count === 1 ? "путешественник" : "путешественника"}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Место">
            <select
              value={seat}
              onChange={(event) => setSeat(event.target.value)}
              className="w-full bg-transparent font-ui text-[17px] font-semibold text-navy outline-none"
            >
              {configure.seats.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Опции">
            <label className="flex items-center justify-between font-ui text-[17px] font-semibold text-navy">
              <span>Архив полёта 8K</span>
              <input
                type="checkbox"
                checked={archive}
                onChange={(event) => setArchive(event.target.checked)}
                className="size-4 accent-violet"
              />
            </label>
          </Field>
        </div>

        <div className="relative min-h-[520px]">
          <Image src={configure.image} alt="" fill className="object-contain object-center" sizes="700px" />
          <Chip className="top-8 left-8" label="Высота" value={mission.altitude} delay={0.2} />
          <Chip className="top-12 right-8" label="Невесомость" value={mission.weightless} delay={0.32} />
          <Chip className="bottom-10 left-16" label={`Место ${seat}`} value="выбрано" delay={0.44} />
        </div>

        <motion.aside
          className="rounded-[24px] bg-white p-7"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.enter, delay: 0.2, ease: easeOutLux }}
        >
          <p className="font-mono text-[11px] text-violet">ЖИВАЯ СМЕТА</p>
          <p className="mt-3 font-display text-[32px] font-extrabold text-navy">
            <CountNumber value={estimate.total} />
          </p>
          <p className="mt-2 font-body text-[14px] text-mute">
            {passengers === 2 ? "за двоих · Signature" : `за ${passengers} · ${program}`}
          </p>
          <dl className="mt-8 space-y-3">
            {[
              ["Длительность", mission.durationLong],
              ["Высота", mission.altitude],
              ["Невесомость", mission.weightless],
              ["Места", seatLabel],
              ["Подготовка", "5 недель"],
              ["Архив 8K", archive ? "включено" : "нет"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-line pb-3">
                <dt className="font-ui text-[14px] text-mute">{label}</dt>
                <dd className="font-ui text-[14px] font-semibold text-navy">
                  <SwapText value={value} />
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 rounded-[14px] bg-ice px-5 py-4">
            <p className="font-ui text-[12px] text-mute">Изменение</p>
            <p className="mt-1 font-ui text-[14px] font-semibold text-violet">
              {archive ? (
                <>
                  + <CountNumber value={estimate.extra} />  ·  архив
                </>
              ) : (
                "без архива полёта"
              )}
            </p>
          </div>
          <OrbitalButton className="mt-8 w-full" onClick={submit}>
            {configure.cta}
          </OrbitalButton>
          <p className="mt-5 font-body text-[13px] text-mute">{configure.note}</p>
        </motion.aside>
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="orbital-field block rounded-[16px] bg-white px-5 py-4 focus-within:shadow-[0_0_0_4px_rgba(124,58,237,0.1)]">
      <span className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-wide text-mute uppercase">
        {label}
        <span className="border-t-6 border-r-4 border-l-4 border-t-violet border-r-transparent border-l-transparent" />
      </span>
      {children}
    </label>
  );
}

function Chip({
  label,
  value,
  className,
  delay = 0,
}: {
  label: string;
  value: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-[16px] bg-white/90 px-5 py-3 backdrop-blur-md ${className ?? ""}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: easeOutLux }}
    >
      <p className="font-mono text-[10px] text-mute uppercase">{label}</p>
      <SwapText value={value} className="mt-1 block font-display text-[18px] font-bold text-navy" />
    </motion.div>
  );
}
