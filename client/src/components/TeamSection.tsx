import { useEffect, useRef } from "react";
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
  Crown
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

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const coFoundersRef = useRef<HTMLDivElement>(null);
  const orgChartRef = useRef<HTMLDivElement>(null);
  const teamsRef = useRef<HTMLDivElement>(null);

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
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-team-title">
            Lean 11-Person Team
          </h2>
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
                      <div className={`p-4 rounded-lg bg-black/80 border ${member.borderColor}`}>
                        <IconComponent className={`w-8 h-8 ${member.color}`} />
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
                      <div className={`p-4 rounded-lg bg-black/80 border ${member.borderColor}`}>
                        <IconComponent className={`w-8 h-8 ${member.color}`} />
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
                        <div className={`p-3 rounded-lg bg-black/80 border ${member.borderColor}`}>
                          <IconComponent className={`w-6 h-6 ${member.color}`} />
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
                        <div className={`p-3 rounded-lg bg-black/80 border ${member.borderColor}`}>
                          <IconComponent className={`w-6 h-6 ${member.color}`} />
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
      </div>
    </section>
  );
}
