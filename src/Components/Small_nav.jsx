import React from "react";
import { Link } from "react-router-dom";

function Small_nav() {
  return (
    <div>
      <style>
        {`
          .shopping-services {
            margin-left: 3%;
            position: relative;
            display: inline-block;
            cursor: pointer;
          
          }

        .shopping-services::after,
       .nav-link::after {
       content: '';
      position: absolute;
      width: 100%;
      height: 1.7px;
     bottom: -18px;
     left: 0;
     background-color: black;
     opacity: 0;
     transition: opacity 0.3s ease;
}

.shopping-services:hover::after,
.nav-link:hover::after {
  opacity: 1;
}



          .nav-link {
            position: relative;
            display: inline-block;
            margin: 0 5px;
            text-decoration: none;
            color: black;
          }
        `}
      </style>

      <div
        style={{
          height: "35px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h5 className="shopping-services">
          <Link
            to="/services"
            style={{ color: "black", textDecoration: "none" }}
          >
            Shopping Services
          </Link>
        </h5>
        <h5 style={{ marginRight: "3%" }}>
          <Link to={"/login"} className="nav-link">
            Login
          </Link>{" "}
          /
          <Link to={"/signup"} className="nav-link">
            Signup
          </Link>
        </h5>
      </div>
      <hr />
    </div>
  );
}

export default Small_nav;
