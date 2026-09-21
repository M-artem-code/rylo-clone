"use client";

import { useState } from "react";

import { void01 } from "@/data/product";
import { routes } from "@/data/site";

import { CoverImage } from "./cover-image";
import { SiteHeader } from "./site-header";
import { SiteLabel } from "./site-label";
import { VantaButton } from "./vanta-button";

export function ProductView() {
  const [rotation, setRotation] = useState(50);
  const [finish, setFinish] = useState(0);

  return (
    <main className="min-h-screen bg-void">
      <SiteHeader
        active="Collection"
        cta={{ label: "Configure this product", href: routes.studio }}
      />
      <div className="grid gap-10 px-6 py-8 lg:grid-cols-[1fr_0.85fr] lg:px-12">
        <div>
          <div
            className="vanta-product-orbit"
            style={{
              transform: `perspective(1400px) rotateY(${(rotation - 50) * 0.42}deg)`,
            }}
          >
            <CoverImage
              src={void01.image}
              alt={void01.name}
              className="vanta-share-void h-[480px] md:h-[720px]"
              motion="aperture"
            />
          </div>
          <div className="mt-6 px-6 md:px-16">
            <input
              type="range"
              min={0}
              max={100}
              value={rotation}
              onChange={(event) => setRotation(Number(event.target.value))}
              className="vanta-range w-full"
              aria-label="360 rotate"
            />
            <div className="mt-2 flex justify-between font-mono text-[11px] tracking-[0.16em] text-muted-vanta">
              <span>360°</span>
              <span>Rotate</span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <figure>
              <CoverImage
                src={void01.before}
                alt="Without lighting"
                className="h-[140px] brightness-[0.14]"
              />
              <SiteLabel className="mt-2">Without lighting</SiteLabel>
            </figure>
            <figure>
              <CoverImage
                src={void01.after}
                alt="With VANTA"
                className="h-[140px]"
                motion="expose"
              />
              <SiteLabel className="mt-2">With VANTA</SiteLabel>
            </figure>
          </div>
        </div>
        <div>
          <SiteLabel>{void01.kicker}</SiteLabel>
          <h1 className="mt-2 font-display text-[72px] leading-none text-milk">
            {void01.name}
          </h1>
          <p className="mt-4 font-news text-[20px] text-milk-soft">{void01.deck}</p>
          <dl className="mt-10">
            {void01.specs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-2 border-b border-graph py-3"
              >
                <dt className="font-mono text-[12px] tracking-[0.12em] text-muted-vanta">
                  {spec.label}
                </dt>
                <dd className="font-sans text-[15px] text-milk">{spec.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex items-end justify-between gap-6">
            <div>
              <SiteLabel>Finish</SiteLabel>
              <div className="mt-4 flex gap-3">
                {void01.finishes.map((color, index) => (
                  <button
                    key={color}
                    type="button"
                    aria-label={`Finish ${index + 1}`}
                    onClick={() => setFinish(index)}
                    className={`vanta-swatch size-7 rounded-full border ${finish === index ? "is-on" : ""}`}
                    style={{
                      background: color,
                      borderColor: finish === index ? "#f4f1ea" : "#34363a",
                    }}
                  />
                ))}
              </div>
            </div>
            <svg width="92" height="92" viewBox="0 0 92 92" aria-hidden>
              <circle cx="46" cy="40" r="32" fill="none" stroke="#d2cec4" strokeOpacity="0.6" />
              <circle cx="46" cy="40" r="23" fill="none" stroke="#c9a66b" />
              <line x1="8" y1="40" x2="84" y2="40" stroke="#34363a" />
            </svg>
          </div>
          <p className="mt-2 text-right font-mono text-[11px] tracking-[0.12em] text-muted-vanta">
            Ø 420
          </p>
          <div className="mt-8">
            <VantaButton href={void01.cta.href} filled>
              {void01.cta.label}
            </VantaButton>
          </div>
        </div>
      </div>
    </main>
  );
}
