import Link from "next/link";

import { cn } from "@/lib/utils";

type GoldButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function GoldButton({
  href,
  children,
  variant = "primary",
  className,
}: GoldButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-[46px] items-center justify-center rounded-full px-[22px] text-[14px] font-medium whitespace-nowrap transition-colors",
        variant === "primary" &&
          "bg-tv-gold text-tv-gold-fg hover:bg-[#f0d060]",
        variant === "ghost" &&
          "border border-white/20 bg-white/5 text-tv-text hover:bg-white/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}
