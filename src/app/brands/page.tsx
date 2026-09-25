import { FolioButton } from "@/components/arcana/folio-button";
import { FolioImage } from "@/components/arcana/folio-image";
import { brandPage } from "@/data/brand";

export default function BrandsPage() {
  return (
    <main className="px-6 py-10 md:px-14 md:py-12">
      <p className="folio-track-mark text-[11px] text-mercury">{brandPage.mark}</p>
      <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:gap-10">
        <h1 className="font-serif text-[clamp(40px,5vw,58px)] leading-none text-bone">
          {brandPage.title}
        </h1>
        <p className="font-serif text-[28px] italic text-bone-soft">{brandPage.italic}</p>
      </div>
      <p className="mt-6 max-w-[46rem] text-[16px] leading-relaxed text-bone-soft">
        {brandPage.lead}
      </p>

      <div className="relative mt-10 h-[56vw] min-h-[280px] max-h-[820px]">
        <FolioImage
          src={brandPage.image}
          alt="Brand Night — сбор образа в луче"
          focus={brandPage.focus}
          priority
          className="absolute inset-0"
          sizes="100vw"
        />
      </div>

      <div className="mt-12 grid gap-10 border-t border-rule pt-8 md:grid-cols-3">
        {brandPage.columns.map((column) => (
          <article key={column.title}>
            <h2 className="text-[16px] font-medium text-bone">{column.title}</h2>
            <p className="mt-3 max-w-[22rem] text-[14px] leading-relaxed text-bone-dim">
              {column.note}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
        <FolioButton href="/apply?mode=Brand" filled>
          {brandPage.cta}
        </FolioButton>
        <p className="text-[13px] text-bone-dim">{brandPage.aside}</p>
      </div>
    </main>
  );
}
