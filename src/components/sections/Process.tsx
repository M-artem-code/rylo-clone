import { GoldButton } from "@/components/site/GoldButton";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/data/site";

type ProcessProps = {
  content: typeof site.process;
};

export function Process({ content }: ProcessProps) {
  return (
    <section
      id="process"
      className="min-h-[1080px] bg-tv-bg px-6 pt-[130px] pb-16 xl:px-24"
    >
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />
      <ol className="mt-16 grid gap-[18px] sm:grid-cols-2 xl:grid-cols-5">
        {content.steps.map((step, index) => (
          <li
            key={step.number}
            className="relative min-h-[420px] rounded-[18px] border border-white/[0.09] bg-[#14171cf2] px-6 pt-8"
          >
            {index < content.steps.length - 1 ? (
              <span className="absolute top-[56px] left-[calc(50%+20px)] hidden h-px w-[calc(100%-8px)] bg-tv-gold/45 xl:block" />
            ) : null}
            <div className="relative z-10 mx-auto mb-8 flex size-8 items-center justify-center rounded-full border-2 border-tv-gold bg-tv-surface">
              <span className="size-2.5 rounded-full bg-tv-gold" />
            </div>
            <p className="text-[13px] font-medium tracking-[0.16em] text-tv-gold">
              {step.number}
            </p>
            <h3 className="mt-4 text-[18px] font-semibold text-tv-text">
              {step.title}
            </h3>
            <p className="mt-5 text-[14px] leading-6 text-tv-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.09] bg-tv-surface px-9 py-8 sm:flex-row sm:items-center">
        <p className="text-[16px] text-tv-muted">{content.note}</p>
        <GoldButton href={content.cta.href}>{content.cta.label}</GoldButton>
      </div>
    </section>
  );
}
