import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import TrainingCourses from "./pages/TrainingCourses";
import Industries from "./pages/Industries";
import Emergency from "./pages/Emergency";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const AppContent = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      {!isLogin && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          <Route path="/security-training-courses-mumbai" element={<TrainingCourses />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isLogin && <Footer />}
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 800); return () => clearTimeout(t); }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Preloader loading={loading} />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
