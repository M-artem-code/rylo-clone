import { journalArticle } from "@/data/journal";
import { images } from "@/data/site";

import { CoverImage } from "./cover-image";
import { HeadlineLines } from "./headline-lines";
import { Reveal } from "./reveal";
import { SiteHeader } from "./site-header";
import { SiteLabel } from "./site-label";
import { SiteMeta } from "./site-meta";
import { VantaButton } from "./vanta-button";

export function ArticleView() {
  return (
    <main className="bg-void">
      <SiteHeader variant="article" cta={journalArticle.projectCta} articleMeta={journalArticle.issue} />
      <article className="px-6 py-10 md:px-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SiteLabel>{journalArticle.kicker}</SiteLabel>
            <h1 className="mt-4 font-display text-[48px] leading-[0.95] text-milk md:text-[64px]">
              <HeadlineLines lines={journalArticle.headline} />
            </h1>
          </Reveal>
          <CoverImage
            src={images.stair}
            alt="Stair with concealed linear light"
            className="h-[420px]"
            motion="expose"
          />
        </div>
        <Reveal>
          <p className="mt-12 font-serif text-[40px] italic text-milk">
            <span className="vanta-clip block">
              <span className="vanta-clip-inner block">{journalArticle.pull}</span>
            </span>
          </p>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <p className="font-news text-[20px] leading-[30px] text-milk-soft">
            {journalArticle.left}
          </p>
          <p className="font-news text-[20px] leading-[30px] text-milk-soft">
            {journalArticle.right}
          </p>
        </div>
        <figure className="mt-16">
          <CoverImage
            src={images.restaurant}
            alt="Private dining"
            className="h-[360px] md:h-[520px]"
            motion="expose"
          />
          <SiteLabel className="mt-4">{journalArticle.diningCaption}</SiteLabel>
        </figure>
        <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <figure>
            <CoverImage
              src={images.lightingPlan}
              alt="Lighting plan"
              className="h-[380px]"
              motion="rise"
            />
            <SiteLabel className="mt-3">Lighting plan</SiteLabel>
          </figure>
          <figure>
            <CoverImage
              src={images.bronze}
              alt="Brushed bronze"
              className="h-[380px]"
              motion="rise"
            />
            <SiteLabel className="mt-3">Bronze, brushed</SiteLabel>
          </figure>
        </div>
        <div className="mt-16">
          <p className="font-serif text-[28px] italic text-milk">
            {journalArticle.next.kicker}
          </p>
          <p className="mt-3 font-serif text-[36px] text-milk">
            {journalArticle.next.title}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <VantaButton href={journalArticle.readCta.href}>
              {journalArticle.readCta.label}
            </VantaButton>
            <VantaButton href={journalArticle.projectCta.href} filled>
              {journalArticle.projectCta.label}
            </VantaButton>
          </div>
        </div>
      </article>
      <SiteMeta right="Journal  ·  Light & Architecture" />
    </main>
  );
}
