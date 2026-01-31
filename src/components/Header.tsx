import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X, FileText, Calculator, PieChart, BarChart3, ClipboardCheck, Palette, Presentation, Building, BookOpen, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Board Resolution",
    href: "/services/board-resolution",
    icon: FileText,
    description: "Bank account opening",
  },
  {
    name: "COGS Calculation",
    href: "/services/cogs-calculation",
    icon: Calculator,
    description: "Cost of goods sold",
  },
  {
    name: "CMA Preparation",
    href: "/services/cma-preparation",
    icon: PieChart,
    description: "Credit monitoring",
  },
  {
    name: "Financial Model",
    href: "/services/financial-model",
    icon: BarChart3,
    description: "Business projections",
  },
  {
    name: "Initial 30 Days Compliance",
    href: "/services/initial-compliance",
    icon: ClipboardCheck,
    description: "Post-incorporation",
  },
  {
    name: "Logo Designing",
    href: "/services/logo-designing",
    icon: Palette,
    description: "Brand identity",
  },
  {
    name: "Pitch Deck",
    href: "/services/pitch-deck",
    icon: Presentation,
    description: "Investor presentation",
  },
  {
    name: "Project Report",
    href: "/services/project-report",
    icon: Building,
    description: "Loan documentation",
  },
  {
    name: "Provisional Balance Sheet",
    href: "/services/provisional-balance-sheet",
    icon: BookOpen,
    description: "Projected financials",
  },
  {
    name: "Share Valuation",
    href: "/services/share-valuation",
    icon: TrendingUp,
    description: "Company valuation",
  },
  {
    name: "Trademark Registration",
    href: "/services/trademark-registration",
    icon: Shield,
    description: "Brand protection",
  },
];

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-grey-divider">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">H</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-primary">
              Hello<span className="text-accent">Tax</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-text-body hover:text-primary transition-colors font-medium">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-lg border border-grey-divider p-4 min-w-[600px]">
                    <div className="grid grid-cols-3 gap-3">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-grey-subtle transition-colors group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                              <Icon className="w-4 h-4 text-teal" />
                            </div>
                            <div>
                              <p className="font-medium text-primary text-sm group-hover:text-teal transition-colors">
                                {service.name}
                              </p>
                              <p className="text-xs text-text-body mt-0.5">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/#why-us" className="text-text-body hover:text-primary transition-colors font-medium">
              Why Us
            </a>
            <a href="/#how-it-works" className="text-text-body hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="/#membership" className="text-text-body hover:text-primary transition-colors font-medium">
              Membership
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>1800-XXX-XXXX</span>
            </Button>
            <Button variant="accent" size="sm" className="hidden sm:flex">
              Get Started
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-grey-divider">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-primary mb-3">Services</p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-grey-subtle transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4 text-teal" />
                        <span className="text-sm text-text-body">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              <div className="flex flex-col gap-2 pt-4 border-t border-grey-divider">
                <a 
                  href="/#why-us" 
                  className="py-2 text-text-body hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Why Us
                </a>
                <a 
                  href="/#how-it-works" 
                  className="py-2 text-text-body hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="/#membership" 
                  className="py-2 text-text-body hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Membership
                </a>
              </div>

              <div className="pt-4 border-t border-grey-divider">
                <Button variant="accent" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
