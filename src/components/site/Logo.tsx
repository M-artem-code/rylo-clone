import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  wordmark: string;
  className?: string;
  markClassName?: string;
  href?: string;
};

export function Logo({
  wordmark,
  className,
  markClassName,
  href = "/",
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-3", className)}
      aria-label={wordmark}
    >
      <span
        className={cn(
          "relative block size-9 shrink-0 rounded-[10px] border-2 border-tv-gold",
          markClassName,
        )}
        aria-hidden
      >
        <span className="absolute top-[22%] left-1/2 h-[32%] w-[56%] -translate-x-1/2 rounded-full border-2 border-b-0 border-tv-gold" />
        <span className="absolute top-[42%] left-1/2 h-[36%] w-[2.5px] -translate-x-1/2 rounded-full bg-tv-gold" />
      </span>
      <span className="text-[15px] font-semibold tracking-[0.11em] text-tv-text">
        {wordmark}
      </span>
    </Link>
  );
}
