import React from "react";
import { Link } from "react-router-dom";
import "./Thankyou.css";

const Thankyou = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h1>🎉 Thank You for Your Purchase!</h1>
        <p>Your order has been successfully placed and payment confirmed.</p>
        <p>You will receive a confirmation email shortly.</p>
        <Link to="/" className="home-link">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
