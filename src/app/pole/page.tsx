import type { Metadata } from "next";

import { HousePageView } from "@/components/house-page";
import { houses } from "@/data/houses";

export const metadata: Metadata = {
  title: "HOUSE 02 / ПОЛЕ — BRUTAL",
  description: houses.pole.oneLiner,
};

export default function PolePage() {
  return <HousePageView house={houses.pole} />;
}
