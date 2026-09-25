import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type FolioButtonProps = {
  href?: string;
  children: ReactNode;
  filled?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function FolioButton({
  href,
  children,
  filled = false,
  className,
  type = "button",
  disabled,
  onClick,
}: FolioButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-none border px-[1.35rem] py-[0.85rem] text-[13px] font-medium tracking-[0.02em] transition-colors duration-300",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone",
    filled
      ? "border-bone bg-bone text-tar hover:bg-bone-soft"
      : "border-bone bg-transparent text-bone hover:bg-bone hover:text-tar",
    disabled && "pointer-events-none opacity-50",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
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
