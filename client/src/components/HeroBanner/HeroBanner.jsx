import React from "react";
import "./HeroBanner.css";
const HeroBanner = () => {
  return (
    <div className="banner">
      <div className="hero_container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./images/search.png" alt="Search Icon" />
              <input type="text" placeholder="Try building Web Applications" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Development</button>
            <button>App Development</button>
            <button>UI/UX Designs</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./images/man.png" alt="Man Picture" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
