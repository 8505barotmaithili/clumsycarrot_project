import React from "react";
import { Link } from "react-router-dom";
import "./Dior.css";

const Dior = () => {
  return (
    <div className="dior-container">
      <Link to={""}>
        <div className="dior-image-container">
          <img
            src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_nespresso?resMode=sharp2&qlt=85,0&fmt=webp&wid=2880&hei=1200"
            alt="Dior"
            className="dior-image"
          />
        </div>
      </Link>
    </div>
  );
};

export default Dior;
