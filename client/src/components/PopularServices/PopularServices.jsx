import React from "react";
import "./PopularServices.css";
import { cards } from "../../data";
import { Link } from "react-router-dom";
const PopularServices = () => {
  return (
    <div className="popular_services">
      <h2 className="popular_heading">Popular Services</h2>
      <ul className="popular_list">
        {cards.map(({ id, title, desc, img }) => (
          <Link to="/gigs?cat=design">
            <li key={id} className="popular_element">
              <div className="popular_card">
                <span>{title}</span>
                <h6>{desc}</h6>
              </div>
              <div className="popular_image">
                <img src={img} alt="" className="fill-image" />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PopularServices;
