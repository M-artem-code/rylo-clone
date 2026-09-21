"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { SiteButton } from "@/components/site/site-button";
import { EstateLine, ProcessLine, TasteMap } from "@/components/site/taste-map";
import {
  bands,
  images,
  shelf,
  type BandId,
  type Lot,
} from "@/data/tuka";
import { cn } from "@/lib/utils";

export function PolkaLedger({
  lots,
  putOnTable,
  glassLabel,
}: {
  lots: readonly Lot[];
  putOnTable: string;
  glassLabel: string;
}) {
  const [band, setBand] = useState<BandId>("all");
  const [openId, setOpenId] = useState<string>(shelf.openId);

  const visible = useMemo(
    () => (band === "all" ? lots : lots.filter((lot) => lot.band === band)),
    [band, lots],
  );

  return (
    <div className="px-5 pb-16 md:px-10">
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={shelf.title}>
        {bands.map((item) => {
          const selected = item.id === band;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setBand(item.id)}
              className={cn(
                "border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em]",
                selected
                  ? "border-lime bg-lime text-moss"
                  : "border-line bg-transparent text-body hover:border-body",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 border-b border-line">
        {visible.map((lot) => {
          const open = lot.id === openId;
          return (
            <article key={lot.id} className={cn(open && "bg-panel")}>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenId(open ? "" : lot.id)}
                className="grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 gap-y-2 border-t border-line px-1 py-4 text-left md:grid-cols-[3rem_minmax(0,1.4fr)_5.5rem_minmax(0,1fr)_3.5rem]"
              >
                <span className="font-mono text-[11px] tracking-[0.14em] text-muted">
                  {lot.index}
                </span>
                <span>
                  <span className="block font-display text-3xl uppercase leading-none md:text-4xl">
                    {lot.name}
                  </span>
                  <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {lot.origin}
                  </span>
                </span>
                <span className="font-display text-4xl leading-none md:text-5xl">
                  {lot.percent}%
                </span>
                <span className="col-start-2 font-mono text-[11px] uppercase tracking-[0.14em] text-body md:col-start-auto">
                  {lot.taste}
                </span>
                <span
                  className="h-12 w-8 justify-self-end md:h-16 md:w-10"
                  style={{ backgroundColor: lot.swatch }}
                  aria-hidden="true"
                />
              </button>
              {open ? (
                <div className="grid gap-6 border-t border-line px-1 py-6 lg:grid-cols-3">
                  <figure>
                    <div className="relative aspect-[4/3] border border-line">
                      <Image
                        src={images.edge.src}
                        alt={images.edge.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      {lot.name}
                    </figcaption>
                  </figure>
                  <div>
                    <TasteMap labels={lot.marks} mark={lot.mark} />
                    {lot.process ? <ProcessLine steps={lot.process} /> : null}
                    <EstateLine />
                  </div>
                  <div className="flex flex-col items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                        {glassLabel} {lot.percent}%
                      </p>
                      <p className="mt-3 font-display text-5xl uppercase leading-none">
                        {lot.pairingLabel}
                      </p>
                    </div>
                    <SiteButton href={`/zapis?lot=${lot.id}`}>{putOnTable}</SiteButton>
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
