import Link from "next/link";

import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "inverse" | "royal";

const variants: Record<Variant, string> = {
  primary: "bg-cobalt text-white hover:bg-cobalt/90",
  ghost: "border border-line bg-white text-navy hover:border-cobalt/40",
  inverse: "bg-white text-royal hover:bg-ice",
  royal: "bg-royal text-white hover:bg-royal/90",
};

type OrbitalButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function OrbitalButton({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: OrbitalButtonProps) {
  const classes = cn(
    "inline-flex h-11 items-center justify-center rounded-full px-[22px] font-ui text-[15px] font-semibold whitespace-nowrap transition-colors",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
