"use client";

import { useMemo, useState, type FormEvent } from "react";

import { BrutalButton } from "@/components/brutal-button";
import { SectionHeading } from "@/components/section-heading";
import { houseModels, plotStatuses, type HouseModel, type PlotStatus } from "@/data/site";
import { cn } from "@/lib/utils";

type RequestFormProps = {
  index: string;
  title: string;
  deck: string;
  cta: string;
  defaultModel: HouseModel;
  locked?: boolean;
};

type FormState = {
  name: string;
  contact: string;
  district: string;
  status: PlotStatus | "";
  model: HouseModel;
  comment: string;
};

export function RequestForm({
  index,
  title,
  deck,
  cta,
  defaultModel,
  locked = false,
}: RequestFormProps) {
  const [values, setValues] = useState<FormState>({
    name: "",
    contact: "",
    district: "",
    status: "",
    model: defaultModel,
    comment: "",
  });
  const [attempted, setAttempted] = useState(false);
  const [sent, setSent] = useState(false);

  const errors = useMemo(() => {
    const next: Partial<Record<"name" | "contact", string>> = {};
    if (!values.name.trim()) next.name = "Укажите имя";
    if (!values.contact.trim()) next.contact = "Укажите телефон или Telegram";
    return next;
  }, [values.contact, values.name]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);
    if (Object.keys(errors).length > 0) return;
    setSent(true);
  }

  return (
    <section id="request" className="bg-charcoal py-[110px]">
      <SectionHeading index={index} title={title} copy={deck} dark />
      <div className="page-shell page-gutter mt-8 max-w-[936px]">
        {sent ? (
          <p className="text-[17px] leading-7 text-bone">
            Заявка принята. Напишем по участку и выбранной модели.
          </p>
        ) : (
          <form onSubmit={submit} className="space-y-[26px]" noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="ИМЯ"
                hint="как к вам обращаться"
                value={values.name}
                onChange={(value) => setValues((current) => ({ ...current, name: value }))}
                error={attempted ? errors.name : undefined}
              />
              <Field
                label="ТЕЛЕФОН ИЛИ TELEGRAM"
                hint="+7 или @имя"
                value={values.contact}
                onChange={(value) => setValues((current) => ({ ...current, contact: value }))}
                error={attempted ? errors.contact : undefined}
              />
            </div>
            <div>
              <p className="mb-[10px] font-mono text-[11px] font-medium tracking-[0.16em] text-muted-ink">
                УЧАСТОК — РАЙОН МО / СТАТУС
              </p>
              <div className="grid gap-2 md:grid-cols-[1.15fr_0.85fr]">
                <input
                  value={values.district}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, district: event.target.value }))
                  }
                  placeholder="район МО"
                  className="h-[54px] w-full rounded-none border border-rule-dark bg-slab px-4 text-[16px] text-bone placeholder:text-muted-ink focus:border-iron focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-2">
                  {plotStatuses.map((item) => {
                    const selected = values.status === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          setValues((current) => ({
                            ...current,
                            status: current.status === item.id ? "" : item.id,
                          }))
                        }
                        className={cn(
                          "h-[54px] rounded-none border font-mono text-[11px] tracking-[0.06em]",
                          selected
                            ? "border-iron text-iron"
                            : "border-rule-dark text-muted-ink",
                        )}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <p className="mb-[10px] font-mono text-[11px] font-medium tracking-[0.16em] text-muted-ink">
                МОДЕЛЬ
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {houseModels.map((model) => {
                  const selected = values.model === model;
                  const dim = locked && !selected;
                  return (
                    <button
                      key={model}
                      type="button"
                      disabled={locked && !selected}
                      onClick={() => {
                        if (locked) return;
                        setValues((current) => ({ ...current, model }));
                      }}
                      className={cn(
                        "relative h-[50px] rounded-none border px-2 font-mono text-[11px] tracking-[0.03em]",
                        selected
                          ? "border-iron text-iron after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[3px] after:bg-iron"
                          : "border-rule-dark text-bone",
                        dim && "text-muted-ink",
                      )}
                    >
                      {model}
                    </button>
                  );
                })}
              </div>
            </div>
            <Field
              label="КОММЕНТАРИЙ"
              hint="рельеф, вид, лес, пожелание"
              value={values.comment}
              onChange={(value) => setValues((current) => ({ ...current, comment: value }))}
              multiline
            />
            <BrutalButton type="submit">{cta}</BrutalButton>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  hint,
  value,
  onChange,
  multiline = false,
  error,
}: {
  label: string;
  hint: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  error?: string;
}) {
  const fieldClass = cn(
    "w-full rounded-none border bg-slab px-4 text-[16px] text-bone placeholder:text-muted-ink focus:border-iron focus:outline-none",
    multiline ? "min-h-[86px] py-3" : "h-[54px]",
    error ? "border-iron" : "border-rule-dark",
  );

  return (
    <label className="block">
      <span className="mb-[10px] block font-mono text-[11px] font-medium tracking-[0.16em] text-muted-ink">
        {label}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={hint}
          className={fieldClass}
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={hint}
          className={fieldClass}
        />
      )}
      {error ? <span className="mt-2 block text-[13px] text-iron">{error}</span> : null}
    </label>
  );
}
