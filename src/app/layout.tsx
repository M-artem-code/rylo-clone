import type { Metadata } from "next";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/site";

import "./globals.css";

const onest = localFont({
  src: "../fonts/Onest-variable.ttf",
  variable: "--font-onest",
  weight: "100 900",
  display: "swap",
});

const plexMono = localFont({
  src: [
    {
      path: "../fonts/IBMPlexMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/IBMPlexMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/IBMPlexMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BRUTAL — концептуальные модульные дома",
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
      className={`${onest.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-charcoal font-sans text-bone">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
