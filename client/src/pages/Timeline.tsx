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
  LineChart,
  AlertTriangle,
  Clock,
  Palette,
  ClipboardCheck,
  Briefcase,
  ArrowRight,
  Activity,
  Timer,
  RefreshCw,
  Wifi,
  Gauge,
  UserCheck,
  Repeat,
  Video,
  Languages,
  ChevronRight
} from "lucide-react";
import timelineBackground from "@assets/generated_images/premium_timeline_development_background.png";
import planningPhaseImg from "@assets/generated_images/planning_phase_development_visualization.png";
import backendPhaseImg from "@assets/generated_images/backend_development_phase_visualization.png";
import frontendPhaseImg from "@assets/generated_images/frontend_mobile_development_visualization.png";
import educationPhaseImg from "@assets/generated_images/education_gamification_phase_visualization.png";
import chatPhaseImg from "@assets/generated_images/chat_community_phase_visualization.png";

gsap.registerPlugin(ScrollTrigger);

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

const resourceAllocationData = [
  { role: "Backend Dev 1", icon: Server, week1_2: "API Foundation", week3_4: "Education/Quiz", week5_6: "Store/AI", week7_8: "Bug Fixing", week9: "Monitoring" },
  { role: "Backend Dev 2", icon: Database, week1_2: "Auth/WebSocket", week3_4: "Chat/Competition", week5_6: "Payment/Alerts", week7_8: "Bug Fixing", week9: "Incident Response" },
  { role: "Frontend Dev 1", icon: Monitor, week1_2: "Dashboard/Auth", week3_4: "Chat/Practice", week5_6: "Alerts/AI", week7_8: "Bug Fixing", week9: "Support" },
  { role: "Frontend Dev 2", icon: Layout, week1_2: "Signals", week3_4: "Education/Community", week5_6: "Store/Website", week7_8: "UI Polish", week9: "Support" },
  { role: "Mobile Dev 1", icon: Smartphone, week1_2: "Auth/Dashboard", week3_4: "Chat/Practice", week5_6: "Alerts/AI", week7_8: "Optimization", week9: "Support" },
  { role: "Mobile Dev 2", icon: Smartphone, week1_2: "Signals", week3_4: "Education/Community", week5_6: "Store/Auto-Invest", week7_8: "Optimization", week9: "Support" },
  { role: "UI/UX Designer", icon: Palette, week1_2: "Design System", week3_4: "Refinements", week5_6: "Review", week7_8: "Polish", week9: "-" },
  { role: "QA Engineer", icon: ClipboardCheck, week1_2: "Setup/Planning", week3_4: "Integration Test", week5_6: "Payment Test", week7_8: "Full QA Sprint", week9: "Beta Testing" },
  { role: "Project Manager", icon: Briefcase, week1_2: "Planning", week3_4: "Coordination", week5_6: "Coordination", week7_8: "UAT Management", week9: "Launch Management" },
];

const priorityMatrix = {
  mvp: [
    { label: "Authentication & User Management", icon: Shield },
    { label: "Trading Signals dengan filter", icon: LineChart },
    { label: "Education Hub + Gamification", icon: BookOpen },
    { label: "Live Chat multi-room", icon: MessageSquare },
    { label: "Dashboard real-time", icon: BarChart3 },
    { label: "Advisor Expert listing", icon: Users },
    { label: "Basic Store & Payment", icon: ShoppingCart },
  ],
  phase2: [
    { label: "Smart Alerts customizable", icon: Bell },
    { label: "WhatsApp/Telegram automation", icon: MessageSquare },
    { label: "Competition & Tournament", icon: Trophy },
    { label: "AI Insights basic", icon: Brain },
    { label: "Website informational", icon: Globe },
  ],
  postLaunch: [
    { label: "Advanced AI predictions dengan ML models", icon: Brain },
    { label: "Social trading (copy trading)", icon: Users },
    { label: "Video streaming untuk webinar", icon: Video },
    { label: "Advanced analytics dashboard", icon: BarChart3 },
    { label: "Multi-language support", icon: Languages },
  ],
};

const riskManagement = [
  { 
    risk: "Real-time WebSocket stability",
    mitigation: "Load testing di week 7, fallback ke polling",
    icon: Wifi
  },
  { 
    risk: "Payment gateway integration delays",
    mitigation: "Start integration early (Day 33), use sandbox extensively",
    icon: CreditCard
  },
  { 
    risk: "Mobile app performance issues",
    mitigation: "Performance monitoring dari awal, optimization sprint Day 49-50",
    icon: Smartphone
  },
  { 
    risk: "API dependencies blocking frontend/mobile",
    mitigation: "Mock APIs untuk parallel development, daily sync meetings",
    icon: Server
  },
  { 
    risk: "AI features complexity",
    mitigation: "Simplify ke rule-based recommendations, ML enhancement post-launch",
    icon: Brain
  },
];

const contingencyPlans = [
  { condition: "If backend delays", action: "Frontend/Mobile use mock data untuk continue development" },
  { condition: "If payment integration fails", action: "Launch tanpa payment dulu, enable in Week 10" },
  { condition: "If critical bugs di Day 55", action: "Delay soft launch 2-3 hari, skip nice-to-have features" },
  { condition: "If performance issues", action: "Scale infrastructure, optimize queries, implement caching" },
];

const successMetrics = {
  technical: [
    { label: "API Response Time", value: "< 200ms (p95)", icon: Timer },
    { label: "WebSocket Uptime", value: "> 99.5%", icon: Wifi },
    { label: "Mobile App Crash Rate", value: "< 0.5%", icon: Smartphone },
    { label: "Page Load Time", value: "< 2 seconds", icon: Gauge },
  ],
  business: [
    { label: "User Registration", value: "7 hari pertama", icon: UserCheck },
    { label: "Daily Active Users (DAU)", value: "Track daily", icon: Activity },
    { label: "Feature Adoption Rate", value: "Signals, Education, Chat", icon: TrendingUp },
    { label: "Payment Conversion Rate", value: "Track weekly", icon: CreditCard },
    { label: "User Retention", value: "Day 1, 7, 30", icon: Repeat },
  ],
};

const nextSteps = [
  { week: "Week 10", action: "Official public launch dengan marketing campaign", icon: Rocket },
  { week: "Week 11-12", action: "User feedback implementation & feature enhancements", icon: RefreshCw },
  { week: "Month 2-3", action: "Advanced AI features, social trading, advanced analytics", icon: Brain },
  { week: "Month 4+", action: "Scale infrastructure, expand to iOS, international markets", icon: Globe },
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
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />
        
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
          
          {/* Resource Allocation Summary Table */}
          <div className="mt-20 resource-section" data-testid="section-resource-allocation">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F7E27A]">
                <BarChart3 className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-gold-gradient">Resource Allocation Summary</h3>
            </div>
            
            <Card className="bg-gradient-to-br from-black/80 via-card/50 to-black/80 border-[#D4AF37]/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" data-testid="table-resource-allocation">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#D4AF37]/30 via-[#F7E27A]/20 to-[#D4AF37]/30">
                        <th className="text-left py-4 px-4 text-[#D4AF37] font-bold border-b border-[#D4AF37]/20">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Role
                          </div>
                        </th>
                        <th className="text-center py-4 px-3 text-[#D4AF37] font-bold border-b border-[#D4AF37]/20">Week 1-2</th>
                        <th className="text-center py-4 px-3 text-[#D4AF37] font-bold border-b border-[#D4AF37]/20">Week 3-4</th>
                        <th className="text-center py-4 px-3 text-[#D4AF37] font-bold border-b border-[#D4AF37]/20">Week 5-6</th>
                        <th className="text-center py-4 px-3 text-[#D4AF37] font-bold border-b border-[#D4AF37]/20">Week 7-8</th>
                        <th className="text-center py-4 px-3 text-[#D4AF37] font-bold border-b border-[#D4AF37]/20">Week 9</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resourceAllocationData.map((member, index) => (
                        <tr 
                          key={index} 
                          className={`
                            ${index % 2 === 0 ? 'bg-black/40' : 'bg-[#D4AF37]/5'}
                            hover:bg-[#D4AF37]/10 transition-all duration-300
                            border-b border-white/5
                          `}
                          data-testid={`row-resource-${index}`}
                        >
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/30 to-[#F7E27A]/10 border border-[#D4AF37]/20">
                                <member.icon className="w-4 h-4 text-[#D4AF37]" />
                              </div>
                              <span className="font-semibold text-white">{member.role}</span>
                            </div>
                          </td>
                          <td className="py-4 px-3 text-center">
                            <Badge variant="outline" className="border-blue-400/30 text-blue-300 bg-blue-500/10">
                              {member.week1_2}
                            </Badge>
                          </td>
                          <td className="py-4 px-3 text-center">
                            <Badge variant="outline" className="border-purple-400/30 text-purple-300 bg-purple-500/10">
                              {member.week3_4}
                            </Badge>
                          </td>
                          <td className="py-4 px-3 text-center">
                            <Badge variant="outline" className="border-orange-400/30 text-orange-300 bg-orange-500/10">
                              {member.week5_6}
                            </Badge>
                          </td>
                          <td className="py-4 px-3 text-center">
                            <Badge variant="outline" className="border-green-400/30 text-green-300 bg-green-500/10">
                              {member.week7_8}
                            </Badge>
                          </td>
                          <td className="py-4 px-3 text-center">
                            <Badge variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37] bg-[#D4AF37]/10">
                              {member.week9}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Priority Matrix Section */}
          <div className="mt-20 priority-section" data-testid="section-priority-matrix">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F7E27A]">
                <Target className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-gold-gradient">Priority Matrix</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* MVP Must-Have */}
              <Card className="bg-gradient-to-br from-green-500/10 via-card/50 to-green-500/5 border-green-500/30 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
                      <Trophy className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-green-400">MVP (Must-Have)</h4>
                      <p className="text-xs text-green-400/70">Ready by Day 45</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {priorityMatrix.mvp.map((item, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
                          index % 2 === 0 
                            ? 'bg-black/30 border-green-500/20' 
                            : 'bg-green-500/5 border-green-500/10'
                        }`}
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <item.icon className="w-4 h-4 text-green-300 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Phase 2 Should-Have */}
              <Card className="bg-gradient-to-br from-blue-500/10 via-card/50 to-blue-500/5 border-blue-500/30 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                      <Layers className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-400">Phase 2 (Should-Have)</h4>
                      <p className="text-xs text-blue-400/70">Day 29-42</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {priorityMatrix.phase2.map((item, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
                          index % 2 === 0 
                            ? 'bg-black/30 border-blue-500/20' 
                            : 'bg-blue-500/5 border-blue-500/10'
                        }`}
                      >
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <item.icon className="w-4 h-4 text-blue-300 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Post-Launch Nice-to-Have */}
              <Card className="bg-gradient-to-br from-purple-500/10 via-card/50 to-purple-500/5 border-purple-500/30 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                      <Sparkles className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-purple-400">Post-Launch (Nice-to-Have)</h4>
                      <p className="text-xs text-purple-400/70">After Day 60</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {priorityMatrix.postLaunch.map((item, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
                          index % 2 === 0 
                            ? 'bg-black/30 border-purple-500/20' 
                            : 'bg-purple-500/5 border-purple-500/10'
                        }`}
                      >
                        <RefreshCw className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <item.icon className="w-4 h-4 text-purple-300 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Risk Management Section */}
          <div className="mt-20 risk-section" data-testid="section-risk-management">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gold-gradient">Risk Management & Mitigation</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* High-Risk Items */}
              <Card className="bg-gradient-to-br from-red-500/10 via-card/50 to-orange-500/5 border-red-500/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    High-Risk Items
                  </h4>
                  <div className="space-y-4">
                    {riskManagement.map((item, index) => (
                      <div 
                        key={index} 
                        className={`p-4 rounded-xl border transition-all duration-300 ${
                          index % 2 === 0 
                            ? 'bg-black/40 border-red-500/20' 
                            : 'bg-red-500/5 border-red-500/10'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-red-500/20 border border-red-500/30 flex-shrink-0">
                            <item.icon className="w-4 h-4 text-red-400" />
                          </div>
                          <div>
                            <p className="font-semibold text-white mb-1">{item.risk}</p>
                            <div className="flex items-start gap-2">
                              <Shield className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-gray-400">{item.mitigation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contingency Plans */}
              <Card className="bg-gradient-to-br from-amber-500/10 via-card/50 to-yellow-500/5 border-amber-500/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-amber-400 mb-6 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Contingency Plans
                  </h4>
                  <div className="space-y-4">
                    {contingencyPlans.map((plan, index) => (
                      <div 
                        key={index} 
                        className={`p-4 rounded-xl border transition-all duration-300 ${
                          index % 2 === 0 
                            ? 'bg-black/40 border-amber-500/20' 
                            : 'bg-amber-500/5 border-amber-500/10'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                            {plan.condition}
                          </Badge>
                        </div>
                        <div className="flex items-start gap-2 pl-2">
                          <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-300">{plan.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Success Metrics Section */}
          <div className="mt-20 metrics-section" data-testid="section-success-metrics">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F7E27A]">
                <TrendingUp className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-gold-gradient">Success Metrics (Post-Launch)</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Technical KPIs */}
              <Card className="bg-gradient-to-br from-cyan-500/10 via-card/50 to-blue-500/5 border-cyan-500/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                    <Cpu className="w-5 h-5" />
                    Technical KPIs
                  </h4>
                  <div className="space-y-3">
                    {successMetrics.technical.map((metric, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 hover:scale-[1.01] ${
                          index % 2 === 0 
                            ? 'bg-black/40 border-cyan-500/20' 
                            : 'bg-cyan-500/5 border-cyan-500/10'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
                            <metric.icon className="w-4 h-4 text-cyan-400" />
                          </div>
                          <span className="text-gray-300">{metric.label}</span>
                        </div>
                        <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-mono">
                          {metric.value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business KPIs */}
              <Card className="bg-gradient-to-br from-[#D4AF37]/10 via-card/50 to-[#F7E27A]/5 border-[#D4AF37]/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-[#D4AF37] mb-6 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Business KPIs
                  </h4>
                  <div className="space-y-3">
                    {successMetrics.business.map((metric, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 hover:scale-[1.01] ${
                          index % 2 === 0 
                            ? 'bg-black/40 border-[#D4AF37]/20' 
                            : 'bg-[#D4AF37]/5 border-[#D4AF37]/10'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/30">
                            <metric.icon className="w-4 h-4 text-[#D4AF37]" />
                          </div>
                          <span className="text-gray-300">{metric.label}</span>
                        </div>
                        <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">
                          {metric.value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Next Steps Section */}
          <div className="mt-20 next-steps-section" data-testid="section-next-steps">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F7E27A]">
                <Rocket className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-gold-gradient">Next Steps After Day 60</h3>
            </div>

            <Card className="bg-gradient-to-br from-[#D4AF37]/10 via-card/50 to-black/80 border-[#D4AF37]/30 max-w-4xl mx-auto overflow-hidden">
              <CardContent className="p-8">
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#F7E27A] to-[#D4AF37]/20" />
                  <div className="space-y-6">
                    {nextSteps.map((step, index) => (
                      <div 
                        key={index} 
                        className={`relative pl-14 transition-all duration-300 hover:translate-x-2`}
                      >
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E27A] border-2 border-black" />
                        <div 
                          className={`p-4 rounded-xl border transition-all duration-300 ${
                            index % 2 === 0 
                              ? 'bg-black/40 border-[#D4AF37]/20' 
                              : 'bg-[#D4AF37]/5 border-[#D4AF37]/10'
                          }`}
                        >
                          <div className="flex items-center gap-3 flex-wrap">
                            <Badge className="bg-[#D4AF37] text-black font-bold">
                              {step.week}
                            </Badge>
                            <div className="p-1.5 rounded-lg bg-[#D4AF37]/20">
                              <step.icon className="w-4 h-4 text-[#D4AF37]" />
                            </div>
                            <span className="text-gray-300">{step.action}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Document Info */}
          <div className="mt-16 text-center">
            <Card className="inline-block bg-black/50 border-[#D4AF37]/20 max-w-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-[#D4AF37]" />
                    <span>Version 1.0</span>
                  </div>
                  <div className="w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>Day 0 (Pre-Launch)</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Next Review: Day 45 (MVP Checkpoint)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
