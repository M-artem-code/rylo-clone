import { ApplyForm } from "@/components/arcana/apply-form";
import { FolioImage } from "@/components/arcana/folio-image";
import { applyPage } from "@/data/apply";

type ApplySearch = {
  mode?: string;
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<ApplySearch>;
}) {
  const params = await searchParams;
  const requested = params.mode;
  const mode =
    requested === "Fashion" || requested === "Brand" || requested === "Portrait"
      ? requested
      : "Portrait";

  return (
    <main className="grid min-h-[calc(100svh-76px)] lg:min-h-[calc(100svh-88px)] lg:grid-cols-[minmax(0,900fr)_minmax(22rem,1fr)]">
      <div className="relative min-h-[58svh] lg:min-h-full">
        <FolioImage
          src={applyPage.image}
          alt="Пустой стул в луче — кастинг"
          focus={applyPage.focus}
          priority
          className="absolute inset-0"
          sizes="(min-width: 1024px) 48vw, 100vw"
        />
        <p className="absolute bottom-8 left-6 font-display text-[clamp(44px,6vw,64px)] font-semibold tracking-[0.12em] text-bone md:left-12">
          {applyPage.word}
        </p>
      </div>

      <div className="flex flex-col justify-center px-6 py-14 md:px-14 lg:px-16">
        <p className="folio-track-mark text-[11px] text-mercury">{applyPage.mark}</p>
        <h1 className="folio-reveal mt-5 font-serif text-[clamp(32px,3.6vw,46px)] leading-[1.1] text-bone">
          {applyPage.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-6 text-[14px] text-bone-soft">{applyPage.lead}</p>
        <div className="mt-8">
          <ApplyForm defaultMode={mode} />
        </div>
      </div>
    </main>
  );
}
