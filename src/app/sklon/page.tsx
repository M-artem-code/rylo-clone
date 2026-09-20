import type { Metadata } from "next";

import { HousePageView } from "@/components/house-page";
import { houses } from "@/data/houses";

export const metadata: Metadata = {
  title: "HOUSE 03 / СКЛОН — BRUTAL",
  description: houses.sklon.oneLiner,
};

export default function SklonPage() {
  return <HousePageView house={houses.sklon} />;
}
