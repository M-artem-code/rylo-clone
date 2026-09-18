import { StarIcon, PersonIcon } from "@/components/icons";
import { reviews } from "@/data/testimonials";

function ReviewCard({ quote, name }: { quote: string; name: string }) {
  return (
    <li className="bg-card rounded-large gap-4xl p-xl mx-0.5 flex w-72 shrink-0 flex-col justify-between sm:w-80 lg:w-100">
      <p className="text-h4 text-trim">{quote}</p>
      <div className="gap-md text-accent-secondary flex flex-wrap items-center">
        <span aria-hidden="true" className="flex w-21 shrink-0 justify-between">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="size-4 shrink-0" />
          ))}
        </span>
        <p className="text-main text-trim">{name}</p>
      </div>
    </li>
  );
}

function ReviewMarquee({
  items,
  direction,
}: {
  items: typeof reviews;
  direction: "left" | "right";
}) {
  return (
    <div data-scroll-marquee="" data-scroll-marquee-direction={direction} className="relative flex overflow-hidden w-screen">
      <div data-scroll-marquee-track="" className="flex" style={{ marginLeft: "-5%", width: "110%" }}>
        <ul
          data-scroll-marquee-list=""
          aria-label="App Store reviews"
          className="flex flex-nowrap items-stretch shrink-0 w-max"
        >
          {items.map((rev) => (
            <ReviewCard key={`${direction}-${rev.id}`} quote={rev.quote} name={rev.name} />
          ))}
        </ul>
        <ul
          data-scroll-marquee-list=""
          aria-hidden="true"
          className="flex flex-nowrap items-stretch shrink-0 w-max"
        >
          {items.map((rev) => (
            <ReviewCard key={`${direction}-dup-${rev.id}`} quote={rev.quote} name={rev.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const rowOne = reviews.filter((_, i) => i % 2 === 0);
  const rowTwo = reviews.filter((_, i) => i % 2 === 1);

  return (
    <section
      data-surface="dark"
      data-section-parallax=""
      className="relative overflow-clip z-2 rounded-t-huge -mb-band-overlap pt-section-main pb-section-lg"
    >
      <div className="container-site flex flex-col">
        <h2 className="text-display text-trim mb-section-sm max-w-[20ch] text-balance">
          Professionally recommended. Personally loved.
        </h2>
        <div className="relative">
          <div
            aria-hidden="true"
            data-path-draw="true"
            className="pointer-events-none absolute inset-x-0 z-1 bottom-[15%] flex justify-center lg:bottom-[10%]"
          >
            <svg viewBox="0 0 1616 261" preserveAspectRatio="none" fill="none" className="aspect-1616/261 w-[110vw]">
              <path
                data-path-line=""
                d="M1.83691 260.026C325.337 -491.474 1281.84 703.527 1613.34 56.3069"
                stroke="color-mix(in srgb, var(--marketing-light) 15%, transparent)"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          <div className="rounded-large relative flex flex-col justify-end overflow-clip">
            <img
              src="/images/review-card-background.BtV5Zgng_19sRub.avif"
              alt=""
              aria-hidden="true"
              loading="eager"
              width={2500}
              height={2250}
              className="pointer-events-none absolute z-0 w-full object-cover inset-x-0 bottom-0 min-h-full"
            />
            <div className="pt-xl px-xl z-2 sm:pt-3xl sm:px-3xl lg:absolute lg:top-3xl lg:left-3xl lg:p-0">
              <p className="text-h3 text-trim mb-xl max-w-[25ch] text-balance">
                “I’ve seen countless patients grow more confident with themselves and in their relationships since using the Rylo app.”
              </p>
              <div className="gap-md flex items-center">
                <span className="bg-accent text-card shadow-small size-3xl flex shrink-0 items-center justify-center rounded-full">
                  <PersonIcon className="size-lg" />
                </span>
                <div className="gap-xs flex flex-col">
                  <p className="text-h4 text-trim">Dr. Nissen</p>
                  <p className="text-small text-trim">Associated Audiologists</p>
                </div>
              </div>
            </div>
            <div className="relative z-1 mx-auto aspect-square w-full max-w-256">
              <img
                src="/images/review-foreground.dkrTfeEF_Z8BHYM.avif"
                alt="Smiling middle-aged man with short gray hair wearing round glasses and a light blue shirt."
                loading="lazy"
                width={2445}
                height={2445}
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-1 flex w-full flex-col items-center gap-1">
          <ReviewMarquee items={rowOne} direction="left" />
          <ReviewMarquee items={rowTwo} direction="right" />
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
