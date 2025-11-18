import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Rocket } from "lucide-react";

const scenarios = [
  {
    type: "Conservative Case",
    revenue: "Rp 50M/month",
    annual: "Rp 600M",
    multiple: "4× Revenue",
    valuation: "Rp 2.4T",
    stake: "Rp 240B",
    returns: "96×",
    badge: "Safe"
  },
  {
    type: "Base Case (Likely)",
    revenue: "Rp 100M/month",
    annual: "Rp 1.2B",
    multiple: "5× Revenue",
    valuation: "Rp 6T",
    stake: "Rp 600B",
    returns: "240×",
    badge: "Target"
  }
];

const useOfFunds = [
  { category: "Marketing & Acquisition", percentage: "38%", amount: "Rp 950M" },
  { category: "Technology & Development", percentage: "35%", amount: "Rp 875M" },
  { category: "Operations & Legal", percentage: "15%", amount: "Rp 375M" },
  { category: "Product & Content", percentage: "12%", amount: "Rp 300M" }
];

export default function InvestmentOpportunity() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-investment-title">
            Investment Opportunity
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-investment-subtitle">
            96-240× Return Potential in 3 Years
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border-gold-20 text-center hover-elevate" data-testid="card-funding">
            <CardContent className="p-8 space-y-3">
              <DollarSign className="w-12 h-12 mx-auto text-primary" />
              <div className="text-sm text-muted-foreground">Funding Ask</div>
              <div className="text-4xl font-bold text-gold-gradient" data-testid="text-funding-amount">Rp 2.5B</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold-20 text-center hover-elevate" data-testid="card-equity">
            <CardContent className="p-8 space-y-3">
              <TrendingUp className="w-12 h-12 mx-auto text-primary" />
              <div className="text-sm text-muted-foreground">Equity Offered</div>
              <div className="text-4xl font-bold text-gold-gradient" data-testid="text-equity">10%</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold-20 text-center hover-elevate" data-testid="card-returns">
            <CardContent className="p-8 space-y-3">
              <Rocket className="w-12 h-12 mx-auto text-primary" />
              <div className="text-sm text-muted-foreground">Expected Return</div>
              <div className="text-4xl font-bold text-gold-gradient" data-testid="text-returns">96-240×</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {scenarios.map((scenario, index) => (
            <Card 
              key={index} 
              className={`border-gold-20 ${index === 1 ? 'bg-gradient-to-br from-primary/10 to-transparent gold-glow' : 'bg-card'}`}
              data-testid={`card-scenario-${index}`}
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground" data-testid={`text-scenario-type-${index}`}>
                    {scenario.type}
                  </h3>
                  <Badge className={index === 1 ? "bg-primary text-black" : "bg-secondary"}>
                    {scenario.badge}
                  </Badge>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year 3 Revenue:</span>
                    <span className="text-foreground font-semibold" data-testid={`text-scenario-revenue-${index}`}>{scenario.revenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Revenue:</span>
                    <span className="text-foreground font-semibold" data-testid={`text-scenario-annual-${index}`}>{scenario.annual}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valuation Multiple:</span>
                    <span className="text-foreground font-semibold" data-testid={`text-scenario-multiple-${index}`}>{scenario.multiple}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Company Valuation:</span>
                    <span className="text-primary font-semibold" data-testid={`text-scenario-valuation-${index}`}>{scenario.valuation}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gold-20">
                    <span className="text-muted-foreground">Your 10% Stake:</span>
                    <span className="text-foreground font-bold" data-testid={`text-scenario-stake-${index}`}>{scenario.stake}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gold-20">
                    <span className="text-muted-foreground font-semibold">Return Multiple:</span>
                    <span className="text-3xl font-bold text-gold-gradient" data-testid={`text-scenario-returns-${index}`}>{scenario.returns}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-gold-20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gold-gradient mb-6 text-center" data-testid="text-use-of-funds-title">
              Use of Funds
            </h3>
            <div className="space-y-4">
              {useOfFunds.map((fund, index) => (
                <div key={index} className="space-y-2" data-testid={`use-of-funds-${index}`}>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium" data-testid={`text-fund-category-${index}`}>{fund.category}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-semibold" data-testid={`text-fund-percentage-${index}`}>{fund.percentage}</span>
                      <span className="text-muted-foreground" data-testid={`text-fund-amount-${index}`}>{fund.amount}</span>
                    </div>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F7E27A]"
                      style={{ width: fund.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
