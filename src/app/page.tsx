import Image from "next/image";
import Link from "next/link";

import { CocoaScale } from "@/components/site/cocoa-scale";
import { SiteButton } from "@/components/site/site-button";
import { actions, brand, course, home, images, lots } from "@/data/tuka";

export default function HomePage() {
  return (
    <main>
      <section className="flex min-h-[calc(100svh-4.5rem)] flex-col px-5 pb-8 pt-8 md:px-10 md:pt-10">
        <div className="grid flex-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h1 className="font-display text-[clamp(4.6rem,8.6vw,7.6rem)] uppercase leading-[0.8] tracking-[-0.03em]">
              {home.title[0]}
              <br />
              {home.title[1]}
            </h1>
            <div className="mt-8 max-w-sm space-y-1 text-[15px] leading-relaxed text-body">
              {home.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <figure className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
            <div className="relative aspect-[4/3] border border-line">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-[center_40%]"
              />
            </div>
            <figcaption className="mt-4 space-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-body">
              <p>{home.captionName}</p>
              <p>{home.captionOrigin}</p>
              <p className="text-muted">{home.captionNote}</p>
            </figcaption>
          </figure>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-end">
            <SiteButton href="/zapis" className="w-full sm:w-auto">
              {actions.bookTable}
            </SiteButton>
          </div>
        </div>
        <div className="mt-10 lg:mt-12">
          <CocoaScale lots={lots} />
        </div>
      </section>

      <section className="grid items-end gap-8 border-t border-line px-5 py-16 md:px-10 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {home.guestsEyebrow}
          </p>
          <h2 className="mt-3 font-display text-[clamp(4.5rem,9vw,7.5rem)] uppercase leading-[0.8]">
            {home.guestsTitle}
          </h2>
          <div className="mt-6 max-w-sm space-y-1 text-[15px] leading-relaxed text-body">
            {home.guestsLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <figure className="lg:col-span-7">
          <div className="relative aspect-[16/9] border border-line">
            <Image
              src={images.table.src}
              alt={images.table.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {home.guestsCaption}
          </figcaption>
        </figure>
      </section>

      <section className="border-t border-line px-5 py-6 md:px-10">
        <ol className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-7 lg:items-end">
          {course.map((step) => (
            <li key={step.index} className="border-t border-line pt-3">
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted">{step.index}</p>
              <p className="mt-2 font-display text-2xl uppercase leading-none">{step.title}</p>
            </li>
          ))}
          <li className="flex items-end border-t border-line pt-3 lg:justify-end">
            <Link
              href="/vecher"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper hover:text-lime"
            >
              {actions.fullCourse} →
            </Link>
          </li>
        </ol>
      </section>

      <section className="grid border-t border-line md:grid-cols-2">
        {home.doors.map((door) => (
          <Link
            key={door.href}
            href={door.href}
            className="group border-b border-line px-5 py-12 last:border-b-0 md:border-b-0 md:border-r md:px-10 md:py-16 md:last:border-r-0"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {door.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-7xl uppercase leading-none md:text-8xl">
              {door.title}
            </h2>
            <p className="mt-4 text-body">{door.text}</p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] group-hover:text-lime">
              {actions.see} →
            </p>
          </Link>
        ))}
      </section>

      <footer className="flex flex-col gap-4 border-t border-line px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p className="font-display text-3xl uppercase leading-none">{brand.name}</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{brand.hours}</p>
        <SiteButton href="/zapis">{actions.bookTable}</SiteButton>
      </footer>
    </main>
  );
}
