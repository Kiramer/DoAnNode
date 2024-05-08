import React from "react";

import ShopHeader from "../../../components/ShopHeader/ShopHeader.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import BannerSection from "../../../components/Banner/Banner.jsx";
import { Routes, Route } from "react-router-dom";



const Home = () =>{
    return(
        <>
        <div className="home">
            <ShopHeader/>
            <main className="main-content">
              <BannerSection/>
              <Routes>
                {/* <Route path="/" element={<Home/>} /> */}
              </Routes>
            </main>
            <Footer/>
          </div>
        </>
        
    );
};
export default Home;