import React, { useEffect, useState } from "react";
import axios from "axios";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import Recommand from "../Components/Recommand";
import RecentlyViewedSlider from "../Components/Recentlyview";
import Footer from "../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
const Women = () => {
  const [guestGuide, setGuestGuide] = useState([]);
  const [categories, setCategories] = useState([]);
  const [label, setlabels] = useState([]);
  const [happening, sethappenig] = useState([]);
  const [bridalItems, setBridalItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/guestGuide")
      .then((res) => setGuestGuide(res.data));
    axios
      .get("http://localhost:3000/categories")
      .then((res) => setCategories(res.data));
    axios
      .get("http://localhost:3000/labels")
      .then((res) => setlabels(res.data));

    axios
      .get("http://localhost:3000/happening")
      .then((res) => sethappenig(res.data));

    axios
      .get("http://localhost:3000/trending")
      .then((res) => setBridalItems(res.data));
  }, []);

  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />
      <div
        style={{
          display: "flex",
          fontFamily: "Arial, sans-serif",

          width: "90%",
          margin: "auto",
        }}
      >
        {/* Sidebar */}

        <div style={{ width: "270px", padding: "30px" }}>
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
        <div style={{ flex: 1, padding: "30px" }}>
          {/* Guest Guide Section */}
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            THE WELL-DRESSED GUEST GUIDE
          </h2>
          <br></br>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
            {guestGuide.map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  maxWidth: "358px",
                }}
              >
                <Link
                  to="/guestdesc"
                  state={{
                    apiUrl:
                      index === 0
                        ? "http://localhost:3000/data"
                        : "http://localhost:3000/trending",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", cursor: "pointer" }}
                  />
                </Link>
                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                    fontSize: "13px",
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <br></br>

          {/* Shop by Category Section */}
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            SHOP BY CATEGORY
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "30px",
              textAlign: "center",
            }}
          >
            {categories.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    maxWidth: "290px",
                    margin: "0 auto",
                    borderRadius: "4px",
                  }}
                />
                <p style={{ marginTop: "10px", fontSize: "13px" }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <br></br>
          <br></br>
          {/* LABELS WE LOVE */}
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            LABELS WE LOVE
          </h2>
          <br></br>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))",
              gap: "30px",
              textAlign: "center",
            }}
          >
            {label.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    maxWidth: "290px",
                    margin: "0 auto",
                    borderRadius: "4px",
                  }}
                />
                <p style={{ marginTop: "10px", fontSize: "13px" }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <br></br>
          {/* HAPPENING NOW */}
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            HAPPENING NOW
          </h2>
          <br></br>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))",
              gap: "30px",
              textAlign: "center",
            }}
          >
            {happening.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    maxWidth: "290px",
                    margin: "0 auto",
                    borderRadius: "4px",
                  }}
                />
                <p style={{ marginTop: "10px", fontSize: "13px" }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <br></br>
          {/* trending */}
        </div>
      </div>
      <Recommand />
      <RecentlyViewedSlider />
      <Footer />
    </div>
  );
};

export default Women;
