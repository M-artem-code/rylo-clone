import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type VantaButtonProps = {
  href?: string;
  children: ReactNode;
  filled?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function VantaButton({
  href,
  children,
  filled = false,
  className,
  type = "button",
  onClick,
}: VantaButtonProps) {
  const classes = cn(
    "vanta-btn inline-flex h-[42px] items-center justify-center px-[26px] text-[13px] tracking-[0.08em]",
    filled
      ? "vanta-btn-filled bg-milk text-void"
      : "vanta-btn-line border border-milk-soft/60 text-milk",
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
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
