"use client";

import { useState, type FormEvent } from "react";

import { NlSubmit } from "@/components/northline/NlButton";
import { contactPage } from "@/data/pages";

const fieldClass =
  "w-full border-0 border-b border-nl-line bg-transparent py-2 text-[16px] text-nl-ink outline-none focus:border-nl-ink";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!name || !phone) {
      setStatus("error");
      return;
    }
    setStatus("success");
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <p className="max-w-[520px] text-[16px] leading-[1.5] text-nl-ink">
        {contactPage.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-[600px]" noValidate>
      <label className="mt-0 block text-[12px] tracking-[0.08em] text-nl-muted">
        {contactPage.fields.name}
        <input className={`${fieldClass} mt-1`} name="name" type="text" autoComplete="name" />
      </label>
      <label className="mt-6 block text-[12px] tracking-[0.08em] text-nl-muted">
        {contactPage.fields.phone}
        <input className={`${fieldClass} mt-1`} name="phone" type="tel" autoComplete="tel" />
      </label>
      <label className="mt-6 block text-[12px] tracking-[0.08em] text-nl-muted">
        {contactPage.fields.objectType}
        <select className={`${fieldClass} mt-1 appearance-none`} name="objectType" defaultValue="Квартира">
          {contactPage.objectTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-6 block text-[12px] tracking-[0.08em] text-nl-muted">
        {contactPage.fields.need}
        <select className={`${fieldClass} mt-1 appearance-none`} name="need" defaultValue="Кухня">
          {contactPage.needs.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-6 block text-[12px] tracking-[0.08em] text-nl-muted">
        {contactPage.fields.comment}
        <textarea className={`${fieldClass} mt-1 min-h-[72px] resize-none`} name="comment" rows={3} />
      </label>
      {status === "error" ? (
        <p className="mt-4 text-[13px] text-nl-terr" role="alert">
          {contactPage.error}
        </p>
      ) : null}
      <NlSubmit className="mt-8">{contactPage.submit}</NlSubmit>
    </form>
  );
}
