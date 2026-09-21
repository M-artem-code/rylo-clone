import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/site/Footer";
import { site } from "@/data/site";

export default function ProjectsPage() {
  return (
    <main>
      <Projects content={site.projects} />
      <Footer wordmark={site.footer.wordmark} tagline={site.footer.tagline} />
    </main>
  );
}
