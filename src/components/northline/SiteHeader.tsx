"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/northline/Logo";
import { NlButton } from "@/components/northline/NlButton";
import { site, type NavKey } from "@/data/site";
import { cn } from "@/lib/utils";

function activeKey(pathname: string): NavKey | null {
  if (pathname.startsWith("/directions")) return "directions";
  if (pathname.startsWith("/projects")) return "projects";
  if (pathname.startsWith("/process")) return "process";
  if (pathname.startsWith("/materials")) return "materials";
  if (pathname.startsWith("/contact")) return "contact";
  return null;
}

export function SiteHeader() {
  const pathname = usePathname();
  const current = activeKey(pathname);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-nl-bg">
      <div className="flex h-20 items-center justify-between px-5 md:px-[72px]">
        <Logo />
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Основное меню">
          {site.nav.map((item) => {
            const active = current === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "relative pb-1 text-[14px] tracking-[0.02em]",
                  active ? "text-nl-ink" : "text-nl-muted hover:text-nl-ink",
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute right-0 bottom-0 left-0 h-px bg-nl-terr" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <NlButton href={site.discussHref} variant="ghost">
            {site.discussLabel}
          </NlButton>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-end justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-5 bg-nl-ink" />
          <span className="block h-px w-5 bg-nl-ink" />
          <span className="block h-px w-5 bg-nl-ink" />
        </button>
      </div>
      <div className="mx-5 border-t border-nl-line md:mx-[72px]" />

      {open ? (
        <div className="fixed inset-0 z-50 bg-nl-bg px-6 pt-6 lg:hidden">
          <div className="mb-10 flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="text-[12px] text-nl-muted"
              onClick={() => setOpen(false)}
            >
              Закрыть
            </button>
          </div>
          <nav className="flex flex-col" aria-label="Мобильное меню">
            {site.nav.map((item, index) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-nl-line py-6"
              >
                <span className="block text-[13px] text-nl-terr">0{index + 1}</span>
                <span className="mt-1 block font-display text-[28px] font-medium">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <NlButton href={site.discussHref} variant="primary">
              {site.discussLabel}
            </NlButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
