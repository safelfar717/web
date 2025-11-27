import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;

    if (!section || !title || !subtitle || !buttons) return;

    const ctx = gsap.context(() => {
      gsap.set([title, subtitle], { opacity: 0, y: 50 });
      gsap.set(buttons.children, { opacity: 0, scale: 0.8 });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
          const tl = gsap.timeline();
          
          tl.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          })
          .to(subtitle, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          }, "-=0.4")
          .to(buttons.children, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: "back.out(1.7)",
          }, "-=0.3");
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-card to-black relative overflow-hidden"
      data-testid="section-cta"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gold-gradient" 
            data-testid="text-cta-title"
          >
            Ready to Explore the Solution?
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-muted-foreground" 
            data-testid="text-cta-subtitle"
          >
            Discover how TradeX combines education, verified signals, copy trading, and community in one all-in-one platform.
          </p>
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            data-testid="container-cta-buttons"
          >
            <Link href="/business-model">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] text-black font-semibold text-lg px-8 hover:opacity-90 gold-glow-hover" 
                data-testid="button-view-business-model"
              >
                View Business Model Canvas
              </Button>
            </Link>
            <Link href="/financials">
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-foreground hover:bg-primary/10 text-lg px-8" 
                data-testid="button-financial-projections"
              >
                Financial Projections
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
