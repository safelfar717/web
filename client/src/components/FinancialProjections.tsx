import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const monthlyData = [
  { month: "Month 1", users: "1,000", paying: "100", revenue: "Rp 101M", expenses: "Rp 180M", net: "-Rp 79M", profit: false },
  { month: "Month 2", users: "2,500", paying: "400", revenue: "Rp 369M", expenses: "Rp 220M", net: "+Rp 149M", profit: true },
  { month: "Month 3", users: "5,000", paying: "1,000", revenue: "Rp 897M", expenses: "Rp 260M", net: "+Rp 637M", profit: true }
];

const yearMetrics = [
  { label: "Total Revenue (90 Days)", value: "Rp 1.368B", highlight: true },
  { label: "Total Expenses (90 Days)", value: "Rp 660M", highlight: false },
  { label: "Net Profit (90 Days)", value: "Rp 708M", highlight: true }
];

const unitEconomics = [
  { label: "Conversion Rate", value: "20%" },
  { label: "ARPU", value: "Rp 456K" },
  { label: "LTV", value: "Rp 2.1M" },
  { label: "CAC", value: "Rp 132K" },
  { label: "LTV:CAC Ratio", value: "15.9:1", highlight: true },
  { label: "Payback Period", value: "~3 months" },
  { label: "Gross Margin", value: "68%" }
];

export default function FinancialProjections() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-financial-title">
            90-Day Revenue Ramp
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-financial-subtitle">
            Break-even in Month 2: Rapid Path to Profitability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {monthlyData.map((data, index) => (
            <Card 
              key={index} 
              className="bg-background border-gold-20 hover-elevate"
              data-testid={`card-month-${index}`}
            >
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground" data-testid={`text-month-label-${index}`}>
                    {data.month}
                  </h3>
                  {data.profit && (
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                      Profitable
                    </Badge>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Users:</span>
                    <span className="text-foreground font-semibold" data-testid={`text-month-users-${index}`}>{data.users}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Paying:</span>
                    <span className="text-foreground font-semibold" data-testid={`text-month-paying-${index}`}>{data.paying}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Revenue:</span>
                    <span className="text-primary font-semibold" data-testid={`text-month-revenue-${index}`}>{data.revenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expenses:</span>
                    <span className="text-foreground font-semibold" data-testid={`text-month-expenses-${index}`}>{data.expenses}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gold-20">
                    <span className="text-muted-foreground">Net:</span>
                    <span className={`font-bold ${data.profit ? 'text-green-500' : 'text-red-500'}`} data-testid={`text-month-net-${index}`}>
                      {data.net}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {yearMetrics.map((metric, index) => (
            <Card 
              key={index} 
              className={`border-gold-20 ${metric.highlight ? 'bg-gradient-to-br from-primary/10 to-transparent' : 'bg-card'}`}
              data-testid={`card-metric-${index}`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2" data-testid={`text-metric-label-${index}`}>
                  {metric.label}
                </div>
                <div className="text-3xl font-bold text-gold-gradient" data-testid={`text-metric-value-${index}`}>
                  {metric.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-background border-gold-20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gold-gradient mb-6 text-center" data-testid="text-unit-economics-title">
              Unit Economics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {unitEconomics.map((item, index) => (
                <div key={index} className="text-center" data-testid={`unit-economics-${index}`}>
                  <div className="text-sm text-muted-foreground mb-1" data-testid={`text-unit-label-${index}`}>
                    {item.label}
                  </div>
                  <div className={`text-xl font-bold ${item.highlight ? 'text-gold-gradient' : 'text-foreground'}`} data-testid={`text-unit-value-${index}`}>
                    {item.value}
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
