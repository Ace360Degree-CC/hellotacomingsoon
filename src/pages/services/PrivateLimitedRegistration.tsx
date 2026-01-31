import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Gift,
  FileText,
  Building2,
  Users,
  TrendingUp,
  Rocket,
  Target,
  Award,
  HelpCircle,
  Briefcase
} from "lucide-react";
import privateLtdImage from "@/assets/images/private-limited.jpg";

const PrivateLimitedRegistration = () => {
  const benefits = [
    { icon: Shield, text: "Limited liability protection" },
    { icon: Building, text: "Separate legal identity" },
    { icon: TrendingUp, text: "Easy fundraising & share transfers" },
    { icon: Award, text: "Higher credibility with banks & clients" },
    { icon: Target, text: "Structured governance & compliance" },
  ];

  const whoShouldChoose = [
    { icon: Rocket, title: "Startups planning VC / Angel funding" },
    { icon: Briefcase, title: "Tech & innovation-driven businesses" },
    { icon: TrendingUp, title: "Founders planning long-term scalability" },
    { icon: Users, title: "Businesses planning equity sharing" },
    { icon: Target, title: "Startups targeting acquisition or exit" },
  ];

  const inclusions = [
    "Name availability & approval",
    "DSC & DIN for directors",
    "MOA & AOA drafting",
    "Incorporation with MCA",
    "PAN & TAN application",
    "Company incorporation certificate",
  ];

  const steps = [
    "Understand your business & goals",
    "Structure & shareholding guidance",
    "Document collection & verification",
    "Company incorporation filing",
    "Certificate of Incorporation issued",
  ];

  const faqs = [
    { q: "Is Private Limited mandatory for startups?", a: "No, but it is strongly recommended for funded or scalable businesses." },
    { q: "How many directors are required?", a: "Minimum 2 directors and 2 shareholders (can be the same persons)." },
    { q: "Can shares be transferred later?", a: "Yes, shares can be transferred with board approval." },
    { q: "What's the minimum capital required?", a: "There is no minimum capital requirement for Private Limited Company." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero - Corporate Investor-Ready Design */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={privateLtdImage} 
              alt="Private Limited Company" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
          </div>
          
          <div className="section-container relative z-10 py-20 lg:py-32">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-6">
                <Building className="w-4 h-4 text-white" />
                <span className="text-sm text-white font-medium">Investor-Ready Structure</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Private Limited Company Registration
              </h1>
              
              <p className="text-xl text-white/90 mb-4 font-medium">
                "If you want funding, scalability, and a clean exit — Private Limited is the structure investors trust."
              </p>
              
              <p className="text-lg text-white/70 mb-8">
                Formation is the first signal you send to investors — send the right one.
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

        {/* What is Pvt Ltd - Stats Style */}
        <section className="py-16 lg:py-24 bg-grey-subtle">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What is a Private Limited Company?
              </h2>
              <p className="text-lg text-text-body leading-relaxed">
                A Private Limited Company (Pvt Ltd) is a separate legal entity registered under the Companies Act, 2013. It offers limited liability, higher credibility, and is the preferred structure for startups planning funding, scalability, or long-term growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-8 text-center border border-grey-divider">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Trusted by Investors</h3>
                <p className="text-text-body text-sm">VCs, Angels, and Banks prefer this structure</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center border border-grey-divider">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Clear Governance</h3>
                <p className="text-text-body text-sm">Ownership & governance well defined</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center border border-grey-divider">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Smooth Exit</h3>
                <p className="text-text-body text-sm">Equity dilution & exit made easy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Choose */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Who Should Choose a Private Limited Company?
            </h2>
            <p className="text-accent text-center mb-12 font-medium">
              If funding or scale is your goal, this structure is usually non-negotiable.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {whoShouldChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-primary rounded-xl p-6 text-center text-white hover:bg-primary/90 transition-colors">
                    <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="py-12 bg-accent">
          <div className="section-container">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Key Benefits</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full">
                    <Icon className="w-5 h-5 text-white" />
                    <span className="text-white text-sm font-medium">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing - Premium Card */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 lg:p-12 shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <div className="inline-flex items-center gap-2 bg-accent/20 px-3 py-1 rounded-full mb-4">
                      <span className="text-xs text-accent font-medium">RECOMMENDED</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Private Limited Company Registration</h3>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-5xl font-bold">₹15,000</span>
                      <span className="text-white/70">+ GST</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white/80 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>10 to 20 working days (subject to approvals)</span>
                    </div>
                    
                    <p className="text-xs text-white/60 mb-6">*Excl. Govt Fees</p>
                    
                    <div className="p-3 bg-accent/20 rounded-lg mb-6">
                      <div className="flex items-center gap-2 text-accent">
                        <Gift className="w-4 h-4" />
                        <span className="text-sm font-medium">Free HelloTax Client Pool Membership</span>
                      </div>
                    </div>
                    
                    <Button size="lg" variant="accent" className="w-full sm:w-auto">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6">
                    <h4 className="font-semibold text-primary mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {inclusions.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-text-body">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Required - Two Column */}
        <section className="py-16 lg:py-24 bg-grey-subtle">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Documents Required</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-grey-divider">
                <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  For Directors / Shareholders
                </h3>
                <ul className="space-y-3">
                  {["PAN Card", "Aadhaar Card", "Address proof", "Email & mobile number"].map((doc, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-body">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-grey-divider">
                <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-accent" />
                  For Registered Office
                </h3>
                <ul className="space-y-3">
                  {["Address proof", "Utility bill", "NOC from owner (if rented)"].map((doc, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-body">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-text-body italic">All documents must be clear and valid.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Numbered Steps */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">How It Works</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />
                
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-accent text-white font-bold flex items-center justify-center flex-shrink-0 relative z-10">
                        {index + 1}
                      </div>
                      <div className="flex-1 bg-grey-subtle rounded-xl p-4">
                        <p className="text-text-body">{step}</p>
                      </div>
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
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
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
              Ready to Register Your Private Limited Company?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Say hello to investor-ready structure. Our experts are ready to assist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent">
                Register Pvt Ltd Now
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

export default PrivateLimitedRegistration;
