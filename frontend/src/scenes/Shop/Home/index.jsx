import React from "react";
import BannerSection from "../../../components/Banner/Banner.jsx";
import Popular from "../../../components/Popular/Popular.jsx";
import Offer from "../../../components/Offer/Offer.jsx";
import HomeWrapper from "../../../components/HomeWrapper/HomeWrapper.jsx";
let currentUrl = window.location.href;
console.log(currentUrl);
const Home = () => {
  return (
    <div className="home">
      <BannerSection />
      <HomeWrapper />
      <Popular />
      <Offer />
    </div>
  );
};
export default Home;
