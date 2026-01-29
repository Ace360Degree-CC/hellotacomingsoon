import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-grey-divider">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">H</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-primary">
              Hello<span className="text-accent">Tax</span>
            </span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-text-body hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#why-us" className="text-text-body hover:text-primary transition-colors font-medium">
              Why Us
            </a>
            <a href="#how-it-works" className="text-text-body hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#membership" className="text-text-body hover:text-primary transition-colors font-medium">
              Membership
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>1800-XXX-XXXX</span>
            </Button>
            <Button variant="accent" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
