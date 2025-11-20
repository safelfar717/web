import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Sparkles, Target, DollarSign, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import metricsBg from "@assets/generated_images/Unit_economics_metrics_dashboard_38204899.png";

gsap.registerPlugin(ScrollTrigger);

const roiData = [
  {
    title: "Conservative 96x",
    borderColor: "border-blue-500/50",
    glowColor: "shadow-blue-500/20",
    multiplier: "96x",
    metrics: {
      initialInvestment: "Rp 500M",
      annualFeeProfit: "Rp 600M",
      year1Profit: 2.6,
      year3Profit: 2.6,
      companyValuation: 47,
      your45Stake: 21,
      medianInvestment: "Rp 5.5B",
      returnOnMaxProfit: 96,
      in3YearsInvestment: 48
    }
  },
  {
    title: "Easy Case 240x",
    borderColor: "border-emerald-500/50",
    glowColor: "shadow-emerald-500/20",
    multiplier: "240x",
    metrics: {
      initialInvestment: "Rp 500M",
      annualFeeProfit: "Rp 2.1B",
      year1Profit: 9,
      year3Profit: 9,
      companyValuation: 87,
      your45Stake: 39,
      medianInvestment: "Rp 5.5B",
      returnOnMaxProfit: 240,
      in3YearsInvestment: 120
    }
  }
];

const exitOpportunities = [
  {
    title: "Series A (12-18 Months)",
    description: "Equity raise at 100-200x valuation multiples when we achieve 10,000+ Paid Users in an attractive segment.",
    icon: Target
  },
  {
    title: "Strategic Acquisition (24-36 Months)",
    description: "An additional exit route at an 30-75x through digital brokers (Ajaib,etc). Valuation multiples based on industry standards.",
    icon: DollarSign
  },
  {
    title: "IPO or Direct Listing (3+ Years)",
    description: "Public listing at 50-150x capital at a Rp500triliun+ valuation potential, positioning as a category-defining fintech platform.",
    icon: TrendingUp
  }
];

export default function ROISection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const opportunitiesRef = useRef<HTMLDivElement>(null);
  
  const conservativeValuesRef = useRef({
    year1Profit: 0,
    year3Profit: 0,
    companyValuation: 0,
    your45Stake: 0,
    returnOnMaxProfit: 0,
    in3YearsInvestment: 0
  });
  
  const easyCaseValuesRef = useRef({
    year1Profit: 0,
    year3Profit: 0,
    companyValuation: 0,
    your45Stake: 0,
    returnOnMaxProfit: 0,
    in3YearsInvestment: 0
  });
  
  const [conservativeDisplay, setConservativeDisplay] = useState({
    year1Profit: 0,
    year3Profit: 0,
    companyValuation: 0,
    your45Stake: 0,
    returnOnMaxProfit: 0,
    in3YearsInvestment: 0
  });
  
  const [easyCaseDisplay, setEasyCaseDisplay] = useState({
    year1Profit: 0,
    year3Profit: 0,
    companyValuation: 0,
    your45Stake: 0,
    returnOnMaxProfit: 0,
    in3YearsInvestment: 0
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

      // Animate conservative values using refs
      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 75%",
        onEnter: () => {
          gsap.to(conservativeValuesRef.current, {
            year1Profit: roiData[0].metrics.year1Profit,
            year3Profit: roiData[0].metrics.year3Profit,
            companyValuation: roiData[0].metrics.companyValuation,
            your45Stake: roiData[0].metrics.your45Stake,
            returnOnMaxProfit: roiData[0].metrics.returnOnMaxProfit,
            in3YearsInvestment: roiData[0].metrics.in3YearsInvestment,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              setConservativeDisplay({...conservativeValuesRef.current});
            }
          });
        }
      });

      // Animate easy case values using refs
      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 75%",
        onEnter: () => {
          gsap.to(easyCaseValuesRef.current, {
            year1Profit: roiData[1].metrics.year1Profit,
            year3Profit: roiData[1].metrics.year3Profit,
            companyValuation: roiData[1].metrics.companyValuation,
            your45Stake: roiData[1].metrics.your45Stake,
            returnOnMaxProfit: roiData[1].metrics.returnOnMaxProfit,
            in3YearsInvestment: roiData[1].metrics.in3YearsInvestment,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              setEasyCaseDisplay({...easyCaseValuesRef.current});
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
          {/* Conservative 96x Card */}
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
                  className="bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold px-4 py-1.5 text-lg shadow-md"
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
                  <span className="text-white/90">Initial Investment</span>
                  <span className="text-white font-bold">{roiData[0].metrics.initialInvestment}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Annual fee profit</span>
                  <span className="text-gold-gradient font-bold">{roiData[0].metrics.annualFeeProfit}</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Year 1 Profit</span>
                  <span className="text-gold-gradient font-bold">Rp {conservativeDisplay.year1Profit.toFixed(1)}B</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Year 3 Profit</span>
                  <span className="text-gold-gradient font-bold">Rp {conservativeDisplay.year3Profit.toFixed(1)}B</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Company Valuation</span>
                  <span className="text-gold-gradient font-bold">Rp {Math.round(conservativeDisplay.companyValuation)}B</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Your 45% Stake</span>
                  <span className="text-gold-gradient font-bold">Rp {Math.round(conservativeDisplay.your45Stake)}B</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Median Investment</span>
                  <span className="text-white font-bold">{roiData[0].metrics.medianInvestment}</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm rounded-md px-4 py-3 border border-primary/30 shadow-md">
                  <span className="text-white font-medium">Return on Max Profit</span>
                  <span className="text-gold-gradient font-bold text-lg">{Math.round(conservativeDisplay.returnOnMaxProfit)}x</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm rounded-md px-4 py-3 border border-primary/30 shadow-md">
                  <span className="text-white font-medium">In 3 years Your Investment</span>
                  <span className="text-gold-gradient font-bold text-lg">Rp {Math.round(conservativeDisplay.in3YearsInvestment)}B</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Easy Case 240x Card */}
          <Card
            data-roi-card="true"
            className={`relative overflow-hidden ${roiData[1].borderColor} border-2 hover-elevate transition-all duration-300 shadow-lg ${roiData[1].glowColor} hover:shadow-xl`}
            data-testid="card-roi-easy"
          >
            <img
              src={metricsBg}
              alt="Optimistic ROI projection"
              className="absolute inset-0 w-full h-full object-cover"
              data-testid="img-roi-easy-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90" />

            <CardContent className="relative p-6">
              <div className="flex items-center justify-between mb-6">
                <Badge
                  className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-white font-bold px-4 py-1.5 text-lg shadow-md"
                  data-testid="badge-easy-case"
                >
                  {roiData[1].title}
                </Badge>
                <div className="text-4xl font-bold text-gold-gradient">
                  {roiData[1].multiplier}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Initial Investment</span>
                  <span className="text-white font-bold">{roiData[1].metrics.initialInvestment}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Annual fee profit</span>
                  <span className="text-gold-gradient font-bold">{roiData[1].metrics.annualFeeProfit}</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Year 1 Profit</span>
                  <span className="text-gold-gradient font-bold">Rp {easyCaseDisplay.year1Profit.toFixed(1)}B</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Year 3 Profit</span>
                  <span className="text-gold-gradient font-bold">Rp {easyCaseDisplay.year3Profit.toFixed(1)}B</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Company Valuation</span>
                  <span className="text-gold-gradient font-bold">Rp {Math.round(easyCaseDisplay.companyValuation)}B</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Your 45% Stake</span>
                  <span className="text-gold-gradient font-bold">Rp {Math.round(easyCaseDisplay.your45Stake)}B</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/90">Median Investment</span>
                  <span className="text-white font-bold">{roiData[1].metrics.medianInvestment}</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm rounded-md px-4 py-3 border border-primary/30 shadow-md">
                  <span className="text-white font-medium">Return on Max Profit</span>
                  <span className="text-gold-gradient font-bold text-lg">{Math.round(easyCaseDisplay.returnOnMaxProfit)}x</span>
                </div>

                <div className="flex justify-between items-center text-sm bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm rounded-md px-4 py-3 border border-primary/30 shadow-md">
                  <span className="text-white font-medium">In 3 years Your Investment</span>
                  <span className="text-gold-gradient font-bold text-lg">Rp {Math.round(easyCaseDisplay.in3YearsInvestment)}B</span>
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
                With proven unit economics and multiple exit pathways, TradeX offers{" "}
                <span className="text-gold-gradient font-bold">96-240x return potential</span> in just{" "}
                <span className="text-gold-gradient font-bold">3 years</span>. Conservative projections show{" "}
                <span className="text-gold-gradient font-bold">Rp 48B returns</span>, while optimistic scenarios 
                reach <span className="text-gold-gradient font-bold">Rp 120B</span> — backed by rapid user acquisition, 
                strong margins, and strategic positioning in Indonesia's thriving fintech market.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
