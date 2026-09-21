"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/site/Logo";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { nav } from "@/data/site";
import { cn } from "@/lib/utils";

function chromeFor(path: string) {
  let active: string | undefined;
  if (path.startsWith("/missions")) active = "Миссии";
  else if (path.startsWith("/capsule")) active = "Капсула";
  else if (path.startsWith("/experience")) active = "Опыт";
  else if (path.startsWith("/preparation")) active = "Подготовка";
  else if (path.startsWith("/about")) active = "О компании";
  else if (path.startsWith("/contacts")) active = "Контакты";

  let cta = { label: "Выбрать миссию", href: "/missions" };
  if (path.startsWith("/missions/") && path !== "/missions") {
    cta = { label: "Забронировать", href: `/configure?mission=${path.split("/")[2] ?? "aurora"}` };
  } else if (path.startsWith("/configure")) {
    cta = { label: "Создать миссию", href: "/contacts" };
  } else if (path.startsWith("/capsule")) {
    cta = { label: "Смотреть миссии", href: "/missions" };
  } else if (path.startsWith("/experience")) {
    cta = { label: "Представить полёт", href: "/configure" };
  } else if (path.startsWith("/preparation")) {
    cta = { label: "Программа", href: "/contacts" };
  } else if (path.startsWith("/about")) {
    cta = { label: "Узнать больше", href: "/about#operations" };
  } else if (path.startsWith("/contacts")) {
    cta = { label: "Обсудить полёт", href: "/contacts#request" };
  }

  return { active, cta };
}

export function SiteHeader() {
  const path = usePathname();
  const { active, cta } = chromeFor(path);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="px-page flex h-[72px] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => {
            const isActive = item.label === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative font-ui text-[14px] transition-colors",
                  isActive ? "font-semibold text-cobalt" : "font-normal text-mute hover:text-navy",
                )}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-violet" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <OrbitalButton href={cta.href} className="hidden sm:inline-flex">
            {cta.label}
          </OrbitalButton>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
            aria-label="Меню"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="block h-0.5 w-6 bg-navy" />
            <span className="block h-0.5 w-6 bg-navy" />
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-line bg-white px-page py-4 xl:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-ui text-[16px]",
                  item.label === active ? "font-semibold text-cobalt" : "text-navy",
                )}
              >
                {item.label}
              </Link>
            ))}
            <OrbitalButton href={cta.href}>{cta.label}</OrbitalButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
