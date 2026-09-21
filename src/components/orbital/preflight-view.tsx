import { clearance, preflightDays } from "@/data/orbital";
import { Chip, Chromatic, Kicker, OrbButton, Photo } from "@/components/orbital/ui";

export function PreflightView() {
  return (
    <main className="px-5 pb-8 pt-6 min-[1100px]:px-16">
      <Kicker>PREFLIGHT  ·  21 DAYS</Kicker>
      <h1 className="mt-3 font-display text-6xl font-bold leading-[0.92] tracking-[-0.04em] min-[1100px]:text-[68px]">
        <Chromatic>Допуск —</Chromatic>
        <br />
        <Chromatic>часть полёта.</Chromatic>
      </h1>
      <p className="mt-4 max-w-3xl font-body text-xl leading-relaxed text-indigo">
        Покупка не заканчивается заявкой. Она начинается белой клиникой, центрифугой и комбинезоном с вашим callsign.
      </p>
      <ol className="mt-8">
        {preflightDays.map((item) => (
          <li
            key={item.day}
            className={`grid gap-4 py-3 min-[1100px]:items-start ${item.image ? "min-[1100px]:min-h-[200px] min-[1100px]:grid-cols-[52px_minmax(0,1fr)_560px]" : "min-[1100px]:min-h-[140px] min-[1100px]:grid-cols-[52px_minmax(0,1fr)]"}`}
          >
            <p className="font-num text-[22px] font-bold leading-none text-violet">{item.day}</p>
            <div className="relative border-l-2 border-cobalt/70 pl-7">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-[3px] border-cobalt bg-white shadow-[0_0_12px_rgba(0,71,255,0.65)]" />
              <h2 className="font-display text-[28px] font-bold leading-none">{item.title}</h2>
              <p className={`mt-3 font-body text-base leading-relaxed text-indigo ${item.image ? "max-w-[620px]" : "max-w-[1100px]"}`}>
                {item.body}
              </p>
            </div>
            {item.image ? (
              <div className="relative h-[190px] overflow-hidden rounded-[22px]">
                <Photo src={item.image} alt={item.alt} position={item.position} />
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      <section className="mt-8">
        <Kicker>CLEARANCE FILE</Kicker>
        <div className="mt-5 grid gap-4 min-[900px]:grid-cols-3">
          {clearance.map((column) => (
            <article key={column.title} className="rounded-3xl bg-white p-5 ring-1 ring-cobalt/20">
              <Chip kind={column.kind}>{column.title}</Chip>
              <ul className="mt-5 space-y-3">
                {column.lines.map((line) => (
                  <li key={line} className="flex items-start gap-3 font-body text-base text-ink">
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${column.kind === "violet" ? "bg-violet" : "bg-cobalt"}`} />
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <Kicker>FOR THOSE WHO STAY</Kicker>
        <div className="mt-4 grid overflow-hidden rounded-[28px] min-[1100px]:grid-cols-[minmax(0,796px)_1fr]">
        <div className="relative h-[320px] min-[1100px]:h-[420px]">
          <Photo src="/orbital/guests.png" alt="Гости на белом павильоне старта" position="center 45%" />
        </div>
        <div className="bg-gradient-to-b from-violet to-cobalt px-8 py-10 text-white">
          <Kicker light>GUEST PAVILION</Kicker>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight">
            Кто не летит,
            <br />
            всё равно внутри
            <br />
            ритуала.
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-white/90">
            Павильон старта, канал апогея на стекле, общий архив после посадки. Гости видят выход. Не симуляцию.
          </p>
        </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="font-display text-4xl font-bold">Скрининг открывает dossier.</h2>
        <div className="mt-6">
          <OrbButton href="/request">Начать медицинский скрининг</OrbButton>
        </div>
      </section>
    </main>
  );
}
