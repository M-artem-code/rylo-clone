import { Contacts } from "@/components/sections/Contacts";
import { site } from "@/data/site";

export default function ContactsPage() {
  return (
    <main>
      <Contacts
        content={site.contacts}
        wordmark={site.wordmark}
        footer={site.footer}
      />
    </main>
  );
}
