import Link from "next/link";

import { routes, site } from "@/data/site";

export function SiteMeta({ right }: { right: string }) {
  return (
    <footer className="flex items-center justify-between px-6 py-6 md:px-12">
      <p className="font-mono text-[10px] tracking-[0.12em] text-dim">
        {site.coordinates}
      </p>
      <p className="font-mono text-[10px] tracking-[0.12em] text-dim">
        {right.startsWith("Home") ? (
          <>
            Home  ·  Atmosphere  ·{" "}
            <Link href={routes.services} className="hover:text-milk">
              Services
            </Link>
          </>
        ) : (
          right
        )}
      </p>
    </footer>
  );
}
