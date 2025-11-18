import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BusinessModelCanvas from "@/components/BusinessModelCanvas";

export default function BusinessModel() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gold-gradient mb-4" data-testid="text-bm-title">
              Business Model Canvas
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-bm-subtitle">
              A comprehensive analysis of TradeX's club-centered business model, designed to revolutionize trading education in Indonesia
            </p>
          </div>
        </div>
        <BusinessModelCanvas />
      </div>
      <Footer />
    </div>
  );
}
