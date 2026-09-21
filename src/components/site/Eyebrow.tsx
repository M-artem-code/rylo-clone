import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("font-mono text-[12px] font-medium tracking-[0.08em] text-violet uppercase", className)}>
      {children}
    </p>
  );
}
