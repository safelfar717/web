import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  Globe, 
  Calendar,
  FileText,
  Sparkles,
  ArrowRight,
  User
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import thankYouBg from "@assets/generated_images/thank_you_section_premium_background.png";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = {
  name: "Poernomo Setyadi",
  role: "Founder & CEO",
  email: "founder@tradex.id",
  phone: "+62 822-6888-0707",
  website: "www.tradex.id",
  pitchEmail: "pitch@tradex.id",
  calendly: "calendly.com/tradex-founder"
};

const tagline = "Trade Smarter, Learn Faster, Grow Together";

export default function ThankYouSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const title = titleRef.current;
      const content = contentRef.current;
      const contact = contactRef.current;
      const cta = ctaRef.current;

      if (title) {
        gsap.set(title, { opacity: 0, scale: 0.8, y: -30 });
      }

      if (content) {
        gsap.set(content, { opacity: 0, y: 40 });
      }

      if (contact) {
        const contactCards = contact.querySelectorAll('[data-contact-item]');
        gsap.set(contactCards, { opacity: 0, x: -30 });
      }

      if (cta) {
        const ctaButtons = cta.querySelectorAll('[data-cta-button]');
        gsap.set(ctaButtons, { opacity: 0, scale: 0.9, y: 20 });
      }

      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        onEnter: () => {
          const tl = gsap.timeline();

          if (title) {
            tl.to(title, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1,
              ease: "elastic.out(1, 0.5)"
            });
          }

          if (content) {
            tl.to(content, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out"
            }, "-=0.5");
          }

          if (contact) {
            const contactCards = contact.querySelectorAll('[data-contact-item]');
            tl.to(contactCards, {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out"
            }, "-=0.4");
          }

          if (cta) {
            const ctaButtons = cta.querySelectorAll('[data-cta-button]');
            tl.to(ctaButtons, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "back.out(1.7)"
            }, "-=0.2");
          }
        }
      });

      const sparkles = section.querySelectorAll('[data-sparkle]');
      sparkles.forEach((sparkle, index) => {
        gsap.to(sparkle, {
          scale: 1.2,
          opacity: 0.8,
          duration: 1 + (index * 0.2),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3
        });
      });

      const glowBorder = section.querySelector('[data-glow-border]');
      if (glowBorder) {
        gsap.to(glowBorder, {
          boxShadow: "0 0 60px rgba(212, 175, 55, 0.5), 0 0 100px rgba(212, 175, 55, 0.3)",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-card to-black relative overflow-hidden"
      data-testid="section-thank-you"
    >
      <div className="absolute inset-0">
        <img
          src={thankYouBg}
          alt="Thank you background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-3 h-3 bg-primary/60 rounded-full blur-sm" data-sparkle />
        <div className="absolute top-40 right-[15%] w-2 h-2 bg-primary/50 rounded-full blur-sm" data-sparkle />
        <div className="absolute bottom-40 left-[20%] w-4 h-4 bg-primary/40 rounded-full blur-sm" data-sparkle />
        <div className="absolute bottom-20 right-[25%] w-2 h-2 bg-primary/60 rounded-full blur-sm" data-sparkle />
        <div className="absolute top-1/2 left-[5%] w-3 h-3 bg-emerald-500/40 rounded-full blur-sm" data-sparkle />
        <div className="absolute top-1/3 right-[8%] w-2 h-2 bg-blue-500/40 rounded-full blur-sm" data-sparkle />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card
            data-glow-border="true"
            className="relative overflow-hidden border-primary/50 border-2 bg-black/60 backdrop-blur-md"
            data-testid="card-thank-you"
          >
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Sparkles className="text-primary w-8 h-8" data-sparkle />
                  <h2
                    ref={titleRef}
                    className="text-4xl md:text-6xl font-bold text-gold-gradient"
                    data-testid="text-thank-you-title"
                  >
                    THANK YOU!
                  </h2>
                  <Sparkles className="text-primary w-8 h-8" data-sparkle />
                </div>
                
                <div ref={contentRef} className="space-y-4">
                  <p className="text-2xl md:text-3xl text-foreground font-medium">
                    Let's Build the Future
                  </p>
                  <p className="text-xl md:text-2xl text-gold-gradient font-semibold">
                    And Grow Together
                  </p>
                </div>
              </div>

              <div ref={contactRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div
                  data-contact-item="true"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-md border border-white/10 hover:bg-white/10 transition-colors"
                  data-testid="contact-name"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Founder</p>
                    <p className="text-lg font-semibold text-gold-gradient">{contactInfo.name}</p>
                  </div>
                </div>

                <div
                  data-contact-item="true"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-md border border-white/10 hover:bg-white/10 transition-colors"
                  data-testid="contact-email"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div
                  data-contact-item="true"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-md border border-white/10 hover:bg-white/10 transition-colors"
                  data-testid="contact-phone"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/30 to-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div
                  data-contact-item="true"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-md border border-white/10 hover:bg-white/10 transition-colors"
                  data-testid="contact-website"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">Website</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-medium text-foreground">{contactInfo.website}</span>
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                        coming soon
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                  href={`mailto:${contactInfo.pitchEmail}`}
                  data-cta-button="true"
                  data-testid="button-request-pitch"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] text-black font-semibold text-lg px-8 gap-2 gold-glow-hover"
                  >
                    <FileText className="w-5 h-5" />
                    Request Pitch Deck
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>

                <a
                  href={`https://${contactInfo.calendly}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta-button="true"
                  data-testid="button-schedule-meeting"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-foreground hover:bg-primary/10 text-lg px-8 gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Meeting
                  </Button>
                </a>
              </div>

              <div className="text-center">
                <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-md border border-primary/20">
                  <p className="text-xl md:text-2xl font-bold text-gold-gradient italic" data-testid="text-tagline">
                    "{tagline}"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
