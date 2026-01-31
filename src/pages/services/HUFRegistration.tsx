import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  FileText, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  IndianRupee,
  Clock,
  Gift,
  Home,
  Heart,
  Scale,
  HelpCircle
} from "lucide-react";
import hufImage from "@/assets/images/huf-registration.jpg";

const HUFRegistration = () => {
  const benefits = [
    { text: "Separate PAN & tax identity", icon: FileText },
    { text: "Additional basic tax exemption", icon: IndianRupee },
    { text: "Better tax planning for family income", icon: Scale },
    { text: "Asset holding & succession clarity", icon: Home },
    { text: "Recognised by Income Tax Department", icon: Shield },
  ];

  const whoShouldCreate = [
    "Families with inherited or joint assets",
    "Families planning long-term tax optimisation",
    "Individuals with ancestral property income",
    "Families receiving gifts or investments collectively",
  ];

  const documents = [
    "PAN & Aadhaar of Karta",
    "Address proof",
    "Details of family members",
    "Source of initial capital / assets",
  ];

  const steps = [
    { step: 1, title: "Evaluate HUF suitability" },
    { step: 2, title: "Draft HUF deed" },
    { step: 3, title: "Apply for HUF PAN" },
    { step: 4, title: "Bank account setup" },
    { step: 5, title: "Compliance guidance provided" },
  ];

  const faqs = [
    {
      q: "Is HUF mandatory?",
      a: "No, HUF is optional and used mainly for tax planning.",
    },
    {
      q: "Can salaried income be routed through HUF?",
      a: "No. Only family or ancestral income can belong to HUF.",
    },
    {
      q: "Who can be the Karta?",
      a: "Typically the senior-most family member.",
    },
    {
      q: "Does HUF need GST registration?",
      a: "Only if HUF carries on a business crossing GST limits.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section - Split Layout with Family Focus */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Heart className="w-4 h-4 text-accent" />
                  <span className="text-sm text-white/90">Family Tax Planning</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  HUF (Hindu Undivided Family) Registration
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  "Family income deserves smart tax planning — HUF creates a separate tax identity."
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="accent" className="text-base">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-base bg-white/10 text-white border-white/30 hover:bg-white/20">
                    Talk to Tax Expert
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={hufImage} 
                    alt="HUF Registration - Family Tax Planning" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is HUF Section - Card Based */}
        <section className="py-16 lg:py-24 bg-grey-subtle">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  What is an HUF?
                </h2>
                <p className="text-lg text-text-body">
                  A separate tax entity recognised under the Income Tax Act
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-grey-divider">
                <p className="text-text-body leading-relaxed mb-6">
                  An HUF is a separate tax entity recognised under the Income Tax Act. The Karta manages the HUF on behalf of family members (coparceners).
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-xl bg-grey-subtle">
                    <Home className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="font-medium text-primary">Hold assets collectively</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-grey-subtle">
                    <IndianRupee className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="font-medium text-primary">Earn income separately</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-grey-subtle">
                    <FileText className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="font-medium text-primary">File separate ITR</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
                  <p className="text-sm text-text-body">
                    <strong className="text-primary">At Hello Tax</strong>, we first assess whether HUF actually benefits you — because HUF is a tax-planning tool, not a business structure for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Create + Benefits - Two Column */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Who Should Create */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Who Should Create an HUF?
                </h2>
                <div className="space-y-4">
                  {whoShouldCreate.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-grey-subtle">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-body">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-text-body italic">
                  If there is no separate family income, HUF may not add value.
                </p>
              </div>
              
              {/* Benefits */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Key Benefits of HUF
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-grey-divider bg-white hover:border-accent/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="font-medium text-primary">{benefit.text}</span>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-6 text-sm text-text-body italic">
                  HUF works best when income is genuinely family-based.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Centered Card */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="section-container">
            <div className="max-w-lg mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">HUF Registration & Setup</h3>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-4xl font-bold text-accent">₹10,500</span>
                  <span className="text-text-body">+ GST</span>
                </div>
                
                <ul className="text-left space-y-3 mb-6">
                  {[
                    "HUF deed drafting",
                    "Gift deed drafting",
                    "Digital Signature",
                    "PAN application for HUF",
                    "Bank account opening guidance",
                    "Initial tax compliance guidance",
                    "Legal Cost also included",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-body">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-center gap-2 text-sm text-text-body mb-6">
                  <Clock className="w-4 h-4" />
                  <span>5 to 7 working days</span>
                </div>
                
                <div className="p-3 bg-accent/10 rounded-lg mb-6">
                  <div className="flex items-center justify-center gap-2 text-accent">
                    <Gift className="w-4 h-4" />
                    <span className="text-sm font-medium">Free HelloTax Client Pool Membership</span>
                  </div>
                </div>
                
                <Button variant="accent" size="lg" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Documents & Process - Side by Side */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Documents */}
              <div className="bg-grey-subtle rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  Documents Required
                </h3>
                <ul className="space-y-4">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">
                        {index + 1}
                      </div>
                      <span className="text-text-body">{doc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-text-body italic">
                  Documentation must clearly establish family lineage.
                </p>
              </div>
              
              {/* Process */}
              <div className="bg-white rounded-2xl p-8 border border-grey-divider">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  How It Works
                </h3>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      <span className="text-text-body">{step.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24 bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-grey-divider">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{faq.q}</h4>
                      <p className="text-text-body">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-accent">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your HUF?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Say hello to structured family tax planning. Our experts are ready to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-white/90">
                Create HUF Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Talk to a Tax Expert
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HUFRegistration;
