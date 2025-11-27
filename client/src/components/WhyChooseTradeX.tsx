import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, GraduationCap, Users, TrendingUp, ShoppingCart, DollarSign } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    title: "Platform All-in-One",
    description: "Pendidikan, sinyal, copy trading, dan marketplace — semua yang Anda butuhkan dalam satu tempat dengan sinkronisasi real-time"
  },
  {
    icon: GraduationCap,
    title: "Expert Advisors",
    description: "5 bot trading otomatis dengan strategi terbukti. Kinerja yang telah diuji dan dapat dipercaya"
  },
  {
    icon: Users,
    title: "Copy Trading",
    description: "Ikuti dan salin otomatis trader berkinerja terbaik. Belajar dari yang terbaik sambil menghasilkan"
  },
  {
    icon: TrendingUp,
    title: "Komunitas yang Aktif",
    description: "Bergabung dengan 50K+ trader. Berbagi tips, belajar bersama, dan tidak pernah trading sendirian lagi"
  },
  {
    icon: ShoppingCart,
    title: "Belanja & Investasi",
    description: "Beli produk yang Anda sukai dan otomatis investasikan cashback ke portofolio trading Anda"
  },
  {
    icon: DollarSign,
    title: "Integrasi Pembayaran Lokal",
    description: "Dukungan penuh untuk IDR, QRIS, OVO, GoPay — metode pembayaran yang sudah Anda gunakan sehari-hari"
  }
];

export default function WhyChooseTradeX() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (!section || !header || !title || !subtitle || !cardsContainer) return;

    const ctx = gsap.context(() => {
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

      const featureCards = cardsContainer.querySelectorAll("[data-feature-card]");
      gsap.set(featureCards, { opacity: 0, y: 40, scale: 0.95 });

      ScrollTrigger.create({
        trigger: cardsContainer,
        start: "top 80%",
        onEnter: () => {
          gsap.to(featureCards, {
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
    <section ref={sectionRef} className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-why-title">
            Mengapa Memilih TradeX?
          </h2>
          <p ref={subtitleRef} className="text-muted-foreground text-lg max-w-3xl mx-auto" data-testid="text-why-subtitle">
            Satu-satunya platform yang dibangun khusus untuk trader Indonesia dengan semua yang Anda butuhkan untuk sukses
          </p>
        </div>

        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-background border-gold-20 hover-elevate transition-all duration-300"
              data-testid={`card-why-${index}`}
              data-feature-card
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground" data-testid={`text-why-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-why-desc-${index}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
