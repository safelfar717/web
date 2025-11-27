import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, GraduationCap, Copy, ShoppingBag, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const streams = [
  {
    icon: CreditCard,
    title: "Subscriptions",
    percentage: "60%",
    description: "Pro: Rp 490K/mo | Elite: Rp 1.49M/mo",
    details: "5,000 paying users Year 1 | ARPU: Rp 640K/month"
  },
  {
    icon: GraduationCap,
    title: "Education",
    percentage: "15%",
    description: "Courses & Certifications",
    details: "Avg course: Rp 500K | Certification: Rp 2-5M | 500 sales/month"
  },
  {
    icon: Copy,
    title: "Copy Trading",
    percentage: "10%",
    description: "Performance Fees",
    details: "5% platform share of 20% profits | AUM: Rp 50M+ (M6)"
  },
  {
    icon: ShoppingBag,
    title: "Store",
    percentage: "10%",
    description: "Marketplace Integration",
    details: "Product margins 15-30% | Platform fees 5% | GMV: Rp 500M/mo (M6)"
  },
  {
    icon: Users,
    title: "Affiliates",
    percentage: "5%",
    description: "Partner Commissions",
    details: "Broker partnerships: Rp 500K/user | 300 signups/month"
  }
];

export default function RevenueStreams() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const totalRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const title = titleRef.current;
    const total = totalRef.current;
    const subtitle = subtitleRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (!section || !header || !title || !total || !subtitle || !cardsContainer) return;

    const ctx = gsap.context(() => {
      gsap.set([title, subtitle], { opacity: 0, y: 50 });
      gsap.set(total, { opacity: 0, scale: 0.8 });

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
          })
          .to(
            total,
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
            },
            "-=0.4"
          )
          .to(
            subtitle,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.3"
          );
        },
      });

      const cards = cardsContainer.querySelectorAll("[data-revenue-card]");
      gsap.set(cards, { opacity: 0, y: 40, scale: 0.95 });

      ScrollTrigger.create({
        trigger: cardsContainer,
        start: "top 80%",
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-card">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-revenue-title">
            Multi-Revenue Streams
          </h2>
          <div ref={totalRef} className="text-3xl font-bold text-gold-gradient mb-2" data-testid="text-revenue-total">
            Rp 38.4B
          </div>
          <p ref={subtitleRef} className="text-muted-foreground text-lg" data-testid="text-revenue-subtitle">
            Year 1 Total Revenue Projection
          </p>
        </div>

        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((stream, index) => (
            <Card 
              key={index} 
              className="bg-card border-gold-20 hover-elevate transition-all duration-300"
              data-testid={`card-revenue-${index}`}
              data-revenue-card
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stream.icon className="text-primary" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gold-gradient" data-testid={`text-revenue-percentage-${index}`}>
                    {stream.percentage}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1" data-testid={`text-revenue-stream-title-${index}`}>
                    {stream.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2" data-testid={`text-revenue-desc-${index}`}>
                    {stream.description}
                  </p>
                  <p className="text-xs text-muted-foreground/80" data-testid={`text-revenue-details-${index}`}>
                    {stream.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
