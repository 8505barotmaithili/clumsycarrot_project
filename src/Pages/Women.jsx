// import Headline from "../Components/Headline";
// import Small_nav from "../Components/Small_nav";
// import Title from "../Components/Title";
// import Navbar from "../Components/Navbar";
// import Recommand from "../Components/Recommand";
// import RecentlyViewedSlider from "../Components/Recentlyview";
// import Footer from "../Components/Footer";

// import "swiper/css";
// import "swiper/css/navigation";
// import { Link } from "react-router-dom";
// const Women = () => {
//   return (
//     <div>
//       <Headline />
//       <Small_nav />
//       <Title />
//       <Navbar />
//       <div
//         style={{
//           display: "flex",
//           fontFamily: "Arial, sans-serif",
//           width: "96%",
//           marginTop: "2%",
//         }}
//       >
//         {/* Sidebar */}

//         <div style={{ width: "270px", padding: "30px" }}>
//           <p style={{ fontSize: "14px", color: "gray" }}>/ Women</p>
//           <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>WOMEN</h2>
//           <h4 style={{ fontSize: "14px", fontWeight: "bold" }}>
//             SPRING SALE: UP TO 65% OFF
//           </h4>
//           <p>Shop All</p>
//           <p>Dresses</p>
//           <p>Jackets</p>
//           <p>Jeans & Denim</p>
//           <p>Linen</p>
//           <p>Shorts & Skirts</p>
//           <p>Swimsuits & Cover-Ups</p>
//           <p>Tops & Tees</p>
//           <p>Shop All</p>
//           <p>Active & Workout</p>
//           <p>Blazers</p>
//           <p>Cashmere</p>
//           <p>Coats & Jackets</p>
//           <p>Dresses</p>
//           <p>Jeans & Denim</p>
//           <p>Jumpsuits & Rompers</p>
//           <p>Lingerie, Bras, Panties & Hosiery</p>
//           <p>Loungewear</p>
//           <p>Shorts</p>
//           <p>Skirts</p>
//           <p>Matching Sets</p>
//           <p>Maternity</p>
//           <p>Pants & Leggings</p>
//           <p>Sleepwear & Robes</p>
//           <p>Suits & Separates</p>
//           <p>Sweaters</p>
//           <p>Swimsuits & Cover-Ups</p>
//           <p>Tops & Tees</p>
//           <p>DRESSES</p>
//           <p>Shop All</p>
//           <p>Cocktail & Party</p>
//           <p>Evening & Formal Gowns</p>
//           <p>Prom</p>
//           <p>Spring Dresses</p>
//           <p>Wedding Guest</p>
//           <p>White Dresses</p>
//           <p>SPRING TRENDS</p>
//           <p>Shop All</p>
//           <p>'60s Glam</p>
//           <p>Boho Everything</p>
//           <p>Pastels</p>
//           <p>Bubble Hem</p>
//           <p>Drop Waist</p>
//           <p>WHAT TO WEAR FOR</p>
//           <p>Bride to Be</p>
//           <p>Going Out</p>
//           <p>The Office</p>
//           <p>Vacation</p>
//           <p>Weddings</p>
//           <p>Weekend</p>
//           <p> New to Bloomingdale'</p>
//           <p>American Vintage</p>
//           <p>Camilla</p>
//           <p>CO</p>
//           <p> Guest in Residence</p>
//           <p>Jenni Kayne</p>
//           <p>NONCHALANT LABEL</p>
//           <p>New & Noteworthy</p>
//           <p> New Arrivals</p>
//           <p>Best Sellers</p>
//           <p>Mother's Day Gifts</p>
//           <p> Most Wanted Styles: Under $200</p>
//           <p>NEW: Emily Ratajkowski x Marella</p>
//           <p> The Linen Shop</p>
//           <p>Plus Size Clothing</p>
//           <p>Featured Designers</p>
//           <p>Alice and Olivia</p>
//           <p>AQUA</p>
//           <p>Buck Mason</p>
//           <p>Burberry</p>
//           <p>Cinq à Sept</p>
//           <p> FARM Rio</p>
//           <p> L'AGENCE</p>
//           <p>Maje</p>
//           <p> MOTHER</p>
//           <p>NIC+ZOE</p>
//           <p>rag & bone</p>
//           <p>REISS</p>
//           <p>Sandro </p>
//           <p>Self-Portrait</p>
//           <p>Teri Jon</p>
//           <p>Theory</p>
//           <p>Veronica Beard</p>
//           <p> Designer Boutique</p>
//         </div>
//         <div
//           style={{
//             height: "3050px",
//             width: "100%",

//             marginTop: "4%",
//             textAlign: "center",
//           }}
//         >
//           <div
//             style={{
//               height: "500px",
//               width: "100%",
//               display: "flex",
//               marginTop: "4%",
//               textAlign: "center",
//             }}
//           >
//             <div
//               style={{
//                 height: "450px",
//                 width: "50%",

//                 marginLeft: "5%",
//               }}
//             >
//               <Link to={"/guestdesc"}>
//                 <img
//                   src="/src/assets/first.png"
//                   style={{ height: "100%", width: "100%" }}
//                 ></img>
//               </Link>

//               <h5> BEACH & DESTINATION</h5>
//             </div>
//             <div
//               style={{
//                 height: "450px",
//                 width: "50%",
//                 backgroundColor: "pink",
//                 marginLeft: "5%",
//               }}
//             >
//               <img
//                 src="/src/assets/second.png"
//                 style={{ height: "100%", width: "100%", color: "black" }}
//               ></img>
//               <h5>COCKTAIL</h5>
//             </div>

//             <div
//               style={{
//                 height: "450px",
//                 width: "50%",
//                 backgroundColor: "pink",
//                 marginLeft: "5%",
//               }}
//             >
//               <img
//                 src="/src/assets/third.png"
//                 style={{ height: "100%", width: "100%" }}
//               ></img>
//               <h5>FORMAL & BLACK TIE</h5>
//             </div>
//           </div>
//           <br></br>
//           <br></br>
//           <br></br>
//           <div>
//             <h2 style={{ marginRight: "70%" }}>SHOP BY CATEGORY</h2>
//             <div
//               style={{
//                 height: "500px",

//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "14px",
//               }}
//             >
//               <div
//                 style={{
//                   height: "260px",

//                   width: "19%",
//                 }}
//               >
//                 <Link to={""} style={{ color: "black" }}>
//                   <img src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_01_Dresses_MK:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp"></img>
//                   Dresses
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   height: "300px",

//                   width: "19%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_02_Evening_MK:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp"></img>
//                   Evening & Formal
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   height: "300px",

//                   width: "19%",
//                 }}
//               >
//                 <Link to={""} style={{ color: "black" }}>
//                   <img src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_03_Jeans_MK:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp"></img>
//                   Jeans & Denim
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   height: "300px",

//                   width: "19%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_04_Coats_MK:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp"></img>
//                   Coats & Jackets
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   height: "300px",

//                   width: "19%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_05_Sweaters_MK:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp"></img>
//                   Sweaters
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   height: "300px",

//                   width: "19%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_06_Tops_MK:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp"></img>
//                   Tops & Tees
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   height: "300px",

//                   width: "19%",
//                 }}
//               >
//                 <Link to={""} style={{ color: "black" }}>
//                   <img src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_07_Loungewear_MK:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp"></img>
//                   Loungewear
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   height: "300px",

//                   width: "19%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_08_Skirts_MK:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp"></img>
//                   Skirts
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   height: "300px",

//                   width: "19%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_09_Sleepwear_MK:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp"></img>
//                   Sleepwear
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   height: "300px",

//                   width: "19%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_Essentials_10_Pants_MK:1x1?$icon_6_desktop$&resMode=sharp2&qlt=85,0&fmt=webp"></img>
//                   Pants
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <div>
//             <h2 style={{ marginRight: "80%" }}>LABELS WE LOVE</h2>
//             <div style={{ display: "flex", height: "400px", gap: "30px" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   height: "350px",
//                   backgroundColor: "black",
//                   width: "30%",
//                 }}
//               >
//                 <Link to={""} style={{ color: "black" }}>
//                   <img
//                     src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_04WK1_RTW_BrandSpotlight-4:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//                     style={{ height: "100%", width: "100%" }}
//                   ></img>
//                   CINQ Á SEPT
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   height: "350px",
//                   backgroundColor: "white",
//                   width: "30%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img
//                     src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_04WK1_RTW_BrandSpotlight-3:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//                     style={{ height: "100%", width: "100%" }}
//                   ></img>
//                   RAG & BONE
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   height: "350px",
//                   backgroundColor: "orange",
//                   width: "30%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img
//                     src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_04WK1_RTW_BrandSpotlight-2:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//                     style={{ height: "100%", width: "100%" }}
//                   ></img>
//                   FARM RIO
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   height: "350px",
//                   backgroundColor: "black",
//                   width: "30%",
//                 }}
//               >
//                 <Link to={""} style={{ color: "black" }}>
//                   <img
//                     src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_04WK1_RTW_BrandSpotlight-1:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//                     style={{ height: "100%", width: "100%" }}
//                   ></img>
//                   L'AGENCE
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <br></br>
//           <br></br>
//           <br></br>
//           <div>
//             <h2 style={{ marginRight: "80%" }}>HAPPENING NOW</h2>
//             <div style={{ display: "flex", height: "400px", gap: "30px" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   height: "350px",
//                   backgroundColor: "black",
//                   width: "30%",
//                 }}
//               >
//                 <Link to={""} style={{ color: "black" }}>
//                   <img
//                     src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_04WK2_Wedding_Bride-To-Be:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//                     style={{ height: "100%", width: "100%" }}
//                   ></img>
//                   BRIDE TO BE
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   height: "350px",
//                   backgroundColor: "white",
//                   width: "30%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img
//                     src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_03WK1_RTW_FEAT_SHOPS_SPRING_TRENDS_JP:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//                     style={{ height: "100%", width: "100%" }}
//                   ></img>
//                   SPRING TRENDS
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   height: "350px",
//                   backgroundColor: "orange",
//                   width: "30%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img
//                     src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_02WK2_RTW_Site_Happening_Now_02_New_Arrivals_MK_JH:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//                     style={{ height: "100%", width: "100%" }}
//                   ></img>
//                   NEW ARRIVALS
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   height: "350px",
//                   backgroundColor: "black",
//                   width: "30%",
//                 }}
//               >
//                 <Link to={""} style={{ color: "black" }}>
//                   <img
//                     src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_02WK2_RTW_Site_Happening_Now_03_Vacation_Shop_MK_JH:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//                     style={{ height: "100%", width: "100%" }}
//                   ></img>
//                   VACATION SHOP
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <br></br>
//           <br></br>
//           <br></br>
//           <div>
//             <div style={{ display: "flex", height: "400px", gap: "30px" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   height: "350px",
//                   backgroundColor: "black",
//                   width: "30%",
//                 }}
//               >
//                 <Link to={""} style={{ color: "black" }}>
//                   <img
//                     src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_04WK2_Wedding_Guest:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//                     style={{ height: "100%", width: "100%" }}
//                   ></img>
//                   WEDDING GUEST
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   height: "350px",
//                   backgroundColor: "white",
//                   width: "30%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img
//                     src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_05WK2_RTW_Mother_FeaturedShops_JC_JH:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//                     style={{ height: "100%", width: "100%" }}
//                   ></img>
//                   MOTHER BOOGIE WOOGIE
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   height: "350px",
//                   backgroundColor: "orange",
//                   width: "30%",
//                 }}
//               >
//                 {" "}
//                 <Link to={""} style={{ color: "black" }}>
//                   <img
//                     src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_02WK2_RTW_Site_Happening_Now_06_Most_Wanted_MK_JH:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//                     style={{ height: "100%", width: "100%" }}
//                   ></img>
//                   MOST WANTED STYLES UNDER
//                 </Link>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   height: "350px",
//                   backgroundColor: "black",
//                   width: "30%",
//                 }}
//               >
//                 <Link to={""} style={{ color: "black" }}>
//                   <img
//                     src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_02WK2_RTW_Site_Happening_Now_05_Weekend_Shop_MK_JH:4x5?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//                     style={{ height: "100%", width: "100%" }}
//                   ></img>
//                   THE WEEKEND SHOP
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <br></br>
//       <br></br>

//       <h2 style={{ width: "96%", margin: "auto" }}>Women's Clothes</h2>
//       <br></br>
//       <p
//         style={{
//           textAlign: "justify",
//           width: "96%",
//           margin: "auto",
//           fontSize: "13px",
//         }}
//       >
//         Women’s clothes paint a picture of who you are, where you’ve been, and
//         where you’re going. They’re the “armor” you wear to face your day. Your
//         comfort. Your “uniform.” Your creative canvas. They allow you to express
//         yourself without saying a word. So, it’s no wonder that we refresh our
//         wardrobes every season - as we grow, as we change, and as we have new
//         things to say.<br></br> <br></br>
//         <br></br> As you explore our latest collection of women’s apparel, think
//         of each piece as a word, a statement, or a phrase - and combine these
//         pieces your way - to create your own sentence, your own paragraph, or
//         your own novel - and discover how our selection of women’s designer
//         clothing can help you share your story with the world. <br></br>
//         <br></br> <br></br>Women's Activewear & Workout Clothes. Whether you’re
//         passionate about your workouts, trying out a new sport, or just need
//         something that moves with you, our activewear collection features
//         women’s clothes designed to support you, literally and figuratively.
//         <br></br> <br></br>
//         <br></br> Women's Jeans & Denim. Skinny fit or wide leg, straight,
//         flared, full length, cropped, or in shorts form, nothing says “cool”
//         like denim. And no matter which wash or style you love most, our women’s
//         apparel collection delivers best-in-class denim season after season.{" "}
//         <br></br> <br></br>
//         <br></br>Women's Dresses. The LBD has its place in every woman’s
//         wardrobe, but little black dresses aren’t the only game in town. With
//         minis and above-the-knee looks, knee-length dresses, formal dresses,
//         midis, and maxis in black, as well as a rainbow of colors, deep hues,
//         delicate prints, and bold patterns, you’ll find the perfect dress for
//         every facet of your life. <br></br>
//         <br></br>
//         <br></br> Women's Coats & Jackets. Create a layered look for warmth, for
//         style, or both. Our women’s designer clothing collection features coats
//         and jackets for every season and situation. <br></br> <br></br>
//         <br></br>
//         Women's Sweaters & Cardigans. Wrap yourself in a soft and cozy layer
//         season after season. With minimalist shells, classic cardigans, and
//         winter-ready options in everything from cotton to cashmere, you can
//         elevate your look comfortably.<br></br> <br></br>
//         <br></br>Women's Pants. Whether you’re dressing to slay the day in the
//         boardroom, entertaining clients, hosting a casual get together, or
//         kicking back at home, our high-end women’s clothing collection features
//         pants that will give you the comfort and confidence to do it all.
//         <br></br> <br></br>
//         <br></br> Women's Lingerie, Hosiery & Shapewear. Build your look with
//         the right foundation. Pretty, soft, and supportive in all the right
//         ways, our lingerie, hosiery, and shapewear collection allows women’s
//         clothes to drape beautifully and skim the body perfectly.
//         <br></br> <br></br>
//         <br></br>
//         Women's Swimsuits. Poolside or at the beach, swimming laps, splashing
//         about, paddle boarding, boating, or basking in the sun – with the right
//         swimsuit, you can do it all confidently, stylishly, and without a
//         wardrobe malfunction in sight.<br></br> <br></br>
//         <br></br>Women's Tops & Tees. Classic designs and cutting-edge looks,
//         basics and those that are anything but, with women’s luxury clothes from
//         the newest designers and most sought-after brands, our collection of
//         tops and tees is as versatile as it is stylish.<br></br> <br></br>
//         <br></br> Women's Designer Clothes. Every piece of clothing is designed,
//         but not every piece is “designer.” Created with intention and impeccable
//         attention to detail, brands like Theory for Women, AQUA, Ralph Lauren
//         for Women and Eileen Fisher develop new looks season after season - each
//         with their own unique perspective, yet entirely focused on you. By
//         taking their cues from the world you live in, they create looks for the
//         life you lead - and the life you want - enabling you to move throughout
//         your day in comfort, ease, and style.
//         <br></br> <br></br>
//         <br></br>
//         Meanwhile, brands like Canada Goose, Moncler, and SAM., create women’s
//         designer clothing for the world - and you. With an eye toward climate
//         and conditions, they design looks to help you make the most of the
//         season. Whether you live in a cold climate or just travel to one, the
//         designers who create women’s apparel for these legendary brands are
//         focused on you… in winter. With ski jackets, vests, and luxurious
//         outerwear they allow you to live and look like you – while staying cozy
//         and warm wherever you roam. Looking for something for the guys? Browse
//         our menswear collection <br></br> <br></br>
//         <br></br> Show Less
//       </p>

//       <Recommand />
//       <RecentlyViewedSlider />
//       <Footer />
//     </div>
//   );
// };

// export default Women;

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
