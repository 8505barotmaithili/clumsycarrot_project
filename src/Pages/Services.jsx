import React, { useEffect, useState } from "react";
import axios from "axios";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://clumsy-server.onrender.com/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />
      <hr />

      <h4 className="breadcrumb">
        About / Shopping Services / Shopping Services
      </h4>

      <div className="services-banner">
        <img
          src="https://www.bloomingdales.com/b/fashion/images/projects/about-us/shopping/shopping-services/ss-header-background.jpg"
          alt="header"
        />
        <h1>Shopping Services</h1>
      </div>

      <div className="services-container">
        {services.map((item, index) => (
          <div key={index} className="services-card">
            <img src={item.image} alt={item.title} className="services-image" />
            <div className="services-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Services;
