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
      { name: "Egg Wrap", price: "₹50/-" },
      { name: "Veg Wrap", price: "₹50/-" },
      { name: "Chicken Wrap", price: "₹60/-" },
      { name: "Zinger Wrap", price: "₹80/-" },
      { name: "Tikka Wrap", price: "₹80/-" },
      { name: "Jumbo Roll", price: "₹120/-" },
      { name: "Jumbo Roll + Cheese", price: "₹140/-" },
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
      { name: "Pizza Pepperoni", price: "₹320/-" },
      { name: "Pizza Supreme", price: "₹320/-" },
      { name: "Pizza Tikka", price: "₹320/-" },
      { name: "Pizza Fried Chicken", price: "₹320/-" },
    ]
  },
  {
    category: "Sandwich",
    image: sandwich,
    items: [
      { name: "Veg Sandwich", price: "₹50/-" },
      { name: "Egg Sandwich", price: "₹50/-" },
      { name: "Cheese Sandwich", price: "₹60/-" },
      { name: "Chicken Sandwich", price: "₹60/-" },
      { name: "Chicken Zinger", price: "₹80/-" },
      { name: "Chicken Club", price: "₹130/-" },
      { name: "Chicken Club Cheese", price: "₹150/-" },
    ]
  },
  {
    category: "Momos",
    image: momos,
    items: [
      { name: "Pizza Momos", price: "₹160/-" },
      { name: "Afghani Momos", price: "₹140/-" },
      { name: "Tandoori Momos", price: "₹140/-" },
      { name: "Peri Peri Momos", price: "₹120/-" },
      { name: "Fried Momos", price: "₹110/-" },
      { name: "Dynamite Momos", price: "₹130/-" },
    ]
  },
  {
    category: "Pasta",
    image: pasta,
    items: [
      { name: "Pink Sauce Pasta", price: "₹140/-" },
      { name: "White Sauce Pasta", price: "₹130/-" },
      { name: "Tandoori Pasta", price: "₹140/-" },
      { name: "Hadid Pasta", price: "₹140/-" },
    ]
  },
  {
    category: "Burger",
    image: burger,
    items: [
      { name: "Chicken Classic", price: "₹90/-" },
      { name: "Zinger Dynamite", price: "₹120/-" },
      { name: "Zinger Peri Peri", price: "₹130/-" },
      { name: "Zinger Classic", price: "₹100/-" },
      { name: "Zinger Signature", price: "₹130/-" },
      { name: "Hexa Burger", price: "₹350/-" },
      { name: "Hexa Dragon", price: "₹330/-" },
    ]
  },
  {
    category: "Loaded Fries",
    image: fries,
    items: [
      { name: "Loaded Classic Fries", price: "₹170/-" },
      { name: "Loaded Lay's Fries", price: "₹220/-" },
      { name: "Loaded Tikka Fries", price: "₹200/-" },
      { name: "Normal Fries (M)", price: "₹70/-" },
      { name: "Normal Fries (L)", price: "₹90/-" },
      { name: "Masala Fries", price: "₹100/-" },
      { name: "Cheese Fries", price: "₹120/-" },
    ]
  },
  {
    category: "Fresh Juice",
    image: freshJuice,
    items: [
      { name: "Fresh Lime", price: "₹30/-" },
      { name: "Mint Lime", price: "₹40/-" },
      { name: "Orange (Season Only)", price: "₹70/-" },
      { name: "Musambi", price: "₹60/-" },
      { name: "Pineapple", price: "₹60/-" },
      { name: "Watermelon", price: "₹60/-" },
      { name: "Pappaya", price: "₹60/-" },
    ]
  },
  {
    category: "Avil Milk",
    image: avilmilk,
    items: [
      { name: "Classic Avil Milk", price: "₹40/-" },
      { name: "Vanilla Avil Milk", price: "₹70/-" },
      { name: "Strawberry Avil Milk", price: "₹70/-" },
      { name: "Butterscotch Avil Milk", price: "₹80/-" },
      { name: "Oreo Avil Milk", price: "₹80/-" },
      { name: "Mango Avil Milk", price: "₹80/-" },
    ]
  },
  {
    category: "Mojito",
    image: mojito,
    items: [
      { name: "Fashion Fruit Punch", price: "₹70/-" },
      { name: "Black Currant Zing", price: "₹70/-" },
      { name: "Strawberry Mojito", price: "₹60/-" },
      { name: "Green Apple", price: "₹70/-" },
      { name: "Mint Lime", price: "₹70/-" },
      { name: "Watermelon Wave", price: "₹60/-" },
      { name: "Blueberry Brust", price: "₹90/-" },
      { name: "Kiwi Kick", price: "₹70/-" },
      { name: "Litchi", price: "₹70/-" },
      { name: "Curacao Crush", price: "₹60/-" },
      { name: "Ice Tea Lemon", price: "₹80/-" },
      { name: "Ice Peach", price: "₹80/-" },
    ]
  },
  {
    category: "Milk Shake",
    image: milkshake,
    items: [
      { name: "Marshmallow", price: "₹120/-" },
      { name: "Popcorn Shake", price: "₹130/-" },
      { name: "Nutella Shake", price: "₹120/-" },
      { name: "Island Blue", price: "₹100/-" },
      { name: "Litchi Shake", price: "₹100/-" },
      { name: "Kiwi Shake", price: "₹110/-" },
      { name: "Bubble Shake", price: "₹120/-" },
      { name: "Blueberry Shake", price: "₹110/-" },
      { name: "Watermelon Shake", price: "₹90/-" },
      { name: "Chocolate Shake", price: "₹100/-" },
      { name: "Grape Shake", price: "₹80/-" },
      { name: "Dates Shake", price: "₹100/-" },
      { name: "Dates & Cashew", price: "₹120/-" },
      { name: "Roasted Cashew", price: "₹100/-" },
      { name: "Avocado Shake", price: "₹110/-" },
      { name: "Tender Shake", price: "₹90/-" },
      { name: "Oreo Shake", price: "₹70/-" },
      { name: "Chikku Shake", price: "₹70/-" },
      { name: "Mango Shake", price: "₹80/-" },
      { name: "Cold Coffee", price: "₹60/-" },
      { name: "Kannur Cocktail", price: "₹70/-" },
    ]
  },
  {
    category: "Falooda",
    image: falooda,
    items: [
      { name: "Ooze Special", price: "₹220/-" },
      { name: "Dry Fruit", price: "₹200/-" },
      { name: "Royal", price: "₹160/-" },
      { name: "Mango", price: "₹180/-" },
      { name: "Butterscotch", price: "₹190/-" },
      { name: "Tender", price: "₹200/-" },
      { name: "Spanish Delight", price: "₹230/-" },
      { name: "Oreo", price: "₹210/-" },
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
  const [highlightedCategory, setHighlightedCategory] = useState(null);


  const scrollToCategory = (category) => {
    // Reset search if active so all categories are visible
    if (searchTerm) {
      setSearchTerm("");
    }
    setActiveCategory(category);
    setHighlightedCategory(category);

    setTimeout(() => {
      const catId = `cat-${category.replace(/\s+/g, "-").toLowerCase()}`;
      const el = document.getElementById(catId);
      if (el) {
        // Calculate dynamic offset based on navbar + sticky strip
        const catStrip = document.querySelector(".cat-strip-wrapper");
        const stripHeight = catStrip ? catStrip.offsetHeight : 80;
        const navbar = document.querySelector(".navbar");
        const navHeight = navbar ? navbar.offsetHeight : 70;
        const totalOffset = navHeight + stripHeight + 15;

        const top = el.getBoundingClientRect().top + window.scrollY - totalOffset;
        window.scrollTo({ top, behavior: "smooth" });

        // Auto center the clicked chip in the horizontal category bar
        const chipEl = document.getElementById(`chip-${category.replace(/\s+/g, "-").toLowerCase()}`);
        if (chipEl) {
          chipEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      }
    }, 50);

    // Remove highlight after 2.5 seconds
    setTimeout(() => {
      setHighlightedCategory(null);
    }, 2500);
  };

  // Scroll to hash on initial load if present (e.g. /menu#momos)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (hash) {
      const matched = menuData.find(
        (m) => m.category.replace(/\s+/g, "-").toLowerCase() === hash
      );
      if (matched) {
        scrollToCategory(matched.category);
      }
    }
  }, []);


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
          {menuData.map((section) => {
            const chipId = `chip-${section.category.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <button
                key={section.category}
                id={chipId}
                className={`cat-chip ${activeCategory === section.category ? "cat-chip--active" : ""}`}
                onClick={() => scrollToCategory(section.category)}
              >
                <img src={section.image} alt={section.category} className="cat-chip-img" />
                <span className="cat-chip-label">{section.category}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== MENU BODY ===== */}
      <div className="menu-body">
        <div className="menu-container">
          {filteredMenuData.map((section) => {
            const isSpecial = ["Special Items", "Iffa Classic", "Iffa Kandari", "Ooze Special Chicken"].includes(section.category);
            const isHighlighted = highlightedCategory === section.category;
            const catId = `cat-${section.category.replace(/\s+/g, "-").toLowerCase()}`;

            return (
              <div
                className={`menu-card${isSpecial ? " menu-card--special" : ""}${isHighlighted ? " menu-card--highlighted" : ""}`}
                key={section.originalIndex}
                id={catId}
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
