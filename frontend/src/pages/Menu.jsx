import React, { useEffect, useState } from "react";
import "./Menu.css";

/* ===== IMPORT IMAGES ===== */
import freshJuice from "../assets/fresh_juice.png";
import avilmilk from "../assets/avilmilk.jpg";
import mojito from "../assets/mojitos.png";
import milkshake from "../assets/milkshakes.png";
import falooda from "../assets/faloodas.png";
import wraps from "../assets/wraps.png";

import pizza from "../assets/pizzas.png";
import sandwich from "../assets/sandwiches.png";
import momos from "../assets/momo.png";
import pasta from "../assets/pastas.png";
import burger from "../assets/burgers.png";
import fries from "../assets/fries.png";

import Wings from "../assets/chickenwings.png";
import lollipop from "../assets/lollipop1.png";
import strips from "../assets/chicken_strips_classic.png";

/* ===== SPECIAL MENU IMAGES ===== */
import hexaSpcl from "../assets/hexa_spcl.png";
import iffaSpcl from "../assets/iffa_spcl.png";
import kandariSpcl from "../assets/kandari_spcl.png";
import oozeChicken from "../assets/afghani_spcl.png";

const whatsappNumber = "8129110411";

/* ===== MENU DATA ===== */
const menuData = [
  // ===== OUR SPECIAL =====
  {
    category: "Special Items",
    image: hexaSpcl,
    items: [
      { name: "Hassan Mathar", price: "₹140/-" },
      { name: "Hexa Special", price: "₹350/-" },
      { name: "Hexa Dragon", price: "₹330/-" },
      { name: "Extra Porotta", price: "₹15/-", pieces: "1 PC" },
    ]
  },
  {
    category: "Iffa Classic",
    image: iffaSpcl,
    items: [
      { name: "Full Iffa Chicken", price: "₹600/-", note: "+ 3 Porotta", porottaPerUnit: 3 },
      { name: "Half Iffa Chicken", price: "₹350/-", note: "+ 2 Porotta", porottaPerUnit: 2 },
    ]
  },
  {
    category: "Iffa Kandari",
    image: kandariSpcl,
    items: [
      { name: "Full Kandari Iffa", price: "₹650/-", note: "+ 3 Porotta", porottaPerUnit: 3 },
      { name: "Half Kandari Iffa", price: "₹370/-", note: "+ 2 Porotta", porottaPerUnit: 2 },
    ]
  },
  {
    category: "Ooze Special Chicken",
    image: oozeChicken,
    items: [
      { name: "Full Ooze Special", price: "₹700/-", note: "+ 3 Porotta", porottaPerUnit: 3 },
      { name: "Half Ooze Special", price: "₹400/-", note: "+ 2 Porotta", porottaPerUnit: 2 },
    ]
  },
  // ===== REGULAR MENU =====
  {
    category: "Wraps",
    image: wraps,
    items: [
      { name: "Chicken Wrap", price: "₹60/-", message: "Hi, I want to order Chicken Wrap." },
      { name: "Zinger Wrap", price: "₹80/-", message: "Hi, I want to order Zinger Wrap." },
      { name: "Tikka Wrap", price: "₹80/-", message: "Hi, I want to order Tikka Wrap." },
      { name: "Jumbo Roll + Cheese", price: "₹140/-", message: "Hi, I want to order Jumbo Roll + Cheese." },
    ]
  },
  {
    category: "Chicken Lollipop",
    image: lollipop,
    items: [
      { name: "Schezwan Lollipop", price: "₹230/-", pieces: "5 PCS" },
      { name: "Fried Lollipop", price: "₹190/-", pieces: "5 PCS" },
      { name: "Honey Glazed Lollipop", price: "₹250/-", pieces: "5 PCS" },
      { name: "Peri Peri Lollipop", price: "₹220/-", pieces: "5 PCS" },
    ]
  },
  {
    category: "Chicken Wings",
    image: Wings,
    items: [
      { name: "Schezwan Wings", price: "₹230/-", pieces: "6 PCS" },
      { name: "Fried Wings", price: "₹190/-", pieces: "6 PCS" },
      { name: "Honey Glazed Wings", price: "₹250/-", pieces: "6 PCS" },
      { name: "Peri Peri Wings", price: "₹220/-", pieces: "6 PCS" },
    ]
  },
  {
    category: "Chicken Strips",
    image: strips,
    items: [
      { name: "Peri Peri Strips", price: "₹230/-", pieces: "5 PCS" },
      { name: "Normal Strips", price: "₹200/-", pieces: "5 PCS" },
      { name: "Honey Glazed Strips", price: "₹260/-", pieces: "5 PCS" },
    ]
  },

  {

    category: "Pizzas",
    image: pizza,
    items: [
      { name: "Pizza Papperoni", price: "₹320/-", message: "Hi, I want to order Pizza Papperoni." },
      { name: "Pizza Supreme", price: "₹320/-", message: "Hi, I want to order Pizza Supreme." },
      { name: "Pizza Tikka", price: "₹320/-", message: "Hi, I want to order Pizza Tikka." },
      { name: "Pizza Fried Chicken", price: "₹320/-", message: "Hi, I want to order Pizza Fried Chicken." },
    ]
  },


  {
    category: "Sandwich",
    image: sandwich,
    items: [
      { name: "Chicken Sandwich", price: "₹60/-", message: "Hi, I want to order Chicken Sandwich." },
      { name: "Chicken Zinger", price: "₹80/-", message: "Hi, I want to order Chicken Zinger Sandwich." },
      { name: "Chicken Club", price: "₹130/-", message: "Hi, I want to order Chicken Club Sandwich." },
      { name: "Chicken Club Cheese", price: "₹150/-", message: "Hi, I want to order Chicken Club Cheese Sandwich." },
    ]
  },
  {
    category: "Momos",
    image: momos,
    items: [
      { name: "Pizza Momos", price: "₹160/-", message: "Hi, I want to order Pizza Momos." },
      { name: "Peri Peri Momos", price: "₹120/-", message: "Hi, I want to order Peri Peri Momos." },
      { name: "Fried Momos", price: "₹110/-", message: "Hi, I want to order Fried Momos." },
      { name: "Dynamite Momos", price: "₹130/-", message: "Hi, I want to order Dynamite Momos." },
    ]
  },
  {
    category: "Pasta",
    image: pasta,
    items: [
      { name: "Pink Sauce Pasta", price: "₹140/-", message: "Hi, I want to order Pink Sauce Pasta." },
      { name: "White Sauce Pasta", price: "₹130/-", message: "Hi, I want to order White Sauce Pasta." },
      { name: "Tandoori Pasta", price: "₹140/-", message: "Hi, I want to order Tandoori Pasta." },
      { name: "Hadid Pasta", price: "₹140/-", message: "Hi, I want to order Hadid Pasta." },
    ]
  },
  {
    category: "Burger",
    image: burger,
    items: [
      { name: "Chicken Classic", price: "₹90/-", message: "Hi, I want to order Chicken Classic Burger." },
      { name: "Zinger Dynamite", price: "₹120/-", message: "Hi, I want to order Zinger Dynamite Burger." },
      { name: "Zinger Peri Peri", price: "₹130/-", message: "Hi, I want to order Zinger Peri Peri Burger." },
      { name: "Zinger Classic", price: "₹100/-", message: "Hi, I want to order Zinger Classic Burger." },
      { name: "Zinger Signature", price: "₹130/-", message: "Hi, I want to order Zinger Signature Burger." },
      { name: "Hexa Burger", price: "₹350/-", message: "Hi, I want to order Hexa Burger." },
      { name: "Hexa Dragon", price: "₹330/-", message: "Hi, I want to order Hexa Dragon Burger." },
    ]
  },
  {
    category: "Loaded Fries",
    image: fries,
    items: [
      { name: "Loaded Classic Fries", price: "₹170/-", message: "Hi, I want to order Loaded Classic Fries" },
      { name: "Loaded Lay's Fries", price: "₹220/-", message: "Hi, I want to order Loaded Lay's Fries" },
      { name: "Loaded Tikka Fries", price: "₹200/-", message: "Hi, I want to order Loaded Tikka Fries" },
      { name: "Normal Fries(M)", price: "₹70/-", message: "Hi, I want to order Normal Medium Fries" },
      { name: "Normal Fries(L)", price: "₹90/-", message: "Hi, I want to order Normal Large Fries" },
      { name: "Masala Fries", price: "₹100/-", message: "Hi, I want to order Masala Fries" },
      { name: "Cheese Fries", price: "₹120/-", message: "Hi, I want to order Cheese Fries" },
    ]
  },
  {
    category: "Fresh Juice",
    image: freshJuice,
    items: [
      { name: "Fresh Lime", price: "₹30/-", message: "Hi, I want to order Fresh Lime from Fresh Juice section." },
      { name: "Mint Lime", price: "₹40/-", message: "Hi, I want to order Mint Lime from Fresh Juice section." },
      { name: "Musambi", price: "₹60/-", message: "Hi, I want to order Musambi from Fresh Juice section." },
      { name: "Watermelon", price: "₹70/-", message: "Hi, I want to order Watermelon Juice from Fresh Juice section." },
      { name: "Pappaya", price: "₹70/-", message: "Hi, I want to order Pappaya Juice from Fresh Juice section." }
    ]
  },
  {
    category: "Avil Milk",
    image: avilmilk,
    items: [
      { name: "Vanilla Avil Milk", price: "₹70/-", message: "Hi, I'd like to order Vanilla Avil Milk." },
      { name: "Strawberry Avil Milk", price: "₹70/-", message: "Hi, I'd like to order Strawberry Avil Milk." },
      { name: "Butterscotch Avil Milk", price: "₹80/-", message: "Hi, I'd like to order Butterscotch Avil Milk." },
      { name: "Oreo Avil Milk", price: "₹80/-", message: "Hi, I'd like to order Oreo Avil Milk." },
      { name: "Mango Avil Milk", price: "₹80/-", message: "Hi, I'd like to order Mango Avil Milk." },
    ]
  },
  {
    category: "Mojito",
    image: mojito,
    items: [
      { name: "Fashion Fruit Punch", price: "₹70/-", message: "Hi, I want to order Fashion Fruit Punch from Mojito section." },
      { name: "Black Currant Zing", price: "₹70/-", message: "Hi, I want to order Black Currant Zing from Mojito section." },
      { name: "Green Apple", price: "₹70/-", message: "Hi, I want to order Green Apple Mojito from Mojito section." },
      { name: "Kiwi Kick", price: "₹70/-", message: "Hi, I want to order Kiwi Kick from Mojito section." },
      { name: "Litchi", price: "₹70/-", message: "Hi, I want to order Litchi Mojito from Mojito section." },
      { name: "Ice Tea Lemon", price: "₹80/-", message: "Hi, I want to order Ice Tea Lemon." },
      { name: "Ice Peach", price: "₹80/-", message: "Hi, I want to order Ice Peach." },
      { name: "Mint Lime", price: "₹70/-", message: "Hi, I want to order Mint Lime Mojito from Mojito section." },
    ]
  },
  {
    category: "Milk Shake",
    image: milkshake,
    items: [
      { name: "Cold Coffee", price: "₹60/-", message: "Hi, I want to order Cold Coffee from milk shake section." },
      { name: "Oreo Shake", price: "₹70/-", message: "Hi, I want to order Oreo Shake from milk shake section." },
      { name: "Chikku Shake", price: "₹70/-", message: "Hi, I want to order Chikku Shake from milk shake section." },
      { name: "Mango Shake", price: "₹80/-", message: "Hi, I want to order Mango Shake from milk shake section." },
      { name: "Avocado Shake", price: "₹110/-", message: "Hi, I want to order Avocado Shake from milk shake section." },
      { name: "Roasted Cashew", price: "₹100/-", message: "Hi, I want to order Roasted Cashew from milk shake section." },
      { name: "Dates and Cashew", price: "₹120/-", message: "Hi, I want to order Dates and Cashew from milk shake section." },
      { name: "Marshmallow", price: "₹120/-", message: "Hi, I want to order Marshmallow Shake from milk shake section." },
      { name: "Popcorn Shake", price: "₹130/-", message: "Hi, I want to order Popcorn Shake from milk shake section." },
      { name: "Nutella Shake", price: "₹120/-", message: "Hi, I want to order Nutella Shake from milk shake section." },
      { name: "Island Blue", price: "₹120/-", message: "Hi, I want to order Island Blue from milk shake section." },
      { name: "Litchi Shake", price: "₹100/-", message: "Hi, I want to order Litchi Shake from milk shake section." },
      { name: "Kiwi Shake", price: "₹110/-", message: "Hi, I want to order Kiwi Shake from milk shake section." },
      { name: "Bubble Shake", price: "₹120/-", message: "Hi, I want to order Bubble Shake from milk shake section." },
      { name: "Blueberry Shake", price: "₹110/-", message: "Hi, I want to order Blueberry Shake from milk shake section." },
      { name: "Watermelon Shake", price: "₹90/-", message: "Hi, I want to order Watermelon Shake from milk shake section." },
      { name: "Chocolate Shake", price: "₹100/-", message: "Hi, I want to order Chocolate Shake from milk shake section." },
      { name: "Grape Shake", price: "₹80/-", message: "Hi, I want to order Grape Shake from milk shake section." },
      { name: "Tender Shake", price: "₹90/-", message: "Hi, I want to order Tender Shake from milk shake section." },
      { name: "Kannur Cocktail", price: "₹70/-", message: "Hi, I want to order Kannur Cocktail." },
    ]
  },
  {
    category: "Falooda",
    image: falooda,
    items: [
      { name: "Ooze Special", price: "₹220/-", message: "Hi, I want to order Ooze Special Falooda." },
      { name: "Dry Fruit", price: "₹200/-", message: "Hi, I want to order Dry Fruit Falooda." },
      { name: "Royal", price: "₹160/-", message: "Hi, I want to order Royal Falooda." },
      { name: "Mango", price: "₹180/-", message: "Hi, I want to order Mango Falooda." },
      { name: "Butterscotch", price: "₹190/-", message: "Hi, I want to order Butterscotch Falooda." },
      { name: "Tender", price: "₹200/-", message: "Hi, I want to order Tender Falooda." },
      { name: "Spanish Delight", price: "₹230/-", message: "Hi, I want to order Spanish Delight Falooda." },
      { name: "Oreo", price: "₹210/-", message: "Hi, I want to order Oreo Falooda." },
    ]
  },

];

// Helper: parse numeric price like "₹60/-" → 60
const parsePrice = (priceStr) => {
  const match = priceStr.replace(/[^\d]/g, "");
  return match ? parseInt(match, 10) : 0;
};

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // quantities keyed by "sectionIndex-itemIndex"
  const [quantities, setQuantities] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    const el = document.getElementById(`cat-${category.replace(/\s+/g, "-").toLowerCase()}`);
    if (el) {
      const offset = 140; // navbar + strip height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Scroll handled by ScrollToTop component
  }, []);

  const getQty = (key) => quantities[key] ?? 1;

  const changeQty = (key, delta) => {
    setQuantities((prev) => {
      const current = prev[key] ?? 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [key]: next };
    });
  };

  const buildMessage = (item, category, qty) => {
    const today = new Date().toLocaleDateString("en-IN");
    const unitPrice = parsePrice(item.price);
    const total = unitPrice * qty;

    let porottaLine = "";
    if (item.porottaPerUnit) {
      const totalPorottas = item.porottaPerUnit * qty;
      porottaLine = `\n🥞 Porotta Quantity: ${totalPorottas} Nos (${item.porottaPerUnit} included per portion)`;
    } else if (item.note && item.note.toLowerCase().includes("porotta")) {
      porottaLine = `\n🥞 Note: ${item.note}`;
    }

    return `Hello Ooze Cafe! 🍽️

📅 Date: ${today}
📂 Category: ${category}
🍴 Item: ${item.name}${item.pieces ? ` (${item.pieces})` : ""}
🔢 Quantity: ${qty}${porottaLine}
💰 Price per item: ${item.price}
🧾 Total: ₹${total}/-

📞 My Contact Number: ________
📍 Delivery Location: ________

Please confirm my order. Thank you!`;
  };

  const orderNow = (item, category, qty) => {
    const message = buildMessage(item, category, qty);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Filter menu data based on search term
  const filteredMenuData = menuData
    .map((section, si) => ({
      ...section,
      originalIndex: si,
      items: section.items
        .map((item, ii) => ({ ...item, originalIndex: ii }))
        .filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="menu-page-wrapper">
      <section className="menu-page">
        <div className="menu-header">
          <h1>Our Menu</h1>
          <p>Crafted with care • Served fresh • Order instantly on WhatsApp</p>

          {/* Search Bar */}
          <div className="menu-search-container">
            <div className="menu-search-box">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                className="menu-search-input"
                placeholder="Search for your favorite dish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="search-clear-btn"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            {searchTerm && (
              <p className="search-results-text">
                Found {filteredMenuData.reduce((acc, s) => acc + s.items.length, 0)} items
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ===== CATEGORY STRIP ===== */}
      <div className="cat-strip-wrapper">
        <div className="cat-strip">
          {menuData.map((section) => (
            <button
              key={section.category}
              className={`cat-chip ${activeCategory === section.category ? "cat-chip--active" : ""}`}
              onClick={() => scrollToCategory(section.category)}
            >
              <img src={section.image} alt={section.category} className="cat-chip-img" />
              <span className="cat-chip-label">{section.category}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="menu-body">
        <div className="menu-container">
        {filteredMenuData.map((section) => {
          const isSpecial = ["Special Items","Iffa Classic","Iffa Kandari","Ooze Special Chicken"].includes(section.category);
          return (
          <div
            className={`menu-card${isSpecial ? " menu-card--special" : ""}`}
            key={section.originalIndex}
            id={`cat-${section.category.replace(/\s+/g, "-").toLowerCase()}`}
          >
            <div className="menu-image">
              {isSpecial && <div className="special-badge">⭐ Our Special</div>}
              <img src={section.image} alt={section.category} />
            </div>

            <div className="menu-content">
              <h2>{section.category}</h2>

              <ul>
                {section.items.map((item) => {
                  const key = `${section.originalIndex}-${item.originalIndex}`;
                  const qty = getQty(key);
                  const unitPrice = parsePrice(item.price);

                  return (
                    <li key={key}>
                      {/* Left: name + pieces + note + price */}
                      <div className="item-info">
                        <span className="item-name">{item.name}</span>
                        {item.pieces && (
                          <span className="item-pieces">{item.pieces}</span>
                        )}
                        {item.porottaPerUnit ? (
                          <span className="item-note">
                            {qty > 1
                              ? `🥞 +${item.porottaPerUnit * qty} Porotta (${item.porottaPerUnit}/order)`
                              : `🥞 ${item.note}`}
                          </span>
                        ) : item.note ? (
                          <span className="item-note">{item.note}</span>
                        ) : null}
                        <span className="item-price">{item.price}</span>
                      </div>

                      {/* Right: quantity stepper + order button */}
                      <div className="item-right">
                        {/* Quantity Stepper */}
                        <div className="qty-stepper">
                          <button
                            className="qty-btn"
                            onClick={() => changeQty(key, -1)}
                            aria-label="Decrease quantity"
                            disabled={qty <= 1}
                          >
                            −
                          </button>
                          <span className="qty-count">{qty}</span>
                          <button
                            className="qty-btn"
                            onClick={() => changeQty(key, 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Total price when qty > 1 */}
                        {qty > 1 && unitPrice > 0 && (
                          <span className="item-total">₹{unitPrice * qty}/-</span>
                        )}

                        {/* Order button */}
                        <button
                          className="order-btn"
                          onClick={() => orderNow(item, section.category, qty)}
                        >
                          Order
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          );
        })}


        {/* Empty State */}
        {searchTerm && filteredMenuData.length === 0 && (
          <div className="empty-search-state">
            <div className="empty-icon">🔍</div>
            <h3>No items found</h3>
            <p>Try searching with different keywords</p>
            <button className="clear-search-btn" onClick={() => setSearchTerm("")}>
              Clear Search
            </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
