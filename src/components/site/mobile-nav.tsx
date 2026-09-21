"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MobileNav({
  links,
}: {
  links: readonly { href: string; label: string }[];
}) {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ink/95 backdrop-blur-sm md:hidden"
      aria-label="Разделы"
    >
      <ul className="grid grid-cols-3">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em]",
                  active ? "text-paper" : "text-muted",
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
