export function Trajectory({ compact = false }: { compact?: boolean }) {
  const width = 1000;
  const height = compact ? 150 : 160;
  const ground = height * (compact ? 0.7 : 0.62);
  const points: string[] = [];
  let peak = { x: 0, y: height };
  for (let i = 0; i <= 140; i += 1) {
    const t = i / 140;
    const u = (t - 0.06) / 0.88;
    const lift = u >= 0 && u <= 1 ? Math.sin(u * Math.PI) ** 1.05 : 0;
    const x = t * width;
    const y = ground - lift * height * (compact ? 0.5 : 0.48);
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    if (y < peak.y) peak = { x, y };
  }
  const karman = ground - (ground - peak.y) * 0.9;
  const marks = [
    { t: 0.08, label: "RAMP" },
    { t: 0.2, label: "T−0" },
    { t: 0.34, label: "SEP" },
    { t: 0.5, label: "APOGEE" },
    { t: 0.92, label: "LAND" },
  ];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label="Схема суборбитальной траектории">
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke="#6D28FF"
        strokeWidth="8"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.35"
      />
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke="#0047FF"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1={karman}
        x2={width - 8}
        y2={karman}
        stroke="#6D28FF"
        strokeWidth="1.4"
        strokeDasharray="7 6"
      />
      <text x={width - 168} y={karman - 8} fill="#6D28FF" fontSize="12" fontFamily="var(--font-telemetry), monospace">
        KARMAN  100 KM
      </text>
      <circle cx={peak.x} cy={peak.y} r="7" fill="#6D28FF" opacity="0.35" />
      <circle cx={peak.x} cy={peak.y} r="4.5" fill="#ffffff" stroke="#6D28FF" strokeWidth="1.6" />
      {compact
        ? null
        : marks.map((mark) => {
            const index = Math.min(140, Math.round(mark.t * 140));
            const [x, y] = points[index].split(",").map(Number);
            return (
              <g key={mark.label}>
                <circle cx={x} cy={y} r="3.2" fill="#0047FF" />
                <text
                  x={x}
                  y={ground + 22}
                  textAnchor="middle"
                  fill="#272E5C"
                  fontSize="12"
                  fontFamily="var(--font-telemetry), monospace"
                >
                  {mark.label}
                </text>
              </g>
            );
          })}
    </svg>
  );
}
