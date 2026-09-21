import type { Metadata } from "next";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { alumni, golos, martian, onest, unbounded } from "@/fonts";
import { site } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ORBITAL — Премиальные суборбитальные путешествия",
    template: "%s · ORBITAL",
  },
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${onest.variable} ${golos.variable} ${alumni.variable} ${martian.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
