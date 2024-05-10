import React from "react";

import ShopHeader from "../../../components/ShopHeader/ShopHeader.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import BannerSection from "../../../components/Banner/Banner.jsx";
import { Routes, Route } from "react-router-dom";
import ShopCategory from "../ShopCategory/index.jsx";
import Cart from "../Cart/index.jsx";
import LoginSignup from "../LoginSignup/LoginSignup.jsx";
import Popular from "../../../components/Popular/Popular.jsx";
import Offer from "../../../components/Offer/Offer.jsx";
import HomeWrapper from "../../../components/HomeWrapper/HomeWrapper.jsx";



const Home = () =>{
    return(
        <>
        <div className="home">
            <ShopHeader/>
            <main className="main-content">
              <BannerSection/>
              <HomeWrapper/>
              <Popular/>
              <Offer/>
              <Routes>
                <Route path="/shopcategory" element={<ShopCategory/>} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/loginsignup" element={<LoginSignup />} />
              </Routes>
            </main>
            <Footer/>
          </div>
        </>
        
    );
};
export default Home;