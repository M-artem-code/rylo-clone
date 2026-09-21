"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { OpenRingMark } from "@/components/icons";
import { navItems, requestCta, wordmark } from "@/data/site";

function navId(pathname: string) {
  if (pathname.startsWith("/wheels")) return "wheels";
  if (pathname.startsWith("/size-guide")) return "size";
  if (pathname.startsWith("/shipping")) return "shipping";
  if (pathname.startsWith("/request")) return "request";
  return "";
}

export function SiteHeader() {
  const pathname = usePathname();
  const active = navId(pathname);
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" data-open={open ? "true" : "false"}>
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <OpenRingMark />
        <span className="wordmark">{wordmark}</span>
      </Link>
      <nav className="nav">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={item.id === active ? "active" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-cta">
        <Link href="/request" className="header-slip">
          <i className="dot" />
          {requestCta}
        </Link>
      </div>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-label="Open menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
      </button>
      <nav className="nav-panel">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={item.id === active ? "active" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/request" className="header-slip" onClick={() => setOpen(false)}>
          <i className="dot" />
          {requestCta}
        </Link>
      </nav>
    </header>
  );
}
