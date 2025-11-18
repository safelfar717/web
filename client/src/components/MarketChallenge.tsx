import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, AlertTriangle, Globe, Users } from "lucide-react";

const challenges = [
  {
    icon: DollarSign,
    title: "Expensive Education",
    description: "Offline courses Rp 5-15M, online Rp 500K+, without 'learn-to-earn'"
  },
  {
    icon: AlertTriangle,
    title: "Unreliable Signals",
    description: "Telegram groups full of scams, fake track records, zero accountability"
  },
  {
    icon: Globe,
    title: "Global Platforms",
    description: "No IDR/QRIS/OVO integration, English-only interfaces, high minimums (Rp 1M+)"
  },
  {
    icon: Users,
    title: "Isolated Learning",
    description: "No community support, leads to 42% dropout, traders feel alone"
  }
];

export default function MarketChallenge() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-section-title">
            The Market Challenge
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto" data-testid="text-section-subtitle">
            78% of beginner traders fail within 6 months due to lack of education, guidance, and community support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <Card 
              key={index} 
              className="bg-card border-gold-20 hover-elevate transition-all duration-300"
              data-testid={`card-challenge-${index}`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <challenge.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground" data-testid={`text-challenge-title-${index}`}>
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-challenge-desc-${index}`}>
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
