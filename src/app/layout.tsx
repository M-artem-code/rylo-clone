import type { Metadata } from "next";
import { IBM_Plex_Mono, Sofia_Sans, Sofia_Sans_Extra_Condensed } from "next/font/google";

import { Header } from "@/components/site/header";
import { MobileNav } from "@/components/site/mobile-nav";
import { actions, brand, nav } from "@/data/tuka";

import "./globals.css";

const sofia = Sofia_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-sofia",
});

const display = Sofia_Sans_Extra_Condensed({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-sofia-display",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: {
    default: "Tuka — дом какао",
    template: "%s — Tuka",
  },
  description:
    "Закрытый стол на компанию. Ход от мягкого какао к горькому. Плитки уезжают с гостями.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${sofia.variable} ${display.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-paper">
        <Header
          brand={brand.name}
          eyebrow={brand.eyebrow}
          links={nav}
          bookHref="/zapis"
          bookLabel={actions.bookShort}
        />
        <div className="pb-20 md:pb-0">{children}</div>
        <MobileNav links={nav} />
      </body>
    </html>
  );
}
