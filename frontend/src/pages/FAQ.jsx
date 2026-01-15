import React, { useEffect, useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What type of food does Ooze Cafe serve?",
    answer:
      "Ooze Cafe specializes in delicious fried chicken, burgers, wraps, snacks, and refreshing beverages, crafted with quality ingredients and bold flavors."
  },
  {
    question: "Do you offer takeaway and delivery?",
    answer:
      "Yes, Ooze Cafe offers both takeaway and delivery services. Availability may vary based on location and operational hours."
  },
  {
    question: "Are your food items halal?",
    answer:
      "Yes, all food served at Ooze Cafe is prepared using halal ingredients, following proper sourcing and preparation standards."
  },
  {
    question: "Can I customize my order?",
    answer:
      "Customization requests can be accommodated based on availability. Please inform our staff while placing your order."
  },
  {
    question: "Do you handle food allergies?",
    answer:
      "While we take care in food preparation, we cannot guarantee an allergen-free environment. Customers are requested to inform staff of any allergies before ordering."
  },
  {
    question: "Do prices and menu items change?",
    answer:
      "Yes, menu items, prices, and offers may change without prior notice. Images shown are for representation purposes only."
  },
  {
    question: "What are your operating hours?",
    answer:
      "Operating hours may vary on holidays or special occasions. Please check our social media or contact us for the latest timings."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Scroll handled by ScrollToTop
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-page">
      <div className="faq-container fade-in">

        <h1>Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Everything you need to know about Ooze Cafe
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
