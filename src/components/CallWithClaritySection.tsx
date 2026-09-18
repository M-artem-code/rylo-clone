"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import {
  PhoneHandsetIcon,
  FeatureCaptionIcon,
  FeaturePhoneIcon,
  FeatureSpeechIcon,
  FeatureSettingsIcon,
  FeatureHistoryIcon,
  FeatureShapeIcon,
  FeatureQuickReplyIcon,
  FeatureCuesIcon,
  FeatureLanguageIcon,
  FeatureSpamIcon,
  FeatureDevicesIcon,
  CircleArrowIcon,
} from "@/components/icons";
import { AccentCta, RollingLabel } from "@/components/ui/CtaButton";
import { featureTabs, clarityFeatureCards } from "@/data/call-with-clarity";

const TAB_ICONS: Record<string, ReactNode> = {
  caption: <FeatureCaptionIcon className="size-full" />,
  phone: <FeaturePhoneIcon className="size-full" />,
  speech: <FeatureSpeechIcon className="size-full" />,
  settings: <FeatureSettingsIcon className="size-full" />,
  history: <FeatureHistoryIcon className="size-full" />,
};

const CARD_ICONS = [
  FeatureShapeIcon,
  FeatureQuickReplyIcon,
  FeatureCuesIcon,
  FeatureLanguageIcon,
  FeatureSpamIcon,
  FeatureDevicesIcon,
  FeatureSettingsIcon,
];

export function CallWithClaritySection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      data-surface="light"
      data-section-parallax=""
      className="relative overflow-clip z-2 rounded-t-huge -mb-band-overlap bg-card pt-section-main pb-section-lg"
    >
      <div className="container-site gap-section-sm flex flex-col">
        <header className="w-full">
          <div className="text-display gap-[0.5em] flex flex-col flex-wrap md:flex-row md:items-center">
            <span className="bg-accent rounded-medium text-page shadow-small flex size-[1em] shrink-0 items-center justify-center md:size-[0.9em]">
              <PhoneHandsetIcon className="size-full" />
            </span>
            <h2 className="text-trim max-w-[16ch] text-balance">
              Call <span className="text-ink/50">with clarity</span>
            </h2>
          </div>
          <p className="text-large text-trim text-ink/70 mt-3xl max-w-[45ch] text-pretty">
            Phone calls should feel simple, not stressful. With Rylo, you see every word as it is spoken so you can follow along.
          </p>
          <div data-modal-target="app-download" data-app-download-cta="true" className="mt-xl inline-flex">
            <AccentCta href="/download" label="Download the app" />
          </div>
        </header>

        <div className="flex flex-col gap-1">
          <div data-surface="dark" className="bg-card rounded-large relative flex flex-wrap overflow-clip">
            <video
              src="/videos/sky.mp4"
              poster="/images/features-sky-poster.C3gIlTJ2_1a8P4o.avif"
              loop
              muted
              playsInline
              autoPlay
              aria-hidden="true"
              className="absolute inset-0 size-full object-cover"
            />
            <span aria-hidden="true" className="bg-scrim absolute inset-0 z-1" />
            <div className="p-lg sm:p-xl lg:p-3xl relative z-2 w-full lg:flex-1">
              <div
                role="tablist"
                aria-orientation="vertical"
                aria-label="What Rylo does on a call"
                className="flex w-full flex-col justify-between md:max-w-[34rem]"
              >
                {featureTabs.map((tab, idx) => {
                  const isSelected = activeTab === idx;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      data-feature-tab="true"
                      id={`feature-tab-${idx}`}
                      aria-selected={isSelected}
                      aria-controls={`feature-panel-${idx}`}
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => setActiveTab(idx)}
                      className={`rounded-medium p-md md:p-lg lg:p-xl focus-visible:ring-ink/40 relative w-full overflow-clip border-4 text-left transition-[border-color,opacity] duration-[250ms] focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none ${
                        isSelected ? "border-hairline" : "border-transparent opacity-50"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`rounded-medium absolute inset-0 transition-[backdrop-filter] duration-200 ${isSelected ? "backdrop-blur-[20px]" : ""}`}
                      >
                        {isSelected ? (
                          <span className="animate-tab-dwell bg-ink-fixed/10 block size-full origin-left" />
                        ) : null}
                      </span>
                      <span className="gap-sm relative z-1 flex items-center">
                        <span className={`size-xl -mt-[0.2em] shrink-0 md:mt-0 ${isSelected ? "text-accent" : ""}`}>
                          <span aria-hidden="true" className="block [&>svg]:size-full size-full">
                            {TAB_ICONS[tab.iconName]}
                          </span>
                        </span>
                        <span className="text-h4 text-trim text-balance">{tab.title}</span>
                      </span>
                      <span
                        data-tab-detail="true"
                        className={`relative z-1 grid transition-[grid-template-rows] duration-400 motion-reduce:transition-none ${isSelected ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                      >
                        <span className="overflow-hidden">
                          <span className="text-main text-trim block pt-5 pb-3">{tab.description}</span>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="relative z-2 mx-auto w-full pb-section-main p-[clamp(4rem,2.3677rem+8.1614vw,9.713rem)] sm:w-4/5 lg:w-1/2 lg:pb-[clamp(4rem,2.3677rem+8.1614vw,9.713rem)]">
              <div className="relative mx-auto w-full aspect-365/692 max-w-120">
                {featureTabs.map((tab, idx) => {
                  const isSelected = activeTab === idx;
                  return (
                    <div
                      key={tab.id}
                      role="tabpanel"
                      id={`feature-panel-${idx}`}
                      aria-labelledby={`feature-tab-${idx}`}
                      aria-hidden={!isSelected}
                      className={`absolute inset-0 transition-opacity duration-300 motion-reduce:transition-none rounded-large outline-ink/30 overflow-hidden outline-4 outline-offset-4 ${
                        isSelected ? "opacity-100" : "invisible opacity-0"
                      }`}
                    >
                      <div aria-hidden="true" className="size-full bg-ink/40" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <ul
            role="list"
            className="grid gap-1 grid-cols-[repeat(auto-fit,minmax(min(max(20rem,(100%_-_4px)_/_2),100%),1fr))]"
          >
            {clarityFeatureCards.map((card, idx) => {
              const Icon = CARD_ICONS[idx];
              return (
                <li key={card.id} className="bg-page rounded-large gap-lg p-xl flex items-center">
                  <span className="size-xl text-accent flex shrink-0 items-center justify-center">
                    {Icon ? <Icon className="size-full" /> : null}
                  </span>
                  <div>
                    <h3 className="text-h4 text-trim mb-md text-balance">{card.title}</h3>
                    <p className="text-footnote text-trim text-ink/70 max-w-[60ch] text-pretty">{card.description}</p>
                  </div>
                </li>
              );
            })}
            <li className="flex">
              <Link
                href="/download"
                aria-label="Download the app"
                data-modal-target="app-download"
                data-app-download-cta="true"
                className="group rounded-large gap-lg p-xl focus-visible:ring-ink/40 relative flex w-full items-center focus-visible:ring-2 focus-visible:outline-none"
              >
                <span
                  aria-hidden="true"
                  className="rounded-large ease-cubic-button absolute inset-0 bg-white transition-[inset] duration-600 group-hover:inset-0.5 group-focus-visible:inset-0.5 motion-reduce:transition-none"
                />
                <span className="size-xl relative z-10 flex shrink-0 items-center justify-center rotate-90">
                  <CircleArrowIcon className="size-full" />
                </span>
                <RollingLabel text="Download the app" className="text-h4 leading-[1.3] whitespace-nowrap" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        aria-hidden="true"
        data-section-parallax-overlay=""
        className="pointer-events-none absolute inset-0 z-10 bg-black opacity-0"
      />
    </section>
  );
}
