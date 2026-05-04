import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-grey-subtle">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Start Your <span className="text-accent">Startup Journey</span>?
          </h2>
          <p className="text-lg text-text-body mb-8 max-w-2xl mx-auto">
            Don't let paperwork slow you down. Get expert guidance on the right structure and launch your startup with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="hero" size="xl" className="group">
              Get Started Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <MessageCircle className="w-5 h-5" />
              Schedule Free Consultation
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-grey-divider">
            <div className="flex items-center gap-2 text-text-body">
              <Phone className="w-5 h-5 text-accent" />
              {/* <span>1800-XXX-XXXX (Toll Free)</span> */}
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2 text-text-body">
              <MessageCircle className="w-5 h-5 text-accent" />
              <span>WhatsApp: +91 9876543210</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
