import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Sparkles, Target, DollarSign, CheckCircle2, BarChart3 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import metricsBg from "@assets/generated_images/Unit_economics_metrics_dashboard_38204899.png";

gsap.registerPlugin(ScrollTrigger);

const roiData = [
  {
    title: "📊 Conservative Case",
    borderColor: "border-blue-500/50",
    glowColor: "shadow-blue-500/20",
    multiplier: "96x",
    metrics: {
      year3RevenueMonth: 50,
      annualRevenue: 600,
      valuationMultiple: 4,
      companyValuation: 2400,
      your10Stake: 240,
      initialInvestment: "Rp 2.5B",
      returnMultiple: 96
    }
  },
  {
    title: "🚀 Base Case (Likely)",
    borderColor: "border-emerald-500/50",
    glowColor: "shadow-emerald-500/20",
    multiplier: "240x",
    metrics: {
      year3RevenueMonth: 100,
      annualRevenue: 1200,
      valuationMultiple: 5,
      companyValuation: 6000,
      your10Stake: 600,
      initialInvestment: "Rp 2.5B",
      returnMultiple: 240
    }
  }
];

const exitOpportunities = [
  {
    title: "Series A (18 Months)",
    description: "Raise Rp 50-100B at higher valuation. Partial exit opportunity for early investors.",
    icon: Target
  },
  {
    title: "Strategic Acquisition (2-3 Years)",
    description: "Acquisition by Stockbit, Ajaib, or regional fintech player. Full exit at premium valuation.",
    icon: DollarSign
  },
  {
    title: "IPO (5 Years)",
    description: "Public listing on IDX or regional exchange. Maximum liquidity and valuation potential.",
    icon: TrendingUp
  }
];

export default function ROISection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const opportunitiesRef = useRef<HTMLDivElement>(null);
  
  const conservativeValuesRef = useRef({
    year3RevenueMonth: 0,
    annualRevenue: 0,
    companyValuation: 0,
    your10Stake: 0,
    returnMultiple: 0
  });
  
  const baseCaseValuesRef = useRef({
    year3RevenueMonth: 0,
    annualRevenue: 0,
    companyValuation: 0,
    your10Stake: 0,
    returnMultiple: 0
  });
  
  const [conservativeDisplay, setConservativeDisplay] = useState({
    year3RevenueMonth: 0,
    annualRevenue: 0,
    companyValuation: 0,
    your10Stake: 0,
    returnMultiple: 0
  });
  
  const [baseCaseDisplay, setBaseCaseDisplay] = useState({
    year3RevenueMonth: 0,
    annualRevenue: 0,
    companyValuation: 0,
    your10Stake: 0,
    returnMultiple: 0
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('[data-roi-card]');
      const opportunities = opportunitiesRef.current?.querySelectorAll('[data-opportunity-card]');

      if (cards && cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        });
      }

      if (opportunities && opportunities.length > 0) {
        gsap.from(opportunities, {
          scrollTrigger: {
            trigger: opportunitiesRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          x: -30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out"
        });
      }

      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 75%",
        onEnter: () => {
          gsap.to(conservativeValuesRef.current, {
            year3RevenueMonth: roiData[0].metrics.year3RevenueMonth,
            annualRevenue: roiData[0].metrics.annualRevenue,
            companyValuation: roiData[0].metrics.companyValuation,
            your10Stake: roiData[0].metrics.your10Stake,
            returnMultiple: roiData[0].metrics.returnMultiple,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              setConservativeDisplay({...conservativeValuesRef.current});
            }
          });
        }
      });

      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 75%",
        onEnter: () => {
          gsap.to(baseCaseValuesRef.current, {
            year3RevenueMonth: roiData[1].metrics.year3RevenueMonth,
            annualRevenue: roiData[1].metrics.annualRevenue,
            companyValuation: roiData[1].metrics.companyValuation,
            your10Stake: roiData[1].metrics.your10Stake,
            returnMultiple: roiData[1].metrics.returnMultiple,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              setBaseCaseDisplay({...baseCaseValuesRef.current});
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-black to-card relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-primary w-6 h-6 animate-pulse" />
            <h2
              className="text-4xl md:text-5xl font-bold text-gold-gradient"
              data-testid="text-roi-title"
            >
              96-240x Return Potential in 3 Years
            </h2>
            <Sparkles className="text-primary w-6 h-6 animate-pulse" />
          </div>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            data-testid="text-roi-subtitle"
          >
            Exceptional Returns with Conservative to Aggressive Growth Scenarios
          </p>
        </div>

        {/* ROI Comparison Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Conservative Case Card */}
          <Card
            data-roi-card="true"
            className={`relative overflow-hidden ${roiData[0].borderColor} border-2 hover-elevate transition-all duration-300 shadow-lg ${roiData[0].glowColor} hover:shadow-xl`}
            data-testid="card-roi-conservative"
          >
            <img
              src={metricsBg}
              alt="Conservative ROI projection"
              className="absolute inset-0 w-full h-full object-cover"
              data-testid="img-roi-conservative-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90" />

            <CardContent className="relative p-6">
              <div className="flex items-center justify-between mb-6">
                <Badge
                  className="bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold px-4 py-1.5 text-base shadow-md"
                  data-testid="badge-conservative"
                >
                  {roiData[0].title}
                </Badge>
                <div className="text-4xl font-bold text-gold-gradient">
                  {roiData[0].multiplier}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Year 3 Revenue</span>
                  <span className="text-gold-gradient font-bold">Rp {Math.round(conservativeDisplay.year3RevenueMonth)}M/month</span>
                </div>
                
                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Annual Revenue</span>
                  <span className="text-gold-gradient font-bold">Rp {Math.round(conservativeDisplay.annualRevenue)}M</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Valuation Multiple</span>
                  <span className="text-gold-gradient font-bold">{roiData[0].metrics.valuationMultiple}× Revenue</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Company Valuation</span>
                  <span className="text-gold-gradient font-bold">Rp {(conservativeDisplay.companyValuation / 1000).toFixed(1)}T</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Your 10% Stake</span>
                  <span className="text-gold-gradient font-bold">Rp {Math.round(conservativeDisplay.your10Stake)}B</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Initial Investment</span>
                  <span className="text-white font-bold">{roiData[0].metrics.initialInvestment}</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm rounded-md px-4 py-3 border border-primary/30 shadow-md">
                  <span className="text-white font-medium">Return Multiple</span>
                  <span className="text-gold-gradient font-bold text-lg">{Math.round(conservativeDisplay.returnMultiple)}×</span>
                </div>

                <div className="text-center pt-2">
                  <p className="text-xs text-muted-foreground italic">In 3 years from investment</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Base Case Card */}
          <Card
            data-roi-card="true"
            className={`relative overflow-hidden ${roiData[1].borderColor} border-2 hover-elevate transition-all duration-300 shadow-lg ${roiData[1].glowColor} hover:shadow-xl`}
            data-testid="card-roi-base"
          >
            <img
              src={metricsBg}
              alt="Base case ROI projection"
              className="absolute inset-0 w-full h-full object-cover"
              data-testid="img-roi-base-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90" />

            <CardContent className="relative p-6">
              <div className="flex items-center justify-between mb-6">
                <Badge
                  className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-white font-bold px-4 py-1.5 text-base shadow-md"
                  data-testid="badge-base-case"
                >
                  {roiData[1].title}
                </Badge>
                <div className="text-4xl font-bold text-gold-gradient">
                  {roiData[1].multiplier}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Year 3 Revenue</span>
                  <span className="text-gold-gradient font-bold">Rp {Math.round(baseCaseDisplay.year3RevenueMonth)}M/month</span>
                </div>
                
                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Annual Revenue</span>
                  <span className="text-gold-gradient font-bold">Rp {(baseCaseDisplay.annualRevenue / 1000).toFixed(1)}B</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Valuation Multiple</span>
                  <span className="text-gold-gradient font-bold">{roiData[1].metrics.valuationMultiple}× Revenue</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Company Valuation</span>
                  <span className="text-gold-gradient font-bold">Rp {Math.round(baseCaseDisplay.companyValuation / 1000)}T</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Your 10% Stake</span>
                  <span className="text-gold-gradient font-bold">Rp {Math.round(baseCaseDisplay.your10Stake)}B</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Initial Investment</span>
                  <span className="text-white font-bold">{roiData[1].metrics.initialInvestment}</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm rounded-md px-4 py-3 border border-primary/30 shadow-md">
                  <span className="text-white font-medium">Return Multiple</span>
                  <span className="text-gold-gradient font-bold text-lg">{Math.round(baseCaseDisplay.returnMultiple)}×</span>
                </div>

                <div className="text-center pt-2">
                  <p className="text-xs text-muted-foreground italic">In 3 years from investment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exit Opportunities */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gold-gradient mb-2" data-testid="text-exit-title">
              Exit Opportunities
            </h3>
            <p className="text-muted-foreground">Multiple pathways to maximize returns</p>
          </div>

          <div ref={opportunitiesRef} className="space-y-4 max-w-5xl mx-auto">
            {exitOpportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <Card
                  key={index}
                  data-opportunity-card="true"
                  className="relative overflow-hidden border-primary/30 hover-elevate transition-all duration-300 shadow-lg hover:shadow-xl"
                  data-testid={`card-opportunity-${index}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
                  <CardContent className="relative p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-md bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center">
                          <Icon className="text-primary w-6 h-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                          {opportunity.title}
                          <CheckCircle2 className="text-primary w-5 h-5" />
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {opportunity.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="text-primary w-5 h-5" />
                <h3 className="text-xl font-bold text-gold-gradient">Investment Highlights</h3>
                <Sparkles className="text-primary w-5 h-5" />
              </div>
              <p className="text-lg text-foreground leading-relaxed" data-testid="text-roi-summary">
                TradeX offers exceptional{" "}
                <span className="text-gold-gradient font-bold">96-240x return potential</span> in just{" "}
                <span className="text-gold-gradient font-bold">3 years</span>. With conservative projections 
                showing <span className="text-gold-gradient font-bold">Rp 240B returns</span> and base case 
                reaching <span className="text-gold-gradient font-bold">Rp 600B</span> on a{" "}
                <span className="text-gold-gradient font-bold">Rp 2.5B investment</span> — backed by rapid 
                revenue growth, strong valuation multiples, and multiple strategic exit pathways in 
                Indonesia's booming fintech market.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
