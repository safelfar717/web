import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient" data-testid="text-cta-title">
            Ready to Explore the Solution?
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-cta-subtitle">
            Discover how TradeX combines education, verified signals, copy trading, and community in one all-in-one platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/business-model">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] text-black font-semibold text-lg px-8 hover:opacity-90 gold-glow-hover" 
                data-testid="button-view-business-model"
              >
                View Business Model Canvas
              </Button>
            </Link>
            <Link href="/financials">
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-foreground hover:bg-primary/10 text-lg px-8" 
                data-testid="button-financial-projections"
              >
                Financial Projections
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
