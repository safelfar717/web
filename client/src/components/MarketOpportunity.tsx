import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import marketSizeBg from "@assets/generated_images/Indonesia_market_size_digital_visualization_7f61a500.png";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 0,
    suffix: "",
    label: "Market Size Indonesia",
    subtext: "",
    isFeatured: true,
    background: marketSizeBg,
  },
  {
    value: 278,
    suffix: "M",
    label: "Indonesia's Population",
    subtext: "77% internet penetration with 213M active users",
  },
  {
    value: 213,
    suffix: "M",
    label: "Internet Users",
    subtext: "77% of population actively online",
  },
  {
    value: 165,
    suffix: "M",
    label: "E-wallet Users",
    subtext: "60% adoption rate for digital payments",
  },
  {
    value: 135,
    suffix: "M",
    label: "Millennial + Gen Z",
    subtext: "49% of population, digitally native traders",
  },
  {
    value: 1.2,
    suffix: "M",
    label: "Rp 1.2M/year",
    subtext: "ARPU (Pendapatan Rata-Rata per Pengguna perTahun) | Pertumbuhan YoY: +42% | Modal rata-rata: Rp 5-10 M",
  },
  {
    value: 11.5,
    suffix: "M",
    label: "Retail Investors (2024)",
    subtext: "Growing at 42% year-over-year",
  },
  {
    value: 40,
    suffix: "M",
    label: "Target 2030",
    subtext: "OJK projection for retail investors",
  },
  {
    value: 28.5,
    suffix: "M",
    label: "Potensi Market",
    subtext: "NEW investors opportunity (2024-2030)",
  },
  {
    value: 140,
    suffix: "T",
    label: "TAM",
    subtext: "Total Addressable Market Rp140 Triliun ($9B)",
  },
];

export default function MarketOpportunity() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuredCardRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    const featuredCard = featuredCardRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        onEnter: () => {
          stats.forEach((stat, index) => {
            if (stat.isFeatured) return;
            gsap.to(
              { val: 0 },
              {
                val: stat.value,
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = this.targets()[0].val;
                    return newCounts;
                  });
                },
              },
            );
          });
        },
      });

      if (featuredCard) {
        gsap.to(featuredCard, {
          boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-black to-card"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4"
            data-testid="text-opportunity-title"
          >
            Market Opportunity
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            data-testid="text-opportunity-subtitle"
          >
            Indonesia = Surga Fintech Belum Tergarap - Market yang sangat besar
            & terus bertumbuh, siap untuk ber-evolusi dan inovasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            if (stat.isFeatured) {
              return (
                <div
                  key={index}
                  ref={featuredCardRef}
                  className="relative overflow-hidden rounded-lg border border-gold-20 h-64 md:col-span-3 lg:col-span-1"
                  data-testid={`stat-featured-${index}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${stat.background})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
                  <div className="relative h-full flex items-center justify-center">
                    <h3
                      className="text-3xl md:text-4xl font-bold text-gold-gradient text-center px-4"
                      data-testid={`stat-featured-label-${index}`}
                    >
                      {stat.label}
                    </h3>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="text-center p-8 rounded-lg border border-gold-20 bg-card/50 backdrop-blur-sm hover-elevate"
                data-testid={`stat-${index}`}
              >
                <div
                  className="text-5xl md:text-6xl font-bold text-gold-gradient mb-2"
                  data-testid={`stat-value-${index}`}
                >
                  {stat.suffix === "T"
                    ? `Rp ${(counts[index] || 0).toFixed(0)}${stat.suffix}`
                    : `${(counts[index] || 0).toFixed(1)}${stat.suffix}`}
                </div>
                <div
                  className="text-xl font-semibold text-foreground mb-3"
                  data-testid={`stat-label-${index}`}
                >
                  {stat.label}
                </div>
                <div
                  className="text-sm text-muted-foreground"
                  data-testid={`stat-subtext-${index}`}
                >
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
