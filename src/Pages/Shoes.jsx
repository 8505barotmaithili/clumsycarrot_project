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
          <p style={{ fontSize: "14px", color: "gray" }}> / SHOES</p>
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>SHOES</h2>
          <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>
            SPRING SALE: UP TO 65% OFF
          </h4>
          <div
            style={{ marginTop: "20px", fontSize: "14px", lineHeight: "1.6" }}
          >
            {[
              " Shop All",
              "AQUA ",
              "Loeffler Randall",
              "Marc Fisher LTD",
              "Michael Kors",
              "Paul Green",
              "Sam Edelman",
              "Stuart Weitzman",
              "Vibi Venezia",
              "Shoes by Style",
              "All Shoes",
              "Ankle Boots & Booties",
              "Athletic & Running",
              "Boots",
              "Bridal",
              "Loeffler Randall",
              "Marc Fisher LTD",
              "Michael Kors",
              "Paul Green",
              "Sam Edelman",
              "Stuart Weitzman",
              "Vibi Venezia",
              "Shoes by Style",
              "All Shoes",
              "Slides",
              "What To Wear For",
              "Weekend",
              "Going Out",
              "The Office",
              "Vacation",
              "Wedding",
              "Bride To Be",
              "Working Out",
              "Featured Designers",
              "Designers A-Z",
              "Ferragamo",
              "Jimmy Choo",
              "Marc Fisher LTD.",
              "Sam Edelman",
              "Stuart Weitzman",
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
              {
                src: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK4_CC_JimmyChoo-Bridal-LPMain_VT_EG?resMode=sharp2&qlt=85,0&fmt=webp&wid=1080&hei=450",
              },
            ].map((item, idx) => (
              <div key={idx} style={{ width: "90%", height: "500px" }}>
                <Link to="/Shoespage">
                  <img
                    src={item.src}
                    alt={item.label}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Shop By Category */}
          <h2
            style={{
              textAlign: "left",
              margin: "30px 0 10px 2%",
              marginLeft: "5%",
            }}
          >
            SHOP BY CATEGORY
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              padding: "0 2%",
              marginLeft: "4%",
            }}
          >
            {[
              {
                label: "Sandals",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_CC_SHOES_LP_REFRESH_Essentials_VT_4:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp",
              },
              {
                label: "Sneakers",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_CC_SHOES_LP_REFRESH_Essentials_VT_11:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp",
              },
              {
                label: "Flats & Loafers",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_CC_SHOES_LP_REFRESH_Essentials_VT_9:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp",
              },
              {
                label: "Pumps",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_CC_SHOES_LP_REFRESH_Essentials_VT_13:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp",
              },
              {
                label: "Sweaters",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_CC_SHOES_LP_REFRESH_Essentials_VT_7:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp",
              },
              {
                label: "Tops & Tees",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_CC_SHOES_LP_REFRESH_Essentials_VT_3:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp",
              },
              {
                label: "Loungewear",
                img: "https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/14418072_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=360&hei=450",
              },
              {
                label: "Skirts",
                img: "https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/14580542_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=360&hei=450",
              },
              {
                label: "Sleepwear",
                img: "https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/14305698_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=360&hei=450",
              },
            ].map((item, idx) => (
              <div key={idx} style={{ width: "18%", minWidth: "150px" }}>
                <Link to="" style={{ color: "black", textDecoration: "none" }}>
                  <img
                    src={`${item.img}`}
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
