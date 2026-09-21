import Link from "next/link";
import { Logo } from "@/components/orbital/ui";

const columns = [
  {
    title: "ROUTES",
    links: [
      { label: "Missions", href: "/missions" },
      { label: "Capsules", href: "/capsules" },
      { label: "Preflight", href: "/preflight" },
      { label: "Manifest", href: "/manifest" },
      { label: "Request", href: "/request" },
    ],
  },
  {
    title: "SITES",
    links: [
      { label: "ARAL", href: "/manifest#sites" },
      { label: "RIDGE", href: "/manifest#sites" },
      { label: "FJORD", href: "/manifest#sites" },
    ],
  },
  {
    title: "NEXT WINDOW",
    links: [
      { label: "ORB-187", href: "/manifest" },
      { label: "28 окт 2026", href: "/manifest" },
      { label: "RIDGE · VEIL", href: "/capsules" },
      { label: "T− 18:42:06", href: "/manifest" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="px-5 pb-8 pt-4 min-[1100px]:px-16 min-[1100px]:pb-9 min-[1100px]:pt-9">
      <div className="border-t border-cobalt/30 pt-4 min-[1100px]:hidden">
        <p className="font-display text-sm font-bold tracking-[0.12em]">ORBITAL</p>
        <p className="mt-3 font-telemetry text-[11px] tracking-[0.08em] text-cobalt">
          <Link href="/manifest#sites" className="hover:text-ink">ARAL</Link>
          {"  ·  "}
          <Link href="/manifest#sites" className="hover:text-ink">RIDGE</Link>
          {"  ·  "}
          <Link href="/manifest#sites" className="hover:text-ink">FJORD</Link>
        </p>
      </div>
      <div className="luminous-rule hidden min-[1100px]:block" />
      <div className="mt-9 hidden gap-10 min-[1100px]:grid min-[1100px]:grid-cols-[1.1fr_0.7fr_0.6fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-7 w-7" />
            <span className="font-display text-base font-bold tracking-[0.12em]">ORBITAL</span>
          </Link>
          <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-indigo">
            Частный выход за линию Кармана.
            <br />
            Место в капсуле подтверждается после медицинского допуска.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="font-telemetry text-[11px] font-semibold uppercase tracking-[0.14em] text-cobalt">
              {column.title}
            </p>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`font-body text-base ${column.title === "NEXT WINDOW" ? "text-indigo" : "text-ink"} hover:text-cobalt`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 hidden h-px bg-cobalt/25 min-[1100px]:block" />
      <p className="mt-4 hidden font-telemetry text-[11px] tracking-[0.08em] text-mute min-[1100px]:block">
        © ORBITAL    ·    DOSSIER DESK    ·    НЕ ПУБЛИЧНАЯ ОФЕРТА ДО ДОПУСКА
      </p>
    </footer>
  );
}
