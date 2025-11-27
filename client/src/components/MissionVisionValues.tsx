import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MissionVisionValues() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const missionCardRef = useRef<HTMLDivElement>(null);
  const visionCardRef = useRef<HTMLDivElement>(null);
  const valuesTitleRef = useRef<HTMLHeadingElement>(null);
  const valuesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const missionCard = missionCardRef.current;
    const visionCard = visionCardRef.current;
    const valuesTitle = valuesTitleRef.current;
    const valuesContainer = valuesContainerRef.current;

    if (!section || !missionCard || !visionCard || !valuesTitle || !valuesContainer) return;

    const ctx = gsap.context(() => {
      gsap.set(missionCard, { opacity: 0, x: -50 });
      gsap.set(visionCard, { opacity: 0, x: 50 });
      gsap.set(valuesTitle, { opacity: 0, y: 30 });

      const valueCards = valuesContainer.querySelectorAll("[data-value-card]");
      gsap.set(valueCards, { opacity: 0, y: 40, scale: 0.9 });

      ScrollTrigger.create({
        trigger: missionCard,
        start: "top 80%",
        onEnter: () => {
          gsap.to(missionCard, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      });

      ScrollTrigger.create({
        trigger: visionCard,
        start: "top 80%",
        onEnter: () => {
          gsap.to(visionCard, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      });

      ScrollTrigger.create({
        trigger: valuesTitle,
        start: "top 85%",
        onEnter: () => {
          gsap.to(valuesTitle, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        },
      });

      ScrollTrigger.create({
        trigger: valuesContainer,
        start: "top 80%",
        onEnter: () => {
          gsap.to(valueCards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)",
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black pt-[50px] pb-[50px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card ref={missionCardRef} className="bg-card border-gold-20 hover-elevate" data-testid="card-mission">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gold-gradient">Misi Kami</h3>
              <p className="text-muted-foreground">
                Mendemokratisasi pendidikan trading dan komunitas untuk generasi investor Indonesia berikutnya. Kami percaya bahwa setiap orang berhak mendapatkan akses ke pendidikan finansial kelas dunia tanpa hambatan tradisional seperti biaya tinggi, kurangnya dukungan komunitas, dan bimbingan yang tidak dapat diandalkan.
              </p>
            </CardContent>
          </Card>

          <Card ref={visionCardRef} className="bg-card border-gold-20 hover-elevate" data-testid="card-vision">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gold-gradient">Visi Kami</h3>
              <p className="text-muted-foreground">
                Menjadi platform trading dan investasi paling terpercaya dan komprehensif di Indonesia, memberdayakan jutaan orang Indonesia untuk membangun kekayaan dan mencapai kebebasan finansial melalui pendidikan, komunitas, dan strategi yang terbukti.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h3 ref={valuesTitleRef} className="text-3xl font-bold text-gold-gradient mb-4" data-testid="text-values-title">Nilai Inti Kami</h3>
        </div>

        <div ref={valuesContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Transparansi", desc: "Kinerja terverifikasi blockchain, tanpa janji palsu" },
            { icon: Lightbulb, title: "Inovasi", desc: "Model belajar sambil menghasilkan + integrasi toko unik" },
            { icon: Users, title: "Komunitas", desc: "Ekosistem yang mendukung untuk mengurangi tingkat dropout" },
            { icon: Target, title: "Aksesibilitas", desc: "Hambatan rendah, pembayaran lokal, dukungan Bahasa Indonesia" }
          ].map((value, index) => (
            <Card key={index} className="bg-background border-gold-20 hover-elevate" data-testid={`card-value-${index}`} data-value-card>
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
