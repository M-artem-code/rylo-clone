import type { Metadata } from "next";

import { CapsuleView } from "@/components/capsule/CapsuleView";

export const metadata: Metadata = {
  title: "Капсула",
};

export default function CapsulePage() {
  return <CapsuleView />;
}
