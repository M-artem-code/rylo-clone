"use client";

import Link from "next/link";
import { useState } from "react";

import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";
import { VantaButton } from "./vanta-button";

type SiteHeaderProps = {
  active?: string;
  cta: { label: string; href: string };
  variant?: "default" | "overlay" | "article";
  articleMeta?: string;
};

export function SiteHeader({
  active,
  cta,
  variant = "default",
  articleMeta,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  if (variant === "article") {
    return (
      <header className="vanta-header flex h-[76px] items-center justify-between border-b border-graph px-6 md:px-12">
        <Logo />
        <p className="font-mono text-[11px] tracking-[0.14em] text-muted-vanta">
          {articleMeta}
        </p>
      </header>
    );
  }

  return (
    <header
      className={cn(
        "vanta-header relative z-20 flex h-[76px] items-center justify-between px-6 md:px-12",
        variant === "default" && "border-b border-graph bg-void",
      )}
    >
      <Logo />
      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "vanta-nav-link font-sans text-[13px] tracking-[0.04em]",
              active === link.label ? "is-active text-milk" : "text-muted-vanta hover:text-milk",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <VantaButton href={cta.href} className="hidden h-[38px] px-[22px] sm:inline-flex">
          {cta.label}
        </VantaButton>
        <button
          type="button"
          className={cn(
            "vanta-burger flex h-8 w-8 flex-col items-end justify-center gap-1.5 lg:hidden",
            open && "is-open",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="vanta-burger-line" />
          <span className="vanta-burger-line" />
        </button>
      </div>
      <div
        className={cn(
          "vanta-menu absolute inset-x-0 top-[76px] z-30 bg-void lg:hidden",
          open && "is-open border-b border-graph",
        )}
      >
        <div className="vanta-menu-inner">
          <nav className="flex flex-col gap-5 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-[16px]",
                  active === link.label ? "text-milk" : "text-muted-vanta",
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <VantaButton href={cta.href} filled>
              {cta.label}
            </VantaButton>
          </nav>
        </div>
      </div>
    </header>
  );
}
