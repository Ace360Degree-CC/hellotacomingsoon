import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Handshake, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Gift,
  FileText,
  Building2,
  Users,
  Scale,
  Briefcase,
  HelpCircle
} from "lucide-react";
import llpImage from "@/assets/images/llp-registration.jpg";

const LLPRegistration = () => {
  const benefits = [
    "Limited liability for partners",
    "Separate legal identity",
    "Lower compliance than Pvt Ltd",
    "Flexible profit-sharing",
    "No minimum capital requirement",
  ];

  const whoShouldChoose = [
    { title: "Professional firms", desc: "CA, CS, Consultants" },
    { title: "Service-based businesses", desc: "IT, Marketing, Design" },
    { title: "Startups not planning immediate funding", desc: "Bootstrapped ventures" },
    { title: "Family businesses", desc: "Multiple partners" },
    { title: "MSMEs", desc: "Wanting limited liability" },
  ];

  const partnersDocuments = [
    "PAN Card",
    "Aadhaar Card",
    "Address proof",
    "Email & mobile number",
  ];

  const officeDocuments = [
    "Address proof",
    "Utility bill",
    "NOC from owner (if rented)",
  ];

  const steps = [
    "Understand your business model",
    "Confirm LLP suitability",
    "Document collection & verification",
    "LLP incorporation filing",
    "Certificate of Incorporation issued",
  ];

  const faqs = [
    { q: "How many partners are required for LLP?", a: "Minimum 2 partners are required." },
    { q: "Is LLP better than Private Limited?", a: "It depends on funding and growth plans." },
    { q: "Is LLP suitable for startups?", a: "Yes, for service-based or bootstrapped startups." },
    { q: "Can LLP be converted to Private Limited?", a: "Yes, conversion is possible with proper compliance." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero - Diagonal Split Design */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-primary" />
          <div 
            className="absolute right-0 top-0 w-1/2 h-full hidden lg:block"
            style={{
              backgroundImage: `url(${llpImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
            }}
          >
            <div className="absolute inset-0 bg-primary/30" />
          </div>
          
          <div className="section-container relative z-10">
            <div className="max-w-xl py-16 lg:py-24">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Handshake className="w-4 h-4 text-accent" />
                <span className="text-sm text-white">Partnership with Protection</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                LLP Registration
              </h1>
              
              <p className="text-xl text-white/80 mb-4">
                Limited Liability Partnership
              </p>
              
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                "Want limited liability without the heavy compliance of a company? LLP gives you balance."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="accent" className="text-base">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Talk to Startup Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is LLP - Full Width Card */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="bg-gradient-to-r from-grey-subtle to-white rounded-3xl p-8 lg:p-12 border border-grey-divider">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    What is an LLP?
                  </h2>
                  <p className="text-text-body leading-relaxed mb-6">
                    A Limited Liability Partnership (LLP) is a hybrid structure combining the <strong>flexibility of a partnership</strong> and <strong>limited liability of a company</strong>.
                  </p>
                  <p className="text-text-body leading-relaxed">
                    Registered under the LLP Act, 2008, LLP is ideal for businesses that want credibility and protection, but with lower compliance compared to a Private Limited Company.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                    <Scale className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="font-medium text-primary">Flexibility</p>
                    <p className="text-sm text-text-body">Like Partnership</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                    <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="font-medium text-primary">Protection</p>
                    <p className="text-sm text-text-body">Like Company</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm text-center col-span-2">
                    <Building2 className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="font-medium text-primary">LLP Act, 2008</p>
                    <p className="text-sm text-text-body">Registered & Recognised</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Choose - Horizontal Cards */}
        <section className="py-16 lg:py-24 bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Who Should Choose an LLP?
            </h2>
            <p className="text-text-body text-center mb-12 max-w-2xl mx-auto">
              If you plan VC funding or equity dilution, Private Limited is usually better.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {whoShouldChoose.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-5 border border-grey-divider hover:border-accent/30 hover:shadow-md transition-all">
                  <Briefcase className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-semibold text-primary text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-text-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits - Horizontal Strip */}
        <section className="py-12 bg-accent">
          <div className="section-container">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Key Benefits of LLP</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            <p className="text-white/70 text-center mt-6 text-sm">
              LLP is ideal for steady growth, not aggressive funding.
            </p>
          </div>
        </section>

        {/* Pricing - Asymmetric Layout */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Pricing Card */}
              <div className="lg:col-span-1">
                <div className="bg-primary rounded-2xl p-8 text-white sticky top-24">
                  <h3 className="text-xl font-bold mb-4">LLP Registration</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold">₹10,500</span>
                    <span className="text-white/70">+ GST</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      "Name approval",
                      "DSC for partners",
                      "LLP Agreement drafting",
                      "LLP incorporation with MCA",
                      "PAN & TAN application",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-white/90 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-xs text-white/60 mb-4">*Govt Fees not included</p>
                  
                  <div className="flex items-center gap-2 text-sm text-white/80 mb-6">
                    <Clock className="w-4 h-4" />
                    <span>10 to 20 working days</span>
                  </div>
                  
                  <div className="p-3 bg-accent/20 rounded-lg mb-6">
                    <div className="flex items-center gap-2 text-accent text-sm">
                      <Gift className="w-4 h-4" />
                      <span>Free HelloTax Client Pool Membership</span>
                    </div>
                  </div>
                  
                  <Button variant="accent" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
              
              {/* Documents & Process */}
              <div className="lg:col-span-2 space-y-8">
                {/* Documents */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-grey-subtle rounded-xl p-6">
                    <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-accent" />
                      For Partners
                    </h4>
                    <ul className="space-y-2">
                      {partnersDocuments.map((doc, index) => (
                        <li key={index} className="flex items-center gap-2 text-text-body text-sm">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-grey-subtle rounded-xl p-6">
                    <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-accent" />
                      For Registered Office
                    </h4>
                    <ul className="space-y-2">
                      {officeDocuments.map((doc, index) => (
                        <li key={index} className="flex items-center gap-2 text-text-body text-sm">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Process Steps */}
                <div className="bg-white rounded-xl p-6 border border-grey-divider">
                  <h4 className="font-semibold text-primary mb-6">How It Works</h4>
                  <div className="space-y-4">
                    {steps.map((step, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1 h-px bg-grey-divider hidden sm:block" />
                        <span className="text-text-body text-sm flex-shrink-0">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs - Alternating Layout */}
        <section className="py-16 lg:py-24 bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-grey-divider">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary mb-2 text-sm">{faq.q}</h4>
                      <p className="text-text-body text-sm">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Register Your LLP?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Say hello to balanced business structure. Our experts are ready to assist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent">
                Register LLP Now
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

export default LLPRegistration;
