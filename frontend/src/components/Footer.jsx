import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import "./Footer.css";
import Logo from "../assets/logo_white.JPG";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/">
            <img src={Logo} alt="Ooze Cafe Logo" className="footer-logo" />
          </Link>
          <p>Where Taste Meets Comfort • 156+ Curated Dishes</p>
          <div className="footer-quick-contact">
            <a href="tel:8129110411" className="footer-contact-item">
              <FaPhoneAlt /> +91 81291 10411
            </a>
            <span className="footer-contact-item">
              <FaMapMarkerAlt /> Kasargod, Kerala
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/menu" className="footer-link">Our Menu (150+)</Link>
          <Link to="/friedchicken" className="footer-link">Miami Fried Chicken</Link>
          <Link to="/contact" className="footer-link">Contact & Location</Link>
        </div>

        {/* Legal */}
        <div className="footer-links">
          <h3>Information</h3>
          <Link to="/terms" className="footer-link">Terms & Conditions</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link to="/faq" className="footer-link">FAQ & Ordering Help</Link>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow & Order</h3>
          <p className="footer-social-desc">Open Daily: 9:00 AM – 10:30 PM</p>
          <div className="social-icons">
            <a
              href="https://wa.me/918129110411"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-icon-btn whatsapp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://instagram.com/Ooze._cafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon-btn instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/Ooze Ooze"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon-btn facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Ooze Cafe. All rights reserved. Crafted with ❤️ for food lovers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
