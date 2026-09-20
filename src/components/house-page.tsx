import { CostLine } from "@/components/cost-line";
import { HouseHero } from "@/components/house-hero";
import { Modules } from "@/components/modules";
import { RequestForm } from "@/components/request-form";
import { SectionHeading } from "@/components/section-heading";
import { SiteLogic } from "@/components/site-logic";
import { SpecStrip } from "@/components/spec-strip";
import type { HousePage as HousePageData } from "@/data/houses";

export function HousePageView({ house }: { house: HousePageData }) {
  return (
    <main>
      <HouseHero
        name={house.name}
        kicker={house.kicker}
        oneLiner={house.oneLiner}
        image={house.hero.src}
        alt={house.hero.alt}
      />
      <section className="bg-bone py-[100px]">
        <SectionHeading index="01" title="КОНЦЕПЦИЯ" copy={house.concept} />
      </section>
      <SpecStrip planting={house.planting} />
      <SiteLogic
        copy={house.siteCopy}
        landscape={house.landscape}
        mass={house.mass}
      />
      <Modules kind={house.modulesKind} caption={house.modulesCaption} />
      <CostLine />
      <RequestForm
        index="05"
        title={house.formTitle}
        deck="Модель уже выбрана. Напишите о месте."
        cta="ОСТАВИТЬ ЗАЯВКУ"
        defaultModel={house.model}
        locked
      />
    </main>
  );
}
