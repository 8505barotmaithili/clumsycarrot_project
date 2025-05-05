import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useCart(); // Assuming `clearCart` is a method in CartContext
  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const navigate = useNavigate();

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    return (
      total + item.quantity * parseFloat(item.price?.replace(/[^\d.]/g, ""))
    );
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order submitted!");
    clearCart(); // Clear the cart after submitting the order
    navigate("/"); // Navigate to home page
  };

  return (
    <div style={{ backgroundColor: "#f9fafb", paddingBottom: "4rem" }}>
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
            fontSize: "1.75rem",
            fontWeight: "700",
            marginBottom: "2rem",
            color: "#111",
          }}
        >
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Billing Information Section */}
          <div
            style={{
              background: "#fff",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
              padding: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{ fontSize: "1.5rem", fontWeight: "600", color: "#333" }}
            >
              Billing Information
            </h2>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
                Full Name:
              </label>
              <input
                type="text"
                name="fullName"
                value={billingInfo.fullName}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "1rem",
                  border: "1px solid #e0e0e0",
                  borderRadius: "0.375rem",
                  marginBottom: "1rem",
                  fontSize: "1rem",
                  color: "#333",
                }}
              />
            </div>

            {["email", "phone", "address", "city", "zip", "country"].map(
              (field, idx) => (
                <div key={idx} style={{ marginBottom: "1rem" }}>
                  <label
                    style={{
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={billingInfo[field]}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "1rem",
                      border: "1px solid #e0e0e0",
                      borderRadius: "0.375rem",
                      fontSize: "1rem",
                      color: "#333",
                    }}
                  />
                </div>
              )
            )}
          </div>

          {/* Order Summary Section */}
          <div
            style={{
              background: "#fff",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
              padding: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{ fontSize: "1.5rem", fontWeight: "600", color: "#333" }}
            >
              Order Summary
            </h2>
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "1rem 0",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <div>
                  <p style={{ fontWeight: "600", fontSize: "1rem" }}>
                    {item.name}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div>
                  <p>
                    INR{" "}
                    {(
                      item.quantity *
                      parseFloat(item.price?.replace(/[^\d.]/g, ""))
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem 0",
                fontWeight: "600",
              }}
            >
              <p>Total:</p>
              <p>INR {totalPrice.toLocaleString()}</p>
            </div>
          </div>

          {/* Proceed to Payment Button */}
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "0.375rem",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
            >
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
