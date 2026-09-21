type IconProps = {
  className?: string;
};

export function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={24 + Math.cos(a) * 13}
            y1={24 + Math.sin(a) * 13}
            x2={24 + Math.cos(a) * 18}
            y2={24 + Math.sin(a) * 18}
            stroke="currentColor"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
}

export function PanelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect x="10" y="14" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M10 24h28M19 14v20M29 14v20" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function InverterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect x="10" y="14" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M16 24c3-8 6 8 9 0s6 8 9 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function BatteryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect x="11" y="16" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="33" y="20" width="4" height="8" rx="1" fill="currentColor" />
      <rect x="15" y="20" width="6" height="8" fill="currentColor" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 12l14 11v13H10V23L24 12z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M21 36V26h6v10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function DevicesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect x="12" y="12" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="26" y="12" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="12" y="26" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="26" y="26" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
