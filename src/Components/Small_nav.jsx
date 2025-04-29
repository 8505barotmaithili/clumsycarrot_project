import React from "react";
import { Link } from "react-router-dom";

function Small_nav() {
  return (
    <div>
      <div
        style={{
          height: "35px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h5 style={{ marginLeft: "3%" }}> Shopping Services</h5>
        <h5 style={{ marginRight: "3%" }}>
          <Link to={"/login"}>Login</Link> /
          <span>
            <Link to={"/signup"}>Signup</Link>
          </span>
        </h5>
      </div>
      <hr></hr>
    </div>
  );
}

export default Small_nav;
