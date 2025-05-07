import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Services/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const sendWelcomeEmail = (userEmail) => {
  const templateParams = {
    email: userEmail,
  };

  emailjs
    .send(
      "service_494qbco",
      "template_1kwtovq",
      templateParams,
      "fn_0x05l8LTqKIoXX"
    )
    .then((response) => {
      console.log(" Email sent!");
      toast.success(" Welcome email sent to ");
    })
    .catch((error) => {
      console.error(" Failed to send email:", error);
      toast.error(" Failed to send welcome email.");
    });
};

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
      sendWelcomeEmail(email);
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
      const userEmail = res.user.email;
      toast.success("Google login successful!");
      sendWelcomeEmail(userEmail);
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
        background: "linear-gradient(135deg, #f0f4ff, #dbeafe)",
        color: "#1f2937",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <form
        onSubmit={handlesubmit}
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
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
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "15px",
          }}
        />

        <label style={{ marginBottom: "5px" }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter your password"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#3b82f6",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
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
            backgroundColor: "#ef4444",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Sign In with Google
        </button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "#3b82f6" }}>
            Sign up
          </Link>
        </p>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;
