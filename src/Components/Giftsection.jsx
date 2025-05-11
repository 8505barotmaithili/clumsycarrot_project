// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Giftsection = () => {
//   const [gifts, setGifts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/giftsection")
//       .then((res) => setGifts(res.data))
//       .catch((err) => console.error("Error fetching gifts:", err));
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         margin: "auto",
//         width: "90%",
//         marginTop: "6%",
//         gap: "8%",
//         paddingRight: "80px",
//       }}
//     >
//       {gifts.map((gift, index) => (
//         <div
//           key={index}
//           style={{
//             height: "450px",
//             width: "300px",
//             textAlign: "center",
//           }}
//         >
//           <img
//             src={gift.image}
//             alt={gift.name}
//             style={{
//               width: "126%",
//               height: "450px",
//             }}
//           />
//           <h4 style={{ marginTop: "15px" }}>{gift.name}</h4>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Giftsection;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Giftsection.css"; // Import the separate CSS file
import { Link } from "react-router-dom";

const Giftsection = () => {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/giftsection")
      .then((res) => setGifts(res.data))
      .catch((err) => console.error("Error fetching gifts:", err));
  }, []);

  return (
    <div className="gift-section-container">
      {gifts.map((gift, index) => (
        <div key={index} className="gift-item">
          <Link to={"homegift"}>
            <img src={gift.image} alt={gift.name} className="gift-image" />
          </Link>
          <h4 className="gift-name">{gift.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Giftsection;
