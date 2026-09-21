import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { SiteHeader } from "@/components/site/Header";
import { site } from "@/data/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const unbounded = localFont({
  src: [
    { path: "../fonts/Unbounded-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Unbounded-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Unbounded-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Unbounded-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Unbounded-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.metadata.title,
  description: site.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-tv-bg font-sans text-tv-text">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
