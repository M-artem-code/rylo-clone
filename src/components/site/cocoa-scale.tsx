import { scaleEnds, type Lot } from "@/data/tuka";

const edges = [
  "polygon(0% 12%, 14% 0%, 27% 9%, 44% 1%, 61% 8%, 78% 0%, 100% 10%, 100% 100%, 0% 100%)",
  "polygon(0% 6%, 18% 0%, 33% 8%, 52% 2%, 70% 9%, 86% 1%, 100% 7%, 100% 100%, 0% 100%)",
  "polygon(0% 9%, 11% 2%, 29% 0%, 48% 8%, 66% 1%, 84% 7%, 100% 0%, 100% 100%, 0% 100%)",
  "polygon(0% 4%, 16% 8%, 34% 0%, 51% 7%, 69% 1%, 88% 6%, 100% 2%, 100% 100%, 0% 100%)",
  "polygon(0% 8%, 20% 1%, 38% 7%, 55% 0%, 73% 8%, 91% 2%, 100% 9%, 100% 100%, 0% 100%)",
  "polygon(0% 3%, 15% 8%, 31% 1%, 49% 9%, 67% 2%, 82% 7%, 100% 4%, 100% 100%, 0% 100%)",
];

export function CocoaScale({ lots }: { lots: readonly Lot[] }) {
  return (
    <div>
      <div className="flex items-end gap-3 sm:gap-5">
        {lots.map((lot, index) => (
          <div key={lot.id} className="flex min-w-0 flex-1 flex-col items-center gap-3">
            <div
              className="h-16 w-full max-w-16 sm:h-20"
              style={{
                backgroundColor: lot.swatch,
                clipPath: edges[index] ?? edges[0],
              }}
            />
            <span className="font-mono text-[10px] tracking-[0.14em] text-body sm:text-xs">
              {lot.percent}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 h-1.5 bg-oak" />
      <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        <span>{scaleEnds.soft}</span>
        <span>{scaleEnds.bitter}</span>
      </div>
    </div>
  );
}
