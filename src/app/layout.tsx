import type { Metadata } from "next";
import { Footer } from "@/components/orbital/footer";
import { Header } from "@/components/orbital/header";
import { geologica, martian, tektur, unbounded } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ORBITAL — выход за линию Кармана",
    template: "%s · ORBITAL",
  },
  description:
    "Частный сервис суборбитальных полётов: окно запуска, допуск, капсула и архив миссии.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${geologica.variable} ${martian.variable} ${tektur.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-body text-ink">
        <div className="mx-auto min-h-full w-full max-w-[1600px]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
