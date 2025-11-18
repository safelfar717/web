import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Code, TrendingUp } from "lucide-react";

const teamStats = [
  {
    icon: Users,
    number: "11",
    label: "Core Team Members",
    description: "Experienced professionals from fintech and tech industries"
  },
  {
    icon: Code,
    number: "5",
    label: "Trading Analysts",
    description: "Experts providing signals with 65%+ win rate"
  },
  {
    icon: TrendingUp,
    number: "3",
    label: "Writing Advisors",
    description: "Dedicated to creating high-quality content"
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-team-title">
            Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto" data-testid="text-team-subtitle">
            A lean, talented team committed to revolutionizing trading education in Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamStats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-card border-gold-20 hover-elevate text-center"
              data-testid={`card-team-stat-${index}`}
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E27A] flex items-center justify-center gold-glow">
                  <stat.icon className="text-black" size={32} />
                </div>
                <div className="text-4xl font-bold text-gold-gradient" data-testid={`text-team-stat-number-${index}`}>
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground" data-testid={`text-team-stat-label-${index}`}>
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-team-stat-desc-${index}`}>
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { role: "CEO/Founder", name: "Leadership", initials: "TL" },
            { role: "CTO/Technical Lead", name: "Technology", initials: "TT" },
            { role: "Head of Marketing", name: "Growth", initials: "MG" }
          ].map((member, index) => (
            <Card key={index} className="bg-card border-gold-20 hover-elevate" data-testid={`card-team-member-${index}`}>
              <CardContent className="p-6 text-center space-y-4">
                <Avatar className="w-24 h-24 mx-auto border-4 border-primary gold-glow">
                  <AvatarFallback className="bg-gradient-to-br from-[#D4AF37] to-[#F7E27A] text-black text-2xl font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold text-foreground" data-testid={`text-member-role-${index}`}>
                    {member.role}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`text-member-name-${index}`}>
                    {member.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
