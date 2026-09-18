import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";

const ppMori = localFont({
  src: [
    {
      path: "../../public/fonts/PPMori-Regular.BYupG7R3.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPMori-Semibold.BFB1vWtZ.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mori",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rylo.com"),
  title: "Rylo | Free Call Captioning and Live Transcribe App",
  description:
    "The completely free call captioning and live transcription app for individuals who are deaf or hard of hearing.",
  icons: {
    icon: [
      { url: "/seo/favicon.png" },
      { url: "/seo/favicon-48.png", sizes: "48x48" },
      { url: "/seo/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/seo/webclip.jpg",
  },
  openGraph: {
    title: "Rylo | Free Call Captioning and Live Transcribe App",
    description:
      "The completely free call captioning and live transcription app for individuals who are deaf or hard of hearing.",
    images: ["/seo/og-home.C_dwQlxP_Z2wCxnF.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ppMori.variable} h-full antialiased`}>
      <body className="font-display text-main text-pretty antialiased min-h-full flex flex-col selection:bg-accent selection:text-white">
        <SiteHeader />
        <main id="main">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
