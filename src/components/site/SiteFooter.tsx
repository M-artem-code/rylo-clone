import Link from "next/link";

import { Logo } from "@/components/site/Logo";
import { nav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="px-page flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <Logo />
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="orbital-link font-ui text-[13px] text-mute hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="font-ui text-[12px] text-mute">{site.copyright}</p>
      </div>
    </footer>
  );
}
