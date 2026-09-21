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
      <svg
        viewBox="0 0 36 36"
        className={cn("size-9 shrink-0", markClassName)}
        aria-hidden
      >
        <rect
          x="1.2"
          y="1.2"
          width="33.6"
          height="33.6"
          rx="10"
          fill="none"
          stroke="#E6C34A"
          strokeWidth="2"
        />
        <path
          d="M10.2 16.4a8 8 0 0 1 15.6 0"
          fill="none"
          stroke="#E6C34A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="16.7" y="15.2" width="2.6" height="12" rx="1.3" fill="#E6C34A" />
      </svg>
      <span className="text-[15px] font-semibold tracking-[0.11em] text-tv-text">
        {wordmark}
      </span>
    </Link>
  );
}
