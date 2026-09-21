"use client";

import { useState } from "react";
import type { PackageId } from "@/data/site";
import { requestFields, requestPage } from "@/data/request";

type RequestFormProps = {
  initialPackage: PackageId;
};

type FormState = {
  name: string;
  phone: string;
  messenger: string;
  packageId: PackageId;
  time: string;
  comment: string;
};

type FieldErrors = Partial<Record<"name" | "phone" | "messenger", string>>;

function validate(state: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!state.name.trim()) {
    errors.name = "Укажите имя";
  }
  if (!state.phone.replace(/\D/g, "")) {
    errors.phone = "Укажите телефон";
  }
  if (!state.messenger.trim()) {
    errors.messenger = "Укажите Telegram или WhatsApp";
  }
  return errors;
}

export function RequestForm({ initialPackage }: RequestFormProps) {
  const [state, setState] = useState<FormState>({
    name: "",
    phone: "",
    messenger: "",
    packageId: initialPackage,
    time: requestFields.time.defaultValue,
    comment: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(state);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="form form-success">
        <h2>{requestPage.successTitle}</h2>
        <p>{requestPage.successBody}</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor={requestFields.name.id}>{requestFields.name.label}</label>
        <input
          className={errors.name ? "control is-error" : "control"}
          id={requestFields.name.id}
          name="name"
          type="text"
          placeholder={requestFields.name.placeholder}
          value={state.name}
          onChange={(event) => update("name", event.target.value)}
          autoComplete="name"
        />
        {errors.name ? <p className="field__error">{errors.name}</p> : null}
      </div>

      <div className="field">
        <label htmlFor={requestFields.phone.id}>{requestFields.phone.label}</label>
        <input
          className={errors.phone ? "control is-error" : "control"}
          id={requestFields.phone.id}
          name="phone"
          type="tel"
          placeholder={requestFields.phone.placeholder}
          value={state.phone}
          onChange={(event) => update("phone", event.target.value)}
          autoComplete="tel"
        />
        {errors.phone ? <p className="field__error">{errors.phone}</p> : null}
      </div>

      <div className="field">
        <label htmlFor={requestFields.messenger.id}>{requestFields.messenger.label}</label>
        <input
          className={errors.messenger ? "control is-error" : "control"}
          id={requestFields.messenger.id}
          name="messenger"
          type="text"
          placeholder={requestFields.messenger.placeholder}
          value={state.messenger}
          onChange={(event) => update("messenger", event.target.value)}
        />
        {errors.messenger ? <p className="field__error">{errors.messenger}</p> : null}
      </div>

      <div className="field">
        <label>{requestFields.package.label}</label>
        <div className="segments" role="group" aria-label={requestFields.package.label}>
          {requestFields.package.options.map((item) => {
            const selected = state.packageId === item.id;
            return (
              <button
                type="button"
                key={item.id}
                className={selected ? "segment is-selected" : "segment"}
                aria-pressed={selected}
                onClick={() => update("packageId", item.id)}
              >
                {item.name}
                {selected ? (
                  <span className="segment__mark">{requestFields.package.selectedMark}</span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="field">
        <label htmlFor={requestFields.time.id}>{requestFields.time.label}</label>
        <select
          className="control"
          id={requestFields.time.id}
          name="time"
          value={state.time}
          onChange={(event) => update("time", event.target.value)}
        >
          {requestFields.time.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor={requestFields.comment.id}>{requestFields.comment.label}</label>
        <textarea
          className="control"
          id={requestFields.comment.id}
          name="comment"
          placeholder={requestFields.comment.placeholder}
          value={state.comment}
          onChange={(event) => update("comment", event.target.value)}
        />
      </div>

      <button className="btn btn--primary btn--block" type="submit">
        {requestPage.submit}
      </button>
      <p className="note">{requestPage.note}</p>
    </form>
  );
}
