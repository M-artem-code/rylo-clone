import { images, routes } from "./site";

export const void01 = {
  kicker: "Collection  Void",
  name: "VOID 01",
  deck: "An industrial-design object that holds darkness.",
  image: images.voidRing,
  cta: { label: "Configure this product", href: routes.studio },
  specs: [
    { label: "Material", value: "Blackened aluminium" },
    { label: "Finish", value: "Soft matte" },
    { label: "Diameter", value: "420 mm" },
    { label: "Temperature", value: "2200K – 4000K" },
    { label: "Power", value: "18 W" },
    { label: "Mount", value: "Ceiling suspended" },
    { label: "CRI", value: "98" },
    { label: "Control", value: "DALI  ·  Casambi" },
  ],
  finishes: ["#121212", "#6e5234", "#28282a", "#b4b0a8"],
  before: images.livingNight,
  after: images.livingNight,
};
