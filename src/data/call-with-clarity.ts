export interface FeatureTab {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ClarityFeatureCard {
  id: string;
  title: string;
  description: string;
}

export const featureTabs: FeatureTab[] = [
  {
    id: "caption-calls",
    title: "Caption calls accurately in real-time",
    description:
      "When you make calls through the Rylo app, our highly accurate technology instantly translates what’s said into text you can read and follow along with",
    iconName: "caption",
  },
  {
    id: "existing-number",
    title: "Keep your existing phone number",
    description:
      "Rylo lets you choose between getting a fresh phone number or keeping your existing one for calls and texts",
    iconName: "phone",
  },
  {
    id: "speak-or-type",
    title: "Speak or type to reply",
    description: "Use your voice or your device's keyboard - the call is yours",
    iconName: "speech",
  },
  {
    id: "personalized",
    title: "Adjust the features to feel most like you",
    description: "Rylo is always personalized for your needs - learning and improving for you",
    iconName: "settings",
  },
  {
    id: "secure-transcripts",
    title: "Save your secured transcripts for later",
    description: "All Rylo calls are fully private with transcripts saved locally on your device",
    iconName: "history",
  },
];

export const clarityFeatureCards: ClarityFeatureCard[] = [
  {
    id: "tone-pace",
    title: "Shape the way your words sound",
    description: "Adjust the tone and pace of talk-to-text audio with keyboard shortcuts",
  },
  {
    id: "quick-reply",
    title: "Quick-reply with a few taps",
    description: "Keep conversations fluid and fast with AI-powered, quick replies",
  },
  {
    id: "non-verbal-cues",
    title: "Track non-verbal cues",
    description: "Understand speaker sentiment and know who is speaking, typing, or pausing",
  },
  {
    id: "languages",
    title: "Use any language, almost",
    description: "Rylo supports 50+ languages and auto-detects language changes in real time",
  },
  {
    id: "spam-filter",
    title: "Filter for spam & profanity",
    description: "Easily manage out the types of conversations you don’t want",
  },
  {
    id: "devices",
    title: "Works with your other devices",
    description: "Pair Rylo with your hearing aids, cochlear implants, and bluetooth headsets",
  },
  {
    id: "caption-styles",
    title: "Adjust the caption styles",
    description: "Choose how the text of your conversation looks",
  },
];
