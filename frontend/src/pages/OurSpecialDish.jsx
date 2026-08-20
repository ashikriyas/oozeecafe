import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./OurSpecialDish.css";

// Images
import afghaniChicken from "../assets/afghani_spcl.png";
import turkishChicken from "../assets/turkish_spcl.png";
import honeyChicken from "../assets/honey_glazed_spcl.jpg";
import iffaChicken from "../assets/iffa_spcl.png";
import kandariChicken from "../assets/kandari_spcl.png";
import hexaBurger from "../assets/hexa_spcl.png";

const dishes = [
  {
    id: "spcl-1",
    title: "Afghani Fried Chicken",
    subtitle: "Classic Afghan Spices & Aroma",
    badge: "⭐ House Special",
    variants: [
      { label: "Half", price: "₹400/-", numericPrice: 400, portion: "Half • 2 Porotta included" },
      { label: "Full", price: "₹800/-", numericPrice: 800, portion: "Full • 4 Porotta included" },
    ],
    description:
      "Tender chicken marinated in traditional Afghani spices and yogurt, deep-fried to golden perfection. Rich, creamy flavors with a smoky aroma in every bite.",
    image: afghaniChicken,
  },
  {
    id: "spcl-2",
    title: "Turkish Fried Chicken",
    subtitle: "Mediterranean Herb & Spice Fusion",
    badge: "🔥 Customer Favorite",
    variants: [
      { label: "Half", price: "₹400/-", numericPrice: 400, portion: "Half • 2 Porotta included" },
    ],
    description:
      "Crispy chicken seasoned with authentic Turkish herbs and paprika, perfectly crunchy outside and succulent inside. A bold Mediterranean flavor sensation.",
    image: turkishChicken,
  },
  {
    id: "spcl-3",
    title: "Honey Glazed Fried Chicken",
    subtitle: "Sweet, Savory & Glazed Crunch",
    badge: "🍯 Chef's Signature",
    variants: [
      { label: "Half", price: "₹400/-", numericPrice: 400, portion: "Half • 2 Porotta included" },
      { label: "Full", price: "₹800/-", numericPrice: 800, portion: "Full • 4 Porotta included" },
    ],
    description:
      "Succulent crispy fried chicken tossed in a rich, caramelized honey glaze with toasted sesame seeds and fresh scallions. Perfect balance of sweet crunch and savory spices.",
    image: honeyChicken,
  },
  {
    id: "spcl-4",
    title: "IFFA Chicken",
    subtitle: "Chef's Signature Secret Recipe",
    badge: "⭐ House Special",
    variants: [
      { label: "Half", price: "₹350/-", numericPrice: 350, portion: "Half • 2 Porotta included" },
      { label: "Full", price: "₹600/-", numericPrice: 600, portion: "Full • 3 Porotta included" },
    ],
    description:
      "Chef’s special IFFA-style fried chicken, marinated with secret spices and cooked to perfection. A house favorite known for its deep flavor and crisp finish.",
    image: iffaChicken,
  },
  {
    id: "spcl-5",
    title: "IFFA Kandari Chicken",
    subtitle: "Slow-Cooked Kandari Spices",
    badge: "🌶️ Spicy Delight",
    variants: [
      { label: "Half", price: "₹370/-", numericPrice: 370, portion: "Half • 2 Porotta included" },
      { label: "Full", price: "₹650/-", numericPrice: 650, portion: "Full • 3 Porotta included" },
    ],
    description:
      "Flavorful chicken slow-cooked with IFFA’s special Kandari spices, exceptionally tender and aromatic. Traditional recipe delivering deep comforting flavors.",
    image: kandariChicken,
  },
  {
    id: "spcl-6",
    title: "Hexa Burger",
    subtitle: "Gourmet Loaded Chicken Burger",
    badge: "🍔 Gourmet Stack",
    variants: [
      { label: "Standard", price: "₹350/-", numericPrice: 350, portion: "Gourmet Stack" },
    ],
    description:
      "Juicy chicken patty with melted cheese, fresh lettuce, tomato, and house sauce in a soft toasted bun. Crafted for a rich, satisfying gourmet bite.",
    image: hexaBurger,
  },
];

const whatsappNumber = "8129110411";

const OurSpecialDish = () => {
  const cardsRef = useRef([]);
  const [quantities, setQuantities] = useState({});
  const [selectedVariants, setSelectedVariants] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const getVariantIndex = (id) => selectedVariants[id] || 0;
  const getQty = (id) => quantities[id] || 1;

  const changeQty = (id, delta) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleVariantSelect = (dishId, index) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [dishId]: index,
    }));
  };

  const handleOrder = (dish) => {
    const variantIdx = getVariantIndex(dish.id);
    const variant = dish.variants[variantIdx] || dish.variants[0];
    const qty = getQty(dish.id);
    const date = new Date().toLocaleDateString("en-IN");
    const total = variant.numericPrice * qty;

    const message = `*OOZE CAFE SPECIAL ORDER* ⭐
----------------------------
*Date:* ${date}
*Special Dish:* ${dish.title}
*Size / Portion:* ${variant.label} (${variant.portion})
*Quantity:* ${qty}
*Unit Price:* ${variant.price}
*Total Amount:* ₹${total}/-
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
    <section className="special-wrapper">
      {/* Header */}
      <div className="special-header">
        <span className="special-tag">Chef's Curated Selection</span>
        <h2>Our House Special Dishes</h2>
        <p>
          Discover our chef’s hand-crafted special delicacies made with authentic recipes, secret marinades, and fresh ingredients.
        </p>
      </div>

      {/* Special Dish Cards */}
      <div className="special-cards">
        {dishes.map((dish, index) => {
          const variantIdx = getVariantIndex(dish.id);
          const currentVariant = dish.variants[variantIdx] || dish.variants[0];
          const qty = getQty(dish.id);
          const subtotal = currentVariant.numericPrice * qty;

          return (
            <div
              className="special-card hidden"
              key={dish.id}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              {/* Plate Image */}
              <div className="plate-image">
                <img src={dish.image} alt={dish.title} />
                {dish.badge && <span className="special-dish-badge">{dish.badge}</span>}
                <span className="special-portion-badge">{currentVariant.portion}</span>
              </div>

              <div className="special-card-body">
                <div className="special-card-top">
                  <h3>{dish.title}</h3>
                  <h4>{dish.subtitle}</h4>
                  <div className="stars">★ ★ ★ ★ ★</div>
                </div>

                <p className="description">{dish.description}</p>

                {/* Portion / Size Selector (Half / Full) */}
                {dish.variants.length > 1 && (
                  <div className="portion-selector-container">
                    <span className="portion-selector-label">Select Portion:</span>
                    <div className="portion-pills">
                      {dish.variants.map((v, vIndex) => (
                        <button
                          key={v.label}
                          type="button"
                          className={`portion-pill ${variantIdx === vIndex ? "active" : ""}`}
                          onClick={() => handleVariantSelect(dish.id, vIndex)}
                        >
                          <span className="pill-name">{v.label}</span>
                          <span className="pill-price">{v.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price & Quantity Controls */}
                <div className="special-order-controls">
                  <div className="special-price-box">
                    <span className="price-tag">{currentVariant.price}</span>
                    <span className="portion-subnote">{currentVariant.label} Portion</span>
                    {qty > 1 && (
                      <span className="special-subtotal-tag">= ₹{subtotal}/-</span>
                    )}
                  </div>

                  <div className="special-qty-stepper">
                    <button
                      className="special-qty-btn"
                      onClick={() => changeQty(dish.id, -1)}
                      aria-label="Decrease quantity"
                      disabled={qty <= 1}
                    >
                      −
                    </button>
                    <span className="special-qty-val">{qty}</span>
                    <button
                      className="special-qty-btn"
                      onClick={() => changeQty(dish.id, 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* ORDER NOW BUTTON */}
                <button
                  onClick={() => handleOrder(dish)}
                  className="order-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Order {currentVariant.label} via WhatsApp ({qty})</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Menu Button with Routing */}
      <div className="menu-btn">
        <Link to="/menu">
          <button>EXPLORE FULL MENU (150+ ITEMS)</button>
        </Link>
        <p className="menu-caption">
          Pizzas • Burgers • Momos • Shakes • Faloodas • Pastas & more!
        </p>
      </div>
    </section>
  );
};

export default OurSpecialDish;
