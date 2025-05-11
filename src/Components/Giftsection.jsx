import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Giftsection.css";
import { Link } from "react-router-dom";

const Giftsection = () => {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    axios
      .get("https://clumsy-server.onrender.com/giftsection")
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
