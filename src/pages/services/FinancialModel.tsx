import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, BarChart3, TrendingUp, DollarSign, Target, Briefcase, ArrowRight, Layers } from "lucide-react";
import heroImage from "@/assets/images/financial-model.jpg";

const FinancialModel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Asymmetric Layout */}
        <section className="section-padding bg-navy overflow-hidden">
          <div className="section-container">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-teal/20 text-teal-light px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <BarChart3 className="w-4 h-4" />
                  Business Planning
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Financial Model
                </h1>
                <p className="text-xl text-teal-light font-medium italic mb-4">
                  "A financial model is your business plan in numbers — without it, growth is guesswork."
                </p>
                <p className="text-white/80 mb-8">
                  Our Financial Model service helps startups translate ideas into numbers, showing how revenue, costs, cash flow, and profitability evolve over time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="accent" size="lg">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Phone className="w-4 h-4 mr-2" />
                    Talk to Finance Expert
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-teal/20 rounded-3xl transform rotate-6"></div>
                  <img 
                    src={heroImage} 
                    alt="Financial Model" 
                    className="relative rounded-2xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="section-padding bg-white -mt-8 relative z-10">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: TrendingUp, title: "Revenue", desc: "Clear growth projections" },
                { icon: DollarSign, title: "Cash Flow", desc: "Runway planning" },
                { icon: Target, title: "Profitability", desc: "Break-even analysis" },
              ].map((item, index) => (
                <div key={index} className="card-elevated text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-text-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                What is a Financial Model?
              </h2>
              <div className="bg-gradient-to-r from-teal/10 via-transparent to-navy/10 rounded-2xl p-8">
                <p className="text-text-body text-lg mb-4">
                  A financial model is a structured representation of your business in numbers. It projects how your company will perform financially over a defined period based on assumptions around revenue, costs, growth, and capital requirements.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {[
                    "Connects assumptions to outcomes",
                    "Shows impact of decisions",
                    "Highlights funding needs and risks",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-teal" />
                      <span className="text-text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Essential - Hexagon Grid */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Why a Financial Model is Essential for Startups
            </h2>
            <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Layers, title: "Unit Economics", desc: "Understand margins" },
                { icon: TrendingUp, title: "Cash Flow", desc: "Plan runway" },
                { icon: DollarSign, title: "Pricing", desc: "Price correctly" },
                { icon: Briefcase, title: "Funding", desc: "Prepare for investors" },
                { icon: Target, title: "Confidence", desc: "Answer questions" },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="font-semibold text-primary text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-text-body">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-teal font-medium mt-8">
              Without a model, startups often scale revenue but run out of cash.
            </p>
          </div>
        </section>

        {/* Who Needs */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              Who Needs a Financial Model?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "Startups preparing for fundraising",
                "Founders planning scale or expansion",
                "Businesses applying for loans",
                "Companies building pitch decks",
                "Management teams making strategic decisions",
              ].map((item, index) => (
                <div key={index} className="bg-navy text-white rounded-full px-6 py-3 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Cover & Why HelloTax */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  What Our Service Covers
                </h2>
                <div className="space-y-4">
                  {[
                    "Revenue assumptions and projections",
                    "Cost structure and COGS",
                    "Operating expenses breakdown",
                    "Profitability analysis",
                    "Cash flow projections",
                    "Funding requirements documentation",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-teal text-white flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <span className="text-text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-navy rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">
                  Why Hello Tax?
                </h2>
                <p className="text-white/80 mb-6">
                  Financial models are built by finance professionals, not template users. We ensure:
                </p>
                <ul className="space-y-4">
                  {[
                    "Realistic assumptions",
                    "Logical structure",
                    "Alignment with accounting and tax reality",
                    "Investor- and lender-friendly presentation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              How It Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-grey-divider -translate-y-1/2 hidden md:block"></div>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    "Understand your business",
                    "Share operational details",
                    "Build & review model",
                    "Refine projections",
                  ].map((step, index) => (
                    <div key={index} className="relative text-center">
                      <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center mx-auto mb-3 relative z-10 font-bold">
                        {index + 1}
                      </div>
                      <p className="font-medium text-primary">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { q: "Is a financial model mandatory for fundraising?", a: "Yes, investors expect clear financial projections." },
                { q: "Can the model be updated later?", a: "Yes, models should evolve as the business grows." },
                { q: "Will you explain the model to me?", a: "Yes, we walk you through assumptions and outputs." },
                { q: "Is this useful for small startups?", a: "Absolutely. Even early-stage startups benefit from financial clarity." },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-card">
                  <h3 className="font-semibold text-primary mb-2">{faq.q}</h3>
                  <p className="text-text-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-teal via-teal to-navy">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Turn Your Business Plan Into Numbers?
              </h2>
              <p className="text-white/80 mb-8">
                Get a financial model you can use, update, and explain with confidence.
              </p>
              <Button variant="accent" size="lg" className="text-lg bg-white text-navy hover:bg-white/90">
                Start Financial Modeling
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialModel;
