import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="relative border-t border-border/30 bg-jet-light">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Black Berets Logo" className="w-10 h-10" />
            <div className="leading-none">
              <div className="font-heading text-lg font-bold tracking-wider">BLACK BERETS</div>
              <div className="font-sub text-[10px] tracking-[0.3em] text-primary">COMBAT SERVICES</div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Elite combat security solutions for high-risk environments worldwide. Trusted by governments and corporations.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-widest text-primary mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Training", "Careers", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-widest text-primary mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>Combat Guards</span>
            <span>VIP Protection</span>
            <span>Corporate Security</span>
            <span>Aviation Security</span>
            <span>Emergency Response</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-widest text-primary mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@blackberets.com</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +91 (0) 1234 567 890</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> 285, SUCHETA NIWAS, MUGAL BUILDING, SHAHID BHAGAT SINGH ROAD, FORT, MUMBAI 400001.</div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Black Berets Combat Services Pvt. Ltd. All rights reserved.</span>
        <span className="font-sub tracking-wider uppercase text-primary/60">Protecting What Matters</span>
      </div>
    </div>
  </footer>
);

export default Footer;
