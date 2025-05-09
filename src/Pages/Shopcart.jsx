import React from "react";
import { useCart } from "../Context/CartContext";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Shopcart.css";

import { ToastContainer, toast } from "react-toastify";

const Shopcart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    return (
      total + item.quantity * parseFloat(item.price?.replace(/[^\d.]/g, ""))
    );
  }, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    toast.success("Proceed to checkout");
    navigate("/checkout");
  };

  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />

      <div className="shopcart-container">
        <motion.div
          className="cart-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h6 className="cart-title">YOUR CART BAG</h6>
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your bag is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <motion.div
                key={index}
                className="cart-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="item-image"
                />
                <div className="item-details">
                  <p className="item-brand">{item.brand || "Brand Name"}</p>
                  <p className="item-name">{item.name}</p>
                  <p>Color: off-white</p>
                  <p>ID: {item.id}</p>
                  <p>
                    Price: INR{" "}
                    {parseFloat(
                      item.price?.replace(/[^\d.]/g, "")
                    ).toLocaleString()}
                  </p>
                  <p className="stock-msg">
                    {item.stockMessage || "In stock and ready to ship."}
                  </p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="quantity-control">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <input type="text" readOnly value={item.quantity} />
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <p className="item-total">
                    INR{" "}
                    {(
                      item.quantity *
                      parseFloat(item.price?.replace(/[^\d.]/g, ""))
                    ).toLocaleString()}
                  </p>
                </div>
              </motion.div>
            ))
          )}

          {cartItems.length > 0 && (
            <div className="checkout-section">
              <p className="total-price">
                Total: INR {totalPrice.toLocaleString()}
              </p>
              {/* <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button> */}
            </div>
          )}
        </motion.div>

        <motion.div
          className="shipping-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Shipping Information</h2>
          <form className="form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Address Line 1" required />

            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Postal Code" required />
            <input type="text" placeholder="Country" required />
            {/* <button type="submit" className="save-shipping">
              Save Info
            </button> */}
            <button
              type="button"
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Shopcart;
