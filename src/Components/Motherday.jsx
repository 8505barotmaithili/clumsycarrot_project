import React from "react";
import "./Motherday.css";
import { Link } from "react-router-dom";

const Motherday = () => {
  return (
    <div className="motherday-container">
      <h1>EDITORIAL</h1>
      <p>The latest launches, Fashion Office obsessions, and top trends.</p>
      <div className="motherday-grid">
        <div className="editorial-card">
          <Link to={"/women"}>
            <img
              src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_editorial_women?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
              alt="Women"
            />
          </Link>
          WOMEN
        </div>
        <div className="editorial-card">
          <Link to={"/beauty"}>
            <img
              src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_editorial_beauty?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
              alt="Beauty"
            />
          </Link>
          BEAUTY
        </div>
        <div className="editorial-card">
          <Link to={"/men"}>
            <img
              src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_editorial_men?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
              alt="Men"
            />
          </Link>
          MEN
        </div>
        <div className="editorial-card">
          <Link to={"/decor"}>
            <img
              src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_editorial_home?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
              alt="Home"
            />
          </Link>
          HOME
        </div>
      </div>
    </div>
  );
};

export default Motherday;
