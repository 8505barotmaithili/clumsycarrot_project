import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBagFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
const Title = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <div
        style={{
          height: "60px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://assets.bloomingdalesassets.com/app/navigation-wgl/static/images/logo.svg"
          style={{ height: "40px", marginLeft: "3%", marginTop: "0.4%" }}
        ></img>

        <div style={{ position: "relative", width: "200px" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              height: "43px",
              width: "190%",
              border: "none",
              borderBottom: "1px solid black",
              outline: "none",
              fontSize: "16px",
              paddingLeft: "38px",
              marginLeft: "-150%",
              marginTop: "3%",
            }}
          />
          <CiSearch
            style={{
              position: "absolute",
              top: "48%",
              left: "-300px",
              transform: "translateY(-50%)",
              fontSize: "30px",
              color: "gray",
            }}
          />
          <Link
            to={"/shopcart"}
            style={{ color: "#DB9C60", fontSize: "23px", position: "relative" }}
          >
            <RiShoppingBagFill />
            {cartItems.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
              >
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Title;
