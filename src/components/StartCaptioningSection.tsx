import { AudioWaveDotsIcon } from "@/components/icons";
import { AccentCta } from "@/components/ui/CtaButton";
import { RatingBadge } from "@/components/ui/RatingBadge";

export function StartCaptioningSection() {
  return (
    <section data-surface="dark" className="relative overflow-clip z-2 rounded-huge pt-section-main">
      <img
        src="/images/cta-background.qn7Z5g_h_LDU9H.avif"
        alt=""
        aria-hidden="true"
        loading="eager"
        width={2500}
        height={3159}
        className="pointer-events-none absolute z-0 w-full object-cover inset-x-0 bottom-0 min-h-full"
      />
      <div aria-hidden="true" data-path-draw="true" className="pointer-events-none absolute inset-x-0 z-1 bottom-[30%]">
        <svg viewBox="0 0 1440 504" preserveAspectRatio="none" fill="none" className="aspect-1440/504 w-full">
          <path
            data-path-line=""
            data-path-lead="180"
            d="M-50 450 C 300 480, 500 120, 850 150 C 1100 170, 1250 380, 1500 350"
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
          <span>Hi, love! How are you?</span>
        </div>
      </div>
      <div className="container-site z-2 flex flex-col">
        <div>
          <RatingBadge className="mb-xl md:mb-3xl" />
          <h2 className="text-display text-trim mb-4xl max-w-[20ch] text-balance">Start captioning</h2>
          <p className="text-large text-trim mb-xl max-w-[38ch] text-pretty">
            The completely free call captioning app making it easy to communicate with anyone, anywhere.
          </p>
          <div data-modal-target="app-download" data-app-download-cta="true" className="inline-flex">
            <AccentCta href="/download" label="Download for free" />
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-288">
          <img
            src="/images/cta-couple-phone.DDfwRSnv_Z1Q42Ao.avif"
            alt="Smiling woman in an orange knit sweater and clear-framed glasses, reading captions on her phone."
            loading="lazy"
            width={2000}
            height={2000}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
