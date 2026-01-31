import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  User, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Gift,
  FileText,
  Zap,
  DollarSign,
  Settings,
  ShieldCheck,
  HelpCircle,
  Store,
  Sparkles
} from "lucide-react";
import soleImage from "@/assets/images/sole-proprietorship.jpg";

const SoleProprietorship = () => {
  const benefits = [
    { icon: Zap, title: "Quick & easy to start" },
    { icon: ShieldCheck, title: "Minimal compliance" },
    { icon: User, title: "Full control & ownership" },
    { icon: DollarSign, title: "Low setup cost" },
    { icon: FileText, title: "Simple tax filing" },
  ];

  const whoShouldChoose = [
    "Freelancers & consultants",
    "Small traders & shop owners",
    "Local service providers",
    "First-time business owners",
    "Businesses with low compliance needs",
  ];

  const documents = [
    "PAN Card",
    "Aadhaar Card",
    "Address proof",
    "Business address proof",
    "Bank account details",
  ];

  const steps = [
    { num: 1, title: "Understand your business activity" },
    { num: 2, title: "Identify required registrations" },
    { num: 3, title: "Document verification" },
    { num: 4, title: "Registration & setup" },
    { num: 5, title: "Compliance guidance provided" },
  ];

  const addOns = [
    "GST Registration",
    "MSME / Udyam Certificate",
    "Maharashtra Gumasta",
    "Accounting & Bookkeeping",
  ];

  const faqs = [
    { q: "Is sole proprietorship registration mandatory?", a: "There is no central registration, but local and tax registrations are required." },
    { q: "Can proprietorship be converted later?", a: "Yes, it can be converted to LLP or Private Limited." },
    { q: "Is proprietorship suitable for large businesses?", a: "No, due to unlimited liability." },
    { q: "Do I need GST for proprietorship?", a: "Depends on turnover and business activity." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero - Simple & Clean for Simplicity Theme */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-grey-subtle to-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                  <Store className="w-4 h-4 text-accent" />
                  <span className="text-sm text-accent font-medium">Simple & Quick</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                  Sole Proprietorship Registration
                </h1>
                
                <p className="text-xl text-text-body mb-4">
                  "Single owner, full control — but compliance should still be done right."
                </p>
                
                <p className="text-lg text-text-body/70 mb-8">
                  The simplest form of business structure, owned and managed by one individual.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="accent" className="text-base">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-base">
                    Talk to Startup Expert
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/10 rounded-3xl" />
                <img 
                  src={soleImage} 
                  alt="Sole Proprietorship - Simple Business" 
                  className="relative rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is Sole Proprietorship - Simple Explanation */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What is a Sole Proprietorship?
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-8">
                A Sole Proprietorship is the simplest form of business structure, owned and managed by one individual. There is no separate legal entity — the owner and business are the same. It is ideal for small businesses, freelancers, and local service providers.
              </p>
              
              <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-accent font-medium">At Hello Tax, we ensure your proprietorship is properly established through valid registrations.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Choose - Simple List */}
        <section className="py-16 lg:py-24 bg-grey-subtle">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                  Who Should Choose a Sole Proprietorship?
                </h2>
                
                <div className="space-y-4">
                  {whoShouldChoose.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-text-body">{item}</span>
                    </div>
                  ))}
                </div>
                
                <p className="mt-6 text-sm text-text-body italic bg-white/50 p-4 rounded-lg border-l-4 border-accent">
                  If business risk or scale increases, LLP or Private Limited may be safer.
                </p>
              </div>
              
              {/* Benefits Grid */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Key Benefits</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
                        <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                        <p className="text-sm text-primary font-medium">{benefit.title}</p>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 text-sm text-text-body italic text-center">
                  Simple doesn't mean careless — compliance still matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing - Most Affordable Option */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-grey-divider">
                {/* Header */}
                <div className="bg-accent p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Sole Proprietorship Setup</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-white">₹5,000</span>
                    <span className="text-white/80">+ GST</span>
                  </div>
                  <p className="text-white/70 text-sm mt-2">Most affordable business setup</p>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included</h4>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Business setup guidance",
                      "GST / MSME / Gumasta intimation support (as applicable)",
                      "PAN-linked compliance alignment",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-body">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-center gap-4 py-4 border-t border-b border-grey-divider mb-6">
                    <div className="flex items-center gap-2 text-text-body">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-sm">3 to 7 working days</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-accent/10 rounded-xl mb-6">
                    <div className="flex items-center justify-center gap-2 text-accent">
                      <Gift className="w-5 h-5" />
                      <span className="font-medium">Free HelloTax Client Pool Membership</span>
                    </div>
                  </div>
                  
                  <Button variant="accent" size="lg" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents & Process */}
        <section className="py-16 lg:py-24 bg-primary text-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Documents */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-accent" />
                  Documents Required
                </h3>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-white/90">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-accent" />
                  How It Works
                </h3>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent text-white font-bold flex items-center justify-center">
                        {step.num}
                      </div>
                      <span className="text-white/90">{step.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Important Notes */}
            <div className="mt-12 p-6 bg-white/10 rounded-xl">
              <h4 className="font-semibold text-accent mb-3">Important Notes</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Proprietorship has unlimited liability</li>
                <li>• Registrations depend on nature of business</li>
                <li>• Our fees cover setup guidance and registrations opted</li>
                <li>• Accounting, GST filings, and tax returns are separate services</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Add-On Services */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-primary text-center mb-4">
              Add-On Services (Optional)
            </h2>
            <p className="text-text-body text-center mb-8">
              Available during checkout — everything under one roof
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="flex items-center gap-2 bg-grey-subtle px-5 py-3 rounded-full border border-grey-divider">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-text-body">{addon}</span>
                </div>
              ))}
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
              Ready to Start Your Sole Proprietorship?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Say hello to simple and compliant business setup. Our experts are ready to assist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-white/90">
                Start Sole Proprietorship Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Talk to a Startup Expert
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SoleProprietorship;
