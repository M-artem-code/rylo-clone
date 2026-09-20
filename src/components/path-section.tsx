import { SectionHeading } from "@/components/section-heading";
import { home } from "@/data/home";

export function PathSection() {
  const { path } = home;

  return (
    <section id="path" className="bg-bone py-24">
      <SectionHeading index={path.index} title={path.title} />
      <div className="page-shell page-gutter mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
        {path.steps.map((step, index) => (
          <div
            key={step.index}
            className={
              index === 0
                ? "md:pr-8"
                : "border-rule-paper md:border-l md:px-8"
            }
          >
            <p className="font-mono text-[12px] font-medium tracking-[0.18em] text-muted-ink">
              {step.index}
            </p>
            <h3 className="mt-3 text-[24px] font-extrabold text-charcoal">
              {step.title}
            </h3>
            <p className="mt-5 max-w-[280px] text-[16px] leading-[26px] text-charcoal">
              {step.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
