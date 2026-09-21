import type { Metadata } from "next";
import Image from "next/image";

import { SiteButton } from "@/components/site/site-button";
import { actions, course, evening, images, pairings } from "@/data/tuka";

export const metadata: Metadata = {
  title: "Вечер",
};

export default function EveningPage() {
  return (
    <main className="pb-8">
      <header className="px-5 pt-10 md:px-10 md:pt-14">
        <h1 className="font-display text-[clamp(4.8rem,11vw,8.5rem)] uppercase leading-[0.78]">
          {evening.title}
        </h1>
        <p className="mt-4 max-w-xl font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {evening.subtitle}
        </p>
      </header>

      <figure className="mt-8 px-5 md:px-10">
        <div className="relative aspect-[16/8] border border-line">
          <Image
            src={images.table.src}
            alt={images.table.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {evening.caption}
        </figcaption>
      </figure>

      <ol className="mx-5 mt-10 grid border-l border-t border-line sm:grid-cols-2 lg:mx-10 lg:grid-cols-3">
        {course.map((step) => (
          <li key={step.index} className="border-b border-r border-line p-5 md:p-7">
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted">{step.index}</p>
            <h2 className="mt-5 font-display text-5xl uppercase leading-none md:text-6xl">
              {step.title}
            </h2>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-body">
              {step.text}
            </p>
          </li>
        ))}
      </ol>

      <section className="mx-5 mt-10 grid border-l border-t border-line sm:grid-cols-3 lg:mx-10">
        {pairings.map((item) => (
          <article key={item.id} className="border-b border-r border-line px-5 py-8">
            <h2 className="font-display text-5xl uppercase leading-none">{item.label}</h2>
            <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-muted">
              {item.range}
            </p>
          </article>
        ))}
      </section>

      <div className="mt-10 flex flex-col gap-6 border-t border-line px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="max-w-md text-body">{evening.closing}</p>
        <SiteButton href="/zapis">{actions.bookCompany}</SiteButton>
      </div>
    </main>
  );
}
