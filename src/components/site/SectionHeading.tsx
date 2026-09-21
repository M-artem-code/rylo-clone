import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-4xl", className)}>
      <p className="mb-3 flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] text-tv-gold uppercase">
        <span className="size-[7px] rounded-full bg-tv-gold" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="font-display text-[36px] leading-[1.15] font-medium text-tv-text md:text-[40px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-3xl text-[17px] leading-7 text-tv-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
