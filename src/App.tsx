import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BoardResolution from "./pages/services/BoardResolution";
import CMAPreparation from "./pages/services/CMAPreparation";
import COGSCalculation from "./pages/services/COGSCalculation";
import FinancialModel from "./pages/services/FinancialModel";
import HUFRegistration from "./pages/services/HUFRegistration";
import Initial30DaysCompliance from "./pages/services/Initial30DaysCompliance";
import LLPRegistration from "./pages/services/LLPRegistration";
import LogoDesigning from "./pages/services/LogoDesigning";
import OPCRegistration from "./pages/services/OPCRegistration";
import PitchDeck from "./pages/services/PitchDeck";
import PrivateLimitedRegistration from "./pages/services/PrivateLimitedRegistration";
import ProjectReport from "./pages/services/ProjectReport";
import ProvisionalBalanceSheet from "./pages/services/ProvisionalBalanceSheet";
import ShareValuation from "./pages/services/ShareValuation";
import SoleProprietorship from "./pages/services/SoleProprietorship";
import TrademarkRegistration from "./pages/services/TrademarkRegistration";

function App() {
  return (
    <>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/coming-soon" element={<ComingSoon />} />

          <Route path="/services/private-limited" element={<PrivateLimitedRegistration />} />
          <Route path="/services/llp-registration" element={<LLPRegistration />} />
          <Route path="/services/opc-registration" element={<OPCRegistration />} />
          <Route path="/services/sole-proprietorship" element={<SoleProprietorship />} />
          <Route path="/services/huf-registration" element={<HUFRegistration />} />
          <Route path="/services/board-resolution" element={<BoardResolution />} />
          <Route path="/services/cogs-calculation" element={<COGSCalculation />} />
          <Route path="/services/cma-preparation" element={<CMAPreparation />} />
          <Route path="/services/financial-model" element={<FinancialModel />} />
          <Route path="/services/initial-compliance" element={<Initial30DaysCompliance />} />
          <Route path="/services/logo-designing" element={<LogoDesigning />} />
          <Route path="/services/pitch-deck" element={<PitchDeck />} />
          <Route path="/services/project-report" element={<ProjectReport />} />
          <Route path="/services/provisional-balance-sheet" element={<ProvisionalBalanceSheet />} />
          <Route path="/services/share-valuation" element={<ShareValuation />} />
          <Route path="/services/trademark-registration" element={<TrademarkRegistration />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

