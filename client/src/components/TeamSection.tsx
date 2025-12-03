import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Users, 
  Code, 
  Palette, 
  TrendingUp, 
  BarChart3, 
  MessageCircle,
  Crown,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Target,
  Rocket,
  Shield,
  ChevronDown,
  ChevronUp,
  Clock,
  Zap,
  Activity,
  LineChart,
  Smartphone,
  TestTube,
  Settings
} from "lucide-react";

const teamData = {
  leadership: [
    {
      role: "CEO",
      name: "Leadership",
      icon: Crown,
      color: "text-gold-gradient",
      borderColor: "border-yellow-500/50",
      glowColor: "shadow-yellow-500/20"
    }
  ],
  coFounders: [
    {
      role: "CO-Founder",
      name: "Strategy Architect personality",
      icon: User,
      color: "text-blue-400",
      borderColor: "border-blue-500/50",
      glowColor: "shadow-blue-500/20"
    },
    {
      role: "CTO/Wakil Head",
      name: "Strategic Analyst architecture",
      icon: Code,
      color: "text-cyan-400",
      borderColor: "border-cyan-500/50",
      glowColor: "shadow-cyan-500/20"
    }
  ],
  developmentTeam: [
    {
      role: "Sr Backend (Developer)",
      icon: Code,
      color: "text-purple-400",
      borderColor: "border-purple-500/50",
      glowColor: "shadow-purple-500/20"
    },
    {
      role: "Sr Frontend (Engineer)",
      icon: Code,
      color: "text-violet-400",
      borderColor: "border-violet-500/50",
      glowColor: "shadow-violet-500/20"
    },
    {
      role: "Sr Mobile (Engineer)",
      icon: Code,
      color: "text-indigo-400",
      borderColor: "border-indigo-500/50",
      glowColor: "shadow-indigo-500/20"
    },
    {
      role: "Sr DevOps (Engineer)",
      icon: Code,
      color: "text-blue-400",
      borderColor: "border-blue-500/50",
      glowColor: "shadow-blue-500/20"
    }
  ],
  operations: [
    {
      role: "Sr Plus Arch (and others)",
      icon: BarChart3,
      color: "text-emerald-400",
      borderColor: "border-emerald-500/50",
      glowColor: "shadow-emerald-500/20"
    },
    {
      role: "Sr Content Writer",
      icon: MessageCircle,
      color: "text-green-400",
      borderColor: "border-green-500/50",
      glowColor: "shadow-green-500/20"
    },
    {
      role: "Sr Creative Writer",
      icon: Palette,
      color: "text-pink-400",
      borderColor: "border-pink-500/50",
      glowColor: "shadow-pink-500/20"
    },
    {
      role: "Community Manager",
      icon: Users,
      color: "text-teal-400",
      borderColor: "border-teal-500/50",
      glowColor: "shadow-teal-500/20"
    }
  ],
  expenses: {
    label: "Monthly Team Expenses",
    amount: "Rp 275 M"
  }
};

const orgChartStructure = {
  ceo: {
    position: "CEO",
    children: ["CTO", "Designers", "Head of Marketing"]
  },
  level2: [
    {
      position: "CTO",
      children: ["Developers"]
    },
    {
      position: "Designers",
      children: []
    },
    {
      position: "Head of Marketing",
      children: ["Analysts", "Community Manager"]
    }
  ],
  level3: [
    { position: "Developers", children: [] },
    { position: "Analysts", children: [] },
    { position: "Community Manager", children: [] }
  ]
};

const resourceAllocationData = {
  weeklyAllocation: [
    { 
      role: "Backend Dev 1", 
      icon: Code,
      color: "text-purple-400",
      weeks: ["API Foundation", "Education/Quiz", "Store/AI", "Bug Fixing", "Monitoring"]
    },
    { 
      role: "Backend Dev 2", 
      icon: Code,
      color: "text-violet-400",
      weeks: ["Auth/WebSocket", "Chat/Competition", "Payment/Alerts", "Bug Fixing", "Incident Response"]
    },
    { 
      role: "Frontend Dev 1", 
      icon: Code,
      color: "text-cyan-400",
      weeks: ["Dashboard/Auth", "Chat/Practice", "Alerts/AI", "Bug Fixing", "Support"]
    },
    { 
      role: "Frontend Dev 2", 
      icon: Code,
      color: "text-blue-400",
      weeks: ["Signals", "Education/Community", "Store/Website", "UI Polish", "Support"]
    },
    { 
      role: "Mobile Dev 1", 
      icon: Smartphone,
      color: "text-indigo-400",
      weeks: ["Auth/Dashboard", "Chat/Practice", "Alerts/AI", "Optimization", "Support"]
    },
    { 
      role: "Mobile Dev 2", 
      icon: Smartphone,
      color: "text-pink-400",
      weeks: ["Signals", "Education/Community", "Store/Auto-Invest", "Optimization", "Support"]
    },
    { 
      role: "UI/UX Designer", 
      icon: Palette,
      color: "text-rose-400",
      weeks: ["Design System", "Refinements", "Review", "Polish", "-"]
    },
    { 
      role: "QA Engineer", 
      icon: TestTube,
      color: "text-green-400",
      weeks: ["Setup/Planning", "Integration Test", "Payment Test", "Full QA Sprint", "Beta Testing"]
    },
    { 
      role: "Project Manager", 
      icon: Settings,
      color: "text-amber-400",
      weeks: ["Planning", "Coordination", "Coordination", "UAT Management", "Launch Management"]
    }
  ],
  priorityMatrix: {
    mvp: [
      { task: "Authentication & User Management", completed: true },
      { task: "Trading Signals dengan filter", completed: true },
      { task: "Education Hub + Gamification", completed: true },
      { task: "Live Chat multi-room", completed: true },
      { task: "Dashboard real-time", completed: true },
      { task: "Advisor Expert listing", completed: true },
      { task: "Basic Store & Payment", completed: true }
    ],
    phase2: [
      { task: "Smart Alerts customizable", completed: true },
      { task: "WhatsApp/Telegram automation", completed: true },
      { task: "Competition & Tournament", completed: true },
      { task: "AI Insights basic", completed: true },
      { task: "Website informational", completed: true }
    ],
    postLaunch: [
      { task: "Advanced AI predictions dengan ML models", completed: false },
      { task: "Social trading (copy trading)", completed: false },
      { task: "Video streaming untuk webinar", completed: false },
      { task: "Advanced analytics dashboard", completed: false },
      { task: "Multi-language support", completed: false }
    ]
  },
  riskManagement: [
    {
      risk: "Real-time WebSocket stability",
      mitigation: "Load testing di week 7, fallback ke polling",
      severity: "high"
    },
    {
      risk: "Payment gateway integration delays",
      mitigation: "Start integration early (Day 33), use sandbox extensively",
      severity: "high"
    },
    {
      risk: "Mobile app performance issues",
      mitigation: "Performance monitoring dari awal, optimization sprint Day 49-50",
      severity: "high"
    },
    {
      risk: "API dependencies blocking frontend/mobile",
      mitigation: "Mock APIs untuk parallel development, daily sync meetings",
      severity: "medium"
    },
    {
      risk: "AI features complexity",
      mitigation: "Simplify ke rule-based recommendations, ML enhancement post-launch",
      severity: "medium"
    }
  ],
  contingencyPlans: [
    { condition: "If backend delays", action: "Frontend/Mobile use mock data untuk continue development" },
    { condition: "If payment integration fails", action: "Launch tanpa payment dulu, enable in Week 10" },
    { condition: "If critical bugs di Day 55", action: "Delay soft launch 2-3 hari, skip nice-to-have features" },
    { condition: "If performance issues", action: "Scale infrastructure, optimize queries, implement caching" }
  ],
  successMetrics: {
    technical: [
      { metric: "API response time", target: "< 200ms (p95)" },
      { metric: "WebSocket uptime", target: "> 99.5%" },
      { metric: "Mobile app crash rate", target: "< 0.5%" },
      { metric: "Page load time", target: "< 2 seconds" }
    ],
    business: [
      { metric: "User registration dalam 7 hari pertama", target: "Track" },
      { metric: "Daily Active Users (DAU)", target: "Track" },
      { metric: "Feature adoption rate", target: "Signals, Education, Chat" },
      { metric: "Payment conversion rate", target: "Track" },
      { metric: "User retention", target: "Day 1, Day 7, Day 30" }
    ]
  },
  nextSteps: [
    { week: "Week 10", action: "Official public launch dengan marketing campaign" },
    { week: "Week 11-12", action: "User feedback implementation & feature enhancements" },
    { week: "Month 2-3", action: "Advanced AI features, social trading, advanced analytics" },
    { week: "Month 4+", action: "Scale infrastructure, expand to iOS, international markets" }
  ]
};

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const coFoundersRef = useRef<HTMLDivElement>(null);
  const orgChartRef = useRef<HTMLDivElement>(null);
  const teamsRef = useRef<HTMLDivElement>(null);
  const resourceAllocationRef = useRef<HTMLDivElement>(null);
  
  const [expandedSections, setExpandedSections] = useState({
    allocation: true,
    priority: true,
    risk: true,
    metrics: true,
    nextSteps: true
  });
  
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    const leadership = leadershipRef.current;
    const coFounders = coFoundersRef.current;
    const orgChart = orgChartRef.current;
    const teams = teamsRef.current;

    if (!section || !leadership || !coFounders || !orgChart || !teams) return;

    let gsap: typeof import("gsap").default;
    let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;

    const initAnimation = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      gsap = gsapModule.default;
      ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        const allCards = section.querySelectorAll("[data-team-card]");
        const chartNodes = orgChart.querySelectorAll("[data-chart-node]");
        const chartLines = orgChart.querySelectorAll("[data-chart-line]");
        gsap.set([allCards, chartNodes, chartLines], { opacity: 1, y: 0 });
        return;
      }

      const ctx = gsap.context(() => {
        const leadershipCards = leadership.querySelectorAll("[data-team-card]");
        const coFounderCards = coFounders.querySelectorAll("[data-team-card]");
        const chartNodes = orgChart.querySelectorAll("[data-chart-node]");
        const chartLines = orgChart.querySelectorAll("[data-chart-line]");
        const teamCards = teams.querySelectorAll("[data-team-card]");

        gsap.set([leadershipCards, coFounderCards, chartNodes, chartLines, teamCards], {
          opacity: 0,
          y: 40,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        // Animate leadership first
        tl.to(leadershipCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        // Animate co-founders
        tl.to(
          coFounderCards,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );

        // Animate org chart lines first
        tl.to(
          chartLines,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3"
        );

        // Animate org chart nodes
        tl.to(
          chartNodes,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(1.2)",
          },
          "-=0.4"
        );

        // Animate team cards
        tl.to(
          teamCards,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }, section);

      return () => {
        ctx.revert();
      };
    };

    const cleanup = initAnimation();
    
    return () => {
      if (cleanup) {
        cleanup.then((cleanupFn) => {
          if (cleanupFn) cleanupFn();
        });
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-black overflow-hidden"
      data-testid="section-team"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-team-title">Team & Execution</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto" data-testid="text-team-subtitle">
            Tim yang kompak dan berpengalaman untuk membangun platform trading terbaik
          </p>
        </div>

        {/* Leadership Section */}
        <div ref={leadershipRef} className="mb-12">
          <div className="max-w-md mx-auto">
            {teamData.leadership.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <Card
                  key={index}
                  data-team-card
                  className={`bg-black/60 backdrop-blur-sm border ${member.borderColor} ${member.glowColor} shadow-lg hover-elevate active-elevate-2 transition-all duration-300`}
                  data-testid={`card-team-${member.role.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div 
                        className="relative p-1 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, #D4AF37 0%, #F7E27A 50%, #D4AF37 100%)',
                          boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), inset 0 0 10px rgba(247, 226, 122, 0.3)',
                        }}
                      >
                        <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                          <IconComponent className={`w-8 h-8 ${member.color}`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold ${member.color} mb-1`}>
                          {member.role}
                        </h3>
                        <p className="text-sm text-gray-400">{member.name}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Co-Founders Section */}
        <div ref={coFoundersRef} className="mb-16">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teamData.coFounders.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <Card
                  key={index}
                  data-team-card
                  className={`bg-black/60 backdrop-blur-sm border ${member.borderColor} ${member.glowColor} shadow-lg hover-elevate active-elevate-2 transition-all duration-300`}
                  data-testid={`card-team-${member.role.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div 
                        className="relative p-0.5 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, #D4AF37 0%, #F7E27A 50%, #D4AF37 100%)',
                          boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)',
                        }}
                      >
                        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                          <IconComponent className={`w-7 h-7 ${member.color}`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold ${member.color} mb-1`}>
                          {member.role}
                        </h3>
                        <p className="text-sm text-gray-400">{member.name}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Organizational Chart */}
        <div ref={orgChartRef} className="mb-16">
          <Card className="bg-black/40 backdrop-blur-sm border border-gold-500/20 shadow-gold-500/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gold-gradient">
                Organization Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-12">
                {/* Level 1 - CEO */}
                <div className="flex justify-center">
                  <Badge
                    data-chart-node
                    className="px-6 py-3 text-base font-semibold bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 hover:bg-yellow-500/30 no-default-hover-elevate"
                    data-testid="badge-org-ceo"
                  >
                    CEO
                  </Badge>
                </div>

                {/* Connection Lines from CEO */}
                <div className="relative w-full max-w-2xl h-8">
                  <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                    {/* Vertical line down from CEO */}
                    <line
                      data-chart-line
                      x1="50%"
                      y1="0"
                      x2="50%"
                      y2="100%"
                      stroke="rgba(212, 175, 55, 0.3)"
                      strokeWidth="2"
                    />
                    {/* Horizontal line connecting to level 2 */}
                    <line
                      data-chart-line
                      x1="16.66%"
                      y1="100%"
                      x2="83.33%"
                      y2="100%"
                      stroke="rgba(212, 175, 55, 0.3)"
                      strokeWidth="2"
                    />
                    {/* Lines down to each position */}
                    <line
                      data-chart-line
                      x1="16.66%"
                      y1="100%"
                      x2="16.66%"
                      y2="120%"
                      stroke="rgba(212, 175, 55, 0.3)"
                      strokeWidth="2"
                    />
                    <line
                      data-chart-line
                      x1="50%"
                      y1="100%"
                      x2="50%"
                      y2="120%"
                      stroke="rgba(212, 175, 55, 0.3)"
                      strokeWidth="2"
                    />
                    <line
                      data-chart-line
                      x1="83.33%"
                      y1="100%"
                      x2="83.33%"
                      y2="120%"
                      stroke="rgba(212, 175, 55, 0.3)"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Level 2 - CTO, Designers, Head of Marketing */}
                <div className="grid grid-cols-3 gap-8 w-full max-w-3xl">
                  <div className="flex flex-col items-center">
                    <Badge
                      data-chart-node
                      className="px-4 py-2 text-sm font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/30 no-default-hover-elevate mb-8"
                      data-testid="badge-org-cto"
                    >
                      CTO
                    </Badge>
                    {/* Line down from CTO */}
                    <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500/30 to-transparent mb-4" data-chart-line />
                    <Badge
                      data-chart-node
                      className="px-4 py-2 text-sm font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/50 hover:bg-purple-500/30 no-default-hover-elevate"
                      data-testid="badge-org-developers"
                    >
                      Developers
                    </Badge>
                  </div>

                  <div className="flex flex-col items-center">
                    <Badge
                      data-chart-node
                      className="px-4 py-2 text-sm font-semibold bg-pink-500/20 text-pink-400 border border-pink-500/50 hover:bg-pink-500/30 no-default-hover-elevate"
                      data-testid="badge-org-designers"
                    >
                      Designers
                    </Badge>
                  </div>

                  <div className="flex flex-col items-center">
                    <Badge
                      data-chart-node
                      className="px-4 py-2 text-sm font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500/30 no-default-hover-elevate mb-8"
                      data-testid="badge-org-marketing"
                    >
                      Head of Marketing
                    </Badge>
                    {/* Line down and split */}
                    <div className="relative w-32 h-12 mb-4">
                      <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                        <line
                          data-chart-line
                          x1="50%"
                          y1="0"
                          x2="50%"
                          y2="50%"
                          stroke="rgba(212, 175, 55, 0.3)"
                          strokeWidth="2"
                        />
                        <line
                          data-chart-line
                          x1="25%"
                          y1="50%"
                          x2="75%"
                          y2="50%"
                          stroke="rgba(212, 175, 55, 0.3)"
                          strokeWidth="2"
                        />
                        <line
                          data-chart-line
                          x1="25%"
                          y1="50%"
                          x2="25%"
                          y2="100%"
                          stroke="rgba(212, 175, 55, 0.3)"
                          strokeWidth="2"
                        />
                        <line
                          data-chart-line
                          x1="75%"
                          y1="50%"
                          x2="75%"
                          y2="100%"
                          stroke="rgba(212, 175, 55, 0.3)"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div className="flex gap-4">
                      <Badge
                        data-chart-node
                        className="px-3 py-1.5 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-500/30 no-default-hover-elevate"
                        data-testid="badge-org-analysts"
                      >
                        Analysts
                      </Badge>
                      <Badge
                        data-chart-node
                        className="px-3 py-1.5 text-xs font-semibold bg-green-500/20 text-green-300 border border-green-500/50 hover:bg-green-500/30 no-default-hover-elevate"
                        data-testid="badge-org-community"
                      >
                        Community Manager
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Details Grid */}
        <div ref={teamsRef}>
          {/* Development Team */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 text-purple-400" />
              Development Team
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {teamData.developmentTeam.map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <Card
                    key={index}
                    data-team-card
                    className={`bg-black/60 backdrop-blur-sm border ${member.borderColor} ${member.glowColor} shadow-lg hover-elevate active-elevate-2 transition-all duration-300`}
                    data-testid={`card-dev-${index}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div 
                          className="relative p-0.5 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, #D4AF37 0%, #F7E27A 50%, #D4AF37 100%)',
                            boxShadow: '0 0 12px rgba(212, 175, 55, 0.25)',
                          }}
                        >
                          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                            <IconComponent className={`w-6 h-6 ${member.color}`} />
                          </div>
                        </div>
                        <h4 className={`text-sm font-semibold ${member.color}`}>
                          {member.role}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Operations Team */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-emerald-400" />
              Operations Team
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {teamData.operations.map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <Card
                    key={index}
                    data-team-card
                    className={`bg-black/60 backdrop-blur-sm border ${member.borderColor} ${member.glowColor} shadow-lg hover-elevate active-elevate-2 transition-all duration-300`}
                    data-testid={`card-ops-${index}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div 
                          className="relative p-0.5 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, #D4AF37 0%, #F7E27A 50%, #D4AF37 100%)',
                            boxShadow: '0 0 12px rgba(212, 175, 55, 0.25)',
                          }}
                        >
                          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                            <IconComponent className={`w-6 h-6 ${member.color}`} />
                          </div>
                        </div>
                        <h4 className={`text-sm font-semibold ${member.color}`}>
                          {member.role}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Monthly Expenses */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-red-500/10 to-red-600/5 backdrop-blur-sm border border-red-500/30 shadow-red-500/20 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-lg text-gray-300 mb-2" data-testid="text-expenses-label">
                    {teamData.expenses.label}
                  </p>
                  <p className="text-4xl font-bold text-red-400" data-testid="text-expenses-amount">
                    {teamData.expenses.amount}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resource Allocation Summary */}
        <div ref={resourceAllocationRef} className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div 
                className="p-2 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F7E27A 50%, #D4AF37 100%)',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
                }}
              >
                <BarChart3 className="w-8 h-8 text-black" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4" data-testid="text-resource-title">
              Resource Allocation Summary
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Detailed breakdown of team allocation, priorities, and risk management
            </p>
          </div>

          {/* Weekly Resource Allocation Table */}
          <div className="mb-12">
            <Card 
              className="bg-black/40 backdrop-blur-sm border border-gold-500/20 shadow-gold-500/10 shadow-lg overflow-hidden"
              data-resource-card
            >
              <CardHeader 
                className="cursor-pointer hover-elevate"
                onClick={() => toggleSection('allocation')}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gold-gradient flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-amber-400" />
                    Weekly Team Allocation
                  </CardTitle>
                  {expandedSections.allocation ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </CardHeader>
              {expandedSections.allocation && (
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full" data-testid="table-allocation">
                      <thead>
                        <tr className="border-b border-gold-500/20">
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300 bg-black/30">Role</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-gray-300 bg-black/30">Week 1-2</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-gray-300 bg-black/30">Week 3-4</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-gray-300 bg-black/30">Week 5-6</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-gray-300 bg-black/30">Week 7-8</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-gray-300 bg-black/30">Week 9</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resourceAllocationData.weeklyAllocation.map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <tr 
                              key={index} 
                              className="border-b border-gray-800/50 hover:bg-white/5 transition-colors"
                              data-testid={`row-allocation-${index}`}
                            >
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-2">
                                  <IconComponent className={`w-4 h-4 ${item.color}`} />
                                  <span className={`text-sm font-medium ${item.color}`}>{item.role}</span>
                                </div>
                              </td>
                              {item.weeks.map((week, weekIdx) => (
                                <td key={weekIdx} className="px-4 py-3 text-center">
                                  <Badge 
                                    className="bg-gray-800/50 text-gray-300 border-gray-700/50 text-xs no-default-hover-elevate"
                                    data-testid={`badge-week-${index}-${weekIdx}`}
                                  >
                                    {week}
                                  </Badge>
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Priority Matrix */}
          <div className="mb-12">
            <Card 
              className="bg-black/40 backdrop-blur-sm border border-gold-500/20 shadow-gold-500/10 shadow-lg"
              data-resource-card
            >
              <CardHeader 
                className="cursor-pointer hover-elevate"
                onClick={() => toggleSection('priority')}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gold-gradient flex items-center gap-3">
                    <Target className="w-6 h-6 text-amber-400" />
                    Priority Matrix
                  </CardTitle>
                  {expandedSections.priority ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </CardHeader>
              {expandedSections.priority && (
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* MVP Features */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-green-500/20 text-green-400 border border-green-500/50 no-default-hover-elevate">
                          MVP (Must-Have)
                        </Badge>
                        <span className="text-xs text-gray-400">Ready by Day 45</span>
                      </div>
                      {resourceAllocationData.priorityMatrix.mvp.map((item, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20"
                          data-testid={`priority-mvp-${index}`}
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{item.task}</span>
                        </div>
                      ))}
                    </div>

                    {/* Phase 2 Features */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/50 no-default-hover-elevate">
                          Phase 2 (Should-Have)
                        </Badge>
                        <span className="text-xs text-gray-400">Day 29-42</span>
                      </div>
                      {resourceAllocationData.priorityMatrix.phase2.map((item, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20"
                          data-testid={`priority-phase2-${index}`}
                        >
                          <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{item.task}</span>
                        </div>
                      ))}
                    </div>

                    {/* Post-Launch Features */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/50 no-default-hover-elevate">
                          Post-Launch (Nice-to-Have)
                        </Badge>
                        <span className="text-xs text-gray-400">After Day 60</span>
                      </div>
                      {resourceAllocationData.priorityMatrix.postLaunch.map((item, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/5 border border-purple-500/20"
                          data-testid={`priority-postlaunch-${index}`}
                        >
                          <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{item.task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Risk Management */}
          <div className="mb-12">
            <Card 
              className="bg-black/40 backdrop-blur-sm border border-gold-500/20 shadow-gold-500/10 shadow-lg"
              data-resource-card
            >
              <CardHeader 
                className="cursor-pointer hover-elevate"
                onClick={() => toggleSection('risk')}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gold-gradient flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-400" />
                    Risk Management & Mitigation
                  </CardTitle>
                  {expandedSections.risk ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </CardHeader>
              {expandedSections.risk && (
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* High-Risk Items */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-red-400" />
                        High-Risk Items
                      </h4>
                      <div className="space-y-4">
                        {resourceAllocationData.riskManagement.map((item, index) => (
                          <div 
                            key={index}
                            className={`p-4 rounded-lg border ${
                              item.severity === 'high' 
                                ? 'bg-red-500/5 border-red-500/30' 
                                : 'bg-yellow-500/5 border-yellow-500/30'
                            }`}
                            data-testid={`risk-item-${index}`}
                          >
                            <div className="flex items-start gap-3">
                              <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                item.severity === 'high' ? 'text-red-400' : 'text-yellow-400'
                              }`} />
                              <div>
                                <p className="font-medium text-white mb-1">{item.risk}</p>
                                <p className="text-sm text-gray-400">
                                  <span className="text-green-400 font-medium">Mitigation:</span> {item.mitigation}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contingency Plans */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-amber-400" />
                        Contingency Plans
                      </h4>
                      <div className="space-y-4">
                        {resourceAllocationData.contingencyPlans.map((item, index) => (
                          <div 
                            key={index}
                            className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/30"
                            data-testid={`contingency-${index}`}
                          >
                            <p className="font-medium text-amber-400 mb-2">{item.condition}</p>
                            <p className="text-sm text-gray-300">{item.action}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Success Metrics */}
          <div className="mb-12">
            <Card 
              className="bg-black/40 backdrop-blur-sm border border-gold-500/20 shadow-gold-500/10 shadow-lg"
              data-resource-card
            >
              <CardHeader 
                className="cursor-pointer hover-elevate"
                onClick={() => toggleSection('metrics')}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gold-gradient flex items-center gap-3">
                    <Activity className="w-6 h-6 text-amber-400" />
                    Success Metrics (To Track Post-Launch)
                  </CardTitle>
                  {expandedSections.metrics ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </CardHeader>
              {expandedSections.metrics && (
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Technical KPIs */}
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                        <LineChart className="w-5 h-5" />
                        Technical KPIs
                      </h4>
                      <div className="space-y-3">
                        {resourceAllocationData.successMetrics.technical.map((item, index) => (
                          <div 
                            key={index}
                            className="flex items-center justify-between p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/20"
                            data-testid={`metric-tech-${index}`}
                          >
                            <span className="text-sm text-gray-300">{item.metric}</span>
                            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50 no-default-hover-elevate">
                              {item.target}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business KPIs */}
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Business KPIs
                      </h4>
                      <div className="space-y-3">
                        {resourceAllocationData.successMetrics.business.map((item, index) => (
                          <div 
                            key={index}
                            className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20"
                            data-testid={`metric-business-${index}`}
                          >
                            <span className="text-sm text-gray-300">{item.metric}</span>
                            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 no-default-hover-elevate">
                              {item.target}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Next Steps After Day 60 */}
          <div className="mb-12">
            <Card 
              className="bg-black/40 backdrop-blur-sm border border-gold-500/20 shadow-gold-500/10 shadow-lg"
              data-resource-card
            >
              <CardHeader 
                className="cursor-pointer hover-elevate"
                onClick={() => toggleSection('nextSteps')}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gold-gradient flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-amber-400" />
                    Next Steps After Day 60
                  </CardTitle>
                  {expandedSections.nextSteps ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </CardHeader>
              {expandedSections.nextSteps && (
                <CardContent className="p-6">
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500/50 via-gold-500/30 to-transparent" />
                    
                    <div className="space-y-6">
                      {resourceAllocationData.nextSteps.map((item, index) => (
                        <div 
                          key={index}
                          className="relative flex items-start gap-6 pl-2"
                          data-testid={`next-step-${index}`}
                        >
                          {/* Timeline Dot */}
                          <div 
                            className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{
                              background: 'linear-gradient(135deg, #D4AF37 0%, #F7E27A 50%, #D4AF37 100%)',
                              boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
                            }}
                          >
                            <Rocket className="w-4 h-4 text-black" />
                          </div>
                          
                          <div className="flex-1 pb-6">
                            <div className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/20 hover-elevate transition-all duration-300">
                              <Badge className="bg-gold-500/20 text-amber-400 border-gold-500/50 mb-2 no-default-hover-elevate">
                                {item.week}
                              </Badge>
                              <p className="text-gray-300">{item.action}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Document Info */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Document Version</p>
                    <p className="text-sm font-semibold text-gray-300">1.0</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Last Updated</p>
                    <p className="text-sm font-semibold text-gray-300">Day 0 (Pre-Launch)</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Next Review</p>
                    <p className="text-sm font-semibold text-gray-300">Day 45 (MVP Checkpoint)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
