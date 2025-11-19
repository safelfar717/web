import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X, Star, BadgeCheck, ShieldAlert } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const competitors = [
  {
    name: "Stockbit",
    subtitle: "Social",
    x: 30,
    y: 50,
    size: "md",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/40",
  },
  {
    name: "XM Trading",
    subtitle: "Education",
    x: 70,
    y: 30,
    size: "md",
    bgColor: "bg-emerald-500/20",
    borderColor: "border-emerald-500/40",
  },
  {
    name: "Binomo",
    subtitle: "Gamified",
    x: 30,
    y: 70,
    size: "sm",
    bgColor: "bg-purple-500/15",
    borderColor: "border-purple-500/35",
  },
  {
    name: "Binance",
    subtitle: "Crypto",
    x: 70,
    y: 70,
    size: "md",
    bgColor: "bg-amber-500/20",
    borderColor: "border-amber-500/40",
  },
  {
    name: "Ajaib/Bibit",
    subtitle: "Robo-Advisor",
    x: 50,
    y: 85,
    size: "sm",
    bgColor: "bg-cyan-500/15",
    borderColor: "border-cyan-500/35",
  },
];

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const map = mapRef.current;
    const table = tableRef.current;

    if (!section || !map || !table) return;

    const ctx = gsap.context(() => {
      const competitors = map.querySelectorAll("[data-competitor]");
      const tradex = map.querySelector("[data-tradex]");
      const starIcon = map.querySelector("[data-star-icon]");
      const horizontalAxis = map.querySelector('[data-axis="horizontal"]');
      const verticalAxis = map.querySelector('[data-axis="vertical"]');
      const gridLines = map.querySelectorAll("[data-grid-line]");

      gsap.set([competitors, tradex, horizontalAxis, verticalAxis, gridLines], {
        opacity: 0,
      });
      gsap.set(competitors, { scale: 0, y: 20 });
      gsap.set(tradex, { scale: 0 });
      gsap.set(horizontalAxis, { scaleX: 0, transformOrigin: "left" });
      gsap.set(verticalAxis, { scaleY: 0, transformOrigin: "top" });
      gsap.set(gridLines, { scaleY: 0 });
      if (starIcon) gsap.set(starIcon, { rotation: 0, scale: 1 });

      ScrollTrigger.create({
        trigger: map,
        start: "top 80%",
        onEnter: () => {
          const tl = gsap.timeline();

          tl.to(gridLines, {
            scaleY: 1,
            opacity: 0.4,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          })
            .to(
              horizontalAxis,
              {
                scaleX: 1,
                opacity: 0.8,
                duration: 0.8,
                ease: "power2.out",
              },
              "-=0.4",
            )
            .to(
              verticalAxis,
              {
                scaleY: 1,
                opacity: 0.8,
                duration: 0.8,
                ease: "power2.out",
              },
              "-=0.6",
            )
            .to(
              competitors,
              {
                scale: 1,
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.7)",
              },
              "-=0.4",
            )
            .to(
              tradex,
              {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(2)",
              },
              "-=0.2",
            )
            .to(tradex, {
              boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)",
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });

          if (starIcon) {
            gsap.to(starIcon, {
              rotation: 360,
              duration: 8,
              repeat: -1,
              ease: "linear",
            });

            gsap.to(starIcon, {
              scale: 1.3,
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });

            gsap.to(starIcon, {
              filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.8))",
              duration: 1.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
        },
      });

      const tableRows = table.querySelectorAll("tbody tr");
      gsap.set(tableRows, { opacity: 0, x: -20 });

      ScrollTrigger.create({
        trigger: table,
        start: "top 85%",
        onEnter: () => {
          gsap.to(tableRows, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4"
            data-testid="text-competitive-title"
          >
            Competitive Landscape
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            data-testid="text-competitive-subtitle"
          >
            TradeX stands alone as the only all-in-one trading ecosystem in
            Indonesia
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3
              className="text-2xl font-bold text-gold-gradient mb-6 text-center"
              data-testid="text-positioning-title"
            >
              Positioning Map
            </h3>
            <Card className="bg-background border-gold-20 max-w-5xl mx-auto overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div
                  ref={mapRef}
                  className="relative w-full aspect-square max-w-2xl mx-auto"
                  data-testid="text-positioning-map"
                >
                  <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={`v-${i}`}
                        data-grid-line="true"
                        className="absolute top-0 bottom-0 w-px bg-primary/40"
                        style={{ left: `${i * 25}%` }}
                      />
                    ))}
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={`h-${i}`}
                        data-grid-line="true"
                        className="absolute left-0 right-0 h-px bg-primary/40"
                        style={{ top: `${i * 25}%` }}
                      />
                    ))}
                  </div>

                  <div
                    data-axis="horizontal"
                    className="absolute left-0 right-0 h-0.5 bg-primary/80"
                    style={{ top: "50%" }}
                  />
                  <div
                    data-axis="vertical"
                    className="absolute top-0 bottom-0 w-0.5 bg-primary/80"
                    style={{ left: "50%" }}
                  />

                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-primary px-3 py-1.5 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-md backdrop-blur-sm">
                    HIGH EDUCATION
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold text-muted-foreground px-3 py-1.5 bg-gradient-to-r from-muted/30 to-muted/20 border border-border rounded-md backdrop-blur-sm">
                    LOW EDUCATION
                  </div>
                  <div className="absolute top-1/2 -left-8 -translate-y-1/2 -rotate-90 text-xs font-semibold text-muted-foreground whitespace-nowrap px-3 py-1.5 bg-gradient-to-r from-muted/30 to-muted/20 border border-border rounded-md backdrop-blur-sm">
                    LOW FEATURES
                  </div>
                  <div className="absolute top-1/2 -right-8 -translate-y-1/2 -rotate-90 text-xs font-bold text-primary whitespace-nowrap px-3 py-1.5 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-md backdrop-blur-sm">
                    HIGH FEATURES
                  </div>

                  {competitors.map((comp, idx) => (
                    <div
                      key={idx}
                      data-competitor="true"
                      className={`absolute -translate-x-1/2 -translate-y-1/2 ${
                        comp.size === "md" ? "w-28 h-28" : "w-24 h-24"
                      }`}
                      style={{ left: `${comp.x}%`, top: `${comp.y}%` }}
                    >
                      <div
                        className={`w-full h-full rounded-full ${comp.bgColor} border-2 ${comp.borderColor} flex flex-col items-center justify-center p-2 hover-elevate transition-all backdrop-blur-sm`}
                      >
                        <div className="text-xs md:text-sm font-bold text-foreground text-center leading-tight">
                          {comp.name}
                        </div>
                        <div className="text-[10px] text-muted-foreground text-center">
                          {comp.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div
                    data-tradex="true"
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-40 h-40"
                    style={{ left: "50%", top: "35%" }}
                  >
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-4 border-primary flex flex-col items-center justify-center p-4">
                      <Star
                        data-star-icon="true"
                        className="w-8 h-8 text-primary mb-1 fill-primary"
                      />
                      <div className="text-lg font-bold text-primary text-center leading-tight">
                        TRADEX
                      </div>
                      <div className="text-xs text-primary/80 text-center">
                        All-in-One
                      </div>
                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-primary">
                        You Are Here!
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3
              className="text-2xl font-bold text-gold-gradient mb-6 text-center"
              data-testid="text-advantages-title"
            >
              Competitive Advantages
            </h3>
            <Card className="bg-background border-gold-20 overflow-x-auto">
              <CardContent className="p-6 md:p-8">
                <div className="overflow-x-auto">
                  <table
                    ref={tableRef}
                    className="w-full text-left border-collapse min-w-[600px]"
                    data-testid="table-competitive"
                  >
                    <thead>
                      <tr className="border-b border-gold-20">
                        <th className="py-4 px-4 text-foreground font-bold bg-primary/20">
                          Feature
                        </th>
                        <th className="py-4 px-4 text-foreground font-bold text-center bg-primary/20">
                          Stockbit
                        </th>
                        <th className="py-4 px-4 text-foreground font-bold text-center bg-primary/20">
                          Binance
                        </th>
                        <th className="py-4 px-4 text-foreground font-bold text-center bg-primary/20">
                          Ajaib
                        </th>
                        <th className="py-4 px-4 text-foreground font-bold text-center bg-primary/20">
                          eToro
                        </th>
                        <th className="py-4 px-4 font-bold text-gold-gradient text-center bg-primary/50">
                          TradeX
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gold-20/50 hover-elevate even:bg-primary/5">
                        <td className="py-3 px-4 text-foreground font-semibold">
                          Education
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <ShieldAlert className="inline-block w-5 h-5 text-amber-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-left">
                          <div className="flex items-center justify-start gap-2">
                            <BadgeCheck className="w-5 h-5 text-green-500" />
                            <span className="font-bold text-gold-gradient">
                              Comprehensive
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gold-20/50 hover-elevate even:bg-primary/5">
                        <td className="py-3 px-4 text-foreground font-semibold">
                          Signals
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-left">
                          <div className="flex items-center justify-start gap-2">
                            <BadgeCheck className="w-5 h-5 text-green-500" />
                            <span className="font-bold text-gold-gradient">
                              Verified
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gold-20/50 hover-elevate even:bg-primary/5">
                        <td className="py-3 px-4 text-foreground font-semibold">
                          Copy Trading
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <BadgeCheck className="inline-block w-5 h-5 text-green-500" />
                        </td>
                        <td className="py-3 px-4 text-left">
                          <div className="flex items-center justify-start gap-2">
                            <BadgeCheck className="w-5 h-5 text-green-500" />
                            <span className="font-bold text-gold-gradient">
                              Enhanced
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gold-20/50 hover-elevate even:bg-primary/5">
                        <td className="py-3 px-4 text-foreground font-semibold">
                          Social Feed
                        </td>
                        <td className="py-3 px-4 text-center">
                          <BadgeCheck className="inline-block w-5 h-5 text-green-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <ShieldAlert className="inline-block w-5 h-5 text-amber-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <ShieldAlert className="inline-block w-5 h-5 text-amber-500" />
                        </td>
                        <td className="py-3 px-4 text-left">
                          <div className="flex items-center justify-start gap-2">
                            <BadgeCheck className="w-5 h-5 text-green-500" />
                            <span className="font-bold text-gold-gradient">
                              Instagram-like
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gold-20/50 hover-elevate even:bg-primary/5">
                        <td className="py-3 px-4 text-foreground font-semibold">
                          Local Payment
                        </td>
                        <td className="py-3 px-4 text-center">
                          <BadgeCheck className="inline-block w-5 h-5 text-green-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <ShieldAlert className="inline-block w-5 h-5 text-amber-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <BadgeCheck className="inline-block w-5 h-5 text-green-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-left">
                          <div className="flex items-center justify-start gap-2">
                            <BadgeCheck className="w-5 h-5 text-green-500" />
                            <span className="font-bold text-gold-gradient">
                              All e-wallets
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gold-20/50 hover-elevate even:bg-primary/5">
                        <td className="py-3 px-4 text-foreground font-semibold">
                          Store
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-left">
                          <div className="flex items-center justify-start gap-2">
                            <BadgeCheck className="w-5 h-5 text-green-500" />
                            <span className="font-bold text-gold-gradient">
                              UNIQUE!
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-elevate even:bg-primary/5">
                        <td className="py-3 px-4 text-foreground font-semibold">
                          Blockchain
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <ShieldAlert className="inline-block w-5 h-5 text-amber-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <X className="inline-block w-5 h-5 text-red-500" />
                        </td>
                        <td className="py-3 px-4 text-left">
                          <div className="flex items-center justify-start gap-2">
                            <BadgeCheck className="w-5 h-5 text-green-500" />
                            <span className="font-bold text-gold-gradient">
                              Verified
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] border-[#D4AF37] max-w-4xl mx-auto gold-glow-hover">
            <CardContent className="p-8 text-center">
              <p
                className="text-xl md:text-2xl font-semibold text-black mb-2"
                data-testid="text-bottom-line"
              >
                Bottom Line:
              </p>
              <p
                className="text-lg font-semibold text-black"
                data-testid="text-bottom-line-desc"
              >
                TradeX adalah{" "}
                <span className="font-bold">satu-satunya platform</span> yang
                combine SEMUA fitur essential dalam satu ecosystem.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
