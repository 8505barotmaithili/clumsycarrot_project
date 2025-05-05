import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import Recommand from "../Components/Recommand";
import RecentlyViewedSlider from "../Components/Recentlyview";
import Footer from "../Components/Footer";

const Shoespage = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("Featured");
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedOccasions, setSelectedOccasions] = useState([]);
  const [selectedLengths, setSelectedLengths] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSleeves, setSelectedSleeves] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:3000/shoes";
        const response = await axios.get(url);

        const enriched = response.data.map((item) => {
          // Extract numeric price from string
          const numericPrice = parseFloat(
            item.price.replace(/[^\d.]/g, "").replace(/,/g, "")
          );

          let priceRange = "";
          if (numericPrice < 500) priceRange = "Under ₹500";
          else if (numericPrice >= 500 && numericPrice <= 1000)
            priceRange = "₹500–₹1000";
          else if (numericPrice > 1000 && numericPrice <= 2000)
            priceRange = "₹1000–₹2000";
          else priceRange = "Over ₹2000";

          return {
            ...item,
            numericPrice,
            priceRange,
          };
        });

        let sortedData = enriched;

        if (sortOrder === "Price Low to High") {
          sortedData = [...enriched].sort(
            (a, b) => a.numericPrice - b.numericPrice
          );
        } else if (sortOrder === "Price High to Low") {
          sortedData = [...enriched].sort(
            (a, b) => b.numericPrice - a.numericPrice
          );
        } else if (sortOrder === "Featured") {
          sortedData = [...enriched].sort((a, b) => b.rating - a.rating);
        }

        setData(sortedData);
      } catch (err) {
        console.error("API fetch error:", err);
      }
    };

    fetchData();
  }, [sortOrder]);

  const filteredData = data.filter((item) => {
    const sizeMatch =
      selectedSizes.length === 0 || selectedSizes.includes(item.size);
    const occasionMatch =
      selectedOccasions.length === 0 ||
      selectedOccasions.includes(item.occasion);
    const lengthMatch =
      selectedLengths.length === 0 || selectedLengths.includes(item.length);
    const colorMatch =
      selectedColors.length === 0 || selectedColors.includes(item.color);
    const sleeveMatch =
      selectedSleeves.length === 0 ||
      selectedSleeves.includes(item.sleeveLength);
    const priceMatch =
      selectedPrices.length === 0 || selectedPrices.includes(item.priceRange);

    return (
      sizeMatch &&
      occasionMatch &&
      lengthMatch &&
      colorMatch &&
      sleeveMatch &&
      priceMatch
    );
  });

  const uniqueOccasions = Array.from(
    new Set(data.map((item) => item.occasion))
  ).filter(Boolean);

  const getButtonStyle = (isSelected) => ({
    padding: "8px 12px",
    margin: "4px",
    border: isSelected ? "2px solid black" : "1px solid #ccc",
    backgroundColor: isSelected ? "#e0e0e0" : "white",
    borderRadius: "4px",
    cursor: "pointer",
  });

  const renderFilterButtons = (clearFn) => (
    <>
      <br />
      <button style={buttonStyle} onClick={() => clearFn([])}>
        Clear All
      </button>
      <button
        style={{ ...buttonStyle, marginLeft: "5%" }}
        onClick={() => setShowSidebar(false)}
      >
        View Items
      </button>
    </>
  );

  const buttonStyle = {
    marginTop: "16px",
    padding: "8px 12px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />
      <hr />
      <br />
      <br />

      <div className="container">
        <div className="header">
          <div className="titleRow">
            <span className="title">BEACH & DESTINATION</span>
            <div className="sortContainer">
              <label>Sort by</label>
              <select
                style={{ padding: "8px", fontSize: "14px" }}
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option>Featured</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div>
          </div>

          <div className="filters">
            {["All Filters", "size", "Price", "Occasion", "Color"].map(
              (filter) => (
                <button
                  key={filter}
                  className="filterBtn"
                  onClick={() => {
                    setActiveFilter(filter);
                    setShowSidebar(true);
                  }}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>

        <div className="productGrid">
          {filteredData.map((item, idx) => (
            <div key={idx} className="productCard">
              <Link to={`/shoes/${item.id}`}>
                <img
                  src={item.image[0]}
                  alt={item.title}
                  className="productImg"
                />
              </Link>
              <div>
                <h4 className="brand">{item.brand}</h4>
                <p className="titleText">{item.title}</p>
                <p className="price">{item.price}</p>
                <p className="rating">★★★★☆ ({item.rating})</p>
                {item.tag && <span className="tag">{item.tag}</span>}
              </div>
            </div>
          ))}
        </div>

        <br />
        <div>
          <h1>Women's Destination Wedding Guest Dresses</h1>
          <p>
            For Destination weddings, attire for guests can be tricky. You want
            to honor the occasion but dress appropriately for the venue...
          </p>
        </div>
      </div>

      {showSidebar && (
        <div className="overlay" onClick={() => setShowSidebar(false)}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <span className="closeBtn" onClick={() => setShowSidebar(false)}>
              &times;
            </span>

            {activeFilter === "All Filters" ? (
              <div>
                <h3>All Filters</h3>
                {["size", "Price", "Color", "Occasion"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "12px 16px",
                      margin: "6px 0",
                      backgroundColor: "#f9f9f9",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            ) : (
              <>
                {activeFilter === "size" && (
                  <div>
                    <h4>Select Sizes</h4>
                    {["xxxs", "xxs", "xs", "s", "m", "l", "xl", "xxl"].map(
                      (val) => {
                        const isSelected = selectedSizes.includes(val);
                        return (
                          <button
                            key={val}
                            style={getButtonStyle(isSelected)}
                            onClick={() =>
                              setSelectedSizes((prev) =>
                                isSelected
                                  ? prev.filter((s) => s !== val)
                                  : [...prev, val]
                              )
                            }
                          >
                            {val.toUpperCase()}
                          </button>
                        );
                      }
                    )}
                    {renderFilterButtons(setSelectedSizes)}
                  </div>
                )}

                {activeFilter === "Occasion" && (
                  <div>
                    <h4>Select Occasion</h4>
                    {uniqueOccasions.map((val) => {
                      const isSelected = selectedOccasions.includes(val);
                      return (
                        <button
                          key={val}
                          style={getButtonStyle(isSelected)}
                          onClick={() =>
                            setSelectedOccasions((prev) =>
                              isSelected
                                ? prev.filter((o) => o !== val)
                                : [...prev, val]
                            )
                          }
                        >
                          {val}
                        </button>
                      );
                    })}
                    {renderFilterButtons(setSelectedOccasions)}
                  </div>
                )}

                {activeFilter === "Dress Skirt Length" && (
                  <div>
                    <h4>Select Skirt Length</h4>
                    {["Mini", "Midi", "Maxi"].map((val) => {
                      const isSelected = selectedLengths.includes(val);
                      return (
                        <button
                          key={val}
                          style={getButtonStyle(isSelected)}
                          onClick={() =>
                            setSelectedLengths((prev) =>
                              isSelected
                                ? prev.filter((l) => l !== val)
                                : [...prev, val]
                            )
                          }
                        >
                          {val}
                        </button>
                      );
                    })}
                    {renderFilterButtons(setSelectedLengths)}
                  </div>
                )}

                {activeFilter === "Color" && (
                  <div>
                    <h4>Select Color</h4>
                    {["Black", "White", "Red", "Blue", "Green"].map((val) => {
                      const isSelected = selectedColors.includes(val);
                      return (
                        <button
                          key={val}
                          style={getButtonStyle(isSelected)}
                          onClick={() =>
                            setSelectedColors((prev) =>
                              isSelected
                                ? prev.filter((c) => c !== val)
                                : [...prev, val]
                            )
                          }
                        >
                          {val}
                        </button>
                      );
                    })}
                    {renderFilterButtons(setSelectedColors)}
                  </div>
                )}

                {activeFilter === "Sleeve Length" && (
                  <div>
                    <h4>Select Sleeve Length</h4>
                    {["Sleeveless", "Short", "3/4", "Long"].map((val) => {
                      const isSelected = selectedSleeves.includes(val);
                      return (
                        <button
                          key={val}
                          style={getButtonStyle(isSelected)}
                          onClick={() =>
                            setSelectedSleeves((prev) =>
                              isSelected
                                ? prev.filter((s) => s !== val)
                                : [...prev, val]
                            )
                          }
                        >
                          {val}
                        </button>
                      );
                    })}
                    {renderFilterButtons(setSelectedSleeves)}
                  </div>
                )}

                {activeFilter === "Price" && (
                  <div>
                    <h4>Select Price Range</h4>
                    {[
                      "Under ₹500",
                      "₹500–₹1000",
                      "₹1000–₹2000",
                      "Over ₹2000",
                    ].map((val) => {
                      const isSelected = selectedPrices.includes(val);
                      return (
                        <button
                          key={val}
                          style={getButtonStyle(isSelected)}
                          onClick={() =>
                            setSelectedPrices((prev) =>
                              isSelected
                                ? prev.filter((p) => p !== val)
                                : [...prev, val]
                            )
                          }
                        >
                          {val}
                        </button>
                      );
                    })}
                    {renderFilterButtons(setSelectedPrices)}
                  </div>
                )}
              </>
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

export default Shoespage;
