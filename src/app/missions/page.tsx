import type { Metadata } from "next";
import { MissionsView } from "@/components/orbital/missions-view";

export const metadata: Metadata = {
  title: "Missions",
  description: "Shared Ascent, Private Arc, Solo Apex и Horizon Ceremony.",
};

export default function MissionsPage() {
  return <MissionsView />;
}
