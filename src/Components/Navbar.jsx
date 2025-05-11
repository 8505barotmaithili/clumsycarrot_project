import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      {/* Toggler button visible only on mobile */}
      <div className="navbar-header">
        <button className="navbar-toggler" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>

      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link to="/women" onClick={toggleMenu} className="nav-link">
            WOMEN
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shoes" onClick={toggleMenu} className="nav-link">
            SHOES
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/handbags" onClick={toggleMenu} className="nav-link">
            HANDBAGS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/jewelry" onClick={toggleMenu} className="nav-link">
            JEWELRY & ACCESSORIES
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/beauty" onClick={toggleMenu} className="nav-link">
            BEAUTY
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/men" onClick={toggleMenu} className="nav-link">
            MEN
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/kids" onClick={toggleMenu} className="nav-link">
            KIDS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/decor" onClick={toggleMenu} className="nav-link">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sale" onClick={toggleMenu} className="nav-link">
            SALE
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/designers" onClick={toggleMenu} className="nav-link">
            DESIGNERS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/editorial" onClick={toggleMenu} className="nav-link">
            EDITORIAL
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/gifts" onClick={toggleMenu} className="nav-link">
            GIFTS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
