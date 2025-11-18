import { Card, CardContent } from "@/components/ui/card";
import { Shield, GraduationCap, Users, TrendingUp, ShoppingCart, DollarSign } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "All-in-One Platform",
    description: "Education, signals, copy trading, and marketplace — everything you need in one place with real-time sync"
  },
  {
    icon: GraduationCap,
    title: "Expert Advisors",
    description: "5 automated trading bots with proven strategies. Backtested performance you can trust"
  },
  {
    icon: Users,
    title: "Copy Trading",
    description: "Follow and automatically copy top-performing traders. Learn from the best while you earn"
  },
  {
    icon: TrendingUp,
    title: "Vibrant Community",
    description: "Join 50K+ traders. Share tips, learn together, and never trade alone again"
  },
  {
    icon: ShoppingCart,
    title: "Shop & Invest",
    description: "Buy products you love and automatically invest cashback into your trading portfolio"
  },
  {
    icon: DollarSign,
    title: "Local Payment Integration",
    description: "Full support for IDR, QRIS, OVO, GoPay — payment methods you already use daily"
  }
];

export default function WhyChooseTradeX() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-why-title">
            Why Choose TradeX?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto" data-testid="text-why-subtitle">
            The only platform built specifically for Indonesian traders with everything you need to succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-background border-gold-20 hover-elevate transition-all duration-300"
              data-testid={`card-why-${index}`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground" data-testid={`text-why-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-why-desc-${index}`}>
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
