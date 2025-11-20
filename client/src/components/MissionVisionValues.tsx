import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb, Users } from "lucide-react";

export default function MissionVisionValues() {
  return (
    <section className="py-24 bg-black pt-[50px] pb-[50px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-card border-gold-20 hover-elevate" data-testid="card-mission">
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

          <Card className="bg-card border-gold-20 hover-elevate" data-testid="card-vision">
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
          <h3 className="text-3xl font-bold text-gold-gradient mb-4" data-testid="text-values-title">Nilai Inti Kami</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Transparansi", desc: "Kinerja terverifikasi blockchain, tanpa janji palsu" },
            { icon: Lightbulb, title: "Inovasi", desc: "Model belajar sambil menghasilkan + integrasi toko unik" },
            { icon: Users, title: "Komunitas", desc: "Ekosistem yang mendukung untuk mengurangi tingkat dropout" },
            { icon: Target, title: "Aksesibilitas", desc: "Hambatan rendah, pembayaran lokal, dukungan Bahasa Indonesia" }
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
