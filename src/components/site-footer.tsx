import Link from "next/link";

import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule-dark bg-charcoal">
      <div className="page-shell page-gutter grid gap-10 py-12 md:grid-cols-3 md:items-start">
        <div>
          <p className="text-[13px] font-extrabold tracking-[-0.04em] text-bone">
            {site.name}
          </p>
          <p className="mt-3 max-w-[280px] text-[15px] leading-6 text-muted-ink">
            {site.description}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-10 gap-y-3 md:justify-center md:pt-5">
          {site.houses.map((house) => (
            <Link
              key={house.href}
              href={house.href}
              className="font-mono text-[12px] font-medium tracking-[0.12em] text-bone"
            >
              {house.index}  {house.name}
            </Link>
          ))}
        </nav>
        <div className="space-y-[10px] font-mono text-[12px] tracking-[0.02em] text-muted-ink md:justify-self-end">
          {site.contacts.map((item) => (
            <p key={item.key}>
              <span className="inline-block w-8">{item.key}</span>
              {item.value}
            </p>
          ))}
        </div>
      </div>
      <div className="page-shell page-gutter border-t border-rule-dark py-5">
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted-ink">
          {site.footerLine}
        </p>
      </div>
    </footer>
  );
}
