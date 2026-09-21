import type { Metadata } from "next";
import { Suspense } from "react";

import { ContactsView } from "@/components/contacts/ContactsView";

export const metadata: Metadata = {
  title: "Контакты",
};

export default function ContactsPage() {
  return (
    <Suspense>
      <ContactsView />
    </Suspense>
  );
}
