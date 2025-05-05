import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Services/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      toast.success("Login successful!");
      setemail("");
      setpassword("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const handleloginwithgoogle = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      toast.success("Google login successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
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
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign In</h2>

        <label style={{ marginBottom: "5px" }}>Email</label>
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
          Sign In
        </button>

        <button
          onClick={handleloginwithgoogle}
          style={{
            marginTop: "15px",
            padding: "12px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#db4437",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c1351d")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#db4437")}
        >
          Sign In with Google
        </button>
        <p>
          please sign up first{" "}
          <Link to={"/signup"} style={{ color: "white" }}>
            Sign up
          </Link>
        </p>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;
