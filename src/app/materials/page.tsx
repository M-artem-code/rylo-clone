import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "@/components/northline/PageIntro";
import { materialsPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Материалы",
};

export default function MaterialsPage() {
  return (
    <main>
      <PageIntro
        label={materialsPage.label}
        title={materialsPage.title}
        text={materialsPage.text}
      />
      <div className="flex flex-col gap-6 px-5 pb-10 md:px-[72px]">
        {materialsPage.rows.map((row) => (
          <article
            key={row.title}
            className="grid gap-4 md:grid-cols-[420fr_520fr_minmax(220px,1fr)] md:items-center"
          >
            <div className="relative h-[160px] md:h-[200px]">
              <Image src={row.macro} alt={row.title} fill className="object-cover" sizes="420px" />
            </div>
            <div className="relative h-[160px] md:h-[200px]">
              <Image
                src={row.apply}
                alt={`${row.title} в интерьере`}
                fill
                className="object-cover"
                sizes="520px"
              />
            </div>
            <div className="py-2">
              <h2 className="font-display text-[22px] font-medium">{row.title}</h2>
              <p className="mt-4 max-w-[300px] text-[14px] leading-[1.45] text-nl-muted">
                {row.text}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="px-5 pt-4 pb-16 md:px-[72px]">
        <Link href={materialsPage.href} className="text-[15px] font-medium text-nl-terr">
          {materialsPage.link}
        </Link>
      </div>
    </main>
  );
}
