import { FolioImage } from "@/components/arcana/folio-image";
import { studioPage } from "@/data/studio";

export default function StudioPage() {
  return (
    <main>
      <section className="relative h-[min(86svh,980px)] min-h-[420px]">
        <FolioImage
          src={studioPage.image}
          alt="Чёрная коробка студии и прибор"
          focus={studioPage.focus}
          priority
          className="absolute inset-0"
          sizes="100vw"
        />
        <div className="absolute inset-x-6 top-10 md:inset-x-14">
          <p className="folio-track-mark text-[11px] text-mercury">{studioPage.mark}</p>
          <h1 className="mt-4 font-serif text-[clamp(36px,4.4vw,52px)] text-bone">
            {studioPage.title}
          </h1>
        </div>
      </section>

      <section className="grid gap-10 px-6 py-14 md:px-14 md:py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-[40px] text-bone">{studioPage.heading}</h2>
          <p className="mt-6 max-w-[34rem] text-[16px] leading-relaxed text-bone-soft">
            {studioPage.body}
          </p>
        </div>
        <div className="lg:pt-2">
          <p className="font-serif text-[28px] italic text-bone-soft">{studioPage.asideTitle}</p>
          <p className="mt-4 text-[15px] text-bone-dim">{studioPage.aside}</p>
        </div>
      </section>
    </main>
  );
}
