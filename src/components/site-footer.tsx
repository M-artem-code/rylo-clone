import { Wordmark } from "@/components/wordmark";
import { footerContactsLeft, footerContactsRight, site } from "@/data/site";

function ContactList({ rows }: { rows: typeof footerContactsLeft }) {
  return (
    <dl className="footer__list">
      {rows.map((row) => (
        <div className="footer__row" key={row.label}>
          <dt>{row.label}</dt>
          <dd>
            {row.href ? (
              <a href={row.href}>{row.value}</a>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <Wordmark />
            <p className="footer__tag">{site.tagline}</p>
          </div>
          <ContactList rows={footerContactsLeft} />
          <ContactList rows={footerContactsRight} />
        </div>
        <div className="footer__bottom">
          <span className="mono">{site.copyright}</span>
          <span className="mono">
            {site.city} · {site.hours} · Студия
          </span>
        </div>
      </div>
    </footer>
  );
}
