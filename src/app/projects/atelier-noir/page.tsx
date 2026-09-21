import type { Metadata } from "next";

import { AtelierView } from "@/components/vanta/atelier-view";

export const metadata: Metadata = { title: "Atelier Noir" };

export default function AtelierNoirPage() {
  return <AtelierView />;
}
