import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, DollarSign, TrendingUp, Target, Handshake, Zap, Package, Coins, Building } from "lucide-react";

const canvasData = [
  {
    icon: Target,
    title: "Key Partnerships",
    items: [
      "Strategic Brokers (Rp 500K/user partnership)",
      "Payment Gateways",
      "Fintech Partners",
      "Influencers"
    ]
  },
  {
    icon: Zap,
    title: "Key Activities",
    items: [
      "Platform Development",
      "Signal Generation",
      "Content Creation",
      "Community Management"
    ]
  },
  {
    icon: Package,
    title: "Key Resources",
    items: [
      "Trading Algorithms",
      "Tech Platform",
      "Content Library",
      "User Data"
    ]
  },
  {
    icon: TrendingUp,
    title: "Value Propositions",
    items: [
      "9-in-1 Platform",
      "Blockchain Verification",
      "Learn-to-Earn Model",
      "Store Integration"
    ]
  },
  {
    icon: Handshake,
    title: "Customer Relationships",
    items: [
      "Gamification (Streaks, Points)",
      "Automated Copy Trading",
      "24/7 Support",
      "1-on-1 Mentorship (Premium)"
    ]
  },
  {
    icon: Building,
    title: "Channels",
    items: [
      "Web Platform",
      "Mobile App",
      "Social Media",
      "Campus Ambassadors"
    ]
  },
  {
    icon: Users,
    title: "Customer Segments",
    items: [
      "Millennials & Gen Z (ages 20-40)",
      "11.5M Retail Investors",
      "Avg Capital: Rp 5-10M"
    ]
  },
  {
    icon: Coins,
    title: "Cost Structure",
    items: [
      "Course Development: 25%",
      "Server & Tech: 20%",
      "Marketing: 30%",
      "Staff & Affiliates: 25%"
    ]
  },
  {
    icon: DollarSign,
    title: "Revenue Streams",
    items: [
      "Subscriptions (60%): Rp 490K-1.49M/mo",
      "Education (15%): Courses & Certifications",
      "Copy Trading (10%): 5% of profits",
      "Store (10%): 15-30% margins",
      "Affiliates (5%): Rp 500K/user"
    ]
  }
];

export default function BusinessModelCanvas() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-bmc-title">
            Business Model Canvas
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-bmc-subtitle">
            The Nine Components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {canvasData.map((component, index) => (
            <Card 
              key={index} 
              className="bg-card border-gold-20 hover-elevate"
              data-testid={`card-bmc-${index}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <component.icon className="text-primary" size={20} />
                  </div>
                  <CardTitle className="text-foreground" data-testid={`text-bmc-title-${index}`}>
                    {component.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {component.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="text-sm text-muted-foreground flex items-start gap-2"
                      data-testid={`text-bmc-item-${index}-${itemIndex}`}
                    >
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gold-gradient mb-8 text-center" data-testid="text-differentiators-title">
            Unique Differentiators
          </h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="blockchain" className="border border-gold-20 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-foreground hover:text-primary" data-testid="accordion-blockchain">
                Blockchain Verification
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Provides the highest level of transparency for trading signals. Performance records cannot be falsified or manipulated, giving users complete confidence in signal accuracy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="store" className="border border-gold-20 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-foreground hover:text-primary" data-testid="accordion-store">
                Store Integration
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Unique 9-in-1 form-factor where users can shop products they need and automatically invest cashback into their trading portfolio. A first-of-its-kind integration in Indonesia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="local" className="border border-gold-20 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-foreground hover:text-primary" data-testid="accordion-local">
                Local Payment Integration
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Full support for IDR, QRIS, OVO, GoPay. Makes the platform accessible to all Indonesians with payment methods they already use daily, eliminating barriers to entry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="learn" className="border border-gold-20 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-foreground hover:text-primary" data-testid="accordion-learn">
                9-in-1 Platform
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                One unified platform with copy trading, signals, education, Expert Advisors, community, and store. Competitors are fragmented — TradeX offers everything traders need in a single ecosystem.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
