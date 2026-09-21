import type { Metadata } from "next";
import localFont from "next/font/local";

import { MotionRoot } from "@/components/vanta/motion-root";

import "./globals.css";

const gloock = localFont({
  src: "../fonts/Gloock-Regular.ttf",
  variable: "--font-gloock",
  display: "swap",
});

const bodoni = localFont({
  src: "../fonts/BodoniModa.ttf",
  variable: "--font-bodoni",
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    { path: "../fonts/InstrumentSerif-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/InstrumentSerif-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const instrumentSans = localFont({
  src: "../fonts/InstrumentSans.ttf",
  variable: "--font-instrument-sans",
  display: "swap",
  weight: "400 700",
});

const italiana = localFont({
  src: "../fonts/Italiana-Regular.ttf",
  variable: "--font-italiana",
  display: "swap",
});

const newsreader = localFont({
  src: "../fonts/Newsreader.ttf",
  variable: "--font-newsreader",
  display: "swap",
  weight: "200 800",
});

const fraunces = localFont({
  src: "../fonts/Fraunces.ttf",
  variable: "--font-fraunces",
  display: "swap",
  weight: "100 900",
});

const plex = localFont({
  src: [
    { path: "../fonts/IBMPlexMono-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VANTA — Architectural lighting",
    template: "%s — VANTA",
  },
  description:
    "VANTA designs complete lighting atmospheres for architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[
        gloock.variable,
        bodoni.variable,
        instrumentSerif.variable,
        instrumentSans.variable,
        italiana.variable,
        newsreader.variable,
        fraunces.variable,
        plex.variable,
        "h-full",
      ].join(" ")}
    >
      <body className="min-h-full bg-void text-milk">
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
