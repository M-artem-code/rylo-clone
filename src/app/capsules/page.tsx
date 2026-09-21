import type { Metadata } from "next";
import { CapsulesView } from "@/components/orbital/capsules-view";

export const metadata: Metadata = {
  title: "Capsules",
  description: "Шоурум капсул LUMEN, VEIL и MONAD.",
};

export default function CapsulesPage() {
  return <CapsulesView />;
}
