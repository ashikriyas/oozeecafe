import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <span className="notfound-emoji">🍕🍽️</span>
        <h1 className="notfound-code">404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for might have been moved, deleted, or does not exist.</p>
        <div className="notfound-actions">
          <Link to="/" className="btn-home">
            Back to Home
          </Link>
          <Link to="/menu" className="btn-menu">
            Explore Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
