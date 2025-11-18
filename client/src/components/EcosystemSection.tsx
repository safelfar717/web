import { Card, CardContent } from "@/components/ui/card";
import { Check, X, AlertCircle } from "lucide-react";

export default function EcosystemSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-competitive-title">
            COMPETITIVE LANDSCAPE
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto" data-testid="text-competitive-subtitle">
            TradeX stands alone as the only all-in-one trading ecosystem in Indonesia
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-gold-gradient mb-6 text-center" data-testid="text-positioning-title">
              Positioning Map
            </h3>
            <Card className="bg-background border-gold-20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <pre className="text-primary font-mono text-sm md:text-base overflow-x-auto whitespace-pre" data-testid="text-positioning-map">
{`                    HIGH EDUCATION
                          ↑
                          |
                          |  
                 ┌─────────────────┐
                 │   ★ TRADEX      │ ← You Are Here!
                 │  (All-in-One)   │
                 └─────────────────┘
                          |
         Stockbit         |        XM Trading
         (Social)         |        (Education)
                          |
    ────────────────────────────────────────→
    LOW FEATURES                    HIGH FEATURES
                          |
         Binomo           |        Binance
         (Gamified)       |        (Crypto)
                          |
                 Ajaib/Bibit
                 (Robo-Advisor)
                          |
                          ↓
                    LOW EDUCATION`}
                </pre>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gold-gradient mb-6 text-center" data-testid="text-advantages-title">
              Competitive Advantages
            </h3>
            <Card className="bg-background border-gold-20 overflow-x-auto">
              <CardContent className="p-6 md:p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]" data-testid="table-competitive">
                    <thead>
                      <tr className="border-b border-gold-20">
                        <th className="py-4 px-4 text-foreground font-bold">Feature</th>
                        <th className="py-4 px-4 text-foreground font-bold text-center">Stockbit</th>
                        <th className="py-4 px-4 text-foreground font-bold text-center">Binance</th>
                        <th className="py-4 px-4 text-foreground font-bold text-center">Ajaib</th>
                        <th className="py-4 px-4 text-foreground font-bold text-center">eToro</th>
                        <th className="py-4 px-4 text-primary font-bold text-center bg-primary/5">TradeX</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gold-20/50 hover-elevate">
                        <td className="py-3 px-4 text-foreground font-semibold">Education</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <AlertCircle className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center bg-primary/5">
                          <div className="flex items-center justify-center gap-2">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-primary font-semibold">Comprehensive</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gold-20/50 hover-elevate">
                        <td className="py-3 px-4 text-foreground font-semibold">Signals</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center bg-primary/5">
                          <div className="flex items-center justify-center gap-2">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-primary font-semibold">Verified</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gold-20/50 hover-elevate">
                        <td className="py-3 px-4 text-foreground font-semibold">Copy Trading</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <Check className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center bg-primary/5">
                          <div className="flex items-center justify-center gap-2">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-primary font-semibold">Enhanced</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gold-20/50 hover-elevate">
                        <td className="py-3 px-4 text-foreground font-semibold">Social Feed</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <Check className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <AlertCircle className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <AlertCircle className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center bg-primary/5">
                          <div className="flex items-center justify-center gap-2">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-primary font-semibold">Instagram-like</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gold-20/50 hover-elevate">
                        <td className="py-3 px-4 text-foreground font-semibold">Local Payment</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <Check className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <AlertCircle className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <Check className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center bg-primary/5">
                          <div className="flex items-center justify-center gap-2">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-primary font-semibold">All e-wallets</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gold-20/50 hover-elevate">
                        <td className="py-3 px-4 text-foreground font-semibold">Store</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center bg-primary/10">
                          <div className="flex items-center justify-center gap-2">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-primary font-bold">UNIQUE!</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-elevate">
                        <td className="py-3 px-4 text-foreground font-semibold">Blockchain</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <AlertCircle className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">
                          <X className="inline-block w-5 h-5" />
                        </td>
                        <td className="py-3 px-4 text-center bg-primary/5">
                          <div className="flex items-center justify-center gap-2">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-primary font-semibold">Verified</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <p className="text-xl md:text-2xl font-bold text-primary mb-2" data-testid="text-bottom-line">
                Bottom Line:
              </p>
              <p className="text-lg text-foreground" data-testid="text-bottom-line-desc">
                TradeX adalah <span className="text-primary font-bold">satu-satunya platform</span> yang combine SEMUA fitur essential dalam satu ecosystem.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
