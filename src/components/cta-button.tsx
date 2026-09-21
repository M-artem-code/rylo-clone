import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  idle?: boolean;
  block?: boolean;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  idle = false,
  block = false,
}: CtaButtonProps) {
  const className = [
    "btn",
    variant === "primary" ? "btn--primary" : "btn--ghost",
    idle ? "is-idle" : "",
    block ? "btn--block" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
