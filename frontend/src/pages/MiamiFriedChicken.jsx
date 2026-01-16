import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./MiamiFriedChicken.css";
import chickenImg from "../assets/chick2.png";

const MiamiFriedChicken = () => {
  return (
    <section className="miami-section">
      <div className="miami-wrapper">

        {/* LEFT – BRAND STORY */}
        <div className="miami-text">

          <div className="miami-label">Signature Fried Chicken</div>

          <h2 className="miami-heading">
            Miami<br />
            <span>Fried Chicken</span>
          </h2>

          {/* IMAGE FOR MOBILE */}
          <div className="miami-visual-mobile">
            <img src={chickenImg} alt="Miami Fried Chicken" />
          </div>

          <div className="miami-divider"></div>

          <p className="miami-paragraph">
            Miami Fried Chicken is a masterclass in flavor. Each piece is carefully selected,
            marinated for hours, and coated in our exclusive Miami spice blend.
            The result is golden, crunchy perfection on the outside, with tender,
            juicy chicken inside.
          </p>

          <p className="miami-paragraph">
            We proudly offer <strong>two types</strong> of fried chicken:
          </p>

          <div className="miami-types">
            <div className="type-card">
              <h4>Classical Miami Fried Chicken</h4>
              <p>
                The timeless original — golden, crispy on the outside and juicy on the inside.
                Perfectly balanced seasoning with a hint of herbs, a true classic for all fried chicken lovers.
              </p>
            </div>
            <div className="type-card">
              <h4>Signature Peri-Peri Fried Chicken</h4>
              <p>
                Bold, spicy, and full of flavor — marinated with our special Peri-Peri blend,
                delivering a fiery kick with every bite. Ideal for those seeking a premium, adventurous taste.
              </p>
            </div>
          </div>

          {/* BUTTON AS LINK */}
          <div className="miami-actions hero-cta">
            <Link to="/friedchicken" className="btn primary">
              Order Now
            </Link>
          </div>

        </div>

        {/* RIGHT – PRODUCT IMAGE */}
        <div className="miami-visual">
          <img src={chickenImg} alt="Miami Fried Chicken" />
        </div>

      </div>

      {/* Subtle ending line */}
      <div className="miami-footer-line"></div>

    </section>
  );
};

export default MiamiFriedChicken;
