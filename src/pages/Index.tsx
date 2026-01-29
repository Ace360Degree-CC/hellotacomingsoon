import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import StructuresSection from "@/components/StructuresSection";
import WhyMattersSection from "@/components/WhyMattersSection";
import WhyHelloTaxSection from "@/components/WhyHelloTaxSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoShouldUseSection from "@/components/WhoShouldUseSection";
import MembershipSection from "@/components/MembershipSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <StructuresSection />
        <WhyMattersSection />
        <WhyHelloTaxSection />
        <HowItWorksSection />
        <WhoShouldUseSection />
        <MembershipSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
