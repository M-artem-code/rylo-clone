"use client";

import { useMemo, useState } from "react";

import { routes } from "@/data/site";
import { studioPage, type StudioFixture, type StudioTime } from "@/data/studio";

import { CoverImage } from "./cover-image";
import { SiteHeader } from "./site-header";
import { SiteLabel } from "./site-label";
import { VantaButton } from "./vanta-button";

export function StudioView() {
  const [sceneName, setSceneName] = useState(studioPage.scenes[0].name);
  const [brightness, setBrightness] = useState(studioPage.scenes[0].brightness);
  const [kelvin, setKelvin] = useState(studioPage.scenes[0].kelvin);
  const [fixture, setFixture] = useState<StudioFixture>(studioPage.scenes[0].fixture);
  const [time, setTime] = useState<StudioTime>(studioPage.scenes[0].time);

  const scene = useMemo(
    () => studioPage.scenes.find((item) => item.name === sceneName) ?? studioPage.scenes[0],
    [sceneName],
  );

  const warmth = Math.max(0, Math.min(1, (4000 - kelvin) / 1800));
  const shade = 0.1 + (1 - brightness / 100) * 0.36;

  function applyScene(name: string) {
    const next = studioPage.scenes.find((item) => item.name === name);
    if (!next) return;
    setSceneName(next.name);
    setBrightness(next.brightness);
    setKelvin(next.kelvin);
    setFixture(next.fixture);
    setTime(next.time);
  }

  return (
    <main className="min-h-screen bg-void">
      <SiteHeader
        active="Studio"
        cta={{ label: "Create your lighting concept", href: routes.contact }}
      />
      <div className="grid min-h-[calc(100vh-76px)] lg:grid-cols-[1fr_640px]">
        <section className="relative min-h-[520px]">
          <CoverImage
            key={scene.image}
            src={scene.image}
            alt={scene.name}
            className="absolute inset-0"
            motion="scene"
          />
          <div
            aria-hidden
            className="vanta-studio-wash pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(201, 166, 107, ${0.03 + warmth * 0.1}) 0%, rgba(8, 8, 9, ${shade}) 100%)`,
            }}
          />
          <div className="absolute left-6 top-6 flex gap-8 md:left-12">
            {studioPage.times.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTime(item)}
                className={`vanta-time-link font-mono text-[11px] tracking-[0.14em] ${item === time ? "is-on" : ""}`}
              >
                <span className={item === time ? "text-amber" : "text-muted-vanta"}>
                  {item}
                </span>
                <span className="vanta-time-rule mt-1 block h-px w-full bg-amber" />
              </button>
            ))}
          </div>
          <p className="absolute bottom-6 left-6 font-mono text-[11px] tracking-[0.14em] text-muted-vanta md:left-12">
            X 0.40   Y 1.20   Z 2.80    ·    {kelvin}K    ·    {scene.name}
          </p>
        </section>
        <aside className="border-l border-graph bg-ink px-8 py-10 md:px-10">
          <SiteLabel>{studioPage.kicker}</SiteLabel>
          <h1 className="mt-2 font-fraunces text-[40px] text-milk">{studioPage.title}</h1>
          <Field label="Space" value={scene.space} />
          <Field label="Mood" value={scene.name} />
          <Field label="Brightness" value={`${brightness}%`} />
          <input
            type="range"
            min={10}
            max={100}
            value={brightness}
            onChange={(event) => setBrightness(Number(event.target.value))}
            className="vanta-range mt-2 w-full"
            aria-label="Brightness"
          />
          <Field label="Color temperature" value={`${kelvin}K`} />
          <div
            className="mt-3 h-2 w-full"
            style={{
              background:
                "linear-gradient(90deg, #e8b060 0%, #e8e8ec 100%)",
            }}
          />
          <input
            type="range"
            min={2200}
            max={4000}
            step={50}
            value={kelvin}
            onChange={(event) => setKelvin(Number(event.target.value))}
            className="vanta-range mt-2 w-full"
            aria-label="Color temperature"
          />
          <SiteLabel className="mt-8">Fixtures</SiteLabel>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {studioPage.fixtures.map((name) => (
              <VantaButton
                key={name}
                filled={fixture === name}
                onClick={() => setFixture(name)}
                className="h-9 px-[18px]"
              >
                {name}
              </VantaButton>
            ))}
          </div>
          <SiteLabel className="mt-8">Placement</SiteLabel>
          <p className="mt-3 font-news text-[18px] text-milk-soft">{scene.placement}</p>
          <SiteLabel className="mt-8">Scene</SiteLabel>
          <div className="mt-3 flex flex-wrap gap-2">
            {studioPage.scenes.map((item) => (
              <VantaButton
                key={item.name}
                filled={item.name === sceneName}
                onClick={() => applyScene(item.name)}
                className="h-[34px] px-3.5"
              >
                {item.name}
              </VantaButton>
            ))}
          </div>
          <div className="mt-12">
            <VantaButton href={studioPage.cta.href} filled>
              {studioPage.cta.label}
            </VantaButton>
          </div>
        </aside>
      </div>
    </main>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-6 flex items-end justify-between border-b border-graph pb-3">
      <span className="font-mono text-[11px] tracking-[0.16em] text-muted-vanta">
        {label}
      </span>
      <span key={value} className="vanta-value-tick font-sans text-[15px] text-milk">
        {value}
      </span>
    </div>
  );
}
