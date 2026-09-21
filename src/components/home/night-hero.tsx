import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/cta-button";
import { SiteHeader } from "@/components/site-header";
import { homeHero } from "@/data/home";

export function NightHero() {
  return (
    <section className="hero">
      <div className="hero__photo">
        <Image
          src={homeHero.image.src}
          alt={homeHero.image.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "68% 40%" }}
        />
      </div>
      <div className="hero__veil" />
      <div className="hero__line" />
      <div className="hero__slash" />
      <SiteHeader variant="overlay" />
      <div className="wrap hero__content">
        <div className="hero__cluster">
          {homeHero.cluster.map((item, index) => (
            <span key={item} style={{ color: "inherit", display: "contents" }}>
              {index > 0 ? <span>·</span> : null}
              {item}
            </span>
          ))}
        </div>
        <h1>
          {homeHero.titleLines[0]}
          <br />
          {homeHero.titleLines[1]}
        </h1>
        <p className="hero__sub">{homeHero.subline}</p>
        <div className="hero__actions">
          <CtaButton href={homeHero.primaryHref}>{homeHero.primaryCta}</CtaButton>
          <Link className="link-text" href={homeHero.secondaryHref}>
            {homeHero.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
