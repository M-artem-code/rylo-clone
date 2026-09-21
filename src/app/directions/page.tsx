import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "@/components/northline/PageIntro";
import { directionsPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Направления",
};

export default function DirectionsPage() {
  return (
    <main>
      <PageIntro
        label={directionsPage.label}
        title={directionsPage.title}
        text={directionsPage.text}
      />
      <div className="flex flex-col gap-10 px-5 pb-16 md:px-[72px] md:pb-20">
        {directionsPage.items.map((item, index) => {
          const photoLeft = index % 2 === 0;
          return (
            <article
              key={item.id}
              id={item.id}
              className="grid scroll-mt-28 items-center gap-8 md:grid-cols-[860fr_380fr]"
            >
              <div className={photoLeft ? "md:order-1" : "md:order-2"}>
                <div className={`relative w-full ${item.height}`}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 860px, 100vw"
                  />
                </div>
              </div>
              <div className={photoLeft ? "md:order-2" : "md:order-1"}>
                <p className="text-[13px] font-medium text-nl-terr">{item.num}</p>
                <h2 className="mt-3 font-display text-[28px] font-medium">{item.title}</h2>
                <p className="mt-6 max-w-[380px] text-[15px] leading-[1.45] text-nl-muted">
                  {item.text}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-block text-[14px] font-medium text-nl-terr"
                >
                  {directionsPage.link}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
