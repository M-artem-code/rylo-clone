import { GhostLink, SlipButton } from "@/components/kolasik/slip-button";
import { MaterialChip } from "@/components/kolasik/material-chip";
import { SizeStave } from "@/components/kolasik/size-stave";
import { SkuCard } from "@/components/kolasik/sku-card";
import { WheelWindow } from "@/components/kolasik/wheel-window";
import { homeCopy, homeStrip } from "@/data/home";
import { ring15 } from "@/data/products";
import { materials } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <section className="home-open">
        <div className="home-copy">
          <div className="kicker">{homeCopy.kicker}</div>
          <h1>{homeCopy.title}</h1>
          <p className="sub">{homeCopy.subline}</p>
          <div className="home-ctas">
            <SlipButton href={homeCopy.primaryHref}>{homeCopy.primaryCta}</SlipButton>
            <GhostLink href={homeCopy.shopHref}>{homeCopy.shopLabel}</GhostLink>
            <GhostLink href={homeCopy.sizeHref}>{homeCopy.sizeLabel}</GhostLink>
          </div>
        </div>
        <div className="home-stage">
          <WheelWindow
            src={ring15.image}
            alt={ring15.name}
            size="hero"
            callouts={homeCopy.callouts}
          />
        </div>
      </section>
      <section className="home-stave-block">
        <div className="kicker">{homeCopy.staveKicker}</div>
        <SizeStave active="15" />
        <p className="lead">{homeCopy.staveLead}</p>
      </section>
      <div className="section-rule" />
      <section className="home-strip">
        {homeStrip.map((product) => (
          <SkuCard key={product.id} product={product} compact />
        ))}
      </section>
      <section className="home-materials">
        <div className="chips">
          {materials.map((material) => (
            <MaterialChip key={material.id} id={material.id} label={material.label} />
          ))}
        </div>
        <p>{homeCopy.materialsLine}</p>
      </section>
      <section className="home-pause">
        <div className="slip" style={{ width: 460, maxWidth: "100%" }}>
          <div className="slip-stamp">REQ</div>
          <div className="slip-inner">
            <div className="kicker" style={{ marginBottom: 8 }}>
              {homeCopy.slipKicker}
            </div>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: 22,
                lineHeight: 1.25,
                marginBottom: 8,
              }}
            >
              {homeCopy.slipTitle}
            </p>
            <p className="muted" style={{ fontSize: 14, marginBottom: 14 }}>
              {homeCopy.slipBody}
            </p>
            <SlipButton href={homeCopy.primaryHref}>{homeCopy.primaryCta}</SlipButton>
          </div>
        </div>
      </section>
    </main>
  );
}
