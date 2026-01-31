import ServicePageLayout from "@/components/ServicePageLayout";

const Initial30DaysCompliance = () => {
  return (
    <ServicePageLayout
      title="Initial 30 Days Compliance (Company / LLP)"
      tagline="Most compliance mistakes happen in the first 30 days — and they cost the most to fix later."
      description="Just say hello to Hello Tax — we handle the rest. Our Initial 30 Days Compliance service ensures newly incorporated companies and LLPs start on a clean, compliant foundation, avoiding future penalties, rework, and credibility issues."
      whatIsTitle="What is Initial 30 Days Compliance?"
      whatIsContent={[
        "The first 30 days after incorporation are legally critical for companies and LLPs. During this period, several mandatory actions must be completed to make the entity fully operational and compliant.",
        "Many founders focus only on incorporation and ignore post-registration compliances. This leads to late penalties, incorrect records, and issues during audits or funding.",
        "At Hello Tax, we ensure your business is compliance-ready from day one.",
      ]}
      whyImportantTitle="Why the First 30 Days Matter"
      whyImportantContent={[
        "Regulatory authorities expect certain actions to be completed within defined timelines",
        "Missing these can trigger penalties",
        "Creates incorrect statutory records",
        "Complicates future ROC filings",
        "Delays funding or banking processes",
        "Early compliance prevents years of correction work later",
      ]}
      whoNeedsTitle="Who Should Opt for This Service?"
      whoNeedsItems={[
        "Newly incorporated Private Limited Companies",
        "One Person Companies (OPC)",
        "LLPs",
        "Any newly registered entity",
      ]}
      whatWeCoverTitle="What We Cover Under Initial 30 Days Compliance"
      whatWeCoverItems={[
        "INC 20A Filings",
        "Share Certificate preparation",
        "ADT-1 Auditor Appointment",
        "LLP Form-3",
        "Board Resolution for Current Account Opening",
        "Each task aligned with legal requirements",
      ]}
      whyHelloTaxTitle="Why Hello Tax for Initial Compliance?"
      whyHelloTaxItems={[
        "Correct filings within deadlines",
        "Proper documentation for future reference",
        "Clear guidance on next compliances",
        "No dependency on guesswork or templates",
        "Start your business clean, compliant, and confident",
      ]}
      howItWorksContent="Once your company or LLP is incorporated, we review your incorporation documents and statutory requirements. Our team completes the necessary compliances, prepares records, and guides you on upcoming obligations. You receive confirmation and documentation for every step."
      documentsRequired={[
        "Incorporation documents",
        "Director or partner details",
        "Registered office details",
        "Business activity information",
      ]}
      timelineContent="Initial compliances must be completed within prescribed timelines, often within 30 days of incorporation. Our fees cover initial compliance support as defined. Ongoing monthly or annual compliances are separate services."
      addOnServices={[
        "Accounting Setup",
        "GST Registration",
        "ROC Annual Compliance",
        "Board Resolution & Banking Support",
      ]}
      faqs={[
        { question: "Is initial compliance mandatory for all companies and LLPs?", answer: "Yes. Certain compliances are legally required immediately after incorporation." },
        { question: "What happens if initial compliance is missed?", answer: "Penalties, incorrect records, and future compliance difficulties." },
        { question: "Can Hello Tax handle delayed initial compliance?", answer: "Yes, but corrective work may involve additional effort and cost." },
        { question: "Do you support both Companies and LLPs?", answer: "Yes, we handle compliance for both entity types." },
      ]}
      ctaTitle="Ready to Start Your Business on a Clean Foundation?"
      ctaButtonText="Start Initial Compliance"
    />
  );
};

export default Initial30DaysCompliance;
