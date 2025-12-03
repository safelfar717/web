import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Rocket, 
  Database, 
  Code2, 
  Smartphone, 
  Users, 
  MessageSquare, 
  Award, 
  Bell, 
  ShoppingCart, 
  Brain, 
  Bug, 
  CheckCircle,
  Calendar,
  Target,
  Zap
} from "lucide-react";
import timelineBackground from "@assets/generated_images/premium_timeline_development_background.png";

gsap.registerPlugin(ScrollTrigger);

function GoldParticles() {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const particles = particlesRef.current.querySelectorAll('.gold-particle');
    
    particles.forEach((particle) => {
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

function FloatingCandlesticks() {
  const candlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!candlesRef.current) return;
    
    const candles = candlesRef.current.querySelectorAll('.candlestick');
    
    candles.forEach((candle) => {
      const randomX = Math.random() * 100;
      const randomDelay = Math.random() * 5;
      const randomDuration = 8 + Math.random() * 12;
      const randomSize = 17 + Math.random() * 8;
      const isGreen = Math.random() > 0.5;
      
      gsap.set(candle, {
        x: `${randomX}vw`,
        y: '110vh',
        height: randomSize,
        opacity: 0.4 + Math.random() * 0.4,
      });
      
      gsap.to(candle, {
        y: '-10vh',
        x: `+=${(Math.random() - 0.5) * 80}`,
        duration: randomDuration,
        delay: randomDelay,
        repeat: -1,
        ease: 'none',
        onRepeat: () => {
          gsap.set(candle, {
            x: `${Math.random() * 100}vw`,
            y: '110vh',
          });
        }
      });
      
      gsap.to(candle, {
        scaleY: isGreen ? 1.3 : 0.7,
        duration: 1 + Math.random() * 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: randomDelay,
      });
      
      gsap.to(candle, {
        opacity: 0.2 + Math.random() * 0.3,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: randomDelay + 0.5,
      });
    });
    
    return () => {
      candles.forEach(candle => {
        gsap.killTweensOf(candle);
      });
    };
  }, []);
  
  return (
    <div ref={candlesRef} className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {Array.from({ length: 29 }).map((_, i) => (
        <div
          key={i}
          className="candlestick absolute"
          style={{
            width: '4px',
            background: i % 2 === 0 
              ? `linear-gradient(to top, rgba(212, 175, 55, 0.9), rgba(247, 226, 122, 0.6))` 
              : `linear-gradient(to bottom, rgba(212, 175, 55, 0.9), rgba(247, 226, 122, 0.6))`,
            boxShadow: '0 0 8px rgba(212, 175, 55, 0.6), 0 0 16px rgba(212, 175, 55, 0.3)',
            borderRadius: '2px',
          }}
        >
          <div 
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              width: '1px',
              height: '8px',
              top: '-6px',
              background: 'rgba(212, 175, 55, 0.7)',
            }}
          />
          <div 
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              width: '1px',
              height: '8px',
              bottom: '-6px',
              background: 'rgba(212, 175, 55, 0.7)',
            }}
          />
        </div>
      ))}
    </div>
  );
}

function FloatingElements() {
  const elementsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!elementsRef.current) return;
    
    const elements = elementsRef.current.querySelectorAll('.floating-icon');
    
    elements.forEach((element, index) => {
      gsap.to(element, {
        y: -15 + Math.random() * 30,
        x: -10 + Math.random() * 20,
        rotation: -5 + Math.random() * 10,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      });
    });
    
    return () => {
      elements.forEach(element => {
        gsap.killTweensOf(element);
      });
    };
  }, []);
  
  const icons = [
    { Icon: Rocket, position: "top-[15%] left-[10%]" },
    { Icon: Database, position: "top-[25%] right-[15%]" },
    { Icon: Code2, position: "top-[40%] left-[8%]" },
    { Icon: Smartphone, position: "top-[55%] right-[10%]" },
    { Icon: Users, position: "bottom-[35%] left-[12%]" },
    { Icon: MessageSquare, position: "bottom-[25%] right-[8%]" },
    { Icon: Award, position: "top-[20%] left-[85%]" },
    { Icon: Bell, position: "bottom-[45%] right-[85%]" },
  ];
  
  return (
    <div ref={elementsRef} className="absolute inset-0 pointer-events-none z-[3] hidden lg:block">
      {icons.map(({ Icon, position }, index) => (
        <div
          key={index}
          className={`floating-icon absolute ${position} p-3 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#F7E27A]/10 border border-[#D4AF37]/30 backdrop-blur-sm`}
          style={{
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)',
          }}
        >
          <Icon className="w-6 h-6 text-[#D4AF37]" />
        </div>
      ))}
    </div>
  );
}

const timelineData = [
  {
    week: "Week 1-2",
    days: "Hari 1-14",
    title: "Planning & Foundation Phase",
    icon: Rocket,
    color: "from-blue-500/20 to-cyan-500/20",
    milestones: [
      "Project Setup & Architecture Design",
      "Database schema design",
      "API architecture & endpoints documentation",
      "UI/UX wireframes",
      "Backend Foundation & Core API",
      "Authentication system (JWT, OAuth)",
      "Frontend Foundation & Mobile Setup"
    ],
    deliverables: [
      "Complete technical documentation",
      "Database architecture finalized",
      "API endpoints specification",
      "Design system & prototypes",
      "Authentication flow working"
    ]
  },
  {
    week: "Week 3-4",
    days: "Hari 15-28",
    title: "Core Feature Development",
    icon: Code2,
    color: "from-purple-500/20 to-pink-500/20",
    milestones: [
      "Education Hub & Gamification",
      "Quiz & assessment engine",
      "Live Chat & Community",
      "Chat rooms management",
      "Advisor Expert & Competition System",
      "Achievement system integration"
    ],
    deliverables: [
      "Education Hub functional",
      "Gamification system working",
      "Live Chat multi-room functional",
      "Competition & Tournament system",
      "All MVP core features 85% complete"
    ]
  },
  {
    week: "Week 5-6",
    days: "Hari 29-42",
    title: "Smart Alerts, Store & Integration",
    icon: ShoppingCart,
    color: "from-orange-500/20 to-amber-500/20",
    milestones: [
      "Smart Alerts & Automation",
      "WhatsApp & Telegram bot integration",
      "Store & Payment Integration",
      "Midtrans payment gateway",
      "AI Insights & Website Informational",
      "SEO optimization"
    ],
    deliverables: [
      "Smart Alerts customizable working",
      "Store marketplace functional",
      "Payment gateway integrated",
      "AI Insights deployed",
      "Website informational live",
      "MVP READY - 95% complete"
    ]
  },
  {
    week: "Week 7-8",
    days: "Hari 43-56",
    title: "Testing, Optimization & Bug Fixing",
    icon: Bug,
    color: "from-green-500/20 to-emerald-500/20",
    milestones: [
      "MVP Testing & User Acceptance",
      "Performance testing & optimization",
      "Security audit",
      "Load testing",
      "Bug Fixing Sprint",
      "UI/UX refinements"
    ],
    deliverables: [
      "MVP COMPLETE - All features tested",
      "Performance benchmarks met",
      "Security vulnerabilities addressed",
      "Critical bugs resolved",
      "App store submission ready"
    ]
  },
  {
    week: "Week 9",
    days: "Hari 57-60",
    title: "Launch Phase",
    icon: CheckCircle,
    color: "from-[#D4AF37]/20 to-[#F7E27A]/20",
    milestones: [
      "Soft Launch Preparation",
      "Beta user onboarding",
      "Real-time monitoring setup",
      "Final bug fixes",
      "Production deployment",
      "Go-Live celebration"
    ],
    deliverables: [
      "Soft Launch successful",
      "1000+ beta users onboarded",
      "All critical systems monitored",
      "Production environment stable",
      "TradeHub LIVE!"
    ]
  }
];

export default function Timeline() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
    });
    
    tl.from(subtitleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
    }, "-=0.6");
    
    const cards = timelineRef.current?.querySelectorAll('.timeline-card');
    if (cards) {
      cards.forEach((card, index) => {
        gsap.set(card, { opacity: 0, y: 60 });
        
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: index * 0.1,
            });
          },
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img 
            src={timelineBackground} 
            alt="Timeline Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent animate-pulse-slow pointer-events-none" />
        
        <GoldParticles />
        <FloatingCandlesticks />
        <FloatingElements />
        
        <div className="container mx-auto px-6 text-center relative z-10 pt-32">
          <Badge className="mb-4 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30" data-testid="badge-timeline">
            <Calendar className="w-3 h-3 mr-1" />
            60-Day Development
          </Badge>
          
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" 
            data-testid="text-timeline-title"
          >
            <span className="text-gold-gradient">TradeHub</span> Development
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">Timeline</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto" 
            data-testid="text-timeline-subtitle"
          >
            Platform Trading Ekosistem (Web & Android Mobile) - Dari planning hingga soft launch dalam 60 hari
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <Target className="w-5 h-5" />
              <span className="text-sm">MVP: Hari ke-45</span>
            </div>
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <Zap className="w-5 h-5" />
              <span className="text-sm">Soft Launch: Hari 57-60</span>
            </div>
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <Users className="w-5 h-5" />
              <span className="text-sm">Core Team: 10 Members</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-gradient-to-b from-black to-card">
        <div className="container mx-auto px-6">
          <div ref={timelineRef} className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent hidden lg:block" />
            
            <div className="space-y-12">
              {timelineData.map((phase, index) => (
                <div 
                  key={index}
                  className={`timeline-card relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  data-testid={`timeline-phase-${index}`}
                >
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E27A] items-center justify-center z-10 gold-glow">
                    <phase.icon className="w-6 h-6 text-black" />
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <Card className={`bg-gradient-to-br ${phase.color} border-[#D4AF37]/20 hover-elevate overflow-visible`}>
                      <CardContent className="p-6">
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                          <div className="lg:hidden p-2 rounded-lg bg-[#D4AF37]/20">
                            <phase.icon className="w-5 h-5 text-[#D4AF37]" />
                          </div>
                          <div>
                            <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30 mb-1">
                              {phase.week}
                            </Badge>
                            <p className="text-xs text-muted-foreground">{phase.days}</p>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-4" data-testid={`timeline-title-${index}`}>
                          {phase.title}
                        </h3>
                        
                        <div className="space-y-2 mb-4">
                          {phase.milestones.slice(0, 4).map((milestone, mIndex) => (
                            <div 
                              key={mIndex} 
                              className={`flex items-center gap-2 text-sm text-gray-300 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                              <span>{milestone}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className={`pt-4 border-t border-[#D4AF37]/20 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                          <p className="text-xs text-[#D4AF37] font-semibold mb-2">Key Deliverables:</p>
                          <div className="flex flex-wrap gap-2 justify-start lg:justify-start">
                            {phase.deliverables.slice(0, 3).map((deliverable, dIndex) => (
                              <Badge 
                                key={dIndex} 
                                variant="outline" 
                                className="text-xs border-[#D4AF37]/30 text-gray-300"
                              >
                                {deliverable}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Card className="inline-block bg-gradient-to-br from-[#D4AF37]/20 to-[#F7E27A]/10 border-[#D4AF37]/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gold-gradient mb-4" data-testid="text-mvp-features">
                  MVP Priority Features
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Trading Signals dengan filter",
                    "Education Hub + gamification",
                    "Live Chat multi-room",
                    "Dashboard real-time",
                    "Advisor Expert listing",
                    "User authentication & profil"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
