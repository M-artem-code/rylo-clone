import Link from "next/link";

import { journalPage } from "@/data/journal";
import { routes } from "@/data/site";
import { cn } from "@/lib/utils";

import { CoverImage } from "./cover-image";
import { HeadlineLines } from "./headline-lines";
import { SiteHeader } from "./site-header";
import { SiteLabel } from "./site-label";
import { VantaButton } from "./vanta-button";

export function JournalView() {
  return (
    <main className="min-h-screen bg-void">
      <SiteHeader
        active="Journal"
        cta={{ label: "Read article", href: routes.article }}
      />
      <div className="grid lg:grid-cols-[1.4fr_1fr]">
        <section className="vanta-hero relative min-h-[70vh] lg:min-h-[calc(100vh-76px)]">
          <CoverImage
            src={journalPage.featured.image}
            alt="Light and architecture"
            className="absolute inset-0"
            motion="aperture"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-linear-to-t from-void via-void/80 to-transparent" />
          <div className="relative z-10 flex min-h-[70vh] flex-col justify-end p-8 lg:min-h-[calc(100vh-76px)] lg:p-12">
            <SiteLabel className="vanta-hero-kicker">{journalPage.featured.kicker}</SiteLabel>
            <h1 className="mt-3 font-display text-[48px] leading-[0.95] text-milk md:text-[66px]">
              <HeadlineLines lines={journalPage.featured.headline} />
            </h1>
            <div className="vanta-hero-cta mt-8">
              <VantaButton href={journalPage.featured.cta.href} filled>
                {journalPage.featured.cta.label}
              </VantaButton>
            </div>
          </div>
        </section>
        <aside className="border-l border-graph px-6 py-8 md:px-10">
          <div className="flex flex-wrap gap-7">
            {journalPage.categories.map((category) => (
              <span
                key={category}
                className={cn(
                  "font-mono text-[11px] tracking-[0.16em]",
                  category === journalPage.activeCategory
                    ? "border-b border-amber pb-1 text-milk"
                    : "text-muted-vanta",
                )}
              >
                {category}
              </span>
            ))}
          </div>
          <div className="mt-6">
            {journalPage.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="vanta-row grid grid-cols-[160px_1fr] items-center gap-6 border-t border-graph py-4"
              >
                <CoverImage
                  src={item.image}
                  alt={item.title}
                  className="h-[120px]"
                />
                <div>
                  <h2 className="font-serif text-[24px] text-milk">{item.title}</h2>
                  <p className="mt-2 font-news text-[16px] text-milk-soft">{item.deck}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
