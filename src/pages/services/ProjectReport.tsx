import ServicePageLayout from "@/components/ServicePageLayout";

const ProjectReport = () => {
  return (
    <ServicePageLayout
      title="Project Report for Loan"
      tagline="Banks don't lend on ideas — they lend on clarity, feasibility, and numbers."
      description="Just say hello to Hello Tax — we handle the rest. Our Project Report service helps businesses present a clear, structured, and bank-acceptable proposal, improving approval chances for term loans, working capital, or government-backed funding schemes."
      whatIsTitle="What is a Project Report for Loan?"
      whatIsContent={[
        "A Project Report is a detailed document submitted to banks or financial institutions when applying for a loan. It explains your business model, project viability, funding requirement, and repayment capacity.",
        "Banks rely heavily on project reports to assess risk, feasibility, and financial discipline. A weak or generic report often leads to rejection or prolonged queries.",
        "At Hello Tax, we ensure your project report is practical, realistic, and aligned with bank expectations.",
      ]}
      whyImportantTitle="Why a Strong Project Report is Important"
      whyImportantContent={[
        "Clearly explains your business activity",
        "Demonstrates financial viability",
        "Justifies loan amount and usage",
        "Shows repayment capability",
        "Without a proper report, even eligible businesses face delays or rejections",
      ]}
      whoNeedsTitle="Who Needs a Project Report?"
      whoNeedsItems={[
        "Term loan applications",
        "Working capital loans",
        "MSME and government-backed schemes",
        "New business or expansion funding",
        "Bank finance for startups and MSMEs",
      ]}
      whatWeCoverTitle="What Our Project Report Service Covers"
      whatWeCoverItems={[
        "Business and promoter profile",
        "Project description and objectives",
        "Market overview and opportunity",
        "Cost structure and funding pattern",
        "Financial projections and repayment logic",
        "CMA Data preparation",
      ]}
      whyHelloTaxTitle="Why Hello Tax for Project Reports?"
      whyHelloTaxItems={[
        "Realistic assumptions",
        "Clear financial linkage",
        "Alignment with accounting and tax data",
        "Bank-friendly presentation",
        "Reduces unnecessary follow-ups and improves lender confidence",
      ]}
      howItWorksContent="We begin by understanding your business, funding requirement, and bank expectations. You share financial and operational details. Our team prepares the project report, reviews it with you, and refines it to ensure clarity and accuracy. The final report is ready for bank submission."
      documentsRequired={[
        "Business and promoter details",
        "Existing financials (if any)",
        "Cost estimates and funding requirement",
        "Loan purpose and tenure details",
      ]}
      timelineContent="Project report preparation typically takes 1–3 working days, depending on complexity. Our service covers project report preparation subject to two time revision. Bank interactions or follow-ups are not included unless specifically agreed."
      addOnServices={[
        "CMA Preparation",
        "Financial Model",
        "Provisional / Projected Balance Sheet",
        "Accounting & Compliance Review",
      ]}
      faqs={[
        { question: "Is a project report mandatory for all loans?", answer: "Most banks require it for term loans and MSME funding." },
        { question: "Can the report be customised for a specific bank?", answer: "Yes, we align reports with bank formats where required." },
        { question: "Will this guarantee loan approval?", answer: "No, but it significantly improves approval chances." },
        { question: "Can you help with CMA data as well?", answer: "Yes, CMA preparation is available as an add-on service." },
      ]}
      ctaTitle="Ready to Get Your Loan Project Report?"
      ctaButtonText="Start Project Report"
    />
  );
};

export default ProjectReport;
