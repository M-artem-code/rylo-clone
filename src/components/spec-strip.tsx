import { specKeys } from "@/data/houses";
import { cn } from "@/lib/utils";

type SpecStripProps = {
  planting: string;
};

export function SpecStrip({ planting }: SpecStripProps) {
  const cells = [
    { key: "тип", value: specKeys[0].value, muted: false },
    { key: "посадка", value: planting, muted: false },
    { key: "программа", value: specKeys[1].value, muted: false },
    { key: "адаптация", value: specKeys[2].value, muted: false },
    { key: "стоимость", value: specKeys[3].value, muted: true },
  ];

  return (
    <section className="border-y border-rule-dark bg-charcoal">
      <div className="page-shell page-gutter grid grid-cols-2 md:grid-cols-5">
        {cells.map((cell, index) => (
          <div
            key={cell.key}
            className={cn(
              "py-11",
              index > 0 && "md:border-l md:border-rule-dark md:pl-5",
            )}
          >
            <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-muted-ink">
              {cell.key}
            </p>
            <p
              className={cn(
                "mt-3 font-mono text-[14px] font-medium tracking-[0.04em]",
                cell.muted ? "text-muted-ink" : "text-bone",
              )}
            >
              {cell.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
