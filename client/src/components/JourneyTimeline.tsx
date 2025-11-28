import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { phase: "Fase 1", title: "Dominasi Kampus", timeline: "Bulan 1-3", users: "3,000", gradient: "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" },
  { phase: "Fase 2", title: "Ekspansi Digital", timeline: "Bulan 4-6", users: "10,000", gradient: "bg-gradient-to-br from-[#2d1b69] via-[#1e1e3f] to-[#0d0d1a]" },
  { phase: "Fase 3", title: "Kepemimpinan Pasar", timeline: "Bulan 7-12", users: "50,000+", gradient: "bg-gradient-to-br from-[#3d2914] via-[#2a1f0d] to-[#1a1508]" }
];

export default function JourneyTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const timelineLine = timelineLineRef.current;
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

      if (timelineLine) {
        gsap.set(timelineLine, { scaleX: 0, transformOrigin: "left center" });

        ScrollTrigger.create({
          trigger: timelineLine,
          start: "top 80%",
          onEnter: () => {
            gsap.to(timelineLine, {
              scaleX: 1,
              duration: 1.2,
              ease: "power2.out",
            });
          },
        });
      }

      const milestoneCards = cardsContainer.querySelectorAll("[data-milestone-card]");
      const milestoneDots = cardsContainer.querySelectorAll("[data-milestone-dot]");

      gsap.set(milestoneCards, { opacity: 0, y: 40, scale: 0.9 });
      gsap.set(milestoneDots, { opacity: 0, scale: 0 });

      ScrollTrigger.create({
        trigger: cardsContainer,
        start: "top 80%",
        onEnter: () => {
          gsap.to(milestoneDots, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: "back.out(2)",
          });

          gsap.to(milestoneCards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.2,
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-card to-black">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-journey-title">
            Perjalanan Kami
          </h2>
          <p ref={subtitleRef} className="text-muted-foreground text-lg" data-testid="text-journey-subtitle">
            Dari kampus hingga dominasi pasar dalam 12 bulan
          </p>
        </div>

        <div className="relative">
          <div 
            ref={timelineLineRef}
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] -translate-y-1/2 hidden lg:block" 
          />
          
          <div ref={cardsContainerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative" data-testid={`milestone-${index}`}>
                <div 
                  data-milestone-dot
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E27A] gold-glow hidden lg:block" 
                />
                
                <Card data-milestone-card className={`${milestone.gradient} border-gold-20 hover-elevate mt-8 lg:mt-12`}>
                  <CardContent className="p-6 space-y-3 text-center">
                    <div className="text-primary font-semibold text-sm" data-testid={`milestone-phase-${index}`}>
                      {milestone.phase}
                    </div>
                    <h3 className="text-xl font-bold text-foreground" data-testid={`milestone-title-${index}`}>
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm" data-testid={`milestone-timeline-${index}`}>
                      {milestone.timeline}
                    </p>
                    <div className="pt-3 border-t border-gold-20">
                      <div className="text-2xl font-bold text-gold-gradient" data-testid={`milestone-users-${index}`}>
                        {milestone.users}
                      </div>
                      <div className="text-xs text-muted-foreground">Target Pengguna</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
