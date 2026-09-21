import type { Metadata } from "next";
import Image from "next/image";

import { PageIntro } from "@/components/northline/PageIntro";
import { projectsPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Проекты",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageIntro
        label={projectsPage.label}
        title={projectsPage.title}
        text={projectsPage.text}
      />
      <div className="flex flex-col gap-12 px-5 pb-16 md:px-[72px] md:pb-20">
        {projectsPage.items.map((item) =>
          item.layout === "full" ? (
            <article key={item.num}>
              <div className="relative h-[240px] md:h-[420px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" />
              </div>
              <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-10">
                <p className="text-[18px] font-medium">
                  {item.num}   {item.title}
                </p>
                <p className="text-[14px] text-nl-muted">
                  {item.place}  ·  {item.items}
                </p>
              </div>
            </article>
          ) : (
            <article
              key={item.num}
              className="grid items-center gap-8 md:grid-cols-[760fr_1fr]"
            >
              <div className="relative h-[240px] md:h-[380px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="760px" />
              </div>
              <div>
                <p className="text-[13px] font-medium text-nl-terr">{item.num}</p>
                <h2 className="mt-4 font-display text-[32px] font-medium">{item.title}</h2>
                <p className="mt-6 text-[15px] text-nl-muted">{item.place}</p>
                <p className="mt-4 max-w-[480px] text-[15px] leading-[1.45]">{item.items}</p>
              </div>
            </article>
          ),
        )}
      </div>
    </main>
  );
}
