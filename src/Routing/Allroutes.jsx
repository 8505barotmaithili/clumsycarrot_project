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
      </Routes>
    </div>
  );
};

export default Allroutes;
