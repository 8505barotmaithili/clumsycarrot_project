import React, { useEffect, useState } from "react";
import axios from "axios";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    gap: "40px",
    padding: "50px",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "4px",
  };

  const contentStyle = {
    padding: "20px 0",
  };

  const titleStyle = {
    fontSize: "18px",

    fontWeight: "bold",
    marginBottom: "10px",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#333",
    marginBottom: "10px",
    lineHeight: "1.6",
  };

  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />
      <hr />

      <h4 style={{ marginLeft: "4%" }}>
        About / Shopping Services / Shopping Services
      </h4>
      <div
        style={{
          height: "120px",
          width: "92%",
          margin: "auto",
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <img
          src="https://www.bloomingdales.com/b/fashion/images/projects/about-us/shopping/shopping-services/ss-header-background.jpg"
          alt="header"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <h1
          style={{
            color: "white",
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Shopping Services
        </h1>
      </div>

      <div style={containerStyle}>
        {services.map((item, index) => (
          <div key={index} style={cardStyle}>
            <img src={item.image} alt={item.title} style={imgStyle} />
            <div style={contentStyle}>
              <h3 style={titleStyle}>{item.title}</h3>
              <p style={descStyle}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
