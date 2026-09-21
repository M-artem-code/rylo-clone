import type { Metadata } from "next";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/northline/SiteFooter";
import { SiteHeader } from "@/components/northline/SiteHeader";
import { site } from "@/data/site";

import "./globals.css";

const onest = localFont({
  src: "../fonts/Onest.ttf",
  variable: "--font-onest",
  display: "swap",
  weight: "100 900",
});

const unbounded = localFont({
  src: "../fonts/Unbounded.ttf",
  variable: "--font-unbounded",
  display: "swap",
  weight: "200 900",
});

export const metadata: Metadata = {
  title: {
    default: "NORTHLINE — мебель как часть архитектуры",
    template: "%s · NORTHLINE",
  },
  description:
    "Студия индивидуальной мебели: кухни, хранение, гардеробные и предметы интерьера для жилых и коммерческих пространств.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={site.locale}
      className={`${onest.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-nl-bg font-sans text-nl-ink">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
