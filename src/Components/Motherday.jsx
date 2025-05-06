// import React from "react";

// const Motherday = () => {
//   return (
//     <div style={{ height: "400px", width: "100%", textAlign: "center" }}>
//       <h1>EDITORIAL</h1>
//       <p>The latest launches, Fashion Office obsessions, and top trends.</p>
//       <div
//         style={{
//           height: "450px",
//           width: "95%",
//           margin: "auto",
//           display: "flex",
//           gap: "2.5%",
//         }}
//       >
//         <div
//           style={{
//             height: "430px",
//             width: "32%",
//             backgroundColor: "pink",
//             margin: "auto",
//           }}
//         >
//           <img
//             src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_editorial_women?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//             style={{ height: "100%", width: "100%", objectFit: "cover" }}
//           ></img>
//           WOMEN
//         </div>
//         <div
//           style={{
//             height: "430px",
//             width: "30%",
//             backgroundColor: "blue",
//             margin: "auto",
//           }}
//         >
//           {" "}
//           <img
//             src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_editorial_beauty?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//             style={{ height: "100%", width: "100%", objectFit: "cover" }}
//           ></img>
//           BEAUTY
//         </div>
//         <div
//           style={{
//             height: "430px",
//             width: "30%",
//             backgroundColor: "yellow",
//             margin: "auto",
//           }}
//         >
//           {" "}
//           <img
//             src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_editorial_men?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//             style={{ height: "100%", width: "100%", objectFit: "cover" }}
//           ></img>
//           MEN
//         </div>
//         <div
//           style={{
//             height: "430px",
//             width: "30%",
//             backgroundColor: "red",
//             margin: "auto",
//           }}
//         >
//           {" "}
//           <img
//             src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_editorial_home?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
//             style={{ height: "100%", width: "100%", objectFit: "cover" }}
//           ></img>
//           HOME
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Motherday;
import React from "react";
import "./Motherday.css";

const Motherday = () => {
  return (
    <div className="motherday-container">
      <h1>EDITORIAL</h1>
      <p>The latest launches, Fashion Office obsessions, and top trends.</p>
      <div className="motherday-grid">
        <div className="editorial-card">
          <img
            src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_editorial_women?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
            alt="Women"
          />
          WOMEN
        </div>
        <div className="editorial-card">
          <img
            src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_editorial_beauty?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
            alt="Beauty"
          />
          BEAUTY
        </div>
        <div className="editorial-card">
          <img
            src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_editorial_men?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
            alt="Men"
          />
          MEN
        </div>
        <div className="editorial-card">
          <img
            src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_editorial_home?$subad_pool_4_desktop_4x5$&resMode=sharp2&qlt=85,0&fmt=webp"
            alt="Home"
          />
          HOME
        </div>
      </div>
    </div>
  );
};

export default Motherday;
