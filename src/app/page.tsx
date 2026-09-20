import { HomeHero } from "@/components/home-hero";
import { Lineup } from "@/components/lineup";
import { Material } from "@/components/material";
import { PathSection } from "@/components/path-section";
import { RequestForm } from "@/components/request-form";
import { Thesis } from "@/components/thesis";
import { home } from "@/data/home";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <Thesis />
      <Material />
      <Lineup />
      <PathSection />
      <RequestForm
        index={home.form.index}
        title={home.form.title}
        deck={home.form.deck}
        cta={home.form.cta}
        defaultModel={home.form.defaultModel}
        locked={home.form.locked}
      />
    </main>
  );
}
