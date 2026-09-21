import { routes } from "@/data/site";
import { servicesPage } from "@/data/services";

import { CoverImage } from "./cover-image";
import { HeadlineLines } from "./headline-lines";
import { Reveal } from "./reveal";
import { SiteHeader } from "./site-header";
import { SiteLabel } from "./site-label";
import { SiteMeta } from "./site-meta";
import { VantaButton } from "./vanta-button";

export function ServicesView() {
  return (
    <main className="bg-void">
      <SiteHeader cta={{ label: "Start a project", href: routes.contact }} />
      <div className="px-6 py-12 md:px-12">
        <SiteLabel>{servicesPage.kicker}</SiteLabel>
        <Reveal>
          <h1 className="mt-4 font-display text-[48px] leading-[0.95] text-milk md:text-[72px]">
            <HeadlineLines lines={servicesPage.headline} />
          </h1>
        </Reveal>
        <p className="mt-6 font-news text-[22px] text-milk-soft">{servicesPage.deck}</p>
        <ol className="relative mt-16 space-y-16 before:absolute before:bottom-8 before:left-[14px] before:top-2 before:w-px before:bg-graph">
          {servicesPage.steps.map((step, index) => {
            const photoLeft = index % 2 === 1;
            return (
              <Reveal as="li" key={step.num} className="relative grid items-center gap-8 pl-10 md:grid-cols-2">
                <span className="vanta-service-node absolute left-2 top-5 size-4 rounded-full bg-amber" />
                {photoLeft ? (
                  <CoverImage
                    src={step.image}
                    alt={step.title}
                    className="h-[220px]"
                    motion={index % 2 === 0 ? "expose" : "rise"}
                  />
                ) : null}
                <div>
                  <p className="font-italiana text-[36px] tracking-[0.12em] text-amber">
                    {step.num}
                  </p>
                  <h2 className="mt-2 font-serif text-[36px] text-milk">{step.title}</h2>
                  <p className="mt-4 max-w-md font-news text-[18px] leading-7 text-milk-soft">
                    {step.body}
                  </p>
                </div>
                {!photoLeft ? (
                  <CoverImage
                    src={step.image}
                    alt={step.title}
                    className="h-[220px]"
                    motion={index % 2 === 0 ? "expose" : "rise"}
                  />
                ) : null}
              </Reveal>
            );
          })}
        </ol>
        <div className="mt-16">
          <VantaButton href={servicesPage.cta.href} filled>
            {servicesPage.cta.label}
          </VantaButton>
        </div>
      </div>
      <SiteMeta right="Services  ·  Lighting design" />
    </main>
  );
}
