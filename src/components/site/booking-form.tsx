"use client";

import Image from "next/image";
import { useMemo, useState, type FormEvent } from "react";

import { SiteButton } from "@/components/site/site-button";
import {
  actions,
  booking,
  images,
  lotsOnTable,
  pairings,
  percents,
  scaleEnds,
  lotById,
  type PairingId,
} from "@/data/tuka";
import { cn } from "@/lib/utils";

function percentIndex(value: number) {
  const index = percents.indexOf(value);
  return index === -1 ? 0 : index;
}

export function BookingForm({ lotId }: { lotId?: string }) {
  const pinned = lotById(lotId);
  const [minIndex, setMinIndex] = useState(() =>
    percentIndex(pinned?.percent ?? booking.defaultMin),
  );
  const [maxIndex, setMaxIndex] = useState(() =>
    percentIndex(pinned?.percent ?? booking.defaultMax),
  );
  const [pairing, setPairing] = useState<PairingId>(
    pinned?.pairingId ?? booking.defaultPairing,
  );
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [from, setFrom] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<{ date?: string; guests?: string }>({});
  const [sent, setSent] = useState(false);

  const min = percents[minIndex] ?? booking.defaultMin;
  const max = percents[maxIndex] ?? booking.defaultMax;
  const table = useMemo(() => lotsOnTable(min, max), [min, max]);
  const pairingLabel = pairings.find((item) => item.id === pairing)?.label ?? "";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: { date?: string; guests?: string } = {};
    if (!date.trim()) next.date = booking.errors.date;
    const count = Number(guests);
    if (!guests.trim() || !Number.isFinite(count) || count < 1) {
      next.guests = booking.errors.guests;
    }
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  const span = percents.length - 1;

  return (
    <form onSubmit={submit} noValidate className="lg:grid lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12">
      <div className="order-1 px-5 py-10 md:px-10 lg:col-span-7 lg:row-start-1">
        <h1 className="font-display text-[clamp(4.5rem,10vw,7.5rem)] uppercase leading-[0.8]">
          {booking.title}
        </h1>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {booking.subtitle}
        </p>

        {sent ? (
          <div className="mt-10 max-w-xl border border-line p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {booking.successTitle}
            </p>
            <p className="mt-4 font-display text-5xl uppercase leading-none">{date}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-body">
              {guests} · {from || booking.placeholders.from}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-body">
              {min}–{max} · {pairingLabel}
            </p>
            {note ? (
              <p className="mt-4 text-sm text-body">{note}</p>
            ) : null}
            <SiteButton
              type="button"
              className="mt-8"
              onClick={() => setSent(false)}
            >
              {actions.anotherDate}
            </SiteButton>
          </div>
        ) : (
          <div className="mt-10 grid max-w-xl gap-6">
            <Field
              label={booking.fields.date}
              value={date}
              placeholder={booking.placeholders.date}
              error={errors.date}
              onChange={setDate}
              autoComplete="off"
            />
            <Field
              label={booking.fields.guests}
              value={guests}
              placeholder={booking.placeholders.guests}
              error={errors.guests}
              onChange={setGuests}
              inputMode="numeric"
            />
            <Field
              label={booking.fields.from}
              value={from}
              placeholder={booking.placeholders.from}
              onChange={setFrom}
            />

            <fieldset>
              <legend className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {booking.fields.course}
              </legend>
              <div className="relative mt-6 h-8">
                <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-line" />
                <div
                  className="absolute top-1/2 h-1 -translate-y-1/2 bg-cocoa"
                  style={{
                    left: `${(minIndex / span) * 100}%`,
                    width: `${((maxIndex - minIndex) / span) * 100}%`,
                  }}
                />
                <input
                  className="cocoa-range absolute inset-x-0 top-0 w-full"
                  type="range"
                  min={0}
                  max={span}
                  step={1}
                  value={minIndex}
                  aria-label={scaleEnds.soft}
                  onChange={(event) => {
                    const next = Number(event.target.value);
                    setMinIndex(Math.min(next, maxIndex));
                  }}
                />
                <input
                  className="cocoa-range absolute inset-x-0 top-0 w-full"
                  type="range"
                  min={0}
                  max={span}
                  step={1}
                  value={maxIndex}
                  aria-label={scaleEnds.bitter}
                  onChange={(event) => {
                    const next = Number(event.target.value);
                    setMaxIndex(Math.max(next, minIndex));
                  }}
                />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] tracking-[0.12em] text-body">
                {percents.map((percent) => (
                  <span key={percent}>{percent}</span>
                ))}
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                <span>{scaleEnds.soft}</span>
                <span>{scaleEnds.bitter}</span>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {booking.fields.pairing}
              </legend>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {pairings.map((item) => {
                  const selected = item.id === pairing;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setPairing(item.id)}
                      className={cn(
                        "border px-2 py-3 font-display text-2xl uppercase leading-none",
                        selected
                          ? "border-lime bg-lime text-moss"
                          : "border-line text-paper hover:border-body",
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {booking.fields.note}
              </span>
              <textarea
                value={note}
                placeholder={booking.placeholders.note}
                onChange={(event) => setNote(event.target.value)}
                rows={3}
                className="mt-2 w-full resize-none border border-line bg-transparent px-3 py-3 font-mono text-sm text-paper outline-none placeholder:text-muted focus:border-paper"
              />
            </label>
          </div>
        )}
      </div>

      <aside className="order-2 border-line bg-panel px-5 py-10 md:px-10 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:border-l">
        <h2 className="font-display text-6xl uppercase leading-none">{booking.panelTitle}</h2>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {booking.panelEyebrow}
        </p>
        <ul className="mt-6 space-y-2 font-mono text-xs uppercase tracking-[0.12em] text-body">
          {booking.included.map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </ul>
        <ul className="mt-8 space-y-2 font-mono text-[11px] uppercase tracking-[0.14em]">
          {table.map((lot) => (
            <li key={lot.id}>
              {lot.name} · {lot.percent}%
            </li>
          ))}
        </ul>
        <figure className="mt-10">
          <div className="relative aspect-[4/3] border border-line">
            <Image
              src={images.edge.src}
              alt={images.edge.alt}
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            {booking.roomNote}
          </figcaption>
        </figure>
      </aside>

      {sent ? null : (
        <div className="order-3 px-5 pb-10 md:px-10 lg:col-span-7 lg:row-start-2">
          <SiteButton type="submit" className="w-full sm:w-auto">
            {actions.sendDate}
          </SiteButton>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  value,
  placeholder,
  error,
  onChange,
  inputMode,
  autoComplete,
}: {
  label: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
  inputMode?: "numeric" | "text";
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <input
        value={value}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "mt-2 w-full border bg-transparent px-3 py-3 font-display text-3xl uppercase leading-none text-paper outline-none placeholder:text-muted",
          error ? "border-cocoa" : "border-line focus:border-paper",
        )}
      />
      {error ? (
        <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-cocoa">
          {error}
        </span>
      ) : null}
    </label>
  );
}
