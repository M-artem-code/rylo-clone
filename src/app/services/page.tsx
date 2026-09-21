import type { Metadata } from "next";

import { ServicesView } from "@/components/vanta/services-view";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return <ServicesView />;
}
