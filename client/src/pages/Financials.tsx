import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevenueStreams from "@/components/RevenueStreams";
import FinancialProjections from "@/components/FinancialProjections";
import InvestmentOpportunity from "@/components/InvestmentOpportunity";
import gsap from "gsap";

function FloatingCoins() {
  const coinsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!coinsRef.current) return;
    
    const coins = coinsRef.current.querySelectorAll('.floating-coin');
    
    coins.forEach((coin, index) => {
      const randomX = 10 + Math.random() * 80;
      const randomY = 10 + Math.random() * 80;
      const randomDelay = Math.random() * 3;
      const randomDuration = 4 + Math.random() * 4;
      const randomRotation = Math.random() * 360;
      const randomScale = 0.5 + Math.random() * 0.8;
      
      gsap.set(coin, {
        x: `${randomX}vw`,
        y: `${randomY}vh`,
        rotation: randomRotation,
        scale: randomScale,
        opacity: 0.15 + Math.random() * 0.15,
      });
      
      gsap.to(coin, {
        y: `${randomY + (Math.random() - 0.5) * 20}vh`,
        x: `${randomX + (Math.random() - 0.5) * 10}vw`,
        rotation: `+=${(Math.random() - 0.5) * 30}`,
        duration: randomDuration,
        delay: randomDelay,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      
      gsap.to(coin, {
        rotateY: 360,
        duration: 6 + Math.random() * 4,
        repeat: -1,
        ease: 'none',
        delay: randomDelay,
      });
    });
    
    return () => {
      coins.forEach(coin => {
        gsap.killTweensOf(coin);
      });
    };
  }, []);
  
  return (
    <div ref={coinsRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="floating-coin absolute"
          style={{
            width: '40px',
            height: '40px',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))' }}
          >
            <defs>
              <linearGradient id={`coinGradient${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F7E27A" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>
              <linearGradient id={`coinEdge${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#8B7355" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            <ellipse cx="50" cy="50" rx="45" ry="45" fill={`url(#coinGradient${i})`} />
            <ellipse cx="50" cy="50" rx="40" ry="40" fill="none" stroke="#B8860B" strokeWidth="2" />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="28"
              fontWeight="bold"
              fill="#8B4513"
              opacity="0.7"
            >
              $
            </text>
            <ellipse cx="50" cy="50" rx="45" ry="45" fill="none" stroke={`url(#coinEdge${i})`} strokeWidth="3" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function Financials() {
  return (
    <div className="min-h-screen bg-black relative">
      <FloatingCoins />
      <Navbar />
      <div className="pt-24 relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gold-gradient mb-4" data-testid="text-financials-title">
              Financial Projections
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-financials-subtitle">
              Revenue streams, profit analysis, and investment return for the TradeX ecosystem
            </p>
          </div>
        </div>
        <RevenueStreams />
        <FinancialProjections />
        <InvestmentOpportunity />
      </div>
      <Footer />
    </div>
  );
}
