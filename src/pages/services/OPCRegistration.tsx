import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Gift,
  FileText,
  Building2,
  Briefcase,
  Award,
  TrendingUp,
  HelpCircle,
  Zap
} from "lucide-react";
import opcImage from "@/assets/images/opc-registration.jpg";

const OPCRegistration = () => {
  const benefits = [
    { icon: Building2, title: "Separate legal entity", desc: "Distinct from owner" },
    { icon: Shield, title: "Limited liability protection", desc: "Personal assets protected" },
    { icon: User, title: "Single ownership & control", desc: "Complete authority" },
    { icon: Award, title: "Higher credibility", desc: "Than proprietorship" },
    { icon: TrendingUp, title: "Easy conversion", desc: "To Private Limited later" },
  ];

  const whoShouldChoose = [
    "Solo founders starting a formal business",
    "Professionals & consultants",
    "Freelancers planning structured growth",
    "Business owners wanting limited liability",
    "Founders not planning immediate funding",
  ];

  const documents = {
    director: ["PAN Card", "Aadhaar Card", "Address proof", "Email & mobile number"],
    office: ["Address proof", "Utility bill", "NOC from owner (if rented)"],
  };

  const steps = [
    { title: "Understand your business model", desc: "We analyze your needs" },
    { title: "Confirm OPC eligibility", desc: "Check suitability" },
    { title: "Document collection", desc: "Verify all papers" },
    { title: "OPC incorporation filing", desc: "Submit to MCA" },
    { title: "Certificate issued", desc: "You're incorporated!" },
  ];

  const faqs = [
    { q: "Can an OPC have only one director?", a: "Yes, one person can be both director and shareholder." },
    { q: "Can OPC be converted to Private Limited?", a: "Yes, OPC can be converted when business grows or conditions are met." },
    { q: "Is OPC suitable for funded startups?", a: "No, investors usually prefer Private Limited companies." },
    { q: "Is OPC better than proprietorship?", a: "Yes, OPC provides limited liability and corporate identity." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero - Spotlight Design for Solo Founder */}
        <section className="relative bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />
          </div>
          
          <div className="section-container relative z-10 py-16 lg:py-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <User className="w-4 h-4 text-accent" />
                <span className="text-sm text-white">Solo Entrepreneur</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                OPC Registration
              </h1>
              
              <p className="text-xl text-accent mb-4">
                One Person Company
              </p>
              
              <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                "Solo founder, but want corporate credibility? OPC gives you structure without partners."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="accent" className="text-base">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Talk to Startup Expert
                </Button>
              </div>
            </div>
            
            {/* Centered Image with Glow */}
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-accent/30 rounded-2xl blur-xl" />
              <img 
                src={opcImage} 
                alt="OPC Registration - Solo Entrepreneur" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </section>

        {/* What is OPC - Timeline Style */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                What is an OPC?
              </h2>
              
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/30 hidden md:block" />
                
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                      <h3 className="text-xl font-bold text-primary mb-2">Companies Act, 2013</h3>
                      <p className="text-text-body">
                        A company structure designed for single founders who want limited liability and corporate identity.
                      </p>
                    </div>
                    <div className="hidden md:flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="hidden md:flex justify-center order-1">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="md:order-2">
                      <h3 className="text-xl font-bold text-primary mb-2">One Person, Full Control</h3>
                      <p className="text-text-body">
                        OPC allows one person to be both shareholder and director, while enjoying all benefits of a company structure.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                      <h3 className="text-xl font-bold text-primary mb-2">Perfect Bridge</h3>
                      <p className="text-text-body">
                        OPC is a bridge between proprietorship and Private Limited Company — offering the best of both worlds.
                      </p>
                    </div>
                    <div className="hidden md:flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Choose - Radial Layout */}
        <section className="py-16 lg:py-24 bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Who Should Choose an OPC?
            </h2>
            <p className="text-text-body text-center mb-12 max-w-2xl mx-auto">
              If you plan VC funding or multiple shareholders soon, Private Limited may be more suitable.
            </p>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {whoShouldChoose.map((item, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-xl p-5 border border-grey-divider hover:border-accent transition-colors ${
                      index === 2 ? 'lg:col-span-1 sm:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    <CheckCircle className="w-5 h-5 text-accent mb-3" />
                    <p className="text-text-body text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits - Icon Grid */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Key Benefits of OPC
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-primary mb-1">{benefit.title}</h3>
                    <p className="text-sm text-text-body">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing - Centered with Side Info */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Documents Left */}
              <div className="text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  For Director / Shareholder
                </h3>
                <ul className="space-y-3">
                  {documents.director.map((doc, index) => (
                    <li key={index} className="flex items-center gap-2 text-white/80">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Pricing Center */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-primary text-center mb-2">OPC Company Registration</h3>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-4xl font-bold text-accent">₹10,500</span>
                  <span className="text-text-body">+ GST</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {[
                    "Name approval",
                    "DSC & DIN",
                    "MOA & AOA drafting",
                    "OPC incorporation with MCA",
                    "PAN & TAN application",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-body text-sm">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <p className="text-xs text-text-body text-center mb-4">*Govt Fees Excluded</p>
                
                <div className="flex items-center justify-center gap-2 text-sm text-text-body mb-6">
                  <Clock className="w-4 h-4" />
                  <span>10 to 20 working days</span>
                </div>
                
                <div className="p-3 bg-accent/10 rounded-lg mb-6">
                  <div className="flex items-center justify-center gap-2 text-accent text-sm">
                    <Gift className="w-4 h-4" />
                    <span>Free HelloTax Client Pool Membership</span>
                  </div>
                </div>
                
                <Button variant="accent" className="w-full">
                  Get Started
                </Button>
              </div>
              
              {/* Documents Right */}
              <div className="text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-accent" />
                  For Registered Office
                </h3>
                <ul className="space-y-3">
                  {documents.office.map((doc, index) => (
                    <li key={index} className="flex items-center gap-2 text-white/80">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Horizontal Steps */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">How It Works</h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    {index < steps.length - 1 && (
                      <div className="hidden sm:block absolute top-6 left-1/2 w-full h-px bg-accent/30" />
                    )}
                    <div className="relative bg-white rounded-xl p-4 border border-grey-divider text-center">
                      <div className="w-12 h-12 rounded-full bg-accent text-white font-bold flex items-center justify-center mx-auto mb-3">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-primary text-sm mb-1">{step.title}</h4>
                      <p className="text-xs text-text-body">{step.desc}</p>
                    </div>
                  </div>
                ))}
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
              Ready to Register Your OPC Company?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Say hello to structured solo entrepreneurship. Our experts are ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-white/90">
                Register OPC Company Now
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

export default OPCRegistration;
