import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  GraduationCap,
  TrendingUp,
  ShoppingBag,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import subscriptionBg from "@assets/generated_images/Subscription_pricing_tiers_dashboard_8324134b.png";
import educationBg from "@assets/generated_images/Education_platform_with_courses_bc6c4157.png";
import signalBg from "@assets/generated_images/Trading_signals_and_EA_dashboard_045809d7.png";
import storeBg from "@assets/generated_images/E-commerce_store_marketplace_interface_34a74c5d.png";
import affiliateBg from "@assets/generated_images/Affiliate_partnerships_network_dashboard_1e8255c7.png";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revenueStreams = [
  {
    icon: CreditCard,
    title: "Subscriptions",
    percentage: "60%",
    background: subscriptionBg,
    tiers: [
      { name: "Free Tier", price: "Rp 0" },
      { name: "Pro Tier", price: "Rp 490K/bulan" },
      { name: "Elite Tier", price: "Rp 1.49M/bulan" },
    ],
    metrics: [
      "Target Year 1: 5,000 paying users",
      "ARPU: Rp 640K/bulan",
      "Annual Recurring Revenue: Rp 38.4M",
    ],
    isFeatured: true,
  },
  {
    icon: GraduationCap,
    title: "Education",
    percentage: "15%",
    background: educationBg,
    offerings: [
      "Standalone courses: Rp 500K average",
      "Certification programs: Rp 2-5M",
      "1-on-1 mentorship: Rp 500K/hour",
    ],
    metrics: [
      "Target: 500 course sales/month",
      "Monthly Revenue: Rp 250M",
    ],
  },
  {
    icon: TrendingUp,
    title: "EA & Signal",
    percentage: "10%",
    background: signalBg,
    offerings: [
      "Performance fee: 20% of profits",
      "Platform share: 5%",
    ],
    metrics: [
      "Assets Under Copy: Rp 50M+ (Month 6)",
      "Avg monthly return: 8%",
      "Platform revenue: Rp 20M/month",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Store",
    percentage: "10%",
    background: storeBg,
    offerings: [
      "Product margins: 15-30%",
      "Platform fees: 5% on marketplace",
    ],
    metrics: [
      "GMV Target: Rp 500M/month (Month 6)",
      "Platform revenue: Rp 75M/month (15%)",
    ],
  },
  {
    icon: Users,
    title: "Affiliates",
    percentage: "5%",
    background: affiliateBg,
    offerings: [
      "Broker partnerships: Rp 500K/user",
      "Trading tool referrals: 20% commission",
    ],
    metrics: [
      "Target: 300 broker signups/month",
      "Monthly Revenue: Rp 150M",
    ],
  },
];

export default function BusinessModelSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsRef.current;
    if (!section || !cardsContainer || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = cardsContainer.querySelectorAll('[data-revenue-card]');
      
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        }
      );

      const featuredCard = section.querySelector('[data-featured="true"]');
      if (featuredCard) {
        const glowAnimation = gsap.to(featuredCard, {
          boxShadow: "0 0 40px rgba(212, 175, 55, 0.5)",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        ScrollTrigger.create({
          trigger: featuredCard,
          start: "top bottom",
          end: "bottom top",
          onLeave: () => glowAnimation.pause(),
          onEnter: () => glowAnimation.play(),
          onEnterBack: () => glowAnimation.play(),
          onLeaveBack: () => glowAnimation.pause(),
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-12 pb-24 bg-gradient-to-b from-card to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4"
            data-testid="text-business-model-title"
          >
            Business Model
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto mb-4"
            data-testid="text-business-model-subtitle"
          >
            Multi-Revenue Streams untuk Sustainable Growth
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="outline" className="text-primary border-primary/50 px-4 py-1.5">
              Total Year 1 Revenue: Rp 6.2 Miliar
            </Badge>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revenueStreams.map((stream, index) => (
            <Card
              key={index}
              data-revenue-card="true"
              data-featured={stream.isFeatured ? "true" : undefined}
              className="relative overflow-hidden border-gold-20 hover-elevate transition-all duration-300"
              data-testid={`card-revenue-${index}`}
            >
              <img
                src={stream.background}
                alt={`${stream.title} revenue stream dashboard showing ${stream.percentage} of total revenue`}
                className="absolute inset-0 w-full h-full object-cover"
                data-testid={`img-revenue-bg-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/50" />

              <CardContent className="relative h-full min-h-[400px] md:min-h-[450px] p-4 md:p-6 flex flex-col">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                    <stream.icon className="text-gold-gradient" size={24} data-testid={`icon-revenue-${index}`} />
                  </div>
                  <Badge
                    className="bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] text-black font-bold text-base md:text-lg px-3 md:px-4 py-1.5"
                    data-testid={`badge-percentage-${index}`}
                  >
                    {stream.percentage}
                  </Badge>
                </div>

                <h3
                  className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4"
                  data-testid={`text-revenue-title-${index}`}
                >
                  {stream.title}
                </h3>

                {stream.tiers && (
                  <div className="mb-3 md:mb-4 space-y-2">
                    {stream.tiers.map((tier, tierIndex) => (
                      <div
                        key={tierIndex}
                        className="flex justify-between items-center text-xs md:text-sm bg-white/5 backdrop-blur-sm rounded-md px-2 md:px-3 py-1.5 md:py-2 border border-white/10"
                        data-testid={`tier-${index}-${tierIndex}`}
                      >
                        <span className="text-white/90 font-medium">{tier.name}</span>
                        <span className="text-gold-gradient font-bold">{tier.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {stream.offerings && (
                  <div className="mb-3 md:mb-4 space-y-1.5">
                    {stream.offerings.map((offering, offeringIndex) => (
                      <div
                        key={offeringIndex}
                        className="flex items-start gap-2 text-xs md:text-sm text-white/80"
                        data-testid={`offering-${index}-${offeringIndex}`}
                      >
                        <span className="text-gold-gradient mt-0.5">•</span>
                        <span>{offering}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-3 md:pt-4 border-t border-white/10 space-y-1 md:space-y-1.5">
                  {stream.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="text-xs text-white/70"
                      data-testid={`metric-${index}-${metricIndex}`}
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-foreground" data-testid="text-revenue-summary">
                Dengan <span className="text-gold-gradient font-bold">5 revenue streams</span> yang saling melengkapi, 
                TradeX menciptakan <span className="text-gold-gradient font-bold">sustainable business model</span> dengan 
                proyeksi pertumbuhan <span className="text-gold-gradient font-bold">dari Rp 970M di Month 12 menjadi Rp 6.2 Miliar di Year 1</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
