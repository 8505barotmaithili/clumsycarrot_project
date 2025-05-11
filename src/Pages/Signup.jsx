import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Services/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

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
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handlesubmit} style={styles.form}>
        <h2 style={styles.heading}>Sign Up</h2>

        <label style={styles.label}>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter your name"
          style={styles.input}
        />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter your email"
          style={styles.input}
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter your password"
          style={styles.input}
        />

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2c6ed5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3f8efc")}
        >
          Sign Up
        </button>

        <p style={styles.linkText}>
          Already have an account?{" "}
          <Link to={"/login"} style={styles.link}>
            Login
          </Link>
        </p>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />

      {/* Responsive style (mobile) */}
      <style>
        {`
          @media (max-width: 500px) {
            form {
              width: 90% !important;
              padding: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #a8edea, #fed6e3)",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    width: "350px",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  label: {
    marginTop: "15px",
    marginBottom: "5px",
    color: "#444",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    color: "#333",
  },
  button: {
    marginTop: "25px",
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#3f8efc",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  linkText: {
    marginTop: "15px",
    textAlign: "center",
    color: "#555",
  },
  link: {
    color: "#3f8efc",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

export default Signup;
