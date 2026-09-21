import type { Metadata } from "next";
import Image from "next/image";

import { NlButton } from "@/components/northline/NlButton";
import { PageIntro } from "@/components/northline/PageIntro";
import { processPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Процесс",
};

export default function ProcessPage() {
  return (
    <main>
      <PageIntro
        label={processPage.label}
        title={processPage.title}
        text=""
        aside={processPage.text}
      />
      <section className="px-5 pb-16 md:px-[72px]">
        <div className="relative mb-6 hidden h-px bg-nl-line md:block" />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {processPage.steps.map((step) => (
            <li key={step.num}>
              <p className="text-[14px] font-medium text-nl-terr">{step.num}</p>
              <div className="relative mt-4 h-[160px]">
                <Image src={step.image} alt={step.title} fill className="object-cover" sizes="236px" />
              </div>
              <h2 className="mt-5 text-[16px] font-medium">{step.title}</h2>
              <p className="mt-2 text-[13px] leading-[1.4] text-nl-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="px-5 pb-16 md:px-[72px]">
        <div className="grid items-center gap-8 bg-nl-bg2 px-6 py-10 md:grid-cols-[1fr_232px] md:px-12 md:py-8">
          <div>
            <h2 className="font-display text-[24px] font-medium md:text-[26px]">
              {processPage.cta.title}
            </h2>
            <p className="mt-4 text-[15px] text-nl-muted">{processPage.cta.text}</p>
            <NlButton href={processPage.cta.href} className="mt-6">
              {processPage.cta.label}
            </NlButton>
          </div>
          <div className="relative h-[152px]">
            <Image
              src={processPage.cta.image}
              alt=""
              fill
              className="object-cover"
              sizes="232px"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
