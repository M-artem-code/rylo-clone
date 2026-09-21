export function TasteMap({
  labels,
  mark,
}: {
  labels: readonly string[];
  mark: number;
}) {
  return (
    <div>
      <div className="relative mt-8 h-px bg-line">
        <span
          className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 bg-lime"
          style={{ left: `${mark * 100}%` }}
        />
      </div>
      <div className="mt-3 flex justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-body">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}

export function ProcessLine({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-body">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3">
          <span>{step}</span>
          {index < steps.length - 1 ? <span aria-hidden="true">→</span> : null}
        </li>
      ))}
    </ol>
  );
}

export function EstateLine() {
  return (
    <svg
      viewBox="0 0 220 84"
      className="mt-8 h-16 w-full text-oak"
      aria-hidden="true"
    >
      <path
        d="M8 62 C 36 58, 48 28, 78 34 S 112 62, 142 30 S 184 18, 212 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <rect
        x="96"
        y="36"
        width="22"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <text
        x="86"
        y="74"
        fill="currentColor"
        fontSize="9"
        letterSpacing="1.5"
      >
        LOTE
      </text>
    </svg>
  );
}
