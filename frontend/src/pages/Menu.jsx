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
      { name: "Pizza Pepperoni", price: "₹320/-", message: "Hi, I want to order Pizza Pepperoni." },
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
  if (!priceStr) return 0;
  const match = priceStr.toString().replace(/[^\d]/g, "");
  return match ? parseInt(match, 10) : 0;
};

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // cart/quantities map: { [key: string]: { item, category, qty } }
  const [cart, setCart] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    const catId = `cat-${category.replace(/\s+/g, "-").toLowerCase()}`;
    const el = document.getElementById(catId);
    if (el) {
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 120 : 150;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const getQty = (key) => cart[key]?.qty || 0;

  const updateItemQty = (key, item, category, delta) => {
    setCart((prev) => {
      const current = prev[key]?.qty || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      }
      return {
        ...prev,
        [key]: { item, category, qty: next }
      };
    });
  };

  // Build Single Item Order Message
  const buildSingleMessage = (item, category, qty = 1) => {
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

    return `*OOZE CAFE ORDER* 🍽️
----------------------------
*Date:* ${today}
*Category:* ${category}
*Item:* ${item.name}${item.pieces ? ` (${item.pieces})` : ""}
*Quantity:* ${qty}${porottaLine}
*Price:* ${item.price}
*Total:* ₹${total}/-
----------------------------
*Customer Name:* 
*Delivery Address:* 
*Phone Number:* 

Please confirm my order. Thank you!`;
  };

  const orderSingleNow = (item, category, key) => {
    const qty = getQty(key) || 1;
    const message = buildSingleMessage(item, category, qty);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Build Multi-Item Cart Message
  const buildCartMessage = () => {
    const today = new Date().toLocaleDateString("en-IN");
    const cartItems = Object.values(cart);
    let totalAmt = 0;

    let itemsText = cartItems.map((c, i) => {
      const uPrice = parsePrice(c.item.price);
      const subTotal = uPrice * c.qty;
      totalAmt += subTotal;

      let extra = "";
      if (c.item.porottaPerUnit) {
        extra = ` (+${c.item.porottaPerUnit * c.qty} Porottas)`;
      } else if (c.item.pieces) {
        extra = ` [${c.item.pieces}]`;
      }

      return `${i + 1}. *${c.item.name}* x ${c.qty}${extra} = ₹${subTotal}/-`;
    }).join("\n");

    return `*OOZE CAFE - COMPLETE ORDER* 🛍️
----------------------------
*Date:* ${today}
*Total Items:* ${cartItems.reduce((acc, c) => acc + c.qty, 0)} Nos

*Ordered Dishes:*
${itemsText}
----------------------------
*GRAND TOTAL:* ₹${totalAmt}/-
----------------------------
*Customer Name:* 
*Delivery Address:* 
*Phone Number:* 

Please prepare and deliver our order. Thank you!`;
  };

  const orderCartNow = () => {
    if (Object.keys(cart).length === 0) return;
    const message = buildCartMessage();
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Cart summary calculations
  const totalCartCount = Object.values(cart).reduce((sum, c) => sum + c.qty, 0);
  const totalCartAmount = Object.values(cart).reduce((sum, c) => {
    return sum + (parsePrice(c.item.price) * c.qty);
  }, 0);

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
          <div className="menu-header-badge">🍽️ 150+ Delicious Options</div>
          <h1>Our Full Menu</h1>
          <p>Hand-crafted with passion • 1-Click WhatsApp Ordering</p>

          {/* Search Bar */}
          <div className="menu-search-container">
            <div className="menu-search-box">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                className="menu-search-input"
                placeholder="Search pizzas, burgers, shakes, wraps..."
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
                Found {filteredMenuData.reduce((acc, s) => acc + s.items.length, 0)} items matching "{searchTerm}"
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ===== STICKY CATEGORY STRIP ===== */}
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

      {/* ===== MENU BODY ===== */}
      <div className="menu-body">
        <div className="menu-container">
          {filteredMenuData.map((section) => {
            const isSpecial = ["Special Items", "Iffa Classic", "Iffa Kandari", "Ooze Special Chicken"].includes(section.category);
            return (
              <div
                className={`menu-card${isSpecial ? " menu-card--special" : ""}`}
                key={section.originalIndex}
                id={`cat-${section.category.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="menu-image">
                  {isSpecial && <div className="special-badge">⭐ House Special</div>}
                  <img src={section.image} alt={section.category} />
                </div>

                <div className="menu-content">
                  <div className="category-header">
                    <h2>{section.category}</h2>
                    <span className="category-count">{section.items.length} items</span>
                  </div>

                  <ul className="menu-items-list">
                    {section.items.map((item) => {
                      const key = `${section.originalIndex}-${item.originalIndex}`;
                      const qty = getQty(key);
                      const unitPrice = parsePrice(item.price);

                      return (
                        <li key={key} className={`menu-item-row ${qty > 0 ? "has-qty" : ""}`}>
                          {/* TOP ROW: Item Name & Price */}
                          <div className="item-main-row">
                            <div className="item-title-group">
                              <span className="item-name">{item.name}</span>
                              {item.pieces && (
                                <span className="item-pieces">{item.pieces}</span>
                              )}
                              {item.porottaPerUnit ? (
                                <span className="item-note porotta-note">
                                  {qty > 1
                                    ? `🥞 +${item.porottaPerUnit * qty} Porottas`
                                    : `🥞 ${item.note}`}
                                </span>
                              ) : item.note ? (
                                <span className="item-note">{item.note}</span>
                              ) : null}
                            </div>
                            <span className="item-price">{item.price}</span>
                          </div>

                          {/* BOTTOM CONTROLS ROW: Stepper, Running Total & Order */}
                          <div className="item-controls-row">
                            {/* Quantity Stepper */}
                            <div className="qty-stepper-wrap">
                              {qty === 0 ? (
                                <button
                                  className="add-qty-btn"
                                  onClick={() => updateItemQty(key, item, section.category, 1)}
                                >
                                  + Add
                                </button>
                              ) : (
                                <div className="qty-stepper">
                                  <button
                                    className="qty-btn"
                                    onClick={() => updateItemQty(key, item, section.category, -1)}
                                    aria-label="Decrease quantity"
                                  >
                                    −
                                  </button>
                                  <span className="qty-count">{qty}</span>
                                  <button
                                    className="qty-btn"
                                    onClick={() => updateItemQty(key, item, section.category, 1)}
                                    aria-label="Increase quantity"
                                  >
                                    +
                                  </button>
                                </div>
                              )}
                            </div>

                            {/* Subtotal when quantity selected */}
                            {qty > 0 && unitPrice > 0 && (
                              <span className="item-subtotal-badge">
                                = ₹{unitPrice * qty}
                              </span>
                            )}

                            {/* Quick Direct Order Button */}
                            <button
                              className="order-btn"
                              onClick={() => orderSingleNow(item, section.category, key)}
                              title="Order this dish on WhatsApp"
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                              </svg>
                              <span>{qty > 1 ? `Order (${qty})` : "Order"}</span>
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
              <h3>No dishes matching "{searchTerm}"</h3>
              <p>Try searching for pizzas, burgers, chicken, juices, or faloodas</p>
              <button className="clear-search-btn" onClick={() => setSearchTerm("")}>
                View All Items
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ===== FLOATING MULTI-ITEM CART BAR (STICKY BOTTOM ON MOBILE & DESKTOP) ===== */}
      {totalCartCount > 0 && (
        <div className="floating-order-bar-container">
          <div className="floating-order-bar">
            <div className="floating-cart-info" onClick={() => setShowCartModal(true)}>
              <div className="cart-badge-icon">
                🛍️ <span className="cart-item-count">{totalCartCount}</span>
              </div>
              <div className="cart-price-info">
                <span className="cart-label">{totalCartCount} {totalCartCount === 1 ? "Item" : "Items"} Selected</span>
                <span className="cart-total-price">₹{totalCartAmount}/-</span>
              </div>
            </div>

            <div className="floating-actions">
              <button
                className="view-cart-btn"
                onClick={() => setShowCartModal(true)}
              >
                Review
              </button>
              <button
                className="dispatch-order-btn"
                onClick={orderCartNow}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Order on WhatsApp (₹{totalCartAmount})</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== REVIEW CART MODAL / BOTTOM SHEET ===== */}
      {showCartModal && (
        <div className="cart-modal-backdrop" onClick={() => setShowCartModal(false)}>
          <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cart-modal-header">
              <h3>🛒 Order Summary ({totalCartCount} {totalCartCount === 1 ? "item" : "items"})</h3>
              <button className="modal-close-btn" onClick={() => setShowCartModal(false)}>✕</button>
            </div>

            <div className="cart-modal-list">
              {Object.entries(cart).map(([key, itemObj]) => {
                const uPrice = parsePrice(itemObj.item.price);
                return (
                  <div key={key} className="cart-modal-item">
                    <div className="cart-item-info">
                      <strong>{itemObj.item.name}</strong>
                      <span className="cart-item-subtext">{itemObj.category} • {itemObj.item.price} each</span>
                      {itemObj.item.porottaPerUnit && (
                        <span className="cart-item-porotta">🥞 +{itemObj.item.porottaPerUnit * itemObj.qty} Porottas</span>
                      )}
                    </div>

                    <div className="cart-item-actions">
                      <div className="qty-stepper modal-stepper">
                        <button
                          className="qty-btn"
                          onClick={() => updateItemQty(key, itemObj.item, itemObj.category, -1)}
                        >
                          −
                        </button>
                        <span className="qty-count">{itemObj.qty}</span>
                        <button
                          className="qty-btn"
                          onClick={() => updateItemQty(key, itemObj.item, itemObj.category, 1)}
                        >
                          +
                        </button>
                      </div>

                      <span className="cart-item-total">₹{uPrice * itemObj.qty}/-</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-modal-footer">
              <div className="cart-total-row">
                <span>Grand Total:</span>
                <span className="grand-total-amount">₹{totalCartAmount}/-</span>
              </div>

              <div className="modal-footer-btns">
                <button
                  className="modal-clear-btn"
                  onClick={() => {
                    setCart({});
                    setShowCartModal(false);
                  }}
                >
                  Clear Cart
                </button>
                <button
                  className="modal-whatsapp-btn"
                  onClick={() => {
                    setShowCartModal(false);
                    orderCartNow();
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Send WhatsApp Order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Menu;
