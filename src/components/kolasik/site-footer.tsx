import Link from "next/link";
import {
  contacts,
  footerCopyright,
  footerLegal,
  navItems,
  tagline,
  wordmark,
} from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="wordmark">{wordmark}</div>
          <p className="footer-tag">{tagline}</p>
        </div>
        <nav className="footer-nav">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-contacts">
          <div>
            <span>Phone</span>
            {contacts.phone}
          </div>
          <div>
            <span>Email</span>
            {contacts.email}
          </div>
          <div>
            <span>Telegram</span>
            {contacts.telegram}
          </div>
        </div>
      </div>
      <div className="footer-base">
        <div>{footerLegal}</div>
        <div>{footerCopyright}</div>
      </div>
    </footer>
  );
}
