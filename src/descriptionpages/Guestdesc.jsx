import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import Recommand from "../Components/Recommand";
import RecentlyViewedSlider from "../Components/Recentlyview";
import Footer from "../Components/Footer";

const Guestdesc = () => {
  const { state } = useLocation();
  const [data, setData] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    if (state?.apiUrl) {
      axios
        .get(state.apiUrl)
        .then((res) => setData(res.data))
        .catch((err) => console.error("API Error:", err));
    }
  }, [state]);

  const styles = {
    container: {
      padding: "30px",
      fontFamily: "'Helvetica Neue', sans-serif",
      color: "#222",
    },
    header: {
      marginBottom: "20px",
    },
    titleRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    count: {
      fontSize: "16px",
      fontWeight: "normal",
      color: "#555",
      marginLeft: "8px",
    },
    filters: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      margin: "20px 0",
    },
    filterBtn: {
      border: "1px solid #ccc",
      padding: "10px 14px",
      backgroundColor: "white",
      cursor: "pointer",
      fontSize: "14px",
    },
    sortContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: "40px",
    },
    productCard: {
      textAlign: "center",
    },
    productImg: {
      width: "100%",
      objectFit: "cover",
    },
    brand: {
      fontWeight: "bold",
      marginTop: "10px",
      marginBottom: "4px",
    },
    titleText: {
      fontSize: "14px",
      color: "#333",
      margin: "4px 0",
    },
    price: {
      fontWeight: "500",
      color: "#111",
    },
    rating: {
      fontSize: "13px",
      color: "#f5a623",
    },
    tag: {
      display: "inline-block",
      marginTop: "6px",
      fontSize: "12px",
      color: "#999",
    },
  };

  const sidebarStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 999,
    },
    sidebar: {
      position: "fixed",
      top: 0,
      right: 0,
      width: "300px",
      height: "100%",
      backgroundColor: "#fff",
      boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
      padding: "20px",
      overflowY: "auto",
    },
    closeBtn: {
      position: "absolute",
      top: "10px",
      right: "15px",
      fontSize: "24px",
      cursor: "pointer",
    },
  };

  const filterCategories = [
    "Size",
    "Occasion",
    "Dress Skirt Length",
    "Price",
    "Color",
    "Sleeve Length",
  ];

  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />
      <hr></hr>
      <br />
      <br />
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.titleRow}>
            <div>
              <span style={styles.title}>BEACH & DESTINATION</span>
              <span style={styles.count}>(248)</span>
            </div>
            <div style={styles.sortContainer}>
              <label>Sort by</label>
              <select style={{ padding: "8px", fontSize: "14px" }}>
                <option>Featured</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div>
          </div>

          <div style={styles.filters}>
            <button
              style={styles.filterBtn}
              onClick={() => {
                setActiveFilter("All Filters");
                setShowSidebar(true);
              }}
            >
              All Filters
            </button>

            {filterCategories.map((filter) => (
              <button
                key={filter}
                style={styles.filterBtn}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowSidebar(true);
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.productGrid}>
          {data.map((item, idx) => (
            <div key={idx} style={styles.productCard}>
              <Link to={`/beachdesc/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={styles.productImg}
                />
              </Link>
              <div>
                <h4 style={styles.brand}>{item.brand}</h4>
                <p style={styles.titleText}>{item.title}</p>
                <p style={styles.price}>INR {item.price}</p>
                <p style={styles.rating}>★★★★☆ ({item.rating})</p>
                {item.tag && <span style={styles.tag}>{item.tag}</span>}
              </div>
            </div>
          ))}
        </div>

        <br />
        <br />
        <br />
        <div>
          <h1>Women's Destination Wedding Guest Dresses</h1>
          <br />
          <p>
            For Destination weddings, attire for guests can be tricky. You want
            to honor the occasion but dress appropriately for the venue...
          </p>
        </div>
      </div>

      {/* Sidebar */}
      {showSidebar && (
        <div
          style={sidebarStyles.overlay}
          onClick={() => setShowSidebar(false)}
        >
          <div
            style={sidebarStyles.sidebar}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              style={sidebarStyles.closeBtn}
              onClick={() => setShowSidebar(false)}
            >
              &times;
            </span>

            <h3 style={{ marginBottom: "20px" }}>{activeFilter}</h3>

            {activeFilter === "All Filters" && (
              <div>
                {filterCategories.map((filter) => (
                  <button
                    key={filter}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "10px",
                      marginBottom: "10px",
                      border: "1px solid #ccc",
                      backgroundColor: "#f9f9f9",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}

            {activeFilter === "Size" && (
              <div>
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <label
                    key={size}
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    <input type="checkbox" /> {size}
                  </label>
                ))}
              </div>
            )}

            {activeFilter === "Color" && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {[
                  "black",
                  "blue",
                  "green",
                  "red",
                  "pink",
                  "gold",
                  "purple",
                ].map((color) => (
                  <div
                    key={color}
                    title={color}
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: color,
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  ></div>
                ))}
              </div>
            )}

            {activeFilter === "Price" && (
              <div>
                <label>
                  <input type="radio" name="price" /> Under ₹5000
                </label>
                <br />
                <label>
                  <input type="radio" name="price" /> ₹5000 – ₹10,000
                </label>
                <br />
                <label>
                  <input type="radio" name="price" /> Over ₹10,000
                </label>
              </div>
            )}

            {/* Add other filters like Occasion, Sleeve Length here if needed */}

            {activeFilter !== "All Filters" && (
              <button
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setShowSidebar(false)}
              >
                APPLY FILTER
              </button>
            )}
          </div>
        </div>
      )}

      <Recommand />
      <RecentlyViewedSlider />
      <Footer />
    </div>
  );
};

export default Guestdesc;
