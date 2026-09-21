import type { Metadata } from "next";

import { ContactView } from "@/components/vanta/contact-view";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <ContactView />;
}
