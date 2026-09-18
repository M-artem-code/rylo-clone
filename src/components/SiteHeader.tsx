import Link from "next/link";

const links = [
  ["Products", "/download"],
  ["Live Transcribe", "/live-transcribe"],
  ["Sidekick", "/sidekick"],
  ["Sign", "/sign"],
  ["Hearing Test", "/hearing-test"],
  ["About", "/about"],
  ["Blog", "/blog"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Rylo home">
        rylo<span className="brand-dot">.</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="header-cta" href="/contact">Talk to us <span aria-hidden="true">↗</span></Link>
    </header>
  );
}

export const Arrow = () => <span aria-hidden="true">↗</span>;
