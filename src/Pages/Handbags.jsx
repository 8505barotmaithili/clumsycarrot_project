import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { Link } from "react-router-dom";
import Recommand from "../Components/Recommand";

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
          <p style={{ fontSize: "14px", color: "gray" }}>/ Handbags</p>
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Handbags</h2>
          <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>
            SPRING SALE: UP TO 65% OFF
          </h4>
          <div
            style={{ marginTop: "20px", fontSize: "14px", lineHeight: "1.6" }}
          >
            {[
              "Shop All",

              "Buy More, Save More",
              "Shop All",
              "AQUA",
              "Cult Gaia",
              "Loeffler Randall",
              "Mansur Gavriel",
              "Michael Kors",
              "STAUD",
              "Handbags by Style",
              "All Handbags & Wallets",
              "Backpacks & Weekenders",
              "Beach Bags",
              "Bucket Bags",
              "Clutches",
              "Cosmetic Bags & Pouches",
              "Crossbody Bags",
              "Evening Bags",
              "Hobo Bags",
              "Mini Bags",
              "Satchels & Top Handle Bags",
              "Shoulder Bags",
              "Totes",
              "Wallets & Card Cases",
              "Bag Charms & Accessories",
              "Cult Gaia",
              "Loeffler Randall",
              "Mansur Gavriel",
              "Michael Kors",
              "STAUD",
              "Handbags by Style",
              "All Handbags & Wallets",
              "Backpacks & Weekenders",
              "Beach Bags",
              "Bucket Bags",
              "Clutches",
              "Cosmetic Bags & Pouches",
              "Crossbody Bags",
              "Evening Bags",
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
                src: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK2_CC_HANDBAGS%20TRENDS%20LP%20MAIN_LPMain_VT_EG?resMode=sharp2&qlt=85,0&fmt=webp&wid=1080&hei=450",
              },
            ].map((item, idx) => (
              <div key={idx} style={{ width: "90%", height: "500px" }}>
                <Link to="/handbagpage">
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
                label: "Totes",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_CC_HANDBAGS_LP_REFRESH_Essentials_VT_4:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp",
              },
              {
                label: "Shoulder Bags",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_CC_HANDBAGS_LP_REFRESH_Essentials_VT_11:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp",
              },
              {
                label: "Crossbody Bags",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_CC_HANDBAGS_LP_REFRESH_Essentials_VT_9:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp",
              },
              {
                label: " BagsClutches",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_CC_HANDBAGS_LP_REFRESH_Essentials_VT_13:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp",
              },
              {
                label: " BagsClutches",
                img: "https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/14668082_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=360&hei=450",
              },
              {
                label: "Tops & Tees",
                img: "https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/14668091_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=360&hei=450",
              },
              {
                label: "Loungewear",
                img: "https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/14689505_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=360&hei=450",
              },
              {
                label: "Skirts",
                img: "https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/14693072_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=360&hei=450",
              },
              {
                label: "Sleepwear",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_CC_HANDBAGS_LP_REFRESH_Essentials_VT_3:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp",
              },
              {
                label: "Sleepwear",
                img: "https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_CC_HANDBAGS%20LP%20REFRESH_LPTile_VT_2:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp",
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
      <Recommand />
      <Footer />
    </div>
  );
};

export default Women;
