import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MarketChallenge from "@/components/MarketChallenge";
import MarketOpportunity from "@/components/MarketOpportunity";
import EcosystemSection from "@/components/EcosystemSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import GoToMarketSection from "@/components/GoToMarketSection";
import BreakEvenSection from "@/components/BreakEvenSection";
import TeamSection from "@/components/TeamSection";
import InvestmentSection from "@/components/InvestmentSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <MarketChallenge />
      <MarketOpportunity />
      <EcosystemSection />
      <BusinessModelSection />
      <GoToMarketSection />
      <BreakEvenSection />
      <TeamSection />
      <InvestmentSection />
      <CTASection />
      <Footer />
    </div>
  );
}
