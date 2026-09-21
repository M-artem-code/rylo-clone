import Link from "next/link";
import { launchWindows, statusKind } from "@/data/orbital";
import { Trajectory } from "@/components/orbital/trajectory";
import { ArrowLink, Chip, Chromatic, Kicker, LiveDot, OrbButton, Photo } from "@/components/orbital/ui";

function Ticket({
  row,
}: {
  row: (typeof launchWindows)[number];
}) {
  return (
    <article className="relative flex min-h-[250px] flex-col rounded-[26px] bg-white p-5 ring-1 ring-cobalt/25">
      <span className="absolute bottom-5 left-0 top-5 w-[5px] rounded-full bg-gradient-to-b from-cobalt to-violet" />
      <p className="font-telemetry text-[11px] font-semibold uppercase tracking-[0.14em] text-cobalt">{row.site}</p>
      <h3 className="mt-2 font-display text-[26px] font-bold text-ink">{row.code}</h3>
      <p className="mt-2 font-body text-base text-indigo">{row.date}</p>
      <p className="mt-3 font-body text-[15px] text-ink">
        {row.capsule}  ·  {row.mission}
      </p>
      <p className="mt-4 font-telemetry text-[11px] font-semibold uppercase tracking-[0.1em] text-violet">{row.seats} seats</p>
      <div className="mt-auto pt-4">
        <Chip kind={statusKind(row.status)}>{row.status}</Chip>
      </div>
    </article>
  );
}

export function HomeView() {
  return (
    <>
      <MobileHome />
      <DesktopHome />
    </>
  );
}

function MobileHome() {
  return (
    <main className="min-[1100px]:hidden">
      <section className="px-5 pt-4">
        <Kicker>FILE 04  ·  PRIVATE</Kicker>
        <h1 className="mt-3 font-display text-[54px] font-extrabold leading-[0.9] tracking-[-0.04em]">
          <Chromatic>ORBITAL</Chromatic>
        </h1>
        <div className="relative mt-3 h-[460px] overflow-hidden rounded-[28px]">
          <Photo src="/orbital/capsule-apogee.png" alt="Белая капсула ORBITAL в апогее, в иллюминаторе дуга Земли" position="center 42%" />
          <div className="absolute bottom-7 left-4 w-[244px] rounded-[18px] bg-white/90 p-4 ring-1 ring-cobalt/25">
            <p className="font-telemetry text-[11px] font-semibold uppercase tracking-[0.1em] text-cobalt">T−  00:18:42</p>
            <p className="mt-1 font-display text-[22px] font-bold">ORB-187</p>
            <p className="mt-2 font-telemetry text-xs tracking-[0.06em] text-indigo">102.4 KM   ·   0 G</p>
          </div>
        </div>
        <p className="mt-4 font-body text-lg leading-snug text-ink">
          Четыре минуты без веса. Не рейс — выход за край карты.
        </p>
        <div className="mt-4 grid grid-cols-3">
          {[
            ["100", "км"],
            ["4:00", "мин"],
            ["0 G", "апогей"],
          ].map(([value, unit]) => (
            <div key={unit}>
              <p className="font-num text-[32px] font-bold leading-none">{value}</p>
              <p className="mt-2 font-telemetry text-[11px] uppercase tracking-[0.08em] text-cobalt">{unit}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <OrbButton href="/request" className="h-[52px] px-6 text-[15px]">
            Запросить окно
          </OrbButton>
        </div>
      </section>

      <section className="mt-6 bg-gradient-to-b from-violet to-cobalt px-5 py-7 text-white">
        <Kicker light>MANIFEST 01</Kicker>
        <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.05]">
          Не высота.
          <br />
          Край карты.
        </h2>
        <p className="mt-6 font-body text-base leading-relaxed text-white/90">100 километров над линией Кармана.</p>
      </section>

      <section className="px-5 pt-6">
        <Kicker>EXPERIENCE</Kicker>
        <h2 className="mt-2 font-display text-[32px] font-bold">Три класса</h2>
        <div className="mt-4 space-y-3">
          {[
            ["Shared Ascent", "Шесть кресел, один горизонт."],
            ["Private Arc", "Капсула закрыта. Эфир тоже."],
            ["Solo Apex", "Одно кресло. Максимальная дуга."],
          ].map(([name, line]) => (
            <Link key={name} href="/missions" className="block rounded-[18px] bg-white px-4 py-4 ring-1 ring-cobalt/25">
              <p className="font-display text-lg font-bold">{name}</p>
              <p className="mt-1 font-body text-sm text-indigo">{line}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 pt-6">
        <Kicker>LAUNCH WINDOWS</Kicker>
        <div className="mt-4 space-y-4">
          {launchWindows.slice(0, 3).map((row) => (
            <Ticket key={row.code} row={row} />
          ))}
        </div>
      </section>

      <section className="px-5 pt-6">
        <Kicker>PATH</Kicker>
        <ol className="mt-4 space-y-4">
          {[
            ["01", "Заявка", "Dossier в тот же день."],
            ["02", "Допуск", "21 день ритуала."],
            ["03", "Полёт", "Апогей и архив."],
          ].map(([num, title, body]) => (
            <li key={num} className="grid grid-cols-[56px_1fr] items-start">
              <p className="font-num text-[28px] font-bold text-cobalt">{num}</p>
              <div>
                <p className="font-display text-[22px] font-bold">{title}</p>
                <p className="font-body text-[15px] text-indigo">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid grid-cols-[130px_1fr] gap-4 px-5 py-6">
        <div className="relative h-[180px] overflow-hidden rounded-[20px]">
          <Photo src="/orbital/portrait.png" alt="К. Волкова после миссии ORB-161" position="center 30%" />
        </div>
        <div>
          <p className="font-display text-lg font-bold leading-snug">«Пол исчез. Осталась синяя дуга.»</p>
          <p className="mt-4 font-telemetry text-[10px] uppercase tracking-[0.08em] text-violet">К. Волкова  ·  ORB-161</p>
        </div>
      </section>

      <div className="px-5 pb-4">
        <OrbButton href="/request" className="h-[54px] text-[15px]">
          Запросить окно запуска
        </OrbButton>
      </div>
    </main>
  );
}

function DesktopHome() {
  return (
    <main className="hidden min-[1100px]:block">
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0 h-[860px]" />
        <div className="pointer-events-none absolute right-[-40px] top-24 h-[420px] w-[420px] rounded-full bg-cobalt/20 blur-3xl" />
        <div className="pointer-events-none absolute right-40 top-10 h-56 w-56 rounded-full bg-violet/20 blur-3xl" />
        <div className="relative grid min-[1100px]:grid-cols-[minmax(0,1fr)_minmax(280px,600px)]">
          <div className="px-5 pt-5 min-[1100px]:px-16 min-[1100px]:pt-4">
            <Kicker>SUBORBITAL   ·   PRIVATE ASCENT   ·   FILE 04</Kicker>
            <h1 className="mt-3 font-display text-[18vw] font-extrabold leading-[0.86] tracking-[-0.045em] text-ink min-[1100px]:text-[158px]">
              <Chromatic>ORBITAL</Chromatic>
            </h1>
            <p className="mt-6 max-w-[560px] font-body text-lg leading-snug text-ink min-[1100px]:text-[26px] min-[1100px]:leading-snug">
              Четыре минуты без веса.
              <br />
              Чёрный космос над синей дугой.
              <br />
              Не рейс — выход за край карты.
            </p>
            <div className="mt-8 grid max-w-[620px] grid-cols-3 gap-3">
              {[
                ["100", "км", "апогей"],
                ["4:00", "мин", "невесомость"],
                ["0", "G", "gravity"],
              ].map(([value, unit, caption]) => (
                <div key={caption}>
                  <p className="font-num text-5xl font-bold leading-none text-ink min-[1100px]:text-[64px]">
                    <Chromatic>{value}</Chromatic>
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold text-cobalt">{unit}</p>
                  <p className="font-telemetry text-xs uppercase tracking-[0.12em] text-indigo">{caption}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <OrbButton href="/request">Запросить окно запуска</OrbButton>
              <OrbButton href="/capsules" kind="ghost">
                Смотреть флот
              </OrbButton>
            </div>
          </div>
          <div className="relative mt-8 h-[520px] min-[1100px]:mt-4 min-[1100px]:h-[744px]">
            <div className="absolute inset-y-0 right-0 left-5 overflow-hidden rounded-l-[36px] min-[1100px]:left-0">
              <Photo src="/orbital/capsule-apogee.png" alt="Белая капсула ORBITAL в апогее, в иллюминаторе дуга Земли" position="center 46%" />
            </div>
            <svg className="pointer-events-none absolute left-1/2 top-[46%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 text-cobalt" viewBox="0 0 200 200" aria-hidden="true">
              <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3.6" />
              <path d="M30 142a74 74 0 0 1 142-46" fill="none" stroke="#6D28FF" strokeWidth="1.7" />
              <circle cx="166" cy="72" r="3.2" fill="#fff" stroke="#6D28FF" />
            </svg>
            <div className="absolute bottom-[68px] left-12 w-[360px] rounded-3xl bg-white/90 p-5 ring-1 ring-cobalt/30 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <LiveDot />
                <p className="font-telemetry text-[11px] font-semibold uppercase tracking-[0.12em] text-cobalt">Live   ·   T−</p>
              </div>
              <p className="mt-1 font-num text-5xl font-bold leading-none text-ink">00:18:42</p>
              <dl className="mt-3 grid grid-cols-2 gap-y-1 font-telemetry text-xs">
                {[
                  ["WINDOW", "ORB-187"],
                  ["APOGEE", "102.4 KM"],
                  ["G-LOAD", "0.00"],
                  ["WEIGHTLESS", "04:00"],
                ].map(([label, value]) => (
                  <div key={label} className="contents">
                    <dt className="text-cobalt">{label}</dt>
                    <dd className="font-display text-sm font-semibold text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="absolute bottom-3 left-12 flex flex-wrap gap-2">
              <Chip>Launch Window</Chip>
              <Chip kind="violet">G-Load</Chip>
              <Chip kind="ghost">Apogee</Chip>
            </div>
          </div>
        </div>
        <div className="relative px-5 pb-6 pt-4 min-[1100px]:px-16">
          <Trajectory />
        </div>
      </section>

      <section className="mt-5 grid min-[1100px]:min-h-[520px] min-[1100px]:grid-cols-[minmax(0,980px)_1fr]">
        <div className="px-5 py-4 min-[1100px]:px-16">
          <Kicker>MANIFEST  01</Kicker>
          <h2 className="mt-3 font-display text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-ink min-[1100px]:text-[72px]">
            <Chromatic>Не высота.</Chromatic>
            <br />
            <Chromatic>Край карты.</Chromatic>
          </h2>
          <p className="mt-6 max-w-[820px] font-body text-xl leading-relaxed text-indigo">
            ORBITAL собирает выход за линию Кармана как закрытый ритуал: отбор, свой комбинезон, окно запуска, апогей и архив миссии. Вы покупаете не билет. Вы покупаете право увидеть, где заканчивается карта.
          </p>
        </div>
        <div className="bg-gradient-to-b from-violet to-cobalt px-8 py-12 text-white min-[1100px]:px-12">
          <Kicker light>ABOVE THE MAP</Kicker>
          <p className="mt-4 font-num text-[96px] font-bold leading-none min-[1100px]:text-[120px]">
            <Chromatic light>100</Chromatic>
          </p>
          <p className="mt-2 font-display text-2xl font-semibold min-[1100px]:text-[28px]">километров</p>
          <p className="font-display text-2xl font-semibold min-[1100px]:text-[28px]">над линией Кармана</p>
          <p className="mt-8 max-w-md font-body text-base leading-relaxed text-white/90">
            Белый — чистота ритуала. Cobalt — двигатель и небо. Фиолетовый — порог невесомости.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 min-[1100px]:px-16">
        <Kicker>EXPERIENCE</Kicker>
        <h2 className="mt-3 max-w-xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.03em] min-[1100px]:text-[56px]">
          Три класса
          <br />
          одного апогея.
        </h2>
        <div className="mt-8 grid gap-6 min-[1100px]:grid-cols-[minmax(0,1fr)_520px]">
          <Link href="/missions" className="relative block h-[460px] overflow-hidden rounded-[32px]">
            <Photo src="/orbital/earth-window.png" alt="Вид кривизны Земли из иллюминатора" position="center 55%" />
            <div className="absolute bottom-5 left-6 right-6 max-w-lg rounded-2xl bg-white/90 px-5 py-4">
              <p className="font-telemetry text-[11px] font-semibold uppercase tracking-[0.12em] text-cobalt">Shared Ascent</p>
              <p className="mt-1 font-body text-lg text-ink">Шесть кресел, один горизонт.</p>
            </div>
          </Link>
          <div className="grid gap-4">
            {[
              ["02", "Private Arc", "Капсула закрыта. Эфир тоже.", "2–4 кресла"],
              ["03", "Solo Apex", "Одно кресло. Максимальная дуга.", "solo cockpit"],
            ].map(([index, name, line, meta]) => (
              <Link key={name} href="/missions" className="rounded-[28px] bg-white p-7 ring-1 ring-cobalt/25">
                <p className="font-telemetry text-xs font-semibold tracking-[0.14em] text-violet">{index}</p>
                <h3 className="mt-2 font-display text-[32px] font-bold">{name}</h3>
                <p className="mt-3 font-body text-lg text-indigo">{line}</p>
                <p className="mt-4 font-telemetry text-xs uppercase tracking-[0.12em] text-cobalt">{meta}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <ArrowLink href="/missions">Сравнить миссии</ArrowLink>
        </div>
      </section>

      <section id="windows" className="px-5 pb-16 min-[1100px]:px-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Kicker>LAUNCH WINDOWS</Kicker>
            <h2 className="mt-3 font-display text-5xl font-bold tracking-[-0.03em]">Ближайшие окна</h2>
          </div>
          <p className="font-body text-lg text-violet">Осень 2026</p>
        </div>
        <div className="mt-8 grid gap-4 min-[800px]:grid-cols-2 min-[1200px]:grid-cols-4">
          {launchWindows.slice(0, 4).map((row) => (
            <Ticket key={row.code} row={row} />
          ))}
        </div>
      </section>

      <section id="fleet" className="px-5 pb-16 min-[1100px]:px-16">
        <Kicker>FLEET</Kicker>
        <h2 className="mt-3 font-display text-5xl font-bold tracking-[-0.03em]">Три объекта желания.</h2>
        <p className="mt-3 max-w-xl font-body text-lg text-indigo">Не транспорт. Коллекция капсул, в которых проходит апогей.</p>
        <div className="mt-8 grid gap-4 min-[800px]:grid-cols-3">
          {[
            ["LUMEN", "общий апогей", "/orbital/capsule-apogee.png", "center 42%"],
            ["VEIL", "тихая капсула", "/orbital/hangar.png", "center 48%"],
            ["MONAD", "solo cockpit", "/orbital/podium.png", "center 40%"],
          ].map(([name, line, src, position]) => (
            <Link key={name} href="/capsules" className="group">
              <div className="relative">
                <svg viewBox="0 0 200 200" className="pointer-events-none absolute left-1/2 top-[140px] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
                  <circle cx="100" cy="100" r="90" fill="none" stroke={name === "MONAD" ? "#6D28FF" : "#0047FF"} strokeWidth="1.2" strokeDasharray="4 6" />
                </svg>
                <div className="relative mx-8 h-[280px] overflow-hidden rounded-[28px]">
                  <Photo src={src} alt={`Капсула ${name}`} position={position} />
                </div>
              </div>
              <h3 className="mt-4 font-display text-[28px] font-bold tracking-wide">{name}</h3>
              <p className="font-telemetry text-xs uppercase tracking-[0.12em] text-cobalt">{line}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <ArrowLink href="/capsules">Открыть коллекцию</ArrowLink>
        </div>
      </section>

      <section className="px-5 pb-10 min-[1100px]:px-16">
        <Kicker>PATH</Kicker>
        <h2 className="mt-3 font-display text-5xl font-bold tracking-[-0.03em]">От заявки до посадки.</h2>
        <div className="relative mt-10 grid gap-8 min-[800px]:grid-cols-3">
          <div className="pointer-events-none absolute left-8 right-8 top-5 hidden border-t border-dashed border-cobalt/50 min-[800px]:block" />
          {[
            ["01", "Заявка", "Имя, окно, формат. Dossier открывается в тот же день."],
            ["02", "Допуск", "21 день: врачи, центрифуга, свой комбинезон, brief."],
            ["03", "Полёт", "Отделение, четыре минуты тишины, архив миссии."],
          ].map(([num, title, body]) => (
            <div key={num} className="relative">
              <p className="font-num text-[42px] font-bold text-cobalt">{num}</p>
              <h3 className="mt-3 font-display text-[28px] font-bold">{title}</h3>
              <p className="mt-3 max-w-xs font-body text-[17px] leading-relaxed text-indigo">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid items-center gap-8 px-5 py-12 min-[1100px]:grid-cols-[520px_minmax(0,1fr)] min-[1100px]:px-16">
        <div className="relative h-[460px] overflow-hidden rounded-[32px] min-[1100px]:h-[560px]">
          <Photo src="/orbital/portrait.png" alt="К. Волкова после миссии ORB-161" position="center 32%" />
          <div className="absolute bottom-5 left-5">
            <Chip kind="violet">Karman crossed</Chip>
          </div>
        </div>
        <div>
          <Kicker>AFTER APOGEE  ·  ORB-161</Kicker>
          <blockquote className="mt-4 font-display text-3xl font-bold leading-snug tracking-[-0.02em] min-[1100px]:text-[40px]">
            «На четвёртой минуте пол исчез. Осталась синяя дуга и номер миссии на стекле шлема.»
          </blockquote>
          <p className="mt-6 font-display text-xl font-semibold">К. Волкова</p>
          <p className="mt-2 font-telemetry text-xs uppercase tracking-[0.12em] text-cobalt">
            Shared Ascent  ·  LUMEN  ·  ARAL
          </p>
        </div>
      </section>

      <section className="relative px-5 py-16 min-[1100px]:px-16">
        <div className="pointer-events-none absolute right-10 top-0 h-56 w-56 rounded-full bg-cobalt/20 blur-3xl" />
        <h2 className="relative font-display text-5xl font-bold leading-[0.95] tracking-[-0.03em] min-[1100px]:text-[64px]">
          <Chromatic>Окно запуска</Chromatic>
          <br />
          <Chromatic>не хранится.</Chromatic>
        </h2>
        <p className="relative mt-5 max-w-xl font-body text-xl text-indigo">Его занимают. Сначала dossier, затем допуск, затем T−0.</p>
        <div className="relative mt-8">
          <OrbButton href="/request">Запросить окно запуска</OrbButton>
        </div>
      </section>
    </main>
  );
}
