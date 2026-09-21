"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/orbital";
import { Logo, OrbButton } from "@/components/orbital/ui";

const menuCopy = [
  { label: "Missions", href: "/missions", sub: "сравнить траектории" },
  { label: "Capsules", href: "/capsules", sub: "LUMEN · VEIL · MONAD" },
  { label: "Preflight", href: "/preflight", sub: "21 день допуска" },
  { label: "Manifest", href: "/manifest", sub: "живой журнал окон" },
  { label: "Request", href: "/request", sub: "открыть dossier" },
];

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const request = pathname.startsWith("/request");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-20 bg-white/95">
      <div className="flex h-[72px] items-center px-5 min-[1100px]:h-[84px] min-[1100px]:px-16">
        <Link href="/" className="flex items-center gap-2.5" aria-label="ORBITAL, на главную">
          <Logo className="h-7 w-7 min-[1100px]:h-8 min-[1100px]:w-8" />
          <span className="font-display text-sm font-bold tracking-[0.14em] text-ink min-[1100px]:text-lg">
            ORBITAL
          </span>
        </Link>
        <nav className="ml-auto hidden items-center gap-8 min-[1100px]:flex" aria-label="Основная">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-display text-sm font-medium tracking-wide ${active ? "text-cobalt" : "text-ink"}`}
              >
                {item.label}
                {active ? <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-cobalt" /> : null}
              </Link>
            );
          })}
          <OrbButton href="/request" kind={request ? "violet" : "nav"} className="h-10 px-[18px] text-sm">
            Request
          </OrbButton>
        </nav>
        <button
          type="button"
          className="ml-auto flex h-10 w-10 flex-col items-end justify-center gap-1.5 min-[1100px]:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpenPath(pathname)}
        >
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
        </button>
      </div>
      <div className="luminous-rule mx-5 min-[1100px]:mx-16" />
      {open ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white px-7 pb-16 pt-7">
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-cobalt/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 left-0 h-40 w-40 rounded-full bg-violet/20 blur-3xl" />
          <div className="relative flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpenPath(null)}>
              <Logo className="h-7 w-7" />
              <span className="font-display text-base font-bold tracking-[0.12em]">ORBITAL</span>
            </Link>
            <button type="button" aria-label="Закрыть меню" className="relative h-8 w-8" onClick={() => setOpenPath(null)}>
              <span className="absolute left-1 top-3.5 h-0.5 w-6 rotate-45 bg-ink" />
              <span className="absolute left-1 top-3.5 h-0.5 w-6 -rotate-45 bg-ink" />
            </button>
          </div>
          <nav className="relative mt-14 flex flex-col gap-8" aria-label="Мобильная">
            {menuCopy.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpenPath(null)}>
                <span className={`block font-display text-4xl font-bold tracking-tight ${item.label === "Request" ? "text-cobalt" : "text-ink"}`}>
                  {item.label}
                </span>
                <span className={`mt-1 block font-telemetry text-xs tracking-[0.08em] ${item.label === "Request" ? "text-violet" : "text-mute"}`}>
                  {item.sub}
                </span>
              </Link>
            ))}
          </nav>
          <div className="relative mt-10">
            <OrbButton href="/request">Запросить окно запуска</OrbButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
