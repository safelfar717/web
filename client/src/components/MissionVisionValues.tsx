import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb, Users } from "lucide-react";

export default function MissionVisionValues() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-card border-gold-20 hover-elevate" data-testid="card-mission">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gold-gradient">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize trading education and community for the next generation of Indonesian investors. We believe that everyone deserves access to world-class financial education without the traditional barriers of high costs, lack of community support, and unreliable guidance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold-20 hover-elevate" data-testid="card-vision">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gold-gradient">Our Vision</h3>
              <p className="text-muted-foreground">
                To become Indonesia's most trusted and comprehensive trading and investment platform, empowering millions of Indonesians to build wealth and achieve financial freedom through education, community, and proven strategies.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gold-gradient mb-4" data-testid="text-values-title">Our Core Values</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Transparency", desc: "Blockchain-verified performance, no fake promises" },
            { icon: Lightbulb, title: "Innovation", desc: "Learn-to-earn model + unique store integration" },
            { icon: Users, title: "Community", desc: "Supportive ecosystem to reduce dropout rates" },
            { icon: Target, title: "Accessibility", desc: "Low barriers, local payments, Bahasa support" }
          ].map((value, index) => (
            <Card key={index} className="bg-background border-gold-20 hover-elevate" data-testid={`card-value-${index}`}>
              <CardContent className="p-6 space-y-3 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E27A] flex items-center justify-center">
                  <value.icon className="text-black" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-foreground" data-testid={`text-value-title-${index}`}>{value.title}</h4>
                <p className="text-sm text-muted-foreground" data-testid={`text-value-desc-${index}`}>{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
