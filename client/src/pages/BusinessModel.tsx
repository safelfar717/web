import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BusinessModelCanvas from "@/components/BusinessModelCanvas";
import gsap from "gsap";
import { 
  Handshake, 
  Lightbulb, 
  Users, 
  Coins, 
  Building2, 
  Route, 
  Heart, 
  Target,
  PiggyBank
} from "lucide-react";
import bmcBackground from "@assets/generated_images/bmc_elements_abstract_premium_background.png";

const bmcIcons = [
  { Icon: Handshake, label: "Partnerships" },
  { Icon: Lightbulb, label: "Activities" },
  { Icon: Building2, label: "Resources" },
  { Icon: Target, label: "Value" },
  { Icon: Heart, label: "Relationships" },
  { Icon: Route, label: "Channels" },
  { Icon: Users, label: "Segments" },
  { Icon: PiggyBank, label: "Cost" },
  { Icon: Coins, label: "Revenue" },
];

function FloatingBMCElements() {
  const elementsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!elementsRef.current) return;
    
    const elements = elementsRef.current.querySelectorAll('.floating-bmc-icon');
    
    elements.forEach((element, index) => {
      const randomX = 5 + Math.random() * 85;
      const randomY = 10 + Math.random() * 75;
      const randomDelay = Math.random() * 3;
      const randomDuration = 5 + Math.random() * 5;
      const randomRotation = (Math.random() - 0.5) * 20;
      const randomScale = 0.6 + Math.random() * 0.5;
      
      gsap.set(element, {
        x: `${randomX}vw`,
        y: `${randomY}vh`,
        rotation: randomRotation,
        scale: randomScale,
        opacity: 0.08 + Math.random() * 0.12,
      });
      
      gsap.to(element, {
        y: `${randomY + (Math.random() - 0.5) * 15}vh`,
        x: `${randomX + (Math.random() - 0.5) * 8}vw`,
        rotation: `+=${(Math.random() - 0.5) * 15}`,
        duration: randomDuration,
        delay: randomDelay,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      
      gsap.to(element, {
        opacity: 0.05 + Math.random() * 0.15,
        duration: 3 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: randomDelay + 1,
      });
    });
    
    return () => {
      elements.forEach(element => {
        gsap.killTweensOf(element);
      });
    };
  }, []);
  
  return (
    <div ref={elementsRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bmcIcons.map((item, i) => {
        const IconComponent = item.Icon;
        return (
          <div
            key={i}
            className="floating-bmc-icon absolute"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(212, 175, 55, 0.3))',
            }}
          >
            <IconComponent 
              className="w-12 h-12 md:w-16 md:h-16 text-primary/60" 
              strokeWidth={1}
            />
          </div>
        );
      })}
      {bmcIcons.map((item, i) => {
        const IconComponent = item.Icon;
        return (
          <div
            key={`extra-${i}`}
            className="floating-bmc-icon absolute"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.2))',
            }}
          >
            <IconComponent 
              className="w-8 h-8 md:w-10 md:h-10 text-primary/40" 
              strokeWidth={1.5}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function BusinessModel() {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="fixed inset-0 z-0">
        <img
          src={bmcBackground}
          alt="Business Model Background"
          className="w-full h-full object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>
      
      <FloatingBMCElements />
      
      <Navbar />
      <div className="pt-24 relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gold-gradient mb-4" data-testid="text-bm-title">
              Business Model Canvas
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-bm-subtitle">
              A comprehensive analysis of TradeX's club-centered business model, designed to revolutionize trading education in Indonesia
            </p>
          </div>
        </div>
        <BusinessModelCanvas />
      </div>
      <Footer />
    </div>
  );
}
