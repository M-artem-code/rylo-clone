import { images, routes } from "./site";

export const servicesPage = {
  kicker: "For architects, designers, and private clients",
  headline: ["FROM SPACE", "TO ATMOSPHERE."],
  deck: "A complete lighting project — not a product purchase.",
  cta: { label: "Start a project", href: routes.contact },
  steps: [
    {
      num: "01",
      title: "Analysis",
      body: "We read the architecture, the materials, the path of the body through the room.",
      image: images.lightingPlan,
    },
    {
      num: "02",
      title: "Scenario",
      body: "Morning, gathering, dining, night — atmospheres written before fixtures are chosen.",
      image: images.morning,
    },
    {
      num: "03",
      title: "Concept",
      body: "A light idea with the precision of a drawing and the feeling of a film still.",
      image: images.livingNight,
    },
    {
      num: "04",
      title: "Specification",
      body: "Every optic, finish, and control protocol named.",
      image: images.line,
    },
    {
      num: "05",
      title: "Visualization",
      body: "The room is seen at 2200K and at 4000K before it exists.",
      image: images.restaurant,
    },
    {
      num: "06",
      title: "Installation",
      body: "Hidden lines, exact apertures, silence in the ceiling.",
      image: images.install,
    },
    {
      num: "07",
      title: "Calibration",
      body: "Final night. We dim until the architecture starts to breathe.",
      image: images.hotelKyoto,
    },
  ],
};
