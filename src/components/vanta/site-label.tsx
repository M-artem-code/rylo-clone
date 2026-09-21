import { cn } from "@/lib/utils";

export function SiteLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-vanta",
        className,
      )}
    >
      {children}
    </p>
  );
}
