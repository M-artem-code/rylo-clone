import { HeroSection } from "@/components/HeroSection";
import { SeenOnSection } from "@/components/SeenOnSection";
import { CallWithClaritySection } from "@/components/CallWithClaritySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LiveTranscribeSection } from "@/components/LiveTranscribeSection";
import { ConversationsSection } from "@/components/ConversationsSection";
import { StartCaptioningSection } from "@/components/StartCaptioningSection";
import { FaqsSection } from "@/components/FaqsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SeenOnSection />
      <CallWithClaritySection />
      <TestimonialsSection />
      <LiveTranscribeSection />
      <ConversationsSection />
      <StartCaptioningSection />
      <FaqsSection />
    </>
  );
}
