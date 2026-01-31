import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, Presentation, Target, Users, TrendingUp, Lightbulb, ArrowRight, BarChart3 } from "lucide-react";
import heroImage from "@/assets/images/pitch-deck.jpg";

const PitchDeck = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Presentation Style */}
        <section className="section-padding bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-teal/20 text-teal-light px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Presentation className="w-4 h-4" />
                  Investor Ready
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Pitch Deck for Investor
                </h1>
                <p className="text-xl text-teal-light font-medium italic mb-4">
                  "Investors don't invest in ideas alone — they invest in clarity, confidence, and numbers."
                </p>
                <p className="text-white/80 mb-8">
                  Our Pitch Deck service helps startups present their story, traction, and financials clearly, in a format that investors understand and trust.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="accent" size="lg">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Phone className="w-4 h-4 mr-2" />
                    Talk to Startup Expert
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10"></div>
                <img 
                  src={heroImage} 
                  alt="Pitch Deck" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide Preview Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
              What's in Your Pitch Deck?
            </h2>
            <p className="text-text-body text-center max-w-2xl mx-auto mb-12">
              We structure your pitch deck with all the essential slides investors expect to see.
            </p>
            <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {[
                { num: "01", title: "Business Overview", icon: Lightbulb },
                { num: "02", title: "Problem & Solution", icon: Target },
                { num: "03", title: "Market & Traction", icon: TrendingUp },
                { num: "04", title: "Revenue Model", icon: BarChart3 },
                { num: "05", title: "Funding Ask", icon: Users },
              ].map((slide, index) => (
                <div key={index} className="group">
                  <div className="aspect-[4/3] bg-gradient-to-br from-navy to-navy-light rounded-lg p-4 flex flex-col justify-between transform group-hover:scale-105 transition-transform shadow-card">
                    <span className="text-teal font-bold text-sm">{slide.num}</span>
                    <div>
                      <slide.icon className="w-6 h-6 text-white/60 mb-2" />
                      <p className="text-white text-sm font-medium">{slide.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="card-elevated">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    What is a Pitch Deck?
                  </h2>
                  <p className="text-text-body mb-4">
                    A pitch deck is a structured presentation that explains your startup's vision, product, market opportunity, business model, and financials to potential investors.
                  </p>
                  <p className="text-text-body">
                    At Hello Tax, we focus on content-first pitch decks, supported by clean design and defensible numbers.
                  </p>
                </div>
                <div className="card-elevated bg-red-50 border border-red-200">
                  <h3 className="font-bold text-red-700 mb-4">Why Most Decks Fail</h3>
                  <ul className="space-y-2">
                    {[
                      "No clear problem-solution fit",
                      "Unrealistic financials",
                      "Poor storytelling",
                      "Confusing structure",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-red-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Quality Matters */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              A Well-Prepared Pitch Deck Helps You
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Lightbulb, title: "Communicate Value", desc: "Quickly convey your worth" },
                { icon: Target, title: "Answer Confidently", desc: "Handle investor questions" },
                { icon: Users, title: "Reduce Back-and-Forth", desc: "Clear explanations upfront" },
                { icon: TrendingUp, title: "Improve Conversion", desc: "Better funding chances" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal/20 to-navy/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-teal" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Needs */}
        <section className="section-padding bg-navy text-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Who Needs a Pitch Deck?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                "Startups raising seed or growth funding",
                "Founders approaching angel investors or VCs",
                "Companies applying to accelerators",
                "Businesses seeking strategic partners",
              ].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-5 h-5 text-teal" />
                  </div>
                  <p className="text-white/90">{item}</p>
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
                Why Hello Tax for Pitch Deck Creation?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Financial Alignment", desc: "Financial slides match your model" },
                  { title: "Realistic Valuation", desc: "Valuation logic is defendable" },
                  { title: "Story-Number Sync", desc: "Story aligns with numbers" },
                  { title: "Due Diligence Ready", desc: "Deck supports investor scrutiny" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 card-elevated">
                    <div className="w-10 h-10 rounded-lg bg-teal text-white flex items-center justify-center flex-shrink-0">
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

        {/* Timeline */}
        <section className="section-padding bg-grey-subtle">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Timeline
              </h2>
              <div className="bg-gradient-to-r from-teal to-navy rounded-2xl p-8 text-white">
                <div className="text-5xl font-bold mb-2">7-10 Days</div>
                <p className="text-white/80">
                  Pitch deck creation typically takes 7–10 working days, depending on iterations. Our service covers content structuring and deck creation.
                </p>
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
                { q: "Is a pitch deck required at early stage?", a: "Yes. Even early-stage investors expect structured clarity." },
                { q: "Can you redesign an existing deck?", a: "Yes, we can restructure and improve existing decks." },
                { q: "Will you help with financial slides?", a: "Yes, financial slides are a core part of our service." },
                { q: "Do you guarantee funding?", a: "No, but a strong deck significantly improves your chances." },
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
        <section className="section-padding bg-gradient-to-r from-teal via-teal to-navy">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Pitch Your Startup to Investors?
              </h2>
              <p className="text-white/80 mb-8">
                Get a pitch deck you can confidently present and share.
              </p>
              <Button variant="accent" size="lg" className="text-lg bg-white text-navy hover:bg-white/90">
                Start Pitch Deck Creation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PitchDeck;
