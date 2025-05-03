import React from "react";

const Shopcart = () => {
  return (
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

      {/* Product 1 */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #e5e7eb",
          padding: "1.5rem 0",
        }}
      >
        <img
          src="https://assets.bloomingdalesassets.com/is/image/FashionProductionStory/3514318_fpx"
          alt="Earrings"
          style={{
            width: "6rem",
            height: "6rem",
            objectFit: "cover",
            marginRight: "1.5rem",
          }}
        />
        <div style={{ flex: 1 }}>
          <p style={{ fontWeight: "600" }}>Bloomingdale's Fine Collection</p>
          <a href="#" style={{ color: "#2563eb", textDecoration: "underline" }}>
            Diamond Huggie Hoop Earrings in 14K White Gold, 0.5 ct. t.w.
          </a>
          <p>Color: White</p>
          <p>Web ID: 3514318</p>

          <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
            Fine Jewelry: Buy More, Save More
          </p>
          <p style={{ color: "#dc2626" }}>-INR 21,813.00</p>
          <p style={{ fontWeight: "600", marginTop: "0.5rem" }}>
            Total INR 87,251.00
          </p>

          <div style={{ marginTop: "0.5rem" }}>
            <label style={{ display: "inline-flex", alignItems: "center" }}>
              <input
                type="radio"
                checked
                readOnly
                style={{ marginRight: "0.5rem" }}
              />
              Direct from vendor: Usually leaves the facility within 3 business
              days.
            </label>
          </div>
          <button
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
              value="1"
              readOnly
              style={{ width: "2rem", textAlign: "center", border: "none" }}
            />
            <button
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
          <p
            style={{
              marginTop: "0.5rem",
              textDecoration: "line-through",
              color: "#9ca3af",
            }}
          >
            INR 218,128.00
          </p>
          <p style={{ color: "#dc2626", fontWeight: "600" }}>INR 109,064.00</p>
        </div>
      </div>

      {/* Product 2 */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #e5e7eb",
          padding: "1.5rem 0",
        }}
      >
        <img
          src="https://assets.bloomingdalesassets.com/is/image/FashionProductionStory/5473244_fpx"
          alt="Jeans"
          style={{
            width: "6rem",
            height: "6rem",
            objectFit: "cover",
            marginRight: "1.5rem",
          }}
        />
        <div style={{ flex: 1 }}>
          <p style={{ fontWeight: "600" }}>AG</p>
          <a href="#" style={{ color: "#2563eb", textDecoration: "underline" }}>
            AG Mid Rise Straight Leg Jeans in Oceanside
          </a>
          <p>Size: 29</p>
          <p>Color: Oceanside</p>
          <p>Web ID: 5473244</p>

          <div style={{ marginTop: "0.5rem" }}>
            <label style={{ display: "inline-flex", alignItems: "center" }}>
              <input
                type="radio"
                checked
                readOnly
                style={{ marginRight: "0.5rem" }}
              />
              <span style={{ color: "#dc2626" }}>Just a few left!</span>
            </label>
          </div>
          <button
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
              value="1"
              readOnly
              style={{ width: "2rem", textAlign: "center", border: "none" }}
            />
            <button
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
          <p style={{ marginTop: "0.5rem", fontWeight: "600" }}>
            INR 18,759.00
          </p>
        </div>
      </div>

      {/* Summary */}
      <div
        style={{
          marginTop: "2.5rem",
          backgroundColor: "#f3f4f6",
          padding: "1.5rem",
          borderRadius: "0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <span style={{ fontWeight: "500" }}>Subtotal</span>
          <span style={{ fontSize: "1.25rem", fontWeight: "600" }}>
            INR 106,010.00
          </span>
        </div>
        <p
          style={{
            fontSize: "0.875rem",
            color: "#6b7280",
            marginBottom: "0.5rem",
          }}
        >
          Estimated savings: INR 130,877.00
        </p>
        <button
          style={{
            width: "100%",
            backgroundColor: "#000",
            color: "#fff",
            padding: "0.75rem",
            fontWeight: "600",
            marginTop: "1rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          PROCEED TO CHECKOUT
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.875rem",
            marginTop: "1rem",
          }}
        >
          <a href="#" style={{ textDecoration: "underline" }}>
            Continue shopping
          </a>
          <a href="#" style={{ textDecoration: "underline" }}>
            Shipping to the United States?
          </a>
        </div>
        <div
          style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#6b7280" }}
        >
          Need help?{" "}
          <a href="#" style={{ textDecoration: "underline" }}>
            Chat with us
          </a>{" "}
          or call <strong>1-800-777-0000</strong>
        </div>
      </div>
    </div>
  );
};

export default Shopcart;
