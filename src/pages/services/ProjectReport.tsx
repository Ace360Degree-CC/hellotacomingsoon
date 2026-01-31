import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, Building, FileText, Target, TrendingUp, Users, ArrowRight, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/images/project-report.jpg";

const ProjectReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Document Style */}
        <section className="section-padding bg-gradient-to-b from-grey-subtle to-background">
          <div className="section-container">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3">
                  <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Building className="w-4 h-4" />
                    Loan Documentation
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                    Project Report for Loan
                  </h1>
                  <p className="text-lg text-teal font-medium italic mb-4">
                    "Banks don't lend on ideas — they lend on clarity, feasibility, and numbers."
                  </p>
                  <p className="text-text-body mb-8">
                    Our Project Report service helps businesses present a clear, structured, and bank-acceptable proposal, improving approval chances for term loans, working capital, or government-backed funding schemes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="hero-outline" size="lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Talk to Expert
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-card p-4">
                    <img 
                      src={heroImage} 
                      alt="Project Report" 
                      className="rounded-xl w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section - Highlighted */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  What is a Project Report for Loan?
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  A Project Report is a detailed document submitted to banks or financial institutions when applying for a loan. It explains your business model, project viability, funding requirement, and repayment capacity.
                </p>
                <p className="text-teal-light font-medium">
                  Banks rely heavily on project reports to assess risk, feasibility, and financial discipline. A weak or generic report often leads to rejection or prolonged queries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Important - Checklist */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Why a Strong Project Report is Important
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: FileText, title: "Clear Explanation", desc: "Explains your business activity" },
                { icon: TrendingUp, title: "Financial Viability", desc: "Demonstrates sustainability" },
                { icon: Target, title: "Justified Amount", desc: "Justifies loan amount and usage" },
                { icon: Shield, title: "Repayment Proof", desc: "Shows repayment capability" },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-card">
                  <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
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
              Who Needs a Project Report?
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-teal/5 via-transparent to-navy/5 rounded-2xl p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Term loan applications",
                    "Working capital loans",
                    "MSME and government schemes",
                    "New business or expansion funding",
                    "Bank finance for startups and MSMEs",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                      <Check className="w-5 h-5 text-teal flex-shrink-0" />
                      <span className="text-text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              What Our Project Report Service Covers
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Business and promoter profile",
                  "Project description and objectives",
                  "Market overview and opportunity",
                  "Cost structure and funding pattern",
                  "Financial projections and repayment logic",
                  "CMA Data preparation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-card">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <span className="text-text-body font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why HelloTax & Timeline */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Why Hello Tax for Project Reports?
                </h2>
                <ul className="space-y-4">
                  {[
                    { title: "Realistic assumptions", desc: "Based on market reality" },
                    { title: "Clear financial linkage", desc: "Numbers that make sense" },
                    { title: "Alignment with accounting", desc: "Tax and compliance ready" },
                    { title: "Bank-friendly presentation", desc: "Format banks accept" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-primary">{item.title}</p>
                        <p className="text-sm text-text-body">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="card-elevated">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-teal" />
                    <h3 className="text-xl font-bold text-primary">Timeline</h3>
                  </div>
                  <div className="text-4xl font-bold text-teal mb-2">1-3 Days</div>
                  <p className="text-text-body">
                    Depending on complexity. Subject to two revisions.
                  </p>
                </div>
                <div className="card-elevated">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-teal" />
                    <h3 className="text-xl font-bold text-primary">Documents Required</h3>
                  </div>
                  <ul className="space-y-2 text-text-body">
                    {[
                      "Business and promoter details",
                      "Existing financials (if any)",
                      "Cost estimates and funding requirement",
                      "Loan purpose and tenure details",
                    ].map((doc, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal" />
                        {doc}
                      </li>
                    ))}
                  </ul>
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
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "Is a project report mandatory for all loans?", a: "Most banks require it for term loans and MSME funding." },
                { q: "Can the report be customised for a specific bank?", a: "Yes, we align reports with bank formats where required." },
                { q: "Will this guarantee loan approval?", a: "No, but it significantly improves approval chances." },
                { q: "Can you help with CMA data as well?", a: "Yes, CMA preparation is available as an add-on service." },
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
                Ready to Get Your Loan Project Report?
              </h2>
              <p className="text-white/80 mb-8">
                Get a bank-ready project report that improves your loan approval chances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="text-lg">
                  Start Project Report
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

export default ProjectReport;
