import ServicePageLayout from "@/components/ServicePageLayout";

const ShareValuation = () => {
  return (
    <ServicePageLayout
      title="Share Valuation"
      tagline="Valuation is not a guess — it's a justification backed by numbers."
      description="Just say hello to Hello Tax — we handle the rest. Our Share Valuation service helps startups and companies determine fair, defensible share value for fundraising, ESOPs, regulatory compliance, and internal decision-making."
      whatIsTitle="What is Share Valuation?"
      whatIsContent={[
        "Share valuation is the process of determining the fair value of a company's shares based on financial performance, future potential, and market factors.",
        "Valuation is required not only for fundraising, but also for regulatory and tax compliance. Incorrect or unsupported valuations can attract scrutiny from tax authorities and investors.",
        "At Hello Tax, we ensure valuation is method-driven, compliant, and clearly explained.",
      ]}
      whyImportantTitle="Why Accurate Share Valuation Matters"
      whyImportantContent={[
        "Builds investor confidence",
        "Protects founders from dilution risks",
        "Supports tax and regulatory compliance",
        "Reduces disputes with authorities",
        "Helps negotiate funding on realistic terms",
      ]}
      whoNeedsTitle="When is Share Valuation Required?"
      whoNeedsItems={[
        "Fundraising and investor discussions",
        "Issue of shares to investors",
        "ESOP or sweat equity issuance",
        "Compliance under Income Tax and Companies Act",
        "Internal planning and restructuring",
      ]}
      whatWeCoverTitle="What Our Share Valuation Service Covers"
      whatWeCoverItems={[
        "Assessment using appropriate valuation methods",
        "Financial performance analysis",
        "Business model and stage evaluation",
        "Growth projections consideration",
        "Industry benchmarks comparison",
        "Defensible and audit-ready documentation",
      ]}
      whyHelloTaxTitle="Why Hello Tax for Share Valuation?"
      whyHelloTaxItems={[
        "Correct valuation methodology",
        "Alignment with tax and regulatory rules",
        "Clear explanation of assumptions",
        "Practical approach suitable for startups",
        "You don't just get a number — you get confidence behind that number",
      ]}
      howItWorksContent="We begin by understanding your business, funding goals, and compliance needs. You share financial data and projections. Our experts evaluate the information, apply appropriate valuation methods, and deliver a clear valuation report. We also guide you on how the valuation can be used safely."
      documentsRequired={[
        "Financial statements",
        "Business projections",
        "Shareholding pattern",
        "Business overview and plans",
      ]}
      timelineContent="Share valuation timelines depend on business complexity and data availability. Our fees cover valuation analysis and report preparation. Certification requirements or additional regulatory needs are handled as applicable."
      addOnServices={[
        "Financial Model",
        "Pitch Deck for Investor",
        "ESOP Advisory",
        "Fundraising Support",
      ]}
      faqs={[
        { question: "Is valuation mandatory for fundraising?", answer: "Yes, valuation is required for share issuance and compliance." },
        { question: "Can valuation be done for early-stage startups?", answer: "Yes, suitable methods are applied based on stage." },
        { question: "Will tax authorities accept this valuation?", answer: "Valuations are prepared as per accepted methods and standards." },
        { question: "Can you revise valuation later?", answer: "Yes, valuation can be updated as business grows." },
      ]}
      ctaTitle="Ready to Value Your Company Correctly?"
      ctaButtonText="Start Share Valuation"
      ctaPrice="₹29,999 + GST"
    />
  );
};

export default ShareValuation;
