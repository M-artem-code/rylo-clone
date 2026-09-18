"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RyloLogo, ChevronDownIcon } from "@/components/icons";
import { AccentCta } from "@/components/ui/CtaButton";
import { headerNavItems } from "@/data/navigation";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      data-theme-nav="dark"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 ease-cubic-default transition-[transform,translate,visibility] duration-1000 motion-reduce:transition-none"
    >
      <div className="px-margin pt-md relative">
        <div className="max-w-site rounded-regular p-xs pl-md border-hairline ease-cubic-default pointer-events-auto relative mx-auto flex w-full items-center border transition-[color,border-color] duration-400 motion-reduce:transition-none">
          <span
            aria-hidden="true"
            className="bg-ink/5 rounded-regular ease-cubic-default pointer-events-none absolute inset-0 z-10 backdrop-blur-lg transition-[background-color] duration-400 motion-reduce:transition-none"
          />

          <div className="relative z-30 hidden w-full items-center justify-between gap-4 lg:flex">
            <Link
              href="/"
              aria-label="Home Page"
              className="text-ink focus-visible:ring-ink/40 w-nav-logo flex shrink-0 items-center focus-visible:ring-2 focus-visible:outline-none"
            >
              <span aria-hidden="true" className="block [&>svg]:h-auto [&>svg]:w-full w-full">
                <RyloLogo className="w-full" />
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <nav aria-label="Main" className="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center">
                <ul className="group flex flex-1 list-none items-center justify-center gap-0">
                  {headerNavItems.map((item) => (
                    <li key={item.label} className="relative">
                      {item.hasDropdown ? (
                        <button
                          type="button"
                          className="group/navigation-menu-trigger inline-flex h-button-main w-max items-center justify-center gap-1 rounded-regular px-md text-nav text-ink transition-all outline-none hover:bg-ink/10 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none group"
                        >
                          {item.label}
                          <span aria-hidden="true" className="block [&>svg]:size-full size-3">
                            <ChevronDownIcon className="size-full" />
                          </span>
                        </button>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          className="group/navigation-menu-trigger inline-flex h-button-main w-max items-center justify-center gap-1 rounded-regular px-md text-nav text-ink transition-all outline-none hover:bg-ink/10 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <span data-modal-target="app-download" data-app-download-cta="true" className="contents">
                <AccentCta href="/download" label="Download" />
              </span>
            </div>
          </div>

          <div className="relative z-30 flex w-full items-center justify-between lg:hidden">
            <Link
              href="/"
              aria-label="Home Page"
              className="text-ink focus-visible:ring-ink/40 w-nav-logo flex shrink-0 items-center focus-visible:ring-2 focus-visible:outline-none"
            >
              <span aria-hidden="true" className="block [&>svg]:h-auto [&>svg]:w-full w-full">
                <RyloLogo className="w-full" />
              </span>
            </Link>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="text-ink focus-visible:ring-ink/40 mr-sm flex h-10 w-10 flex-col items-center justify-center gap-[6.5px] rounded-xl focus-visible:ring-2 focus-visible:outline-none"
            >
              <span
                className={`bg-ink h-[1.5px] w-6 origin-center rounded transition-[transform,opacity] duration-400 ease-cubic-default motion-reduce:transition-none ${mobileMenuOpen ? "translate-y-[8px] rotate-45" : ""}`}
              />
              <span
                className={`bg-ink h-[1.5px] w-6 origin-center rounded transition-[transform,opacity] duration-400 ease-cubic-default motion-reduce:transition-none ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`bg-ink h-[1.5px] w-6 origin-center rounded transition-[transform,opacity] duration-400 ease-cubic-default motion-reduce:transition-none ${mobileMenuOpen ? "-translate-y-[8px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
