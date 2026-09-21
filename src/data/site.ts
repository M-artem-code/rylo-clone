export const siteName = "Kolasik";
export const wordmark = "KOLASIK";
export const tagline = "Squirrel running wheels. Sized to the animal.";
export const pricePlaceholder = "$ —";

export const contacts = {
  phone: "[PHONE]",
  email: "[EMAIL]",
  telegram: "[TELEGRAM]",
};

export const navItems = [
  { id: "wheels", label: "Wheels", href: "/wheels" },
  { id: "size", label: "Size guide", href: "/size-guide" },
  { id: "shipping", label: "Shipping", href: "/shipping" },
  { id: "request", label: "Request", href: "/request" },
] as const;

export const footerLegal =
  "Prices in USD. Request only — no online checkout.";
export const footerCopyright = "© Kolasik";

export const requestCta = "Request a wheel";
export const diameters = ["12", "15", "18", "21"] as const;
export type DiameterId = (typeof diameters)[number];

export const materials = [
  { id: "beech", label: "Beech" },
  { id: "steel", label: "Steel" },
  { id: "walnut", label: "Walnut" },
  { id: "composite", label: "Composite" },
] as const;
export type MaterialId = (typeof materials)[number]["id"];
