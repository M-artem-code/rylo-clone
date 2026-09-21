import { FaqList } from "@/components/kolasik/faq-list";
import { MaterialChip } from "@/components/kolasik/material-chip";
import { RingDiagram } from "@/components/kolasik/ring-diagram";
import { SizeStave } from "@/components/kolasik/size-stave";
import { GhostLink, SlipButton } from "@/components/kolasik/slip-button";
import { sizeGuideCopy } from "@/data/size-guide";

export default function SizeGuidePage() {
  return (
    <main>
      <section className="size-head">
        <div className="kicker">{sizeGuideCopy.kicker}</div>
        <h1>{sizeGuideCopy.title}</h1>
        <p className="sub">{sizeGuideCopy.sub}</p>
      </section>
      <section className="size-diagram-wrap">
        <RingDiagram />
        <div className="fit-notes">
          <SizeStave active="15" />
          <h2>{sizeGuideCopy.fitTitle}</h2>
          <p>{sizeGuideCopy.fitBody}</p>
          <p className="muted" style={{ marginTop: 14 }}>
            {sizeGuideCopy.fitNote}
          </p>
        </div>
      </section>
      <section className="size-materials">
        <h2>{sizeGuideCopy.materialsTitle}</h2>
        <div className="mat-grid">
          {sizeGuideCopy.materials.map((material) => (
            <div className="mat-key" key={material.id}>
              <MaterialChip id={material.id} label={material.label} />
              <p>{material.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="size-faq">
        <div className="kicker">{sizeGuideCopy.faqKicker}</div>
        <FaqList items={sizeGuideCopy.faqs} />
      </section>
      <section className="size-cta">
        <SlipButton href="/request">Request a wheel</SlipButton>
        <GhostLink href="/wheels">Shop wheels</GhostLink>
      </section>
    </main>
  );
}
