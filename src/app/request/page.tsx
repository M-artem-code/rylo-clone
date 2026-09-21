import Image from "next/image";
import { RequestForm } from "@/components/request/request-form";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { requestPage } from "@/data/request";
import { resolvePackageId } from "@/data/site";

type RequestPageProps = {
  searchParams: Promise<{ package?: string | string[] }>;
};

export default async function RequestPage({ searchParams }: RequestPageProps) {
  const params = await searchParams;
  const initialPackage = resolvePackageId(params.package);

  return (
    <div className="page">
      <SiteHeader variant="solid" />
      <section className="section section--tight request-hero">
        <div className="wrap">
          <SectionHeading
            kicker={requestPage.kicker}
            title={requestPage.title}
            titleAs="h1"
            titleClassName=""
          />
          <p className="lede">{requestPage.subline}</p>
        </div>
      </section>
      <section className="section section--tight" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="request-layout">
            <RequestForm initialPackage={initialPackage} />
            <aside className="side-visual">
              <Image
                src={requestPage.image.src}
                alt={requestPage.image.alt}
                fill
                sizes="(min-width: 1100px) 40vw, 100vw"
                style={{ objectFit: "cover", objectPosition: "50% 20%" }}
              />
              <div className="side-visual__meta mono">{requestPage.image.caption}</div>
            </aside>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
