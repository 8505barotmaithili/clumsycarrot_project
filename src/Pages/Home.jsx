import React from "react";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Login from "./Login";
import { Link } from "react-router-dom";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
// import Products from "../Components/Products";
import Banner from "../Components/Banner";
import Recommand from "../Components/Recommand";
import Motherday from "../Components/Motherday";
import Giftsection from "../Components/Giftsection";
import Summer from "../Components/Summer";
import Bridal from "../Components/Bridal";
import Dior from "../Components/Dior";
import Likes from "../Components/Likes";
import Recentlyview from "../Components/Recentlyview";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />
      <br></br>
      {/* <Products /> */}
      <Banner />
      <Recommand />
      <br></br>
      <br></br>
      <br></br>
      <Motherday />

      <Giftsection />
      <br></br>
      <br></br>

      <Summer />
      <br></br>
      <br></br>

      <Bridal />
      <br></br>
      <br></br>
      <br></br>
      <Dior />
      <br></br>
      <Likes />

      <br></br>
      <Recentlyview />
      <Footer />
    </div>
  );
};

export default Home;
