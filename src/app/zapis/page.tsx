import type { Metadata } from "next";

import { BookingForm } from "@/components/site/booking-form";

export const metadata: Metadata = {
  title: "Запись",
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ lot?: string }>;
}) {
  const { lot } = await searchParams;
  return (
    <main>
      <BookingForm key={lot ?? "stol"} lotId={lot} />
    </main>
  );
}
