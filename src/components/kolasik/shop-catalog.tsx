"use client";

import { useMemo, useState } from "react";
import { MaterialChip } from "@/components/kolasik/material-chip";
import { SizeStave } from "@/components/kolasik/size-stave";
import { SkuCard } from "@/components/kolasik/sku-card";
import { products } from "@/data/products";
import { shopCopy } from "@/data/shop";
import { materials, type DiameterId, type MaterialId } from "@/data/site";

export function ShopCatalog() {
  const [diameter, setDiameter] = useState<DiameterId | "all">(shopCopy.defaultDiameter);
  const [material, setMaterial] = useState<MaterialId | "all">(shopCopy.defaultMaterial);
  const [strict, setStrict] = useState(false);

  const visible = useMemo(() => {
    if (!strict) return products;
    return products.filter((product) => {
      const sizeOk = diameter === "all" || product.diameter === diameter;
      const materialOk = material === "all" || product.material === material;
      return sizeOk && materialOk;
    });
  }, [diameter, material, strict]);

  return (
    <>
      <section className="shop-filters">
        <SizeStave
          active={diameter === "all" ? "" : diameter}
          showAll
          allActive={diameter === "all"}
          onSelect={(value) => {
            setStrict(true);
            setDiameter(value);
          }}
          onSelectAll={() => {
            setStrict(true);
            setDiameter("all");
          }}
        />
        <div className="chips">
          {materials.map((item) => (
            <MaterialChip
              key={item.id}
              id={item.id}
              label={item.label}
              active={material === item.id}
              onClick={() => {
                setStrict(true);
                setMaterial((current) => (current === item.id ? "all" : item.id));
              }}
            />
          ))}
        </div>
      </section>
      <section className="shop-grid">
        {visible.map((product) => (
          <SkuCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
