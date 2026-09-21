"use client";

import { FormEvent, useState } from "react";

import { contactPage } from "@/data/journal";
import { images, routes, site } from "@/data/site";

import { CoverImage } from "./cover-image";
import { SiteHeader } from "./site-header";
import { SiteLabel } from "./site-label";
import { VantaButton } from "./vanta-button";

const info = [
  { label: "Email", value: site.studio.email },
  { label: "WhatsApp", value: site.studio.whatsapp },
  { label: "Telegram", value: site.studio.telegram },
  { label: "Studio", value: site.studio.address },
];

export function ContactView() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function submit(form: HTMLFormElement) {
    const data = new FormData(form);
    const email = String(data.get("Email") ?? "");
    const name = String(data.get("Name") ?? "");
    if (!name.trim() || !email.includes("@")) {
      setError("Name and a valid email are required.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit(event.currentTarget);
  }

  return (
    <main className="relative min-h-screen bg-void">
      <CoverImage
        src={images.livingNight}
        alt="Dark studio volume"
        className="absolute inset-0"
      />
      <div className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-void/80 to-transparent" />
      <div className="relative z-10">
        <SiteHeader
          variant="overlay"
          cta={{ label: "Start your project", href: routes.contact }}
        />
        <div className="grid min-h-[calc(100vh-76px)] items-center gap-12 px-6 py-12 lg:grid-cols-[1fr_560px] lg:px-12">
          <div>
            <SiteLabel>{contactPage.kicker}</SiteLabel>
            <h1 className="mt-4 font-display text-[48px] leading-[0.95] text-milk md:text-[78px]">
              {contactPage.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <dl className="mt-12 space-y-7">
              {info.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-[11px] tracking-[0.16em] text-muted-vanta">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-news text-[20px] text-milk">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <form
            onSubmit={onSubmit}
            noValidate
            className="border border-graph-2/80 bg-ink/80 px-8 py-10 backdrop-blur-sm"
          >
            {contactPage.fields.map((field) => (
              <label key={field} className="mb-2 block">
                <span className="font-mono text-[11px] tracking-[0.16em] text-muted-vanta">
                  {field}
                </span>
                {field === "Message" ? (
                  <textarea
                    name={field}
                    rows={3}
                    className="mt-3 mb-4 w-full resize-none border-0 border-b border-graph-2 bg-transparent py-2 text-milk outline-none"
                  />
                ) : (
                  <input
                    name={field}
                    type={field === "Email" ? "email" : "text"}
                    className="mt-3 mb-4 w-full border-0 border-b border-graph-2 bg-transparent py-2 text-milk outline-none"
                  />
                )}
              </label>
            ))}
            {error ? (
              <p className="mb-4 font-mono text-[11px] text-amber">{error}</p>
            ) : null}
            {sent ? (
              <p className="mb-4 font-news text-[18px] text-milk">{contactPage.success}</p>
            ) : null}
            <VantaButton
              type="submit"
              filled
              onClick={(event) => {
                event.preventDefault();
                const form = event.currentTarget.closest("form");
                if (form instanceof HTMLFormElement) submit(form);
              }}
            >
              {contactPage.submit}
            </VantaButton>
          </form>
        </div>
      </div>
    </main>
  );
}
