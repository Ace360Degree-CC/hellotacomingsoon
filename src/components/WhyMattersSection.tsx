import { Check } from "lucide-react";

const reasons = [
  {
    title: "Tax Efficiency",
    description: "Different structures have vastly different tax implications. The right choice can save lakhs annually."
  },
  {
    title: "Funding Readiness",
    description: "VCs and angels prefer Private Limited companies. LLPs cannot issue equity — limiting your fundraising options."
  },
  {
    title: "Liability Protection",
    description: "Separate your personal assets from business risks. Essential when scaling or taking external investments."
  },
  {
    title: "Compliance Burden",
    description: "From nil to extensive — each structure has different annual filing requirements and costs."
  },
  {
    title: "Exit Flexibility",
    description: "Planning an acquisition or IPO? Your structure today determines your options tomorrow."
  },
  {
    title: "ESOP & Sweat Equity",
    description: "Want to incentivize employees with ownership? Only certain structures support equity compensation."
  }
];

const WhyMattersSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choosing the <span className="text-accent">Right Structure</span> Matters
            </h2>
            <p className="text-lg text-text-body mb-8">
              This isn't a decision to rush. The structure you choose today will impact every aspect of your business — from day-to-day operations to your ultimate exit strategy.
            </p>
            
            <div className="bg-teal-light rounded-xl p-6 border-l-4 border-accent">
              <p className="text-primary font-medium">
                "Most founders don't realize that changing your structure later is expensive and time-consuming. Getting it right the first time saves money and headaches."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— HelloTax Advisory Team</p>
            </div>
          </div>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-grey-subtle transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">{reason.title}</h3>
                  <p className="text-sm text-text-body">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMattersSection;
