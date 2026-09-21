import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  word?: boolean;
};

export function Logo({ className, word = true }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)} aria-label="ORBITAL">
      <span className="relative size-[26px] shrink-0">
        <span className="absolute inset-0 rounded-full border-[2.4px] border-navy" />
        <span className="absolute top-[3px] -right-[3px] size-[8px] rounded-full bg-violet" />
      </span>
      {word ? (
        <span className="font-display text-[20px] font-bold tracking-[0.04em] text-navy">
          ORBITAL
        </span>
      ) : null}
    </Link>
  );
}
