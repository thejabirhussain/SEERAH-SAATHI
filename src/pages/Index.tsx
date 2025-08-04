import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WhyJoinSection } from "@/components/WhyJoinSection";
import { SeerahJourneySection } from "@/components/SeerahJourneySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <HeroSection />
      <WhyJoinSection />
      <SeerahJourneySection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;