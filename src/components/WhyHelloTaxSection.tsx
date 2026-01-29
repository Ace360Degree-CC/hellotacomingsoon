import { Shield, Users, Clock, Award, Headphones, FileCheck } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Advisory-First Approach",
    description: "We don't just file paperwork. We understand your business first, then recommend the optimal structure and compliance strategy."
  },
  {
    icon: Users,
    title: "CA-Led Expert Team",
    description: "Every client gets access to qualified Chartered Accountants who understand both tax law and startup dynamics."
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Company incorporation in as fast as 7 working days. We respect your time and move at startup speed."
  },
  {
    icon: Award,
    title: "End-to-End Support",
    description: "From name approval to bank account opening, PAN, TAN, GST — we handle every step of the process."
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "WhatsApp, email, or call — reach your dedicated relationship manager whenever you need assistance."
  },
  {
    icon: FileCheck,
    title: "Compliance Calendar",
    description: "Never miss a filing deadline. We proactively remind you and handle all recurring compliance requirements."
  }
];

const WhyHelloTaxSection = () => {
  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Why <span className="text-accent">HelloTax</span>?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            We're not a document filing factory. We're your strategic compliance partner, invested in your startup's success from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-5">
                <value.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">{value.title}</h3>
              <p className="text-primary-foreground/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHelloTaxSection;
