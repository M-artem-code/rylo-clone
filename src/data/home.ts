import { products } from "@/data/products";

export const homeCopy = {
  kicker: "Kolasik · diameter shop",
  title: "Wheels, sized to the squirrel.",
  subline:
    "Multiple diameters and materials. Worldwide shipping. Request a wheel — we write back.",
  primaryCta: "Request a wheel",
  primaryHref: "/request",
  shopLabel: "Shop wheels",
  shopHref: "/wheels",
  sizeLabel: "Size guide",
  sizeHref: "/size-guide",
  staveKicker: "Start with diameter",
  staveLead: "Then choose the run surface.",
  staveActive: "15",
  materialsLine: "The offer is choice: size and material.",
  slipKicker: "Request slip",
  slipTitle: "Tell us the squirrel and the size.",
  slipBody: "We reply by phone, email, or Telegram.",
  callouts: [
    { label: "Ø 15\"", side: "left" as const, style: { top: "18%", left: "-8px" }, leader: 56 },
    { label: "Beech run", side: "right" as const, style: { top: "46%", right: "-12px" }, leader: 48 },
    { label: "Steel axle", side: "right" as const, style: { bottom: "16%", right: "8%" }, leader: 40 },
  ],
};

export const homeStrip = products;
