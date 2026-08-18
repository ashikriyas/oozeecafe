import React, { useEffect } from "react";
import "./FriedChickenCombo.css";

import classicBanner from "../assets/chicken_banner.png";

/* ADD-ON IMAGES */
import nuggetsImg from "../assets/chicken_n.png";
import cheeseBallsImg from "../assets/chicken_c.png";
import periPeriStripsImg from "../assets/peri_strips.png";
import classicStripsImg from "../assets/chicken_strips_classic.png";

const whatsappNumber = "8129110411";

/* ================= EXISTING DATA (UNCHANGED) ================= */

const classicCombos = [
  {
    name: "Student Meal",
    price: "₹160",
    items: ["1 Leg PC", "1 Bun", "French Fries", "Oreo Shake"],
  },
  {
    name: "Mini Meal",
    price: "₹220",
    items: ["2 PC Fried", "2 Bun", "1 Mayonnaise", "250 ml Pepsi", "French Fries"],
  },
  {
    name: "Dinner Meal",
    price: "₹340",
    items: ["3 PC Fried", "3 Bun", "2 Mayonnaise", "750 ml Pepsi", "French Fries"],
  },
  {
    name: "Big Meal",
    price: "₹450",
    items: ["4 PC Fried", "4 Bun", "2 Mayonnaise", "750 ml Pepsi", "French Fries"],
  },
  {
    name: "Snack Bag",
    price: "₹700",
    items: ["6 PC Fried", "4 Bun", "3 Mayonnaise", "750 ml Pepsi", "French Fries"],
  },
  {
    name: "Mini Party Meal",
    price: "₹900",
    items: ["8 PC Fried", "4 Bun", "3 Mayonnaise", "750 ml Pepsi", "French Fries", "1 Coleslaw"],
  },
  {
    name: "Party Meal",
    price: "₹1350",
    items: ["12 PC Fried", "6 Bun", "4 Mayonnaise", "2.25 Ltr Pepsi", "French Fries", "2 Coleslaw"],
  },
  {
    name: "Family Meal",
    price: "₹1700",
    items: ["16 PC Fried", "8 Bun", "4 Mayonnaise", "2.25 Ltr Pepsi", "French Fries", "2 Coleslaw"],
  },
  {
    name: "Jumbo Family Meal",
    price: "₹2200",
    items: ["24 PC Fried", "8 Bun", "4 Mayonnaise", "2.25 Ltr Pepsi", "French Fries(L)", "2 Coleslaw"],
  },
];

/* ================= ADD-ON ITEMS ================= */

const addOnItems = [
  {
    name: " Nuggets",
    pieces: "6 PCS",
    price: "₹100",
    image: nuggetsImg,
  },
  {
    name: "Cheese Balls",
    pieces: "5 PCS",
    price: "₹100",
    image: cheeseBallsImg,
  },
  {
    name: "Peri Peri Strips",
    pieces: "6 PCS",
    price: "₹240",
    image: periPeriStripsImg,
  },
  {
    name: "Classic Strips",
    pieces: "6 PCS",
    price: "₹200",
    image: classicStripsImg,
  },
];

const FriedChickenCombo = () => {
  useEffect(() => {
    // Scroll handled by ScrollToTop component
  }, []);

  /* ===== WHATSAPP MESSAGE WITH SECTION ===== */
  const handleOrder = (item, section) => {
    const date = new Date().toLocaleDateString("en-IN");

    const message = `
Hello Ooze Cafe

Date: ${date}

Category: ${section}

Item: ${item.name}
${item.pieces ? `Quantity: ${item.pieces}` : ""}
Price: ${item.price}

Customer Name:
Delivery Location:
`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const renderCards = (data, sectionName) =>
    data.map((combo, i) => (
      <article className="poster-card" key={i}>
        <div className="poster-header">
          <h3>{combo.name}</h3>
          <span className="poster-price">{combo.price}</span>
        </div>

        <ul className="poster-list">
          {combo.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <button onClick={() => handleOrder(combo, sectionName)}>
          Order Now
        </button>
      </article>
    ));

  return (
    <section className="combo-wrapper">

      {/* CLASSIC */}
      <div className="combo-section">
        <h2 className="section-title">Miami Classic Fried Chicken</h2>
        <img className="section-banner" src={classicBanner} alt="Classic Fried Chicken" />
        <div className="combo-grid">
          {renderCards(classicCombos, "Classic Fried Chicken")}
        </div>
      </div>

      {/* ADD-ONS */}
      <div className="combo-section">
        <h2 className="section-title">Snacks & Add-Ons</h2>

        <div className="single-item-grid">
          {addOnItems.map((item, i) => (
            <article className="poster-card single-item-card" key={i}>
              <img src={item.image} alt={item.name} className="single-item-img" />

              <div className="poster-header">
                <h3>{item.name}</h3>
                <span className="poster-price">{item.price}</span>
              </div>

              <p className="pieces-text">{item.pieces}</p>

              <button
                onClick={() => handleOrder(item, "Snacks & Add-Ons")}
              >
                Order Now
              </button>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
};

export default FriedChickenCombo;
