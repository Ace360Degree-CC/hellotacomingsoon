import ServicePageLayout from "@/components/ServicePageLayout";

const CMAPreparation = () => {
  return (
    <ServicePageLayout
      title="CMA Preparation (Credit Monitoring Arrangement)"
      tagline="Banks trust CMA because it shows numbers they can monitor, not just projections."
      description="Just say hello to Hello Tax — we handle the rest. Our CMA Preparation service helps businesses prepare accurate, bank-compliant CMA data, required for working capital limits, term loans, and credit facilities."
      whatIsTitle="What is CMA Preparation?"
      whatIsContent={[
        "CMA (Credit Monitoring Arrangement) is a structured financial statement format used by banks to evaluate and monitor a borrower's financial health.",
        "Unlike normal financial statements, CMA focuses on: Past financial performance, Current financial position, and Projected performance over loan tenure.",
        "Banks rely on CMA data to assess creditworthiness, fund utilisation, and repayment capacity.",
      ]}
      whyImportantTitle="Why CMA is Required by Banks"
      whyImportantContent={[
        "Evaluate loan eligibility",
        "Sanction working capital limits",
        "Monitor credit exposure",
        "Assess repayment capability",
        "Inaccurate or inconsistent CMA figures may lead to loan rejection or reduced limits",
      ]}
      whoNeedsTitle="Who Needs CMA Preparation?"
      whoNeedsItems={[
        "Working capital loans",
        "Cash credit or overdraft facilities",
        "Term loans (in many cases)",
        "MSME and business loan renewals",
        "Existing borrowers increasing limits",
      ]}
      whatWeCoverTitle="What Our CMA Preparation Service Covers"
      whatWeCoverItems={[
        "Historical financial analysis",
        "Projected balance sheet, P&L, and cash flow",
        "Working capital assessment",
        "Fund flow and ratio analysis",
        "Cross-checked figures with accounting records for consistency",
      ]}
      whyHelloTaxTitle="Why Hello Tax for CMA Preparation?"
      whyHelloTaxItems={[
        "Numbers align with finalised accounts",
        "Projections are realistic and defendable",
        "Formats match bank expectations",
        "Data supports loan justification",
        "Reduces delays and improves lender confidence",
      ]}
      howItWorksContent="We start by understanding your loan requirement and bank format. You share financial statements and projections. Our experts prepare CMA data, review it with you, and finalise it for submission. The output is ready-to-submit CMA documentation."
      documentsRequired={[
        "Past financial statements",
        "Projected financials",
        "Loan requirement details",
        "Existing loan details (if any)",
      ]}
      timelineContent="CMA preparation usually takes 1–3 working days, depending on data availability and complexity. Our fees cover CMA data preparation with 2 times revision based on Banker Feedback. Bank discussions or clarifications are not included unless agreed separately."
      addOnServices={[
        "Project Report for Loan",
        "Financial Model",
        "Provisional / Projected Balance Sheet",
        "Accounting Review",
      ]}
      faqs={[
        { question: "Is CMA mandatory for all loans?", answer: "Mostly required for working capital and larger credit facilities." },
        { question: "Can CMA be prepared for new businesses?", answer: "Yes, using projected data where applicable." },
        { question: "Will banks accept this CMA format?", answer: "Yes, formats are aligned with bank requirements." },
        { question: "Can CMA be revised later?", answer: "Yes, updates can be made based on bank feedback." },
      ]}
      ctaTitle="Ready to Prepare Bank-Ready CMA Data?"
      ctaButtonText="Start CMA Preparation"
    />
  );
};

export default CMAPreparation;
