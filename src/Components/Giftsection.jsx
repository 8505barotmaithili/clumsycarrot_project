import React, { useEffect, useState } from "react";
import axios from "axios";

const Giftsection = () => {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/giftsection")
      .then((res) => setGifts(res.data))
      .catch((err) => console.error("Error fetching gifts:", err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        width: "90%",
        marginTop: "6%",
        gap: "8%",
        paddingRight: "80px",
      }}
    >
      {gifts.map((gift, index) => (
        <div
          key={index}
          style={{
            height: "450px",
            width: "300px",
            textAlign: "center",
          }}
        >
          <img
            src={gift.image}
            alt={gift.name}
            style={{
              width: "126%",
              height: "450px",
            }}
          />
          <h3 style={{ marginTop: "15px" }}>{gift.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Giftsection;
