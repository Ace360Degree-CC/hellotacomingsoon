import ServicePageLayout from "@/components/ServicePageLayout";

const FinancialModel = () => {
  return (
    <ServicePageLayout
      title="Financial Model"
      tagline="A financial model is your business plan in numbers — without it, growth is guesswork."
      description="Just say hello to Hello Tax — we handle the rest. Our Financial Model service helps startups translate ideas into numbers, showing how revenue, costs, cash flow, and profitability evolve over time — in a format founders, investors, and lenders actually understand."
      whatIsTitle="What is a Financial Model?"
      whatIsContent={[
        "A financial model is a structured representation of your business in numbers. It projects how your company will perform financially over a defined period based on assumptions around revenue, costs, growth, and capital requirements.",
        "Unlike basic projections, a well-built financial model: Connects assumptions to outcomes, Shows impact of decisions, and Highlights funding needs and risks.",
        "At Hello Tax, we build models that are practical, realistic, and defensible — not inflated spreadsheets.",
      ]}
      whyImportantTitle="Why a Financial Model is Essential for Startups"
      whyImportantContent={[
        "Understand unit economics and margins",
        "Plan cash flow and runway",
        "Price products or services correctly",
        "Prepare for funding or loans",
        "Answer investor questions confidently",
      ]}
      whoNeedsTitle="Who Needs a Financial Model?"
      whoNeedsItems={[
        "Startups preparing for fundraising",
        "Founders planning scale or expansion",
        "Businesses applying for loans",
        "Companies building pitch decks",
        "Management teams making strategic decisions",
      ]}
      whatWeCoverTitle="What Our Financial Model Service Covers"
      whatWeCoverItems={[
        "Revenue assumptions and projections",
        "Cost structure and COGS",
        "Operating expenses breakdown",
        "Profitability analysis",
        "Cash flow projections",
        "Funding requirements documentation",
      ]}
      whyHelloTaxTitle="Why Hello Tax for Financial Modeling?"
      whyHelloTaxItems={[
        "Realistic assumptions",
        "Logical structure",
        "Alignment with accounting and tax reality",
        "Investor- and lender-friendly presentation",
        "Models support decision-making, not just presentations",
      ]}
      howItWorksContent="We begin by understanding your business model, pricing, and growth plan. You share operational and cost details. Our team builds the financial model, reviews assumptions with you, and refines projections until they reflect a realistic business path. You receive a model you can use, update, and explain."
      documentsRequired={[
        "Business overview and revenue streams",
        "Pricing and cost details",
        "Expected growth assumptions",
        "Funding or loan objectives",
      ]}
      timelineContent="Financial modeling timelines depend on business complexity and iteration cycles. Our fees cover model creation and explanation. Ongoing updates or scenario planning can be added separately."
      addOnServices={[
        "Pitch Deck for Investor",
        "Share Valuation",
        "COGS Calculation",
        "Project Report or CMA",
      ]}
      faqs={[
        { question: "Is a financial model mandatory for fundraising?", answer: "Yes, investors expect clear financial projections." },
        { question: "Can the model be updated later?", answer: "Yes, models should evolve as the business grows." },
        { question: "Will you explain the model to me?", answer: "Yes, we walk you through assumptions and outputs." },
        { question: "Is this useful for small startups?", answer: "Absolutely. Even early-stage startups benefit from financial clarity." },
      ]}
      ctaTitle="Ready to Turn Your Business Plan Into Numbers?"
      ctaButtonText="Start Financial Modeling"
    />
  );
};

export default FinancialModel;
