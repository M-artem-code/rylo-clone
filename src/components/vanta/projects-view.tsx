import Link from "next/link";

import { projectsPage } from "@/data/projects";
import { routes } from "@/data/site";
import { cn } from "@/lib/utils";

import { CoverImage } from "./cover-image";
import { SiteHeader } from "./site-header";
import { SiteLabel } from "./site-label";
import { VantaButton } from "./vanta-button";

export function ProjectsView() {
  const [lead, restaurant, gallery, residence, retail, office] = projectsPage.tiles;

  return (
    <main className="min-h-screen bg-void">
      <SiteHeader
        active="Projects"
        cta={{ label: "Start a project", href: routes.contact }}
      />
      <div className="px-6 py-8 md:px-12">
        <h1 className="font-display text-[72px] leading-none text-[#2a2a2c]">
          {projectsPage.title}
        </h1>
        <SiteLabel className="mt-2">{projectsPage.kicker}</SiteLabel>
        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-12">
          <ProjectTile tile={lead} className="h-[260px] md:col-span-7 md:h-[430px]" />
          <div className="grid gap-3 md:col-span-5">
            <ProjectTile tile={restaurant} className="h-[210px]" />
            <ProjectTile tile={gallery} className="h-[204px]" />
          </div>
          <ProjectTile tile={residence} className="h-[230px] md:col-span-4" />
          <ProjectTile tile={retail} className="h-[230px] md:col-span-4" />
          <ProjectTile tile={office} className="h-[230px] md:col-span-4" />
        </div>
        <SiteLabel className="mt-8">{projectsPage.compareLabel}</SiteLabel>
        <div className="mt-4 flex flex-wrap items-end gap-4">
          <figure>
            <CoverImage
              src={projectsPage.compareImage}
              alt="Without lighting"
              className="h-[110px] w-[400px] max-w-full brightness-[0.12]"
            />
            <SiteLabel className="mt-2">Without</SiteLabel>
          </figure>
          <figure>
            <CoverImage
              src={projectsPage.compareImage}
              alt="With VANTA"
              className="h-[110px] w-[400px] max-w-full"
            />
            <SiteLabel className="mt-2">With VANTA</SiteLabel>
          </figure>
          <VantaButton href={projectsPage.cta.href} filled>
            {projectsPage.cta.label}
          </VantaButton>
        </div>
      </div>
    </main>
  );
}

function ProjectTile({
  tile,
  className,
  position,
}: {
  tile: (typeof projectsPage.tiles)[number];
  className?: string;
  position?: string;
}) {
  return (
    <Link href={tile.href} className={cn("relative block", className)}>
      <CoverImage
        src={tile.image}
        alt={`${tile.title}, ${tile.city}`}
        className="h-full min-h-[180px]"
        position={position}
      />
      <div className="absolute inset-x-0 bottom-0 bg-void/60 px-3.5 py-2">
        <SiteLabel>
          {tile.title}   ·   {tile.city}
        </SiteLabel>
      </div>
    </Link>
  );
}
