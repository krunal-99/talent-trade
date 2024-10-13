import React, { useState } from "react";
import "./HeroBanner.css";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="hero_banner">
      <div className="hero_container">
        <div className="hero_left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="hero_search">
            <div className="hero_searchInput">
              <img src="./images/search.png" alt="Search Icon" />
              <input
                type="text"
                placeholder="Try building Websites"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="hero_popular">
            <span>Popular:</span>
            <button>Web Development</button>
            <button>App Development</button>
            <button>UI/UX Designs</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="hero_right">
          <img src="./images/man.png" alt="Man Picture" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
