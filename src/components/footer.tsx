import type { ReactNode } from "react";
import Link from "next/link";
import {
  RyloLogo,
  PhoneHandsetIcon,
  LiveTranscribeIcon,
  SidekickIcon,
  SignIcon,
  TwitterXIcon,
  LinkedInIcon,
  TikTokIcon,
  InstagramIcon,
  FacebookIcon,
  PrivacyChoicesIcon,
} from "@/components/icons";
import { footerFeatures, footerColumns, legalLinks, socialLinks } from "@/data/navigation";

const FEATURE_ICONS: Record<string, ReactNode> = {
  PhoneHandsetIcon: <PhoneHandsetIcon className="w-full" />,
  LiveTranscribeIcon: <LiveTranscribeIcon className="w-full" />,
  SidekickIcon: <SidekickIcon className="w-full" />,
  SignIcon: <SignIcon className="w-full" />,
};

const SOCIAL_ICONS: Record<string, ReactNode> = {
  TwitterXIcon: <TwitterXIcon className="size-lg" />,
  LinkedInIcon: <LinkedInIcon className="size-lg" />,
  TikTokIcon: <TikTokIcon className="size-lg" />,
  InstagramIcon: <InstagramIcon className="size-lg" />,
  FacebookIcon: <FacebookIcon className="size-lg" />,
};

export function SiteFooter() {
  return (
    <footer data-surface="dark" data-footer-parallax="" className="-mt-band-overlap relative overflow-hidden">
      <div
        data-footer-parallax-inner=""
        className="container-site flex flex-col gap-section-sm pt-section-lg pb-section-sm"
        style={{ transform: "translate(0%, -25%)" }}
      >
        <ul role="list" className="grid w-full grid-cols-1 gap-1 @2xl:grid-cols-2">
          {footerFeatures.map((feat) => (
            <li
              key={feat.title}
              className="rounded-large bg-card transition-[background-color,color] duration-300 ease-cubic-default motion-reduce:transition-none hover:bg-ink hover:text-page"
            >
              <Link
                href={feat.href}
                className="flex h-full items-center gap-md rounded-large px-2xl py-xl focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"
              >
                <span className="flex size-3xl shrink-0 items-center justify-center text-accent">
                  {FEATURE_ICONS[feat.icon]}
                </span>
                <span className="text-h3 text-trim min-w-0">{feat.title}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 gap-x-gutter gap-y-4xl md:grid-cols-3">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col">
              <h2 className="text-h6 text-trim mb-lg uppercase opacity-50">{col.title}</h2>
              <ul role="list" className="flex flex-col items-start">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a
                        className="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        className="text-h3 text-trim rounded-small py-sm transition-[padding,background-color,color] duration-600 ease-cubic-default motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none hover:bg-card hover:px-sm hover:text-accent"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-full">
          <RyloLogo className="w-full" />
        </div>

        <div>
          <div className="mb-lg flex flex-wrap items-center justify-between gap-x-2xl gap-y-lg">
            <div className="flex flex-wrap items-center gap-lg">
              <p className="text-footnote text-trim">
                © <span data-current-year="">2026</span> Rylo. All rights reserved.
              </p>
              <ul role="list" className="group flex flex-wrap items-center gap-lg">
                {legalLinks.map((item) => (
                  <li
                    key={item.label}
                    className="flex transition-opacity duration-300 ease-[ease] motion-reduce:transition-none group-has-[:hover]:not-hover:opacity-50"
                  >
                    {item.isExternal ? (
                      <a
                        className="text-footnote rounded-small -my-2 inline-flex items-center gap-xs py-2 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-trim">{item.label}</span>
                      </a>
                    ) : (
                      <Link
                        className="text-footnote rounded-small -my-2 inline-flex items-center gap-xs py-2 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"
                        href={item.href}
                        {...(item.label === "Your Privacy Choices" ? { "data-cookie-settings": "" } : {})}
                      >
                        <span className="text-trim">{item.label}</span>
                        {item.label === "Your Privacy Choices" ? <PrivacyChoicesIcon /> : null}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <ul role="list" className="flex flex-wrap gap-md">
              {socialLinks.map((social) => (
                <li key={social.platform}>
                  <a
                    className="-m-2.5 flex items-center justify-center rounded-small p-2.5 opacity-50 transition-opacity duration-300 ease-[ease] motion-reduce:transition-none hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Rylo on ${social.platform}`}
                  >
                    {SOCIAL_ICONS[social.iconName]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-footnote text-trim max-w-[150ch] opacity-50">
            FEDERAL LAW PROHIBITS ANYONE BUT REGISTERED USERS WITH HEARING LOSS FROM USING INTERNET PROTOCOL (IP) CAPTIONED TELEPHONES WITH THE CAPTIONS TURNED ON. There is a cost for each minute of captions generated, paid from a federally administered fund. There are also eligibility requirements and a cost, paid by a federally administered fund for each minute of IP Relay service. Emergency calling through Rylo works similar to, but not the same as, calling 911 directly through a landline. It is important to keep your Rylo Registered Location updated.
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        data-footer-parallax-dark=""
        className="bg-footer-dim pointer-events-none absolute inset-0 opacity-0"
        style={{ opacity: 0.5 }}
      />
    </footer>
  );
}
