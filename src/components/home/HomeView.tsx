import Image from "next/image";

import { Eyebrow } from "@/components/site/Eyebrow";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { homeAdvantages, homeCta, homeHero, homeJourney, homeMissionsIntro, homeRoute } from "@/data/home";
import { missions } from "@/data/missions";
import { cn } from "@/lib/utils";

export function HomeView() {
  const featured = missions.slice(0, 3);

  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[68%] max-lg:opacity-40">
          <Image
            src={homeHero.image}
            alt=""
            fill
            priority
            className="object-cover object-[62%_45%]"
            sizes="70vw"
          />
          <div className="absolute inset-y-0 left-0 w-[42%] bg-linear-to-r from-white via-white/90 to-transparent" />
        </div>
        <div className="px-page relative flex min-h-[calc(100vh-72px)] flex-col justify-center py-16">
          <Eyebrow>{homeHero.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-[56px] leading-[0.92] font-extrabold text-navy md:text-[72px] xl:text-[86px]">
            {homeHero.lines[0]}
            <br />
            {homeHero.lines[1]}
            <br />
            <span className="text-cobalt">{homeHero.lines[2]}</span>
          </h1>
          <p className="mt-8 max-w-[520px] font-body text-[18px] leading-7 text-mute">{homeHero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <OrbitalButton href={homeHero.primaryCta.href}>{homeHero.primaryCta.label}</OrbitalButton>
            <OrbitalButton href={homeHero.secondaryCta.href} variant="ghost">
              {homeHero.secondaryCta.label}
            </OrbitalButton>
          </div>
          <p className="mt-10 font-mono text-[12px] text-mute">{homeHero.coords}</p>
          <div className="mt-8 grid max-w-[960px] grid-cols-2 gap-6 rounded-[22px] border border-white/60 bg-white/80 px-8 py-6 backdrop-blur-md sm:grid-cols-3 lg:grid-cols-5">
            {homeHero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-[11px] tracking-wide text-mute uppercase">{stat.label}</p>
                <p className="mt-2 font-display text-[28px] font-bold text-navy">{stat.value}</p>
              </div>
            ))}
          </div>
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
              <article key={item.num} className="rounded-[22px] bg-white px-7 py-8">
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
          <Image
            src="/orbital/plate-earth-curve-dawn.png"
            alt=""
            fill
            className="object-cover object-[50%_65%] opacity-80"
            sizes="46vw"
          />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-ice to-transparent" />
        </div>
        <div className="px-page relative">
          <div className="max-w-[460px]">
            <Eyebrow>{homeMissionsIntro.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-[44px] leading-[0.95] font-extrabold text-navy md:text-[54px]">
              {homeMissionsIntro.title[0]}
              <br />
              <span className="text-cobalt">{homeMissionsIntro.title[1]}</span>
            </h2>
            <p className="mt-6 font-body text-[17px] leading-7 text-mute">{homeMissionsIntro.lead}</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featured.map((mission) => (
              <article key={mission.slug} className="rounded-[26px] bg-white p-4 shadow-[0_18px_40px_rgba(8,18,48,0.08)]">
                <div className="relative h-[200px] overflow-hidden rounded-[18px]">
                  <Image src={mission.cardImage} alt="" fill className="object-cover" sizes="400px" />
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
          <Image
            src={homeJourney.image}
            alt=""
            fill
            className="object-cover object-[62%_48%]"
            sizes="55vw"
          />
          <div className="absolute inset-y-0 left-0 w-[38%] bg-linear-to-r from-white via-white/80 to-transparent" />
        </div>
        <div className="px-page relative grid gap-12 xl:grid-cols-[1fr_420px]">
          <div>
            <Eyebrow>{homeJourney.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-[40px] leading-[0.95] font-extrabold text-navy md:text-[46px]">
              {homeJourney.title[0]}
              <br />
              <span className="text-cobalt">{homeJourney.title[1]}</span>
            </h2>
            <ol className="mt-10 space-y-6">
              {homeJourney.steps.map((step, index) => (
                <li key={step.time} className="relative flex gap-6 pl-1">
                  <span className="relative mt-1.5 size-2.5 shrink-0 rounded-full bg-violet">
                    {index < homeJourney.steps.length - 1 ? (
                      <span className="absolute top-3 left-1/2 h-10 w-px -translate-x-1/2 bg-line" />
                    ) : null}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-4">
                      <span className="font-mono text-[11px] text-violet">{step.time}</span>
                      <span className="font-ui text-[16px] font-semibold text-navy">{step.title}</span>
                    </div>
                    <p className="mt-1 font-body text-[14px] text-mute">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
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
        <Image src={homeRoute.image} alt="" fill className="object-cover object-[50%_55%]" sizes="100vw" />
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
