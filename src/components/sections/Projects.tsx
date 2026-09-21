import Image from "next/image";

import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/data/site";

type ProjectsProps = {
  content: typeof site.projects;
};

export function Projects({ content }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="min-h-[1080px] bg-tv-bg px-6 pt-[118px] pb-16 xl:px-24"
    >
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {content.items.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-[18px] bg-tv-surface"
          >
            <div className="relative h-[470px]">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 25vw, 50vw"
              />
            </div>
            <div className="px-5 pt-5 pb-8">
              <p className="text-[12px] font-medium tracking-[0.1em] text-tv-gold">
                {item.tag}
              </p>
              <h3 className="mt-3 text-[20px] font-semibold text-tv-text">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-tv-muted">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
