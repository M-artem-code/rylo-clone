import localFont from "next/font/local";

export const unbounded = localFont({
  src: "../fonts/unbounded.ttf",
  variable: "--font-unbounded",
  display: "swap",
  weight: "200 900",
  adjustFontFallback: false,
});

export const geologica = localFont({
  src: "../fonts/geologica.ttf",
  variable: "--font-geologica",
  display: "swap",
  weight: "100 900",
  adjustFontFallback: false,
});

export const martian = localFont({
  src: "../fonts/martian.ttf",
  variable: "--font-martian",
  display: "swap",
  weight: "100 800",
  adjustFontFallback: false,
});

export const tektur = localFont({
  src: "../fonts/tektur.ttf",
  variable: "--font-tektur",
  display: "swap",
  weight: "400 900",
  adjustFontFallback: false,
});
