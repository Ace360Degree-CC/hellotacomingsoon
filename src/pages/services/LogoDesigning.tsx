import ServicePageLayout from "@/components/ServicePageLayout";

const LogoDesigning = () => {
  return (
    <ServicePageLayout
      title="Logo Designing"
      tagline="Your logo should evoke a 'wow' feeling, as a great logo builds trust with your customers."
      description="Just say hello to Hello Tax — we handle the rest. Our Logo Designing service helps startups create a clean, professional, and trustworthy visual identity, aligned with their business vision, audience, and growth plans."
      whatIsTitle="Why Logo Designing Matters for Startups"
      whatIsContent={[
        "Your logo is often the first interaction people have with your brand — on your website, invoices, social media, pitch decks, and legal documents.",
        "A poorly designed logo can: Reduce credibility, Confuse customers, and Look unprofessional to investors.",
        "At Hello Tax, we focus on creating logos that are simple, scalable, and meaningful, not flashy or overdesigned.",
      ]}
      whyImportantTitle="What Our Logo Designing Service Includes"
      whyImportantContent={[
        "Looks professional and modern",
        "Is readable at all sizes",
        "Matches your startup's personality",
        "Complete Logo Kit",
        "Works for long-term branding",
        "Works across digital and physical platforms",
      ]}
      whoNeedsTitle="Who Should Opt for Logo Designing?"
      whoNeedsItems={[
        "Newly registered startups",
        "Founders launching a new brand",
        "Businesses rebranding or formalising identity",
        "Companies preparing investor material",
      ]}
      whatWeCoverTitle="What You Receive"
      whatWeCoverItems={[
        "Final logo in high-quality formats",
        "Files suitable for website, social media, and print",
        "Clean, scalable design ready for branding",
        "All files in standard formats for easy usage",
      ]}
      whyHelloTaxTitle="Why Hello Tax for Logo Designing?"
      whyHelloTaxItems={[
        "Business and branding alignment",
        "Clean, startup-friendly design approach",
        "Files suitable for legal, digital, and marketing use",
        "Logos that support credibility, not just aesthetics",
      ]}
      howItWorksContent="We start by understanding your business name, vision, audience, and preferences. Our design team then creates initial concepts, incorporates your feedback, and finalises the logo. Once approved, you receive all essential formats for immediate and future use."
      documentsRequired={[
        "Business name and vision",
        "Target audience information",
        "Design preferences and examples",
        "Industry context",
      ]}
      timelineContent="Logo designing typically takes 5–7 working days, depending on feedback cycles. Our service covers logo design only with up to 5 Revisions. Trademark registration or brand protection can be opted as a separate add-on."
      addOnServices={[
        "Trademark Registration",
        "Website Setup",
        "Pitch Deck Designing",
        "Brand Compliance Advisory",
      ]}
      faqs={[
        { question: "Will I get multiple design options?", answer: "Yes, initial concepts are shared before finalisation." },
        { question: "Can I request revisions?", answer: "Yes, revisions are included within the defined scope." },
        { question: "Will the logo work on all platforms?", answer: "Yes, logos are designed to be scalable and versatile." },
        { question: "Is trademark registration included?", answer: "No, but it can be added separately." },
      ]}
      ctaTitle="Ready to Create a Strong Brand Identity?"
      ctaButtonText="Start Logo Designing"
      ctaPrice="₹12,999 + GST"
    />
  );
};

export default LogoDesigning;
