import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import gsap from "gsap";
import heroBackground from "@assets/generated_images/Trading_workspace_millennial_community_b2ff8f4b.png";

function GoldParticles() {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const particles = particlesRef.current.querySelectorAll('.gold-particle');
    
    particles.forEach((particle, index) => {
      const randomX = Math.random() * 100;
      const randomDelay = Math.random() * 5;
      const randomDuration = 8 + Math.random() * 12;
      const randomSize = 2 + Math.random() * 4;
      
      gsap.set(particle, {
        x: `${randomX}vw`,
        y: '110vh',
        width: randomSize,
        height: randomSize,
        opacity: 0.3 + Math.random() * 0.5,
      });
      
      gsap.to(particle, {
        y: '-10vh',
        x: `+=${(Math.random() - 0.5) * 100}`,
        duration: randomDuration,
        delay: randomDelay,
        repeat: -1,
        ease: 'none',
        onRepeat: () => {
          gsap.set(particle, {
            x: `${Math.random() * 100}vw`,
            y: '110vh',
          });
        }
      });
      
      gsap.to(particle, {
        opacity: 0.1 + Math.random() * 0.4,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: randomDelay,
      });
    });
    
    return () => {
      particles.forEach(particle => {
        gsap.killTweensOf(particle);
      });
    };
  }, []);
  
  return (
    <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="gold-particle absolute rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(212, 175, 55, 0.8) 0%, rgba(247, 226, 122, 0.4) 50%, transparent 70%)`,
            boxShadow: '0 0 6px rgba(212, 175, 55, 0.5)',
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
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
    
    tl.from(subtitleRef.current, {
      y: 40,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6");
    
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
      
      {/* Floating Gold Particles */}
      <GoldParticles />
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 md:pt-40 pt-[95px] pb-[95px]">
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
            >About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
