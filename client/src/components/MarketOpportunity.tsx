import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 278, suffix: "M", label: "Indonesia's Population", subtext: "77% internet penetration with 213M active users" },
  { value: 11.5, suffix: "M", label: "Retail Investors (2024)", subtext: "Growing at 42% year-over-year" },
  { value: 6, suffix: "T", label: "Total Addressable Market", subtext: "Based on 5M target users × Rp 1.2M ARPU" }
];

export default function MarketOpportunity() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        onEnter: () => {
          stats.forEach((stat, index) => {
            gsap.to({ val: 0 }, {
              val: stat.value,
              duration: 2,
              ease: "power2.out",
              onUpdate: function() {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = this.targets()[0].val;
                  return newCounts;
                });
              }
            });
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-opportunity-title">
            Market Opportunity
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto" data-testid="text-opportunity-subtitle">
            A massive and growing market ready for innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-lg border border-gold-20 bg-card/50 backdrop-blur-sm hover-elevate"
              data-testid={`stat-${index}`}
            >
              <div className="text-5xl md:text-6xl font-bold text-gold-gradient mb-2" data-testid={`stat-value-${index}`}>
                {stat.suffix === "T" ? `Rp ${counts[index].toFixed(0)}${stat.suffix}` : `${counts[index].toFixed(1)}${stat.suffix}`}
              </div>
              <div className="text-xl font-semibold text-foreground mb-3" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground" data-testid={`stat-subtext-${index}`}>
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
