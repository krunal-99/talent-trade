import React from "react";
import "./GigCard.css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={item.cover} alt="Gig Image" />
        <div className="info">
          {isLoading ? (
            "Loading"
          ) : error ? (
            "Something Went Wrong..!!"
          ) : (
            <div className="user">
              <img
                src={data.img || "/images/noavatar.jpg"}
                alt="User Profile Picture"
              />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <img src="./images/star.png" alt="Star" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./images/heart.png" alt="Heart" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>₹ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
