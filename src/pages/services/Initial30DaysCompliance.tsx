import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, ClipboardCheck, Calendar, FileText, AlertTriangle, ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/images/initial-compliance.jpg";

const Initial30DaysCompliance = () => {
  const complianceItems = [
    { title: "INC 20A Filings", icon: FileText },
    { title: "Share Certificate", icon: Shield },
    { title: "ADT-1 Auditor Appointment", icon: ClipboardCheck },
    { title: "LLP Form-3", icon: FileText },
    { title: "Board Resolution for Current Account", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Timeline Focus */}
        <section className="section-padding bg-gradient-to-r from-navy via-navy to-navy-light overflow-hidden">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-teal" />
                  </div>
                  <div className="text-5xl font-bold text-white">30</div>
                  <div className="text-white/60 text-lg">Days</div>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Initial Compliance
                </h1>
                <p className="text-lg text-teal-light font-medium italic mb-4">
                  "Most compliance mistakes happen in the first 30 days — and they cost the most to fix later."
                </p>
                <p className="text-white/80 mb-8">
                  Our Initial 30 Days Compliance service ensures newly incorporated companies and LLPs start on a clean, compliant foundation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="accent" size="lg">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Phone className="w-4 h-4 mr-2" />
                    Talk to Expert
                  </Button>
                </div>
              </div>
              <div className="relative flex justify-center">
                <img 
                  src={heroImage} 
                  alt="Initial Compliance" 
                  className="rounded-2xl shadow-lg max-w-md w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="section-padding bg-red-50 border-y border-red-200">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-red-700 mb-2">Why the First 30 Days Matter</h3>
                  <p className="text-red-600 mb-4">
                    Missing these compliances can trigger penalties, create incorrect statutory records, complicate future ROC filings, and delay funding or banking processes.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Late penalties", "Incorrect records", "Audit issues", "Funding delays"].map((item, index) => (
                      <span key={index} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                What is Initial 30 Days Compliance?
              </h2>
              <p className="text-text-body text-lg">
                The first 30 days after incorporation are legally critical for companies and LLPs. During this period, several mandatory actions must be completed to make the entity fully operational and compliant. At Hello Tax, we ensure your business is compliance-ready from day one.
              </p>
            </div>
          </div>
        </section>

        {/* What We Cover - Checklist Style */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              What We Cover Under Initial 30 Days Compliance
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                {complianceItems.map((item, index) => (
                  <div key={index} className={`flex items-center gap-4 p-5 ${index !== complianceItems.length - 1 ? 'border-b border-grey-divider' : ''}`}>
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-teal" />
                    </div>
                    <span className="text-text-body font-medium flex-1">{item.title}</span>
                    <Check className="w-5 h-5 text-teal" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Opt */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              Who Should Opt for This Service?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Private Limited Companies", subtitle: "Newly incorporated" },
                { title: "One Person Companies (OPC)", subtitle: "Single founder setup" },
                { title: "LLPs", subtitle: "Limited Liability Partnership" },
              ].map((item, index) => (
                <div key={index} className="card-elevated text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-text-body">{item.subtitle}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-teal font-medium mt-8">
              If your entity is newly registered, this service is not optional — it's preventive.
            </p>
          </div>
        </section>

        {/* Why HelloTax */}
        <section className="section-padding bg-navy text-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Why Hello Tax for Initial Compliance?
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                "Correct filings within deadlines",
                "Proper documentation for future reference",
                "Clear guidance on next compliances",
                "No dependency on guesswork",
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-teal" />
                  </div>
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works & Documents */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">How It Works</h2>
                <div className="space-y-4">
                  {[
                    "We review your incorporation documents",
                    "Identify statutory requirements",
                    "Complete necessary compliances",
                    "Prepare records and documentation",
                    "Guide you on upcoming obligations",
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-text-body">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-elevated">
                <h2 className="text-2xl font-bold text-primary mb-6">Documents Required</h2>
                <ul className="space-y-4">
                  {[
                    "Incorporation documents",
                    "Director or partner details",
                    "Registered office details",
                    "Business activity information",
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center gap-3 p-3 bg-grey-subtle rounded-lg">
                      <FileText className="w-5 h-5 text-teal" />
                      <span className="text-text-body">{doc}</span>
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
                { q: "Is initial compliance mandatory for all companies and LLPs?", a: "Yes. Certain compliances are legally required immediately after incorporation." },
                { q: "What happens if initial compliance is missed?", a: "Penalties, incorrect records, and future compliance difficulties." },
                { q: "Can Hello Tax handle delayed initial compliance?", a: "Yes, but corrective work may involve additional effort and cost." },
                { q: "Do you support both Companies and LLPs?", a: "Yes, we handle compliance for both entity types." },
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
                Ready to Start Your Business on a Clean Foundation?
              </h2>
              <p className="text-white/80 mb-8">
                Start clean, compliant, and confident from day one.
              </p>
              <Button variant="accent" size="lg" className="text-lg">
                Start Initial Compliance
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Initial30DaysCompliance;
