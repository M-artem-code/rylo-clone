import type { defaultDossier } from "@/data/orbital";
import { TrajectoryPanel } from "@/components/orbital/request-view";
import { ArrowLink, Chip, Chromatic, Kicker, LiveDot, OrbButton } from "@/components/orbital/ui";

export function ConfirmView({ dossier }: { dossier: typeof defaultDossier }) {
  const rows = [
    ["ПИЛОТ", dossier.pilot],
    ["МИССИЯ", dossier.mission],
    ["ОКНО", dossier.window],
    ["ЗАПАС", dossier.backup],
    ["ГОСТИ", dossier.guests],
    ["ДАЛЬШЕ", dossier.next],
  ];

  return (
    <main className="px-5 pb-8 pt-7 min-[1100px]:px-16">
      <div className="flex items-center gap-3">
        <Kicker>REQUEST  ·  RECEIVED</Kicker>
        <LiveDot />
      </div>
      <h1 className="mt-4 max-w-4xl font-display text-6xl font-bold leading-none tracking-[-0.04em] min-[1100px]:text-[64px]">
        <Chromatic>Заявка принята.</Chromatic>
      </h1>
      <p className="mt-4 max-w-3xl font-body text-xl text-indigo">
        Окно ORB-187 удерживается до итога скрининга. Следующий шаг — медицина, не оплата.
      </p>
      <p className="mt-8 font-telemetry text-xs uppercase tracking-[0.16em] text-violet">Dossier</p>
      <p className="font-num text-6xl font-bold tracking-wide min-[1100px]:text-[72px]">
        <Chromatic>{dossier.number}</Chromatic>
      </p>
      <div className="mt-3">
        <Chip kind="violet">Hold for screening</Chip>
      </div>
      <div className="mt-8 grid gap-6 min-[1100px]:grid-cols-[minmax(0,900px)_minmax(280px,1fr)]">
        <div className="space-y-3">
          {rows.map(([label, value]) => (
            <div key={label} className="flex flex-wrap items-center gap-4 rounded-2xl bg-white px-5 py-3 ring-1 ring-cobalt/20">
              <span className="w-24 font-telemetry text-xs uppercase tracking-[0.12em] text-cobalt">{label}</span>
              <span className="font-display text-[15px] font-semibold">{value}</span>
            </div>
          ))}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <OrbButton href="/preflight">Начать медицинский скрининг</OrbButton>
            <ArrowLink href="/manifest">Открыть журнал окон</ArrowLink>
          </div>
        </div>
        <TrajectoryPanel />
      </div>
    </main>
  );
}
