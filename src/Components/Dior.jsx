// import React from "react";
// import { Link } from "react-router-dom";

// const Dior = () => {
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           marginTop: "7%",
//           width: "95%",
//           margin: "auto",
//         }}
//       >
//         <Link to={""}>
//           <div
//             style={{ height: "700px", width: "100%", backgroundColor: "black" }}
//           >
//             <img
//               src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0429-0501_Desktop_dior?resMode=sharp2&qlt=85,0&fmt=webp&wid=2880&hei=1200"
//               style={{ height: "100%", width: "100%" }}
//             ></img>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dior;
import React from "react";
import { Link } from "react-router-dom";
import "./Dior.css"; // Import the separate CSS file

const Dior = () => {
  return (
    <div className="dior-container">
      <Link to={""}>
        <div className="dior-image-container">
          <img
            src="https://images.bloomingdalesassets.com/is/image/MacysInc/2025_HP_0505_Desktop_nespresso?resMode=sharp2&qlt=85,0&fmt=webp&wid=2880&hei=1200"
            alt="Dior"
            className="dior-image"
          />
        </div>
      </Link>
    </div>
  );
};

export default Dior;
