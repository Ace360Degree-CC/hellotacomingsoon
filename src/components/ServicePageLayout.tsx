import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";

interface ServicePageLayoutProps {
  title: string;
  tagline: string;
  description: string;
  whatIsTitle: string;
  whatIsContent: string[];
  whyImportantTitle: string;
  whyImportantContent: string[];
  whoNeedsTitle: string;
  whoNeedsItems: string[];
  whatWeCoverTitle: string;
  whatWeCoverItems: string[];
  whyHelloTaxTitle: string;
  whyHelloTaxItems: string[];
  howItWorksContent: string;
  documentsRequired: string[];
  timelineContent: string;
  addOnServices: string[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaButtonText: string;
  ctaPrice?: string;
}

const ServicePageLayout = ({
  title,
  tagline,
  description,
  whatIsTitle,
  whatIsContent,
  whyImportantTitle,
  whyImportantContent,
  whoNeedsTitle,
  whoNeedsItems,
  whatWeCoverTitle,
  whatWeCoverItems,
  whyHelloTaxTitle,
  whyHelloTaxItems,
  howItWorksContent,
  documentsRequired,
  timelineContent,
  addOnServices,
  faqs,
  ctaTitle,
  ctaButtonText,
  ctaPrice,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-navy/5 to-background">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-teal font-medium italic mb-6">
                "{tagline}"
              </p>
              <p className="text-sm text-text-body mb-4">
                HelloTaxIndia — Accessible · Accountable · Affordable (Not Cheap)
              </p>
              <p className="text-text-body text-lg mb-8 max-w-3xl mx-auto">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Get Started
                </Button>
                <Button variant="hero-outline" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Talk to Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                {whatIsTitle}
              </h2>
              {whatIsContent.map((paragraph, index) => (
                <p key={index} className="text-text-body mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Why Important Section */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                {whyImportantTitle}
              </h2>
              <ul className="space-y-3">
                {whyImportantContent.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Who Needs Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                {whoNeedsTitle}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {whoNeedsItems.map((item, index) => (
                  <div key={index} className="card-elevated flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-teal" />
                    </div>
                    <span className="text-text-body font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover Section */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                {whatWeCoverTitle}
              </h2>
              <ul className="space-y-3">
                {whatWeCoverItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why HelloTax Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                {whyHelloTaxTitle}
              </h2>
              <p className="text-text-body mb-6">
                At Hello Tax, we don't use generic templates. We ensure:
              </p>
              <ul className="space-y-3">
                {whyHelloTaxItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                How It Works
              </h2>
              <p className="text-text-body">{howItWorksContent}</p>
            </div>
          </div>
        </section>

        {/* Documents Required Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Documents / Information Required
              </h2>
              <ul className="space-y-3">
                {documentsRequired.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Timeline & Important Notes
              </h2>
              <p className="text-text-body">{timelineContent}</p>
            </div>
          </div>
        </section>

        {/* Client Pool Membership */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-2xl mb-4 block">🎁</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                HelloTax Client Pool Membership
              </h2>
              <p className="text-primary-foreground/80">
                As a Hello Tax client, you gain access to compliance, documentation, and advisory services at cost — all under one coordinated ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Add-On Services */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Add-On Services (Optional)
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {addOnServices.map((service, index) => (
                  <div key={index} className="card-elevated flex items-center gap-3">
                    <Check className="w-5 h-5 text-teal flex-shrink-0" />
                    <span className="text-text-body">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="card-elevated">
                    <h3 className="font-semibold text-primary mb-2">{faq.question}</h3>
                    <p className="text-text-body">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary to-navy-light">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {ctaTitle}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="text-lg">
                  {ctaButtonText}
                  {ctaPrice && <span className="ml-2 text-sm opacity-80">{ctaPrice}</span>}
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Phone className="w-4 h-4 mr-2" />
                  Talk to Expert
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
