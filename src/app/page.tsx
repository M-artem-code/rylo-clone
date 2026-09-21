import type { Metadata } from "next";
import { HomeView } from "@/components/orbital/home-view";

export const metadata: Metadata = {
  title: "ORBITAL — выход за линию Кармана",
  description: "Суборбитальный ритуал: 100 км, четыре минуты невесомости, архив миссии.",
};

export default function HomePage() {
  return <HomeView />;
}
