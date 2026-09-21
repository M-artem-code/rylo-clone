"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SiteButton } from "@/components/site/site-button";
import { cn } from "@/lib/utils";

type NavLink = { href: string; label: string };

export function Header({
  brand,
  eyebrow,
  links,
  bookHref,
  bookLabel,
}: {
  brand: string;
  eyebrow: string;
  links: readonly NavLink[];
  bookHref: string;
  bookLabel: string;
}) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/95 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-6 px-5 py-3 md:px-10">
        <Link href="/" className="leading-none">
          <span className="block font-display text-[2rem] uppercase leading-none tracking-tight">
            {brand}
          </span>
          <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            {eyebrow}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label={brand}>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.22em]",
                  active
                    ? "text-paper underline decoration-1 underline-offset-[10px]"
                    : "text-body hover:text-paper",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <SiteButton href={bookHref} className="px-3 py-2 text-base md:hidden">
          {bookLabel}
        </SiteButton>
      </div>
    </header>
  );
}
