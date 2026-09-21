import { OrbitalButton } from "@/components/site/OrbitalButton";

export function CtaBand({
  title,
  lead,
  cta,
}: {
  title: string;
  lead?: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="px-page pb-16">
      <div className="flex flex-col gap-6 rounded-[28px] bg-royal px-8 py-10 text-white md:flex-row md:items-center md:justify-between md:px-12 md:py-14">
        <div>
          <h2 className="font-display text-[26px] font-bold leading-tight md:text-[32px]">{title}</h2>
          {lead ? <p className="mt-3 max-w-xl font-body text-[15px] text-white/70">{lead}</p> : null}
        </div>
        <OrbitalButton href={cta.href} variant="inverse">
          {cta.label}
        </OrbitalButton>
      </div>
    </section>
  );
}
