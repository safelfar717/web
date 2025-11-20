import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionVisionValues from "@/components/MissionVisionValues";
import WhyChooseTradeX from "@/components/WhyChooseTradeX";
import TeamSection from "@/components/TeamSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import heroBackgroundImage from "@assets/stock_images/futuristic_financial_b336de06.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24">
        <div className="relative w-full">
          <img
            src={heroBackgroundImage}
            alt="Futuristic financial charts and digital technology"
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="img-about-hero-bg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
          
          <div className="relative container mx-auto px-6 py-24 md:py-32">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gold-gradient mb-4" data-testid="text-about-title">
                Tentang TradeX
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto" data-testid="text-about-subtitle">
                Merevolusi pendidikan trading dan komunitas di Indonesia - platform yang menawarkan keserbagunaan, transparansi, dan aksesibilitas.
              </p>
            </div>
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
