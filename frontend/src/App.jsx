import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import InstallPrompt from "./components/InstallPrompt";

// Pages / Sections
import Header from "./components/Header";
import OurSpecialDish from "./pages/OurSpecialDish";
import DeliverySection from "./pages/DeliverySection";
import FoodHero from "./pages/FoodHero";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FriedChickenCombo from "./pages/FriedChickenCombo";
import Terms from "./pages/TermsConditions.jsx";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MiamiFriedChicken from "./pages/MiamiFriedChicken";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <InstallPrompt />
      <ScrollToTop />

      <div className="main-content">
        <Routes>
          {/* Home / Front Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <MiamiFriedChicken />
                <OurSpecialDish />
                <DeliverySection />
                <FoodHero />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/friedchicken" element={<FriedChickenCombo />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

