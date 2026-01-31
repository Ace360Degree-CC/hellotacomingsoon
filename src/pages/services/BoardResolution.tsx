import ServicePageLayout from "@/components/ServicePageLayout";

const BoardResolution = () => {
  return (
    <ServicePageLayout
      title="Board Resolution for Bank Account"
      tagline="Newly LLP or Private Limited Company can't Open Current Account in Banks without BR."
      description="Just say hello to Hello Tax — we handle the rest. Our Board Resolution service ensures your company has legally valid, bank-ready resolutions, so your account opening and operations happen without delays or rejections."
      whatIsTitle="What is a Board Resolution for Bank Account?"
      whatIsContent={[
        "A Board Resolution is a formal decision passed by the Board of Directors authorising: Opening of a bank account, Appointment of authorised signatories, and Operation of the bank account.",
        "Banks require a properly drafted resolution as part of their KYC and compliance process. Without this document, account opening or account operations may be delayed or denied.",
      ]}
      whyImportantTitle="Why This Resolution is Important"
      whyImportantContent={[
        "Confirms who is authorised to operate the account",
        "Defines transaction authority clearly",
        "Protects the company from internal disputes",
        "Satisfies bank compliance requirements",
        "Avoids incorrect or improperly worded resolutions that cause delays",
      ]}
      whoNeedsTitle="Who Needs a Board Resolution?"
      whoNeedsItems={[
        "Private Limited Companies",
        "One Person Companies (OPC)",
        "LLP Limited Liability Partnership",
        "Companies opening new bank accounts",
        "Companies adding or changing signatories",
      ]}
      whatWeCoverTitle="What Our Service Covers"
      whatWeCoverItems={[
        "Professionally drafted board resolution",
        "Follows Companies Act requirements",
        "Includes bank-specific wording (if required)",
        "Clearly authorises signatories",
        "Ready for immediate submission",
        "Guidance on signing and record-keeping procedures",
      ]}
      whyHelloTaxTitle="Why Hello Tax for Board Resolutions?"
      whyHelloTaxItems={[
        "Accuracy in names and designations",
        "Compliance with statutory format",
        "Practical alignment with bank expectations",
        "Avoids repeated submissions and follow-ups with banks",
      ]}
      howItWorksContent="You share your company details and bank requirements with us. Our team drafts the resolution, shares it for confirmation, and finalises it for execution. The process is quick, simple, and hassle-free."
      documentsRequired={[
        "Company name and CIN",
        "Director details",
        "Bank name and branch",
        "Authorised signatory details",
      ]}
      timelineContent="Board resolution drafting is usually completed within 1–2 working days. Our service covers drafting of the resolution only. Physical signing, stamping, or notarisation (if required) is handled as per bank instructions."
      addOnServices={[
        "Company Bank Account Opening Support",
        "Initial 30 Days Compliance",
        "ROC Compliance Services",
      ]}
      faqs={[
        { question: "Is a board resolution mandatory for bank account opening?", answer: "Yes, for companies, banks require a valid board resolution." },
        { question: "Can one director be authorised to operate the account?", answer: "Yes, depending on the resolution and company decision." },
        { question: "Do banks accept digitally signed resolutions?", answer: "This depends on bank policy; we align drafting accordingly." },
        { question: "Can you revise an existing resolution?", answer: "Yes, amendments or new resolutions can be prepared." },
      ]}
      ctaTitle="Ready to Open Your Company Bank Account Smoothly?"
      ctaButtonText="Get Board Resolution Now"
      ctaPrice="₹1499 + GST"
    />
  );
};

export default BoardResolution;
