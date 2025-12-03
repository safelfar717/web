import { Link } from "wouter";
import { Mail, Globe, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold-20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gold-gradient mb-4">TradeX</h3>
            <p className="text-muted-foreground text-sm">
              Platform Trading & Edukasi All-in-One
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground text-sm hover:text-primary transition-colors" data-testid="footer-link-home">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors" data-testid="footer-link-about">About</Link></li>
              <li><Link href="/business-model" className="text-muted-foreground text-sm hover:text-primary transition-colors" data-testid="footer-link-business">Business Model</Link></li>
              <li><Link href="/financials" className="text-muted-foreground text-sm hover:text-primary transition-colors" data-testid="footer-link-financials">Financials</Link></li>
              <li><Link href="/timeline" className="text-muted-foreground text-sm hover:text-primary transition-colors" data-testid="footer-link-timeline">Timeline</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors" data-testid="footer-link-docs">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors" data-testid="footer-link-blog">Blog</a></li>
              <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors" data-testid="footer-link-support">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                <span data-testid="text-email">founder@tradex.id</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Globe size={16} className="text-primary" />
                <span data-testid="text-website">www.tradex.id</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary" />
                <span data-testid="text-location">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-20 pt-8">
          <p className="text-center text-muted-foreground text-sm" data-testid="text-copyright">
            © 2025 TradeX Business Model Canvas Analysis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
