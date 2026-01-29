import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-grey-subtle to-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F2257' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="section-container section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-light text-accent px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Trusted by 500+ Indian Startups
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in-up">
            Startup Formation
          </h1>

          {/* Quote-style Sub-headline */}
          <blockquote className="text-xl md:text-2xl text-text-body italic mb-6 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto">
            "The right business structure today decides your{" "}
            <span className="text-accent font-semibold not-italic">tax</span>,{" "}
            <span className="text-accent font-semibold not-italic">funding</span>, and{" "}
            <span className="text-accent font-semibold not-italic">exit</span> tomorrow."
          </blockquote>

          {/* Supporting Text */}
          <p className="text-lg text-text-body mb-10 animate-fade-in-up animation-delay-400 max-w-2xl mx-auto">
            End-to-end startup incorporation and compliance support. From choosing the right structure to registration, licenses, and ongoing compliance — we handle everything so you can focus on building.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button variant="hero" size="xl" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <MessageCircle className="w-5 h-5" />
              Talk to Startup Expert
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-grey-divider animate-fade-in-up animation-delay-400">
            <p className="text-sm text-muted-foreground mb-4">Recognized & trusted by</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-primary font-semibold">Startup India</div>
              <div className="text-primary font-semibold">MSME Registered</div>
              <div className="text-primary font-semibold">ICAI Members</div>
              <div className="text-primary font-semibold">ISO 27001</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
