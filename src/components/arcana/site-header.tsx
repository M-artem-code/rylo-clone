"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { site } from "@/data/site";
import { cn } from "@/lib/utils";

function activeId(pathname: string): string | null {
  if (pathname === "/series") return "series";
  if (pathname === "/portrait") return "portrait";
  if (pathname === "/brands") return "brands";
  if (pathname === "/studio") return "studio";
  if (pathname === "/apply") return "apply";
  return null;
}

export function SiteHeader() {
  const pathname = usePathname();
  const current = activeId(pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-[60] border-b border-rule bg-tar">
      <div className="mx-auto flex h-[76px] max-w-[1920px] items-center justify-between px-6 md:h-[88px] md:px-14">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-[24px] font-semibold tracking-[0.14em] text-bone md:text-[28px]"
        >
          {site.name}
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {site.nav.map((item) => {
            const on = current === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "relative text-[15px] text-bone/70 transition-colors hover:text-bone",
                  on && "text-bone",
                )}
              >
                {item.label}
                {on ? (
                  <span className="absolute inset-x-0 -bottom-2 h-px bg-bone" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <button
            type="button"
            className="folio-track-mark min-h-11 px-1 text-[11px] text-mercury lg:hidden"
            aria-expanded={open}
            aria-controls="folio-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "CLOSE" : "FOLIO"}
          </button>
          <span className="folio-track-mark hidden text-[11px] text-mercury lg:inline">
            {site.folio}
          </span>
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="text-[15px] text-bone lg:hidden"
          >
            Заявка
          </Link>
        </div>
      </div>

      {open ? (
        <div
          id="folio-menu"
          className="fixed inset-x-0 top-[76px] bottom-0 z-50 flex flex-col bg-tar px-6 pt-16 lg:hidden"
        >
          <p className="folio-track-mark text-[11px] text-mercury">{site.folio}</p>
          <nav className="mt-10 flex flex-col gap-6">
            {site.nav.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-[40px] leading-none text-bone"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
