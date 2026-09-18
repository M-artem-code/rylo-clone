export interface FAQ {
  id: string;
  question: string;
  answers: string[];
}

export const faqs: FAQ[] = [
  {
    id: "what-is-rylo",
    question: "What is Rylo?",
    answers: [
      "Rylo is a free call captioning and live transcription app that provides real-time captions for phone conversations and in-person communication.",
      "Designed for people who are Deaf, hard of hearing, or have speech disabilities, Rylo combines automated speech recognition, text-to-speech and the latest tech to make communication more accessible.",
    ],
  },
  {
    id: "is-there-app",
    question: "Is there an app that captions phone calls?",
    answers: [
      "Yes. Rylo is a free app that captions incoming and outgoing phone conversations in real time. Using advanced speech recognition technology, Rylo generates accurate captions that appear on your mobile device while you talk.",
      "Caption telephone calls, video calls, conference calls, and calls on speakerphone.",
      "The call captioning and live transcription app is available for iPhone and Android phones, helping users stay connected with family, friends, healthcare providers, and customer support teams.",
    ],
  },
  {
    id: "how-to-start",
    question: "How do you start using Rylo?",
    answers: [
      "Download the Rylo mobile app from the App Store for iOS devices or Google Play Store for Android phones. After registering, you can place and receive captioned calls from your cell phone, access live captions, and use text-to-speech features.",
      "Rylo is designed to work with your existing phone number and includes helpful functionality such as call transcripts and accessibility settings.",
    ],
  },
  {
    id: "caption-voicemail",
    question: "Can Rylo caption voicemail messages?",
    answers: ["Yes. Rylo captions every single voicemail automatically - transcripts stay fully private."],
  },
  {
    id: "live-transcription",
    question: "Does Rylo offer real-time transcription of face-to-face conversations?",
    answers: ["Yes. Rylo Live Transcribe provides real-time speech-to-text transcription for in-person conversations."],
  },
  {
    id: "really-free",
    question: "Is Rylo really free?",
    answers: [
      "Yes. Rylo is free for eligible users who are Deaf, hard of hearing, or have a speech disability. As an FCC-certified captioned telephone service and IP Relay provider, Rylo is reimbursed through a federally administered fund, allowing users to access call captioning services at no cost.",
    ],
  },
  {
    id: "internet-connectivity",
    question: "Does Rylo need internet connectivity?",
    answers: [
      "Yes. Rylo requires an active internet connection to provide real-time phone call captions, but can work offline for live transcriptions. You can connect using Wi-Fi or mobile data on your smartphone or other compatible mobile device.",
    ],
  },
  {
    id: "languages-supported",
    question: "What languages does Rylo support?",
    answers: [
      "Rylo currently supports over 50 languages.",
      "The platform can automatically detect language changes during conversations, helping users communicate more naturally. Rylo regularly introduces new features and language support updates as part of its mission to make communication more accessible for Deaf and hard of hearing communities.",
    ],
  },
];
