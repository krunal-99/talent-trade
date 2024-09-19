import React from "react";
import "./Services.css";

export const services = [
  { name: "Graphic Design", logo: "./images/service-1.svg" },
  { name: "Digital Marketing", logo: "./images/service-2.svg" },
  { name: "Writing & Translation", logo: "./images/service-3.svg" },
  { name: "Video & Animation", logo: "./images/service-4.svg" },
  { name: "Music & Audio", logo: "./images/service-5.svg" },
  { name: "Programming & Tech", logo: "./images/service-6.svg" },
  { name: "Business", logo: "./images/service-7.svg" },
  { name: "Lifestyle", logo: "./images/service-8.svg" },
  { name: "Data", logo: "./images/service-9.svg" },
  { name: "Photography", logo: "./images/service-10.svg" },
];
const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">You need it, we&apos;ve got it</h2>
      <ul className="services-grid">
        {services.map(({ name, logo }) => (
          <li key={name} className="service-item">
            <img src={logo} alt="category" className="service-image" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
