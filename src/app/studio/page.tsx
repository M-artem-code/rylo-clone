import type { Metadata } from "next";

import { StudioView } from "@/components/vanta/studio-view";

export const metadata: Metadata = { title: "Light Studio" };

export default function StudioPage() {
  return <StudioView />;
}
