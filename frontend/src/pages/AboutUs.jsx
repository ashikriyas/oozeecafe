import React, { useEffect } from "react";
import "./AboutUs.css";

// Food category images
import pizza from "../assets/pizza_about.png";
import broast from "../assets/fried_chicken.png";
import momos from "../assets/dynamite.jpg";
import burger from "../assets/burger.jpg";
import pasta from "../assets/pasta.jpg";
import loaded from "../assets/loadedfries.jpg";
import sand_wich from "../assets/sand_wich.jpg";
import grilled_paratta from "../assets/grilled_paratta.jpg";
import chicken_wrap from "../assets/chicken_wrap.jpg";
import nuggets from "../assets/nuggets.jpg";
import lollipop from "../assets/lollipop.jpg";
import chicken_strips from "../assets/chicken_strips.jpg";
import watermelon from "../assets/watermelon1.png";
import mojito from "../assets/blue.png";
import ice_cream from "../assets/ice_cream.jpg";
import milkshake from "../assets/milkshake.jpg";
import falooda from "../assets/falooda.png";
import avilmilk from "../assets/avilmilk1.png";

// Cafe ambience image
import cafeImage from "../assets/cafe.png";

// Icons
import { FaLeaf, FaRegSmile, FaClock, FaStar } from "react-icons/fa";

const AboutUs = () => {
    // Scroll to top whenever this page loads
    useEffect(() => {
        // Scroll handled by ScrollToTop
    }, []);

    const categories = [
        { img: pizza, title: "Pizza" },
        { img: broast, title: "Broast" },
        { img: momos, title: "Momos" },
        { img: burger, title: "Burgers" },
        { img: pasta, title: "Pasta" },
        { img: loaded, title: "Loaded Fries" },
        { img: sand_wich, title: "Sandwich" },
        { img: grilled_paratta, title: "Grilled Paratta" },
        { img: chicken_wrap, title: "Chicken Wrap" },
        { img: nuggets, title: "Nuggets" },
        { img: lollipop, title: "Chicken Lollipop" },
        { img: chicken_strips, title: "Chicken Strips" },
        { img: ice_cream, title: "Ice Cream" },
        { img: watermelon, title: "Fresh Juice" },
        { img: mojito, title: "Mojito" },
        { img: milkshake, title: "Milkshake" },
        { img: falooda, title: "Falooda" },
        { img: avilmilk, title: "Avil Milk" },
    ];

    const features = [
        {
            icon: <FaLeaf />,
            title: "Fresh Ingredients",
            desc: "We only use the freshest ingredients to ensure every bite bursts with flavor.",
        },
        {
            icon: <FaRegSmile />,
            title: "Warm Hospitality",
            desc: "Our staff is always ready with a smile to make your experience memorable.",
        },
        {
            icon: <FaClock />,
            title: "Quick Service",
            desc: "Enjoy delicious food served promptly, perfect for busy schedules.",
        },
        {
            icon: <FaStar />,
            title: "Premium Experience",
            desc: "A sophisticated yet cozy ambience to relax, dine, and celebrate.",
        },
    ];

    return (
        <section className="about-wrapper fade-in">
            {/* ===== Cafe Ambience Section ===== */}
            <div className="ambience-section">
                <div className="ambience-text">
                    <h2>Welcome to Ooze Café</h2>
                    <p>
                        At <strong>Ooze Café</strong>, food is more than just a meal — it’s an experience.
                        Every dish is crafted with care, passion, and the finest ingredients to create bold, memorable flavors.
                    </p>
                    <p>
                        Our café offers a warm and inviting atmosphere where you can relax, connect with friends, or enjoy some quiet time.
                        Soft lighting, cozy seating, and subtle décor details combine to create a modern, comfortable space that feels just right.
                    </p>
                    <p>
                        We believe in great food for everyone — whether you’re here for a quick snack, a hearty meal, or a celebration,
                        our menu caters to all tastes and occasions. Friendly service, fresh ingredients, and a welcoming vibe make every visit special.
                    </p>
                    <p>
                        Come, take a seat, enjoy the aromas, and savor the flavors. At Ooze Café, every bite tells a story, and every visit is an experience worth remembering.
                    </p>
                    <p>
                        Whether it’s a casual afternoon coffee or a special evening treat, Ooze Café is the perfect place to create memories that linger long after your last bite.
                    </p>
                </div>

                <div className="ambience-image">
                    <img src={cafeImage} alt="Ooze Cafe Ambience" className="ambience-img" />
                </div>
            </div>




            {/* ===== Our Categories Section ===== */}
            <div className="categories-section">
                <h3>TOP FOODS</h3>
                <h2>Our Categories</h2>

                <div className="categories-grid">
                    {categories.map((item, index) => (
                        <div key={index} className="category">
                            <div className="category-img-wrapper">
                                <img src={item.img} alt={item.title} className="category-img" />
                            </div>
                            <p className="category-title">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== Miami Fried Chicken Section ===== */}
            <div className="meal-section">
                <h2>Miami Fried Chicken</h2>
                <p className="meal-intro">
                    Our signature <strong>Miami Fried Chicken</strong> is a crowd favorite — golden, crunchy, and bursting with flavor.
                    Each piece is hand-breaded with a secret spice blend and cooked to perfection. Served with a choice of
                    sides including loaded fries, creamy coleslaw, or buttery mashed potatoes, it’s perfect for sharing
                    or indulging solo. Ideal for students, couples, families, and parties, our Miami Fried Chicken
                    promises a wholesome, satisfying experience with every bite.
                </p>
                <p className="meal-intro">
                    Whether it’s the spicy kick, the juicy tenderness, or the savory aroma that draws you in,
                    our meals are designed to delight every palate. Enjoy it with our freshly baked breads,
                    refreshing beverages, or premium desserts for a complete dining experience that leaves you craving more.
                </p>

                <div className="meal-types">
                    <div className="meal-card">
                        <h4>Student Meal</h4>
                        <p>Affordable, filling meals perfect for daily cravings.</p>
                    </div>

                    <div className="meal-card">
                        <h4>Couple Meal</h4>
                        <p>Ideal combo meals to share special moments together.</p>
                    </div>

                    <div className="meal-card">
                        <h4>Family Meal</h4>
                        <p>Generous portions made to satisfy the whole family.</p>
                    </div>

                    <div className="meal-card">
                        <h4>Party Meal</h4>
                        <p>Large, value-packed meals for celebrations & gatherings.</p>
                    </div>
                </div>
            </div>

            {/* ===== Why Choose Us Section ===== */}
            <div className="features-section">
                <h2>Why Choose Us</h2>
                <p className="features-intro">
                    At Ooze Café, we are committed to creating memorable dining experiences. Here’s why our customers love us:
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h4>{feature.title}</h4>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
