import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/coming-soon" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

