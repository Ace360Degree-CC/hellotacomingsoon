import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, PieChart, FileText, Building, ArrowRight, Clock, Shield, Target } from "lucide-react";
import heroImage from "@/assets/images/cma-preparation.jpg";

const CMAPreparation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Centered with Image Below */}
        <section className="section-padding bg-gradient-to-b from-navy/5 to-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
                <PieChart className="w-4 h-4" />
                Bank Loan Documentation
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                CMA Preparation
              </h1>
              <p className="text-lg text-teal font-medium italic mb-4">
                "Banks trust CMA because it shows numbers they can monitor, not just projections."
              </p>
              <p className="text-text-body mb-8">
                Our CMA Preparation service helps businesses prepare accurate, bank-compliant CMA data, required for working capital limits, term loans, and credit facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="hero-outline" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Talk to Finance Expert
                </Button>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <img 
                src={heroImage} 
                alt="CMA Preparation" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </section>

        {/* What Is Section - Two Column Cards */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card-elevated">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  What is CMA Preparation?
                </h2>
                <p className="text-text-body mb-4">
                  CMA (Credit Monitoring Arrangement) is a structured financial statement format used by banks to evaluate and monitor a borrower's financial health.
                </p>
                <p className="text-text-body">
                  Unlike normal financial statements, CMA focuses on past financial performance, current financial position, and projected performance over loan tenure.
                </p>
              </div>
              <div className="card-elevated bg-navy text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Bank Requirements
                </h2>
                <ul className="space-y-3">
                  {[
                    "Evaluate loan eligibility",
                    "Sanction working capital limits",
                    "Monitor credit exposure",
                    "Assess repayment capability",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs - Vertical Timeline */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Who Needs CMA Preparation?
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal/30"></div>
                {[
                  { title: "Working capital loans", icon: Building },
                  { title: "Cash credit or overdraft facilities", icon: FileText },
                  { title: "Term loans (in many cases)", icon: Target },
                  { title: "MSME and business loan renewals", icon: Shield },
                  { title: "Existing borrowers increasing limits", icon: PieChart },
                ].map((item, index) => (
                  <div key={index} className="relative flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-full bg-white shadow-card flex items-center justify-center z-10">
                      <item.icon className="w-6 h-6 text-teal" />
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-4 shadow-card">
                      <p className="font-medium text-primary">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover - Checklist Grid */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              What Our CMA Preparation Service Covers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                "Historical financial analysis",
                "Projected balance sheet, P&L, and cash flow",
                "Working capital assessment",
                "Fund flow and ratio analysis",
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-teal/10 to-navy/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="text-text-body font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why HelloTax */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
                Why Hello Tax for CMA Preparation?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Aligned Numbers", desc: "Numbers align with finalised accounts" },
                  { title: "Realistic Projections", desc: "Projections are realistic and defendable" },
                  { title: "Bank Formats", desc: "Formats match bank expectations" },
                  { title: "Loan Support", desc: "Data supports loan justification" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-card">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                      <p className="text-text-body text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Documents */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-teal" />
                  <h3 className="text-xl font-bold text-primary">Timeline</h3>
                </div>
                <div className="text-3xl font-bold text-teal mb-2">1-3 Days</div>
                <p className="text-text-body">
                  CMA preparation usually takes 1–3 working days, depending on data availability and complexity. Includes 2 revisions based on banker feedback.
                </p>
              </div>
              <div className="card-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-teal" />
                  <h3 className="text-xl font-bold text-primary">Documents Required</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Past financial statements",
                    "Projected financials",
                    "Loan requirement details",
                    "Existing loan details (if any)",
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
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "Is CMA mandatory for all loans?", a: "Mostly required for working capital and larger credit facilities." },
                { q: "Can CMA be prepared for new businesses?", a: "Yes, using projected data where applicable." },
                { q: "Will banks accept this CMA format?", a: "Yes, formats are aligned with bank requirements." },
                { q: "Can CMA be revised later?", a: "Yes, updates can be made based on bank feedback." },
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
        <section className="section-padding bg-gradient-to-br from-primary to-navy-light">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Prepare Bank-Ready CMA Data?
              </h2>
              <p className="text-white/80 mb-8">
                Get accurate, bank-compliant CMA data that improves your loan approval chances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="text-lg">
                  Start CMA Preparation
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

export default CMAPreparation;
