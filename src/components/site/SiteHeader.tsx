"use client";

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/site/Logo";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { nav } from "@/data/site";
import { easeOutLux } from "@/lib/motion";
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
  const [menuFor, setMenuFor] = useState<string | null>(null);
  const [elevated, setElevated] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const open = menuFor === path;

  useMotionValueEvent(scrollY, "change", (value) => {
    setElevated(value > 10);
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md transition-shadow duration-300",
        elevated && "shadow-[0_10px_28px_rgba(8,18,48,0.06)]",
      )}
    >
      <div className="px-page flex h-[72px] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const isActive = item.label === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative font-ui text-[14px] transition-colors",
                  isActive ? "font-semibold text-cobalt" : "orbital-link font-normal text-mute hover:text-navy",
                )}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId={reduce ? undefined : "nav-orbit"}
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-violet"
                    transition={{ duration: 0.35, ease: easeOutLux }}
                  />
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
            className="relative flex h-10 w-10 flex-col items-center justify-center lg:hidden"
            aria-label="Меню"
            aria-expanded={open}
            onClick={() => setMenuFor((current) => (current === path ? null : path))}
          >
            <motion.span
              className="absolute block h-0.5 w-6 bg-navy"
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
              transition={{ duration: 0.28, ease: easeOutLux }}
            />
            <motion.span
              className="absolute block h-0.5 w-6 bg-navy"
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
              transition={{ duration: 0.28, ease: easeOutLux }}
            />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: easeOutLux }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <nav className="px-page flex flex-col gap-3 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuFor(null)}
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
