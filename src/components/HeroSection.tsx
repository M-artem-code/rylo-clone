import { AudioWaveDotsIcon } from "@/components/icons";
import { AccentCta } from "@/components/ui/CtaButton";
import { RatingBadge } from "@/components/ui/RatingBadge";

export function HeroSection() {
  return (
    <section
      id="captioning"
      data-surface="dark"
      data-section-parallax=""
      className="-mb-band-overlap relative z-2 flex min-h-[110vh] flex-col overflow-clip"
    >
      <img
        src="/images/rylo-hero-background.BlPcKf6v_1sUPOK.avif"
        alt=""
        aria-hidden="true"
        loading="eager"
        width={2758}
        height={2298}
        className="pointer-events-none absolute z-0 w-full object-cover inset-x-0 bottom-0 min-h-full object-bottom"
      />

      <div aria-hidden="true" data-path-draw="hero" className="pointer-events-none absolute inset-x-0 z-1 bottom-[20%]">
        <svg viewBox="0 0 1440 504" preserveAspectRatio="none" fill="none" className="aspect-1440/504 w-full">
          <path
            data-path-line=""
            data-path-lead="180"
            d="M-230.19 518.39L-51 501.267C48.7138 492.33 351 296.665 767.5 477.925C1132.85 636.927 1272 -224.075 1698.5 59.9252"
            stroke="color-mix(in srgb, var(--marketing-light) 15%, transparent)"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div
          data-path-bubble=""
          className="text-ink border-ink/10 rounded-small md:rounded-regular gap-xs px-sm py-xs md:px-md md:py-sm lg:px-lg lg:py-md absolute flex -translate-x-1/2 -translate-y-1/2 items-center border-2 bg-white/5 text-small font-semibold whitespace-nowrap backdrop-blur-[20px] top-[83.2%] left-[16.2%]"
        >
          <AudioWaveDotsIcon className="text-accent aspect-40/29 w-2xl shrink-0" />
          <span>Good morning</span>
        </div>
        <div
          data-path-bubble=""
          className="text-ink border-ink/10 rounded-small md:rounded-regular gap-xs px-sm py-xs md:px-md md:py-sm lg:px-lg lg:py-md absolute flex -translate-x-1/2 -translate-y-1/2 items-center border-2 bg-white/5 text-small font-semibold whitespace-nowrap backdrop-blur-[20px] top-[45.9%] left-[83.5%]"
        >
          <AudioWaveDotsIcon className="text-accent aspect-40/29 w-2xl shrink-0" />
          <span>It’s so wonderful to talk</span>
        </div>
      </div>

      <div className="container-site z-10 flex flex-1 flex-col justify-between gap-3xl pt-page-top pb-16 md:pb-20">
        <div className="grid items-end gap-x-2xl gap-y-3xl md:grid-cols-12">
          <h1 data-animate="page-once" className="text-h1 text-balance md:col-span-7 motion-safe:animate-page-entrance">
            The completely free call captioning and live transcription app
          </h1>
          <div
            data-animate="page-once"
            className="flex flex-col items-start gap-lg md:col-span-5 md:col-start-8 motion-safe:animate-page-entrance motion-safe:[animation-delay:0.1s]"
          >
            <RatingBadge />
            <p className="text-main text-ink max-w-96">Caption your conversations and never miss a word</p>
            <div data-modal-target="app-download" data-app-download-cta="true" className="contents">
              <AccentCta href="/download" label="Download for free" />
            </div>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-208">
          <img
            src="/images/rylo-hero-foreground-2.BG7O6dg4_ZpnWiN.avif"
            alt="Smiling older man with gray hair and beard wearing round glasses and orange sweater looking at a green smartphone."
            width={1440}
            height={1440}
            loading="eager"
            className="absolute inset-x-0 top-0 h-[120%] w-full object-cover object-center"
          />
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
