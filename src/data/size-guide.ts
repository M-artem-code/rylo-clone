export const sizeGuideCopy = {
  kicker: "Size guide",
  title: "Diameter first.",
  sub: "Material second.",
  fitTitle: "Fit notes",
  fitBody:
    "Measure your animal and the cage opening. If you are unsure, send details in the request — we will reply.",
  fitNote:
    "The silhouette is a scale mark only. It is not a breed chart and not a veterinary measure.",
  materialsTitle: "Material key",
  materials: [
    { id: "beech" as const, label: "Beech", text: "Pale timber. Smooth, even grain on the run." },
    { id: "steel" as const, label: "Steel", text: "Brushed blue-gray. Cool, even metal surface." },
    { id: "walnut" as const, label: "Walnut", text: "Darker grain. Matte timber tone." },
    { id: "composite" as const, label: "Composite", text: "Matte charcoal. Pebbled quiet-run surface." },
  ],
  faqKicker: "Questions",
  faqs: [
    {
      question: "How do I choose a diameter?",
      answer:
        "Measure the squirrel and the cage opening, then start with 12\", 15\", 18\", or 21\". If you are unsure, send those details in the request.",
      open: true,
    },
    {
      question: "How do I care for the run surface?",
      answer:
        "Wipe the run with a dry or slightly damp cloth. Let it dry before the next use. No named cleaners.",
      open: true,
    },
    {
      question: "Do you ship to my country?",
      answer: "International shipping. Details on Shipping. Rates: [RATE].",
      open: true,
    },
  ],
};
