import { atelierNoir } from "@/data/projects";
import { routes } from "@/data/site";

import { CoverImage } from "./cover-image";
import { Reveal } from "./reveal";
import { SiteHeader } from "./site-header";
import { SiteLabel } from "./site-label";
import { VantaButton } from "./vanta-button";

export function AtelierView() {
  return (
    <main className="min-h-screen bg-void">
      <SiteHeader
        active="Projects"
        cta={{ label: "View project", href: routes.atelierNoir }}
      />
      <div className="grid gap-8 px-6 py-8 lg:grid-cols-[420px_1fr] lg:px-12">
        <div className="flex gap-8">
          <p className="hidden h-[640px] shrink-0 font-italiana text-[42px] leading-none tracking-[0.18em] text-[#303032] [writing-mode:vertical-rl] rotate-180 lg:block">
            {atelierNoir.vertical}
          </p>
          <Reveal className="vanta-copy">
            {atelierNoir.meta.map((item) => (
              <div key={item.label} className="mb-8">
                <SiteLabel>{item.label}</SiteLabel>
                <p className="mt-2 font-news text-[22px] text-milk">{item.value}</p>
              </div>
            ))}
            <VantaButton href={atelierNoir.cta.href} filled>
              {atelierNoir.cta.label}
            </VantaButton>
          </Reveal>
        </div>
        <div>
          <CoverImage
            src={atelierNoir.image}
            alt="Atelier Noir, Kyoto"
            className="vanta-share-atelier h-[420px] md:h-[760px]"
            motion="expose"
          />
          <div className="mt-4 grid grid-cols-2">
            <figure className="relative">
              <CoverImage
                src={atelierNoir.image}
                alt="Architecture without lighting"
                className="h-[160px] saturate-0 brightness-[0.22]"
              />
              <SiteLabel className="absolute bottom-3 left-2">
                Architecture without lighting
              </SiteLabel>
            </figure>
            <figure className="relative border-l border-amber">
              <CoverImage
                src={atelierNoir.image}
                alt="Architecture with VANTA"
                className="h-[160px]"
                position="70% 60%"
                motion="expose"
              />
              <SiteLabel className="absolute bottom-3 left-3">
                Architecture with VANTA
              </SiteLabel>
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
}
