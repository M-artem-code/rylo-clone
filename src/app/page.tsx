import Link from "next/link";

import { FolioButton } from "@/components/arcana/folio-button";
import { FolioImage } from "@/components/arcana/folio-image";
import { SiteFooter } from "@/components/arcana/site-footer";
import { home } from "@/data/home";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <section className="relative grid min-h-[calc(100svh-76px)] lg:min-h-[calc(100svh-88px)] lg:grid-cols-[minmax(0,1.28fr)_minmax(20rem,0.72fr)]">
        <div className="relative min-h-[72svh] lg:min-h-full">
          <FolioImage
            src={home.hero.image}
            alt="Ночной портрет: лицо в ртутном луче"
            focus={home.hero.focus}
            priority
            className="absolute inset-0 hidden lg:block"
            sizes="65vw"
          />
          <FolioImage
            src={home.hero.imageMobile}
            alt="Ночной портрет: лицо в ртутном луче"
            focus={home.hero.focusMobile}
            priority
            className="absolute inset-0 lg:hidden"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-x-6 bottom-8 z-10 md:inset-x-12 md:bottom-10">
            <p className="font-display text-[clamp(56px,8vw,92px)] font-semibold leading-none tracking-[0.08em] text-bone">
              {home.hero.wordmark}
            </p>
            <p className="folio-track-mark mt-3 text-[11px] text-mercury md:text-[11px]">
              {home.hero.credit}
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center px-6 py-16 md:px-14 lg:px-16">
          <p className="absolute top-1/2 right-[calc(100%+0.4rem)] hidden origin-bottom-right -translate-y-1/2 -rotate-90 folio-track-mark text-[11px] text-mercury lg:block">
            {home.hero.verticalMark}
          </p>
          <p className="folio-track-mark text-[11px] text-mercury">{home.hero.mark}</p>
          <h1 className="folio-reveal mt-6 font-serif text-[clamp(40px,4.2vw,64px)] leading-[1.05] font-medium text-bone">
            {home.hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-[28rem] text-[15px] leading-[1.7] text-bone-soft">
            {home.hero.body}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <FolioButton href="/apply" filled>
              {home.hero.cta}
            </FolioButton>
            <span className="text-[13px] text-bone-dim">{site.telegramLabel}</span>
          </div>
        </div>
      </section>

      <section className="border-t border-rule px-6 py-24 text-center md:py-28">
        <p className="folio-track-mark text-[11px] text-mercury">{home.pause.mark}</p>
        <p className="mt-6 font-serif text-[clamp(32px,3.2vw,48px)] leading-tight text-bone">
          {home.pause.lines[0]}
          <br />
          {home.pause.lines[1]}
        </p>
      </section>

      <section className="px-6 pb-20 md:px-14">
        <div className="flex items-end justify-between gap-6 border-t border-rule pt-7">
          <div className="flex flex-wrap items-baseline gap-4">
            <p className="folio-track-mark text-[11px] text-mercury">{home.series.label}</p>
            <p className="folio-track text-[11px] text-bone-dim">{home.series.english}</p>
          </div>
          <Link href={home.series.href} className="text-[13px] text-bone">
            {home.series.linkLabel}
          </Link>
        </div>
        <div className="relative mt-7 h-[220px] md:h-[420px]">
          <FolioImage
            src={home.series.image}
            alt="Контактная лента ночных портретов"
            focus={home.series.focus}
            className="absolute inset-0"
            sizes="100vw"
            vignette={false}
          />
        </div>
        <div className="mt-4 flex flex-col gap-2 text-[12px] text-bone-soft md:flex-row md:justify-between">
          <div className="flex flex-wrap gap-x-10 gap-y-1">
            {home.series.captions.map((caption) => (
              <span key={caption}>{caption}</span>
            ))}
          </div>
          <span className="text-bone-faint">{home.series.mock}</span>
        </div>
      </section>

      <section className="grid gap-16 border-t border-rule px-6 py-12 md:px-14 lg:grid-cols-[820fr_48px_1fr] lg:gap-0 lg:py-16">
        <Link href={home.shelves.portrait.href} className="group block">
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-none text-bone">
            {home.shelves.portrait.title}
          </h2>
          <p className="mt-4 text-[15px] text-bone-soft">{home.shelves.portrait.lead}</p>
          <div className="relative mt-8 h-[46vw] max-h-[520px] min-h-[280px]">
            <FolioImage
              src={home.shelves.portrait.image}
              alt="Portrait — человек в луче"
              focus={home.shelves.portrait.focus}
              className="absolute inset-0"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
          <p className="mt-4 text-[13px] text-bone-soft">{home.shelves.portrait.meta}</p>
          <p className="mt-1 text-[13px] text-bone-dim">{home.shelves.portrait.note}</p>
        </Link>
        <div className="hidden lg:block" />
        <Link href={home.shelves.deep.href} className="group block lg:pt-0">
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-none text-bone">
            {home.shelves.deep.title}
          </h2>
          <p className="mt-4 text-[15px] text-bone-soft">{home.shelves.deep.lead}</p>
          <div className="relative mt-8 h-[58vw] max-h-[620px] min-h-[340px]">
            <FolioImage
              src={home.shelves.deep.image}
              alt="Fashion / Brand — фигура в чёрном пальто"
              focus={home.shelves.deep.focus}
              className="absolute inset-0"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
          <p className="mt-4 text-[13px] text-bone-soft">{home.shelves.deep.note}</p>
        </Link>
      </section>

      <section className="relative h-[56vw] min-h-[320px] max-h-[560px]">
        <FolioImage
          src={home.studio.image}
          alt="Студия: прибор и луч"
          focus={home.studio.focus}
          className="absolute inset-0"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col justify-between px-6 py-8 md:px-14">
          <p className="folio-track-mark text-[11px] text-mercury">{home.studio.mark}</p>
          <div>
            <p className="font-serif text-[clamp(28px,3vw,40px)] text-bone">{home.studio.title}</p>
            <p className="mt-2 text-[14px] text-bone-soft">{home.studio.note}</p>
            <Link href={home.studio.href} className="mt-4 inline-block text-[13px] text-bone">
              Смотреть студию  →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-14 md:py-20">
        <div className="flex flex-col gap-3 border-t border-rule pt-12 md:flex-row md:items-end md:gap-10">
          <h2 className="font-serif text-[clamp(32px,3vw,44px)] text-bone">{home.script.title}</h2>
          <p className="text-[13px] text-bone-dim">{home.script.aside}</p>
        </div>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {home.script.steps.map((step) => (
            <li key={step.num}>
              <p className="font-display text-[28px] tracking-[0.06em] text-mercury">{step.num}</p>
              <p className="mt-3 text-[16px] font-medium text-bone">{step.title}</p>
              <p className="mt-2 max-w-[18rem] text-[13px] leading-relaxed text-bone-dim">
                {step.note}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
          <FolioButton href="/apply" filled>
            {home.script.cta}
          </FolioButton>
          <p className="text-[13px] text-bone-dim">{home.script.ctaNote}</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
