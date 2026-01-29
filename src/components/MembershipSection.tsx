import { Crown, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Dedicated Chartered Accountant",
  "Priority response within 4 hours",
  "Unlimited compliance consultations",
  "Annual tax planning session",
  "GST filing included (up to 12/year)",
  "TDS & advance tax management",
  "Board meeting & AGM support",
  "Investor documentation assistance"
];

const MembershipSection = () => {
  return (
    <section id="membership" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary via-navy to-primary rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent rounded-full blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Crown className="w-4 h-4" />
                  Premium Offering
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Client Pool Membership
                </h2>
                
                <p className="text-lg text-primary-foreground/80 mb-6">
                  Join our exclusive membership program and get year-round compliance support, tax optimization, and dedicated CA access at a fixed annual fee.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="accent" size="lg" className="group">
                    Join Client Pool
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Right Content - Benefits */}
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
                <h3 className="text-lg font-semibold text-primary-foreground mb-4">What's Included:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </div>
                      <span className="text-sm text-primary-foreground/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
