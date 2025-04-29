import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          height: "35px",
          width: "100%",

          lineHeight: "40px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
            fontWeight: "bold",
          }}
        >
          <li>
            <Link
              to={"/women"}
              style={{ color: "black", textDecoration: "none" }}
            >
              WOMEN
            </Link>
          </li>

          <li>
            <Link
              to={"/shoes"}
              style={{ color: "black", textDecoration: "none" }}
            >
              SHOES
            </Link>
          </li>

          <li>
            <Link
              to={"/handbags"}
              style={{ color: "black", textDecoration: "none" }}
            >
              HANDBAGS
            </Link>
          </li>

          <li>
            <Link
              to={"/jewelry"}
              style={{ color: "black", textDecoration: "none" }}
            >
              JEWELRY & ACCESSORIES
            </Link>
          </li>

          <li>
            <Link
              to={"/beauty"}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              BEAUTY
            </Link>
          </li>

          <li>
            <Link
              to={"/men"}
              style={{ color: "black", textDecoration: "none" }}
            >
              MEN
            </Link>
          </li>

          <li>
            <Link
              to={"/kids"}
              style={{ color: "black", textDecoration: "none" }}
            >
              KIDS
            </Link>
          </li>

          <li>
            <Link
              to={"/decor"}
              style={{ color: "black", textDecoration: "none" }}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              to={"/sale"}
              style={{ color: "black", textDecoration: "none" }}
            >
              SALE
            </Link>
          </li>
          <li>
            <Link
              to={"/designers"}
              style={{ color: "black", textDecoration: "none" }}
            >
              DESIGNERS
            </Link>
          </li>

          <li>
            <Link
              to={"/editorial"}
              style={{ color: "black", textDecoration: "none" }}
            >
              EDITORIAL
            </Link>
          </li>
          <li>
            <Link
              to={"/gifts"}
              style={{ color: "black", textDecoration: "none" }}
            >
              GIFTS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
