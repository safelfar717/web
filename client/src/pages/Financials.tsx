import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevenueStreams from "@/components/RevenueStreams";
import FinancialProjections from "@/components/FinancialProjections";
import InvestmentOpportunity from "@/components/InvestmentOpportunity";

export default function Financials() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gold-gradient mb-4" data-testid="text-financials-title">
              Financial Projections
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-financials-subtitle">
              Revenue streams, profit analysis, and investment return for the TradeX ecosystem
            </p>
          </div>
        </div>
        <RevenueStreams />
        <FinancialProjections />
        <InvestmentOpportunity />
      </div>
      <Footer />
    </div>
  );
}
