import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionVisionValues from "@/components/MissionVisionValues";
import WhyChooseTradeX from "@/components/WhyChooseTradeX";
import TeamSection from "@/components/TeamSection";
import JourneyTimeline from "@/components/JourneyTimeline";

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gold-gradient mb-4" data-testid="text-about-title">
              About TradeX
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
              Revolutionizing trading education and community in Indonesia - a platform through versatility, transparency, and accessibility.
            </p>
          </div>
        </div>
        <MissionVisionValues />
        <WhyChooseTradeX />
        <TeamSection />
        <JourneyTimeline />
      </div>
      <Footer />
    </div>
  );
}
