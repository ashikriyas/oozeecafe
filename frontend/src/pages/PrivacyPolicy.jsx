import React, { useEffect } from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll handled by ScrollToTop
  }, []);

  return (
    <section className="privacy-page">
      <div className="privacy-container fade-in">

        <h1>Privacy Policy</h1>
        <p className="privacy-updated">Last updated: January 2026</p>

        <div className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            At <strong>Ooze Cafe</strong>, we respect your privacy. This policy explains how we handle any information you provide while ordering food or visiting our café.
          </p>
        </div>

        <div className="privacy-section">
          <h2>2. Information We Collect</h2>
          <p>
            We may collect your name, phone number, and delivery address to complete your order and ensure your food reaches you correctly.
          </p>
        </div>

        <div className="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <p>
            Your information is used solely to process your orders, improve your experience, and communicate important updates related to your orders or our services.
          </p>
        </div>

        <div className="privacy-section">
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not share your personal information with third parties, except when required to deliver your order (for example, with delivery partners).
          </p>
        </div>

        <div className="privacy-section">
          <h2>5. Safety and Security</h2>
          <p>
            We take care to protect your information while it is in our possession. All staff follow proper practices to ensure your data is safe.
          </p>
        </div>

        <div className="privacy-section">
          <h2>6. Changes to This Policy</h2>
          <p>
            Ooze Cafe may update this Privacy Policy occasionally. Continued use of our services implies acceptance of any changes.
          </p>
        </div>

        <div className="privacy-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us directly at Ooze Cafe.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
