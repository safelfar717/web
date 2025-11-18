import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, TrendingUp, Bot, Users, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Education Hub",
    description: "Learn-to-Earn Gamification — Complete courses and get Rp 500K credit"
  },
  {
    icon: TrendingUp,
    title: "Trading Signals",
    description: "Blockchain-Verified Performance — 65%+ win rate (cannot be manipulated)"
  },
  {
    icon: Bot,
    title: "Expert Advisors",
    description: "5 Automated Trading Bots — Backtested strategies with proven results"
  },
  {
    icon: Users,
    title: "Social Trading",
    description: "Copy Top Traders Automatically — Community-driven learning ecosystem"
  },
  {
    icon: ShoppingBag,
    title: "Store Integration",
    description: "Shop & Auto-Invest — Cashback from purchases goes directly into portfolio"
  }
];

export default function EcosystemSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-ecosystem-title">
            The 9-in-1 Integrated Ecosystem
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto" data-testid="text-ecosystem-subtitle">
            Everything you need to succeed in trading, all in one seamless platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-background border-gold-20 gold-glow-hover transition-all duration-300"
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E27A] flex items-center justify-center gold-glow">
                  <feature.icon className="text-black" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-foreground" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-feature-desc-${index}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
