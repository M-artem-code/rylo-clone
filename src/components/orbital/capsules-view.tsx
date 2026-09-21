"use client";

import { useState } from "react";
import { capsules, type CapsuleId } from "@/data/orbital";
import { Chip, Chromatic, Kicker, OrbButton, Photo } from "@/components/orbital/ui";

const order: CapsuleId[] = ["LUMEN", "VEIL", "MONAD"];

const frames = [
  { id: "ramp", label: "День на рампе", src: "/orbital/launch-dawn.png", caption: "T− 02:10:00  ·  RAMP", alt: "Капсула на рампе на рассвете", position: "center 45%" },
  { id: "hangar", label: "Ночь в ангаре", src: "/orbital/hangar.png", caption: "HANGAR  ·  NIGHT WASH", alt: "Капсула в ангаре ночью", position: "center center" },
  { id: "zero", label: "Минута невесомости", src: "/orbital/float.png", caption: "T+ 00:06:40  ·  0 G", alt: "Минута невесомости в белой капсуле", position: "center 35%" },
];

export function CapsulesView() {
  const [id, setId] = useState<CapsuleId>("LUMEN");
  const [frame, setFrame] = useState("ramp");
  const model = capsules[id];

  return (
    <main>
      <section className="grid items-start gap-6 px-5 pt-4 min-[1100px]:grid-cols-[minmax(0,640px)_1fr] min-[1100px]:px-16">
        <div>
          <Kicker>{`SHOWROOM  ·  ${id}`}</Kicker>
          <h1 className="mt-3 font-display text-6xl font-bold leading-[0.92] tracking-[-0.04em] min-[1100px]:text-[72px]">
            <Chromatic>Капсула</Chromatic>
            <br />
            <Chromatic>как объект.</Chromatic>
          </h1>
          <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-indigo">
            Три корпуса. Один ритуал посадки в кресло. Сейчас на подиуме — {id}, {model.seats} {id === "MONAD" ? "место" : "мест"}, {model.line}.
          </p>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Модель капсулы">
            {order.map((name) => (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={name === id}
                onClick={() => setId(name)}
                className={`h-11 rounded-full px-5 font-display text-base font-semibold tracking-wide ${name === id ? "bg-gradient-to-r from-cobalt to-violet text-white" : "bg-white text-ink ring-1 ring-cobalt/30"}`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="relative h-[520px] min-[1100px]:h-[640px]">
          <Photo src={model.image} alt={`Капсула ${id} на белом подиуме`} position={model.position} />
          <svg className="pointer-events-none absolute left-1/2 top-[42%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#0047FF" strokeWidth="1.2" strokeDasharray="3 3.4" />
            <path d="M28 146a76 76 0 0 1 148-50" fill="none" stroke="#6D28FF" strokeWidth="1.6" />
            <circle cx="168" cy="70" r="3" fill="#fff" stroke="#6D28FF" />
          </svg>
          <div className="absolute bottom-6 left-8 flex flex-wrap gap-2">
            <Chip>{`${model.seats} seats`}</Chip>
            <Chip kind="violet">{model.view}</Chip>
            <Chip kind="ghost">{id === "LUMEN" ? "100 km" : id === "VEIL" ? "104 km" : "108 km"}</Chip>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 min-[1100px]:px-16">
        <Kicker>{`INSIDE ${id}`}</Kicker>
        <h2 className="mt-3 font-display text-[42px] font-bold">Что внутри, без догадок.</h2>
        <div className="mt-6 grid gap-4 min-[800px]:grid-cols-3">
          <article className="relative h-[300px] rounded-3xl bg-white p-4 ring-1 ring-cobalt/20">
            <p className="font-telemetry text-[11px] uppercase tracking-[0.12em] text-cobalt">01  ·  Cutaway</p>
            <Cutaway seats={model.seatCount} name={id} />
          </article>
          <Module image="/orbital/earth-window.png" alt="Иллюминатор 220 градусов" title="02  ·  Иллюминатор 220°" position="center 50%" />
          <Module image="/orbital/seat.png" alt="Кресло с фиолетовой подсветкой" title="03  ·  Кресло" position="center 40%" />
          <Module image="/orbital/helmet.png" alt="Шлем с кобальтовым бликом" title="04  ·  Шлем" position="center 40%" />
          <article className="flex h-[300px] flex-col rounded-3xl bg-white p-5 ring-1 ring-cobalt/20">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cobalt shadow-[0_0_8px_#0047FF]" />
              <p className="font-telemetry text-[11px] uppercase tracking-[0.12em] text-cobalt">CABIN LOOP</p>
            </div>
            <ul className="mt-4 space-y-3">
              {[
                ["PRESS", "101.3 kPa", "86%"],
                ["O₂", "20.9%", "70%"],
                ["CO₂", "0.38%", "24%"],
                ["TEMP", "21.4°C", "58%"],
                ["G", "1.00", "42%"],
              ].map(([label, value, width]) => (
                <li key={label}>
                  <div className="flex justify-between font-telemetry text-[11px]">
                    <span className="text-indigo">{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-pale">
                    <div className="h-1.5 rounded-full bg-gradient-to-r from-cobalt to-violet" style={{ width }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-auto font-telemetry text-[11px] uppercase tracking-[0.1em] text-ink">05  ·  Телеметрия</p>
          </article>
          <Module image="/orbital/float.png" alt="Вид из кресла в минуту невесомости" title="06  ·  Вид из кресла" position="center 35%" />
        </div>
      </section>

      <section className="px-5 min-[1100px]:px-16">
        <div className="grid gap-4 rounded-[28px] bg-ink px-6 py-7 text-white min-[800px]:grid-cols-6">
          {[
            ["Объём", model.volume],
            ["Обзор", model.view],
            ["Max G", model.maxG],
            ["ECLSS", model.eclss],
            ["Посадка", model.landing],
            ["Кресла", model.seats],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="font-telemetry text-[11px] uppercase tracking-[0.12em] text-[#8CA8FF]">{label}</p>
              <p className="mt-2 font-num text-[32px] font-bold">{value}</p>
            </div>
          ))}
          <p className="min-[800px]:col-span-6 font-telemetry text-[11px] tracking-[0.1em] text-[#B4BEFF]">{model.note}</p>
        </div>
      </section>

      <section className="px-5 py-8 min-[1100px]:px-16">
        <Kicker>THREE MINUTES OF THE OBJECT</Kicker>
        <h2 className="mt-3 font-display text-[40px] font-bold">День, ночь, невесомость.</h2>
        <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Состояние капсулы">
          {frames.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={frame === item.id}
              onClick={() => setFrame(item.id)}
              className={`h-10 rounded-full px-4 font-display text-sm font-semibold ${frame === item.id ? "bg-gradient-to-r from-cobalt to-violet text-white" : "bg-white text-indigo ring-1 ring-cobalt/25"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 min-[800px]:grid-cols-3">
          {frames.map((item) => {
            const active = frame === item.id;
            return (
              <button key={item.id} type="button" onClick={() => setFrame(item.id)} className="text-left">
                <div className="flex h-[340px] items-end">
                  <div className={`relative w-full overflow-hidden rounded-3xl ${active ? "h-[340px] shadow-[0_0_40px_rgba(0,71,255,0.28)]" : "h-[304px]"}`}>
                    <Photo src={item.src} alt={item.alt} position={item.position} />
                  </div>
                </div>
                <p className={`mt-3 font-telemetry text-xs tracking-[0.08em] ${active ? "text-cobalt" : "text-mute"}`}>{item.caption}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="px-5 pb-8 min-[1100px]:px-16">
        <Kicker>THE REST OF THE COLLECTION</Kicker>
        <div className="mt-5 grid gap-5 min-[800px]:grid-cols-2">
          {order
            .filter((name) => name !== id)
            .map((name) => {
              const item = capsules[name];
              return (
                <button key={name} type="button" onClick={() => setId(name)} className="flex gap-4 rounded-3xl bg-white p-4 text-left ring-1 ring-cobalt/20">
                  <div className="relative h-36 w-40 shrink-0 overflow-hidden rounded-2xl">
                    <Photo src={item.image} alt={name} position={item.position} />
                  </div>
                  <div className="py-2">
                    <h3 className="font-display text-[28px] font-bold">{name}</h3>
                    <p className="mt-1 font-telemetry text-xs uppercase tracking-[0.12em] text-violet">{item.line}</p>
                    <p className="mt-3 font-body text-base text-indigo">
                      {name === "MONAD" ? "1 кресло" : name === "VEIL" ? "2–4 кресла" : "6 кресел"}   ·   {item.volume}   ·   {item.view}
                    </p>
                  </div>
                </button>
              );
            })}
        </div>
      </section>

      <section className="px-5 py-10 min-[1100px]:px-16">
        <h2 className="font-display text-4xl font-bold">Сесть можно до полёта.</h2>
        <p className="mt-3 max-w-2xl font-body text-lg text-indigo">Fitting и час в кресле {id} входят в допуск. Это не шоурум на словах.</p>
        <div className="mt-6">
          <OrbButton href="/request">Сесть в эту капсулу</OrbButton>
        </div>
      </section>
    </main>
  );
}

function Module({ image, alt, title, position }: { image: string; alt: string; title: string; position: string }) {
  return (
    <article className="relative h-[300px] overflow-hidden rounded-3xl ring-1 ring-cobalt/20">
      <Photo src={image} alt={alt} position={position} />
      <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/90 px-3 py-2">
        <p className="font-telemetry text-[11px] uppercase tracking-[0.1em] text-cobalt">{title}</p>
      </div>
    </article>
  );
}

function Cutaway({ seats, name }: { seats: number; name: string }) {
  const cols = seats === 1 ? 1 : seats === 4 ? 2 : 3;
  return (
    <div className="mt-3 grid h-[240px] grid-cols-[1fr_auto] gap-3">
      <svg viewBox="0 0 180 220" className="h-full w-full" role="img" aria-label={`Разрез капсулы ${name}`}>
        <rect x="48" y="18" width="84" height="184" rx="42" fill="none" stroke="#0047FF" strokeWidth="2" />
        <circle cx="90" cy="62" r="22" fill="rgba(109,40,255,0.2)" stroke="#6D28FF" strokeWidth="2" />
        {Array.from({ length: seats }).map((_, index) => {
          const col = index % cols;
          const row = Math.floor(index / cols);
          return <rect key={index} x={62 + col * 22} y={110 + row * 28} width="16" height="14" rx="3" fill="#E9EFFF" stroke="#0047FF" />;
        })}
      </svg>
      <ul className="space-y-3 self-center font-telemetry text-[10px] tracking-wide">
        <li className="text-violet">WINDOW {name === "LUMEN" ? "220°" : name === "VEIL" ? "240°" : "260°"}</li>
        <li className="text-cobalt">SEAT RAIL</li>
        <li className="text-indigo">ECLSS</li>
        <li className="text-indigo">HATCH</li>
      </ul>
    </div>
  );
}
