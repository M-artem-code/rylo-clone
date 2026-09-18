import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { articles } from "@/data/conversations";

export function ConversationsSection() {
  return (
    <section
      data-surface="light"
      data-section-parallax=""
      className="relative overflow-clip z-2 rounded-t-huge -mb-band-overlap bg-card pt-section-sm pb-section-lg"
    >
      <div className="container-site gap-section-sm flex flex-col">
        <header>
          <h2 className="text-display text-trim max-w-[20ch] text-balance">Conversations</h2>
          <p className="text-large text-trim mt-4xl max-w-[60ch]">Read the latest from our community</p>
        </header>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
          {articles.map((art) => (
            <Link
              key={art.slug}
              href={`/post/${art.slug}`}
              aria-labelledby={`blog-card-${art.slug}`}
              className="group bg-page rounded-large focus-visible:ring-ink/40 relative flex h-full w-full flex-col p-1 focus-visible:ring-2 focus-visible:outline-none"
            >
              <div className="relative aspect-3/2 w-full transition-[padding] duration-600 group-hover:p-1 motion-reduce:transition-none">
                <div className="absolute top-3 left-3 z-1 lg:top-5 lg:left-5">
                  <span className="bg-accent-secondary text-ink-fixed text-main text-trim border-page/30 rounded-full border p-sm">
                    {art.category}
                  </span>
                </div>
                <div className="relative size-full overflow-hidden rounded-[clamp(1.25rem,0.9643rem_+_1.4286vw,2.25rem)]">
                  <img
                    src={art.image}
                    alt={art.alt}
                    loading="lazy"
                    className="size-full object-cover transition-[scale] duration-600 group-hover:scale-110 motion-reduce:transition-none"
                  />
                </div>
              </div>
              <div className="gap-3xl py-xl px-lg flex flex-1 flex-col justify-between lg:py-2xl lg:px-xl">
                <div>
                  <p id={`blog-card-${art.slug}`} className="text-h3 text-trim mb-md text-balance">
                    {art.title}
                  </p>
                  <p className="text-main text-ink/70 line-clamp-3">{art.excerpt}</p>
                </div>
                <div className="gap-2xl flex w-full items-center justify-between">
                  <p className="text-footnote text-trim text-ink/70">{art.date}</p>
                  <div aria-hidden="true" className="gap-xs flex items-center">
                    <span className="text-main leading-[0.95]">Read</span>
                    <span className="bg-ink text-page group-hover:bg-accent group-hover:text-ink-fixed flex size-7 items-center justify-center rounded-full transition-colors duration-300 motion-reduce:transition-none">
                      <ArrowRightIcon className="w-[60%]" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
