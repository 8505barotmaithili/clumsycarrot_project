import React from "react";
import { Link } from "react-router-dom";
import "./Summer.css";

const Summer = () => {
  return (
    <div className="summer-container">
      <h2 className="summer-heading">SUMMER EVENTS</h2>
      <div className="summer-grid">
        <div className="summer-card">
          <Link to="/guestdesc">
            <img
              src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0429-0501_Desktop_weddingguest:5x4?$subad_pool_2_desktop_5x4$&resMode=sharp2&qlt=85,0&fmt=webp"
              alt="Wedding Guest Dresses"
            />
          </Link>
          <p>WEDDING GUEST DRESSES</p>
        </div>
        <div className="summer-card">
          <Link to="/bridetobe">
            <img
              src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0429-0501_Desktop_bridetobe?$subad_pool_2_desktop_5x4$&resMode=sharp2&qlt=85,0&fmt=webp"
              alt="Bride-to-be Dresses"
            />
          </Link>
          <p>BRIDE-TO-BE DRESSES</p>
        </div>
      </div>
    </div>
  );
};

export default Summer;
