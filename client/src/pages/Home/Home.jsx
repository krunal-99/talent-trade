import React from "react";
import "./Home.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import PopularServices from "../../components/PopularServices/PopularServices";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <PopularServices />
    </div>
  );
};

export default Home;
