import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const monthlyData = [
  { month: "Month 1 - 7", users: "550", paying: "300", revenue: "Rp 192M", expenses: "Rp 250M", net: "-Rp 58M", profit: false },
  { month: "Month 8 - 15", users: "1,550", paying: "800", revenue: "Rp 512M", expenses: "Rp 512M", net: "Rp 0 (Break-even)", profit: false },
  { month: "Month 16 - 23", users: "2,800", paying: "1,800", revenue: "Rp 1.15B", expenses: "Rp 820M", net: "+Rp 330M", profit: true }
];

const yearMetrics = [
  { label: "Total Revenue (Month 1-23)", value: "Rp 1.85B", highlight: true },
  { label: "Total Expenses (Month 1-23)", value: "Rp 1.58B", highlight: false },
  { label: "Net Profit (Month 1-23)", value: "Rp 272M", highlight: true }
];

const unitEconomics = [
  { label: "Conversion Rate", value: "20%" },
  { label: "ARPU", value: "Rp 456K" },
  { label: "LTV", value: "Rp 2.1M" },
  { label: "CAC", value: "Rp 132K" },
  { label: "LTV:CAC Ratio", value: "15.9:1", highlight: true },
  { label: "Payback Period", value: "~3 months" },
  { label: "Gross Margin", value: "68%" }
];

export default function FinancialProjections() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const monthCardsRef = useRef<HTMLDivElement>(null);
  const yearMetricsRef = useRef<HTMLDivElement>(null);
  const unitEconomicsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const monthCardsContainer = monthCardsRef.current;
    const yearMetricsContainer = yearMetricsRef.current;
    const unitEconomicsCard = unitEconomicsRef.current;

    if (!section || !monthCardsContainer || !yearMetricsContainer || !unitEconomicsCard) return;

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

      const monthCards = monthCardsContainer.querySelectorAll("[data-month-card]");
      gsap.set(monthCards, { opacity: 0, y: 40, scale: 0.95 });

      ScrollTrigger.create({
        trigger: monthCardsContainer,
        start: "top 80%",
        onEnter: () => {
          gsap.to(monthCards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)",
          });
        },
      });

      const yearMetricCards = yearMetricsContainer.querySelectorAll("[data-year-metric]");
      gsap.set(yearMetricCards, { opacity: 0, y: 30, scale: 0.95 });

      ScrollTrigger.create({
        trigger: yearMetricsContainer,
        start: "top 80%",
        onEnter: () => {
          gsap.to(yearMetricCards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "back.out(1.5)",
          });
        },
      });

      gsap.set(unitEconomicsCard, { opacity: 0, y: 40 });

      const unitItems = unitEconomicsCard.querySelectorAll("[data-unit-item]");
      gsap.set(unitItems, { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: unitEconomicsCard,
        start: "top 80%",
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(unitEconomicsCard, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          }).to(
            unitItems,
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.3"
          );
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-financial-title">
            23-Month Revenue Growth
          </h2>
          <p ref={subtitleRef} className="text-muted-foreground text-lg" data-testid="text-financial-subtitle">
            Break-even in Month 8-15: Sustainable Path to Profitability
          </p>
        </div>

        <div ref={monthCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {monthlyData.map((data, index) => (
            <Card 
              key={index} 
              className="bg-background border-gold-20 hover-elevate"
              data-month-card
              data-testid={`card-month-${index}`}
            >
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-foreground" data-testid={`text-month-label-${index}`}>
                    {data.month}
                  </h3>
                  {data.profit && (
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                      Profitable
                    </Badge>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Users:</span>
                    <span className="text-foreground font-semibold" data-testid={`text-month-users-${index}`}>{data.users}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Paying:</span>
                    <span className="text-foreground font-semibold" data-testid={`text-month-paying-${index}`}>{data.paying}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Revenue:</span>
                    <span className="text-primary font-semibold" data-testid={`text-month-revenue-${index}`}>{data.revenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expenses:</span>
                    <span className="text-foreground font-semibold" data-testid={`text-month-expenses-${index}`}>{data.expenses}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gold-20">
                    <span className="text-muted-foreground">Net:</span>
                    <span className={`font-bold ${data.profit ? 'text-green-500' : 'text-red-500'}`} data-testid={`text-month-net-${index}`}>
                      {data.net}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={yearMetricsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {yearMetrics.map((metric, index) => (
            <Card 
              key={index} 
              className={`border-gold-20 ${metric.highlight ? 'bg-gradient-to-br from-primary/10 to-transparent' : 'bg-card'}`}
              data-year-metric
              data-testid={`card-metric-${index}`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2" data-testid={`text-metric-label-${index}`}>
                  {metric.label}
                </div>
                <div className="text-3xl font-bold text-gold-gradient" data-testid={`text-metric-value-${index}`}>
                  {metric.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card ref={unitEconomicsRef} className="bg-background border-gold-20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gold-gradient mb-6 text-center" data-testid="text-unit-economics-title">
              Unit Economics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {unitEconomics.map((item, index) => (
                <div key={index} className="text-center" data-unit-item data-testid={`unit-economics-${index}`}>
                  <div className="text-sm text-muted-foreground mb-1" data-testid={`text-unit-label-${index}`}>
                    {item.label}
                  </div>
                  <div className={`text-xl font-bold ${item.highlight ? 'text-gold-gradient' : 'text-foreground'}`} data-testid={`text-unit-value-${index}`}>
                    {item.value}
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
