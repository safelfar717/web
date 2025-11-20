import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Target } from "lucide-react";
import month2Bg from "@assets/generated_images/Month_2_profitability_dashboard_b88a69c2.png";
import month3Bg from "@assets/generated_images/Month_3_growth_analytics_1c72396a.png";
import month4Bg from "@assets/generated_images/Month_4_expansion_metrics_470703cd.png";
import chartBg from "@assets/generated_images/Revenue_growth_chart_visualization_92f45469.png";
import metricsBg from "@assets/generated_images/Unit_economics_metrics_dashboard_38204899.png";

const bepPhases = [
  {
    month: "Month 2",
    background: month2Bg,
    metrics: {
      users: 2500,
      paying: 1000,
      revenue: "Rp 640M",
      breakeven: "Rp 485M",
      margin: "~32%",
    },
  },
  {
    month: "Month 3",
    background: month3Bg,
    metrics: {
      users: 5000,
      paying: 2500,
      revenue: "Rp 1.6B",
      breakeven: "Rp 1.25B",
      margin: "~22%",
    },
  },
  {
    month: "Month 4",
    background: month4Bg,
    metrics: {
      users: 10000,
      paying: 5000,
      revenue: "Rp 3.2B",
      breakeven: "Rp 2.5B",
      margin: "~22%",
    },
  },
];

const chartData = [
  { month: "Month 1", revenue: 15 },
  { month: "Month 2", revenue: 35 },
  { month: "Month 3", revenue: 55 },
  { month: "Month 4", revenue: 75 },
  { month: "Month 5", revenue: 88 },
  { month: "Month 6", revenue: 100 },
];

export default function BreakEvenSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [chartHeights, setChartHeights] = useState(chartData.map(() => 0));
  const [userCounts, setUserCounts] = useState(bepPhases.map(() => 0));
  const [payingCounts, setPayingCounts] = useState(bepPhases.map(() => 0));
  const hasAnimatedRef = useRef(false);
  const isMountedRef = useRef(true);

  const formatNumber = (num: number) => {
    return num.toLocaleString("id-ID");
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    isMountedRef.current = true;
    const section = sectionRef.current;
    const cards = cardsRef.current;
    const chart = chartRef.current;
    const metrics = metricsRef.current;

    if (!section || !cards || !chart || !metrics) return;

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
        const bepCards = cards.querySelectorAll("[data-bep-card]");
        const chartBars = chart.querySelectorAll("[data-chart-bar]");
        const metricCards = metrics.querySelectorAll("[data-metric-card]");
        
        gsap.set([bepCards, chartBars, metricCards], { opacity: 1, y: 0 });
        
        if (isMountedRef.current) {
          setChartHeights(chartData.map((d) => d.revenue));
          setUserCounts(bepPhases.map((p) => p.metrics.users));
          setPayingCounts(bepPhases.map((p) => p.metrics.paying));
        }
        return;
      }

      const ctx = gsap.context(() => {
        const bepCards = cards.querySelectorAll("[data-bep-card]");
        const chartBars = chart.querySelectorAll("[data-chart-bar]");
        const metricCards = metrics.querySelectorAll("[data-metric-card]");

        gsap.set([bepCards, chartBars, metricCards], { opacity: 0, y: 30 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        tl.to(bepCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          onComplete: () => {
            if (!hasAnimatedRef.current && isMountedRef.current) {
              hasAnimatedRef.current = true;
              bepPhases.forEach((phase, index) => {
                gsap.to(
                  {},
                  {
                    duration: 1.5,
                    ease: "power2.out",
                    onUpdate: function () {
                      if (isMountedRef.current) {
                        const progress = this.progress();
                        setUserCounts((prev) => {
                          const newCounts = [...prev];
                          newCounts[index] = Math.floor(phase.metrics.users * progress);
                          return newCounts;
                        });
                        setPayingCounts((prev) => {
                          const newCounts = [...prev];
                          newCounts[index] = Math.floor(phase.metrics.paying * progress);
                          return newCounts;
                        });
                      }
                    },
                  }
                );
              });
            }
          },
        });

        tl.to(
          chartBars,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
            onStart: () => {
              chartData.forEach((data, index) => {
                gsap.to(
                  {},
                  {
                    duration: 1,
                    delay: index * 0.1,
                    ease: "power2.out",
                    onUpdate: function () {
                      if (isMountedRef.current) {
                        const progress = this.progress();
                        setChartHeights((prev) => {
                          const newHeights = [...prev];
                          newHeights[index] = data.revenue * progress;
                          return newHeights;
                        });
                      }
                    },
                  }
                );
              });
            },
          },
          "-=0.4"
        );

        tl.to(
          metricCards,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }, section);

      return ctx;
    };

    const cleanup = initAnimation();

    return () => {
      isMountedRef.current = false;
      cleanup.then((ctx) => ctx?.revert());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-card to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4"
            data-testid="text-breakeven-title"
          >
            Break-Even in Month 2
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto mb-4"
            data-testid="text-breakeven-subtitle"
          >
            Rapid Path to Profitability
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge
              variant="outline"
              className="border-primary/50 px-4 py-1.5 text-[19px] bg-[#d6b13ad1] text-[#0d0901]"
            >
              Sustainable Growth Model
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Left Column - BEP Phases */}
          <div ref={cardsRef} className="lg:col-span-4 space-y-4">
            {bepPhases.map((phase, index) => (
              <Card
                key={index}
                data-bep-card="true"
                className="relative overflow-hidden border-gold-20 hover-elevate transition-all duration-300"
                data-testid={`card-bep-${index}`}
              >
                <img
                  src={phase.background}
                  alt={`${phase.month} break-even metrics`}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-testid={`img-bep-bg-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90" />

                <CardContent className="relative p-5">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      className="bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] text-black font-bold px-3 py-1"
                      data-testid={`badge-month-${index}`}
                    >
                      {phase.month}
                    </Badge>
                    <TrendingUp className="text-gold-gradient" size={20} />
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10">
                      <span className="text-white/90">Users:</span>
                      <span className="text-gold-gradient font-bold">
                        {formatNumber(userCounts[index])}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10">
                      <span className="text-white/90">Paying:</span>
                      <span className="text-gold-gradient font-bold">
                        {formatNumber(payingCounts[index])}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10">
                      <span className="text-white/90">Revenue:</span>
                      <span className="text-gold-gradient font-bold">
                        {phase.metrics.revenue}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10">
                      <span className="text-white/90">Break-even:</span>
                      <span className="text-gold-gradient font-bold">
                        {phase.metrics.breakeven}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm rounded-md px-3 py-2 border border-primary/30">
                      <span className="text-white font-medium">Margin:</span>
                      <span className="text-gold-gradient font-bold text-base">
                        {phase.metrics.margin}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Center Column - Financial Growth Chart */}
          <div ref={chartRef} className="lg:col-span-4">
            <Card
              className="relative overflow-hidden border-primary/30 h-full"
              data-testid="card-growth-chart"
            >
              <img
                src={chartBg}
                alt="Financial growth chart visualization"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="img-chart-bg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/90" />

              <CardContent className="relative h-full flex flex-col p-6">
                <div className="text-center mb-6">
                  <h3
                    className="text-xl font-bold text-gold-gradient mb-2"
                    data-testid="text-chart-title"
                  >
                    FINANCIAL GROWTH CHART
                  </h3>
                  <p className="text-white/70 text-sm">Revenue Progression</p>
                </div>

                <div className="flex-1 flex items-end justify-around gap-2 px-4 pb-8">
                  {chartData.map((data, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 flex-1"
                      data-chart-bar="true"
                      data-testid={`chart-bar-${index}`}
                    >
                      <div
                        className="w-full bg-gradient-to-t from-[#10b981] to-[#34d399] rounded-t-sm relative"
                        style={{ height: `${chartHeights[index] * 2}px` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
                      </div>
                      <span className="text-xs text-white/80 font-medium">
                        {data.month.replace("Month ", "M")}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="h-3 w-3 bg-gradient-to-br from-[#10b981] to-[#34d399] rounded-sm" />
                  <span className="text-xs text-white/80">Revenue Growth</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Metrics */}
          <div ref={metricsRef} className="lg:col-span-4 space-y-4">
            {/* Key Metrics */}
            <Card
              data-metric-card="true"
              className="relative overflow-hidden border-gold-20 hover-elevate transition-all duration-300"
              data-testid="card-key-metrics"
            >
              <img
                src={metricsBg}
                alt="Key financial metrics"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="img-metrics-bg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90" />

              <CardContent className="relative p-5">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="text-gold-gradient" size={20} />
                  <h3
                    className="text-lg font-bold text-white"
                    data-testid="text-key-metrics-title"
                  >
                    Key Metrics
                  </h3>
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10">
                    <span className="text-white/90">Gross margin:</span>
                    <span className="text-gold-gradient font-bold">73%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10">
                    <span className="text-white/90">Revenue/User:</span>
                    <span className="text-gold-gradient font-bold">Rp 250K</span>
                  </div>
                  <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10">
                    <span className="text-white/90">Fixed Costs:</span>
                    <span className="text-gold-gradient font-bold">Rp 465M</span>
                  </div>
                  <div className="flex justify-between items-center text-sm bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm rounded-md px-3 py-2 border border-primary/30">
                    <span className="text-white font-medium">CAC:</span>
                    <span className="text-gold-gradient font-bold text-base">
                      Rp 750K
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Unit Economics */}
            <Card
              data-metric-card="true"
              className="relative overflow-hidden border-gold-20 hover-elevate transition-all duration-300"
              data-testid="card-unit-economics"
            >
              <img
                src={metricsBg}
                alt="Unit economics metrics"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="img-economics-bg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90" />

              <CardContent className="relative p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="text-gold-gradient" size={20} />
                  <h3
                    className="text-lg font-bold text-white"
                    data-testid="text-unit-economics-title"
                  >
                    Unit Economics
                  </h3>
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10">
                    <span className="text-white/90">CAC:</span>
                    <span className="text-gold-gradient font-bold">Rp 750K</span>
                  </div>
                  <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10">
                    <span className="text-white/90">LTV:</span>
                    <span className="text-gold-gradient font-bold">Rp 7.68M</span>
                  </div>
                  <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10">
                    <span className="text-white/90">LTV/CAC:</span>
                    <span className="text-gold-gradient font-bold">10.24x</span>
                  </div>
                  <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10">
                    <span className="text-white/90">Payback:</span>
                    <span className="text-gold-gradient font-bold">3 months</span>
                  </div>
                  <div className="flex justify-between items-center text-sm bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm rounded-md px-3 py-2 border border-primary/30">
                    <span className="text-white font-medium">Gross Margin:</span>
                    <span className="text-gold-gradient font-bold text-base">
                      73%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Summary */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-foreground" data-testid="text-bep-summary">
                Dengan <span className="text-gold-gradient font-bold">margin 73%</span> dan{" "}
                <span className="text-gold-gradient font-bold">LTV/CAC ratio 10.24x</span>,
                TradeX mencapai{" "}
                <span className="text-gold-gradient font-bold">break-even di bulan ke-2</span>{" "}
                dan{" "}
                <span className="text-gold-gradient font-bold">
                  sustainable profitability di bulan ke-4
                </span>{" "}
                dengan unit economics yang sangat kuat
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
