import { MessageSquare, FileSearch, FileText, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Free Consultation",
    description: "Share your business idea and goals. Our experts will understand your needs and recommend the best structure."
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Structure Selection",
    description: "Based on analysis, we recommend the optimal legal structure considering tax, funding, and compliance factors."
  },
  {
    icon: FileText,
    number: "03",
    title: "Document Collection",
    description: "Simple checklist of documents. We guide you through each requirement with clear instructions."
  },
  {
    icon: Send,
    number: "04",
    title: "Registration & Filing",
    description: "We handle all government filings — name approval, incorporation, PAN, TAN, GST, and more."
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Launch & Support",
    description: "Receive all certificates and begin operations. Ongoing compliance support keeps you worry-free."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-lg text-text-body">
            A simple 5-step process to get your startup legally registered and compliance-ready.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-grey-divider" />
          
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Circle */}
                <div className="w-12 h-12 mx-auto bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm relative z-10 shadow-button">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="mt-8 text-center">
                  <div className="icon-container mx-auto mb-4">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-body">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-grey-divider mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-semibold text-primary mb-1">{step.title}</h3>
                <p className="text-sm text-text-body">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
