import Image from "next/image";

import { cn } from "@/lib/utils";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  position?: string;
  priority?: boolean;
};

export function CoverImage({
  src,
  alt,
  className,
  position = "center",
  priority = false,
}: CoverImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-void", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        loading={priority ? undefined : "eager"}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
