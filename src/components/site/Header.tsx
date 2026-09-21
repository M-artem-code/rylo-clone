"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { GoldButton } from "@/components/site/GoldButton";
import { Logo } from "@/components/site/Logo";
import { site, type NavItem } from "@/data/site";
import { cn } from "@/lib/utils";

type HeaderProps = {
  wordmark: string;
  nav: readonly NavItem[];
  cta: { label: string; href: string };
  activeHref?: string;
};

export function Header({ wordmark, nav, cta, activeHref }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const current = activeHref ?? pathname;
  const overlay = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-20 transition-colors",
        overlay
          ? "bg-gradient-to-b from-[#0b0d10]/70 to-transparent"
          : "border-b border-white/[0.07] bg-[#0b0d10]/95 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between px-6 xl:px-24">
        <Logo wordmark={wordmark} />
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Основное меню">
          {nav.map((item) => {
            const active = current === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[14px] font-medium transition-colors",
                  active ? "text-tv-text" : "text-tv-muted hover:text-tv-text",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <GoldButton href={cta.href}>{cta.label}</GoldButton>
        </div>
        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-[10px] border border-white/20 bg-white/5 lg:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-4 flex-col gap-1">
            <span className="h-px w-full bg-tv-text" />
            <span className="h-px w-full bg-tv-text" />
            <span className="h-px w-full bg-tv-text" />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-b border-white/10 bg-[#0b0d10]/98 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Мобильное меню">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[16px] text-tv-text"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <GoldButton href={cta.href} className="mt-6 w-full">
            {cta.label}
          </GoldButton>
        </div>
      ) : null}
    </header>
  );
}

export function SiteHeader({ activeHref }: { activeHref?: string }) {
  return (
    <Header
      wordmark={site.wordmark}
      nav={site.nav}
      cta={site.headerCta}
      activeHref={activeHref}
    />
  );
}
