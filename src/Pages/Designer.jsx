import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { Link } from "react-router-dom";

const Women = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />

      <div style={{ display: "flex", width: "96%", margin: "2% auto" }}>
        {/* Sidebar */}
        <div style={{ width: "270px", padding: "20px" }}>
          <p style={{ fontSize: "14px", color: "gray" }}>/ Women</p>
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>WOMEN</h2>
          <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>
            SPRING SALE: UP TO 65% OFF
          </h4>
          <div
            style={{ marginTop: "20px", fontSize: "14px", lineHeight: "1.6" }}
          >
            {[
              "Shop All",
              "Dresses",
              "Jackets",
              "Jeans & Denim",
              "Linen",
              "Shorts & Skirts",
              "Swimsuits & Cover-Ups",
              "Tops & Tees",
              "Active & Workout",
              "Blazers",
              "Cashmere",
              "Coats & Jackets",
              "Jumpsuits & Rompers",
              "Lingerie",
              "Loungewear",
              "Matching Sets",
              "Maternity",
              "Pants & Leggings",
              "Sleepwear",
              "Suits & Separates",
              "Sweaters",
              "Cocktail & Party",
              "Evening & Formal Gowns",
              "Prom",
              "Wedding Guest",
              "White Dresses",
              "Bride to Be",
              "Going Out",
              "Vacation",
              "Weddings",
              "Weekend",
              "Alice and Olivia",
              "AQUA",
              "Buck Mason",
              "Burberry",
              "Cinq à Sept",
              "FARM Rio",
              "Maje",
              "MOTHER",
              "NIC+ZOE",
            ].map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flexGrow: 1, textAlign: "center" }}>
          {/* Hero Section */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "50px",
            }}
          >
            {[
              { src: "/src/assets/first.png", label: "BEACH & DESTINATION" },
              { src: "/src/assets/second.png", label: "COCKTAIL" },
              { src: "/src/assets/third.png", label: "FORMAL & BLACK TIE" },
            ].map((item, idx) => (
              <div key={idx} style={{ width: "30%", maxWidth: "350px" }}>
                <Link to="/guestdesc">
                  <img
                    src={item.src}
                    alt={item.label}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Link>
                <h5>{item.label}</h5>
              </div>
            ))}
          </div>

          {/* Shop By Category */}
          <h2 style={{ textAlign: "left", margin: "30px 0 10px 2%" }}>
            SHOP BY CATEGORY
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              padding: "0 2%",
            }}
          >
            {[
              {
                label: "Dresses",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_01_Dresses_MK:1x1",
              },
              {
                label: "Evening & Formal",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_02_Evening_MK:1x1",
              },
              {
                label: "Jeans & Denim",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_03_Jeans_MK:1x1",
              },
              {
                label: "Coats & Jackets",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_04_Coats_MK:1x1",
              },
              {
                label: "Sweaters",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_05_Sweaters_MK:1x1",
              },
              {
                label: "Tops & Tees",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_06_Tops_MK:1x1",
              },
              {
                label: "Loungewear",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_07_Loungewear_MK:1x1",
              },
              {
                label: "Skirts",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_08_Skirts_MK:1x1",
              },
              {
                label: "Sleepwear",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_09_Sleepwear_MK:1x1",
              },
            ].map((item, idx) => (
              <div key={idx} style={{ width: "18%", minWidth: "150px" }}>
                <Link to="" style={{ color: "black", textDecoration: "none" }}>
                  <img
                    src={`${item.img}?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp`}
                    alt={item.label}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                  <p>{item.label}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Women;
