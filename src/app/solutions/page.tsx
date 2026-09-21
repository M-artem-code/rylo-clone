import { Solutions } from "@/components/sections/Solutions";
import { Footer } from "@/components/site/Footer";
import { site } from "@/data/site";

export default function SolutionsPage() {
  return (
    <main>
      <Solutions content={site.solutions} />
      <Footer wordmark={site.footer.wordmark} tagline={site.footer.tagline} />
    </main>
  );
}
