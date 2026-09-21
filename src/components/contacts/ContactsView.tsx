"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

import { Eyebrow } from "@/components/site/Eyebrow";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { contacts } from "@/data/contacts";
import { getMission } from "@/data/missions";

export function ContactsView() {
  const params = useSearchParams();
  const presetMission = getMission(params.get("mission") ?? "");
  const [sent, setSent] = useState(false);

  const defaults = useMemo(
    () => ({
      name: "",
      phone: "",
      email: "",
      travelers: params.get("passengers") ?? "",
      mission: presetMission ? `${presetMission.name}  ·  ${presetMission.date}` : "",
      comment: params.get("seat") ? `Место ${params.get("seat")}` : "",
    }),
    [params, presetMission],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="bg-white pb-16">
      <section className="px-page grid gap-10 pt-12 lg:grid-cols-[1fr_minmax(0,720px)]">
        <div>
          <Eyebrow>{contacts.eyebrow}</Eyebrow>
          <h1 className="mt-3 font-display text-[40px] leading-[0.95] font-extrabold text-navy md:text-[44px]">
            {contacts.lines[0]}
            <br />
            <span className="text-cobalt">{contacts.lines[1]}</span>
          </h1>
          <form id="request" onSubmit={onSubmit} className="mt-10 grid gap-x-6 gap-y-6 sm:grid-cols-2">
            {contacts.fields.map((field) => (
              <label key={field.name} className="block">
                <span className="font-ui text-[13px] text-mute">{field.label}</span>
                <input
                  name={field.name}
                  type={field.type}
                  required={field.name !== "comment"}
                  defaultValue={defaults[field.name as keyof typeof defaults]}
                  placeholder={field.placeholder}
                  className="mt-2 h-[52px] w-full rounded-[14px] border border-line bg-ice px-4 font-ui text-[15px] text-navy outline-none placeholder:text-mute/70 focus:border-violet"
                />
              </label>
            ))}
            <div className="sm:col-span-2">
              {sent ? (
                <p className="rounded-[16px] bg-ice px-5 py-4 font-ui text-[15px] text-navy">{contacts.success}</p>
              ) : (
                <OrbitalButton type="submit">{contacts.submit}</OrbitalButton>
              )}
            </div>
          </form>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[24px]">
          <Image src={contacts.image} alt="" fill className="object-cover object-[70%_45%]" sizes="720px" />
          <div className="absolute top-8 left-8 max-w-[420px] rounded-[16px] bg-white/90 p-5 backdrop-blur-md">
            <p className="font-mono text-[11px] text-violet">{contacts.spaceportLabel}</p>
            <p className="mt-2 font-ui text-[15px] font-semibold text-navy">{contacts.spaceportMeta}</p>
            <p className="mt-3 font-body text-[14px] text-mute">{contacts.spaceportContacts}</p>
          </div>
        </div>
      </section>

      <section className="px-page mt-12">
        <div className="rounded-[24px] bg-royal px-8 py-10 text-white md:px-10">
          <p className="font-mono text-[12px] text-violet-soft">{contacts.nextEyebrow}</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {contacts.next.map((step) => (
              <div key={step.num}>
                <p className="font-mono text-[12px] text-violet-soft">{step.num}</p>
                <h2 className="mt-3 font-display text-[18px] font-bold">{step.title}</h2>
                <p className="mt-3 font-body text-[14px] text-white/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
