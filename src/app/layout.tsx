import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const unbounded = localFont({
  src: "../fonts/Unbounded-Variable.ttf",
  variable: "--font-unbounded",
  weight: "200 900",
  display: "block",
});

const syne = localFont({
  src: "../fonts/Syne-Variable.ttf",
  variable: "--font-syne",
  weight: "400 800",
  display: "block",
});

const manrope = localFont({
  src: "../fonts/Manrope-Variable.ttf",
  variable: "--font-manrope",
  weight: "200 800",
  display: "block",
});

const plex = localFont({
  src: [
    { path: "../fonts/IBMPlexMono-Regular.ttf", weight: "400" },
    { path: "../fonts/IBMPlexMono-Medium.ttf", weight: "500" },
    { path: "../fonts/IBMPlexMono-SemiBold.ttf", weight: "600" },
    { path: "../fonts/IBMPlexMono-Bold.ttf", weight: "700" },
  ],
  variable: "--font-plex",
  display: "block",
});

export const metadata: Metadata = {
  title: "Nigma — ночная портретная студия, Москва",
  description: "Индивидуальный портрет в ночной студии Nigma. Москва.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${syne.variable} ${manrope.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="nigma min-h-full">{children}</body>
    </html>
  );
}
