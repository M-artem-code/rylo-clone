"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { SlipButton } from "@/components/kolasik/slip-button";
import { requestCopy } from "@/data/request";

type Variant = "full" | "product";

function Field({
  id,
  label,
  children,
  span = false,
}: {
  id: string;
  label: string;
  children: ReactNode;
  span?: boolean;
}) {
  return (
    <div className={`field${span ? " span-2" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

export function RequestForm({
  variant = "full",
  defaults,
  submitLabel,
}: {
  variant?: Variant;
  defaults?: {
    diameter?: string;
    material?: string;
    model?: string;
  };
  submitLabel?: string;
}) {
  const initial = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      telegram: "",
      contact: "",
      country: "",
      diameter: defaults?.diameter ?? requestCopy.defaultDiameter,
      material: defaults?.material ?? requestCopy.defaultMaterial,
      model: defaults?.model ?? requestCopy.defaultModel,
      note: "",
    }),
    [defaults]
  );

  const [values, setValues] = useState(initial);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function update(key: keyof typeof initial, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const hasName = values.name.trim().length > 0;
    const hasChannel =
      variant === "full"
        ? Boolean(values.email.trim() || values.phone.trim() || values.telegram.trim())
        : values.contact.trim().length > 0;
    if (!hasName || !hasChannel) {
      setError("Add a name and one contact channel — email, phone, or Telegram.");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success">
        {requestCopy.successTitle}
        <p>{requestCopy.successBody}</p>
      </div>
    );
  }

  if (variant === "product") {
    return (
      <form className="form-card" onSubmit={onSubmit}>
        <div className="slip-stamp">REQ</div>
        {error ? <p className="form-error">{error}</p> : null}
        <Field id="name" label="Name">
          <input
            id="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>
        <Field id="contact" label="Contact channel">
          <input
            id="contact"
            placeholder="Email, phone, or Telegram"
            value={values.contact}
            onChange={(event) => update("contact", event.target.value)}
          />
        </Field>
        <Field id="country" label="Country / destination">
          <input
            id="country"
            value={values.country}
            onChange={(event) => update("country", event.target.value)}
          />
        </Field>
        <Field id="note" label="Note">
          <textarea
            id="note"
            value={values.note}
            onChange={(event) => update("note", event.target.value)}
          />
        </Field>
        <SlipButton type="submit" block>
          {submitLabel ?? "Request Ring 15"}
        </SlipButton>
      </form>
    );
  }

  return (
    <form className="request-form-wrap" onSubmit={onSubmit}>
      <div className="slip-stamp">REQ</div>
      <h2>{requestCopy.formTitle}</h2>
      {error ? <p className="form-error">{error}</p> : null}
      <div className="form-grid">
        <Field id="name" label="Name">
          <input
            id="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>
        <Field id="email" label="Email">
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
        <Field id="phone" label="Phone">
          <input
            id="phone"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <Field id="telegram" label="Telegram">
          <input
            id="telegram"
            value={values.telegram}
            onChange={(event) => update("telegram", event.target.value)}
          />
        </Field>
        <Field id="country" label="Country / destination" span>
          <input
            id="country"
            value={values.country}
            onChange={(event) => update("country", event.target.value)}
          />
        </Field>
        <Field id="diameter" label="Preferred diameter">
          <select
            id="diameter"
            value={values.diameter}
            onChange={(event) => update("diameter", event.target.value)}
          >
            {requestCopy.diameters.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field id="material" label="Material">
          <select
            id="material"
            value={values.material}
            onChange={(event) => update("material", event.target.value)}
          >
            {requestCopy.materialOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field id="model" label="Model" span>
          <select
            id="model"
            value={values.model}
            onChange={(event) => update("model", event.target.value)}
          >
            {requestCopy.modelOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field id="note" label="Note" span>
          <textarea
            id="note"
            value={values.note}
            onChange={(event) => update("note", event.target.value)}
          />
        </Field>
      </div>
      <SlipButton type="submit" block>
        {submitLabel ?? requestCopy.submit}
      </SlipButton>
    </form>
  );
}
