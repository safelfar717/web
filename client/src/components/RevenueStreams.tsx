import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, GraduationCap, Copy, ShoppingBag, Users } from "lucide-react";

const streams = [
  {
    icon: CreditCard,
    title: "Subscriptions",
    percentage: "60%",
    description: "Pro: Rp 490K/mo | Elite: Rp 1.49M/mo",
    details: "5,000 paying users Year 1 | ARPU: Rp 640K/month"
  },
  {
    icon: GraduationCap,
    title: "Education",
    percentage: "15%",
    description: "Courses & Certifications",
    details: "Avg course: Rp 500K | Certification: Rp 2-5M | 500 sales/month"
  },
  {
    icon: Copy,
    title: "Copy Trading",
    percentage: "10%",
    description: "Performance Fees",
    details: "5% platform share of 20% profits | AUM: Rp 50M+ (M6)"
  },
  {
    icon: ShoppingBag,
    title: "Store",
    percentage: "10%",
    description: "Marketplace Integration",
    details: "Product margins 15-30% | Platform fees 5% | GMV: Rp 500M/mo (M6)"
  },
  {
    icon: Users,
    title: "Affiliates",
    percentage: "5%",
    description: "Partner Commissions",
    details: "Broker partnerships: Rp 500K/user | 300 signups/month"
  }
];

export default function RevenueStreams() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-revenue-title">
            Multi-Revenue Streams
          </h2>
          <div className="text-3xl font-bold text-gold-gradient mb-2" data-testid="text-revenue-total">
            Rp 38.4B
          </div>
          <p className="text-muted-foreground text-lg" data-testid="text-revenue-subtitle">
            Year 1 Total Revenue Projection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((stream, index) => (
            <Card 
              key={index} 
              className="bg-card border-gold-20 hover-elevate transition-all duration-300"
              data-testid={`card-revenue-${index}`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stream.icon className="text-primary" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gold-gradient" data-testid={`text-revenue-percentage-${index}`}>
                    {stream.percentage}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1" data-testid={`text-revenue-stream-title-${index}`}>
                    {stream.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2" data-testid={`text-revenue-desc-${index}`}>
                    {stream.description}
                  </p>
                  <p className="text-xs text-muted-foreground/80" data-testid={`text-revenue-details-${index}`}>
                    {stream.details}
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
