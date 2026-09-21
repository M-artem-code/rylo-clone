import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md";
};

export function Logo({ className, size = "sm" }: LogoProps) {
  const mark = size === "md" ? "h-[16px] w-[14px]" : "h-[14px] w-[12px]";
  const type = size === "md" ? "text-[18px]" : "text-[15px]";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 text-nl-ink", className)}
      aria-label="NORTHLINE — на главную"
    >
      <span className={cn("relative inline-block", mark)} aria-hidden>
        <span className="absolute top-0 bottom-0 left-0 w-0.5 bg-nl-ink" />
        <span className="absolute top-0 bottom-0 right-0 w-0.5 bg-nl-ink" />
        <span className="absolute top-1/2 right-0 left-0 h-0.5 -translate-y-1/2 bg-nl-terr" />
      </span>
      <span className={cn("font-medium tracking-[0.16em]", type)}>NORTHLINE</span>
    </Link>
  );
}
