import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, BookOpen, TrendingUp, BarChart3, Target, ArrowRight, Building, Users } from "lucide-react";
import heroImage from "@/assets/images/provisional-balance.jpg";

const ProvisionalBalanceSheet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Data Visualization Focus */}
        <section className="relative min-h-[60vh] flex items-center bg-navy overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Balance Sheet" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-teal/20 text-teal-light px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Financial Projections
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Provisional / Projected Balance Sheet
              </h1>
              <p className="text-lg text-teal-light font-medium italic mb-4">
                "The Bank or Investor relies on Provisional & Projected Financials, so take it more serious"
              </p>
              <p className="text-white/80 mb-8 text-lg">
                Our service helps businesses present future-oriented financial positions that are structured, realistic, and acceptable to banks, investors, and internal decision-makers.
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

        {/* Difference Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Understanding the Difference
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-elevated border-t-4 border-teal">
                <h3 className="text-xl font-bold text-primary mb-4">Provisional Balance Sheet</h3>
                <p className="text-text-body mb-4">
                  Represents the estimated financial position of a business at a specific future point, based on current performance and assumptions.
                </p>
                <div className="bg-teal/10 rounded-lg p-3 text-center">
                  <span className="text-teal font-medium">Short-term / Till Date</span>
                </div>
              </div>
              <div className="card-elevated border-t-4 border-navy">
                <h3 className="text-xl font-bold text-primary mb-4">Projected Balance Sheet</h3>
                <p className="text-text-body mb-4">
                  Goes further by presenting expected assets, liabilities, and equity over a defined future period, aligned with growth plans or loan tenure.
                </p>
                <div className="bg-navy/10 rounded-lg p-3 text-center">
                  <span className="text-navy font-medium">Long-term / Detailed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Important */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Why These Statements Are Important
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: TrendingUp, title: "Future Position", desc: "Understand where you'll be" },
                { icon: Target, title: "Funding Needs", desc: "Assess requirements" },
                { icon: BarChart3, title: "Capital Structure", desc: "Evaluate leverage" },
                { icon: Users, title: "Stakeholder Trust", desc: "Support discussions" },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal/20 to-navy/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Needs */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              Who Needs Provisional / Projected Balance Sheets?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                { text: "Startups preparing for funding", icon: TrendingUp },
                { text: "Businesses applying for loans", icon: Building },
                { text: "Companies preparing CMA/project reports", icon: BookOpen },
                { text: "Management teams planning expansion", icon: Users },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-teal/10 to-navy/10 px-6 py-4 rounded-xl">
                  <item.icon className="w-5 h-5 text-teal" />
                  <span className="text-text-body font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="section-padding bg-navy text-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What Our Service Covers
            </h2>
            <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                "Analysing current financial data",
                "Aligning projections with business plans",
                "Ensuring logical flow",
                "Cross-checking consistency",
                "Creating defensible snapshots",
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-teal" />
                  </div>
                  <p className="text-white/90 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why HelloTax - Stats */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
                Why Hello Tax for Projected Balance Sheets?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center card-elevated">
                  <div className="text-5xl font-bold text-teal mb-2">1000+</div>
                  <p className="text-text-body">Projected Financials already served</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Compliance and accounting logic",
                    "Consistency across documents",
                    "Bank and investor acceptability",
                    "Projections support confidence",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 bg-grey-subtle rounded-lg p-3">
                      <Check className="w-4 h-4 text-teal flex-shrink-0" />
                      <span className="text-sm text-text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Documents */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-elevated text-center">
                <h3 className="text-xl font-bold text-primary mb-4">Timeline</h3>
                <div className="text-4xl font-bold text-teal mb-2">1-3 Days</div>
                <p className="text-text-body">Depending on complexity</p>
              </div>
              <div className="card-elevated">
                <h3 className="text-xl font-bold text-primary mb-4">Documents Required</h3>
                <ul className="space-y-2">
                  {[
                    "Current Tally Data if available",
                    "Financial projections or business plan",
                    "Funding or loan details",
                    "Growth assumptions",
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-body">
                      <Check className="w-4 h-4 text-teal" />
                      {doc}
                    </li>
                  ))}
                </ul>
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
                { q: "Are provisional and projected balance sheets the same?", a: "No, provisional is short-term data while projected is more detailed and long-term." },
                { q: "Can these be used for bank submissions?", a: "Yes, when prepared correctly and aligned with other documents." },
                { q: "Will projections be accepted by investors?", a: "Yes, if assumptions are realistic and explained." },
                { q: "Can you prepare multiple scenarios?", a: "Yes, scenario planning can be added as an additional service." },
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
        <section className="section-padding bg-gradient-to-r from-teal to-navy">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Present Your Future Financial Position?
              </h2>
              <p className="text-white/80 mb-8">
                Get credible, defensible financial projections for banks and investors.
              </p>
              <Button variant="accent" size="lg" className="text-lg bg-white text-navy hover:bg-white/90">
                Start Projected Balance Sheet
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProvisionalBalanceSheet;
