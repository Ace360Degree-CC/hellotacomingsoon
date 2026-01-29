import { BookOpen, Shield, TrendingUp } from "lucide-react";

const WhatIsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What is <span className="text-accent">Startup Formation?</span>
          </h2>
          <p className="text-lg text-text-body">
            Startup formation is more than just registration — it's the strategic foundation that determines how your business operates, raises funds, pays taxes, and eventually exits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Legal Structure",
              description: "Choose between Private Limited, LLP, OPC, Partnership, Sole Proprietorship, or HUF based on your business goals and investor expectations."
            },
            {
              icon: Shield,
              title: "Compliance Foundation",
              description: "Set up proper books, statutory registrations, and compliance calendars from day one to avoid penalties and build investor trust."
            },
            {
              icon: TrendingUp,
              title: "Growth Ready",
              description: "Structure your company for future funding rounds, ESOP pools, and potential exits — decisions that become costly to change later."
            }
          ].map((item, index) => (
            <div key={index} className="card-elevated group">
              <div className="icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-text-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
