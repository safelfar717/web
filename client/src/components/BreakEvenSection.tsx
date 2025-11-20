import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Target, ArrowUpRight, Sparkles } from "lucide-react";
import month2Bg from "@assets/generated_images/Month_2_profitability_dashboard_b88a69c2.png";
import month3Bg from "@assets/generated_images/Month_3_growth_analytics_1c72396a.png";
import month4Bg from "@assets/generated_images/Month_4_expansion_metrics_470703cd.png";
import chartBg from "@assets/generated_images/Revenue_growth_chart_visualization_92f45469.png";
import metricsBg from "@assets/generated_images/Unit_economics_metrics_dashboard_38204899.png";
import bepDashboard from "@assets/BEP_1763609815184.png";

const bepPhases = [
  {
    month: "Month 2",
    background: month2Bg,
    borderColor: "border-blue-500/50",
    glowColor: "shadow-blue-500/20",
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
    borderColor: "border-cyan-500/50",
    glowColor: "shadow-cyan-500/20",
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
    borderColor: "border-blue-400/50",
    glowColor: "shadow-blue-400/20",
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

const keyMetricsData = [
  { label: "Gross margin", value: "73%", animated: 73 },
  { label: "Revenue/User", value: "Rp 250K", animated: 250 },
  { label: "Fixed Costs", value: "Rp 465M", animated: 465 },
  { label: "CAC", value: "Rp 750K", animated: 750, highlight: true },
];

const unitEconomicsData = [
  { label: "CAC", value: "Rp 750K", animated: 750 },
  { label: "LTV", value: "Rp 7.68M", animated: 7.68 },
  { label: "LTV/CAC", value: "10.24x", animated: 10.24 },
  { label: "Payback", value: "3 months", animated: 3 },
  { label: "Gross Margin", value: "73%", animated: 73, highlight: true },
];

export default function BreakEvenSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [chartHeights, setChartHeights] = useState(chartData.map(() => 0));
  const [userCounts, setUserCounts] = useState(bepPhases.map(() => 0));
  const [payingCounts, setPayingCounts] = useState(bepPhases.map(() => 0));
  const [keyMetricsValues, setKeyMetricsValues] = useState(keyMetricsData.map(() => 0));
  const [economicsValues, setEconomicsValues] = useState(unitEconomicsData.map(() => 0));
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
    const dashboard = dashboardRef.current;

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
          setKeyMetricsValues(keyMetricsData.map((m) => m.animated));
          setEconomicsValues(unitEconomicsData.map((m) => m.animated));
        }
        return;
      }

      const ctx = gsap.context(() => {
        const bepCards = cards.querySelectorAll("[data-bep-card]");
        const chartBars = chart.querySelectorAll("[data-chart-bar]");
        const metricCards = metrics.querySelectorAll("[data-metric-card]");

        gsap.set([bepCards, chartBars, metricCards], { opacity: 0, y: 30 });

        // Dashboard image animation
        if (dashboard) {
          gsap.fromTo(
            dashboard,
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        // Animate BEP cards with stagger
        tl.to(bepCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          onComplete: () => {
            if (!hasAnimatedRef.current && isMountedRef.current) {
              hasAnimatedRef.current = true;
              
              // Animate user and paying counts
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

        // Animate chart bars with bounce effect
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

        // Animate metric cards
        tl.to(
          metricCards,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            onComplete: () => {
              // Animate key metrics values
              keyMetricsData.forEach((metric, index) => {
                gsap.to(
                  {},
                  {
                    duration: 1.2,
                    ease: "power2.out",
                    onUpdate: function () {
                      if (isMountedRef.current) {
                        const progress = this.progress();
                        setKeyMetricsValues((prev) => {
                          const newValues = [...prev];
                          newValues[index] = metric.animated * progress;
                          return newValues;
                        });
                      }
                    },
                  }
                );
              });

              // Animate economics values
              unitEconomicsData.forEach((metric, index) => {
                gsap.to(
                  {},
                  {
                    duration: 1.2,
                    delay: 0.2,
                    ease: "power2.out",
                    onUpdate: function () {
                      if (isMountedRef.current) {
                        const progress = this.progress();
                        setEconomicsValues((prev) => {
                          const newValues = [...prev];
                          newValues[index] = metric.animated * progress;
                          return newValues;
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

        // Add floating animation to cards
        gsap.to(bepCards, {
          y: -5,
          duration: 2,
          ease: "power1.inOut",
          stagger: 0.2,
          repeat: -1,
          yoyo: true,
          delay: 1,
        });

        // Add pulse effect to highlight metrics
        const highlights = section.querySelectorAll("[data-highlight]");
        gsap.to(highlights, {
          scale: 1.02,
          duration: 1.5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          delay: 1.5,
        });
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
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-primary w-6 h-6 animate-pulse" />
            <h2
              className="text-4xl md:text-5xl font-bold text-gold-gradient"
              data-testid="text-breakeven-title"
            >
              Break-Even in Month 2
            </h2>
            <Sparkles className="text-primary w-6 h-6 animate-pulse" />
          </div>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto mb-4"
            data-testid="text-breakeven-subtitle"
          >
            Rapid Path to Profitability
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge
              variant="outline"
              className="border-primary/50 px-4 py-1.5 text-[19px] bg-[#d6b13ad1] text-[#0d0901] shadow-lg shadow-primary/20"
            >
              Sustainable Growth Model
            </Badge>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div ref={dashboardRef} className="mb-12 max-w-5xl mx-auto">
          <Card className="relative overflow-hidden border-primary/20 shadow-2xl shadow-primary/10">
            <img
              src={bepDashboard}
              alt="Break-even analysis dashboard"
              className="w-full h-auto"
              data-testid="img-bep-dashboard"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Left Column - BEP Phases */}
          <div ref={cardsRef} className="lg:col-span-4 space-y-4">
            {bepPhases.map((phase, index) => (
              <Card
                key={index}
                data-bep-card="true"
                className={`relative overflow-hidden ${phase.borderColor} border-2 hover-elevate transition-all duration-300 shadow-lg ${phase.glowColor} hover:shadow-xl`}
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
                      className="bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] text-black font-bold px-3 py-1 shadow-md"
                      data-testid={`badge-month-${index}`}
                    >
                      {phase.month}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="text-gold-gradient animate-pulse" size={20} />
                      <ArrowUpRight className="text-green-400" size={16} />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10 hover:bg-white/10 transition-colors">
                      <span className="text-white/90">Users:</span>
                      <span className="text-gold-gradient font-bold">
                        {formatNumber(userCounts[index])}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10 hover:bg-white/10 transition-colors">
                      <span className="text-white/90">Paying:</span>
                      <span className="text-gold-gradient font-bold">
                        {formatNumber(payingCounts[index])}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10 hover:bg-white/10 transition-colors">
                      <span className="text-white/90">Revenue:</span>
                      <span className="text-gold-gradient font-bold">
                        {phase.metrics.revenue}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10 hover:bg-white/10 transition-colors">
                      <span className="text-white/90">Break-even:</span>
                      <span className="text-gold-gradient font-bold">
                        {phase.metrics.breakeven}
                      </span>
                    </div>
                    <div 
                      className="flex justify-between items-center text-sm bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm rounded-md px-3 py-2 border border-primary/30 shadow-md"
                      data-highlight="true"
                    >
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
              className="relative overflow-hidden border-green-500/50 border-2 h-full shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all"
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
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="text-green-400 w-5 h-5" />
                    <h3
                      className="text-xl font-bold text-gold-gradient"
                      data-testid="text-chart-title"
                    >
                      FINANCIAL GROWTH CHART
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm">Revenue Progression</p>
                </div>

                <div className="flex-1 flex items-end justify-around gap-2 px-4 pb-8">
                  {chartData.map((data, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 flex-1 group"
                      data-chart-bar="true"
                      data-testid={`chart-bar-${index}`}
                    >
                      <div
                        className="w-full bg-gradient-to-t from-[#10b981] to-[#34d399] rounded-t-md relative overflow-hidden transition-all group-hover:shadow-lg group-hover:shadow-green-400/50"
                        style={{ height: `${chartHeights[index] * 2}px` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 animate-pulse" />
                      </div>
                      <span className="text-xs text-white/80 font-medium group-hover:text-white transition-colors">
                        {data.month.replace("Month ", "M")}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="h-3 w-3 bg-gradient-to-br from-[#10b981] to-[#34d399] rounded-sm animate-pulse" />
                  <span className="text-xs text-white/80">Revenue Growth</span>
                  <ArrowUpRight className="text-green-400 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Metrics */}
          <div ref={metricsRef} className="lg:col-span-4 space-y-4">
            {/* Key Metrics */}
            <Card
              data-metric-card="true"
              className="relative overflow-hidden border-rose-500/50 border-2 hover-elevate transition-all duration-300 shadow-lg shadow-rose-500/20 hover:shadow-xl hover:shadow-rose-500/30"
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
                  <DollarSign className="text-gold-gradient animate-pulse" size={20} />
                  <h3
                    className="text-lg font-bold text-white"
                    data-testid="text-key-metrics-title"
                  >
                    Key Metrics
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {keyMetricsData.map((metric, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center text-sm backdrop-blur-sm rounded-md px-3 py-2 border transition-all hover:scale-[1.02] ${
                        metric.highlight
                          ? "bg-gradient-to-r from-primary/20 to-primary/10 border-primary/30 shadow-md"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                      data-highlight={metric.highlight ? "true" : undefined}
                    >
                      <span className={metric.highlight ? "text-white font-medium" : "text-white/90"}>
                        {metric.label}:
                      </span>
                      <span className={`text-gold-gradient font-bold ${metric.highlight ? "text-base" : ""}`}>
                        {metric.label === "Gross margin" && `${Math.round(keyMetricsValues[index])}%`}
                        {metric.label === "Revenue/User" && `Rp ${Math.round(keyMetricsValues[index])}K`}
                        {metric.label === "Fixed Costs" && `Rp ${Math.round(keyMetricsValues[index])}M`}
                        {metric.label === "CAC" && `Rp ${Math.round(keyMetricsValues[index])}K`}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Unit Economics */}
            <Card
              data-metric-card="true"
              className="relative overflow-hidden border-pink-500/50 border-2 hover-elevate transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/30"
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
                  <Target className="text-gold-gradient animate-pulse" size={20} />
                  <h3
                    className="text-lg font-bold text-white"
                    data-testid="text-unit-economics-title"
                  >
                    Unit Economics
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {unitEconomicsData.map((metric, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center text-sm backdrop-blur-sm rounded-md px-3 py-2 border transition-all hover:scale-[1.02] ${
                        metric.highlight
                          ? "bg-gradient-to-r from-primary/20 to-primary/10 border-primary/30 shadow-md"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                      data-highlight={metric.highlight ? "true" : undefined}
                    >
                      <span className={metric.highlight ? "text-white font-medium" : "text-white/90"}>
                        {metric.label}:
                      </span>
                      <span className={`text-gold-gradient font-bold ${metric.highlight ? "text-base" : ""}`}>
                        {metric.label === "CAC" && `Rp ${Math.round(economicsValues[index])}K`}
                        {metric.label === "LTV" && `Rp ${economicsValues[index].toFixed(2)}M`}
                        {metric.label === "LTV/CAC" && `${economicsValues[index].toFixed(2)}x`}
                        {metric.label === "Payback" && `${Math.round(economicsValues[index])} months`}
                        {metric.label === "Gross Margin" && `${Math.round(economicsValues[index])}%`}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Summary */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="text-primary w-5 h-5" />
                <h3 className="text-xl font-bold text-gold-gradient">Kesimpulan</h3>
                <Sparkles className="text-primary w-5 h-5" />
              </div>
              <p className="text-lg text-foreground leading-relaxed" data-testid="text-bep-summary">
                Dengan <span className="text-gold-gradient font-bold">margin 73%</span> dan{" "}
                <span className="text-gold-gradient font-bold">LTV/CAC ratio 10.24x</span>,
                TradeX mencapai{" "}
                <span className="text-gold-gradient font-bold">break-even di bulan ke-2</span>{" "}
                dan{" "}
                <span className="text-gold-gradient font-bold">
                  sustainable profitability di bulan ke-4
                </span>{" "}
                dengan unit economics yang sangat kuat. Model bisnis ini menunjukkan 
                pertumbuhan eksponensial dengan payback period hanya{" "}
                <span className="text-gold-gradient font-bold">3 bulan</span>, membuktikan 
                efisiensi tinggi dalam akuisisi dan retensi pengguna.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
