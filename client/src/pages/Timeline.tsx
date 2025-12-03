import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  Zap,
  Shield,
  Server,
  Layout,
  BookOpen,
  Trophy,
  CreditCard,
  Sparkles,
  TestTube,
  Play,
  GitBranch,
  FileCode,
  Layers,
  Monitor,
  Cpu,
  Globe,
  TrendingUp,
  BarChart3,
  LineChart
} from "lucide-react";
import timelineBackground from "@assets/generated_images/premium_timeline_development_background.png";
import planningPhaseImg from "@assets/generated_images/planning_phase_development_visualization.png";
import backendPhaseImg from "@assets/generated_images/backend_development_phase_visualization.png";
import frontendPhaseImg from "@assets/generated_images/frontend_mobile_development_visualization.png";
import educationPhaseImg from "@assets/generated_images/education_gamification_phase_visualization.png";
import chatPhaseImg from "@assets/generated_images/chat_community_phase_visualization.png";

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

const detailedTimelineData = [
  {
    week: "Week 1-2",
    days: "Hari 1-14",
    title: "PLANNING & FOUNDATION PHASE",
    icon: Rocket,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-400/30",
    image: planningPhaseImg,
    progress: 100,
    subPhases: [
      {
        title: "Day 1-3: Project Setup & Architecture Design",
        icon: GitBranch,
        tasks: [
          { task: "Kickoff meeting, tech stack finalization", platform: "Both", pic: "PM + All", output: "Tech documentation" },
          { task: "Database schema design (Users, Signals, Education, Chat)", platform: "Backend", pic: "Backend Lead", output: "ERD diagram" },
          { task: "API architecture & endpoints documentation", platform: "Backend", pic: "Backend Lead", output: "API spec (Swagger)" },
          { task: "UI/UX wireframes untuk core screens", platform: "Both", pic: "UI/UX Designer", output: "Figma prototypes" },
          { task: "Development environment setup (repos, CI/CD)", platform: "Both", pic: "DevOps/Backend", output: "GitHub repos ready" },
          { task: "Design system & component library", platform: "Web/Mobile", pic: "UI/UX + Frontend", output: "Design tokens" },
        ]
      },
      {
        title: "Day 4-7: Backend Foundation & Core API",
        icon: Server,
        tasks: [
          { task: "Authentication system (JWT, OAuth)", platform: "Backend", pic: "Backend Dev 1", output: "Auth API" },
          { task: "User management & profile API", platform: "Backend", pic: "Backend Dev 2", output: "User CRUD API" },
          { task: "Trading Signals API (CRUD + filter)", platform: "Backend", pic: "Backend Dev 1", output: "Signals API" },
          { task: "Real-time WebSocket setup untuk live data", platform: "Backend", pic: "Backend Dev 2", output: "WebSocket server" },
          { task: "Education Hub API (courses, progress tracking)", platform: "Backend", pic: "Backend Dev 1", output: "Education API" },
          { task: "Chat system backend (rooms, messages)", platform: "Backend", pic: "Backend Dev 2", output: "Chat API" },
        ]
      },
      {
        title: "Day 8-14: Frontend Foundation & Mobile Setup",
        icon: Layout,
        tasks: [
          { task: "Web: Setup React/Next.js + routing", platform: "Web", pic: "Frontend Dev 1", output: "Web scaffold" },
          { task: "Mobile: Setup React Native + navigation", platform: "Mobile", pic: "Mobile Dev 1", output: "Mobile scaffold" },
          { task: "Web & Mobile: Authentication screens", platform: "Both", pic: "Frontend + Mobile", output: "Auth UI" },
          { task: "Dashboard layout + real-time widgets", platform: "Both", pic: "All Frontend", output: "Dashboard" },
          { task: "Trading Signals page (list, filter, detail)", platform: "Both", pic: "Frontend Dev 2", output: "Signals UI" },
        ]
      }
    ],
    deliverables: [
      "Complete technical documentation",
      "Database architecture finalized",
      "API endpoints specification",
      "Design system & prototypes",
      "Authentication flow working",
      "Dashboard prototype ready"
    ],
    milestone: "MILESTONE 1: Authentication flow working on web & mobile"
  },
  {
    week: "Week 3-4",
    days: "Hari 15-28",
    title: "CORE FEATURE DEVELOPMENT",
    icon: Code2,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-400/30",
    image: educationPhaseImg,
    progress: 100,
    subPhases: [
      {
        title: "Day 15-18: Education Hub & Gamification",
        icon: BookOpen,
        tasks: [
          { task: "Gamification system (points, badges, leaderboard)", platform: "Backend", pic: "Backend Dev 2", output: "Gamification API" },
          { task: "Quiz & assessment engine", platform: "Backend", pic: "Backend Dev 1", output: "Quiz API" },
          { task: "Education Hub interface (courses, learning paths)", platform: "Both", pic: "Frontend", output: "Education UI" },
          { task: "Gamification dashboard (badges, progress)", platform: "Both", pic: "Frontend", output: "Gamification UI" },
          { task: "Practice Zone (quiz interface)", platform: "Both", pic: "Frontend Dev 1", output: "Quiz UI" },
        ]
      },
      {
        title: "Day 19-22: Live Chat & Community",
        icon: MessageSquare,
        tasks: [
          { task: "Chat rooms management API", platform: "Backend", pic: "Backend Dev 2", output: "Rooms API" },
          { task: "Message history & search", platform: "Backend", pic: "Backend Dev 1", output: "Search API" },
          { task: "Live Chat interface (multi-room)", platform: "Both", pic: "Frontend Dev 1", output: "Chat UI" },
          { task: "Community features (discussions, posts)", platform: "Both", pic: "Frontend Dev 2", output: "Community UI" },
          { task: "Real-time notifications setup", platform: "Both", pic: "Backend Dev 2", output: "Push notifications" },
        ]
      },
      {
        title: "Day 23-28: Advisor Expert & Competition",
        icon: Trophy,
        tasks: [
          { task: "Advisor Expert profiles & booking API", platform: "Backend", pic: "Backend Dev 1", output: "Advisor API" },
          { task: "Robot Trading metadata & filters", platform: "Backend", pic: "Backend Dev 2", output: "Robot API" },
          { task: "Competition system (tournaments, leaderboard)", platform: "Backend", pic: "Backend Dev 2", output: "Competition API" },
          { task: "Achievement system integration", platform: "Backend", pic: "Backend Dev 1", output: "Achievement API" },
          { task: "Integration testing semua core features", platform: "Both", pic: "QA + Devs", output: "Test report" },
        ]
      }
    ],
    deliverables: [
      "Education Hub functional",
      "Gamification system working",
      "Live Chat multi-room functional",
      "Competition & Tournament system",
      "Achievement system integrated",
      "All MVP core features 85% complete"
    ],
    milestone: "MILESTONE 2: Education Hub, Chat, Advisor Expert complete"
  },
  {
    week: "Week 5-6",
    days: "Hari 29-42",
    title: "SMART ALERTS, STORE & INTEGRATION",
    icon: ShoppingCart,
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-400/30",
    image: chatPhaseImg,
    progress: 100,
    subPhases: [
      {
        title: "Day 29-32: Smart Alerts & Automation",
        icon: Bell,
        tasks: [
          { task: "Custom alerts engine (price, signals, news)", platform: "Backend", pic: "Backend Dev 1", output: "Alerts API" },
          { task: "WhatsApp & Telegram bot integration", platform: "Backend", pic: "Backend Dev 2", output: "Bot APIs" },
          { task: "Smart Alerts settings & management", platform: "Both", pic: "Frontend", output: "Alerts UI" },
          { task: "Notification preferences & scheduling", platform: "Backend", pic: "Backend Dev 2", output: "Notification system" },
        ]
      },
      {
        title: "Day 33-37: Store & Payment Integration",
        icon: CreditCard,
        tasks: [
          { task: "Store API (products, cart, orders)", platform: "Backend", pic: "Backend Dev 1", output: "Store API" },
          { task: "Midtrans payment gateway integration", platform: "Backend", pic: "Backend Dev 2", output: "Payment API" },
          { task: "Subscription management system", platform: "Backend", pic: "Backend Dev 1", output: "Subscription API" },
          { task: "Store marketplace (EA, Robot, ebook)", platform: "Both", pic: "Frontend", output: "Store UI" },
          { task: "Auto-Invest feature dengan cashback", platform: "Both", pic: "Frontend", output: "Auto-Invest UI" },
        ]
      },
      {
        title: "Day 38-42: AI Insights & Website",
        icon: Brain,
        tasks: [
          { task: "AI recommendation engine (basic ML)", platform: "Backend", pic: "Backend Dev 2", output: "AI API (v1)" },
          { task: "Personalization algorithm", platform: "Backend", pic: "Backend Dev 1", output: "Personalization API" },
          { task: "AI Insights dashboard", platform: "Both", pic: "Frontend", output: "AI UI" },
          { task: "Landing page informational", platform: "Web", pic: "Frontend Dev 2", output: "Landing page" },
          { task: "SEO optimization & meta tags", platform: "Web", pic: "Frontend Dev 2", output: "SEO ready" },
        ]
      }
    ],
    deliverables: [
      "Smart Alerts customizable working",
      "WhatsApp & Telegram automation",
      "Store marketplace functional",
      "Midtrans payment integrated",
      "AI Insights (basic) deployed",
      "Website informational live"
    ],
    milestone: "MILESTONE 3: Store & Payment fully integrated - MVP READY 95%"
  },
  {
    week: "Week 7-8",
    days: "Hari 43-56",
    title: "TESTING, OPTIMIZATION & BUG FIXING",
    icon: Bug,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-400/30",
    image: backendPhaseImg,
    progress: 100,
    subPhases: [
      {
        title: "Day 43-45: MVP Testing & User Acceptance",
        icon: TestTube,
        tasks: [
          { task: "Full integration testing - all features", platform: "Both", pic: "QA Lead", output: "Test cases executed" },
          { task: "Performance testing & optimization", platform: "Both", pic: "Backend + QA", output: "Performance report" },
          { task: "Security audit (auth, payments, data)", platform: "Backend", pic: "Backend Lead", output: "Security report" },
          { task: "Load testing (stress test API & WebSocket)", platform: "Backend", pic: "Backend Dev 2", output: "Load test report" },
          { task: "MVP CHECKPOINT: Internal demo & feedback", platform: "Both", pic: "PM + All", output: "Feedback document" },
        ]
      },
      {
        title: "Day 46-50: Bug Fixing Sprint",
        icon: Bug,
        tasks: [
          { task: "Critical bug fixing (P0 & P1 issues)", platform: "Both", pic: "All Devs", output: "Bugs resolved" },
          { task: "UI/UX refinements based on feedback", platform: "Both", pic: "Frontend + Mobile", output: "UI polished" },
          { task: "Mobile app optimization (performance, size)", platform: "Mobile", pic: "Mobile Devs", output: "Optimized APK" },
          { task: "Regression testing after bug fixes", platform: "Both", pic: "QA", output: "Regression report" },
        ]
      },
      {
        title: "Day 51-56: Beta Testing & Final Prep",
        icon: Users,
        tasks: [
          { task: "Beta testing dengan selected users (20-30)", platform: "Both", pic: "QA + PM", output: "Beta feedback" },
          { task: "Final bug fixes dari beta testing", platform: "Both", pic: "All Devs", output: "Fixes deployed" },
          { task: "App store submission preparation", platform: "Mobile", pic: "Mobile Lead", output: "Store listing ready" },
          { task: "Production environment setup", platform: "Backend", pic: "DevOps/Backend", output: "Prod environment" },
          { task: "Final smoke testing di production", platform: "Both", pic: "QA + All", output: "Go/No-go decision" },
        ]
      }
    ],
    deliverables: [
      "MVP COMPLETE - All features tested",
      "Performance benchmarks met",
      "Security vulnerabilities addressed",
      "90% critical bugs fixed",
      "Beta testing completed",
      "Google Play submission ready"
    ],
    milestone: "MILESTONE 4 & 5: MVP Complete & Production-ready"
  },
  {
    week: "Week 9",
    days: "Hari 57-60",
    title: "SOFT LAUNCH & MONITORING",
    icon: Play,
    color: "from-[#D4AF37]/30 to-[#F7E27A]/20",
    borderColor: "border-[#D4AF37]/50",
    image: frontendPhaseImg,
    progress: 100,
    subPhases: [
      {
        title: "Day 57-60: Soft Launch Phase",
        icon: Rocket,
        tasks: [
          { task: "SOFT LAUNCH: Release to limited users (100-200)", platform: "Both", pic: "PM + Marketing", output: "App live" },
          { task: "Real-time monitoring & incident response", platform: "Backend", pic: "Backend + DevOps", output: "Monitoring active" },
          { task: "User feedback collection & analysis", platform: "Both", pic: "PM + QA", output: "Feedback report" },
          { task: "Hotfix deployment jika ada critical issues", platform: "Both", pic: "All Devs", output: "Hotfixes applied" },
          { task: "Performance analysis & post-launch report", platform: "-", pic: "PM + All", output: "Launch report" },
          { task: "OFFICIAL LAUNCH PREPARATION", platform: "Marketing", pic: "Marketing + PM", output: "Launch plan" },
        ]
      }
    ],
    deliverables: [
      "Application live dengan real users",
      "Monitoring & analytics configured",
      "Initial user feedback collected",
      "1000+ beta users onboarded",
      "Production environment stable",
      "Ready for official public launch"
    ],
    milestone: "MILESTONE 6: SOFT LAUNCH SUCCESS - TradeHub LIVE!"
  }
];

const teamAllocation = [
  { role: "Backend Dev 1", icon: Server, tasks: ["API Foundation", "Education/Quiz", "Store/AI", "Bug Fixing", "Monitoring"] },
  { role: "Backend Dev 2", icon: Database, tasks: ["Auth/WebSocket", "Chat/Competition", "Payment/Alerts", "Bug Fixing", "Incident Response"] },
  { role: "Frontend Dev 1", icon: Monitor, tasks: ["Dashboard/Auth", "Chat/Practice", "Alerts/AI", "Bug Fixing", "Support"] },
  { role: "Frontend Dev 2", icon: Layout, tasks: ["Signals", "Education/Community", "Store/Website", "UI Polish", "Support"] },
  { role: "Mobile Dev 1", icon: Smartphone, tasks: ["Auth/Dashboard", "Chat/Practice", "Alerts/AI", "Optimization", "Support"] },
  { role: "Mobile Dev 2", icon: Smartphone, tasks: ["Signals", "Education/Community", "Store/Auto-Invest", "Optimization", "Support"] },
];

const technicalKPIs = [
  { label: "API Response Time", value: "< 200ms", icon: Zap },
  { label: "WebSocket Uptime", value: "> 99.5%", icon: Globe },
  { label: "App Crash Rate", value: "< 0.5%", icon: Shield },
  { label: "Page Load Time", value: "< 2s", icon: TrendingUp },
];

export default function Timeline() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
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
    
    const cards = cardsRef.current?.querySelectorAll('.phase-card');
    if (cards) {
      cards.forEach((card) => {
        gsap.set(card, { opacity: 0, y: 80, scale: 0.95 });
        
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
            });
          },
        });
      });
    }
    
    const subCards = document.querySelectorAll('.sub-phase-card');
    subCards.forEach((card) => {
      gsap.set(card, { opacity: 0, x: -30 });
      
      ScrollTrigger.create({
        trigger: card,
        start: "top 90%",
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        },
      });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img 
            src={timelineBackground} 
            alt="Timeline Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black" />
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent animate-pulse-slow pointer-events-none" />
        
        <GoldParticles />
        <FloatingCandlesticks />
        <FloatingElements />
        
        <div className="container mx-auto px-6 text-center relative z-10 pt-32 pb-16">
          <Badge className="mb-6 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30 px-4 py-2" data-testid="badge-timeline">
            <Calendar className="w-4 h-4 mr-2" />
            60-Day Development Sprint
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
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8" 
            data-testid="text-timeline-subtitle"
          >
            Platform Trading Ekosistem (Web & Android Mobile) - Dari planning hingga soft launch dalam 60 hari
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full border border-[#D4AF37]/30">
              <Target className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm text-white">MVP: Hari ke-45</span>
            </div>
            <div className="flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full border border-[#D4AF37]/30">
              <Zap className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm text-white">Soft Launch: Hari 57-60</span>
            </div>
            <div className="flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full border border-[#D4AF37]/30">
              <Users className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm text-white">Core Team: 10 Members</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technicalKPIs.map((kpi, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
                <kpi.icon className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <div className="text-lg font-bold text-white">{kpi.value}</div>
                <div className="text-xs text-muted-foreground">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-gradient-to-b from-black via-card to-black">
        <div className="container mx-auto px-6">
          <div ref={cardsRef} className="space-y-16">
            {detailedTimelineData.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="phase-card" data-testid={`timeline-phase-${phaseIndex}`}>
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/20 hidden lg:block" />
                  
                  <Card className={`bg-gradient-to-br ${phase.color} ${phase.borderColor} border-2 overflow-hidden`}>
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <img 
                        src={phase.image} 
                        alt={phase.title}
                        className="w-full h-full object-cover opacity-40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F7E27A]">
                            <phase.icon className="w-6 h-6 text-black" />
                          </div>
                          <div>
                            <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30 mb-1">
                              {phase.week} | {phase.days}
                            </Badge>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">{phase.title}</h2>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={phase.progress} className="h-2 flex-1 bg-white/20" />
                          <span className="text-sm text-[#D4AF37] font-semibold">{phase.progress}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 space-y-6">
                      {phase.subPhases.map((subPhase, subIndex) => (
                        <div key={subIndex} className="sub-phase-card bg-black/30 rounded-xl p-5 border border-white/10">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-[#D4AF37]/20">
                              <subPhase.icon className="w-5 h-5 text-[#D4AF37]" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{subPhase.title}</h3>
                          </div>
                          
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-white/10">
                                  <th className="text-left py-2 px-3 text-[#D4AF37] font-medium">Task</th>
                                  <th className="text-left py-2 px-3 text-[#D4AF37] font-medium hidden md:table-cell">Platform</th>
                                  <th className="text-left py-2 px-3 text-[#D4AF37] font-medium hidden lg:table-cell">PIC</th>
                                  <th className="text-left py-2 px-3 text-[#D4AF37] font-medium">Output</th>
                                </tr>
                              </thead>
                              <tbody>
                                {subPhase.tasks.map((task, taskIndex) => (
                                  <tr key={taskIndex} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-2 px-3 text-gray-300">
                                      <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                                        <span>{task.task}</span>
                                      </div>
                                    </td>
                                    <td className="py-2 px-3 text-gray-400 hidden md:table-cell">
                                      <Badge variant="outline" className="border-white/20 text-xs">{task.platform}</Badge>
                                    </td>
                                    <td className="py-2 px-3 text-gray-400 hidden lg:table-cell">{task.pic}</td>
                                    <td className="py-2 px-3 text-[#D4AF37]">{task.output}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                      
                      <div className="bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-xl p-5 border border-[#D4AF37]/30">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                          <h4 className="text-lg font-semibold text-[#D4AF37]">Key Deliverables</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                          {phase.deliverables.map((deliverable, dIndex) => (
                            <div key={dIndex} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                              <span>{deliverable}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-[#D4AF37]/20">
                          <Badge className="bg-[#D4AF37] text-black font-semibold">
                            {phase.milestone}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gold-gradient text-center mb-8">Team Resource Allocation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamAllocation.map((member, index) => (
                <Card key={index} className="bg-card/50 border-[#D4AF37]/20 hover-elevate">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[#D4AF37]/20">
                        <member.icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <h4 className="font-semibold text-white">{member.role}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {member.tasks.map((task, tIndex) => (
                        <Badge key={tIndex} variant="outline" className="text-xs border-white/20 text-gray-400">
                          {task}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Card className="inline-block bg-gradient-to-br from-[#D4AF37]/20 to-[#F7E27A]/10 border-[#D4AF37]/30 max-w-4xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Trophy className="w-8 h-8 text-[#D4AF37]" />
                  <h3 className="text-2xl font-bold text-gold-gradient" data-testid="text-mvp-features">
                    MVP Priority Features
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">Ready by Day 45</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: LineChart, label: "Trading Signals dengan filter" },
                    { icon: BookOpen, label: "Education Hub + gamification" },
                    { icon: MessageSquare, label: "Live Chat multi-room" },
                    { icon: BarChart3, label: "Dashboard real-time" },
                    { icon: Users, label: "Advisor Expert listing" },
                    { icon: Shield, label: "User authentication & profil" },
                    { icon: ShoppingCart, label: "Basic Store & Payment" },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-black/30 rounded-lg p-3 border border-[#D4AF37]/20">
                      <feature.icon className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-sm text-gray-300">{feature.label}</span>
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
