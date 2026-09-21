import type { Metadata } from "next";

import { MissionsView } from "@/components/missions/MissionsView";

export const metadata: Metadata = {
  title: "Миссии",
};

export default function MissionsPage() {
  return <MissionsView />;
}
