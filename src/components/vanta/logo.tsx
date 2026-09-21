import Link from "next/link";

import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("vanta-logo flex items-center gap-3", className)}>
      <span className="relative block h-5 w-2.5 shrink-0 bg-graph" aria-hidden>
        <span className="vanta-logo-slit absolute inset-x-[3px] inset-y-[3px] bg-amber" />
      </span>
      <span className="font-bodoni text-[20px] tracking-[0.22em] text-milk">
        {site.name}
      </span>
    </Link>
  );
}
