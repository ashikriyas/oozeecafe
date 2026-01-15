import React, { useEffect } from "react";
import "./TermsConditions.css";

const Terms = () => {

  // Scroll to top when page loads
  useEffect(() => {
    // Scroll handled by ScrollToTop
  }, []);

  return (
    <section className="terms-page">
      <div className="terms-container fade-in">

        <h1>Terms & Conditions</h1>

        <div className="terms-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Ooze Cafe</strong>. By accessing our website,
            visiting our café, or placing an order with us, you agree to be
            bound by these Terms & Conditions. Please read them carefully
            before using our services.
          </p>
        </div>

        <div className="terms-section">
          <h2>2. Use of Our Services</h2>
          <p>
            Ooze Cafe provides food and beverage services for dine-in,
            takeaway, and delivery. All services are subject to availability
            and may change without prior notice.
          </p>
        </div>

        <div className="terms-section">
          <h2>3. Orders & Payments</h2>
          <p>
            All orders placed with Ooze Cafe are final once confirmed.
            Payments must be completed at the time of ordering. We reserve
            the right to refuse or cancel any order due to unavailability,
            pricing errors, or misuse of our services.
          </p>
        </div>

        <div className="terms-section">
          <h2>4. Food Allergies & Dietary Information</h2>
          <p>
            While we take utmost care in food preparation, Ooze Cafe cannot
            guarantee that our food is completely free from allergens.
            Customers are responsible for informing our staff of any food
            allergies or dietary restrictions before placing an order.
          </p>
        </div>

        <div className="terms-section">
          <h2>5. Pricing & Menu Changes</h2>
          <p>
            Prices, menu items, and offers are subject to change without
            prior notice. Images shown on our website or promotional
            materials are for representation purposes only.
          </p>
        </div>

        <div className="terms-section">
          <h2>6. Hygiene & Safety</h2>
          <p>
            Ooze Cafe follows strict hygiene and food safety standards.
            Customers are expected to follow in-café rules and respect
            cleanliness, staff, and fellow guests.
          </p>
        </div>

        <div className="terms-section">
          <h2>7. Intellectual Property</h2>
          <p>
            All content, logos, images, and branding related to Ooze Cafe
            are the intellectual property of Ooze Cafe and may not be used
            without written permission.
          </p>
        </div>

        <div className="terms-section">
          <h2>8. Limitation of Liability</h2>
          <p>
            Ooze Cafe shall not be held responsible for any indirect,
            incidental, or consequential damages arising from the use of
            our services or website.
          </p>
        </div>

        <div className="terms-section">
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms &
            Conditions at any time. Continued use of our services implies
            acceptance of the revised terms.
          </p>
        </div>

        <div className="terms-section">
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms & Conditions,
            please contact us directly at Ooze Cafe.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Terms;
