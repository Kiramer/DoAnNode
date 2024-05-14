import React from "react";
import { Routes, Route } from "react-router-dom";

import ShopHeader from "../../../components/ShopHeader/ShopHeader.jsx";
import BannerSection from "../../../components/Banner/Banner.jsx";
import ShopCategory from "../ShopCategory/index.jsx";
import Cart from "../Cart/index.jsx";
import LoginSignup from "../LoginSignup/LoginSignup.jsx";
import Popular from "../../../components/Popular/Popular.jsx";
import Offer from "../../../components/Offer/Offer.jsx";
import HomeWrapper from "../../../components/HomeWrapper/HomeWrapper.jsx";
import Product from "../Product/index.jsx";
import ProductDetail from "../ProductDetail/index.jsx";

const Home = () => {
  return (
    <div className="home">
      <ShopHeader />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BannerSection />
                <HomeWrapper />
                <Popular />
                <Offer />
              </>
            }
          />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/product" element={<Product />} />
          <Route path="/shopcategory" element={<ShopCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
        </Routes>
      </main>
    </div>
  );
};

export default Home;
