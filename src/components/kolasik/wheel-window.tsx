import type { CSSProperties } from "react";
import { DegreeRing } from "@/components/kolasik/degree-ring";

export type Callout = {
  label: string;
  side: "left" | "right";
  style: CSSProperties;
  leader: number;
};

export function WheelWindow({
  src,
  alt,
  size = "md",
  featured = false,
  callouts = [],
}: {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  featured?: boolean;
  callouts?: Callout[];
}) {
  const sizeClass = {
    sm: "ww-sm",
    md: "ww-md",
    lg: "ww-lg",
    xl: "ww-xl",
    hero: "ww-hero",
  }[size];

  return (
    <div className={`wheel-window ${sizeClass}${featured ? " featured" : ""}`}>
      <DegreeRing />
      <div className="aperture">
        {/* Product frames must keep the mockup crop; next/image changes object position. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
      </div>
      {callouts.map((callout) => (
        <div
          key={callout.label}
          className={`callout${callout.side === "left" ? " left" : ""}`}
          style={callout.style}
        >
          {callout.side === "left" ? (
            <>
              <span>{callout.label}</span>
              <span className="leader" style={{ width: callout.leader }} />
            </>
          ) : (
            <>
              <span className="leader" style={{ width: callout.leader }} />
              <span>{callout.label}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
