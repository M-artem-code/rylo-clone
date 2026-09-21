import Link from "next/link";

import { Logo } from "@/components/northline/Logo";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="px-5 pt-9 pb-10 md:px-[72px]">
      <div className="border-t border-nl-line pt-9">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="mt-4 text-[13px] text-nl-muted">{site.contact.footerLine}</p>
            <p className="mt-2 text-[13px] text-nl-muted">{site.contact.footerMeta}</p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Подвал">
            {site.nav.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-[13px] text-nl-muted hover:text-nl-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-[12px] text-nl-muted">© {site.name}</p>
      </div>
    </footer>
  );
}
