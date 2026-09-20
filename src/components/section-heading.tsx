import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  title: string;
  copy?: string;
  dark?: boolean;
  className?: string;
  copyClassName?: string;
};

export function SectionHeading({
  index,
  title,
  copy,
  dark = false,
  className,
  copyClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("page-gutter", className)}>
      <p className="font-mono text-[13px] font-medium tracking-[0.22em] text-muted-ink">
        {index}
      </p>
      <h2
        className={cn(
          "mt-[10px] text-[32px] font-extrabold tracking-[-0.02em] md:text-[40px]",
          dark ? "text-bone" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-4 max-w-[760px] text-[17px] leading-7",
            dark ? "text-bone" : "text-charcoal",
            copyClassName,
          )}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
