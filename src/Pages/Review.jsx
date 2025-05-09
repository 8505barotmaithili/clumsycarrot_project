import React, { useState } from "react";
import axios from "axios";
import "./Review.css";

const Review = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !text) {
      setMessage("Please fill out all fields.");
      return;
    }

    try {
      const reviewData = {
        name,
        text,
        date: new Date().toISOString(),
      };

      await axios.post("http://localhost:3000/review", reviewData);
      setMessage("Thank you for your review!");
      setName("");
      setText("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="review-container">
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
      {message && <p className="review-message">{message}</p>}
    </div>
  );
};

export default Review;
