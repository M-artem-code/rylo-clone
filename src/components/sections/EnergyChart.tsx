type EnergyChartProps = {
  values: readonly number[];
};

export function EnergyChart({ values }: EnergyChartProps) {
  const width = 900;
  const height = 230;
  const padX = 8;
  const padY = 14;
  const points = values.map((value, index) => {
    const x = padX + (index * (width - padX * 2)) / Math.max(values.length - 1, 1);
    const y = height - padY - value * (height - padY * 2);
    return { x, y };
  });
  const line = points.map((p) => `${p.x},${p.y}`).join(" ");
  const area = `${points[0]?.x ?? 0},${height - 8} ${line} ${points.at(-1)?.x ?? width},${height - 8}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-[190px] w-full" aria-hidden>
      <polygon points={area} fill="rgba(230,195,74,0.11)" />
      <polyline
        points={line}
        fill="none"
        stroke="#e6c34a"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {points.map((point, index) =>
        index % 2 === 0 ? (
          <circle key={index} cx={point.x} cy={point.y} r="3" fill="#e6c34a" />
        ) : null,
      )}
    </svg>
  );
}
