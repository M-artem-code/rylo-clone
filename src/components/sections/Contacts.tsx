import { ContactForm } from "@/components/sections/ContactForm";
import { Logo } from "@/components/site/Logo";
import { site } from "@/data/site";

type ContactsProps = {
  content: typeof site.contacts;
  wordmark: string;
  footer: typeof site.footer;
};

export function Contacts({ content, wordmark, footer }: ContactsProps) {
  return (
    <section
      id="contacts"
      className="flex min-h-[1080px] flex-col bg-tv-bg px-6 pt-[122px] xl:px-24"
    >
      <p className="mb-3 flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] text-tv-gold uppercase">
        <span className="size-[7px] rounded-full bg-tv-gold" aria-hidden />
        {content.eyebrow}
      </p>
      <h2 className="font-display text-[36px] font-medium text-tv-text md:text-[40px]">
        {content.title}
      </h2>
      <p className="mt-4 text-[17px] text-tv-muted">{content.subtitle}</p>
      <div className="mt-12 grid flex-1 gap-6 xl:grid-cols-[1fr_1.15fr]">
        <div className="rounded-[20px] border border-white/[0.09] bg-tv-surface px-9 py-9">
          <Logo wordmark={wordmark} markClassName="size-10 rounded-[12px]" />
          <p className="mt-6 text-[15px] text-tv-muted">{content.intro}</p>
          <dl className="mt-10">
            {content.rows.map((row, index) => (
              <div
                key={row.label}
                className={
                  index < content.rows.length - 1
                    ? "border-b border-white/[0.06] py-4 first:pt-0"
                    : "py-4 first:pt-0"
                }
              >
                <dt className="text-[12px] text-tv-muted">{row.label}</dt>
                <dd className="mt-2 text-[18px] font-semibold text-tv-text">
                  {row.href ? (
                    <a href={row.href} className="hover:text-tv-gold">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-[20px] border border-white/[0.09] bg-tv-surface px-9 py-9">
          <ContactForm content={content.form} />
        </div>
      </div>
      <div className="mt-12 flex items-center justify-between border-t border-white/[0.06] py-8">
        <p className="text-[12px] font-medium tracking-[0.16em] text-tv-muted">
          {footer.wordmark}
        </p>
        <p className="text-[12px] text-tv-muted-2">{footer.tagline}</p>
      </div>
    </section>
  );
}
