import { ChevronDownIcon } from "@/components/icons";
import { faqs } from "@/data/faqs";

export function FaqsSection() {
  return (
    <section data-surface="dark" className="relative overflow-clip z-1 rounded-b-huge bg-card pt-section-lg pb-section-main -mt-20">
      <div className="container-site gap-x-gutter gap-y-3xl grid grid-cols-1 items-start md:grid-cols-12">
        <div className="md:top-section-main md:col-span-3 md:sticky">
          <h2 id="home-faq-title" className="text-h1 text-trim max-w-[20ch] text-balance">
            FAQs
          </h2>
        </div>
        <ul role="list" className="flex flex-col gap-1 md:col-span-9" aria-labelledby="home-faq-title">
          {faqs.map((faq) => (
            <li key={faq.id}>
              <details name="home-faq" className="group rounded-medium bg-page open:bg-ink/5 transition-colors duration-300 motion-reduce:transition-none">
                <summary className="gap-lg p-xl rounded-medium focus-visible:ring-ink/40 flex cursor-pointer list-none items-center justify-between focus-visible:ring-2 focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                  <span className="text-h4 text-trim text-balance">{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="size-xl ease-cubic-button flex shrink-0 items-center justify-center transition-transform duration-600 group-open:rotate-180 motion-reduce:transition-none"
                  >
                    <ChevronDownIcon className="size-lg" />
                  </span>
                </summary>
                <div className="min-h-0 overflow-hidden">
                  <div className="px-xl pb-xl gap-md flex flex-col">
                    {faq.answers.map((paragraph) => (
                      <p key={paragraph} className="text-main text-trim text-ink/70 max-w-[80ch] text-pretty">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
      <div
        aria-hidden="true"
        data-section-parallax-overlay=""
        className="pointer-events-none absolute inset-0 z-10 bg-black opacity-0"
      />
    </section>
  );
}
