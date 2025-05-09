// import React from "react";
// import { FaMobileScreenButton } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaPinterestP } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { SiX } from "react-icons/si";

// const Footer = () => {
//   return (
//     <div>
//       <div
//         style={{
//           height: "330px",
//           width: "100%",
//           backgroundColor: "whitesmoke",
//           marginTop: "4%",
//           display: "flex",

//           paddingTop: "2%",
//           gap: "70px",
//         }}
//       >
//         <div
//           style={{
//             width: "20%",
//           }}
//         >
//           <h3 style={{ paddingLeft: "13%" }}>CUSTOMER SERVICE</h3>
//           <ul
//             style={{ listStyle: "none", padding: "20px", paddingRight: "6%" }}
//           >
//             <li>1-800-777-0000</li>
//             <br></br>
//             <li>Domestic site FAQs</li>
//             <br></br>
//             <li>FAQs & help</li>
//             <br></br>
//             <li>Visitor services</li>
//             <br></br>
//             <li>Shipping To IN to U.S. site</li>
//           </ul>
//         </div>
//         <div
//           style={{
//             width: "20%",
//           }}
//         >
//           <h3 style={{ paddingLeft: "5%" }}>YOUR ORDER</h3>
//           <ul style={{ listStyle: "none", padding: "20px" }}>
//             <li>1-800-777-0000</li>
//             <br></br>
//             <li>Domestic site FAQs</li>
//             <br></br>
//             <li>FAQs & help</li>
//           </ul>
//         </div>
//         <div
//           style={{
//             width: "20%",
//           }}
//         >
//           <h3 style={{ paddingLeft: "5%" }}>ABOUT BLOOMINGDALE'S</h3>
//           <ul style={{ listStyle: "none", padding: "20px" }}>
//             <li>About us</li>
//             <br></br>
//             <li>b the change</li>
//             <br></br>
//             <li>Careers</li>
//             <br></br>
//             <li>Sustainability</li>
//           </ul>
//         </div>
//         <div
//           style={{
//             width: "20%",
//           }}
//         >
//           <h3 style={{ paddingLeft: "5%" }}>Follow Us</h3>
//           <ul
//             style={{
//               display: "flex",
//               listStyle: "none",
//               gap: "15px",
//               padding: 0,
//               paddingLeft: "4%",
//               marginTop: "9%",
//             }}
//           >
//             <li
//               style={{
//                 backgroundColor: "black",
//                 color: "white",
//                 borderRadius: "50%",
//                 width: "40px",
//                 height: "40px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "18px",
//                 cursor: "pointer",
//               }}
//             >
//               <FaMobileScreenButton />
//             </li>
//             <li
//               style={{
//                 backgroundColor: "black",
//                 color: "white",
//                 borderRadius: "50%",
//                 width: "40px",
//                 height: "40px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "18px",
//                 cursor: "pointer",
//               }}
//             >
//               <FaInstagram />
//             </li>
//             <li
//               style={{
//                 backgroundColor: "black",
//                 color: "white",
//                 borderRadius: "50%",
//                 width: "40px",
//                 height: "40px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "18px",
//                 cursor: "pointer",
//               }}
//             >
//               <FaPinterestP />
//             </li>
//             <li
//               style={{
//                 backgroundColor: "black",
//                 color: "white",
//                 borderRadius: "50%",
//                 width: "40px",
//                 height: "40px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "18px",
//                 cursor: "pointer",
//               }}
//             >
//               <FaFacebook />
//             </li>
//             <li
//               style={{
//                 backgroundColor: "black",
//                 color: "white",
//                 borderRadius: "50%",
//                 width: "40px",
//                 height: "40px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "18px",
//                 cursor: "pointer",
//               }}
//             >
//               <SiX />
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div>
//         <p style={{ textAlign: "center" }}>
//           Terms of Use &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Privacy
//           &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Cookie Preferences
//           &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Do Not Sell or Share My Personal
//           Information &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Interest Based Ads
//           &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Customer Bill of Rights
//           &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Product Recalls
//           &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Pricing Policy
//           &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Accessibility <br></br>
//           <p>
//             {" "}
//             ©2025 Bloomingdale's. 1000 Third Avenue New York, NY 10022. Request
//             our corporate name and address.<br></br>{" "}
//             <p>Like No Other Store in the World</p>
//           </p>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaInstagram, FaPinterestP, FaFacebook } from "react-icons/fa";
import { SiX } from "react-icons/si";
import "./Footer.css"; // Import the CSS
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-section">
          <h3>CUSTOMER SERVICE</h3>
          <ul>
            <li>1-800-777-0000</li>
            <li>Domestic site FAQs</li>
            <li>FAQs & help</li>
            <li>Visitor services</li>
            <li>Shipping To IN to U.S. site</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>YOUR ORDER</h3>
          <ul>
            <li>1-800-777-0000</li>
            <li>Domestic site FAQs</li>
            <li>FAQs & help</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>ABOUT BLOOMINGDALE'S</h3>
          <ul>
            <li>About us</li>
            <li>b the change</li>
            <li>Careers</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <FaMobileScreenButton />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaPinterestP />
            </li>
            <li>
              <FaFacebook />
            </li>

            <li>
              <SiX />
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Terms of Use | Privacy | Cookie Preferences | Do Not Sell or Share My
          Personal Information | Interest Based Ads | Customer Bill of Rights |
          Product Recalls | Pricing Policy | Accessibility
        </p>
        <p>
          ©2025 Bloomingdale's. 1000 Third Avenue New York, NY 10022. Request
          our corporate name and address.
        </p>
        <p>Like No Other Store in the World</p>
        <Link to={"/scanner"} style={{ color: "black" }}>
          {" "}
          <h2> Join Our Whatsapp Group </h2>
        </Link>

        <Link to={"/review"} style={{ color: "black" }}>
          {" "}
          <h2> Give review </h2>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
