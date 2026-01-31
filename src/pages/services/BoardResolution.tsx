import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, FileText, Building, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/images/board-resolution.jpg";

const BoardResolution = () => {
  const whoNeeds = [
    "Private Limited Companies",
    "One Person Companies (OPC)",
    "LLP Limited Liability Partnership",
    "Companies opening new bank accounts",
    "Companies adding or changing signatories",
  ];

  const whatWeCover = [
    "Professionally drafted board resolution",
    "Follows Companies Act requirements",
    "Includes bank-specific wording (if required)",
    "Clearly authorises signatories",
    "Ready for immediate submission",
    "Guidance on signing and record-keeping procedures",
  ];

  const faqs = [
    { question: "Is a board resolution mandatory for bank account opening?", answer: "Yes, for companies, banks require a valid board resolution." },
    { question: "Can one director be authorised to operate the account?", answer: "Yes, depending on the resolution and company decision." },
    { question: "Do banks accept digitally signed resolutions?", answer: "This depends on bank policy; we align drafting accordingly." },
    { question: "Can you revise an existing resolution?", answer: "Yes, amendments or new resolutions can be prepared." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Split Layout */}
        <section className="section-padding bg-gradient-to-br from-navy/5 via-background to-teal/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <FileText className="w-4 h-4" />
                  Banking Compliance
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                  Board Resolution for Bank Account
                </h1>
                <p className="text-lg text-teal font-medium italic mb-4">
                  "Newly LLP or Private Limited Company can't Open Current Account in Banks without BR."
                </p>
                <p className="text-text-body mb-8">
                  Our Board Resolution service ensures your company has legally valid, bank-ready resolutions, so your account opening and operations happen without delays or rejections.
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
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-navy/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src={heroImage} 
                  alt="Board Resolution" 
                  className="relative rounded-2xl shadow-card w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section - Card Style */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="card-elevated border-l-4 border-teal">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  What is a Board Resolution for Bank Account?
                </h2>
                <p className="text-text-body mb-4">
                  A Board Resolution is a formal decision passed by the Board of Directors authorising: Opening of a bank account, Appointment of authorised signatories, and Operation of the bank account.
                </p>
                <p className="text-text-body">
                  Banks require a properly drafted resolution as part of their KYC and compliance process. Without this document, account opening or account operations may be delayed or denied.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Important - Icon Grid */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Why This Resolution is Important
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Authorised Access", desc: "Confirms who is authorised to operate the account" },
                { icon: FileText, title: "Clear Authority", desc: "Defines transaction authority clearly" },
                { icon: Building, title: "Dispute Protection", desc: "Protects the company from internal disputes" },
                { icon: Check, title: "Bank Compliance", desc: "Satisfies bank compliance requirements" },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
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

        {/* Who Needs - Horizontal Scroll Cards */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Who Needs a Board Resolution?
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
              {whoNeeds.map((item, index) => (
                <div key={index} className="flex-shrink-0 bg-gradient-to-br from-navy to-navy-light text-white rounded-xl p-6 min-w-[250px]">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Cover - Two Column */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  What Our Service Covers
                </h2>
                <p className="text-text-body mb-6">
                  We prepare a professionally drafted board resolution that is legally compliant and bank-ready.
                </p>
                <ul className="space-y-3">
                  {whatWeCover.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-semibold text-primary mb-4">Documents Required</h3>
                <ul className="space-y-3">
                  {["Company name and CIN", "Director details", "Bank name and branch", "Authorised signatory details"].map((doc, index) => (
                    <li key={index} className="flex items-center gap-3 p-3 bg-grey-subtle rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-teal" />
                      </div>
                      <span className="text-text-body">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Timeline & Process
              </h2>
              <div className="bg-gradient-to-r from-teal/10 via-teal/5 to-teal/10 rounded-2xl p-8">
                <div className="text-4xl font-bold text-teal mb-2">1-2 Days</div>
                <p className="text-text-body">
                  Board resolution drafting is usually completed within 1–2 working days. Our service covers drafting of the resolution only. Physical signing, stamping, or notarisation (if required) is handled as per bank instructions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs - Accordion Style */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-card">
                    <h3 className="font-semibold text-primary mb-2">{faq.question}</h3>
                    <p className="text-text-body">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary to-navy-light">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Open Your Company Bank Account Smoothly?
              </h2>
              <p className="text-white/80 mb-8">
                Say hello to hassle-free banking compliance. Our experts are ready to prepare your board resolution accurately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="text-lg">
                  Get Board Resolution Now
                  <span className="ml-2 text-sm opacity-80">₹1499 + GST</span>
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

export default BoardResolution;
