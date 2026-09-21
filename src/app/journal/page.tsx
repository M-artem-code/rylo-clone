import type { Metadata } from "next";

import { JournalView } from "@/components/vanta/journal-view";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return <JournalView />;
}
