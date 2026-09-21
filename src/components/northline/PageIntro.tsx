type PageIntroProps = {
  label: string;
  title: string;
  text: string;
  aside?: string;
};

export function PageIntro({ label, title, text, aside }: PageIntroProps) {
  return (
    <header className="px-5 pt-16 pb-12 md:px-[72px] md:pt-[72px] md:pb-[56px]">
      <p className="text-[12px] font-medium tracking-[0.14em] text-nl-muted">{label}</p>
      <div className={aside ? "mt-7 grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]" : "mt-7"}>
        <h1 className="max-w-[900px] font-display text-[36px] leading-[1.12] font-medium md:text-[44px]">
          {title}
        </h1>
        {aside ? (
          <p className="max-w-[420px] text-[16px] leading-[1.5] text-nl-muted md:pt-2">{aside}</p>
        ) : null}
      </div>
      {!aside ? (
        <p className="mt-8 max-w-[720px] text-[16px] leading-[1.5] text-nl-muted">{text}</p>
      ) : null}
    </header>
  );
}
