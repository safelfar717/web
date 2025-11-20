import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import campusBg from "@assets/generated_images/Campus_trading_community_38be49e8.png";
import digitalBg from "@assets/generated_images/Digital_marketing_expansion_434b61b7.png";
import marketplaceBg from "@assets/generated_images/Marketplace_domination_ecosystem_ae20c3b0.png";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    icon: Target,
    title: "Phase 1: Campus Domination",
    timeline: "Month 1-2",
    background: campusBg,
    initiatives: [
      "Campus ambassador program via 25 universitas",
      "Key influencer game via pro student leader",
      "Campus event via free demo + live competition",
      "Student package 80% untuk 3 bulan",
      "30 events + kompetisi @ Rp 60 each",
    ],
    targetUsers: "5,000",
    channels: "Kampus+Influencer",
    conversionRate: "Rp 15M",
    expectedUsers: 5000,
  },
  {
    icon: TrendingUp,
    title: "Phase 2: Digital Expansion",
    timeline: "Month 3-6",
    background: digitalBg,
    initiatives: [
      "Paid Ads (Google Ads | IG, FBMK | advertise | Youtube Ads | TG, LINE) + Expo | Pr",
      "Strategic partnership paid advertising campaigns",
      "Corporate targeting & Perusahaan meluncurkan program perusahaan",
      "Facebook marketing groups and campaigns",
    ],
    targetUsers: "18,000",
    channels: "Ads+Soc1",
    conversionRate: "Rp 25M+",
    expectedUsers: 18000,
  },
  {
    icon: Award,
    title: "Phase 3: Marketplace Domination",
    timeline: "Month 7-12",
    background: marketplaceBg,
    initiatives: [
      "Brand Influencer + menarik figur Pro Keuangan",
      "Tingkatkan iklan via mitra BUMN & bank",
      "Mega B2C & B2B Indonesia",
      "Integration lanjut dengan QRIS app dan Fintech",
      "Leverage and Gamification strategies",
    ],
    targetUsers: "50,000",
    channels: "Partner+Mitra+",
    conversionRate: "18k",
    expectedUsers: 50000,
  },
];

export default function GoToMarketSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [expectedUserCounts, setExpectedUserCounts] = useState(phases.map(() => 0));
  const hasAnimatedRef = useRef(false);

  const formatNumber = (num: number) => {
    return Math.floor(num).toLocaleString('en-US');
  };

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    const prefersReducedMotion = typeof window !== 'undefined' 
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
      : false;

    const ctx = gsap.context(() => {
      const phaseCards = cards.querySelectorAll("[data-phase-card]");

      gsap.set(phaseCards, {
        opacity: 0,
        y: 60,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
          // Fade in cards
          gsap.to(phaseCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          });

          // Animate number counting only once
          if (!hasAnimatedRef.current && !prefersReducedMotion) {
            hasAnimatedRef.current = true;
            phases.forEach((phase, index) => {
              gsap.to(
                { val: 0 },
                {
                  val: phase.expectedUsers,
                  duration: 2,
                  delay: 0.3 + index * 0.2,
                  ease: "power2.out",
                  onUpdate: function () {
                    setExpectedUserCounts((prev) => {
                      const newCounts = [...prev];
                      newCounts[index] = this.targets()[0].val;
                      return newCounts;
                    });
                  },
                },
              );
            });
          } else if (prefersReducedMotion) {
            // Set final values immediately if reduced motion is preferred
            setExpectedUserCounts(phases.map(p => p.expectedUsers));
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-12 pb-24 bg-gradient-to-b from-black to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4"
            data-testid="text-go-to-market-title"
          >
            Go to Market
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto mb-4"
            data-testid="text-go-to-market-subtitle"
          >
            50K Users in 12 Months
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="outline" className="border-primary/50 px-4 py-1.5 text-[19px] bg-[#d6b13ad1] text-[#0d0901]">
              Scalable Segment Strategy
            </Badge>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <Card
              key={index}
              data-phase-card="true"
              className="relative overflow-hidden border-gold-20 hover-elevate transition-all duration-300"
              data-testid={`card-phase-${index}`}
            >
              <img
                src={phase.background}
                alt={`${phase.title} strategy showing ${phase.expectedUsers} expected users`}
                className="absolute inset-0 w-full h-full object-cover"
                data-testid={`img-phase-bg-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/60" />

              <CardContent className="relative h-full min-h-[500px] md:min-h-[550px] p-4 md:p-6 flex flex-col pt-[11px] pb-[11px]">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                    <phase.icon className="text-gold-gradient" size={24} data-testid={`icon-phase-${index}`} />
                  </div>
                  <Badge
                    className="bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] text-black font-bold text-sm md:text-base px-3 md:px-4 py-1.5"
                    data-testid={`badge-timeline-${index}`}
                  >
                    {phase.timeline}
                  </Badge>
                </div>

                <h3
                  className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4"
                  data-testid={`text-phase-title-${index}`}
                >
                  {phase.title}
                </h3>

                <div className="mb-3 md:mb-4">
                  <p className="text-xs md:text-sm text-white/70 mb-2 font-medium">Inisialisasi:</p>
                  <div className="space-y-1.5">
                    {phase.initiatives.map((initiative, initiativeIndex) => (
                      <div
                        key={initiativeIndex}
                        className="flex items-start gap-2 text-xs md:text-sm text-white/80"
                        data-testid={`initiative-${index}-${initiativeIndex}`}
                      >
                        <span className="text-gold-gradient mt-0.5">•</span>
                        <span>{initiative}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-3 md:pt-4 border-t border-white/10 space-y-2">
                  <div
                    className="flex justify-between items-center text-sm md:text-base bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10"
                    data-testid={`metric-target-${index}`}
                  >
                    <span className="text-white/90">Target Users:</span>
                    <span className="text-gold-gradient font-bold">{phase.targetUsers}</span>
                  </div>
                  <div
                    className="flex justify-between items-center text-sm md:text-base bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10"
                    data-testid={`metric-channels-${index}`}
                  >
                    <span className="text-white/90">Channels:</span>
                    <span className="text-gold-gradient font-bold">{phase.channels}</span>
                  </div>
                  <div
                    className="flex justify-between items-center text-sm md:text-base bg-white/5 backdrop-blur-sm rounded-md px-3 py-2 border border-white/10"
                    data-testid={`metric-conversion-${index}`}
                  >
                    <span className="text-white/90">Conversion Rate:</span>
                    <span className="text-gold-gradient font-bold">{phase.conversionRate}</span>
                  </div>
                  <div
                    className="flex justify-between items-center text-sm md:text-base bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm rounded-md px-3 py-2 border border-primary/30"
                    data-testid={`metric-expected-${index}`}
                  >
                    <span className="text-white font-medium">Expected Users:</span>
                    <span className="text-gold-gradient font-bold text-lg">{formatNumber(expectedUserCounts[index])}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-foreground" data-testid="text-gtm-summary">
                Dengan <span className="text-gold-gradient font-bold">3-phase strategy</span> yang terstruktur, 
                TradeX akan mencapai <span className="text-gold-gradient font-bold">50,000 users dalam 12 bulan</span> melalui 
                kombinasi <span className="text-gold-gradient font-bold">campus domination, digital expansion, dan marketplace partnerships</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
