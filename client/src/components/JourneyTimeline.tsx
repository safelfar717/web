import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  { phase: "Phase 1", title: "Campus Domination", timeline: "Month 1-3", users: "3,000" },
  { phase: "Phase 2", title: "Digital Expansion", timeline: "Month 4-6", users: "10,000" },
  { phase: "Phase 3", title: "Market Leadership", timeline: "Month 7-12", users: "50,000+" }
];

export default function JourneyTimeline() {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-journey-title">
            Our Journey
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-journey-subtitle">
            From campus to market dominance in 12 months
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative" data-testid={`milestone-${index}`}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E27A] gold-glow hidden lg:block" />
                
                <Card className="bg-card border-gold-20 hover-elevate mt-8 lg:mt-12">
                  <CardContent className="p-6 space-y-3 text-center">
                    <div className="text-primary font-semibold text-sm" data-testid={`milestone-phase-${index}`}>
                      {milestone.phase}
                    </div>
                    <h3 className="text-xl font-bold text-foreground" data-testid={`milestone-title-${index}`}>
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm" data-testid={`milestone-timeline-${index}`}>
                      {milestone.timeline}
                    </p>
                    <div className="pt-3 border-t border-gold-20">
                      <div className="text-2xl font-bold text-gold-gradient" data-testid={`milestone-users-${index}`}>
                        {milestone.users}
                      </div>
                      <div className="text-xs text-muted-foreground">Target Users</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
