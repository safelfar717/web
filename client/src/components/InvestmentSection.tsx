import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  Target,
  Sparkles,
  ChartBar,
  Rocket,
  Shield
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import investmentImage from "@assets/generated_images/investment_opportunity_dashboard_visualization.png";

const investmentData = {
  overview: {
    seeking: "Rp 2.5B",
    equity: "10%",
    valuation: "Rp 25 Billion"
  },
  terms: [
    {
      label: "Funding Ask",
      value: "Rp 2.5-3 Billion",
      icon: DollarSign,
      color: "text-green-400",
      borderColor: "border-green-500/50"
    },
    {
      label: "Equity Offered",
      value: "10%",
      icon: Target,
      color: "text-blue-400",
      borderColor: "border-blue-500/50"
    },
    {
      label: "Pre-Money Valuation",
      value: "Rp 22.5-27.5 Billion",
      icon: ChartBar,
      color: "text-purple-400",
      borderColor: "border-purple-500/50"
    },
    {
      label: "Post-Money Valuation",
      value: "Rp 25-30 Billion",
      icon: TrendingUp,
      color: "text-cyan-400",
      borderColor: "border-cyan-500/50"
    }
  ],
  useOfFunds: [
    { name: "Product Development", value: 40, color: "#3b82f6" },
    { name: "Marketing", value: 20, color: "#10b981" },
    { name: "Operations", value: 20, color: "#f59e0b" },
    { name: "Hiring", value: 20, color: "#8b5cf6" }
  ],
  milestones: [
    {
      title: "Marketing & Acquisition",
      percentage: "30%",
      amount: "Rp 750M",
      icon: Rocket,
      color: "text-blue-400"
    },
    {
      title: "Tech R&D & Development",
      percentage: "25%",
      amount: "Rp 625M",
      icon: Sparkles,
      color: "text-purple-400"
    },
    {
      title: "Operations Support",
      percentage: "15%",
      amount: "Rp 375M",
      icon: ChartBar,
      color: "text-emerald-400"
    },
    {
      title: "Advisor Reserve",
      percentage: "15%",
      amount: "Rp 375M",
      icon: Target,
      color: "text-cyan-400"
    },
    {
      title: "Reserve & Contingency",
      percentage: "15%",
      amount: "Rp 375M",
      icon: Shield,
      color: "text-amber-400"
    }
  ],
  highlights: [
    "Break-even Month 3",
    "Subscription Platform 12",
    "85%+ Net Revenue Margin",
    "IPCO+ Enable (B2C)"
  ]
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg p-3 shadow-lg">
        <p className="text-white font-semibold">{payload[0].name}</p>
        <p className="text-gray-300">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function InvestmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const termsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    const header = headerRef.current;
    const terms = termsRef.current;
    const chart = chartRef.current;
    const milestones = milestonesRef.current;
    const highlights = highlightsRef.current;

    if (!section || !header || !terms || !chart || !milestones || !highlights) return;

    let gsap: typeof import("gsap").default;
    let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;

    const initAnimation = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      gsap = gsapModule.default;
      ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        const allElements = section.querySelectorAll("[data-animate]");
        gsap.set(allElements, { opacity: 1, y: 0 });
        return;
      }

      const ctx = gsap.context(() => {
        const headerElements = header.querySelectorAll("[data-animate]");
        const termCards = terms.querySelectorAll("[data-animate]");
        const chartElements = chart.querySelectorAll("[data-animate]");
        const milestoneCards = milestones.querySelectorAll("[data-animate]");
        const highlightBadges = highlights.querySelectorAll("[data-animate]");

        gsap.set([headerElements, termCards, chartElements, milestoneCards, highlightBadges], {
          opacity: 0,
          y: 40,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        // Animate header
        tl.to(headerElements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });

        // Animate terms cards
        tl.to(
          termCards,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        );

        // Animate chart
        tl.to(
          chartElements,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.2)",
          },
          "-=0.4"
        );

        // Animate milestones
        tl.to(
          milestoneCards,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.5"
        );

        // Animate highlights
        tl.to(
          highlightBadges,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }, section);

      return () => {
        ctx.revert();
      };
    };

    const cleanup = initAnimation();
    
    return () => {
      if (cleanup) {
        cleanup.then((cleanupFn) => {
          if (cleanupFn) cleanupFn();
        });
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-black overflow-hidden"
      data-testid="section-investment"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={investmentImage} 
          alt="Investment Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 
            data-animate 
            className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" 
            data-testid="text-investment-title"
          >
            Investment Opportunity
          </h2>
          <p 
            data-animate 
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-8" 
            data-testid="text-investment-subtitle"
          >
            Kesempatan investasi strategis untuk pertumbuhan bisnis yang agresif dan berkelanjutan
          </p>
          
          {/* Investment Overview */}
          <div data-animate className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-center">
            <div>
              <p className="text-sm text-gray-400 mb-1">Seeking</p>
              <p className="text-3xl md:text-4xl font-bold text-green-400" data-testid="text-investment-seeking">
                {investmentData.overview.seeking}
              </p>
            </div>
            <div className="text-4xl text-gray-600">•</div>
            <div>
              <p className="text-sm text-gray-400 mb-1">For Equity</p>
              <p className="text-3xl md:text-4xl font-bold text-blue-400" data-testid="text-investment-equity">
                {investmentData.overview.equity}
              </p>
            </div>
            <div className="text-4xl text-gray-600">•</div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Valuation</p>
              <p className="text-3xl md:text-4xl font-bold text-purple-400" data-testid="text-investment-valuation">
                {investmentData.overview.valuation}
              </p>
            </div>
          </div>
        </div>

        {/* Investment Terms */}
        <div ref={termsRef} className="mb-16">
          <h3 data-animate className="text-2xl font-bold text-white mb-6 text-center">
            Investment Terms
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentData.terms.map((term, index) => {
              const IconComponent = term.icon;
              return (
                <Card
                  key={index}
                  data-animate
                  className={`bg-black/60 backdrop-blur-sm border ${term.borderColor} shadow-lg hover-elevate active-elevate-2 transition-all duration-300`}
                  data-testid={`card-term-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className={`p-3 rounded-lg bg-black/80 border ${term.borderColor}`}>
                        <IconComponent className={`w-6 h-6 ${term.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{term.label}</p>
                        <p className={`text-lg font-bold ${term.color}`}>{term.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Use of Funds Section */}
        <div ref={chartRef} className="mb-16">
          <Card 
            data-animate 
            className="bg-black/40 backdrop-blur-sm border border-gold-500/20 shadow-gold-500/10 shadow-lg"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gold-gradient">
                Use of Funds
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Pie Chart */}
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={investmentData.useOfFunds}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {investmentData.useOfFunds.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Legend with detailed breakdown */}
                <div className="space-y-4">
                  {investmentData.useOfFunds.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-black/60 rounded-lg border border-gray-700/50"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-sm" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-white font-medium">{item.name}</span>
                      </div>
                      <span className="text-gray-300 font-semibold">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Milestones */}
        <div ref={milestonesRef} className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Key Milestones
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentData.milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <Card
                  key={index}
                  data-animate
                  className="bg-black/60 backdrop-blur-sm border border-gray-700/50 shadow-lg hover-elevate active-elevate-2 transition-all duration-300"
                  data-testid={`card-milestone-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className={`p-3 rounded-lg bg-black/80 border border-gray-700/50`}>
                        <IconComponent className={`w-6 h-6 ${milestone.color}`} />
                      </div>
                      <h4 className="text-sm font-semibold text-white">
                        {milestone.title}
                      </h4>
                      <div className="space-y-1">
                        <p className={`text-2xl font-bold ${milestone.color}`}>
                          {milestone.percentage}
                        </p>
                        <p className="text-sm text-gray-400">{milestone.amount}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Key Highlights */}
        <div ref={highlightsRef} className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Key Highlights
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {investmentData.highlights.map((highlight, index) => (
              <Badge
                key={index}
                data-animate
                className="px-6 py-3 text-base font-semibold bg-gold-500/20 text-gold-400 border border-gold-500/50 hover:bg-gold-500/30"
                data-testid={`badge-highlight-${index}`}
              >
                {highlight}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
