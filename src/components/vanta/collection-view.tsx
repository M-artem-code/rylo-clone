import Link from "next/link";

import { collectionPage } from "@/data/collection";
import { routes } from "@/data/site";

import { CoverImage } from "./cover-image";
import { SiteHeader } from "./site-header";
import { SiteLabel } from "./site-label";

export function CollectionView() {
  return (
    <main className="min-h-screen bg-void">
      <SiteHeader
        active="Collection"
        cta={{ label: "Explore collection", href: routes.collection }}
      />
      <div className="grid gap-10 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div>
          <SiteLabel>{collectionPage.kicker}</SiteLabel>
          <h1 className="mt-3 font-display text-[56px] leading-[0.95] text-milk md:text-[68px]">
            {collectionPage.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <div className="relative mt-8">
            <CoverImage
              src={collectionPage.featured.image}
              alt={collectionPage.featured.name}
              className="h-[420px] md:h-[620px]"
            />
            <div className="absolute bottom-8 left-6">
              <p className="font-italiana text-[54px] tracking-[0.18em] text-milk">
                {collectionPage.featured.name}
              </p>
              <div className="relative mt-3 h-px w-[280px] bg-graph-2 md:w-[420px]">
                <span className="absolute left-1/2 top-2 -translate-x-1/2 font-mono text-[10px] tracking-[0.12em] text-muted-vanta">
                  {collectionPage.featured.dimension}
                </span>
              </div>
              <SiteLabel className="mt-8">{collectionPage.featured.spec}</SiteLabel>
            </div>
          </div>
          <SiteLabel className="mt-8">{collectionPage.specBar}</SiteLabel>
        </div>
        <div className="flex flex-col">
          {collectionPage.rows.map((row) => (
            <Link
              key={row.name}
              href={row.href}
              className="grid grid-cols-[200px_1fr] items-center gap-6 border-t border-graph py-4 last:border-b"
            >
              <CoverImage
                src={row.image}
                alt={row.name}
                className="h-[150px]"
                position="center"
              />
              <div>
                <p className="font-italiana text-[34px] tracking-[0.16em] text-milk">
                  {row.name}
                </p>
                <p className="mt-3 max-w-sm font-news text-[18px] text-milk-soft">
                  {row.blurb}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
