import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Services/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      toast.success("Signup successful!");
      setname("");
      setemail("");
      setpassword("");

      setTimeout(() => {
        navigate("/login");
      }, 2000); // Delay to allow user to see the toast
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e1e2f, #2e2e3e)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <form
        onSubmit={handlesubmit}
        style={{
          backgroundColor: "#2e2e3e",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
          width: "350px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</h2>

        <label style={{ marginTop: "15px", marginBottom: "5px" }}>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter your name"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#444",
            color: "white",
          }}
        />

        <label style={{ marginTop: "15px", marginBottom: "5px" }}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter your email"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#444",
            color: "white",
          }}
        />

        <label style={{ marginTop: "15px", marginBottom: "5px" }}>
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter your password"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#444",
            color: "white",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "25px",
            padding: "12px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#3f8efc",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2c6ed5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3f8efc")}
        >
          Sign Up
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Signup;
