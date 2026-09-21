import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ChipKind } from "@/data/orbital";

const chipClass: Record<ChipKind, string> = {
  cobalt: "bg-cobalt text-white",
  violet: "bg-violet text-white",
  ink: "bg-ink text-white",
  soft: "bg-pale text-cobalt ring-1 ring-cobalt/30",
  ghost: "bg-white text-violet ring-1 ring-violet/40",
};

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="13.2" fill="none" stroke="#0047FF" strokeWidth="1.6" />
      <path
        d="M9.2 20.5a8.2 8.2 0 0 1 13.8-7.2"
        fill="none"
        stroke="#6D28FF"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M22.6 11.2l1.7 2.4-2.8.2z" fill="#0047FF" />
    </svg>
  );
}

export function Chip({ children, kind = "cobalt" }: { children: string; kind?: ChipKind }) {
  return (
    <span
      className={`inline-flex h-7 items-center rounded-full px-[11px] font-telemetry text-[11px] font-semibold uppercase tracking-[0.12em] ${chipClass[kind]}`}
    >
      {children}
    </span>
  );
}

const buttonClass = {
  primary:
    "bg-gradient-to-r from-cobalt to-violet text-white shadow-[0_0_28px_rgba(0,71,255,0.45)]",
  ghost: "bg-white text-ink ring-1 ring-cobalt/70",
  violet: "bg-violet text-white shadow-[0_0_28px_rgba(109,40,255,0.4)]",
  nav: "h-10 bg-gradient-to-r from-cobalt to-violet px-5 text-sm text-white shadow-[0_0_22px_rgba(0,71,255,0.4)]",
} as const;

export function OrbButton({
  href,
  children,
  kind = "primary",
  type = "button",
  onClick,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  kind?: keyof typeof buttonClass;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}) {
  const classes = `inline-flex h-14 items-center justify-center rounded-full px-7 font-display text-base font-semibold tracking-[0.02em] transition hover:brightness-110 ${buttonClass[kind]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function Kicker({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p
      className={`font-telemetry text-xs font-semibold uppercase tracking-[0.16em] ${light ? "text-white" : "text-cobalt"}`}
    >
      {children}
    </p>
  );
}

export function Chromatic({
  children,
  className = "",
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  const shadow = light
    ? "-5px 0 rgba(214,228,255,0.9), 5px 1px rgba(255,190,255,0.85)"
    : "-5px 0 rgba(0,71,255,0.75), 5px 1px rgba(109,40,255,0.68)";
  return (
    <span className={className} style={{ textShadow: shadow }}>
      {children}
    </span>
  );
}

export function ArrowLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 font-display text-[15px] font-semibold tracking-wide text-cobalt"
    >
      {children}
      <svg width="22" height="10" viewBox="0 0 22 10" aria-hidden="true">
        <path d="M0 5h20M15 1l5 4-5 4" fill="none" stroke="#0047FF" strokeWidth="1.6" />
      </svg>
    </Link>
  );
}

export function LiveDot() {
  return (
    <span className="relative inline-flex h-2.5 w-2.5">
      <span className="absolute inset-0 rounded-full bg-cobalt opacity-70 blur-[3px]" />
      <span className="relative h-2.5 w-2.5 rounded-full bg-cobalt" />
    </span>
  );
}

export function Photo({
  src,
  alt,
  position = "center center",
  className = "",
}: {
  src: string;
  alt: string;
  position?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 1100px) 100vw, 720px"
      className={`object-cover ${className}`}
      style={{ objectPosition: position }}
    />
  );
}

export function Frame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`relative overflow-hidden ${className}`}>{children}</div>;
}
