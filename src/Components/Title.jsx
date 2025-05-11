import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBagFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "./Title.css";

const Title = () => {
  const { cartItems } = useCart();

  return (
    <div className="title-wrapper">
      <img
        src="https://assets.bloomingdalesassets.com/app/navigation-wgl/static/images/logo.svg"
        alt="Logo"
        className="title-logo"
      />

      <div className="title-search-cart">
        <div className="title-search-wrapper">
          <CiSearch className="title-search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="title-search-input"
          />
        </div>

        <Link to="/shopcart" className="title-cart-icon">
          <RiShoppingBagFill />
          {cartItems.length > 0 && (
            <span className="title-cart-count">{cartItems.length}</span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Title;
