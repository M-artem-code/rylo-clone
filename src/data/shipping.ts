export const shippingCopy = {
  kicker: "Shipping",
  title: "Worldwide.",
  sub: "Rates confirmed after your request.",
  facts: [
    { term: "Reach", value: "Ships internationally." },
    { term: "Shop type", value: "Online shop only — no pickup address." },
    { term: "Checkout", value: "Checkout does not exist; shipping is arranged after the request." },
    { term: "Transit time", value: "[TRANSIT TIME]", placeholder: true },
    { term: "Cost", value: "[SHIPPING COST]", placeholder: true },
    { term: "Origin", value: "[ORIGIN]", placeholder: true },
  ],
  columns: ["Region", "Cost", "Time"],
  rows: [
    ["Your country", "[SHIPPING COST]", "[TRANSIT TIME]"],
    ["Other destinations", "[SHIPPING COST]", "[TRANSIT TIME]"],
  ],
  note: "Questions about fit belong in Size guide. Questions about a specific wheel go in the request.",
  primary: "Request a wheel",
  primaryHref: "/request",
  secondary: "Back to wheels",
  secondaryHref: "/wheels",
};
