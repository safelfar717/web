import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "PitchDeck" },
    { path: "/business-model", label: "Business Model" },
    { path: "/financials", label: "Financials" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "py-3 bg-black/90 backdrop-blur-md border-b border-gold-20" : "py-5 bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home">
              <div className="text-2xl font-bold text-gold-gradient">TradeX</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === link.path ? "text-primary" : "text-foreground"
                  }`}
                  data-testid={`link-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] text-black font-semibold hover:opacity-90" data-testid="button-get-started">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gold-20 pt-4 bg-black/95">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`block text-sm font-medium transition-colors hover:text-primary ${
                    location === link.path ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-link-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F7E27A] text-black font-semibold" data-testid="button-mobile-get-started">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
