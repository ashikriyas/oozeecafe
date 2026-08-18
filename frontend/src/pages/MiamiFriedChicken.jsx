import React from "react";
import { Link } from "react-router-dom";
import "./MiamiFriedChicken.css";
import heroChickenImg from "../assets/chick2.png";
import classicThumb from "../assets/fried_chicken.png";
import periThumb from "../assets/peri_strips.png";

const MiamiFriedChicken = () => {
  return (
    <section className="miami-section">
      <div className="miami-wrapper">

        {/* LEFT – BRAND STORY */}
        <div className="miami-text">

          <div className="miami-badge-tag">
            <span className="badge-pulse"></span>
            Signature Special
          </div>

          <h2 className="miami-heading">
            Miami<br />
            <span>Fried Chicken</span>
          </h2>

          {/* IMAGE FOR MOBILE */}
          <div className="miami-visual-mobile">
            <img src={heroChickenImg} alt="Miami Fried Chicken Bucket" />
          </div>

          <div className="miami-divider"></div>

          <p className="miami-paragraph">
            Miami Fried Chicken is a masterclass in flavor. Each piece is carefully selected,
            marinated for 12+ hours with secret herbs, and pressure-fried to golden, crunchy perfection on the outside,
            locking in supreme tenderness and juicy flavor inside.
          </p>

          <div className="miami-types-grid">
            <div className="miami-flavor-card">
              <div className="flavor-img-box">
                <img src={classicThumb} alt="Classical Miami Fried Chicken" />
                <span className="flavor-chip classic">Original</span>
              </div>
              <div className="flavor-info">
                <h4>Classical Fried Chicken</h4>
                <p>
                  The timeless golden original — extra crisp, herb-infused coating with rich, tender juicy chicken.
                </p>
              </div>
            </div>

            <div className="miami-flavor-card">
              <div className="flavor-img-box">
                <img src={periThumb} alt="Signature Peri-Peri Fried Chicken" />
                <span className="flavor-chip spicy">Fiery Spicy</span>
              </div>
              <div className="flavor-info">
                <h4>Signature Peri-Peri Chicken</h4>
                <p>
                  Bold & zesty — dusted in our proprietary African Bird’s Eye chili seasoning for that irresistible kick.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON AS LINK */}
          <div className="miami-actions hero-cta">
            <Link to="/friedchicken" className="btn miami-btn-order">
              <span>Explore All Combos & Buckets</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

        </div>

        {/* RIGHT – PRODUCT IMAGE */}
        <div className="miami-visual">
          <div className="miami-img-glow"></div>
          <img src={heroChickenImg} alt="Miami Fried Chicken Deluxe Bucket" className="miami-floating-img" />
          <div className="miami-floating-badge">
            <span className="badge-stars">★★★★★</span>
            <strong>Chef's #1 Pick</strong>
          </div>
        </div>

      </div>

      {/* Subtle ending line */}
      <div className="miami-footer-line"></div>

    </section>
  );
};

export default MiamiFriedChicken;

