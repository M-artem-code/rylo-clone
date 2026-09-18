import Link from "next/link";

export function RollingLabel({ text, className = "text-button" }: { text: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      data-rolling-label=""
      className={`text-ink-fixed relative z-10 flex overflow-hidden ${className}`}
    >
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={`ease-cubic-button inline-block transition-transform duration-600 [text-shadow:0_1.3em_currentColor] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none${char === " " ? " whitespace-pre" : ""}`}
          style={{ transitionDelay: `${index * 0.01}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export function AccentCta({
  href,
  label,
  srOnly,
}: {
  href: string;
  label: string;
  srOnly?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={srOnly || label}
      className="group relative inline-flex items-center justify-center rounded-small focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none h-button-main px-[clamp(1rem,0.7963rem_+_1.0186vw,1.713rem)]"
    >
      <span
        aria-hidden="true"
        className="bg-accent group-hover:border-page/30 rounded-small ease-cubic-button absolute inset-0 border-0 border-transparent shadow-[0_8px_24px_#00000026,inset_0_0_0.5rem_#ffffff66] transition-[inset,background-color,border-color,border-width] duration-600 group-hover:inset-0.5 group-hover:border-2 group-hover:bg-[color-mix(in_srgb,var(--color-accent),white_20%)] motion-reduce:transition-none"
      />
      <RollingLabel text={label} />
      {srOnly ? <span className="sr-only">{srOnly}</span> : null}
    </Link>
  );
}
