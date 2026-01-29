import { Building2, User, Users, Handshake, Briefcase, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const structures = [
  {
    icon: Building2,
    title: "Private Limited Company",
    description: "Best for startups seeking funding. Separate legal entity with limited liability protection.",
    features: ["Limited Liability", "Equity Funding Ready", "Professional Image"],
    popular: true
  },
  {
    icon: User,
    title: "One Person Company (OPC)",
    description: "Single founder? Get corporate benefits without partners. Easy to convert to Pvt Ltd later.",
    features: ["Single Owner", "Limited Liability", "Easy Conversion"],
    popular: false
  },
  {
    icon: Users,
    title: "Limited Liability Partnership",
    description: "Flexibility of partnership with liability protection. Ideal for professional services.",
    features: ["Partner Flexibility", "Tax Benefits", "Lower Compliance"],
    popular: false
  },
  {
    icon: Handshake,
    title: "Partnership Firm",
    description: "Traditional partnership structure. Simple to form, suitable for family businesses.",
    features: ["Simple Setup", "Shared Profits", "Mutual Trust"],
    popular: false
  },
  {
    icon: Briefcase,
    title: "Sole Proprietorship",
    description: "Easiest to start, minimal compliance. Best for freelancers and small traders.",
    features: ["Quick Start", "Full Control", "Minimal Paperwork"],
    popular: false
  },
  {
    icon: Home,
    title: "Hindu Undivided Family",
    description: "Tax-efficient structure for family businesses under Hindu law.",
    features: ["Tax Benefits", "Family Wealth", "Easy Management"],
    popular: false
  }
];

const StructuresSection = () => {
  return (
    <section id="services" className="section-padding bg-grey-subtle">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Startup Structures <span className="text-accent">We Offer</span>
          </h2>
          <p className="text-lg text-text-body">
            Not sure which structure fits your startup? Our experts will analyze your goals and recommend the perfect fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {structures.map((structure, index) => (
            <div 
              key={index} 
              className={`card-elevated relative ${structure.popular ? 'ring-2 ring-accent' : ''}`}
            >
              {structure.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="icon-container mb-5">
                <structure.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-2">{structure.title}</h3>
              <p className="text-text-body text-sm mb-4">{structure.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {structure.features.map((feature, i) => (
                  <span key={i} className="text-xs bg-secondary text-primary px-3 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>

              <Button variant="ghost" size="sm" className="group text-accent p-0 h-auto">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructuresSection;
