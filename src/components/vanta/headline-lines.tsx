import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

export function HeadlineLines({
  lines,
  className,
  baseDelay,
}: {
  lines: readonly string[];
  className?: string;
  baseDelay?: number;
}) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={line} className={cn("vanta-clip block", className)}>
          <span
            className="vanta-clip-inner block"
            style={
              {
                "--vanta-i": index,
                "--vanta-line-delay": baseDelay ? `${baseDelay}ms` : undefined,
              } as CSSProperties
            }
          >
            {line}
          </span>
        </span>
      ))}
    </>
  );
}
