import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MarketChallenge from "@/components/MarketChallenge";
import MarketOpportunity from "@/components/MarketOpportunity";
import EcosystemSection from "@/components/EcosystemSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <MarketChallenge />
      <MarketOpportunity />
      <EcosystemSection />
      <CTASection />
      <Footer />
    </div>
  );
}
