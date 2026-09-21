import type { Metadata } from "next";
import { ManifestView } from "@/components/orbital/manifest-view";

export const metadata: Metadata = {
  title: "Manifest",
  description: "Журнал окон запуска, площадки и архив миссий.",
};

export default function ManifestPage() {
  return <ManifestView />;
}
