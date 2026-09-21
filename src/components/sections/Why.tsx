import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/data/site";

type WhyProps = {
  content: typeof site.why;
};

export function Why({ content }: WhyProps) {
  return (
    <section id="why" className="min-h-[1080px] bg-tv-bg px-6 pt-[130px] pb-16 xl:px-24">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="mt-16 grid gap-[18px] md:grid-cols-2 xl:grid-cols-3">
        {content.items.map((item) => (
          <article
            key={item.number}
            className="relative min-h-[250px] rounded-[18px] border border-white/[0.09] bg-tv-surface px-7 pt-8 pb-8"
          >
            <span className="absolute top-0 left-7 h-[3px] w-10 rounded-full bg-tv-gold" />
            <p className="text-[13px] font-medium tracking-[0.16em] text-tv-gold">
              {item.number}
            </p>
            <h3 className="mt-6 text-[20px] font-semibold text-tv-text">
              {item.title}
            </h3>
            <p className="mt-4 text-[15px] leading-6 text-tv-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
