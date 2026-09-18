import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top">
      <div><p className="footer-kicker">Better ways to hear.</p><p className="footer-title">Made for every conversation.</p></div>
      <Link className="footer-button" href="/contact">Get in touch ↗</Link>
    </div>
    <div className="footer-grid">
      <div><p className="footer-label">Explore</p><Link href="/download">Products</Link><Link href="/live-transcribe">Live Transcribe</Link><Link href="/sidekick">Sidekick</Link><Link href="/sign">Sign</Link></div>
      <div><p className="footer-label">Company</p><Link href="/about">About</Link><Link href="/careers">Careers</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link></div>
      <div><p className="footer-label">Follow</p><a href="https://instagram.com" rel="noreferrer">Instagram ↗</a><a href="https://linkedin.com" rel="noreferrer">LinkedIn ↗</a></div>
      <div className="footer-mark">rylo<span className="brand-dot">.</span></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Rylo</span><span>Made with care for the Deaf and hard-of-hearing community.</span><span>Privacy · Terms</span></div>
  </footer>;
}
