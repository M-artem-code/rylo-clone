import type { Metadata } from "next";

import { PolkaLedger } from "@/components/site/polka-ledger";
import { actions, lots, shelf } from "@/data/tuka";

export const metadata: Metadata = {
  title: "Полка",
};

export default function PolkaPage() {
  return (
    <main>
      <header className="px-5 pt-10 md:px-10 md:pt-14">
        <h1 className="font-display text-[clamp(4.8rem,11vw,8.5rem)] uppercase leading-[0.78]">
          {shelf.title}
        </h1>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {shelf.subtitle}
        </p>
      </header>
      <PolkaLedger lots={lots} putOnTable={actions.putOnTable} glassLabel={shelf.glassLabel} />
    </main>
  );
}
