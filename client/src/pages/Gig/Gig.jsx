import React from "react";
import "./Gig.css";
import Slider from "../../components/Slider/Slider";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";

const Gig = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["gig", id],
    queryFn: () => newRequest.get(`/gigs/single/${id}`).then((res) => res.data),
  });

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () =>
      newRequest.get(`/users/${data.userId}`).then((res) => res.data),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const starCount = Math.round(
    data.totalStars && data.starNumber ? data.totalStars / data.starNumber : 0
  );

  const starsArray = starCount > 0 ? Array(starCount).fill() : [];

  return (
    <div className="gig">
      <div className="gig_container">
        <div className="gig_left">
          <h1>{data.title}</h1>
          {isLoadingUser ? (
            "Loading"
          ) : errorUser ? (
            "Something Went Wrong..!!"
          ) : (
            <div className="user_profile">
              <img
                src={dataUser.img || "./images/noavater.jpg"}
                className="profile_picture"
                alt="Profile"
              />
              <span>{dataUser.username || "Krunal Pokar"}</span>
              <div className="gig_stars">
                {starsArray.map((_, i) => (
                  <img src="/images/star.png" alt="star" key={i} />
                ))}
                <span>{starCount}</span>
              </div>
            </div>
          )}
          <Slider className="slider" data={data} />
          <h2>About This Gig</h2>
          <p>{data.desc || "No description available"}</p>
          {isLoadingUser ? (
            "Loading"
          ) : errorUser ? (
            "Something Went Wrong..!!"
          ) : (
            <div className="gig_seller">
              <h2>About The Seller</h2>
              <div className="user_seller">
                <img src={dataUser.img || "/images/noavatar.jpg"} alt="" />
                <div className="seller_info">
                  <span>{dataUser.username || "Krunal Pokar"}</span>
                  {!isNaN(data.totalStars / data.starNumber) && (
                    <div className="gig_stars">
                      {starsArray.map((_, i) => (
                        <img src="/images/star.png" alt="star" key={i} />
                      ))}
                      <span>{starCount}</span>
                    </div>
                  )}
                  <button>Contact Me</button>
                </div>
              </div>
              <div className="box">
                <div className="box_items">
                  <div className="box_item">
                    <span className="title">From</span>
                    <span className="desc">{dataUser.country || "India"}</span>
                  </div>
                  <div className="box_item">
                    <span className="title">Member since</span>
                    <span className="desc">Aug 2022</span>
                  </div>
                  <div className="box_item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="box_item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="box_item">
                    <span className="title">Languages</span>
                    <span className="desc">English</span>
                  </div>
                </div>
                <hr />
                <p>{dataUser.desc || "No seller description available"}</p>
              </div>
            </div>
          )}
          <Reviews gigId={id} />
        </div>
        <div className="gig_right">
          <div className="gig_price">
            <h3>{data.shortTitle || "1 AI Generated Image"}</h3>
            <h2>Rs. {data.price || "10000"}</h2>
          </div>
          <p>
            {data.shortDesc ||
              "I will create a unique high-quality AI generated image based on a description that you give me."}
          </p>
          <div className="details">
            <div className="details_item">
              <img src="/images/clock.png" alt="" />
              <span>{data.deliveryTime} days Delivery</span>
            </div>
            <div className="details_item">
              <img src="/images/recycle.png" alt="" />
              <span>{data.revisionNumber} Revisions</span>
            </div>
          </div>
          <div className="details_features">
            {data.features.map((feature) => (
              <div className="feature_item" key={feature}>
                <img src="/images/greencheck.png" alt="" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
