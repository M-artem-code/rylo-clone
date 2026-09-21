import type { Metadata } from "next";
import { RequestView } from "@/components/orbital/request-view";

export const metadata: Metadata = {
  title: "Request",
  description: "Заявка на окно запуска ORBITAL.",
};

export default function RequestPage() {
  return <RequestView />;
}
