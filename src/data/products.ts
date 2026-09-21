import { pricePlaceholder, type DiameterId, type MaterialId } from "@/data/site";

export type Product = {
  id: string;
  slug: string;
  name: string;
  diameter: DiameterId;
  material: MaterialId;
  materialLabel: string;
  image: string;
  price: string;
  href: string;
  requestHref: string;
  surface: "standard" | "quiet";
  surfaceLabel: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "ring-12",
    slug: "ring-12",
    name: "Ring 12",
    diameter: "12",
    material: "steel",
    materialLabel: "Steel",
    image: "/images/wheels/ring-12.png",
    price: pricePlaceholder,
    href: "/wheels",
    requestHref: "/request?model=Ring+12&diameter=12&material=Steel",
    surface: "standard",
    surfaceLabel: "Standard run",
  },
  {
    id: "ring-15",
    slug: "ring-15",
    name: "Ring 15",
    diameter: "15",
    material: "beech",
    materialLabel: "Beech",
    image: "/images/wheels/ring-15.png",
    price: pricePlaceholder,
    href: "/wheels/ring-15",
    requestHref: "/request?model=Ring+15&diameter=15&material=Beech",
    surface: "standard",
    surfaceLabel: "Standard run",
    featured: true,
  },
  {
    id: "ring-18",
    slug: "ring-18",
    name: "Ring 18",
    diameter: "18",
    material: "composite",
    materialLabel: "Composite",
    image: "/images/wheels/ring-18.png",
    price: pricePlaceholder,
    href: "/wheels",
    requestHref: "/request?model=Ring+18&diameter=18&material=Composite",
    surface: "quiet",
    surfaceLabel: "quiet run",
  },
  {
    id: "ring-21",
    slug: "ring-21",
    name: "Ring 21",
    diameter: "21",
    material: "walnut",
    materialLabel: "Walnut",
    image: "/images/wheels/ring-21.png",
    price: pricePlaceholder,
    href: "/wheels",
    requestHref: "/request?model=Ring+21&diameter=21&material=Walnut",
    surface: "standard",
    surfaceLabel: "Standard run",
  },
];

export const ring15 = products.find((product) => product.id === "ring-15") ?? products[1];
