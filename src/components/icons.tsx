export function OpenRingMark({ size = 18 }: { size?: number }) {
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="9"
        r="6.6"
        fill="none"
        stroke="#5E6A71"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeDasharray="36 5.5"
        strokeDashoffset="2"
      />
    </svg>
  );
}
