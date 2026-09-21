import type { Metadata } from "next";
import { PreflightView } from "@/components/orbital/preflight-view";

export const metadata: Metadata = {
  title: "Preflight",
  description: "21 день допуска: клиника, центрифуга, fitting и утро запуска.",
};

export default function PreflightPage() {
  return <PreflightView />;
}
