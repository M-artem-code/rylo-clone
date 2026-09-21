import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MissionBriefing, MissionItinerary } from "@/components/missions/MissionsView";
import { getMission, missions } from "@/data/missions";

type Props = {
  params: Promise<{ mission: string }>;
};

export function generateStaticParams() {
  return missions.map((mission) => ({ mission: mission.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mission: slug } = await params;
  const mission = getMission(slug);
  return { title: mission ? mission.name : "Миссия" };
}

export default async function MissionPage({ params }: Props) {
  const { mission: slug } = await params;
  const mission = getMission(slug);
  if (!mission) notFound();

  return (
    <main>
      <MissionBriefing mission={mission} />
      <MissionItinerary slug={mission.slug} />
    </main>
  );
}
