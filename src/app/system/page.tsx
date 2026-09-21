import { SmartHome } from "@/components/sections/SmartHome";
import { System } from "@/components/sections/System";
import { Footer } from "@/components/site/Footer";
import { site } from "@/data/site";

export default function SystemPage() {
  return (
    <main>
      <System content={site.system} />
      <SmartHome content={site.smartHome} />
      <Footer wordmark={site.footer.wordmark} tagline={site.footer.tagline} />
    </main>
  );
}
