import Link from "next/link";
import type { ReactNode } from "react";

export function SlipButton({
  href,
  children,
  type = "button",
  block = false,
}: {
  href?: string;
  children: ReactNode;
  type?: "button" | "submit";
  block?: boolean;
}) {
  const className = `btn-slip${block ? " block" : ""}`;
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

export function GhostLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="btn-ghost link-steel">
      {children}
    </Link>
  );
}
