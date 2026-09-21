import type { Metadata } from "next";

import { TechnologyView } from "@/components/vanta/technology-view";

export const metadata: Metadata = { title: "Technology" };

export default function TechnologyPage() {
  return <TechnologyView />;
}
