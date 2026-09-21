"use client";

import { useMemo, useState } from "react";
import { archiveFlights, launchWindows, sites, statusKind, weatherKind } from "@/data/orbital";
import { Chip, Chromatic, Kicker, LiveDot, OrbButton, Photo } from "@/components/orbital/ui";

const seasons = [
  { id: "autumn", label: "Осень 2026" },
  { id: "winter", label: "Зима 2027" },
  { id: "all", label: "Весь год" },
] as const;

const types = [
  { id: "all", label: "Все" },
  { id: "shared", label: "Shared" },
  { id: "private", label: "Private" },
  { id: "solo", label: "Solo" },
  { id: "ceremony", label: "Ceremony" },
] as const;

export function ManifestView() {
  const [season, setSeason] = useState<(typeof seasons)[number]["id"]>("autumn");
  const [type, setType] = useState<(typeof types)[number]["id"]>("all");

  const rows = useMemo(() => {
    return launchWindows.filter((row) => {
      const seasonOk = season === "all" || season === "autumn" ? true : row.season === "winter";
      const autumnKeepsDesign = season === "autumn";
      const typeOk = type === "all" || row.type === type;
      if (autumnKeepsDesign && type === "all") return true;
      if (season === "autumn" && type !== "all") return row.season === "autumn" && typeOk;
      return seasonOk && typeOk;
    });
  }, [season, type]);

  return (
    <main className="px-5 pb-6 pt-6 min-[1100px]:px-16">
      <div className="flex items-center gap-3">
        <Kicker>OPERATIONS  ·  LIVE</Kicker>
        <LiveDot />
      </div>
      <h1 className="mt-3 font-display text-6xl font-bold tracking-[-0.04em] min-[1100px]:text-[68px]">
        <Chromatic>Журнал окон.</Chromatic>
      </h1>
      <p className="mt-3 max-w-3xl font-body text-xl text-indigo">
        Не витрина. Расписание, погода и свободные кресла — до того, как вы напишете заявку.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-2">
        <span className="mr-2 font-telemetry text-[11px] uppercase tracking-[0.12em] text-mute">Сезон</span>
        {seasons.map((item) => (
          <button key={item.id} type="button" onClick={() => setSeason(item.id)}>
            <Chip kind={season === item.id ? "cobalt" : "soft"}>{item.label}</Chip>
          </button>
        ))}
        <span className="ml-4 mr-2 font-telemetry text-[11px] uppercase tracking-[0.12em] text-mute">Тип</span>
        {types.map((item) => (
          <button key={item.id} type="button" onClick={() => setType(item.id)}>
            <Chip kind={type === item.id ? "violet" : "ghost"}>{item.label}</Chip>
          </button>
        ))}
      </div>

      <div className="mt-5 overflow-x-auto rounded-3xl bg-white ring-1 ring-cobalt/20">
        <table className="w-full min-w-[980px] border-collapse text-left">
          <thead>
            <tr className="font-telemetry text-[11px] uppercase tracking-[0.1em] text-cobalt">
              {["Код", "Дата", "Площадка", "Капсула", "Миссия", "Кресла", "Погода", "Статус"].map((head) => (
                <th key={head} className="px-4 py-5 font-semibold">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.code} className={index % 2 === 0 ? "bg-pale/80" : ""}>
                <td className="px-4 py-4 font-display text-[15px] font-semibold">{row.code}</td>
                <td className="px-4 py-4 font-body text-[15px]">{row.date}</td>
                <td className="px-4 py-4 font-body text-[15px]">{row.site}</td>
                <td className="px-4 py-4 font-body text-[15px]">{row.capsule}</td>
                <td className="px-4 py-4 font-body text-[15px]">{row.mission}</td>
                <td className="px-4 py-4 font-body text-[15px]">{row.seats}</td>
                <td className="px-4 py-4"><Chip kind={weatherKind(row.weather)}>{row.weather}</Chip></td>
                <td className="px-4 py-4"><Chip kind={statusKind(row.status)}>{row.status}</Chip></td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-8 font-body text-indigo">В этом срезе открытых окон нет.</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <p className="mt-3 font-telemetry text-xs tracking-[0.06em] text-mute">
        CLEAR  чистое окно     WATCH  ветер под наблюдением     HOLD  пуск на паузе
      </p>

      <section id="sites" className="mt-8 grid gap-4 min-[1100px]:grid-cols-[minmax(0,980px)_1fr]">
        <div className="rounded-[28px] bg-white p-6 ring-1 ring-cobalt/20">
          <Kicker>LAUNCH Geography</Kicker>
          <h2 className="mt-2 font-display text-[28px] font-bold">Три площадки. Одна дуга.</h2>
          <svg viewBox="0 0 916 380" className="mt-1 h-auto w-full" role="img" aria-label="Карта площадок ARAL, RIDGE и FJORD">
            <circle cx="458" cy="430" r="390" fill="none" stroke="#0047FF" strokeWidth="2" />
            <path d="M150 250 A 320 250 0 0 1 780 250" fill="none" stroke="#6D28FF" strokeWidth="2" />
            {[
              [210, 168, "ARAL", "2 OPEN"],
              [458, 78, "RIDGE", "1 OPEN"],
              [710, 176, "FJORD", "1 OPEN"],
            ].map(([x, y, name, meta]) => (
              <g key={String(name)}>
                <circle cx={Number(x)} cy={Number(y)} r="10" fill="#0047FF" opacity="0.25" />
                <circle cx={Number(x)} cy={Number(y)} r="5" fill="#fff" stroke="#0047FF" strokeWidth="2" />
                <text x={Number(x) + 14} y={Number(y) - 4} fill="#080A16" fontSize="16" fontFamily="var(--font-display), sans-serif">
                  {name}
                </text>
                <text x={Number(x) + 14} y={Number(y) + 16} fill="#6D28FF" fontSize="12" fontFamily="var(--font-telemetry), monospace">
                  {meta}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="rounded-[28px] bg-gradient-to-b from-ink to-[#1C1254] p-7 text-white">
          {sites.map((site) => (
            <article key={site.name} className="mb-6 last:mb-0">
              <p className="font-telemetry text-[11px] tracking-[0.12em] text-[#AABEFF]">{site.coord}</p>
              <h3 className="font-display text-2xl font-bold tracking-wide">{site.name}</h3>
              <p className="mt-2 font-body text-[15px] leading-relaxed text-white/90">{site.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <Kicker>ARCHIVE  ·  KARMAN CROSSED</Kicker>
        <h2 className="mt-3 font-display text-[32px] font-bold">Уже было. Поэтому можно верить журналу.</h2>
        <div className="mt-6 grid gap-4 min-[800px]:grid-cols-3">
          {archiveFlights.map((flight) => (
            <article key={flight.code}>
              <div className="relative h-[280px] overflow-hidden rounded-3xl">
                <Photo src={flight.image} alt={flight.alt} position={flight.position} />
                <div className="absolute bottom-4 left-4">
                  <Chip kind="violet">Karman crossed</Chip>
                </div>
              </div>
              <p className="mt-3 font-telemetry text-xs uppercase tracking-[0.1em] text-cobalt">{flight.code}</p>
              <h3 className="font-display text-[22px] font-bold">{flight.name}</h3>
              <p className="font-body text-sm text-indigo">{flight.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="font-display text-[32px] font-bold">Свободное кресло не ждёт витрину.</h2>
        <div className="mt-6">
          <OrbButton href="/request">Занять свободное кресло</OrbButton>
        </div>
      </section>
    </main>
  );
}
