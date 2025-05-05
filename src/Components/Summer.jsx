import React from "react";
import { Link } from "react-router-dom";

const Summer = () => {
  return (
    <div
      style={{
        marginTop: "10%",
        textAlign: "center",
        width: "96%",
        margin: "auto",
      }}
    >
      <h3 style={{ marginTop: "7%" }}>SUMMER EVENTS</h3>
      <div style={{ display: "flex", marginTop: "3%", gap: "1.6%" }}>
        <div
          style={{ height: "600px", width: "50%", backgroundColor: "black" }}
        >
          <Link to={"/guestdesc"}>
            <img
              src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0429-0501_Desktop_weddingguest:5x4?$subad_pool_2_desktop_5x4$&resMode=sharp2&qlt=85,0&fmt=webp"
              style={{ height: "100%", width: "100%" }}
            ></img>
          </Link>
          WEDDING GUEST DRESSES
        </div>
        <div style={{ height: "600px", width: "50%", backgroundColor: "pink" }}>
          <Link to={"/bridetobe"}>
            {" "}
            <img
              src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0429-0501_Desktop_bridetobe?$subad_pool_2_desktop_5x4$&resMode=sharp2&qlt=85,0&fmt=webp"
              style={{ height: "100%", width: "100%" }}
            ></img>
          </Link>
          BRIDE-TO-BE DRESSES
        </div>
      </div>
    </div>
  );
};

export default Summer;
