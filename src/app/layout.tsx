import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/kolasik/site-footer";
import { SiteHeader } from "@/components/kolasik/site-header";
import "./globals.css";
import "./kolasik.css";

const newsreader = localFont({
  src: "../fonts/Newsreader.woff2",
  variable: "--font-newsreader",
  weight: "400 700",
  display: "swap",
});

const plex = localFont({
  src: [
    { path: "../fonts/IBMPlexSansCondensed-400.woff2", weight: "400" },
    { path: "../fonts/IBMPlexSansCondensed-500.woff2", weight: "500" },
    { path: "../fonts/IBMPlexSansCondensed-600.woff2", weight: "600" },
    { path: "../fonts/IBMPlexSansCondensed-700.woff2", weight: "700" },
  ],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kolasik — squirrel running wheels",
  description:
    "English-language shop for squirrel exercise wheels in multiple diameters and materials. Request a wheel — we write back.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="kolasik min-h-full flex flex-col">
        <div className="grain" />
        <div className="site-shell flex min-h-full flex-1 flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
