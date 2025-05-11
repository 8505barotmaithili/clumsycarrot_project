import React from "react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaInstagram, FaPinterestP, FaFacebook } from "react-icons/fa";
import { SiX } from "react-icons/si";
import "./Footer.css";
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
