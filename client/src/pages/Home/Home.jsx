import React from "react";
import "./Home.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import PopularServices from "../../components/PopularServices/PopularServices";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <PopularServices />
      <Features />
      <Services />
    </div>
  );
};

export default Home;
