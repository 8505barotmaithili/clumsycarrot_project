import React from "react";
import { Link } from "react-router-dom";

const Motherday = () => {
  return (
    <div
      style={{ height: "700px", width: "95%", margin: "auto", marginTop: "6%" }}
    >
      <Link to={"/mother"}>
        <img
          src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0426-0427_Desktop_celebratemom?resMode=sharp2&qlt=85,0&fmt=webp&wid=2880&hei=1200"
          style={{ height: "100%", width: "100%" }}
        ></img>
      </Link>
    </div>
  );
};

export default Motherday;
