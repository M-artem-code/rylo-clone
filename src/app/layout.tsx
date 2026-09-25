import type { Metadata } from "next";
import localFont from "next/font/local";

import { SiteHeader } from "@/components/arcana/site-header";
import { site } from "@/data/site";

import "./globals.css";

const barlow = localFont({
  src: [
    { path: "../fonts/BarlowCondensed-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/BarlowCondensed-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-barlow",
  display: "swap",
});

const cormorant = localFont({
  src: [
    { path: "../fonts/Cormorant-500.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Cormorant-600.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Cormorant-Italic-500.ttf", weight: "500", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const onest = localFont({
  src: [
    { path: "../fonts/Onest-400.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Onest-500.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${barlow.variable} ${cormorant.variable} ${onest.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-tar font-sans text-bone">
        <div className="folio-grain" aria-hidden />
        <SiteHeader />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
