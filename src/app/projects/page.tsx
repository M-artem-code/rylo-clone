import type { Metadata } from "next";

import { ProjectsView } from "@/components/vanta/projects-view";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return <ProjectsView />;
}
