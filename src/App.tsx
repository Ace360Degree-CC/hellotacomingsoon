import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import BoardResolution from "./pages/services/BoardResolution";
import COGSCalculation from "./pages/services/COGSCalculation";
import CMAPreparation from "./pages/services/CMAPreparation";
import FinancialModel from "./pages/services/FinancialModel";
import Initial30DaysCompliance from "./pages/services/Initial30DaysCompliance";
import LogoDesigning from "./pages/services/LogoDesigning";
import PitchDeck from "./pages/services/PitchDeck";
import ProjectReport from "./pages/services/ProjectReport";
import ProvisionalBalanceSheet from "./pages/services/ProvisionalBalanceSheet";
import ShareValuation from "./pages/services/ShareValuation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Routes */}
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
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
