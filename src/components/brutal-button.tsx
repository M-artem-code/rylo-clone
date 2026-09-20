import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BrutalButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  compact?: boolean;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function BrutalButton({
  href,
  children,
  variant = "primary",
  compact = false,
  type = "button",
  className,
  disabled,
  onClick,
}: BrutalButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-mono text-[11px] font-medium uppercase tracking-[0.2em] rounded-none border",
    compact ? "px-[18px] py-[11px]" : "px-[22px] py-[14px]",
    variant === "primary" &&
      "border-iron bg-iron text-bone hover:bg-[#8f4d2b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iron",
    variant === "ghost" &&
      "border-bone bg-transparent text-bone hover:bg-bone/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone",
    disabled && "pointer-events-none opacity-50",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
