import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Target, 
  TrendingUp, 
  PieChart,
  Rocket,
  Code,
  Megaphone,
  Shield,
  Sparkles
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fundingBg from "@assets/generated_images/investment_opportunity_dashboard_visualization.png";

gsap.registerPlugin(ScrollTrigger);

const investmentTerms = {
  seeking: "Rp 2.5 MILIAR",
  seekingUsd: "USD ~$160,000",
  valuation: "Rp 25 MILIAR",
  equity: "10%"
};

const useOfFunds = [
  { 
    name: "Technology & Development", 
    percentage: 35, 
    icon: Code,
    color: "from-blue-500 to-blue-400",
    borderColor: "border-blue-500/50"
  },
  { 
    name: "Marketing & Acquisition", 
    percentage: 38, 
    icon: Megaphone,
    color: "from-emerald-500 to-emerald-400",
    borderColor: "border-emerald-500/50"
  },
  { 
    name: "Operations & Legal", 
    percentage: 15, 
    icon: Shield,
    color: "from-purple-500 to-purple-400",
    borderColor: "border-purple-500/50"
  },
  { 
    name: "Product & Content", 
    percentage: 12, 
    icon: Rocket,
    color: "from-amber-500 to-amber-400",
    borderColor: "border-amber-500/50"
  }
];

const investorReturns = [
  {
    scenario: "Base Case",
    badge: "Most Likely",
    badgeColor: "bg-gradient-to-r from-emerald-500 to-emerald-400",
    year3Revenue: "Rp 100M/month",
    valuationMultiple: "5x revenue",
    companyValuation: "Rp 6 Triliun",
    your10Percent: "Rp 600 Miliar",
    returnMultiple: "240x",
    returnYears: "in 3 years",
    borderColor: "border-emerald-500/50",
    glowColor: "shadow-emerald-500/30"
  },
  {
    scenario: "Conservative",
    badge: "Low Risk",
    badgeColor: "bg-gradient-to-r from-blue-500 to-blue-400",
    year3Revenue: "Rp 50M/month",
    valuationMultiple: "4x revenue",
    companyValuation: "Rp 2.4 Triliun",
    your10Percent: "Rp 240 Miliar",
    returnMultiple: "96x",
    returnYears: "in 3 years",
    borderColor: "border-blue-500/50",
    glowColor: "shadow-blue-500/30"
  }
];

export default function FundingAskSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const termsRef = useRef<HTMLDivElement>(null);
  const fundsRef = useRef<HTMLDivElement>(null);
  const returnsRef = useRef<HTMLDivElement>(null);
  
  const [fundPercentages, setFundPercentages] = useState(useOfFunds.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const title = titleRef.current;
      const terms = termsRef.current;
      const funds = fundsRef.current;
      const returns = returnsRef.current;

      if (title) {
        gsap.set(title, { opacity: 0, y: -40 });
      }

      if (terms) {
        const termCards = terms.querySelectorAll('[data-term-card]');
        gsap.set(termCards, { opacity: 0, y: 30, scale: 0.95 });
      }

      if (funds) {
        const fundItems = funds.querySelectorAll('[data-fund-item]');
        gsap.set(fundItems, { opacity: 0, x: -30 });
      }

      if (returns) {
        const returnCards = returns.querySelectorAll('[data-return-card]');
        gsap.set(returnCards, { opacity: 0, y: 50, rotateX: 10 });
      }

      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        onEnter: () => {
          const tl = gsap.timeline();

          if (title) {
            tl.to(title, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out"
            });
          }

          if (terms) {
            const termCards = terms.querySelectorAll('[data-term-card]');
            tl.to(termCards, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.4)"
            }, "-=0.4");
          }

          if (funds) {
            const fundItems = funds.querySelectorAll('[data-fund-item]');
            tl.to(fundItems, {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out"
            }, "-=0.3");

            useOfFunds.forEach((fund, index) => {
              gsap.to({}, {
                duration: 1.5,
                delay: 0.5 + (index * 0.1),
                ease: "power2.out",
                onUpdate: function() {
                  const progress = this.progress();
                  setFundPercentages(prev => {
                    const newPercentages = [...prev];
                    newPercentages[index] = Math.round(fund.percentage * progress);
                    return newPercentages;
                  });
                }
              });
            });
          }

          if (returns) {
            const returnCards = returns.querySelectorAll('[data-return-card]');
            tl.to(returnCards, {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out"
            }, "-=0.2");
          }
        }
      });

      const glowCards = section.querySelectorAll('[data-glow-pulse]');
      glowCards.forEach((card) => {
        gsap.to(card, {
          boxShadow: "0 0 40px rgba(212, 175, 55, 0.4)",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-black to-card relative overflow-hidden"
      data-testid="section-funding-ask"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <DollarSign className="text-primary w-8 h-8 animate-pulse" />
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold text-gold-gradient"
              data-testid="text-funding-title"
            >
              Investment Opportunity
            </h2>
            <DollarSign className="text-primary w-8 h-8 animate-pulse" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us in building the future of trading education in Indonesia
          </p>
        </div>

        <div 
          ref={termsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <Card
            data-term-card="true"
            data-glow-pulse="true"
            className="relative overflow-hidden border-primary/50 border-2 hover-elevate transition-all duration-300"
            data-testid="card-seeking"
          >
            <img
              src={fundingBg}
              alt="Investment background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90" />
            <CardContent className="relative p-6 text-center">
              <Target className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-2">SEEKING</p>
              <p className="text-2xl font-bold text-gold-gradient">{investmentTerms.seeking}</p>
              <p className="text-sm text-muted-foreground mt-1">({investmentTerms.seekingUsd})</p>
            </CardContent>
          </Card>

          <Card
            data-term-card="true"
            className="relative overflow-hidden border-blue-500/50 border hover-elevate transition-all duration-300"
            data-testid="card-valuation"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
            <CardContent className="relative p-6 text-center">
              <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-2">PRE-MONEY VALUATION</p>
              <p className="text-2xl font-bold text-gold-gradient">{investmentTerms.valuation}</p>
            </CardContent>
          </Card>

          <Card
            data-term-card="true"
            className="relative overflow-hidden border-emerald-500/50 border hover-elevate transition-all duration-300"
            data-testid="card-equity"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
            <CardContent className="relative p-6 text-center">
              <PieChart className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-2">EQUITY OFFERED</p>
              <p className="text-4xl font-bold text-gold-gradient">{investmentTerms.equity}</p>
            </CardContent>
          </Card>

          <Card
            data-term-card="true"
            className="relative overflow-hidden border-purple-500/50 border hover-elevate transition-all duration-300"
            data-testid="card-opportunity"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
            <CardContent className="relative p-6 text-center">
              <Sparkles className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-2">OPPORTUNITY</p>
              <p className="text-lg font-bold text-gold-gradient">Early Stage Entry</p>
              <p className="text-sm text-muted-foreground mt-1">Ground Floor Access</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/30 hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <PieChart className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-gold-gradient">Use of Funds</h3>
              </div>
              
              <div ref={fundsRef} className="space-y-5">
                {useOfFunds.map((fund, index) => {
                  const Icon = fund.icon;
                  return (
                    <div 
                      key={index}
                      data-fund-item="true"
                      className="group"
                      data-testid={`fund-item-${index}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-md bg-gradient-to-br ${fund.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-foreground font-medium">{fund.name}</span>
                        </div>
                        <span className="text-gold-gradient font-bold text-lg">
                          {fundPercentages[index]}%
                        </span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${fund.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${fundPercentages[index]}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div ref={returnsRef} className="space-y-6">
            <h3 className="text-2xl font-bold text-gold-gradient flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              Investor Returns
            </h3>
            
            {investorReturns.map((returnData, index) => (
              <Card
                key={index}
                data-return-card="true"
                className={`relative overflow-hidden ${returnData.borderColor} border-2 hover-elevate transition-all duration-300 ${returnData.glowColor} shadow-lg hover:shadow-xl`}
                data-testid={`card-return-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent" />
                <CardContent className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Badge className={`${returnData.badgeColor} text-white font-semibold px-3 py-1`}>
                        {returnData.badge}
                      </Badge>
                      <span className="text-lg font-bold text-foreground">{returnData.scenario}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-gold-gradient">{returnData.returnMultiple}</p>
                      <p className="text-xs text-muted-foreground">{returnData.returnYears}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/5 rounded-md p-3 border border-white/10">
                      <p className="text-muted-foreground text-xs mb-1">Year 3 Revenue</p>
                      <p className="text-gold-gradient font-semibold">{returnData.year3Revenue}</p>
                    </div>
                    <div className="bg-white/5 rounded-md p-3 border border-white/10">
                      <p className="text-muted-foreground text-xs mb-1">Valuation Multiple</p>
                      <p className="text-gold-gradient font-semibold">{returnData.valuationMultiple}</p>
                    </div>
                    <div className="bg-white/5 rounded-md p-3 border border-white/10">
                      <p className="text-muted-foreground text-xs mb-1">Company Valuation</p>
                      <p className="text-gold-gradient font-semibold">{returnData.companyValuation}</p>
                    </div>
                    <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-md p-3 border border-primary/30">
                      <p className="text-muted-foreground text-xs mb-1">Your 10% Stake</p>
                      <p className="text-gold-gradient font-bold">{returnData.your10Percent}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 shadow-lg shadow-primary/10 max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-primary w-5 h-5" />
              <h3 className="text-xl font-bold text-gold-gradient">Investment Summary</h3>
              <Sparkles className="text-primary w-5 h-5" />
            </div>
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-funding-summary">
              With just <span className="text-gold-gradient font-bold">Rp 2.5 Miliar</span> investment for{" "}
              <span className="text-gold-gradient font-bold">10% equity</span>, you gain early access to Indonesia's 
              most innovative fintech platform with{" "}
              <span className="text-gold-gradient font-bold">96-240x return potential</span> in 3 years.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
