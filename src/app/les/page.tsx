import type { Metadata } from "next";

import { HousePageView } from "@/components/house-page";
import { houses } from "@/data/houses";

export const metadata: Metadata = {
  title: "HOUSE 01 / ЛЕС — BRUTAL",
  description: houses.les.oneLiner,
};

export default function LesPage() {
  return <HousePageView house={houses.les} />;
}
