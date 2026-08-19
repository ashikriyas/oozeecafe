import React, { useState } from "react";
import "./FriedChickenCombo.css";

/* HERO & BANNERS */
import classicBanner from "../assets/chicken_banner.png";
import periPeriBanner from "../assets/peri_peri.png";

/* COMBO DISH IMAGES */
import miniMealImg from "../assets/mini-meal.png";
import friedChickenImg from "../assets/fried_chicken.png";
import chickenImg from "../assets/chicken.png";
import chickBucketImg from "../assets/chick2.png";

/* ADD-ON & SNACK IMAGES */
import nuggetsImg from "../assets/chicken_n.png";
import cheeseBallsImg from "../assets/chicken_c.png";
import periPeriStripsImg from "../assets/peri_strips.png";
import classicStripsImg from "../assets/chicken_strips_classic.png";
import wingsImg from "../assets/chickenwings.png";
import friesImg from "../assets/fries.png";

const whatsappNumber = "8129110411";

/* ================= COMBO DATA WITH IMAGES & BADGES ================= */

const classicCombos = [
  {
    id: 1,
    name: "Student Meal",
    price: "₹160",
    numericPrice: 160,
    badge: "🔥 Super Saver",
    image: miniMealImg,
    category: "solo",
    portion: "1 PC Chicken + Shake",
    items: ["1 Leg PC Crispy Chicken", "1 Fresh Bun", "Golden French Fries", "Oreo Thick Shake"],
  },
  {
    id: 2,
    name: "Mini Meal",
    price: "₹220",
    numericPrice: 220,
    badge: "⭐ Best Seller",
    image: miniMealImg,
    category: "solo",
    portion: "2 PCS Chicken + Drink",
    items: ["2 PC Fried Chicken", "2 Fresh Buns", "1 Garlic Mayonnaise", "250 ml Chilled Pepsi", "Crispy French Fries"],
  },
  {
    id: 3,
    name: "Dinner Meal",
    price: "₹340",
    numericPrice: 340,
    badge: "🍗 Solo Feast",
    image: friedChickenImg,
    category: "solo",
    portion: "3 PCS Chicken + Drink",
    items: ["3 PC Fried Chicken", "3 Fresh Buns", "2 Garlic Mayonnaise", "750 ml Chilled Pepsi", "Crispy French Fries"],
  },
  {
    id: 4,
    name: "Big Meal",
    price: "₹450",
    numericPrice: 450,
    badge: "💥 Double Delight",
    image: chickenImg,
    category: "duo",
    portion: "4 PCS Chicken + Drink",
    items: ["4 PC Fried Chicken", "4 Fresh Buns", "2 Garlic Mayonnaise", "750 ml Chilled Pepsi", "Crispy French Fries"],
  },
  {
    id: 5,
    name: "Snack Bag",
    price: "₹700",
    numericPrice: 700,
    badge: "👥 Sharing Pack",
    image: friedChickenImg,
    category: "family",
    portion: "6 PCS Chicken Feast",
    items: ["6 PC Fried Chicken", "4 Fresh Buns", "3 Garlic Mayonnaise", "750 ml Chilled Pepsi", "Crispy French Fries"],
  },
  {
    id: 6,
    name: "Mini Party Meal",
    price: "₹900",
    numericPrice: 900,
    badge: "🎉 Mini Feast",
    image: chickBucketImg,
    category: "family",
    portion: "8 PCS Bucket + Slaw",
    items: ["8 PC Fried Chicken", "4 Fresh Buns", "3 Garlic Mayonnaise", "750 ml Chilled Pepsi", "Crispy French Fries", "1 House Coleslaw"],
  },
  {
    id: 7,
    name: "Party Meal",
    price: "₹1350",
    numericPrice: 1350,
    badge: "🥳 Party Favorite",
    image: chickBucketImg,
    category: "party",
    portion: "12 PCS Party Bucket",
    items: ["12 PC Fried Chicken", "6 Fresh Buns", "4 Garlic Mayonnaise", "2.25 Ltr Pepsi Bottle", "Crispy French Fries", "2 House Coleslaws"],
  },
  {
    id: 8,
    name: "Family Meal",
    price: "₹1700",
    numericPrice: 1700,
    badge: "👨‍👩‍👧‍👦 Family Special",
    image: classicBanner,
    category: "party",
    portion: "16 PCS Mega Feast",
    items: ["16 PC Fried Chicken", "8 Fresh Buns", "4 Garlic Mayonnaise", "2.25 Ltr Pepsi Bottle", "Crispy French Fries", "2 House Coleslaws"],
  },
  {
    id: 9,
    name: "Jumbo Family Meal",
    price: "₹2400",
    numericPrice: 2400,
    badge: "👑 Ultimate Feast",
    image: classicBanner,
    category: "party",
    portion: "24 PCS Monster Bucket",
    items: ["24 PC Fried Chicken", "8 Fresh Buns", "4 Garlic Mayonnaise", "2.25 Ltr Pepsi Bottle", "Large French Fries (L)", "2 House Coleslaws"],
  },

];

/* ================= ADD-ON ITEMS ================= */

const addOnItems = [
  {
    id: "addon-1",
    name: "Chicken Nuggets",
    pieces: "6 PCS",
    price: "₹100",
    numericPrice: 100,
    badge: "Crispy Bites",
    image: nuggetsImg,
  },
  {
    id: "addon-2",
    name: "Cheese Balls",
    pieces: "5 PCS",
    price: "₹100",
    numericPrice: 100,
    badge: "Cheesy Melt",
    image: cheeseBallsImg,
  },
  {
    id: "addon-3",
    name: "Peri Peri Strips",
    pieces: "6 PCS",
    badge: "Spicy Hit",
    price: "₹240",
    numericPrice: 240,
    image: periPeriStripsImg,
  },
  {
    id: "addon-4",
    name: "Classic Chicken Strips",
    pieces: "6 PCS",
    badge: "Tender Gold",
    price: "₹200",
    numericPrice: 200,
    image: classicStripsImg,
  },
  {
    id: "addon-5",
    name: "Glazed Chicken Wings",
    pieces: "6 PCS",
    badge: "Smoky BBQ",
    price: "₹210",
    numericPrice: 210,
    image: wingsImg,
  },
  {
    id: "addon-6",
    name: "Golden French Fries",
    pieces: "1 Portion",
    badge: "Classic Side",
    price: "₹80",
    numericPrice: 80,
    image: friesImg,
  },
];

const FriedChickenCombo = () => {
  const [filter, setFilter] = useState("all");
  const [quantities, setQuantities] = useState({});

  const filteredCombos = filter === "all"
    ? classicCombos
    : classicCombos.filter((c) => c.category === filter);

  const getQty = (id) => quantities[id] || 1;

  const changeQty = (id, delta) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  /* ===== WHATSAPP MESSAGE WITH SECTION ===== */
  const handleOrder = (item, section) => {
    const qty = getQty(item.id);
    const date = new Date().toLocaleDateString("en-IN");
    const subtotal = item.numericPrice * qty;

    const message = `*OOZE CAFE ORDER* 🍗
----------------------------
*Date:* ${date}
*Category:* ${section}
*Item:* ${item.name}
${item.portion ? `*Portion:* ${item.portion}\n` : ""}${item.pieces ? `*Pieces:* ${item.pieces}\n` : ""}*Quantity:* ${qty}
*Unit Price:* ${item.price}
*Total Amount:* ₹${subtotal}/-
----------------------------
*Customer Name:* 
*Delivery Address:* 
*Phone Number:* 

Please confirm my order. Thank you!`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="chicken-page-container">

      {/* HERO SECTION */}
      <section className="chicken-hero">
        <div className="hero-chicken-content">
          <div className="hero-pill-tag">
            <span>🔥</span> Freshly Fried to Golden Perfection
          </div>
          <h1 className="hero-title">
            Miami Classic <br />
            <span className="text-gradient">Fried Chicken & Combos</span>
          </h1>
          <p className="hero-subtext">
            Marinated with our 12 secret herbs & spices, coated with crunchy breading,
            and fried to crispy golden perfection. Choose from solo meals, party buckets, and cheesy add-ons!
          </p>

          <div className="hero-guarantees">
            <div className="guarantee-item">
              <span className="icon">🍗</span>
              <span>100% Fresh Halal Meat</span>
            </div>
            <div className="guarantee-item">
              <span className="icon">⏱️</span>
              <span>30-Min Fast Delivery</span>
            </div>
            <div className="guarantee-item">
              <span className="icon">💬</span>
              <span>1-Click WhatsApp Dispatch</span>
            </div>
          </div>
        </div>

        <div className="hero-chicken-visual">
          <img src={classicBanner} alt="Miami Fried Chicken Bucket Spread" className="hero-main-img" />
        </div>
      </section>

      {/* FILTER TABS */}
      <div className="combo-filter-bar">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          🍗 All Combos ({classicCombos.length})
        </button>
        <button
          className={`filter-btn ${filter === "solo" ? "active" : ""}`}
          onClick={() => setFilter("solo")}
        >
          🍔 Solo Meals
        </button>
        <button
          className={`filter-btn ${filter === "duo" ? "active" : ""}`}
          onClick={() => setFilter("duo")}
        >
          👫 Duo Packs
        </button>
        <button
          className={`filter-btn ${filter === "party" ? "active" : ""}`}
          onClick={() => setFilter("party")}
        >
          🎉 Family & Party Buckets
        </button>
      </div>

      {/* COMBOS GRID */}
      <section className="combo-section">
        <div className="section-header-box">
          <h2 className="section-title">
            Signature <span className="text-gradient">Combo Meals</span>
          </h2>
          <p className="section-description">
            Complete value combos served with warm buns, chilled Pepsi, house garlic dip, and crispy fries.
          </p>
        </div>

        <div className="combo-grid">
          {filteredCombos.map((combo) => {
            const qty = getQty(combo.id);
            const subtotal = combo.numericPrice * qty;

            return (
              <article className="combo-card" key={combo.id}>
                <div className="combo-img-wrapper">
                  <img src={combo.image} alt={combo.name} className="combo-card-img" />
                  <span className="combo-badge">{combo.badge}</span>
                  <span className="combo-portion-tag">{combo.portion}</span>
                </div>

                <div className="combo-body">
                  <div className="combo-header">
                    <h3 className="combo-name">{combo.name}</h3>
                    <div className="combo-price-box">
                      <span className="price-label">Price</span>
                      <span className="combo-price">{combo.price}</span>
                    </div>
                  </div>

                  <div className="combo-includes">
                    <span className="includes-title">What's Included:</span>
                    <ul className="combo-items-list">
                      {combo.items.map((item, idx) => (
                        <li key={idx}>
                          <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quantity Stepper & Price */}
                  <div className="combo-bottom-controls">
                    <div className="combo-qty-box">
                      <span className="qty-label">Quantity</span>
                      <div className="combo-stepper">
                        <button
                          className="combo-stepper-btn"
                          onClick={() => changeQty(combo.id, -1)}
                          disabled={qty <= 1}
                        >
                          −
                        </button>
                        <span className="combo-stepper-val">{qty}</span>
                        <button
                          className="combo-stepper-btn"
                          onClick={() => changeQty(combo.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {qty > 1 && (
                      <div className="combo-subtotal">
                        <span>Total:</span>
                        <strong>₹{subtotal}/-</strong>
                      </div>
                    )}
                  </div>

                  <button
                    className="combo-order-btn"
                    onClick={() => handleOrder(combo, "Miami Fried Chicken Combo")}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>Order via WhatsApp ({qty})</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PERI-PERI SPOTLIGHT BANNER */}
      <section className="peri-spotlight-section">
        <div className="peri-spotlight-card">
          <div className="peri-content">
            <span className="peri-tag">🌶️ Fiery & Adventurous</span>
            <h2>Craving Something Extra Spicy?</h2>
            <p>
              Try our <strong>Miami Peri-Peri Fried Chicken</strong> dusted with African Bird's Eye chilies,
              garlic herbs, and zesty lime pepper seasoning. Available across all buckets and individual strips!
            </p>
            <button
              className="peri-cta-btn"
              onClick={() => handleOrder({ id: "peri-special", name: "Miami Peri-Peri Special Bucket", price: "₹240", numericPrice: 240 }, "Peri-Peri Chicken")}
            >
              Order Peri-Peri Special
            </button>
          </div>
          <div className="peri-visual">
            <img src={periPeriBanner} alt="Miami Peri-Peri Fried Chicken Buckets" />
          </div>
        </div>
      </section>

      {/* SNACKS & ADD-ONS */}
      <section className="combo-section addons-section">
        <div className="section-header-box">
          <h2 className="section-title">
            Crunchy <span className="text-gradient">Snacks & Add-Ons</span>
          </h2>
          <p className="section-description">
            Complete your feast with delicious cheesy sides, boneless strips, nuggets, and seasoned wings.
          </p>
        </div>

        <div className="addons-grid">
          {addOnItems.map((item) => {
            const qty = getQty(item.id);
            const subtotal = item.numericPrice * qty;

            return (
              <article className="addon-card" key={item.id}>
                <div className="addon-img-wrapper">
                  <img src={item.image} alt={item.name} className="addon-img" />
                  <span className="addon-badge">{item.badge}</span>
                </div>

                <div className="addon-body">
                  <h3 className="addon-name">{item.name}</h3>
                  <div className="addon-meta">
                    <span className="addon-pieces">📦 {item.pieces}</span>
                    <span className="addon-price">{item.price}</span>
                  </div>

                  {/* Quantity Stepper for Addons */}
                  <div className="addon-stepper-row">
                    <div className="combo-stepper small-stepper">
                      <button
                        className="combo-stepper-btn"
                        onClick={() => changeQty(item.id, -1)}
                        disabled={qty <= 1}
                      >
                        −
                      </button>
                      <span className="combo-stepper-val">{qty}</span>
                      <button
                        className="combo-stepper-btn"
                        onClick={() => changeQty(item.id, 1)}
                      >
                        +
                      </button>
                    </div>

                    {qty > 1 && (
                      <span className="addon-subtotal-tag">₹{subtotal}/-</span>
                    )}
                  </div>

                  <button
                    className="addon-order-btn"
                    onClick={() => handleOrder(item, "Snacks & Add-Ons")}
                  >
                    Quick Add ({qty})
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default FriedChickenCombo;
