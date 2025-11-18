import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1
    })
    .from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, "-=0.5")
    .from(buttonsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, "-=0.4")
    .from(arrowRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.6
    }, "-=0.4");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-32 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-gold-gradient leading-tight" 
            data-testid="text-hero-title"
          >
            Trade Smarter,<br />
            Learn Faster,<br />
            Grow Together
          </h1>

          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto" 
            data-testid="text-hero-subtitle"
          >
            Platform Trading Terbaik dengan General Mindset untuk Generasi Millenial
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] text-black font-semibold text-lg px-8 hover:opacity-90 gold-glow-hover" 
              data-testid="button-explore-business"
            >
              Explore Business Model
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10 text-lg px-8" 
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>

          <div ref={arrowRef} className="pt-8 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center gold-glow">
              <TrendingUp size={32} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
