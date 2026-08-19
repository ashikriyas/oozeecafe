import React, { useState } from "react";
import "./ContactUs.css";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaWhatsapp, FaDirections } from "react-icons/fa";

const ContactUs = () => {
  const whatsappNumber = "8129110411";
  const [customMsg, setCustomMsg] = useState("");

  const handleSendMessage = () => {
    const text = encodeURIComponent(
      customMsg.trim() || "Hello Ooze Cafe! I would like to inquire about your menu / table reservation / delivery."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Fathima+Arcade+Near+Ansar+Juma+Masjid+New+Bus+Stand+Kasargod";

  return (
    <section className="contact-page animate-fade-in">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <span className="contact-badge">📍 Visit or Order Online</span>
          <h1>Contact Us & Location</h1>
          <p>
            We'd love to serve you! Visit us for a cozy dine-in experience or order your favorite meals via WhatsApp.
          </p>
        </div>

        {/* Contact Card */}
        <div className="contact-card">

          {/* Info */}
          <div className="contact-info">
            <h2>Ooze Cafe Details</h2>

            <div className="info-item">
              <span className="icon">
                <FaMapMarkerAlt />
              </span>
              <div>
                <strong>Our Address:</strong>
                <p>
                  Fathima Arcade (Behind Just Bake)<br />
                  Near Ansar Juma Masjid, New Bus Stand<br />
                  Kasargod, Kerala - India
                </p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">
                <FaClock />
              </span>
              <div>
                <strong>Operating Hours:</strong>
                <p>Monday – Sunday: 9:00 AM – 10:30 PM</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">
                <FaPhoneAlt />
              </span>
              <div>
                <strong>Phone & Direct Line:</strong>
                <p>
                  <a href="tel:8129110411" className="contact-phone-link">+91 81291 10411</a>
                </p>
              </div>
            </div>

            <div className="maps-action-box">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="directions-btn"
              >
                <FaDirections />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Action / WhatsApp Messaging */}
          <div className="contact-action">
            <h3>💬 Send Us a Direct Message</h3>
            <p className="action-subtitle">Have a question or special request? Drop a message below:</p>

            <textarea
              placeholder="Type your message, inquiry, or custom order here..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              rows="5"
            />

            <button
              onClick={handleSendMessage}
              className="whatsapp-btn"
            >
              <FaWhatsapp />
              <span>Send via WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Embedded Map Visual */}
        <div className="map-embed-wrapper">
          <iframe
            title="Ooze Cafe Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.353381665476!2d74.985!3d12.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMwJzM2LjAiTiA3NMKwNTknMDYuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: "18px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
