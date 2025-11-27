import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Globe, MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";

function MarbleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            linear-gradient(135deg, transparent 25%, rgba(212, 175, 55, 0.05) 25%, rgba(212, 175, 55, 0.05) 50%, transparent 50%, transparent 75%, rgba(212, 175, 55, 0.05) 75%),
            linear-gradient(-135deg, transparent 25%, rgba(212, 175, 55, 0.03) 25%, rgba(212, 175, 55, 0.03) 50%, transparent 50%, transparent 75%, rgba(212, 175, 55, 0.03) 75%)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
        <defs>
          <pattern id="marble-veins" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path 
              d="M0,100 Q50,80 100,100 T200,100" 
              fill="none" 
              stroke="rgba(212, 175, 55, 0.3)" 
              strokeWidth="0.5"
            />
            <path 
              d="M0,50 Q80,30 150,60 T200,40" 
              fill="none" 
              stroke="rgba(212, 175, 55, 0.2)" 
              strokeWidth="0.3"
            />
            <path 
              d="M0,150 Q60,170 120,140 T200,160" 
              fill="none" 
              stroke="rgba(212, 175, 55, 0.25)" 
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#marble-veins)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black" />
    </div>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      });
      
      const infoCards = infoRef.current?.querySelectorAll('.info-card');
      if (infoCards) {
        gsap.from(infoCards, {
          x: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.4
        });
      }
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={sectionRef} className="relative py-24 min-h-screen overflow-hidden">
      <MarbleBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Ready to join the trading revolution? Contact us today to learn more about investment opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div ref={formRef}>
            <Card className="bg-black/60 backdrop-blur-md border border-gold-500/20 shadow-lg shadow-gold-500/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gold-gradient mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-black/40 border-gold-500/30 focus:border-gold-500/60"
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+62 xxx xxxx xxxx"
                        className="bg-black/40 border-gold-500/30 focus:border-gold-500/60"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-black/40 border-gold-500/30 focus:border-gold-500/60"
                      required
                      data-testid="input-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your interest in TradeX..."
                      className="bg-black/40 border-gold-500/30 focus:border-gold-500/60 min-h-[150px]"
                      required
                      data-testid="input-message"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] text-black font-semibold hover:opacity-90 gold-glow-hover"
                    data-testid="button-submit"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div ref={infoRef} className="space-y-6">
            <Card className="info-card bg-black/60 backdrop-blur-md border border-gold-500/20 hover-elevate active-elevate-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground" data-testid="text-contact-email">founder@tradex.id</p>
                    <p className="text-muted-foreground text-sm">invest@tradex.id</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="info-card bg-black/60 backdrop-blur-md border border-gold-500/20 hover-elevate active-elevate-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground" data-testid="text-contact-phone">+62 812 3456 7890</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="info-card bg-black/60 backdrop-blur-md border border-gold-500/20 hover-elevate active-elevate-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Globe className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Website</h3>
                    <p className="text-muted-foreground" data-testid="text-contact-website">www.tradex.id</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="info-card bg-black/60 backdrop-blur-md border border-gold-500/20 hover-elevate active-elevate-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 09:00 - 18:00 WIB</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="info-card bg-black/60 backdrop-blur-md border border-gold-500/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 border-b border-gold-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-gold-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground text-sm" data-testid="text-contact-location">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[200px] bg-gray-900">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295251988!2d106.68942935814438!3d-6.229386715686971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) sepia(10%) saturate(1000%) hue-rotate(10deg)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TradeX Location Map"
                    data-testid="map-location"
                  />
                  <div className="absolute inset-0 pointer-events-none border border-gold-500/20" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
