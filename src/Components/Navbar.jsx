import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <style>
        {`
          .nav-link {
            position: relative;
            text-decoration: none;
            color: black;
            font-weight: bold;
            padding: 5px 0;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1.7px;
            bottom: -6px;
            left: 0;
            background-color: black;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .nav-link:hover::after {
            opacity: 1;
          }

          .nav-list {
            display: flex;
            justify-content: space-around;
            list-style: none;
            font-weight: bold;
          }

          .nav-item {
            position: relative;
          }
        `}
      </style>

      <div style={{ height: "45px", width: "100%", lineHeight: "40px" }}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/women" className="nav-link">
              WOMEN
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shoes" className="nav-link">
              SHOES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/handbags" className="nav-link">
              HANDBAGS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/jewelry" className="nav-link">
              JEWELRY & ACCESSORIES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/beauty" className="nav-link">
              BEAUTY
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/men" className="nav-link">
              MEN
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/kids" className="nav-link">
              KIDS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/decor" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sale" className="nav-link">
              SALE
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/designers" className="nav-link">
              DESIGNERS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/editorial" className="nav-link">
              EDITORIAL
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gifts" className="nav-link">
              GIFTS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
