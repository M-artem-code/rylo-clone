import { Contacts } from "@/components/sections/Contacts";
import { Cta } from "@/components/sections/Cta";
import { Hero } from "@/components/sections/Hero";
import { Numbers } from "@/components/sections/Numbers";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { SmartHome } from "@/components/sections/SmartHome";
import { Solutions } from "@/components/sections/Solutions";
import { System } from "@/components/sections/System";
import { Why } from "@/components/sections/Why";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <Hero content={site.hero} />
      <Solutions content={site.solutions} />
      <Numbers content={site.numbers} />
      <System content={site.system} />
      <SmartHome content={site.smartHome} />
      <Projects content={site.projects} />
      <Why content={site.why} />
      <Process content={site.process} />
      <Cta content={site.cta} />
      <Contacts
        content={site.contacts}
        wordmark={site.wordmark}
        footer={site.footer}
      />
    </main>
  );
}
