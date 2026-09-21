import type { CSSProperties } from "react";

import { routes } from "@/data/site";
import { technologyPage } from "@/data/technology";

import { CoverImage } from "./cover-image";
import { HeadlineLines } from "./headline-lines";
import { Reveal } from "./reveal";
import { SiteHeader } from "./site-header";
import { SiteLabel } from "./site-label";
import { VantaButton } from "./vanta-button";

export function TechnologyView() {
  return (
    <main className="min-h-screen bg-void">
      <SiteHeader
        active="Technology"
        cta={{ label: "Explore technology", href: routes.technology }}
      />
      <div className="px-6 py-10 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SiteLabel>{technologyPage.kicker}</SiteLabel>
            <h1 className="mt-3 font-display text-[56px] leading-[0.95] text-milk md:text-[72px]">
              <HeadlineLines lines={technologyPage.headline} />
            </h1>
          </Reveal>
          <Reveal as="ol" className="relative mt-10 flex justify-between">
            <span className="vanta-chain-line absolute left-0 right-0 top-4 h-px bg-amber" />
            {technologyPage.chain.map((step, index) => (
              <li
                key={step}
                className="vanta-chain-node relative z-10 flex flex-col items-center"
                style={{ "--vanta-i": index } as CSSProperties}
              >
                <span className="flex size-8 items-center justify-center rounded-full border border-amber bg-void">
                  <span className="size-2 rounded-full bg-amber" />
                </span>
                <span className="mt-4 font-mono text-[12px] tracking-[0.16em] text-milk">
                  {step}
                </span>
              </li>
            ))}
          </Reveal>
        </div>
        <div className="mt-16 grid gap-4 lg:grid-cols-[1fr_1.4fr_1fr]">
          <Reveal as="section" className="border border-graph p-5">
            <SiteLabel>Distribution</SiteLabel>
            <PolarChart />
          </Reveal>
          <section className="border border-graph p-5">
            <SiteLabel>{technologyPage.optics.kicker}</SiteLabel>
            <CoverImage
              src={technologyPage.optics.image}
              alt="Linear lighting module"
              className="mt-5 h-[240px]"
              position="center 70%"
              motion="expose"
            />
            <p className="mt-5 font-mono text-[12px] tracking-[0.12em] text-muted-vanta">
              {technologyPage.optics.flow}
            </p>
            <div className="mt-5 h-px bg-graph-2" />
            <p className="mt-4 font-mono text-[12px] tracking-[0.12em] text-milk-soft">
              {technologyPage.optics.note}
            </p>
          </section>
          <section className="border border-graph p-5">
            <SiteLabel>Temperature  ·  control</SiteLabel>
            <div
              className="mt-6 h-4 w-full"
              style={{
                background: "linear-gradient(90deg, #d28c46 0%, #e6e6ec 100%)",
              }}
            />
            <div className="mt-3 flex justify-between font-mono text-[11px] tracking-[0.12em]">
              <span className="text-amber">2200K</span>
              <span className="text-milk">4000K</span>
            </div>
            <dl className="mt-8">
              {technologyPage.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between border-b border-graph py-3"
                >
                  <dt className="font-mono text-[12px] tracking-[0.14em] text-muted-vanta">
                    {spec.label}
                  </dt>
                  <dd className="font-sans text-[16px] text-milk">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <VantaButton href={technologyPage.cta.href} filled>
                {technologyPage.cta.label}
              </VantaButton>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function PolarChart() {
  const points = Array.from({ length: 91 }, (_, index) => {
    const a = (index / 90) * Math.PI;
    const r = 0.22 + 0.62 * Math.sin(a) ** 1.6;
    const x = 80 + r * 70 * Math.cos(a - Math.PI / 2);
    const y = 80 + r * 70 * Math.sin(a - Math.PI / 2);
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 160 160" className="mx-auto mt-6 h-[320px] w-[320px]" aria-hidden>
      {[20, 40, 60, 74].map((r) => (
        <circle key={r} cx="80" cy="80" r={r} fill="none" stroke="#c9a66b" strokeOpacity="0.55" />
      ))}
      <line x1="80" y1="6" x2="80" y2="154" stroke="#c9a66b" strokeOpacity="0.3" />
      <line x1="6" y1="80" x2="154" y2="80" stroke="#c9a66b" strokeOpacity="0.3" />
      <polyline className="vanta-polar-plot" points={points} fill="none" stroke="#c9a66b" strokeWidth="1.6" />
    </svg>
  );
}
