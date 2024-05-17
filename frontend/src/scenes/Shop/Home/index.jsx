import React, { useEffect, useState } from "react";
import BannerSection from "../../../components/Banner/Banner.jsx";
import Popular from "../../../components/Popular/Popular.jsx";
import Offer from "../../../components/Offer/Offer.jsx";
import HomeWrapper from "../../../components/HomeWrapper/HomeWrapper.jsx";
import ShopHeader from "../../../components/ShopHeader/ShopHeader";
import Footer from "../../../components/Footer/Footer";
import { BASE_URL } from "../../../config";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${BASE_URL}/products/all`);
      const data = await result.json();
      setData(data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <ShopHeader />
      <BannerSection />
      <HomeWrapper />
      <Popular data={data} />
      {/* <Offer data={data} /> */}
      <Footer />
    </div>
  );
};
export default Home;
