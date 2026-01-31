import ServicePageLayout from "@/components/ServicePageLayout";

const TrademarkRegistration = () => {
  return (
    <ServicePageLayout
      title="Trademark Registration"
      tagline="Building a brand is hard. Protecting it early is smart. Love your company, Love your Brand."
      description="Just say hello to Hello Tax — we handle the rest. Our Trademark Registration service helps startups secure legal ownership of their brand name, logo, or identity, protecting it from misuse and future disputes."
      whatIsTitle="What is Trademark Registration?"
      whatIsContent={[
        "A trademark is a legally protected brand identity that distinguishes your business from others. It can include your business name, logo, tagline, or symbol.",
        "Trademark registration gives you exclusive rights to use your brand for specific goods or services. Without registration, your brand remains vulnerable — even if you've been using it for years.",
        "At Hello Tax, we ensure trademark registration is done correctly, strategically, and with future growth in mind.",
      ]}
      whyImportantTitle="Why Trademark Registration is Important for Startups"
      whyImportantContent={[
        "Secure brand ownership",
        "Prevent misuse or copying",
        "Build investor confidence",
        "Strengthen long-term brand value",
        "Avoid brand name conflicts and forced rebranding",
        "A registered trademark is a business asset, not just a legal formality",
      ]}
      whoNeedsTitle="Who Should Register a Trademark?"
      whoNeedsItems={[
        "Startups and new businesses",
        "Growing brands",
        "Companies launching products or services",
        "Founders planning long-term operations",
      ]}
      whatWeCoverTitle="What Our Trademark Registration Service Covers"
      whatWeCoverItems={[
        "Trademark search and availability check",
        "Correct classification selection",
        "Application filing",
        "Examination Report if IP authority asks",
        "1st Hearing Attendance in case of objection",
        "Status tracking and follow-up",
      ]}
      whyHelloTaxTitle="Why Hello Tax for Trademark Registration?"
      whyHelloTaxItems={[
        "Tied up with many Attorneys",
        "Handle small to million dollar requirements",
        "Monitor application status",
        "Keep you informed at every stage",
        "You get clarity and accountability, not silence after filing",
      ]}
      howItWorksContent="We start with understanding your brand name i.e. Wordmark or logo. After checking availability, we prepare and file the trademark application. We then track its status and update you until the registration process progresses. After Application is done you can use TM with Brand, after Registration Certificate can use ®."
      documentsRequired={[
        "Brand name or logo",
        "Business details",
        "Applicant identity proof",
        "Description of goods or services",
      ]}
      timelineContent="Trademark registration is a time-bound legal process and may take several months due to government procedures. Our fees cover application filing and basic follow-up. Objections or hearings, if raised, are handled as separate services."
      addOnServices={[
        "Logo Designing",
        "Brand Advisory",
        "Business Name Protection Strategy",
      ]}
      faqs={[
        { question: "Can I register a trademark before company incorporation?", answer: "Yes, trademarks can be filed in individual or business name." },
        { question: "Does trademark registration give lifetime protection?", answer: "Trademark is valid for 10 years and renewable." },
        { question: "What if someone objects to my trademark?", answer: "Objections can be replied to separately with professional support." },
        { question: "Can Hello Tax help with trademark objections?", answer: "Yes, objection handling is available as an add-on." },
      ]}
      ctaTitle="Ready to Protect Your Brand Identity?"
      ctaButtonText="Start Trademark Registration"
      ctaPrice="₹12,500 + GST"
    />
  );
};

export default TrademarkRegistration;
