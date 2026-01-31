import ServicePageLayout from "@/components/ServicePageLayout";

const PitchDeck = () => {
  return (
    <ServicePageLayout
      title="Pitch Deck for Investor"
      tagline="Investors don't invest in ideas alone — they invest in clarity, confidence, and numbers."
      description="Just say hello to Hello Tax — we handle the rest. Our Pitch Deck service helps startups present their story, traction, and financials clearly, in a format that investors understand and trust."
      whatIsTitle="What is a Pitch Deck?"
      whatIsContent={[
        "A pitch deck is a structured presentation that explains your startup's vision, product, market opportunity, business model, and financials to potential investors.",
        "It is not just a design exercise. A strong pitch deck: Communicates clarity of thought, Demonstrates business understanding, and Builds investor confidence.",
        "At Hello Tax, we focus on content-first pitch decks, supported by clean design and defensible numbers.",
      ]}
      whyImportantTitle="Why Pitch Deck Quality Matters"
      whyImportantContent={[
        "Investors review hundreds of decks — most are rejected due to lack of clarity",
        "Communicate value quickly",
        "Answer investor questions confidently",
        "Reduce back-and-forth explanations",
        "Improve funding conversion chances",
        "Your deck should support your conversation, not confuse it",
      ]}
      whoNeedsTitle="Who Needs a Pitch Deck?"
      whoNeedsItems={[
        "Startups raising seed or growth funding",
        "Founders approaching angel investors or VCs",
        "Companies applying to accelerators or incubators",
        "Businesses seeking strategic partners",
      ]}
      whatWeCoverTitle="What Our Pitch Deck Service Covers"
      whatWeCoverItems={[
        "Business overview and vision",
        "Problem and solution narrative",
        "Market opportunity and traction",
        "Revenue model and unit economics",
        "Financial projections and funding ask",
        "Every section aligned with investor expectations",
      ]}
      whyHelloTaxTitle="Why Hello Tax for Pitch Deck Creation?"
      whyHelloTaxItems={[
        "Financial slides match your model",
        "Valuation logic is realistic",
        "Story aligns with numbers",
        "Deck supports due diligence",
        "Pitch deck that investors can believe and evaluate",
      ]}
      howItWorksContent="We begin by understanding your business, stage, and funding goals. You share existing material, if any. Our team structures the narrative, builds financial slides, and refines the deck based on your feedback. The result is a pitch deck you can confidently present and share."
      documentsRequired={[
        "Business overview and product details",
        "Market and traction information",
        "Financial model or projections",
        "Funding requirements and usage plan",
      ]}
      timelineContent="Pitch deck creation typically takes 7–10 working days, depending on iterations. Our service covers content structuring and deck creation. Pitch delivery coaching or investor outreach is not included."
      addOnServices={[
        "Financial Model",
        "Share Valuation",
        "COGS Calculation",
        "Investor Readiness Review",
      ]}
      faqs={[
        { question: "Is a pitch deck required at early stage?", answer: "Yes. Even early-stage investors expect structured clarity." },
        { question: "Can you redesign an existing deck?", answer: "Yes, we can restructure and improve existing decks." },
        { question: "Will you help with financial slides?", answer: "Yes, financial slides are a core part of our service." },
        { question: "Do you guarantee funding?", answer: "No, but a strong deck significantly improves your chances." },
      ]}
      ctaTitle="Ready to Pitch Your Startup to Investors?"
      ctaButtonText="Start Pitch Deck Creation"
    />
  );
};

export default PitchDeck;
