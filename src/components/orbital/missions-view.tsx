"use client";

import { useState } from "react";
import { calculatorSlots, missions } from "@/data/orbital";
import { Trajectory } from "@/components/orbital/trajectory";
import { Chip, Chromatic, Kicker, OrbButton } from "@/components/orbital/ui";

type SlotKey = keyof typeof calculatorSlots;

export function MissionsView() {
  const [klass, setKlass] = useState<SlotKey>("Private");
  const [seats, setSeats] = useState(2);
  const slot = calculatorSlots[klass];

  return (
    <main className="px-5 pb-8 pt-7 min-[1100px]:px-16">
      <Kicker>MISSIONS  ·  COMPARE</Kicker>
      <h1 className="mt-3 font-display text-6xl font-bold leading-[0.92] tracking-[-0.04em] min-[1100px]:text-[76px]">
        <Chromatic>Выберите</Chromatic>
        <br />
        <Chromatic>траекторию.</Chromatic>
      </h1>
      <p className="mt-4 max-w-3xl font-body text-[22px] leading-relaxed text-indigo">
        Четыре способа пересечь одну линию. Разница — кто рядом и насколько высока дуга.
      </p>
      <div className="mt-9 grid gap-6 min-[1100px]:grid-cols-[minmax(0,1fr)_408px]">
        <div className="space-y-4">
          {missions.map((mission) => {
            const selected = mission.name.startsWith(klass === "Shared" ? "Shared" : klass === "Private" ? "Private" : klass === "Solo" ? "Solo" : "Horizon");
            return (
              <article
                key={mission.name}
                className={`rounded-[28px] bg-white p-7 ring-1 ${selected ? "shadow-[0_0_40px_rgba(0,71,255,0.15)] ring-cobalt" : "ring-cobalt/20"}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-telemetry text-xs font-semibold tracking-[0.14em] text-violet">{mission.index}</p>
                    <h2 className="mt-1 font-display text-[32px] font-bold">{mission.name}</h2>
                  </div>
                  <div className="text-right">
                    {selected ? <Chip>В калькуляторе</Chip> : null}
                    <p className="mt-2 font-display text-xl font-semibold text-cobalt">{mission.price}</p>
                  </div>
                </div>
                <p className="mt-4 max-w-3xl font-body text-lg text-indigo">{mission.manifesto}</p>
                <dl className="mt-5 grid grid-cols-2 gap-4 min-[800px]:grid-cols-5">
                  {[
                    ["Высота", mission.altitude],
                    ["Невесомость", mission.weightless],
                    ["G-load", mission.gLoad],
                    ["Сезон", mission.season],
                    ["Кресла", mission.seats],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-telemetry text-[11px] uppercase tracking-[0.1em] text-cobalt">{label}</dt>
                      <dd className="mt-1 font-display text-base font-semibold">{value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 font-body text-sm text-ink">Кого берут  ·  {mission.who}</p>
                <p className="mt-1 font-body text-sm text-mute">Входит  ·  {mission.included}</p>
              </article>
            );
          })}
          <p className="rounded-[20px] bg-pale px-6 py-7 font-body text-base text-indigo">
            Слот не равен билету. Окно удерживается на время допуска — 21 день — и подтверждается врачом миссии.
          </p>
        </div>
        <aside className="space-y-5 min-[1100px]:sticky min-[1100px]:top-6 min-[1100px]:self-start">
          <div className="overflow-hidden rounded-[28px] bg-white ring-1 ring-violet/40">
            <div className="h-2 bg-gradient-to-r from-cobalt to-violet" />
            <div className="p-6">
              <Kicker>КАЛЬКУЛЯТОР ОКНА</Kicker>
              <h2 className="mt-2 font-display text-[28px] font-bold">Слот</h2>
              <label className="mt-6 block">
                <span className="font-telemetry text-[11px] uppercase tracking-[0.12em] text-cobalt">Дата</span>
                <span className="mt-1 block font-display text-[22px] font-semibold">{slot.date}</span>
                <span className="mt-2 block h-0.5 luminous-rule" />
              </label>
              <p className="mt-5 font-telemetry text-[11px] uppercase tracking-[0.12em] text-cobalt">Класс</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {(Object.keys(calculatorSlots) as SlotKey[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setKlass(key)}
                    className={`h-9 rounded-full font-display text-[13px] font-semibold ${klass === key ? "bg-gradient-to-r from-cobalt to-violet text-white" : "bg-pale text-ink"}`}
                  >
                    {key}
                  </button>
                ))}
              </div>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="font-telemetry text-[11px] uppercase tracking-[0.12em] text-cobalt">Кресла</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button type="button" aria-label="Меньше кресел" className="h-9 w-9 rounded-full bg-pale font-display text-lg" onClick={() => setSeats((n) => Math.max(1, n - 1))}>−</button>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-white">{seats}</span>
                    <button type="button" aria-label="Больше кресел" className="h-9 w-9 rounded-full bg-pale font-display text-lg" onClick={() => setSeats((n) => Math.min(6, n + 1))}>+</button>
                  </div>
                </div>
                <div>
                  <p className="font-telemetry text-[11px] uppercase tracking-[0.12em] text-cobalt">Площадка</p>
                  <p className="mt-2 font-display text-[22px] font-bold tracking-wide">{slot.site}</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-pale p-4">
                <p className="font-telemetry text-[11px] uppercase tracking-[0.12em] text-violet">Примерный слот</p>
                <p className="mt-1 font-display text-[26px] font-bold">{slot.code}</p>
                <p className="mt-1 font-body text-sm text-indigo">{slot.date}  ·  {slot.detail}</p>
                <p className="font-body text-sm font-medium text-cobalt">{slot.price}</p>
                <p className="mt-1 font-body text-sm text-indigo">Запрошено кресел: {seats}</p>
              </div>
              <div className="mt-5">
                <OrbButton href="/request" className="w-full">Забронировать миссию</OrbButton>
              </div>
              <p className="mt-3 font-body text-xs text-mute">Фиксируется после допуска, не после намерения.</p>
            </div>
          </div>
          <div className="rounded-[28px] bg-white p-6 ring-1 ring-cobalt/25">
            <Kicker>ПОЧЕМУ ИХ ЧЕТЫРЕ</Kicker>
            <p className="mt-3 font-display text-[26px] font-bold leading-tight">
              Один апогей.
              <br />
              Разная компания.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                ["SHARED", "общий горизонт"],
                ["PRIVATE", "закрытый эфир"],
                ["SOLO", "максимальная дуга"],
                ["CEREMONY", "ритуал на земле"],
              ].map(([label, text]) => (
                <li key={label} className="flex gap-4">
                  <span className="w-24 font-telemetry text-[11px] tracking-[0.08em] text-violet">{label}</span>
                  <span className="font-body text-[13px] text-indigo">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Trajectory compact />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
