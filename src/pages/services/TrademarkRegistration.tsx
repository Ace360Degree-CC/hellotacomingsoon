import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, Shield, FileText, Scale, Clock, Users, ArrowRight, AlertCircle } from "lucide-react";
import heroImage from "@/assets/images/trademark-registration.jpg";

const TrademarkRegistration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Protection Focus */}
        <section className="section-padding bg-gradient-to-br from-navy/5 via-background to-teal/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Shield className="w-4 h-4" />
                  Brand Protection
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                  Trademark Registration
                </h1>
                <p className="text-lg text-teal font-medium italic mb-4">
                  "Building a brand is hard. Protecting it early is smart."
                </p>
                <p className="text-navy font-semibold mb-4">
                  Love your company, Love your Brand.
                </p>
                <p className="text-text-body mb-8">
                  Our Trademark Registration service helps startups secure legal ownership of their brand name, logo, or identity, protecting it from misuse and future disputes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="hero-outline" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Talk to IP Expert
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal/30 to-navy/30 rounded-full blur-3xl"></div>
                  <img 
                    src={heroImage} 
                    alt="Trademark Registration" 
                    className="relative rounded-2xl shadow-card max-w-sm w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
                What is Trademark Registration?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-elevated">
                  <h3 className="font-bold text-primary mb-4">What Can Be Trademarked?</h3>
                  <ul className="space-y-3">
                    {["Business name", "Logo", "Tagline", "Symbol"].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-teal" />
                        </div>
                        <span className="text-text-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-elevated bg-navy text-white">
                  <h3 className="font-bold mb-4">Why Register?</h3>
                  <p className="text-white/80">
                    Trademark registration gives you exclusive rights to use your brand for specific goods or services. Without registration, your brand remains vulnerable — even if you've been using it for years.
                  </p>
                </div>
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
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-red-700 mb-2">What Happens Without Trademark Protection?</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Brand name conflicts", "Legal objections", "Forced rebranding", "Loss of goodwill", "Lost customer trust"].map((item, index) => (
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

        {/* Why Important */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Why Trademark Registration is Important
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: "Secure Ownership", desc: "Legal protection for your brand" },
                { icon: Scale, title: "Prevent Misuse", desc: "Stop copying and infringement" },
                { icon: Users, title: "Investor Confidence", desc: "Shows you're serious about brand" },
                { icon: FileText, title: "Long-term Value", desc: "Brand as a business asset" },
              ].map((item, index) => (
                <div key={index} className="text-center card-elevated">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal/20 to-navy/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-body">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-teal font-medium mt-8">
              A registered trademark is a business asset, not just a legal formality.
            </p>
          </div>
        </section>

        {/* What We Cover */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              What Our Trademark Registration Service Covers
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                {[
                  "Trademark search and availability check",
                  "Correct classification selection",
                  "Application filing",
                  "Examination Report if IP authority asks",
                  "1st Hearing Attendance in case of objection",
                  "Status tracking and follow-up",
                ].map((item, index) => (
                  <div key={index} className={`flex items-center gap-4 p-5 ${index !== 5 ? 'border-b border-grey-divider' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <span className="text-text-body font-medium flex-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Register */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              Who Should Register a Trademark?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {[
                "Startups and new businesses",
                "Growing brands",
                "Companies launching products",
                "Founders planning long-term",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-gradient-to-r from-teal/10 to-navy/10 px-6 py-3 rounded-full">
                  <Check className="w-5 h-5 text-teal" />
                  <span className="text-text-body font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why HelloTax */}
        <section className="section-padding bg-navy text-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Why Hello Tax for Trademark Registration?
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                "Tied up with many Attorneys",
                "Handle small to million dollar requirements",
                "Monitor application status",
                "Keep you informed at every stage",
              ].map((item, index) => (
                <div key={index} className="text-center bg-white/10 rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-5 h-5 text-teal" />
                  </div>
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-teal-light font-medium mt-8">
              You get clarity and accountability, not silence after filing.
            </p>
          </div>
        </section>

        {/* TM vs ® */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
                TM vs ® - What's the Difference?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-elevated border-t-4 border-teal">
                  <div className="text-4xl font-bold text-teal mb-4">TM</div>
                  <p className="text-text-body">
                    Can be used after application is filed. Shows you're claiming rights to the mark.
                  </p>
                </div>
                <div className="card-elevated border-t-4 border-navy">
                  <div className="text-4xl font-bold text-navy mb-4">®</div>
                  <p className="text-text-body">
                    Can only be used after Registration Certificate is received. Full legal protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Documents */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-teal" />
                  <h3 className="text-xl font-bold text-primary">Timeline</h3>
                </div>
                <p className="text-text-body mb-4">
                  Trademark registration is a time-bound legal process and may take several months due to government procedures.
                </p>
                <p className="text-sm text-text-body">
                  Our fees cover application filing and basic follow-up. Objections or hearings, if raised, are handled as separate services.
                </p>
              </div>
              <div className="card-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-teal" />
                  <h3 className="text-xl font-bold text-primary">Documents Required</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Brand name or logo",
                    "Business details",
                    "Applicant identity proof",
                    "Description of goods or services",
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
                { q: "Can I register a trademark before company incorporation?", a: "Yes, trademarks can be filed in individual or business name." },
                { q: "Does trademark registration give lifetime protection?", a: "Trademark is valid for 10 years and renewable." },
                { q: "What if someone objects to my trademark?", a: "Objections can be replied to separately with professional support." },
                { q: "Can Hello Tax help with trademark objections?", a: "Yes, objection handling is available as an add-on." },
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
        <section className="section-padding bg-gradient-to-br from-primary to-navy-light">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Protect Your Brand Identity?
              </h2>
              <p className="text-white/80 mb-8">
                Say hello to legal ownership of your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="text-lg">
                  Start Trademark Registration
                  <span className="ml-2 text-sm opacity-80">₹12,500 + GST</span>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Phone className="w-4 h-4 mr-2" />
                  Talk to IP Expert
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

export default TrademarkRegistration;
