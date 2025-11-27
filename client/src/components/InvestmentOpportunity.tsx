import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenarios = [
  {
    type: "Conservative Case",
    revenue: "Rp 50M/month",
    annual: "Rp 600M",
    multiple: "4× Revenue",
    valuation: "Rp 2.4T",
    stake: "Rp 240B",
    returns: "96×",
    badge: "Safe"
  },
  {
    type: "Base Case (Likely)",
    revenue: "Rp 100M/month",
    annual: "Rp 1.2B",
    multiple: "5× Revenue",
    valuation: "Rp 6T",
    stake: "Rp 600B",
    returns: "240×",
    badge: "Target"
  }
];

const useOfFunds = [
  { category: "Marketing & Acquisition", percentage: "38%", amount: "Rp 950M" },
  { category: "Technology & Development", percentage: "35%", amount: "Rp 875M" },
  { category: "Operations & Legal", percentage: "15%", amount: "Rp 375M" },
  { category: "Product & Content", percentage: "12%", amount: "Rp 300M" }
];

export default function InvestmentOpportunity() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const fundingCardsRef = useRef<HTMLDivElement>(null);
  const scenarioCardsRef = useRef<HTMLDivElement>(null);
  const useOfFundsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const fundingCards = fundingCardsRef.current;
    const scenarioCards = scenarioCardsRef.current;
    const useOfFundsCard = useOfFundsRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      if (title && subtitle) {
        gsap.set([title, subtitle], { opacity: 0, y: 50 });

        ScrollTrigger.create({
          trigger: header,
          start: "top 80%",
          onEnter: () => {
            const tl = gsap.timeline();
            tl.to(title, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            }).to(
              subtitle,
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
              },
              "-=0.4"
            );
          },
        });
      }

      if (fundingCards) {
        const fundingCardElements = fundingCards.querySelectorAll("[data-funding-card]");
        gsap.set(fundingCardElements, { opacity: 0, scale: 0.8, y: 40 });

        ScrollTrigger.create({
          trigger: fundingCards,
          start: "top 80%",
          onEnter: () => {
            gsap.to(fundingCardElements, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "back.out(1.7)",
            });
          },
        });
      }

      if (scenarioCards) {
        const scenarioCardElements = scenarioCards.querySelectorAll("[data-scenario-card]");
        gsap.set(scenarioCardElements, { opacity: 0, x: -60 });

        ScrollTrigger.create({
          trigger: scenarioCards,
          start: "top 80%",
          onEnter: () => {
            gsap.to(scenarioCardElements, {
              opacity: 1,
              x: 0,
              duration: 0.7,
              stagger: 0.2,
              ease: "power3.out",
            });
          },
        });
      }

      if (useOfFundsCard) {
        const progressBars = useOfFundsCard.querySelectorAll("[data-progress-bar]");
        
        gsap.set(useOfFundsCard, { opacity: 0, y: 40, scale: 0.95 });
        gsap.set(progressBars, { width: "0%" });

        ScrollTrigger.create({
          trigger: useOfFundsCard,
          start: "top 80%",
          onEnter: () => {
            const tl = gsap.timeline();
            
            tl.to(useOfFundsCard, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
            }).to(
              progressBars,
              {
                width: (index) => {
                  const percentages = ["38%", "35%", "15%", "12%"];
                  return percentages[index] || "0%";
                },
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
              },
              "-=0.3"
            );
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-investment-title">
            Investment Opportunity
          </h2>
          <p ref={subtitleRef} className="text-muted-foreground text-lg" data-testid="text-investment-subtitle">
            96-240× Return Potential in 3 Years
          </p>
        </div>

        <div ref={fundingCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border-gold-20 text-center hover-elevate" data-testid="card-funding" data-funding-card>
            <CardContent className="p-8 space-y-3">
              <DollarSign className="w-12 h-12 mx-auto text-primary" />
              <div className="text-sm text-muted-foreground">Funding Ask</div>
              <div className="text-4xl font-bold text-gold-gradient" data-testid="text-funding-amount">Rp 2.5B</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold-20 text-center hover-elevate" data-testid="card-equity" data-funding-card>
            <CardContent className="p-8 space-y-3">
              <TrendingUp className="w-12 h-12 mx-auto text-primary" />
              <div className="text-sm text-muted-foreground">Equity Offered</div>
              <div className="text-4xl font-bold text-gold-gradient" data-testid="text-equity">10%</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold-20 text-center hover-elevate" data-testid="card-returns" data-funding-card>
            <CardContent className="p-8 space-y-3">
              <Rocket className="w-12 h-12 mx-auto text-primary" />
              <div className="text-sm text-muted-foreground">Expected Return</div>
              <div className="text-4xl font-bold text-gold-gradient" data-testid="text-returns">96-240×</div>
            </CardContent>
          </Card>
        </div>

        <div ref={scenarioCardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {scenarios.map((scenario, index) => (
            <Card 
              key={index} 
              className={`border-gold-20 ${index === 1 ? 'bg-gradient-to-br from-primary/10 to-transparent gold-glow' : 'bg-card'}`}
              data-testid={`card-scenario-${index}`}
              data-scenario-card
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground" data-testid={`text-scenario-type-${index}`}>
                    {scenario.type}
                  </h3>
                  <Badge className={index === 1 ? "bg-primary text-black" : "bg-secondary"}>
                    {scenario.badge}
                  </Badge>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year 3 Revenue:</span>
                    <span className="text-foreground font-semibold" data-testid={`text-scenario-revenue-${index}`}>{scenario.revenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Revenue:</span>
                    <span className="text-foreground font-semibold" data-testid={`text-scenario-annual-${index}`}>{scenario.annual}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valuation Multiple:</span>
                    <span className="text-foreground font-semibold" data-testid={`text-scenario-multiple-${index}`}>{scenario.multiple}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Company Valuation:</span>
                    <span className="text-primary font-semibold" data-testid={`text-scenario-valuation-${index}`}>{scenario.valuation}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gold-20">
                    <span className="text-muted-foreground">Your 10% Stake:</span>
                    <span className="text-foreground font-bold" data-testid={`text-scenario-stake-${index}`}>{scenario.stake}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gold-20">
                    <span className="text-muted-foreground font-semibold">Return Multiple:</span>
                    <span className="text-3xl font-bold text-gold-gradient" data-testid={`text-scenario-returns-${index}`}>{scenario.returns}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card ref={useOfFundsRef} className="bg-card border-gold-20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gold-gradient mb-6 text-center" data-testid="text-use-of-funds-title">
              Use of Funds
            </h3>
            <div className="space-y-4">
              {useOfFunds.map((fund, index) => (
                <div key={index} className="space-y-2" data-testid={`use-of-funds-${index}`}>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium" data-testid={`text-fund-category-${index}`}>{fund.category}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-semibold" data-testid={`text-fund-percentage-${index}`}>{fund.percentage}</span>
                      <span className="text-muted-foreground" data-testid={`text-fund-amount-${index}`}>{fund.amount}</span>
                    </div>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F7E27A]"
                      data-progress-bar
                      style={{ width: fund.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
