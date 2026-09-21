export function RingDiagram() {
  return (
    <div className="ring-diagram">
      <svg viewBox="0 0 260 230" width="520" height="460" role="img" aria-label="Four diameters, 12 to 21 inches">
        <circle cx="110" cy="110" r="46" fill="none" stroke="#5E6A71" strokeWidth="0.8" opacity="0.35" />
        <circle cx="110" cy="110" r="58" fill="none" stroke="#C46A3A" strokeWidth="1.4" opacity="0.85" />
        <circle cx="110" cy="110" r="70" fill="none" stroke="#5E6A71" strokeWidth="0.8" opacity="0.59" />
        <circle cx="110" cy="110" r="82" fill="none" stroke="#5E6A71" strokeWidth="1.2" opacity="0.71" />
        <line x1="110" y1="26" x2="110" y2="194" stroke="#5E6A71" strokeWidth="0.4" opacity="0.25" strokeDasharray="2 3" />
        <line x1="26" y1="110" x2="194" y2="110" stroke="#5E6A71" strokeWidth="0.4" opacity="0.25" strokeDasharray="2 3" />
        <text x="214" y="68" fill="#5E6A71" fontSize="8" fontFamily="var(--sans)" letterSpacing="0.6">
          12&quot;
        </text>
        <line x1="118" y1="64" x2="208" y2="64" stroke="#5E6A71" strokeWidth="0.5" opacity="0.45" />
        <text x="214" y="56" fill="#5E6A71" fontSize="8" fontFamily="var(--sans)" letterSpacing="0.6">
          15&quot;
        </text>
        <line x1="118" y1="52" x2="208" y2="52" stroke="#5E6A71" strokeWidth="0.5" opacity="0.45" />
        <text x="214" y="44" fill="#5E6A71" fontSize="8" fontFamily="var(--sans)" letterSpacing="0.6">
          18&quot;
        </text>
        <line x1="118" y1="40" x2="208" y2="40" stroke="#5E6A71" strokeWidth="0.5" opacity="0.45" />
        <text x="214" y="32" fill="#5E6A71" fontSize="8" fontFamily="var(--sans)" letterSpacing="0.6">
          21&quot;
        </text>
        <line x1="118" y1="28" x2="208" y2="28" stroke="#5E6A71" strokeWidth="0.5" opacity="0.45" />
        <image href="/images/wheels/squirrel.png" x="82" y="124" width="56" height="56" />
        <text
          x="110"
          y="218"
          textAnchor="middle"
          fill="#7A6F64"
          fontSize="7.5"
          fontFamily="var(--sans)"
          letterSpacing="1.2"
        >
          SCALE — NEUTRAL SILHOUETTE
        </text>
      </svg>
    </div>
  );
}
