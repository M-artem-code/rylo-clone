import type { Metadata } from "next";
import { Suspense } from "react";

import { ConfigureView } from "@/components/configure/ConfigureView";

export const metadata: Metadata = {
  title: "Конфигуратор",
};

export default function ConfigurePage() {
  return (
    <Suspense>
      <ConfigureView />
    </Suspense>
  );
}
