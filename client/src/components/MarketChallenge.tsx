import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Users,
  Sparkles,
  TrendingUp,
  Copy,
  Trophy,
  ShoppingCart,
  Lightbulb,
} from "lucide-react";
import gsap from "gsap";
import educationBg from "@assets/generated_images/Interactive_education_platform_81bed62b.png";
import communityBg from "@assets/generated_images/Live_trading_community_3f62992e.png";
import aiBg from "@assets/generated_images/AI_powered_insights_f1c05b55.png";
import signalsBg from "@assets/generated_images/Live_trading_signals_663372b9.png";
import copyBg from "@assets/generated_images/Copy_trading_platform_68d95174.png";
import competitionBg from "@assets/generated_images/Trading_competitions_7e53ac4c.png";
import storeBg from "@assets/generated_images/Store_ecommerce_robot_trading_interface_53f3b3b5.png";
import innovativeBg from "@assets/generated_images/Combined_platform_ecosystem_visualization_89220649.png";

const solutions = [
  {
    icon: GraduationCap,
    title: "Interactive Education",
    description:
      "Ikuti edu gamifikasi kami dengan tingkat level & buktikan keahlian Anda dgn Sertifikasi",
    background: educationBg,
  },
  {
    icon: Users,
    title: "Live Community",
    description:
      "Tempat Kita Terkoneksi, Berbagi, Berdiskusi & Tumbuh bersama dalam Ekosistem Trading",
    background: communityBg,
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "Buka Wawasan AI Trading Anda dari Inti Akurasi Analitik dan Presisi Trading Canggih saat ini",
    background: aiBg,
  },
  {
    icon: TrendingUp,
    title: "Live Trading Signals",
    description:
      "Nikmati sinyal Real-Time oleh EA & diversifikasi Analisis Ahli, dengan rekor akurasi mencapai 97%",
    background: signalsBg,
  },
  {
    icon: Copy,
    title: "Copy Trading",
    description:
      "Yuk ikuti dan Copy otomatis Trading dari para Master Trader! Belajar sambil Cuan",
    background: copyBg,
  },
  {
    icon: Trophy,
    title: "Trading Competitions",
    description:
      "Kami menantang Anda! Tunjukkan pada dunia You are The Champion dan bawa pulang Hadiahnya!",
    background: competitionBg,
  },
  {
    icon: ShoppingCart,
    title: "Store (UNIQUE!)",
    description:
      "Shop & Auto-Invest — Cashback from purchases goes directly into portfolio",
    background: storeBg,
  },
  {
    icon: Lightbulb,
    title: "Unique & Innovative Value",
    description:
      "Satu-satunya platform yang combine education, trading, social, dan commerce.",
    background: innovativeBg,
  },
];

export default function MarketChallenge() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const storeCard = section.querySelector('[data-store-unique="true"]');
      if (storeCard) {
        gsap.to(storeCard, {
          boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      const storeIconContainer = section.querySelector('[data-store-icon-container="true"]');
      if (storeIconContainer) {
        gsap.to(storeIconContainer, {
          boxShadow: "0 0 20px rgba(212, 175, 55, 0.8), 0 0 40px rgba(212, 175, 55, 0.4)",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      const storeIcon = section.querySelector('[data-store-icon="true"]');
      if (storeIcon) {
        gsap.to(storeIcon, {
          x: 5,
          y: -5,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4"
            data-testid="text-section-title"
          >
            The Solution : "NextGen"
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            data-testid="text-section-subtitle"
          >
            All-in-One Platform Trading Tools Professional, Analisa, Signal &
            Ecosystem untuk Trader Masa Kini
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-gold-20 hover-elevate transition-all duration-300 h-64"
              data-testid={`card-solution-${index}`}
              data-store-unique={index === 6 ? "true" : undefined}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${solution.background})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />

              <CardContent className="relative h-full p-6 flex flex-col justify-end">
                <div 
                  className="mb-4 w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30"
                  data-store-icon-container={index === 6 ? "true" : undefined}
                >
                  <solution.icon 
                    className="text-primary" 
                    size={24}
                    data-store-icon={index === 6 ? "true" : undefined}
                  />
                </div>
                <h3
                  className="text-xl font-semibold text-white mb-2"
                  data-testid={`text-solution-title-${index}`}
                >
                  {solution.title}
                </h3>
                <p
                  className="text-white/90 text-sm leading-relaxed"
                  data-testid={`text-solution-desc-${index}`}
                >
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
