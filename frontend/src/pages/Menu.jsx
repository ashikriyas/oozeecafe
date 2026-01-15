import React, { useEffect } from "react";
import "./Menu.css";

/* ===== IMPORT IMAGES ===== */
import freshJuice from "../assets/fresh_juice.png";
import avilmilk from "../assets/avilmilk.jpg";
import mojito from "../assets/mojitos.png";
import milkshake from "../assets/milkshakes.png";
import falooda from "../assets/faloodas.png";
import wraps from "../assets/wraps.png";
import grilledparatha from "../assets/grilledparatha.png";
import pizza from "../assets/pizzas.png";
import sandwich from "../assets/sandwiches.png";
import momos from "../assets/momo.png";
import pasta from "../assets/pastas.png";
import burger from "../assets/burgers.png";
import fries from "../assets/fries.png";
import icecream from "../assets/icecreams.png";
import Wings from "../assets/chickenwings.png";
import lollipop from "../assets/lollipop1.png";

const whatsappNumber = "8129110411";

/* ===== MENU DATA ===== */
const menuData = [
  {
    category: "Wraps",
    image: wraps,
    items: [
      { name: "Veg Wrap", price: "₹50/-", message: "Hi, I want to order Veg Wrap." },
      { name: "Chicken Wrap", price: "₹50/-", message: "Hi, I want to order Chicken Wrap." },
      { name: "Egg Wrap", price: "₹50/-", message: "Hi, I want to order Egg Wrap." },
      { name: "Chilli Wrap", price: "₹70/-", message: "Hi, I want to order Chilli Wrap." },
      { name: "Zinger Wrap", price: "₹70/-", message: "Hi, I want to order Zinger Wrap." },
      { name: "Tikka Wrap", price: "₹70/-", message: "Hi, I want to order Tikka Wrap." },
      { name: "Jumbo Roll", price: "₹120/-", message: "Hi, I want to order Jumbo Roll." },
    ]
  },
  {
    category: "Chicken Lollipop",
    image: lollipop,
    items: [
      { name: "Schezwan Lollipop", price: "₹190/-", pieces: "6 PCS" },
      { name: "Signature Lollipop", price: "₹200/-", pieces: "6 PCS" },
      { name: "Fried Lollipop", price: "₹180/-", pieces: "6 PCS" },
      { name: "Peri Peri Lollipop", price: "₹190/-", pieces: "6 PCS" },
      { name: "Korean Sweet Spicy Lollipop", price: "₹210/-", pieces: "6 PCS" },
      { name: "Honey Glazed Lollipop", price: "₹210/-", pieces: "6 PCS" }
    ]
  },
  {
    category: "Chicken Wings",
    image: Wings,
    items: [
      { name: "Schezwan Wings", price: "₹180/-", pieces: "6 PCS" },
      { name: "Signature Wings", price: "₹180/-", pieces: "6 PCS" },
      { name: "Fried Wings", price: "₹160/-", pieces: "6 PCS" },
      { name: "Peri Peri Wings", price: "₹170/-", pieces: "6 PCS" },
      { name: "Korean Sweet Spicy Wings", price: "₹180/-", pieces: "6 PCS" },
      { name: "Honey Glazed Wings", price: "₹180/-", pieces: "6 PCS" }
    ]
  },
  {
    category: "Grilled Paratha",
    image: grilledparatha,
    items: [
      { name: "Desi Kathi Classic", price: "₹70/-", message: "Hi, I want to order Desi Kathi Classic from Grilled Paratha Section." },
      { name: "Desi Kathi+Cheese", price: "₹90/-", message: "Hi, I want to order Desi Kathi+Cheese from Grilled Paratha Section." },
      { name: "Muglai Classic", price: "₹70/-", message: "Hi, I want to order Muglai Classic from Grilled Paratha Section." },
      { name: "Muglai+Cheese", price: "₹90/-", message: "Hi, I want to order Muglai+Cheese from Grilled Paratha Section." },
      { name: "Punjabi Tikka Classic", price: "₹70/-", message: "Hi, I want to order Punjabi Tikka Classic from Grilled Paratha Section." },
      { name: "Punjabi Tikka+cheese", price: "₹90/-", message: "Hi, I want to order Punjabi Tikka+cheese from Grilled Paratha Section." },
      { name: "Egg Paratha Lays", price: "₹60/-", message: "Hi, I want to order Egg Paratha Lays from Grilled Paratha Section." },
      { name: "Egg Paratha Cheese Lays", price: "₹80/-", message: "Hi, I want to order Egg Paratha Cheese Lays from Grilled Paratha Section." },
    ]
  },
  {

    category: "Pizzas",
    image: pizza,
    items: [
      { name: "Pizza Papperoni", price: "290/-", message: "Hi, I want to order Pizza Papperoni." },
      { name: "Pizza Supreme", price: "290/-", message: "Hi, I want to order Pizza Supreme." },
      { name: "Pizza Tikka", price: "290/-", message: "Hi, I want to order Pizza Tikka." },
      { name: "Pizza Fried Chicken", price: "290/-", message: "Hi, I want to order Fried Chicken Pizza." },
    ]
  },


  {
    category: "Sandwich",
    image: sandwich,
    items: [
      { name: "Veg Sandwich", price: "₹50/-", message: "Hi, I want to order Veg Sandwich." },
      { name: "Egg Sandwich", price: "₹50/-", message: "Hi, I want to order Egg Sandwich." },
      { name: "Cheese Sandwich", price: "₹60/-", message: "Hi, I want to order Cheese Sandwich." },
      { name: "Chicken Sandwich", price: "₹50/-", message: "Hi, I want to order Chicken Sandwich." },
      { name: "Chicken Chilli", price: "₹70/-", message: "Hi, I want to order Chicken Chilli Sandwich." },
      { name: "Chicken Zinger", price: "₹70/-", message: "Hi, I want to order Chicken Zinger Sandwich." },
      { name: "Chicken Club", price: "₹120/-", message: "Hi, I want to order Chicken Club Sandwich." },
      { name: "Chicken Club Cheese", price: "₹140/-", message: "Hi, I want to order Chicken Club Cheese Sandwich." },
    ]
  },
  {
    category: "Momos",
    image: momos,
    items: [
      { name: "Pizza Momos", price: "₹150/-", message: "Hi, I want to order Pizza Momos." },
      { name: "Afghani Momos", price: "₹140/-", message: "Hi, I want to order Afghani Momos." },
      { name: "Tandoori Momos", price: "₹140/-", message: "Hi, I want to order Tandoori Momos." },
      { name: "Pina Momos", price: "₹130/-", message: "Hi, I want to order Pina Momos." },
      { name: "Easiot Momos", price: "₹130/-", message: "Hi, I want to order Easiot Momos." },
      { name: "Peri peri Momos", price: "₹110/-", message: "Hi, I want to order Peri peri Momos." },
      { name: "Fried Momos", price: "₹100/-", message: "Hi, I want to order Fried Momos." },
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
      { name: "Egg Burger", price: "₹70/-", message: "Hi, I want to order Egg Burger." },
      { name: "Chicken Classic", price: "₹80/-", message: "Hi, I want to order Chicken Classic Burger." },
      { name: "Zinger Dynamite", price: "₹100/-", message: "Hi, I want to order Zinger Dynamite Burger." },
      { name: "Zinger Peri peri", price: "₹100/-", message: "Hi, I want to order Zinger Peri peri Burger." },
      { name: "Zinger Signature", price: "₹100/-", message: "Hi, I want to order Zinger Signature Burger." },
      { name: "Pizza Burger", price: "₹140/-", message: "Hi, I want to order Pizza Burger." },
      { name: "Zinger Classic", price: "₹90/-", message: "Hi, I want to order Zinger Classic Burger." },
      { name: "Hexa Burger", price: "₹400/-", message: "Hi, I want to order Hexa Burger." },
      { name: "Hexa mini Burger", price: "₹300/-", message: "Hi, I want to order Hexa mini Burger." },
    ]
  },
  {
    category: "Loaded Fries",
    image: fries,
    items: [
      { name: "Loaded CLassic Fries", price: "160/-", message: "Hi, I want to order Loaded CLassic Fries" },
      { name: "Loaded Lay's Fries", price: "200/-", message: "Hi, I want to order Loaded Lay's Fries" },
      { name: "Loaded Madka Fries", price: "200/-", message: "Hi, I want to order Loaded Madka Fries" },
      { name: "Loaded Pizza Fries", price: "200/-", message: "Hi, I want to order Loaded Pizza Fries" },
      { name: "Loaded Tikka Fries", price: "180/-", message: "Hi, I want to order Loaded Tikka Fries" },
      { name: "Normal Fries(M)", price: "60/-", message: "Hi, I want to order Normal Medium Fries" },
      { name: "Normal Fries(L)", price: "90/-", message: "Hi, I want to order Normal Large Fries" },
      { name: "Masala Fries", price: "80/-", message: "Hi, I want to order Masala Fries" },
      { name: "Cheese Fries", price: "110/-", message: "Hi, I want to order Cheese Fries" },
    ]
  },
  {
    category: "Fresh Juice",
    image: freshJuice,
    items: [
      { name: "Fresh Lime", price: "₹20/-", message: "Hi, I want to order Fresh Lime from Fresh Juice section." },
      { name: "Mint Lime", price: "₹30/-", message: "Hi, I want to order Mint Lime from Fresh Juice section." },
      { name: "Orange Juice", price: "₹70/-", message: "Hi, I want to order Orange Juice from Fresh Juice section." },
      { name: "Musambi Juice", price: "₹50/-", message: "Hi, I want to order Musambi Juice from Fresh Juice section." },
      { name: "Pineapple Juice", price: "₹60/-", message: "Hi, I want to order Pineapple Juice from Fresh Juice section." },
      { name: "Watermelon Juice", price: "₹50/-", message: "Hi, I want to order Watermelon Juice from Fresh Juice section." },
      { name: "Pappaya Juice", price: "₹50/-", message: "Hi, I want to order Pappaya Juice from Fresh Juice section." }
    ]
  },
  {
    category: "Avilk Milk",
    image: avilmilk,
    items: [
      { name: "Avil Milk", price: "40/-", message: "Hi, I’d like to order normal Avil Milk." },
      { name: " Vanilla Avil Milk", price: "60/-", message: "Hi, I’d like to order Vanilla  Avil Milk." },
      { name: " Stawberry Avil Milk", price: "60/-", message: "Hi, I’d like to order Stawberry  Avil Milk." },
      { name: " Butterscotch Avil Milk", price: "70/-", message: "Hi, I’d like to order Butterscotch  Avil Milk." },
      { name: " Oreo Avil Milk", price: "70/-", message: "Hi, I’d like to order Oreo Avil Milk." },
      { name: " Mango Avil Milk", price: "70/-", message: "Hi, I’d like to order Mango Avil Milk." },
      { name: " Passion Fruit Avil Milk", price: "70/-", message: "Hi, I’d like to order Passion Fruit  Avil Milk." },
      { name: " Blue Berry Avil Milk", price: "90/-", message: "Hi, I’d like to order Blue Berry Avil Milk." },
      { name: " Black Currant Avil Milk", price: "70/-", message: "Hi, I’d like to order Black Current Avil Milk." },
      { name: " Green Apple Avil Milk", price: "70/-", message: "Hi, I’d like to order Green apple Avil Milk." },
    ]
  },
  {
    category: "Mojito",
    image: mojito,
    items: [
      { name: "Passion Fruit Punch", price: "₹60/-", message: "Hi, I want to order Passion Fruit Punch from Mojito section." },
      { name: "Black Currant Zing", price: "₹60/-", message: "Hi, I want to order Black Currant Zing from Mojito section." },
      { name: "Strawberry", price: "60/-", message: "Hi, I want to order Strawberry Mojito from Mojito section." },
      { name: "Green Apple Zing", price: "60/-", message: "Hi, I want to order Green Apple Zing from Mojito section." },
      { name: "Mint LIme Blast", price: "60/-", message: "Hi, I want to order Mint LIme Blast from Mojito section." },
      { name: "Watermelon Wave", price: "60/-", message: "Hi, I want to order Watermelon Wave from Mojito section." },
      { name: "Blue Berry Brust", price: "90/-", message: "Hi, I want to order Blue Berry Brust from Mojito section." },
      { name: "Kiwi Kick", price: "60/-", message: "Hi, I want to order Kiwi Kick from Mojito section." },
      { name: "Litchi", price: "60/-", message: "Hi, I want to order Litchi Mojito from Mojito section." },
      { name: "Curacao Crush", price: "60/-", message: "Hi, I want to order Curacao Crush from Mojito section." },
      { name: "Ice Tea Lemon", price: "70/-", message: "Hi, I want to order Ice Tea Lemon." },
      { name: "Ice Peach", price: "70/-", message: "Hi, I want to order Ice Peach." },
    ]
  },
  {
    category: "Milk Shake",
    image: milkshake,
    items: [
      { name: "Cold Coffee", price: "₹50/-", message: "Hi, I want to order Cold Coffee from milk shake section." },
      { name: "Oreo Overloaded", price: "₹60/-", message: "Hi, I want to order Oreo Overloaded from milk shake section." },
      { name: "Chikku", price: "₹60/-", message: "Hi, I want to order Chikku Milk shake from milk shake section." },
      { name: "Kitkat", price: "₹70/-", message: "Hi, I want to order Kitkat Milk shake from milk shake section." },
      { name: "Snickers", price: "₹70/-", message: "Hi, I want to order Snickers Milk shake from milk shake section." },
      { name: "Strawberry", price: "₹70/-", message: "Hi, I want to order Strawberry Milk shake from milk shake section." },
      { name: "Coco Cool Fusion", price: "₹80/-", message: "Hi, I want to order Coco Cool Fusion from milk shake section." },
      { name: "Mango Chill", price: "₹70/-", message: "Hi, I want to order Mango Chill Milk shake from milk shake section." },
      { name: "Avacado Aura", price: "₹100/-", message: "Hi, I want to order Avacado Aura from milk shake section." },
      { name: "Custard Crush", price: "₹100/-", message: "Hi, I want to order Custard Crush from milk shake section." },
      { name: "Dates Divine", price: "₹100/-", message: "Hi, I want to order Dates Divine from milk shake section." },
      { name: "Cashew", price: "₹100/-", message: "Hi, I want to order Cashew Milk shake from milk shake section." },
      { name: "Dry Fruit Delight", price: "₹120/-", message: "Hi, I want to order Dry Fruit Delight from milk shake section." },
      { name: "Roasted Cashew", price: "₹110/-", message: "Hi, I want to order Roasted Cashew from milk shake section." },
      { name: "Dairy House", price: "₹70/-", message: "Hi, I want to order Dairy House from milk shake section." },
      { name: "Coffee Cooler", price: "₹70/-", message: "Hi, I want to order Coffee Cooler from milk shake section." },
      { name: "Date and Cashew", price: "₹100/-", message: "Hi, I want to order Date and Cashew from milk shake section." },
      { name: "Kannur Cocktail", price: "₹60/-", message: "Hi, I want to order Kannur Cocktail." },


    ]
  },
  {
    category: "Falooda",
    image: falooda,
    items: [
      { name: "Ooze Special", price: "₹150/-", message: "Hi, I want to order Ooze Special Falooda." },
      { name: "Dry Fruit", price: "₹160/-", message: "Hi, I want to order Dry Fruit Falooda." },
      { name: "Royal", price: "₹110/-", message: "Hi, I want to order Royal Falooda." },
      { name: "Mango", price: "₹120/-", message: "Hi, I want to order Mango Falooda." },
      { name: "Butter Scotch", price: "₹140/-", message: "Hi, I want to order Butter Scotch Falooda." },
      { name: "Pista", price: "₹150/-", message: "Hi, I want to order Pista Falooda." },
      { name: "Tender", price: "₹150/-", message: "Hi, I want to order Tender Falooda." },
      { name: "Spanish Delight", price: "₹160/-", message: "Hi, I want to order Spanish Delight Falooda." },
      { name: "Oreo", price: "₹140/-", message: "Hi, I want to order Oreo Falooda." },

    ]
  },

  {
    category: "Ice Creams",
    image: icecream,
    items: [
      { name: "Titanic Chill", price: "140/-", message: "Hi, I want to order Titanic Chill Ice Creams" },
      { name: "Triple sunday", price: "130/-", message: "Hi, I want to order Triple sunday Ice Creams" },
      { name: "Fruit Salad Dream", price: "80/-", message: "Hi, I want to order Fruit Salad Dream Ice Creams" },
      { name: "Brownie Dark", price: "70/-", message: "Hi, I want to order Brownie Dark Ice Creams" },
      { name: "Gudbad Blast", price: "120/-", message: "Hi, I want to order Gudbad Blast Ice Creams" },

    ]
  }


];
const Menu = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    // Scroll handled by ScrollToTop component
  }, []);

  const buildMessage = (item, category) => {
    const today = new Date().toLocaleDateString("en-IN");
    return `
Hello Ooze Cafe,

Date: ${today}
Category: ${category}
Item: ${item.name}
${item.pieces ? `Quantity: ${item.pieces}` : ""}
Price: ${item.price}

Customer Contact Number: ________
Delivery Location: ________

Please fill in the above details before sending. Thank you!
`;
  };


  const orderNow = (item, category) => {
    const message = buildMessage(item, category);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Filter menu data based on search term
  const filteredMenuData = menuData.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
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
              Found {filteredMenuData.reduce((acc, section) => acc + section.items.length, 0)} items
            </p>
          )}
        </div>
      </div>

      <div className="menu-container">
        {filteredMenuData.map((section, index) => (
          <div className="menu-card" key={index}>
            <div className="menu-image">
              <img src={section.image} alt={section.category} />
            </div>

            <div className="menu-content">
              <h2>{section.category}</h2>

              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>

                      {item.pieces && (
                        <span className="item-pieces">{item.pieces}</span>
                      )}

                      <span className="item-price">{item.price}</span>
                    </div>

                    <button
                      className="order-btn"
                      onClick={() => orderNow(item, section.category)}
                    >
                      Order Now
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

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
    </section>
  );
};

export default Menu;
