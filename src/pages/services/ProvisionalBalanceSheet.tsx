import ServicePageLayout from "@/components/ServicePageLayout";

const ProvisionalBalanceSheet = () => {
  return (
    <ServicePageLayout
      title="Provisional / Projected Balance Sheet"
      tagline="The Bank or Investor relies on Provisional & Projected Financials, so take it more serious"
      description="Just say hello to Hello Tax — we handle the rest. Our Provisional and Projected Balance Sheet service helps businesses present future-oriented financial positions that are structured, realistic, and acceptable to banks, investors, and internal decision-makers."
      whatIsTitle="What is a Provisional / Projected Balance Sheet?"
      whatIsContent={[
        "A Provisional Balance Sheet represents the estimated financial position of a business at a specific future point, based on current performance and assumptions.",
        "A Projected Balance Sheet goes a step further by presenting expected assets, liabilities, and equity over a defined future period, usually aligned with growth plans, funding requirements, or loan tenure.",
        "These statements are widely used for planning, funding, and compliance discussions.",
      ]}
      whyImportantTitle="Why Provisional & Projected Balance Sheets Are Important"
      whyImportantContent={[
        "Understand future financial position",
        "Assess funding and loan requirements",
        "Evaluate capital structure and leverage",
        "Support investor and bank discussions",
        "Without structured projections, decision-making often relies on assumptions instead of analysis",
      ]}
      whoNeedsTitle="Who Needs Provisional / Projected Balance Sheets?"
      whoNeedsItems={[
        "Startups preparing for funding",
        "Businesses applying for loans",
        "Companies preparing CMA or project reports",
        "Management teams planning expansion",
      ]}
      whatWeCoverTitle="What Our Service Covers"
      whatWeCoverItems={[
        "Analysing current financial data",
        "Aligning projections with business plans",
        "Ensuring logical flow between assets, liabilities, and equity",
        "Cross-checking consistency with P&L and cash flow projections",
        "Creating credible, defensible financial snapshots",
      ]}
      whyHelloTaxTitle="Why Hello Tax for Projected Balance Sheets?"
      whyHelloTaxItems={[
        "1000+ Projected Financials already served",
        "Compliance and accounting logic",
        "Consistency across financial documents",
        "Bank and investor acceptability",
        "Projections support confidence, not suspicion",
      ]}
      howItWorksContent="We begin by understanding your business goals and use-case. You share current financials and growth assumptions. Our team prepares provisional or projected balance sheets, reviews them with you, and finalises them for use."
      documentsRequired={[
        "Current Tally Data if available",
        "Financial projections or business plan",
        "Funding or loan details",
        "Growth assumptions",
      ]}
      timelineContent="Preparation typically takes 1–3 working days, depending on complexity. Our service covers preparation of provisional or projected balance sheets only. Ongoing revisions or scenario planning can be added separately."
      addOnServices={[
        "Financial Model",
        "CMA Preparation",
        "Project Report for Loan",
        "Share Valuation",
      ]}
      faqs={[
        { question: "Are provisional and projected balance sheets the same?", answer: "They are not similar, provisional is kind of till date or very short run data but projected statements are more detailed and long-term." },
        { question: "Can these be used for bank submissions?", answer: "Yes, when prepared correctly and aligned with other documents." },
        { question: "Will projections be accepted by investors?", answer: "Yes, if assumptions are realistic and explained." },
        { question: "Can you prepare multiple scenarios?", answer: "Yes, scenario planning can be added as an additional service." },
      ]}
      ctaTitle="Ready to Present Your Future Financial Position?"
      ctaButtonText="Start Projected Balance Sheet"
    />
  );
};

export default ProvisionalBalanceSheet;
