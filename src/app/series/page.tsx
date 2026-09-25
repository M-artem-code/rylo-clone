import { FolioImage } from "@/components/arcana/folio-image";
import { seriesPage } from "@/data/series";

export default function SeriesPage() {
  const first = seriesPage.items[0];
  const second = seriesPage.items[1];
  const third = seriesPage.items[2];

  return (
    <main className="px-6 py-10 md:px-14 md:py-12">
      <p className="folio-track-mark text-[11px] text-mercury">{seriesPage.mark}</p>
      <h1 className="folio-reveal mt-4 font-serif text-[clamp(36px,4vw,52px)] leading-tight text-bone">
        {seriesPage.title}
      </h1>
      <p className="mt-5 max-w-[40rem] text-[14px] text-bone-soft">{seriesPage.lead}</p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <article className="relative min-h-[70vw] lg:min-h-[1240px]">
          <FolioImage
            src={first.image}
            alt={first.title}
            focus={first.focus}
            priority
            className="absolute inset-0"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
          <div className="absolute bottom-8 left-6 md:left-9">
            <p className="font-display text-[clamp(36px,4vw,56px)] tracking-[0.08em] text-bone">
              {first.mark}
            </p>
            <p className="mt-2 text-[13px] text-mercury">{first.meta}</p>
          </div>
        </article>

        <div className="flex flex-col gap-8">
          <article>
            <div className="relative h-[58vw] max-h-[580px] min-h-[280px]">
              <FolioImage
                src={second.image}
                alt={second.title}
                focus={second.focus}
                className="absolute inset-0"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            </div>
            <p className="mt-5 font-display text-[22px] tracking-[0.08em] text-mercury">
              {second.mark}
            </p>
            <h2 className="mt-1 font-serif text-[34px] text-bone">{second.title}</h2>
            <p className="mt-2 text-[13px] text-bone-dim">{second.meta}</p>
          </article>
          <article>
            <div className="relative h-[42vw] max-h-[360px] min-h-[220px]">
              <FolioImage
                src={third.image}
                alt={third.title}
                focus={third.focus}
                className="absolute inset-0"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            </div>
            <p className="mt-5 font-display text-[22px] tracking-[0.08em] text-mercury">
              {third.mark}
            </p>
            <h2 className="mt-1 font-serif text-[34px] text-bone">{third.title}</h2>
            <p className="mt-2 text-[13px] text-bone-dim">{third.meta}</p>
          </article>
        </div>
      </div>

      <p className="mt-16 text-[12px] text-bone-faint">{seriesPage.mock}</p>
    </main>
  );
}
