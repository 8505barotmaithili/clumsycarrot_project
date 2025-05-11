import React, { useEffect, useState } from "react";
import axios from "axios";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Recommand from "../Components/Recommand";
import { Link } from "react-router-dom";

const Homegift = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://clumsy-server.onrender.com/homegift")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />
      <hr />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",

          paddingLeft: "5%",
          marginTop: "4%",
        }}
      >
        {services.map((item, index) => (
          <div key={index}>
            <Link to={""}>
              <img src={item.images} alt={item.title} />
            </Link>
            <div>
              <h5>{item.product_name}</h5>

              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <Recommand />
      <Footer />
    </div>
  );
};

export default Homegift;
