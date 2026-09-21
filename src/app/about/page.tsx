import type { Metadata } from "next";

import { AboutView } from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "О компании",
};

export default function AboutPage() {
  return <AboutView />;
}
