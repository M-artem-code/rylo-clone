import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader, Arrow } from "./SiteHeader";

type MarketingPageProps = { title: string; intro: string; image?: string; eyebrow?: string; blocks: readonly { title: string; body: string }[] };

export function MarketingPage({ title, intro, image, eyebrow = "Rylo", blocks }: MarketingPageProps) {
  return <><SiteHeader /><main>
    <section className="page-hero">
      <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-copy">{intro}</p></div>
      {image && <Image className="hero-image" src={image} alt="" width={1200} height={720} priority />}
    </section>
    <section className="content-grid">{blocks.map((block, index) => <article key={block.title} className={index === 0 ? "feature-block" : "content-block"}><p className="eyebrow">0{index + 1}</p><h2>{block.title}</h2><p>{block.body}</p><Link href="/contact">Learn more <Arrow /></Link></article>)}</section>
  </main><SiteFooter /></>;
}
