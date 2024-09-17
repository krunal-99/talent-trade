import React from "react";
import "./Features.css";
const Features = () => {
  return (
    <div className="features">
      <div className="features_container">
        <div className="feature_img">
          <img src="./images/feature.png" alt="" width={600} />
        </div>
        <div className="feature_content">
          <h1>A whole world of freelance talent at your fingertips.</h1>
          <div className="title">
            <img src="./images/check.png" alt="" />
            The best for every budget
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing
          </p>
          <div className="title">
            <img src="./images/check.png" alt="" />
            Quality work done quickly
          </div>
          <p>
            Find the right freelancer to begin working on your project within
            minutes
          </p>
          <div className="title">
            <img src="./images/check.png" alt="" />
            Protected payments, every time
          </div>
          <p>
            Always know what you will pay upfront. Your payment isn't released
            until you approve the work.
          </p>
          <div className="title">
            <img src="./images/check.png" alt="" />
            24/7 support
          </div>
          <p>Find high quality services at any hour of the day.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
