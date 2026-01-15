import React, { useEffect } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const whatsappNumber = "8129110411";
  const defaultMessage = encodeURIComponent(
    "Hello! I would like to contact your cafe."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  // Scroll to top on page load
  useEffect(() => {
    // Scroll handled by ScrollToTop
  }, []);

  return (
    <section className="contact-page animate-fade-in">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you. Contact our team directly via WhatsApp.
          </p>
        </div>

        {/* Card */}
        <div className="contact-card">

          {/* Info */}
          <div className="contact-info">
            <h2>Our Cafe</h2>

            <div className="info-item">
              <span className="icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8zm0 10.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 7.5 12 7.5s2.5 1.1 2.5 2.5S13.4 12.5 12 12.5z" />
                </svg>
              </span>
              <p>
                Fathima Arcade (Behind Just Bake) <br />
                Near Ansar Juma Masjid, New Bus Stand, Kasargod
              </p>
            </div>

            <div className="info-item">
              <span className="icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 1a11 11 0 100 22 11 11 0 000-22zm1 11.4V6h-2v7l6 3.5 1-1.7-5-2.4z" />
                </svg>
              </span>
              <p>9:00 AM – 10:30 PM</p>
            </div>

            <div className="info-item">
              <span className="icon">
                <svg viewBox="0 0 24 24">
                  <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2.1.6 3.2.6.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.4 21.2 2.8 13.6 2.8 4.2 2.8 3.5 3.3 3 4 3h3.4c.7 0 1.2.5 1.2 1.2 0 1.1.2 2.2.6 3.2.1.4 0 .9-.2 1.2l-2.4 2.2z" />
                </svg>
              </span>
              <p>8129110411</p>
            </div>
          </div>

          {/* Action */}
          <div className="contact-action">
            <h3>Send a Message</h3>

            <textarea
              placeholder="Write your message here..."
              onChange={(e) => {
                const msg = encodeURIComponent(
                  e.target.value || "Hello! I would like to contact your cafe."
                );
                document.getElementById("wa-btn").href =
                  `https://wa.me/${whatsappNumber}?text=${msg}`;
              }}
            />

            <a
              id="wa-btn"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Contact via WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
