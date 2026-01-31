import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, TrendingUp, Shield, Scale, Target, FileText, ArrowRight, Users, Briefcase } from "lucide-react";
import heroImage from "@/assets/images/share-valuation.jpg";

const ShareValuation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Value Focus */}
        <section className="section-padding bg-gradient-to-br from-navy via-navy-light to-navy">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-teal/20 text-teal-light px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4" />
                  Company Valuation
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Share Valuation
                </h1>
                <p className="text-xl text-teal-light font-medium italic mb-4">
                  "Valuation is not a guess — it's a justification backed by numbers."
                </p>
                <p className="text-white/80 mb-8">
                  Our Share Valuation service helps startups and companies determine fair, defensible share value for fundraising, ESOPs, regulatory compliance, and internal decision-making.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="accent" size="lg">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Phone className="w-4 h-4 mr-2" />
                    Talk to Valuation Expert
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-teal/20 rounded-3xl transform -rotate-3"></div>
                  <img 
                    src={heroImage} 
                    alt="Share Valuation" 
                    className="relative rounded-2xl shadow-lg max-w-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                What is Share Valuation?
              </h2>
              <p className="text-text-body text-lg mb-6">
                Share valuation is the process of determining the fair value of a company's shares based on financial performance, future potential, and market factors.
              </p>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6">
                <p className="text-red-700">
                  <strong>Important:</strong> Incorrect or unsupported valuations can attract scrutiny from tax authorities and investors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When Required */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              When is Share Valuation Required?
            </h2>
            <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {[
                { icon: Users, title: "Fundraising", desc: "Investor discussions" },
                { icon: FileText, title: "Share Issue", desc: "Issue to investors" },
                { icon: Briefcase, title: "ESOP", desc: "Employee stock options" },
                { icon: Scale, title: "Compliance", desc: "Tax & Companies Act" },
                { icon: Target, title: "Planning", desc: "Internal restructuring" },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-5 text-center shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="font-semibold text-primary text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-text-body">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-teal font-medium mt-8">
              Valuation is most effective when done before commitments are made, not after.
            </p>
          </div>
        </section>

        {/* Why Accurate Valuation Matters */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Why Accurate Share Valuation Matters
            </h2>
            <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Investor Confidence", desc: "Build trust" },
                { title: "Dilution Protection", desc: "Protect founders" },
                { title: "Tax Compliance", desc: "Stay compliant" },
                { title: "Dispute Reduction", desc: "Avoid conflicts" },
                { title: "Better Negotiation", desc: "Realistic terms" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-primary text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-text-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="section-padding bg-navy text-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What Our Share Valuation Service Covers
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Assessment", items: ["Appropriate valuation methods", "Financial performance analysis"] },
                { title: "Evaluation", items: ["Business model and stage", "Growth projections consideration"] },
                { title: "Documentation", items: ["Industry benchmarks comparison", "Audit-ready documentation"] },
              ].map((section, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6">
                  <h3 className="font-bold text-teal mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/90">
                        <Check className="w-4 h-4 text-teal flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why HelloTax */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
                Why Hello Tax for Share Valuation?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Correct Methodology", desc: "Using accepted valuation standards" },
                  { title: "Regulatory Alignment", desc: "Tax and regulatory compliance" },
                  { title: "Clear Explanations", desc: "Assumptions clearly explained" },
                  { title: "Startup-Friendly", desc: "Practical approach for new businesses" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 card-elevated">
                    <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                      <p className="text-text-body text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-teal font-medium mt-8">
                You don't just get a number — you get confidence behind that number.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              How It Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Understand", desc: "Your business and goals" },
                  { step: "2", title: "Share", desc: "Financial data" },
                  { step: "3", title: "Evaluate", desc: "Apply methods" },
                  { step: "4", title: "Deliver", desc: "Clear report" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-body">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { q: "Is valuation mandatory for fundraising?", a: "Yes, valuation is required for share issuance and compliance." },
                { q: "Can valuation be done for early-stage startups?", a: "Yes, suitable methods are applied based on stage." },
                { q: "Will tax authorities accept this valuation?", a: "Valuations are prepared as per accepted methods and standards." },
                { q: "Can you revise valuation later?", a: "Yes, valuation can be updated as business grows." },
              ].map((faq, index) => (
                <div key={index} className="card-elevated">
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
                Ready to Value Your Company Correctly?
              </h2>
              <p className="text-white/80 mb-8">
                Say hello to defensible, compliant share valuation with clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="text-lg bg-white text-navy hover:bg-white/90">
                  Start Share Valuation
                  <span className="ml-2 text-sm opacity-70">₹29,999 + GST</span>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20">
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

export default ShareValuation;
