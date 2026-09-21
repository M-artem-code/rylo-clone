import { images, routes } from "./site";

export type StudioTime = "Morning" | "Day" | "Evening" | "Night";
export type StudioFixture = "LINE" | "VOID" | "ARC";

export const studioPage = {
  kicker: "Light Studio",
  title: "Compose",
  cta: { label: "Create your lighting concept", href: routes.contact },
  times: ["Morning", "Day", "Evening", "Night"] as const satisfies readonly StudioTime[],
  fixtures: ["LINE", "VOID", "ARC"] as const satisfies readonly StudioFixture[],
  scenes: [
    {
      name: "Warm Evening",
      image: images.studioRoom,
      kelvin: 2700,
      brightness: 72,
      time: "Evening" as StudioTime,
      fixture: "VOID" as StudioFixture,
      placement: "Ceiling  ·  centered over stone table",
      space: "Living",
    },
    {
      name: "Soft Ambient",
      image: images.livingNight,
      kelvin: 2400,
      brightness: 48,
      time: "Night" as StudioTime,
      fixture: "LINE" as StudioFixture,
      placement: "Ceiling  ·  linear graze",
      space: "Living",
    },
    {
      name: "Gallery Mode",
      image: images.gallery,
      kelvin: 3500,
      brightness: 64,
      time: "Night" as StudioTime,
      fixture: "VOID" as StudioFixture,
      placement: "Ceiling  ·  object spot",
      space: "Gallery",
    },
    {
      name: "Dining",
      image: images.restaurant,
      kelvin: 2700,
      brightness: 58,
      time: "Evening" as StudioTime,
      fixture: "LINE" as StudioFixture,
      placement: "Ceiling  ·  concealed slot",
      space: "Dining",
    },
    {
      name: "Focus",
      image: images.morningDay,
      kelvin: 4000,
      brightness: 80,
      time: "Day" as StudioTime,
      fixture: "ARC" as StudioFixture,
      placement: "Task  ·  table plane",
      space: "Living",
    },
  ],
};
