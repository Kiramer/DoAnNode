import React from "react";
import BannerSection from "../../../components/Banner/Banner.jsx";
import Popular from "../../../components/Popular/Popular.jsx";
import Offer from "../../../components/Offer/Offer.jsx";
import HomeWrapper from "../../../components/HomeWrapper/HomeWrapper.jsx";
import ShopHeader from "../../../components/ShopHeader/ShopHeader";
import Footer from "../../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <ShopHeader />
      <BannerSection />
      <HomeWrapper />
      <Popular />
      <Offer />
      <Footer />
    </div>
  );
};
export default Home;
