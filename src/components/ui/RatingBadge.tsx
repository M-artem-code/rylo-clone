import { StarIcon, FccIcon, LockIcon } from "@/components/icons";

export function RatingBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`text-ink/70 gap-x-md gap-y-sm flex flex-wrap items-center ${className}`}>
      <div className="flex items-center gap-1 text-small">
        <span className="text-main font-semibold">4.6</span>
        <span className="relative inline-flex" role="img" aria-label="Rated 4.6 out of 5 on the App Store, (3,574)">
          <span className="text-ink/30 -space-x-0.5 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={`empty-${i}`} className="size-4.5 shrink-0" />
            ))}
          </span>
          <span className="text-ink/80 absolute inset-0 -space-x-0.5 flex overflow-hidden" style={{ width: "92%" }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={`fill-${i}`} className="size-4.5 shrink-0" />
            ))}
          </span>
        </span>
        <span className="text-ink/50 text-[0.6875rem]">(3,574)</span>
      </div>
      <span aria-hidden="true" className="hidden h-4.5 w-px bg-current/70 md:block" />
      <div className="gap-xs text-tiny flex items-center">
        <span className="flex shrink-0 items-center justify-center size-5">
          <FccIcon className="w-full" />
        </span>
        <span>Certified by FCC</span>
      </div>
      <span aria-hidden="true" className="h-4.5 w-px bg-current/70" />
      <div className="gap-xs text-tiny flex items-center">
        <span className="flex shrink-0 items-center justify-center size-5">
          <LockIcon className="w-full" />
        </span>
        <span>100% Private</span>
      </div>
    </div>
  );
}
