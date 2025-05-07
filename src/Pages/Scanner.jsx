// import React from "react";
// import "./Scanner.css"; // Make sure to create the corresponding CSS file

// const Scanner = () => {
//   return (
//     <div className="scanner-container">
//       <h2>Join Our WhatsApp Group</h2>
//       <p>Scan the QR code below to join our community on WhatsApp!</p>
//       <img
//         src="/src/assets/frame.png"
//         alt="Join WhatsApp Group"
//         className="qr-code"
//       />
//       <a
//         href="https://chat.whatsapp.com/JbDDYEAl3ayC8L2427iJNb"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="join-button"
//       >
//         Join via Link
//       </a>
//     </div>
//   );
// };

// export default Scanner;
import React from "react";
import QRCode from "react-qr-code"; // Import the library
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Scanner = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/JbDDYEAl3ayC8L2427iJNb";
  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />

      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Join Our WhatsApp Group</h2>
        <p>Scan the QR code below to join our community on WhatsApp!</p>
        <div style={{ margin: "1rem auto" }}>
          <QRCode value={whatsappGroupLink} size={200} />{" "}
          {/* Generate the QR code */}
        </div>
        <a
          href={whatsappGroupLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#25D366",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Join via Link
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Scanner;
