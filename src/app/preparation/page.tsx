import type { Metadata } from "next";

import { PreparationView } from "@/components/preparation/PreparationView";

export const metadata: Metadata = {
  title: "Подготовка",
};

export default function PreparationPage() {
  return <PreparationView />;
}
