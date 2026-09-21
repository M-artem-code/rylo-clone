import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/northline/ContactForm";
import { Logo } from "@/components/northline/Logo";
import { contactPage } from "@/data/pages";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Контакты",
};

export default function ContactPage() {
  const { contact } = site;

  return (
    <main className="grid gap-16 px-5 pt-16 pb-8 md:grid-cols-2 md:px-[72px] md:pt-[72px]">
      <section>
        <Logo size="md" />
        <p className="mt-10 text-[12px] font-medium tracking-[0.14em] text-nl-muted">
          {contactPage.studioLabel}
        </p>
        <ul className="mt-6 space-y-3 text-[20px]">
          <li>
            <a href={contact.phoneHref} className="hover:text-nl-terr">
              {contact.phone}
            </a>
          </li>
          <li>
            <a href={contact.emailHref} className="hover:text-nl-terr">
              {contact.email}
            </a>
          </li>
          <li>
            <a href={contact.telegramHref} className="hover:text-nl-terr">
              Telegram  {contact.telegram}
            </a>
          </li>
        </ul>
        <div className="mt-10 max-w-[480px] border-t border-nl-line pt-6">
          <p className="text-[15px]">{contact.address}</p>
          <p className="mt-2 text-[14px] text-nl-muted">{contact.studioNote}</p>
          <p className="mt-6 text-[15px]">{contact.area}</p>
          <p className="mt-2 text-[15px] text-nl-muted">{contact.areaNote}</p>
        </div>
        <div className="relative mt-10 h-[240px] max-w-[420px] md:h-[280px]">
          <Image
            src={contactPage.image}
            alt="Образец камня на дереве"
            fill
            className="object-cover"
            sizes="420px"
          />
        </div>
      </section>
      <section>
        <h1 className="font-display text-[32px] font-medium">{contactPage.formTitle}</h1>
        <p className="mt-5 max-w-[560px] text-[15px] leading-[1.45] text-nl-muted">
          {contactPage.formText}
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
