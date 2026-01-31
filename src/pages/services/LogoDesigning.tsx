import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, Palette, Layers, Eye, Smartphone, FileImage, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/images/logo-designing.jpg";

const LogoDesigning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Creative/Visual Focus */}
        <section className="section-padding bg-gradient-to-br from-teal/10 via-background to-navy/10">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={heroImage} 
                  alt="Logo Designing" 
                  className="rounded-2xl shadow-card w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Palette className="w-4 h-4" />
                  Brand Identity
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                  Logo Designing
                </h1>
                <p className="text-lg text-teal font-medium italic mb-4">
                  "Your logo should evoke a 'wow' feeling, as a great logo builds trust with your customers."
                </p>
                <p className="text-text-body mb-8">
                  Our Logo Designing service helps startups create a clean, professional, and trustworthy visual identity, aligned with their business vision, audience, and growth plans.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="hero-outline" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Talk to Brand Expert
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Matters - Visual Cards */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
              Why Logo Designing Matters for Startups
            </h2>
            <p className="text-text-body text-center max-w-2xl mx-auto mb-12">
              Your logo is often the first interaction people have with your brand — on your website, invoices, social media, pitch decks, and legal documents.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-4 rotate-3">
                  <span className="text-3xl">😟</span>
                </div>
                <h3 className="font-semibold text-red-600 mb-2">Poor Logo</h3>
                <p className="text-sm text-text-body">Reduces credibility, confuses customers, looks unprofessional</p>
              </div>
              <div className="text-center transform -translate-y-4">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal to-navy flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-teal mb-2">Great Logo</h3>
                <p className="text-sm text-text-body">Simple, scalable, meaningful, builds trust</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-grey-subtle flex items-center justify-center mx-auto mb-4 -rotate-3">
                  <span className="text-3xl">🤔</span>
                </div>
                <h3 className="font-semibold text-text-body mb-2">No Logo</h3>
                <p className="text-sm text-text-body">Invisible brand, missed opportunities, forgettable</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Receive - Portfolio Style */}
        <section className="section-padding bg-navy text-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What You Receive
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: FileImage, title: "High-Quality Files", desc: "All formats included" },
                { icon: Smartphone, title: "Multi-Platform", desc: "Website, social, print" },
                { icon: Layers, title: "Scalable Design", desc: "Works at any size" },
                { icon: Eye, title: "Complete Kit", desc: "Ready for branding" },
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-teal/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Opt */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              Who Should Opt for Logo Designing?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {[
                "Newly registered startups",
                "Founders launching a new brand",
                "Businesses rebranding",
                "Companies preparing investor material",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-gradient-to-r from-teal/10 to-navy/10 px-6 py-3 rounded-full">
                  <Check className="w-5 h-5 text-teal" />
                  <span className="text-text-body font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-teal font-medium mt-8">
              If you're serious about building a brand, logo design is not optional.
            </p>
          </div>
        </section>

        {/* Why HelloTax */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
                Why Hello Tax for Logo Designing?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Business Alignment", desc: "Design aligned with your business goals" },
                  { title: "Startup-Friendly", desc: "Clean, modern approach for new businesses" },
                  { title: "Multi-Purpose Files", desc: "Suitable for legal, digital, and marketing use" },
                  { title: "Credibility Focus", desc: "Logos that support trust, not just aesthetics" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-card">
                    <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5" />
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

        {/* How It Works */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              How It Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Understand", desc: "Your vision & preferences" },
                  { step: "2", title: "Create", desc: "Initial concepts" },
                  { step: "3", title: "Refine", desc: "Incorporate feedback" },
                  { step: "4", title: "Deliver", desc: "Final files" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
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

        {/* Timeline */}
        <section className="section-padding bg-gradient-to-r from-teal/10 to-navy/10">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Timeline & Revisions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-elevated">
                  <div className="text-4xl font-bold text-teal mb-2">5-7 Days</div>
                  <p className="text-text-body">Typical completion time</p>
                </div>
                <div className="card-elevated">
                  <div className="text-4xl font-bold text-navy mb-2">5 Revisions</div>
                  <p className="text-text-body">Included in the package</p>
                </div>
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
                { q: "Will I get multiple design options?", a: "Yes, initial concepts are shared before finalisation." },
                { q: "Can I request revisions?", a: "Yes, up to 5 revisions are included within the defined scope." },
                { q: "Will the logo work on all platforms?", a: "Yes, logos are designed to be scalable and versatile." },
                { q: "Is trademark registration included?", a: "No, but it can be added separately." },
              ].map((faq, index) => (
                <div key={index} className="bg-grey-subtle rounded-xl p-6">
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
                Ready to Create a Strong Brand Identity?
              </h2>
              <p className="text-white/80 mb-8">
                Say hello to a logo that represents your startup professionally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="text-lg">
                  Start Logo Designing
                  <span className="ml-2 text-sm opacity-80">₹12,999 + GST</span>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Phone className="w-4 h-4 mr-2" />
                  Talk to Brand Expert
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

export default LogoDesigning;
