import ServicePageLayout from "@/components/ServicePageLayout";

const COGSCalculation = () => {
  return (
    <ServicePageLayout
      title="COGS Calculation (Cost of Goods Sold)"
      tagline="If you don't know your real cost, you don't know your real profit."
      description="Just say hello to Hello Tax — we handle the rest. Our COGS Calculation service helps startups and businesses accurately determine the true cost of delivering their product or service, so pricing, margins, and growth decisions are based on facts — not guesswork."
      whatIsTitle="What is COGS (Cost of Goods Sold)?"
      whatIsContent={[
        "COGS represents the direct cost incurred to produce or deliver your product or service. It includes costs that are directly linked to revenue generation, such as materials, direct labour, production costs, or service delivery expenses.",
        "Many businesses confuse expenses with COGS, which leads to incorrect pricing, inflated or misleading profits, poor cash flow decisions, and wrong discounts to customers.",
        "At Hello Tax, we help you clearly separate costs from expenses, so your numbers reflect reality.",
      ]}
      whyImportantTitle="Why COGS Calculation is Critical"
      whyImportantContent={[
        "Price products or services correctly",
        "Understand actual gross margins",
        "Identify cost leakages",
        "Make informed scaling decisions",
        "Present realistic numbers to investors or lenders",
      ]}
      whoNeedsTitle="Who Needs COGS Calculation?"
      whoNeedsItems={[
        "Product-based startups",
        "Manufacturing and trading businesses",
        "D2C and e-commerce sellers",
        "Service businesses with delivery costs",
        "Startups preparing financial models or pitch decks",
      ]}
      whatWeCoverTitle="What Our COGS Calculation Service Covers"
      whatWeCoverItems={[
        "Direct material or service costs analysis",
        "Labour or execution costs identification",
        "Production or delivery-related expenses",
        "Cost allocation logic",
        "Clear, defensible COGS computation aligned with accounting and tax principles",
      ]}
      whyHelloTaxTitle="Why Hello Tax for COGS Calculation?"
      whyHelloTaxItems={[
        "Understanding of different business models",
        "Startup cost structure expertise",
        "Compliance and accounting impact awareness",
        "COGS works consistently across accounting, MIS, financial models, and investor discussions",
      ]}
      howItWorksContent="We start by understanding your product or service flow. You share cost data and operational details. Our team analyses the information, identifies cost components, and prepares a clear COGS structure along with explanations. You don't just get a number — you get clarity on how that number is built."
      documentsRequired={[
        "Purchase and expense details",
        "Salary or labour cost data",
        "Production or service delivery inputs",
        "Business process explanation",
      ]}
      timelineContent="COGS calculation is usually completed within a defined engagement period, depending on business complexity. Our fees cover analysis and calculation only. Ongoing monitoring or integration into accounting systems can be added separately."
      addOnServices={[
        "Financial Model",
        "MIS Reporting",
        "Pricing Strategy Advisory",
        "Project Report or Pitch Deck",
      ]}
      faqs={[
        { question: "Is COGS applicable only to product businesses?", answer: "No. Service businesses also have delivery-related COGS." },
        { question: "Can COGS change over time?", answer: "Yes. COGS should be reviewed periodically as costs evolve." },
        { question: "Will you help me set pricing based on COGS?", answer: "Yes, pricing guidance can be provided as part of advisory." },
        { question: "Can this be used for investor discussions?", answer: "Absolutely. Clear COGS improves financial credibility." },
      ]}
      ctaTitle="Ready to Know Your Real Cost of Goods Sold?"
      ctaButtonText="Start COGS Calculation"
    />
  );
};

export default COGSCalculation;
