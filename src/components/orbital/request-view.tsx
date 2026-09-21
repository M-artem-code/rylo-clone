"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { requestSteps } from "@/data/orbital";
import { Trajectory } from "@/components/orbital/trajectory";
import { ArrowLink, Chip, Chromatic, Kicker, LiveDot, OrbButton } from "@/components/orbital/ui";

export function RequestView() {
  const router = useRouter();
  const [primary, setPrimary] = useState("28 окт 2026");
  const [alternate, setAlternate] = useState("21 ноя 2026");
  const [error, setError] = useState("");

  function submit() {
    if (!primary.trim()) {
      setError("Нужно основное окно. Без даты dossier не открывается.");
      return;
    }
    const query = new URLSearchParams({
      primary: primary.trim().slice(0, 40),
      alternate: alternate.trim().slice(0, 40),
    });
    router.push(`/request/confirmed?${query.toString()}`);
  }

  return (
    <main className="px-5 pb-8 pt-5 min-[1100px]:px-16">
      <div className="flex items-center gap-3">
        <Kicker>LAUNCH REQUEST  ·  STEP 03 / 06</Kicker>
        <LiveDot />
      </div>
      <div className="mt-3 grid gap-8 min-[1100px]:grid-cols-[minmax(0,1fr)_416px]">
        <div>
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.03em] min-[1100px]:text-[58px]">
            <Chromatic>Лист перед</Chromatic>
            <br />
            <Chromatic>запуском.</Chromatic>
          </h1>
          <p className="mt-3 max-w-3xl font-body text-lg text-indigo">
            Шесть шагов. Поля как телеметрия. Окно справа — та же дуга, что в журнале.
          </p>

          <ol className="mt-8 space-y-3">
            {requestSteps.slice(0, 2).map((step) => (
              <li key={step.num} className="grid items-center gap-3 rounded-2xl bg-white px-5 py-3 ring-1 ring-cobalt/15 min-[800px]:grid-cols-[48px_220px_minmax(0,1fr)_40px]">
                <span className="font-telemetry text-[13px] text-cobalt">{step.num}</span>
                <span className="font-display text-[15px] font-semibold">{step.title}</span>
                <span className="font-body text-sm text-indigo">{step.meta}</span>
                <span className="font-telemetry text-xs text-cobalt">OK</span>
              </li>
            ))}
          </ol>

          <form
            className="mt-3 rounded-[28px] bg-white p-6 ring-1 ring-cobalt/25"
            onSubmit={(event) => {
              event.preventDefault();
              submit();
            }}
          >
            <Kicker>STEP 03  ·  WINDOWS</Kicker>
            <h2 className="mt-2 font-display text-[26px] font-bold">Три попытки на осень.</h2>
            <div className="mt-6 space-y-5">
              <WindowField label="PRIMARY" value={primary} onChange={setPrimary} site="RIDGE" code="ORB-187" />
              <WindowField label="ALTERNATE" value={alternate} onChange={setAlternate} site="ARAL" code="ORB-196" />
              <div>
                <p className="font-telemetry text-[11px] uppercase tracking-[0.12em] text-cobalt">HOLD</p>
                <div className="mt-1 grid gap-2 min-[800px]:grid-cols-[1fr_160px_120px] font-display text-lg font-semibold">
                  <span>без третьего окна</span>
                  <span>—</span>
                  <span className="font-telemetry text-sm text-violet">—</span>
                </div>
                <div className="luminous-rule mt-3" />
              </div>
            </div>
            {error ? <p className="mt-4 font-body text-sm text-violet">{error}</p> : null}
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip>Private Arc</Chip>
              <Chip kind="violet">2 seats</Chip>
              <Chip kind="ghost">Guests on pavilion</Chip>
            </div>
          </form>

          <ol className="mt-3 space-y-3">
            {requestSteps.slice(3).map((step) => (
              <li key={step.num} className="grid items-center gap-3 rounded-2xl bg-white px-5 py-3 ring-1 ring-cobalt/15 min-[800px]:grid-cols-[48px_240px_minmax(0,1fr)]">
                <span className="font-telemetry text-[13px] text-mute">{step.num}</span>
                <span className="font-display text-[15px] font-medium">{step.title}</span>
                <span className="font-body text-sm text-indigo">{step.meta}</span>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <OrbButton type="button" onClick={submit}>Отправить заявку</OrbButton>
            <ArrowLink href="/manifest">Сохранить черновик dossier</ArrowLink>
          </div>
        </div>
        <TrajectoryPanel />
      </div>
    </main>
  );
}

function WindowField({
  label,
  value,
  onChange,
  site,
  code,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  site: string;
  code: string;
}) {
  return (
    <label className="block">
      <span className="font-telemetry text-[11px] uppercase tracking-[0.12em] text-cobalt">{label}</span>
      <span className="mt-1 grid items-center gap-2 min-[800px]:grid-cols-[1fr_120px_120px]">
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="bg-transparent font-display text-lg font-semibold text-ink outline-none"
          aria-label={label}
        />
        <span className="font-display text-lg font-semibold">{site}</span>
        <span className="font-telemetry text-sm text-violet">{code}</span>
      </span>
      <span className="luminous-rule mt-3 block" />
    </label>
  );
}

export function TrajectoryPanel() {
  return (
    <aside className="h-fit rounded-[28px] bg-white p-6 ring-1 ring-violet/30">
      <Kicker>TRAJECTORY  ·  ORB-187</Kicker>
      <p className="mt-2 font-num text-[42px] font-bold leading-none">104 км</p>
      <p className="font-body text-sm text-indigo">номинальный апогей</p>
      <div className="mt-4">
        <Trajectory compact />
      </div>
      <dl className="mt-2">
        {[
          ["T−0", "RIDGE DAWN"],
          ["SEP", "T+ 00:02:10"],
          ["APOGEE", "104.0 KM"],
          ["KARMAN", "100 KM"],
          ["0 G", "04:05"],
          ["LAND", "RIDGE"],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between border-b border-cobalt/15 py-2">
            <dt className="font-telemetry text-xs tracking-[0.08em] text-cobalt">{label}</dt>
            <dd className="font-display text-sm font-semibold">{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
