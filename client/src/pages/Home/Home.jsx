import React from "react";
import "./Home.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import PopularServices from "../../components/PopularServices/PopularServices";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <PopularServices />
      <Features />
      <Services />
      <ProjectCard />
    </div>
  );
};

export default Home;
