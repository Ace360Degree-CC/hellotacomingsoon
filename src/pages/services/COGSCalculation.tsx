import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, Calculator, TrendingUp, PieChart, DollarSign, ArrowRight } from "lucide-react";
import heroImage from "@/assets/images/cogs-calculation.jpg";

const COGSCalculation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Full Width Image Background */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="COGS Calculation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent"></div>
          </div>
          <div className="section-container relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-teal/20 text-teal-light px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                Financial Analysis
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                COGS Calculation
              </h1>
              <p className="text-xl text-teal-light font-medium italic mb-4">
                "If you don't know your real cost, you don't know your real profit."
              </p>
              <p className="text-white/80 mb-8 text-lg">
                Our COGS Calculation service helps startups and businesses accurately determine the true cost of delivering their product or service.
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
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-white -mt-16 relative z-20">
          <div className="section-container">
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: "Without COGS", items: ["Incorrect pricing", "Misleading profits", "Poor decisions", "Wrong discounts"] },
              ].map((_, index) => (
                <div key={index} className="col-span-4">
                  <div className="grid md:grid-cols-4 gap-4">
                    {["Incorrect pricing", "Misleading profits", "Poor cash flow decisions", "Wrong discounts"].map((item, i) => (
                      <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                        <div className="text-red-500 font-semibold">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Is Section - Centered */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                What is COGS (Cost of Goods Sold)?
              </h2>
              <p className="text-text-body text-lg mb-6">
                COGS represents the direct cost incurred to produce or deliver your product or service. It includes costs that are directly linked to revenue generation, such as materials, direct labour, production costs, or service delivery expenses.
              </p>
              <p className="text-teal font-medium">
                At Hello Tax, we help you clearly separate costs from expenses, so your numbers reflect reality.
              </p>
            </div>
          </div>
        </section>

        {/* Why Important - Metrics Style */}
        <section className="section-padding bg-navy text-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why COGS Calculation is Critical
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { icon: DollarSign, title: "Price Correctly" },
                { icon: PieChart, title: "Understand Margins" },
                { icon: TrendingUp, title: "Identify Leakages" },
                { icon: Calculator, title: "Scale Decisions" },
                { icon: Check, title: "Investor Ready" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-teal" />
                  </div>
                  <p className="font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Needs - Card Grid */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              Who Needs COGS Calculation?
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Product-based startups",
                "Manufacturing businesses",
                "D2C & e-commerce sellers",
                "Service businesses",
                "Startups preparing models",
              ].map((item, index) => (
                <div key={index} className="card-elevated text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center mx-auto mb-3 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-text-body font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Cover - Side by Side */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  What Our Service Covers
                </h2>
                <div className="space-y-4">
                  {[
                    "Direct material or service costs analysis",
                    "Labour or execution costs identification",
                    "Production or delivery-related expenses",
                    "Cost allocation logic",
                    "Clear, defensible COGS computation",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Why Hello Tax?
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-card">
                  <p className="text-text-body mb-6">
                    At Hello Tax, COGS calculation is not done using generic formulas. We understand:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Different business models",
                      "Startup cost structures",
                      "Compliance and accounting impact",
                      "Works across accounting, MIS, and investor discussions",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-text-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {["Understand your flow", "Share cost data", "We analyse", "Get clarity"].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center mx-auto mb-2 font-bold text-xl">
                        {index + 1}
                      </div>
                      <p className="font-medium text-primary">{step}</p>
                    </div>
                    {index < 3 && (
                      <ArrowRight className="hidden md:block w-6 h-6 text-grey-divider" />
                    )}
                  </div>
                ))}
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
                { q: "Is COGS applicable only to product businesses?", a: "No. Service businesses also have delivery-related COGS." },
                { q: "Can COGS change over time?", a: "Yes. COGS should be reviewed periodically as costs evolve." },
                { q: "Will you help me set pricing based on COGS?", a: "Yes, pricing guidance can be provided as part of advisory." },
                { q: "Can this be used for investor discussions?", a: "Absolutely. Clear COGS improves financial credibility." },
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
        <section className="section-padding bg-gradient-to-r from-teal to-navy">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Know Your Real Cost of Goods Sold?
              </h2>
              <p className="text-white/80 mb-8">
                Get clarity on your true costs and make informed business decisions.
              </p>
              <Button variant="accent" size="lg" className="text-lg">
                Start COGS Calculation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default COGSCalculation;
