import { Chip } from "@/components/chip";
import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { homePackages } from "@/data/home";
import { requestHref } from "@/data/site";

export function Packages() {
  return (
    <section className="section" id={homePackages.id}>
      <div className="wrap">
        <SectionHeading kicker={homePackages.kicker} title={homePackages.title} />
        <p className="packages__intro">{homePackages.intro}</p>
        <div className="cards">
          {homePackages.items.map((item) => (
            <article
              className={item.featured ? "card card--main" : "card"}
              key={item.id}
            >
              <div className="card__meta">
                <Chip accent={Boolean(item.featured)}>{item.label}</Chip>
                <span className="mono card__code">{item.code}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.line}</p>
              <CtaButton
                href={requestHref(item.id)}
                variant={item.featured ? "primary" : "ghost"}
              >
                Оставить заявку · {item.name}
              </CtaButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
