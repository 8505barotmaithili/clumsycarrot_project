import React from "react";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import Recommand from "../Components/Recommand";
import RecentlyViewedSlider from "../Components/Recentlyview";
import Footer from "../Components/Footer";

const WomenPage = () => {
  const featuredLooks = [
    {
      items: ["https://via.placeholder.com/100x100?text=Sandal"],
    },
    {
      items: ["https://via.placeholder.com/100x100?text=Bag"],
    },
  ];
  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />
      <hr></hr>
      <div style={{ display: "flex", fontFamily: "Arial, sans-serif" }}>
        {" "}
        {/* Sidebar */}
        <div style={{ width: "250px", padding: "20px" }}>
          <p style={{ fontSize: "14px", color: "gray" }}>/ Women</p>
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>WOMEN</h2>
          <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>
            SPRING SALE: UP TO 65% OFF
          </h4>
          <p>Shop All</p>
          <p>Dresses</p>
          <p>Jackets</p>
          <p>Jeans & Denim</p>
          <p>Linen</p>
          <p>Shorts & Skirts</p>
          <p>Swimsuits & Cover-Ups</p>
          <p>Tops & Tees</p>
          <h4
            style={{ fontSize: "14px", fontWeight: "bold", marginTop: "20px" }}
          >
            L'AGENCE: 25% OFF SPRING STYLES
          </h4>
          <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>
            LINGERIE: EARN A $25 REWARD FOR EVERY $100
          </h4>
          <h4
            style={{ fontSize: "14px", fontWeight: "bold", marginTop: "20px" }}
          >
            CLOTHING
          </h4>
          <p>Shop All</p>
          <p>Active & Workout</p>
          <p>Blazers</p>
          <p>Cashmere</p>
          <p>Coats & Jackets</p>
          <p>Dresses</p>
          <p>Jeans & Denim</p>
          <p>Jumpsuits & Rompers</p>
          <p>Lingerie, Bras, Panties & Hosiery</p>
          <p>Loungewear</p>
          <p>Shorts</p>
          <p>Skirts</p>
          <p>Matching Sets</p>
          <p>Maternity</p>
          <p>Pants & Leggings</p>
          <p>Sleepwear & Robes</p>
          <p>Suits & Separates</p>
          <p>Sweaters</p>
          <p>Swimsuits & Cover-Ups</p>
          <p>Tops & Tees</p>
          <p>DRESSES</p>
          <p>Shop All</p>
          <p>Cocktail & Party</p>
          <p>Evening & Formal Gowns</p>
          <p>Prom</p>
          <p>Spring Dresses</p>
          <p>Wedding Guest</p>
          <p>White Dresses</p>
          <p>SPRING TRENDS</p>
          <p>Shop All</p>
          <p>'60s Glam</p>
          <p>Boho Everything</p>
          <p>Pastels</p>
          <p>Bubble Hem</p>
          <p>Drop Waist</p>
          <p>WHAT TO WEAR FOR</p>
          <p>Bride to Be</p>
          <p>Going Out</p>
          <p>The Office</p>
          <p>Vacation</p>
          <p>Weddings</p>
          <p>Weekend</p>
          <p> New to Bloomingdale'</p>
          <p>American Vintage</p>
          <p>Camilla</p>
          <p>CO</p>
          <p> Guest in Residence</p>
          <p>Jenni Kayne</p>
          <p>NONCHALANT LABEL</p>
          <p>New & Noteworthy</p>
          <p> New Arrivals</p>
          <p>Best Sellers</p>
          <p>Mother's Day Gifts</p>
          <p> Most Wanted Styles: Under $200</p>
          <p>NEW: Emily Ratajkowski x Marella</p>
          <p> The Linen Shop</p>
          <p>Plus Size Clothing</p>
          <p>Featured Designers</p>
          <p>Alice and Olivia</p>
          <p>AQUA</p>
          <p>Buck Mason</p>
          <p>Burberry</p>
          <p>Cinq à Sept</p>
          <p> FARM Rio</p>
          <p> L'AGENCE</p>
          <p>Maje</p>
          <p> MOTHER</p>
          <p>NIC+ZOE</p>
          <p>rag & bone</p>
          <p>REISS</p>
          <p>Sandro </p>
          <p>Self-Portrait</p>
          <p>Teri Jon</p>
          <p>Theory</p>
          <p>Veronica Beard</p>
          <p> Designer Boutique</p>
        </div>
        {/* Main Content */}
        <div style={{ flex: 1, padding: "20px" }}>
          {/* Guide Section */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            THE WELL-DRESSED GUEST GUIDE
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src="https://via.placeholder.com/300x450?text=Beach"
                alt="Beach"
                style={{ width: "100%" }}
              />
              <p style={{ marginTop: "10px", textDecoration: "underline" }}>
                BEACH & DESTINATION
              </p>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src="https://via.placeholder.com/300x450?text=Cocktail"
                alt="Cocktail"
                style={{ width: "100%" }}
              />
              <p style={{ marginTop: "10px", textDecoration: "underline" }}>
                COCKTAIL
              </p>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src="https://via.placeholder.com/300x450?text=Formal"
                alt="Formal"
                style={{ width: "100%" }}
              />
              <p style={{ marginTop: "10px", textDecoration: "underline" }}>
                FORMAL & BLACK TIE
              </p>
            </div>
          </div>

          {/* SHOP BY CATEGORY */}
          <div
            style={{
              background: "#f0f09a",
              marginTop: "40px",
              padding: "20px",
            }}
          >
            <h2 style={{ fontWeight: "bold", fontSize: "22px" }}>
              SHOP BY CATEGORY
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "30px",
                marginTop: "20px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100x130?text=Dresses"
                  alt="Dresses"
                />
                <p>Dresses</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100x130?text=Evening"
                  alt="Evening"
                />
                <p>Evening & Formal</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100x130?text=Jeans"
                  alt="Jeans"
                />
                <p>Jeans & Denim</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100x130?text=Jackets"
                  alt="Jackets"
                />
                <p>Coats & Jackets</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100x130?text=Sweaters"
                  alt="Sweaters"
                />
                <p>Sweaters</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100x130?text=Tops"
                  alt="Tops"
                />
                <p>Tops & Tees</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100x130?text=Loungewear"
                  alt="Loungewear"
                />
                <p style={{ textDecoration: "underline" }}>Loungewear</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100x130?text=Skirts"
                  alt="Skirts"
                />
                <p>Skirts</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100x130?text=Robes"
                  alt="Robes"
                />
                <p>Sleepwear & Robes</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100x130?text=Leggings"
                  alt="Leggings"
                />
                <p>Pants & Leggings</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100x130?text=Swim"
                  alt="Swim"
                />
                <p>Swimsuits & Coverups</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100x130?text=Lingerie"
                  alt="Lingerie"
                />
                <p>Lingerie & Shapewear</p>
              </div>
            </div>
          </div>

          {/* LABELS WE LOVE */}
          <div
            style={{
              background: "#f0f09a",
              marginTop: "30px",
              padding: "20px",
            }}
          >
            <h2 style={{ fontWeight: "bold", fontSize: "22px" }}>
              LABELS WE LOVE
            </h2>
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <img
                src="https://via.placeholder.com/220x300?text=Label+1"
                alt="Label1"
                style={{ width: "220px" }}
              />
              <img
                src="https://via.placeholder.com/220x300?text=Label+2"
                alt="Label2"
                style={{ width: "220px" }}
              />
              <img
                src="https://via.placeholder.com/220x300?text=Label+3"
                alt="Label3"
                style={{ width: "220px" }}
              />
              <img
                src="https://via.placeholder.com/220x300?text=Label+4"
                alt="Label4"
                style={{ width: "220px" }}
              />
            </div>
          </div>

          {/* HAPPENING NOW section */}
          <div
            style={{
              background: "#f0f09a",
              marginTop: "30px",
              padding: "20px",
            }}
          >
            <h2 style={{ fontWeight: "bold", fontSize: "22px" }}>
              HAPPENING NOW
            </h2>
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              {[
                "https://via.placeholder.com/220x300?text=Happening+1",
                "https://via.placeholder.com/220x300?text=Happening+2",
                "https://via.placeholder.com/220x300?text=Happening+3",
                "https://via.placeholder.com/220x300?text=Happening+4",
              ].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Happening ${index + 1}`}
                  style={{ width: "220px" }}
                />
              ))}
            </div>
          </div>

          {/* Trending now: FARM RIO */}
          <div
            style={{
              background: "#f0f09a",
              marginTop: "30px",
              padding: "20px",
            }}
          >
            <h2 style={{ fontWeight: "bold", fontSize: "22px" }}>
              Trending now: FARM RIO
            </h2>
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              {[
                "https://via.placeholder.com/220x300?text=Happening+1",
                "https://via.placeholder.com/220x300?text=Happening+2",
                "https://via.placeholder.com/220x300?text=Happening+3",
                "https://via.placeholder.com/220x300?text=Happening+4",
              ].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Happening ${index + 1}`}
                  style={{ width: "220px" }}
                />
              ))}
            </div>
          </div>

          {/* Featured looks */}
          <div
            style={{
              background: "#f0f09a",
              marginTop: "30px",
              padding: "20px",
            }}
          >
            <h2 style={{ fontWeight: "bold", fontSize: "22px" }}>
              FEATURED LOOKS
            </h2>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "20px",
                overflowX: "auto",
              }}
            >
              {featuredLooks.map((look, index) => (
                <div
                  key={index}
                  style={{
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "20px",
                    flex: "0 0 45%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minHeight: "400px",
                  }}
                >
                  {look.items.map((item, i) => (
                    <img
                      key={i}
                      src={item}
                      alt={`Item ${i + 1}`}
                      style={{ width: "80px", margin: "10px auto" }}
                    />
                  ))}

                  <button
                    style={{
                      marginTop: "auto",
                      width: "100%",
                      background: "#000",
                      color: "#fff",
                      padding: "12px 0",
                      border: "none",
                      borderRadius: "30px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    SHOP THE LOOK
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Recommand />
      <RecentlyViewedSlider />
      <Footer />
    </div>
  );
};

export default WomenPage;
