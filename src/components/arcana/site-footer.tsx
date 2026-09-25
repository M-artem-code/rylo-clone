import { home } from "@/data/home";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule px-6 py-10 md:px-14">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-[20px] font-semibold tracking-[0.14em] text-bone">
            {home.footer.wordmark}
          </p>
          <p className="mt-3 text-[12px] text-bone">{home.footer.line}</p>
          <p className="mt-2 text-[11px] text-bone-faint">{home.footer.meta}</p>
        </div>
        <p className="text-[11px] text-bone-faint">{home.footer.aside}</p>
      </div>
    </footer>
  );
}
