import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border-transparent bg-nl-terr text-nl-cream hover:bg-[#a64f2f]",
  ghost: "border-nl-ink bg-transparent text-nl-ink hover:bg-nl-ink hover:text-nl-cream",
  "ghost-light":
    "border-nl-cream bg-transparent text-nl-cream hover:bg-nl-cream hover:text-nl-ink",
  text: "border-transparent bg-transparent px-0 py-0 text-nl-terr hover:opacity-70",
} as const;

type Variant = keyof typeof variants;

const base =
  "inline-flex items-center justify-center rounded-none border px-[22px] py-[12px] text-[13px] font-medium tracking-[0.02em] transition-colors";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

export function NlButton({
  href,
  children,
  className,
  variant = "primary",
}: Common & { href: string }) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function NlSubmit({
  children,
  className,
  variant = "primary",
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
