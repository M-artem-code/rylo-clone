function ticks() {
  const lines = [];
  for (let i = 0; i < 72; i += 1) {
    const angle = (i * 5 * Math.PI) / 180;
    const major = i % 9 === 0;
    const mid = i % 3 === 0;
    const r1 = 198;
    const r0 = major ? 184 : mid ? 190 : 194;
    lines.push(
      <line
        key={i}
        x1={(200 + r0 * Math.cos(angle)).toFixed(2)}
        y1={(200 + r0 * Math.sin(angle)).toFixed(2)}
        x2={(200 + r1 * Math.cos(angle)).toFixed(2)}
        y2={(200 + r1 * Math.sin(angle)).toFixed(2)}
        stroke="#5E6A71"
        strokeWidth={major ? 1.1 : 0.6}
        opacity={major ? 0.7 : 0.4}
      />
    );
  }
  return lines;
}

export function DegreeRing() {
  return (
    <svg className="degree-ring" viewBox="0 0 400 400" aria-hidden="true">
      <circle cx="200" cy="200" r="199" fill="none" stroke="#5E6A71" strokeWidth="0.7" opacity="0.35" />
      <circle cx="200" cy="200" r="186" fill="none" stroke="#5E6A71" strokeWidth="0.45" opacity="0.22" />
      {ticks()}
    </svg>
  );
}
