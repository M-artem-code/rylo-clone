import type { Metadata } from "next";

import { ExperienceView } from "@/components/experience/ExperienceView";

export const metadata: Metadata = {
  title: "Опыт",
};

export default function ExperiencePage() {
  return <ExperienceView />;
}
