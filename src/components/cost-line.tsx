export function CostLine() {
  return (
    <section className="bg-bone py-14">
      <div className="page-shell page-gutter">
        <p className="font-mono text-[13px] font-medium tracking-[0.22em] text-muted-ink">
          04
        </p>
        <h2 className="mt-[10px] text-[32px] font-extrabold tracking-[-0.02em] text-charcoal md:text-[40px]">
          СТОИМОСТЬ
        </h2>
        <p className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <span className="font-mono text-[22px] font-medium tracking-[0.08em] text-muted-ink">
            от …
          </span>
          <span className="text-[17px] text-charcoal">
            смета после консультации по участку
          </span>
        </p>
      </div>
    </section>
  );
}
