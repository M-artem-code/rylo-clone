"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CtaButton } from "@/components/cta-button";
import { Wordmark } from "@/components/wordmark";
import { navigation, primaryCta } from "@/data/site";

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
};

export function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onRequest = pathname === "/request";

  return (
    <header className={variant === "overlay" ? "header header--overlay" : "header header--solid"}>
      <div className="wrap header__bar">
      <Wordmark />
      <nav className="nav" aria-label="Основное меню">
        {navigation.map((item) => {
          const current = item.href === "/request" && onRequest;
          return (
            <Link
              key={item.href}
              className={current ? "nav__link is-current" : "nav__link"}
              href={item.href}
              aria-current={current ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
        <CtaButton href={primaryCta.href} idle={onRequest}>
          {primaryCta.label}
        </CtaButton>
      </nav>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
      </button>
      {open ? (
        <nav className="mobile-nav" aria-label="Мобильное меню">
          {navigation.map((item) => (
            <Link
              key={item.href}
              className="nav__link"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
        </nav>
      ) : null}
      </div>
    </header>
  );
}
