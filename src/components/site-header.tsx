"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrutalButton } from "@/components/brutal-button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  active?: "lineup" | "path" | "request";
};

export function SiteHeader({ active }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const requestHref = `${pathname === "/" ? "" : pathname}#request`;
  const lineupActive = active === "lineup" || pathname !== "/";

  return (
    <header className="sticky top-0 z-50 border-b border-rule-dark bg-charcoal">
      <div className="page-shell flex h-[72px] items-center justify-between page-gutter">
        <Link
          href="/"
          className="text-[13px] font-extrabold tracking-[-0.04em] text-bone"
        >
          {site.name}
        </Link>
        <nav className="hidden items-center gap-9 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "relative font-mono text-[11px] font-medium tracking-[0.24em] text-bone",
                (item.id === "lineup" ? lineupActive && active !== "request" : active === item.id) &&
                  "after:absolute after:top-[22px] after:right-0 after:left-0 after:h-0.5 after:bg-iron",
              )}
            >
              {item.label}
            </Link>
          ))}
          <BrutalButton href={requestHref} compact>
            {site.requestLabel}
          </BrutalButton>
        </nav>
        <button
          type="button"
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-px w-5 bg-bone" />
          <span className="block h-px w-5 bg-bone" />
        </button>
      </div>
      {open ? (
        <div className="border-b border-rule-dark bg-charcoal page-gutter py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {site.nav.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="font-mono text-[12px] tracking-[0.24em] text-bone"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <BrutalButton href={requestHref} compact onClick={() => setOpen(false)}>
              {site.requestLabel}
            </BrutalButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
