import React from "react";
import { useCart } from "../Context/CartContext";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const Shopcart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    return (
      total + item.quantity * parseFloat(item.price?.replace(/[^\d.]/g, ""))
    );
  }, 0);

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    navigate("/checkout");
  };

  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />
      <div
        style={{
          padding: "2rem",
          maxWidth: "1120px",
          margin: "auto",
          fontFamily: "sans-serif",
          fontSize: "0.875rem",
          color: "#1a1a1a",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          YOUR BROWN BAG
        </h1>
        {cartItems.length === 0 ? (
          <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            Your bag is empty.
          </p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  borderBottom: "1px solid #e5e7eb",
                  padding: "1.5rem 0",
                }}
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  style={{
                    width: "6rem",
                    height: "6rem",
                    objectFit: "cover",
                    marginRight: "1.5rem",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: "600" }}>
                    {item.brand || "Brand Name"}
                  </p>
                  <a
                    href="#"
                    style={{ color: "#2563eb", textDecoration: "underline" }}
                  >
                    {item.name}
                  </a>
                  <p>Color: off-white</p>
                  <p>Product ID: {item.id}</p>
                  <p>
                    Price: INR{" "}
                    {parseFloat(
                      item.price?.replace(/[^\d.]/g, "")
                    ).toLocaleString()}
                  </p>

                  <div style={{ marginTop: "0.5rem" }}>
                    <label
                      style={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <input
                        type="radio"
                        checked
                        readOnly
                        style={{ marginRight: "0.5rem" }}
                      />
                      {item.stockMessage || "In stock and ready to ship."}
                    </label>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      color: "#dc2626",
                      marginTop: "0.5rem",
                      textDecoration: "underline",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #d1d5db",
                      padding: "0 0.5rem",
                    }}
                  >
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      style={{
                        padding: "0 0.5rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      readOnly
                      style={{
                        width: "2rem",
                        textAlign: "center",
                        border: "none",
                      }}
                    />
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      style={{
                        padding: "0 0.5rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>

                  <p style={{ color: "#dc2626", fontWeight: "600" }}>
                    INR{" "}
                    {(
                      item.quantity *
                      parseFloat(item.price?.replace(/[^\d.]/g, ""))
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
            {/* Total Price Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "1rem 0",
                fontWeight: "600",
              }}
            >
              <p style={{ fontSize: "1.25rem" }}>
                Total: INR {totalPrice.toLocaleString()}
              </p>
            </div>

            {/* Proceed to Checkout Button */}
            <div
              style={{
                textAlign: "center",
                padding: "1rem 0",
              }}
            >
              <button
                onClick={handleCheckout}
                style={{
                  padding: "0.75rem 2rem",
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shopcart;
