"use client";

import { useState, type FormEvent } from "react";

import { FolioButton } from "@/components/arcana/folio-button";
import { applyPage } from "@/data/apply";
import { cn } from "@/lib/utils";

type Mode = (typeof applyPage.modes)[number];

type Fields = {
  name: string;
  contact: string;
  night: string;
  task: string;
};

export function ApplyForm({ defaultMode = "Portrait" }: { defaultMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [fields, setFields] = useState<Fields>({
    name: "",
    contact: "",
    night: defaultMode,
    task: "",
  });
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function set<K extends keyof Fields>(key: K, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Fields> = {};
    if (!fields.name.trim()) next.name = "Напишите, как к вам обращаться";
    if (!fields.contact.trim()) next.contact = "Оставьте контакт";
    if (!fields.task.trim()) next.task = "Два-три предложения об образе";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function submit() {
    if (!validate()) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 400);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit();
  }

  if (sent) {
    return (
      <p className="max-w-[34rem] font-serif text-[28px] leading-tight text-bone">
        {applyPage.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
      {applyPage.fields.map((field) => {
        const key = field.id as keyof Fields;
        const isTask = field.id === "task";
        const inputId = `apply-${field.id}`;
        return (
          <div key={field.id} className="block">
            <label htmlFor={inputId} className="text-[12px] text-mercury">
              {field.label}
            </label>
            {isTask ? (
              <textarea
                id={inputId}
                name={field.id}
                rows={2}
                value={fields[key]}
                placeholder={field.placeholder}
                onChange={(event) => set(key, event.target.value)}
                className="mt-2 w-full resize-none border-0 border-b border-rule-strong bg-transparent pb-2 text-[15px] text-bone outline-none placeholder:text-bone-faint focus:border-bone"
              />
            ) : (
              <input
                id={inputId}
                name={field.id}
                type="text"
                autoComplete={field.autocomplete}
                value={fields[key]}
                placeholder={field.placeholder}
                onChange={(event) => set(key, event.target.value)}
                className="mt-2 w-full border-0 border-b border-rule-strong bg-transparent pb-2 text-[15px] text-bone outline-none placeholder:text-bone-faint focus:border-bone"
              />
            )}
            {errors[key] ? (
              <span className="mt-2 block text-[12px] text-bone-dim">{errors[key]}</span>
            ) : null}
          </div>
        );
      })}

      <div className="flex flex-wrap gap-8">
        {applyPage.modes.map((item) => {
          const on = item === mode;
          return (
            <button
              key={item}
              type="button"
              onClick={() => {
                setMode(item);
                set("night", item);
              }}
              className={cn(
                "relative pb-1 text-[14px] transition-colors",
                on ? "font-medium text-bone" : "text-bone-dim hover:text-bone",
              )}
            >
              {item}
              {on ? <span className="absolute inset-x-0 bottom-0 h-px bg-bone" /> : null}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <FolioButton type="button" filled disabled={loading} onClick={submit}>
          {loading ? "Отправка…" : applyPage.submit}
        </FolioButton>
        <span className="text-[13px] text-bone-dim">{applyPage.telegram}</span>
      </div>
      <p className="text-[12px] text-bone-faint">{applyPage.disclaimer}</p>
    </form>
  );
}
