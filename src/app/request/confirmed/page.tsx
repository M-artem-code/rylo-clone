import type { Metadata } from "next";
import { ConfirmView } from "@/components/orbital/confirm-view";
import { defaultDossier } from "@/data/orbital";

export const metadata: Metadata = {
  title: "Dossier принят",
  description: "Заявка ORBITAL принята. Следующий шаг — медицинский скрининг.",
};

export default async function ConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ primary?: string; alternate?: string }>;
}) {
  const params = await searchParams;
  const primary = params.primary?.slice(0, 40);
  const alternate = params.alternate?.slice(0, 40);
  const dossier = {
    ...defaultDossier,
    window: primary ? `ORB-187  ·  ${primary}  ·  RIDGE` : defaultDossier.window,
    backup: alternate ? `ORB-196  ·  ${alternate}  ·  ARAL` : alternate === "" ? "без запасного окна" : defaultDossier.backup,
  };
  return <ConfirmView dossier={dossier} />;
}
