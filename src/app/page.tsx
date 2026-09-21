import { Atmosphere } from "@/components/home/atmosphere";
import { NightHero } from "@/components/home/night-hero";
import { Packages } from "@/components/home/packages";
import { RequestTeaser } from "@/components/home/request-teaser";
import { SessionFlow } from "@/components/home/session-flow";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <div className="page">
      <NightHero />
      <Atmosphere />
      <Packages />
      <SessionFlow />
      <RequestTeaser />
      <SiteFooter />
    </div>
  );
}
