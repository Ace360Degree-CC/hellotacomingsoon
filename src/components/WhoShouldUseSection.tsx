import { Lightbulb, Building, Users2, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Lightbulb,
    title: "First-Time Founders",
    description: "Starting your entrepreneurial journey? We'll guide you through every decision, ensuring you begin with the right foundation.",
    tags: ["Tech Startups", "D2C Brands", "SaaS"]
  },
  {
    icon: Building,
    title: "MSMEs & Family Businesses",
    description: "Formalizing or restructuring an existing business? We help you optimize for growth while maintaining operational continuity.",
    tags: ["Manufacturing", "Trading", "Services"]
  },
  {
    icon: Users2,
    title: "Professionals & Consultants",
    description: "Doctors, lawyers, CAs, and consultants looking to set up practice with proper structure and compliance.",
    tags: ["Freelancers", "Consultants", "Agencies"]
  },
  {
    icon: Briefcase,
    title: "NRIs & Foreign Investors",
    description: "Looking to start or invest in an Indian company? We handle the complexities of cross-border compliance.",
    tags: ["NRI Founders", "FDI Compliance", "Joint Ventures"]
  }
];

const WhoShouldUseSection = () => {
  return (
    <section className="section-padding bg-grey-subtle">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Who Should Use <span className="text-accent">This Service</span>?
          </h2>
          <p className="text-lg text-text-body">
            Whether you're a first-time founder or seasoned entrepreneur, our startup formation service adapts to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div key={index} className="card-elevated flex gap-5">
              <div className="flex-shrink-0">
                <div className="icon-container">
                  <audience.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">{audience.title}</h3>
                <p className="text-text-body mb-4">{audience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {audience.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-teal-light text-accent px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
