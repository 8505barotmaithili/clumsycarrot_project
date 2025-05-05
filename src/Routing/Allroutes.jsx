import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Women from "../Pages/Women";
import Shoes from "../Pages/Shoes";
import Handbags from "../Pages/Handbags";
import Jewelry from "../Pages/Jewelry";
import Beauty from "../Pages/Beauty";
import Men from "../Pages/Men";
import Kids from "../Pages/Kids";
import Decor from "../Pages/Decor";
import Sale from "../Pages/Sale";
import Designer from "../Pages/Designer";
import Editorial from "../Pages/Editorial";
import Gifts from "../Pages/Gifts";
import Recomdesc from "../descriptionpages/Recomdesc";
import Shopcart from "../Pages/Shopcart";
import Services from "../Pages/Services";
import Guestdesc from "../descriptionpages/Guestdesc";
import Beachdesc from "../descriptionpages/Beachdesc";
import Offer from "../Pages/Offer";
import Offerdesc from "../descriptionpages/Offerdesc";
import Checkout from "../Pages/Checkout";
import Mother from "../Pages/Mother";
import Bridetobe from "../Pages/Bridetobe";
import Bridaldesc from "../descriptionpages/Bridaldesc";
import Bridal from "../Components/Bridal";
import Likedesc from "../descriptionpages/Likedesc";
import Shoespage from "../Pages/Shoespage";
import Shoesdesc from "../descriptionpages/Shoesdesc";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/women" element={<Women />} />
        <Route path="/handbags" element={<Handbags />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="beauty" element={<Beauty />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/decor" element={<Decor />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/designers" element={<Designer />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/recomdesc/:id" element={<Recomdesc />} />
        <Route path="/shopcart" element={<Shopcart />} />
        <Route path="/services" element={<Services />} />
        <Route path="/guestdesc" element={<Guestdesc />} />
        <Route path="/beachdesc/:id" element={<Beachdesc />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/offer/:id" element={<Offerdesc />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mother" element={<Mother />} />
        <Route path="/bridetobe" element={<Bridetobe />} />
        <Route path="/bridal/:id" element={<Bridaldesc />} />
        <Route path="/likes/:id" element={<Likedesc />} />
        <Route path="Shoes" element={<Shoes />} />
        <Route path="shoespage" element={<Shoespage />} />
        <Route path="/shoes/:id" element={<Shoesdesc />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
