"use client";

import { useState, type FormEvent } from "react";

import { site } from "@/data/site";

type ContactFormProps = {
  content: typeof site.contacts.form;
};

export function ContactForm({ content }: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [objectType, setObjectType] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError(content.errorText);
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col justify-center">
        <h3 className="text-[22px] font-semibold text-tv-text">{content.successTitle}</h3>
        <p className="mt-3 text-[14px] text-tv-muted">{content.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col" noValidate>
      <h3 className="text-[22px] font-semibold text-tv-text">{content.title}</h3>
      <p className="mt-2 text-[14px] text-tv-muted">{content.caption}</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-[12px] text-tv-muted">{content.nameLabel}</span>
          <input
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={content.namePlaceholder}
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-[14px] text-tv-text outline-none placeholder:text-tv-muted-2 focus:border-tv-gold/50"
          />
        </label>
        <label className="block">
          <span className="text-[12px] text-tv-muted">{content.phoneLabel}</span>
          <input
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder={content.phonePlaceholder}
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-[14px] text-tv-text outline-none placeholder:text-tv-muted-2 focus:border-tv-gold/50"
          />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-[12px] text-tv-muted">{content.objectLabel}</span>
        <input
          name="objectType"
          value={objectType}
          onChange={(event) => setObjectType(event.target.value)}
          placeholder={content.objectPlaceholder}
          className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-[14px] text-tv-text outline-none placeholder:text-tv-muted-2 focus:border-tv-gold/50"
        />
      </label>
      <label className="mt-5 block">
        <span className="text-[12px] text-tv-muted">{content.commentLabel}</span>
        <textarea
          name="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder={content.commentPlaceholder}
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[14px] text-tv-text outline-none placeholder:text-tv-muted-2 focus:border-tv-gold/50"
        />
      </label>
      {error ? <p className="mt-4 text-[13px] text-red-300">{error}</p> : null}
      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex h-[50px] items-center justify-center rounded-full bg-tv-gold px-[26px] text-[14px] font-medium text-tv-gold-fg hover:bg-[#f0d060]"
        >
          {content.submit}
        </button>
        <p className="text-[12px] text-tv-muted-2">{content.consent}</p>
      </div>
    </form>
  );
}
