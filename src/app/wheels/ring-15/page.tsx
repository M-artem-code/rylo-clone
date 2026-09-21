import { GhostLink } from "@/components/kolasik/slip-button";
import { MaterialChip } from "@/components/kolasik/material-chip";
import { RequestForm } from "@/components/kolasik/request-form";
import { WheelWindow } from "@/components/kolasik/wheel-window";
import { productRing15Copy } from "@/data/product-ring-15";
import { ring15 } from "@/data/products";

export default function Ring15Page() {
  return (
    <main>
      <section className="product-stage">
        <div className="object-well">
          <WheelWindow
            src={ring15.image}
            alt={ring15.name}
            size="xl"
            callouts={productRing15Copy.callouts}
          />
        </div>
        <div className="title-block">
          <div className="kicker">{productRing15Copy.kicker}</div>
          <h1>{productRing15Copy.title}</h1>
          <div className="mat">{productRing15Copy.material}</div>
          <div className="price placeholder">{ring15.price}</div>
          <p className="blurb">{productRing15Copy.blurb}</p>
          <dl className="spec-list">
            {productRing15Copy.specs.map((spec) => (
              <div className="spec-row" key={spec.term}>
                <dt>{spec.term}</dt>
                <dd>{spec.detail}</dd>
                <span className="num">
                  {spec.value === "chip:beech" ? (
                    <MaterialChip id="beech" label="Beech" />
                  ) : (
                    spec.value
                  )}
                </span>
              </div>
            ))}
          </dl>
          <div className="product-secondary">
            {productRing15Copy.links.map((link) => (
              <GhostLink key={link.href} href={link.href}>
                {link.label}
              </GhostLink>
            ))}
          </div>
        </div>
      </section>
      <section className="product-reviews">
        <div className="kicker">{productRing15Copy.reviewsKicker}</div>
        <h2>{productRing15Copy.reviewsTitle}</h2>
        <div className="review-grid">
          <div className="review-slot">
            <div className="review-kicker">{productRing15Copy.reviewLabel}</div>
            <div className="review-lines">
              <i style={{ width: "78%" }} />
              <i style={{ width: "64%" }} />
              <i style={{ width: "70%" }} />
            </div>
          </div>
          <div className="review-slot">
            <div className="review-kicker">{productRing15Copy.reviewLabel}</div>
            <div className="review-lines">
              <i style={{ width: "72%" }} />
              <i style={{ width: "58%" }} />
              <i style={{ width: "66%" }} />
            </div>
          </div>
        </div>
      </section>
      <section className="product-request">
        <div>
          <div className="kicker">{productRing15Copy.requestKicker}</div>
          <h2>{productRing15Copy.requestTitle}</h2>
          <p className="muted" style={{ marginTop: 10, maxWidth: "36ch" }}>
            {productRing15Copy.requestHelp}
          </p>
        </div>
        <RequestForm
          variant="product"
          submitLabel={productRing15Copy.submitLabel}
          defaults={{ diameter: "15\"", material: "Beech", model: "Ring 15" }}
        />
      </section>
    </main>
  );
}
