import React from "react";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Login from "./Login";
import { Link } from "react-router-dom";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
// import Products from "../Components/Products";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />
      <hr></hr>
      {/* <Products /> */}
      <Banner />
    </div>
  );
};

export default Home;
