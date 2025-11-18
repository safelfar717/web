import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import gsap from "gsap";
import heroBackground from "@assets/TradeHub-Social-Trading-Platform_1763479059330.jpg";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    // Animate title with stagger effect for each line
    const titleLines = titleRef.current?.querySelectorAll('.title-line');
    if (titleLines) {
      tl.from(titleLines, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out"
      });
    }
    
    // Animate subtitle with scale and fade
    tl.from(subtitleRef.current, {
      y: 40,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6");
    
    // Animate buttons individually with bounce
    const buttons = buttonsRef.current?.querySelectorAll('button');
    if (buttons) {
      tl.from(buttons, {
        y: 40,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.4)"
      }, "-=0.5");
    }
    
    // Animate stats with fade and slide up
    tl.from(statsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");
  }, []);

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Trading Platform Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" 
            data-testid="text-hero-title"
          >
            <span className="title-line block">Trade Smarter.</span>
            <span className="title-line block">Learn Faster.</span>
            <span className="title-line block">Grow Together.</span>
          </h1>

          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto pt-2" 
            data-testid="text-hero-subtitle"
          >
            Platform Trading Terbaik dengan General Mindset untuk Generasi Millenial
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
              className="border-primary text-white hover:bg-primary/10 text-lg px-8 bg-white/5 backdrop-blur-sm" 
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>

          {/* Trading Stats/Metrics */}
          <div 
            ref={statsRef}
            className="pt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12"
            data-testid="container-stats"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-gradient" data-testid="text-stat-users">
                $2M+
              </div>
              <div className="text-sm text-gray-400 mt-1">Total Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-gradient" data-testid="text-stat-trades">
                $2.5B
              </div>
              <div className="text-sm text-gray-400 mt-1">Market Cap</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-gradient" data-testid="text-stat-success">
                97%
              </div>
              <div className="text-sm text-gray-400 mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
