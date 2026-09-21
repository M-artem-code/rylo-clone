import type { Metadata } from "next";

import { ProductView } from "@/components/vanta/product-view";

export const metadata: Metadata = { title: "VOID 01" };

export default function Void01Page() {
  return <ProductView />;
}
