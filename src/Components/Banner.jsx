import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div style={{ display: "flex", marginLeft: "2%" }}>
        <div
          style={{ width: "32%", backgroundColor: "black", height: "710px" }}
        >
          <img
            src="\src\assets\banner_1.png"
            style={{ height: "100%", width: "100%" }}
          ></img>
        </div>
        <div
          style={{
            width: "33%",
            paddingTop: "5%",

            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "40px" }}>MOTHER </h3>
          <span
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "48px",
              fontWeight: 700,
              letterSpacing: "1px",
              lineHeight: "1.2",
              textAlign: "center",
              display: "block",
            }}
          >
            BOOGIE WOOGIE <br></br>BOARDWALK
          </span>
          <br></br>
          This collection of vintage-wash denim and knits pays homage to
          <br></br>
          Venice Beach in the '80s. <br></br>
          <br></br>
          <Link href="">SHOP NOW</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="">EXPLORE THE LOOK BOOK</Link>
        </div>
        <div style={{ width: "33%", backgroundColor: "purple" }}>
          {" "}
          <img
            src="\src\assets\banner_2.png"
            style={{ height: "100%", width: "100%" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
