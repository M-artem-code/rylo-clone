import { images, routes } from "./site";

export const collectionPage = {
  kicker: "Five lighting languages",
  headline: ["THE", "COLLECTION"],
  specBar: "Material   Size   Color   Temperature   Power   Mounting",
  featured: {
    name: "LINE",
    image: images.line,
    spec: "Blackened steel   ·   1800 mm   ·   2700K   ·   Recessed or pendant",
    dimension: "1800 mm",
    href: routes.collection,
  },
  rows: [
    {
      name: "VOID",
      blurb: "A ring that disappears. Only the aperture remains.",
      image: images.voidRing,
      position: "center",
      href: routes.void01,
    },
    {
      name: "ARC",
      blurb: "A bronze gesture. Light as a single curved line.",
      image: images.arc,
      position: "center",
      href: routes.collection,
    },
    {
      name: "LUMEN",
      blurb: "A glass column. Electric white held in smoke.",
      image: images.lumen,
      position: "center",
      href: routes.collection,
    },
    {
      name: "FORMA",
      blurb: "Stone geometry. A triangular slit of amber.",
      image: images.forma,
      position: "center",
      href: routes.collection,
    },
  ],
};
