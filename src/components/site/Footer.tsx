type FooterProps = {
  wordmark: string;
  tagline: string;
};

export function Footer({ wordmark, tagline }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] bg-tv-bg">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between px-6 py-8 xl:px-24">
        <p className="text-[12px] font-medium tracking-[0.16em] text-tv-muted">
          {wordmark}
        </p>
        <p className="text-[12px] text-tv-muted-2">{tagline}</p>
      </div>
    </footer>
  );
}
