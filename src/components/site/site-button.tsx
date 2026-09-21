import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonClass =
  "inline-flex items-center justify-center bg-lime px-5 py-3 font-display text-[1.35rem] uppercase leading-none tracking-[0.04em] text-moss transition-colors hover:bg-paper focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-lime disabled:opacity-50";

export function SiteButton({
  href,
  children,
  className,
  ...props
}: {
  href?: string;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  if (href) {
    return (
      <Link href={href} className={cn(buttonClass, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(buttonClass, className)} {...props}>
      {children}
    </button>
  );
}
