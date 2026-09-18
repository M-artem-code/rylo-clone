import { LiveTranscribeIcon } from "@/components/icons";
import { AccentCta } from "@/components/ui/CtaButton";

export function LiveTranscribeSection() {
  return (
    <section
      data-surface="dark"
      data-section-parallax=""
      className="relative overflow-clip z-2 rounded-t-huge -mb-band-overlap pt-section-main"
    >
      <img
        src="/images/prod-cta-background.CQJ-AY5P_Z17gijI.avif"
        alt=""
        aria-hidden="true"
        loading="eager"
        width={2500}
        height={2516}
        className="pointer-events-none absolute z-0 w-full object-cover inset-x-0 bottom-0 min-h-full"
      />
      <div
        aria-hidden="true"
        data-path-draw="true"
        className="pointer-events-none absolute inset-x-0 z-1 bottom-[25%] flex justify-center sm:bottom-[28%] md:bottom-[32%]"
      >
        <svg viewBox="0 0 1440 179" preserveAspectRatio="none" fill="none" className="aspect-1440/179 w-screen">
          <path
            data-path-line=""
            d="M-40 45.8475C353.159 470.339 886.656 -313.339 1493 159.607"
            stroke="var(--marketing-accent)"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />
          <path
            data-path-line=""
            d="M-40 97.7316C353.159 17.6847 886.656 165.464 1493 76.2798"
            stroke="var(--marketing-light)"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="container-site gap-4xl z-2 flex flex-col">
        <header className="w-full">
          <div className="text-display gap-[0.5em] flex flex-col flex-wrap md:flex-row md:items-center">
            <span className="bg-accent rounded-medium text-page shadow-small flex size-[1em] shrink-0 items-center justify-center md:size-[0.9em]">
              <LiveTranscribeIcon className="size-full" />
            </span>
            <h2 className="text-trim text-balance">Live Transcribe</h2>
          </div>
          <p className="text-large text-trim text-ink/70 mt-3xl max-w-[45ch] text-pretty">
            Use Rylo Live Transcribe to caption the world around you. In-person interactions just got a whole lot better.
          </p>
          <div className="mt-xl inline-flex">
            <AccentCta href="/live-transcribe" label="Learn more" srOnly="Learn more about Live Transcribe" />
          </div>
        </header>
        <div className="relative mx-auto aspect-square w-full max-w-300">
          <img
            src="/images/prod-cta-foreground.DqiXt8Fm_Z4hWeD.avif"
            alt="Middle-aged man in orange sweater shows a smartphone to a woman in a cream sweater and jeans as they engage in conversation."
            loading="lazy"
            width={1920}
            height={1920}
            className="absolute inset-0 size-full object-cover"
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
