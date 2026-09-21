import Link from "next/link";
import { ShopCatalog } from "@/components/kolasik/shop-catalog";
import { shopCopy } from "@/data/shop";

export default function ShopPage() {
  return (
    <main>
      <section className="shop-head">
        <div className="kicker">{shopCopy.kicker}</div>
        <h1>{shopCopy.title}</h1>
        <div className="line">
          <span>{shopCopy.line}</span>
          <span>{shopCopy.count}</span>
        </div>
      </section>
      <ShopCatalog />
      <p className="shop-foot">
        Need a fit? <Link href={shopCopy.footHref}>Use the size guide.</Link>
      </p>
    </main>
  );
}
