import Image from "next/image";

import { cn } from "@/lib/utils";

type FolioImageProps = {
  src: string;
  alt: string;
  focus?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  eager?: boolean;
  sizes?: string;
  vignette?: boolean;
};

export function FolioImage({
  src,
  alt,
  focus = "50% 42%",
  className,
  imageClassName,
  priority = false,
  eager = false,
  sizes = "(min-width: 1024px) 70vw, 100vw",
  vignette = true,
}: FolioImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-ink", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        {...(priority ? {} : { loading: eager ? "eager" : "lazy" })}
        quality={93}
        sizes={sizes}
        className={cn(
          "object-cover transition-[filter] duration-700 ease-out motion-safe:hover:brightness-[1.06]",
          imageClassName,
        )}
        style={{ objectPosition: focus }}
      />
      {vignette ? (
        <div className="folio-vignette pointer-events-none absolute inset-0" />
      ) : null}
    </div>
  );
}
