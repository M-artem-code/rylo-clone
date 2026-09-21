import Link from "next/link";

import {
  homeAtmospheres,
  homeHero,
  homeObjects,
  homePhilosophy,
  homeProject,
  homeStudio,
} from "@/data/home";
import { routes } from "@/data/site";

import { CoverImage } from "./cover-image";
import { HeadlineLines } from "./headline-lines";
import { Reveal } from "./reveal";
import { SiteHeader } from "./site-header";
import { SiteLabel } from "./site-label";
import { SiteMeta } from "./site-meta";
import { VantaButton } from "./vanta-button";

export function HomeView() {
  return (
    <main className="bg-void">
      <section className="vanta-hero relative min-h-screen">
        <CoverImage
          src={homeHero.image}
          alt={homeHero.imageAlt}
          className="absolute inset-0"
          priority
          motion="hero"
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-void/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-linear-to-t from-void via-void/70 to-transparent" />
        <SiteHeader
          variant="overlay"
          cta={{ label: "Design your lighting", href: routes.studio }}
        />
        <div className="relative z-10 flex min-h-[calc(100vh-76px)] flex-col justify-end px-6 pb-10 md:px-12 md:pb-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <SiteLabel className="vanta-hero-kicker mb-4">{homeHero.kicker}</SiteLabel>
              <h1 className="font-display text-[40px] leading-[0.95] text-milk md:text-[78px]">
                <HeadlineLines lines={homeHero.headline} />
              </h1>
              <p className="vanta-hero-support mt-6 max-w-xl font-news text-[16px] text-milk-soft md:text-[20px]">
                {homeHero.support}
              </p>
              <div className="vanta-hero-cta mt-8 flex flex-wrap gap-3">
                <VantaButton href={homeHero.primary.href} filled>
                  {homeHero.primary.label}
                </VantaButton>
                <VantaButton href={homeHero.secondary.href}>
                  {homeHero.secondary.label}
                </VantaButton>
              </div>
            </div>
            <div className="vanta-hero-scene hidden bg-void/60 p-6 lg:block">
              <SiteLabel>{homeHero.scene.index}</SiteLabel>
              <p className="mt-2 font-serif text-[28px] text-milk">
                {homeHero.scene.name}
              </p>
              <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-muted-vanta">
                {homeHero.scene.meta}
              </p>
              <div className="relative mt-6 h-px bg-graph-2">
                {homeHero.scene.steps.map((step, index) => (
                  <span
                    key={step}
                    className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${(index / 3) * 100}%` }}
                  >
                    <span
                      className={`block size-1.5 rounded-full ${
                        step === homeHero.scene.active
                          ? "vanta-scene-dot is-live bg-amber"
                          : "bg-dim"
                      }`}
                    />
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-between font-mono text-[9px] tracking-[0.08em]">
                {homeHero.scene.steps.map((step) => (
                  <span
                    key={step}
                    className={
                      step === homeHero.scene.active ? "text-amber" : "text-dim"
                    }
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-24">
        <SiteLabel className="mb-6">{homePhilosophy.kicker}</SiteLabel>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <h2 className="font-display text-[48px] leading-[0.95] text-milk md:text-[86px]">
              <HeadlineLines lines={homePhilosophy.headline} />
            </h2>
          </Reveal>
          <Reveal className="vanta-copy" delay={80}>
            <p className="max-w-md font-news text-[22px] leading-8 text-milk-soft">
              {homePhilosophy.body}
            </p>
            <div className="mt-8">
              <VantaButton href={homePhilosophy.cta.href} filled>
                {homePhilosophy.cta.label}
              </VantaButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12">
        <SiteLabel className="mb-6">{homeAtmospheres.kicker}</SiteLabel>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          <figure className="md:col-span-8 md:row-span-2">
            <CoverImage
              src={homeAtmospheres.items[0].image}
              alt="Night atmosphere"
              className="h-[320px] md:h-[520px]"
              motion="aperture"
            />
            <SiteLabel className="mt-3">Night</SiteLabel>
          </figure>
          <figure className="md:col-span-4">
            <CoverImage
              src={homeAtmospheres.items[1].image}
              alt="Morning atmosphere"
              className="h-[248px]"
              motion="expose"
            />
            <SiteLabel className="mt-3">Morning</SiteLabel>
          </figure>
          <div className="grid grid-cols-2 gap-3 md:col-span-4">
            <figure>
              <CoverImage
                src={homeAtmospheres.items[2].image}
                alt="Day atmosphere"
                className="h-[256px]"
                motion="rise"
              />
              <SiteLabel className="mt-3">Day</SiteLabel>
            </figure>
            <figure>
              <CoverImage
                src={homeAtmospheres.items[3].image}
                alt="Evening atmosphere"
                className="h-[256px]"
                motion="rise"
              />
              <SiteLabel className="mt-3">Evening</SiteLabel>
            </figure>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12">
        <SiteLabel className="mb-6">{homeObjects.kicker}</SiteLabel>
        <div className="grid gap-6 md:grid-cols-3">
          {homeObjects.items.map((item) => (
            <Link key={item.name} href={item.href} className="vanta-row block">
              <CoverImage
                src={item.image}
                alt={item.name}
                className={item.name === "VOID" ? "vanta-share-void h-[280px]" : "h-[280px]"}
                motion="rise"
              />
              <p className="vanta-row-name mt-5 font-italiana text-[28px] tracking-[0.18em] text-milk">
                {item.name}
              </p>
              <p className="mt-2 font-mono text-[11px] tracking-[0.1em] text-muted-vanta">
                {item.spec}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <VantaButton href={homeObjects.cta.href}>
            {homeObjects.cta.label}
          </VantaButton>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-12">
        <SiteLabel className="mb-6">{homeProject.kicker}</SiteLabel>
        <div className="relative">
          <CoverImage
            src={homeProject.image}
            alt={homeProject.title}
            className="vanta-share-atelier h-[320px] md:h-[420px]"
            motion="expose"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-void via-void/70 to-transparent p-6 md:p-8">
            <p className="font-serif text-[32px] text-milk">{homeProject.title}</p>
            <div className="mt-4">
              <VantaButton href={homeProject.cta.href} filled>
                {homeProject.cta.label}
              </VantaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-12">
        <SiteLabel className="mb-6">{homeStudio.kicker}</SiteLabel>
        <div className="grid items-center gap-8 md:grid-cols-[420px_1fr_auto]">
          <CoverImage
            src={homeStudio.image}
            alt="Light Studio preview"
            className="h-[160px]"
            motion="rise"
          />
          <div>
            <p className="max-w-md font-news text-[22px] text-milk-soft">
              {homeStudio.body}
            </p>
            <div className="relative mt-8 h-px max-w-md bg-graph-2">
              <span className="vanta-scene-dot is-live absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber" />
            </div>
            <div className="mt-3 flex max-w-md justify-between font-mono text-[11px] tracking-[0.14em]">
              <span className="text-muted-vanta">{homeStudio.mood}</span>
              <span className="text-amber">{homeStudio.kelvin}</span>
            </div>
          </div>
          <VantaButton href={homeStudio.cta.href} filled>
            {homeStudio.cta.label}
          </VantaButton>
        </div>
      </section>
      <SiteMeta right="Home  ·  Atmosphere  ·  Services" />
    </main>
  );
}
