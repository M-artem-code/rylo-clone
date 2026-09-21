import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { homeTeaser } from "@/data/home";

export function RequestTeaser() {
  return (
    <section className="teaser">
      <Image
        src={homeTeaser.image.src}
        alt={homeTeaser.image.alt}
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "78% 62%" }}
      />
      <div className="teaser__veil" />
      <div className="teaser__slash" />
      <div className="teaser__panel">
        <div className="kicker">{homeTeaser.kicker}</div>
        <h2>{homeTeaser.title}</h2>
        <CtaButton href={homeTeaser.href}>{homeTeaser.cta}</CtaButton>
      </div>
    </section>
  );
}
