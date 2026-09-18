import { FccIcon } from "@/components/icons";
import { pressLogos } from "@/data/seen-on";

function LogoList({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      data-css-marquee-list=""
      aria-label="Seen on"
      aria-hidden={hidden ? true : undefined}
      className="flex items-center justify-center"
      style={{ animationDuration: "22.4s" }}
    >
      {pressLogos.map((logo) => (
        <li key={logo.id} className="shrink-0 sm:px-2 md:px-4 lg:px-8">
          <img
            src={logo.image}
            alt={`${logo.name} logo`}
            width={160}
            height={107}
            loading="lazy"
            className="h-auto w-30 sm:w-34 lg:w-40"
          />
        </li>
      ))}
    </ul>
  );
}

export function SeenOnSection() {
  return (
    <section
      data-surface="light"
      data-section-parallax=""
      className="relative overflow-clip z-2 rounded-t-huge -mb-band-overlap pt-section-sm pb-section-lg"
    >
      <div className="container-site gap-section-sm flex flex-col">
        <div className="flex flex-col gap-1">
          <div className="border-card rounded-large flex flex-col border-2 md:flex-row">
            <div className="border-card px-2xl py-lg flex shrink-0 flex-col items-center justify-center border-b-2 text-center md:border-r-2 md:border-b-0 md:py-2xl">
              <p className="text-h3 text-trim">Seen on</p>
            </div>
            <div data-css-marquee="" data-css-marquee-copies="3" className="relative flex w-full overflow-hidden">
              <LogoList />
              <LogoList hidden />
              <LogoList hidden />
              <LogoList hidden />
            </div>
          </div>
          <div data-surface="light" className="rounded-large gap-md px-lg py-xl flex flex-wrap items-center justify-center bg-white">
            <span className="w-3xl block">
              <FccIcon className="size-3xl inline scale-[83.333%] align-baseline" />
            </span>
            <p className="text-h4 text-trim max-w-[60ch] text-center">
              Certified by the FCC and offered at no cost to individuals with hearing loss
            </p>
          </div>
        </div>

        <div className="gap-section-sm flex flex-col">
          <div className="gap-4xl flex flex-col">
            <h2 className="text-display text-trim max-w-[20ch] text-balance">Communication without confusion</h2>
            <p className="text-large text-trim text-ink/70 max-w-[68ch] text-pretty">
              That means no gaps, dropped words, or thoughts lost in translation. Rylo exists so the Deaf and hard of hearing community can connect more fully with family, friends, and the world.
            </p>
          </div>
          <div data-card-reveal="" className="flex h-112 *:w-1/2">
            <div
              data-card-reveal="left"
              data-surface="dark"
              className="rounded-large px-lg py-2xl relative flex flex-col items-center overflow-clip text-center bg-card"
            >
              <h3 className="text-h4 text-trim">They talk</h3>
              <div data-css-marquee-sync="" className="relative z-2 flex w-full flex-1 items-center">
                <div data-css-marquee-sync-list="" className="relative flex items-center justify-center">
                  <p className="text-nav text-trim rounded-regular p-lg">Hey love! What time are we meeting today?</p>
                </div>
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute bottom-[-2%] left-0 flex h-full w-full">
                <div data-card-reveal-bg="" className="flex w-full shrink-0 items-end">
                  <div className="aspect-1232/294 w-[200%] shrink-0 text-ink/15">
                    <svg viewBox="0 0 1232 294" fill="none" className="w-full">
                      <defs>
                        <pattern id="rylo-wave-stripes-tile" patternUnits="userSpaceOnUse" x="1.5" width="11.5" height="294">
                          <rect width="4" height="294" fill="currentColor" />
                        </pattern>
                        <mask id="rylo-wave-stripes-shape">
                          <path d="M66.7031 155.561C141.41 94.0935 236.795 -56.9028 377.538 22.604C518.281 102.111 531.621 228.386 692.375 189.635L824.446 142.199V142.335C860.688 127.191 958.919 105.989 1061.91 142.335C1147.24 172.45 1190.66 195.519 1232 189.751V293.999H824.446V293.863H0V189.615C21.027 186.681 41.5146 176.286 66.7031 155.561Z" fill="#fff" />
                        </mask>
                      </defs>
                      <rect width="1232" height="294" fill="url(#rylo-wave-stripes-tile)" mask="url(#rylo-wave-stripes-shape)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-card-reveal="right"
              className="rounded-large px-lg py-2xl relative flex flex-col items-center overflow-clip text-center bg-accent"
            >
              <h3 className="text-h4 text-trim">You read</h3>
              <div data-css-marquee-sync="" aria-hidden="true" className="relative z-2 flex w-full flex-1 items-center">
                <div data-css-marquee-sync-list="" className="relative flex items-center justify-center">
                  <p className="text-nav text-trim rounded-regular p-lg bg-card outline-page/50 outline-4">
                    Hey love! What time are we meeting today?
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute bottom-[-2%] left-0 flex h-full w-full">
                <div data-card-reveal-bg="" className="flex w-full shrink-0 items-end">
                  <div className="aspect-1232/294 w-[200%] shrink-0 text-page/15">
                    <svg viewBox="0 0 1232 294" fill="none" className="w-full">
                      <path d="M895.091 1.20988C925.457 -2.78683 958.242 2.79007 993.773 22.8622C1051.3 55.3617 1087.68 95.6662 1121.19 129.155C1154.75 162.695 1185.34 189.29 1231.52 195.482V199.5C1183.91 193.116 1151.97 165.563 1118.37 131.984C1084.71 98.355 1048.76 58.5173 991.807 26.3456C956.968 6.66472 925.05 1.30131 895.613 5.1757C866.137 9.05532 838.986 22.2186 813.755 39.8554C788.518 57.4962 765.296 79.5435 743.659 101.091C722.077 122.583 701.999 143.658 683.226 159.104C658.565 179.394 638.178 190.013 617.252 193.336V193.492L615.528 193.732C594.394 196.681 572.845 192.235 546.077 183.398C519.419 174.598 486.968 161.211 444.494 146.222C342.063 110.072 244.35 131.187 208.47 146.181L205.698 147.339V147.042L76.3027 193.518L76.2012 193.555L76.0957 193.58C46.3832 200.742 21.5772 202.323 0 199.579V195.611C20.9694 198.278 45.7488 196.77 75.0537 189.716L209.698 141.355V141.371C248.321 126.2 344.79 106.792 445.826 142.449C488.683 157.574 520.61 170.778 547.331 179.6C573.186 188.135 593.585 192.346 613.252 189.993V189.873L614.976 189.633C635.495 186.77 655.645 176.618 680.685 156.016C699.265 140.728 719.125 119.878 740.837 98.2558C762.494 76.6883 785.923 54.4301 811.464 36.5771C837.01 18.7202 864.764 5.20145 895.091 1.20988Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
