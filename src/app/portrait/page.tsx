import { FolioButton } from "@/components/arcana/folio-button";
import { FolioImage } from "@/components/arcana/folio-image";
import { portraitPage } from "@/data/portrait";

export default function PortraitPage() {
  return (
    <main className="grid min-h-[calc(100svh-76px)] lg:min-h-[calc(100svh-88px)] lg:grid-cols-[minmax(0,980fr)_minmax(22rem,1fr)]">
      <div className="relative min-h-[70svh] lg:min-h-full">
        <FolioImage
          src={portraitPage.image}
          alt="Portrait — человек в студийном луче"
          focus={portraitPage.focus}
          priority
          className="absolute inset-0"
          sizes="(min-width: 1024px) 52vw, 100vw"
        />
        <p className="absolute top-8 left-6 font-display text-[clamp(48px,7vw,86px)] font-semibold tracking-[0.1em] text-bone md:left-12">
          {portraitPage.word}
        </p>
      </div>

      <div className="flex flex-col justify-center px-6 py-14 md:px-14 lg:px-16">
        <p className="folio-track-mark text-[11px] text-mercury">{portraitPage.mark}</p>
        <h1 className="mt-5 font-serif text-[clamp(36px,4vw,52px)] leading-[1.05] text-bone">
          {portraitPage.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-[28rem] text-[15px] leading-[1.7] text-bone-soft">
          {portraitPage.body}
        </p>
        <ol className="mt-10 max-w-[28rem]">
          {portraitPage.steps.map((step) => (
            <li
              key={step.num}
              className="flex items-center gap-6 border-t border-rule py-4 text-bone"
            >
              <span className="font-display text-[18px] tracking-[0.08em] text-mercury">
                {step.num}
              </span>
              <span className="text-[16px]">{step.title}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-[14px] text-bone-soft">{portraitPage.price}</p>
        <p className="mt-1 text-[13px] text-bone-dim">{portraitPage.priceNote}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <FolioButton href="/apply?mode=Portrait" filled>
            {portraitPage.cta}
          </FolioButton>
          <a href="/brands" className="text-[13px] text-bone-dim">
            {portraitPage.aside}
          </a>
        </div>
      </div>
    </main>
  );
}
