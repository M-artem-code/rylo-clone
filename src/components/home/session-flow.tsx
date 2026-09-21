import { SectionHeading } from "@/components/section-heading";
import { homeFlow } from "@/data/home";

export function SessionFlow() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading kicker={homeFlow.kicker} title={homeFlow.title} />
        <div className="steps">
          {homeFlow.steps.map((step) => (
            <article className="step" key={step.num}>
              <div className="step__num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
