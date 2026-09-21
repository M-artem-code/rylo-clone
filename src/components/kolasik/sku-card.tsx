import Link from "next/link";
import { MaterialChip } from "@/components/kolasik/material-chip";
import { SlipButton } from "@/components/kolasik/slip-button";
import { WheelWindow } from "@/components/kolasik/wheel-window";
import type { Product } from "@/data/products";

export function SkuCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  return (
    <article className={`sku${product.featured ? " featured" : ""}`}>
      <Link href={product.href} className="sku-link">
        <WheelWindow
          src={product.image}
          alt={product.name}
          size={compact ? "sm" : "md"}
          featured={product.featured && !compact}
        />
      </Link>
      <div className="meta">
        <Link href={product.href} className="sku-link">
          <div className="name">{product.name}</div>
        </Link>
        <div className="row">
          <span>Ø {product.diameter}&quot;</span>
          <span className="price">{product.price}</span>
        </div>
        {compact ? null : (
          <div className="swatch-row">
            <MaterialChip id={product.material} label={product.materialLabel} />
            {product.surface === "quiet" ? (
              <span className="quiet-label">{product.surfaceLabel}</span>
            ) : null}
          </div>
        )}
        {compact ? null : (
          <div className="mini-slip">
            <SlipButton href={product.requestHref}>Request</SlipButton>
          </div>
        )}
      </div>
    </article>
  );
}
