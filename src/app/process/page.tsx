import { Process } from "@/components/sections/Process";
import { Footer } from "@/components/site/Footer";
import { site } from "@/data/site";

export default function ProcessPage() {
  return (
    <main>
      <Process content={site.process} />
      <Footer wordmark={site.footer.wordmark} tagline={site.footer.tagline} />
    </main>
  );
}
