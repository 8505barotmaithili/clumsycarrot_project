import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div>
        <Link to={"/mother"}>
          <img
            src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_celebratemom?resMode=sharp2&qlt=85,0&fmt=webp&wid=2880&hei=1200"
            style={{ height: "100%", width: "95%", paddingLeft: "3%" }}
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
