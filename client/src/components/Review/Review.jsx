import React from "react";
import "./Review.css";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => res.data),
  });
  return (
    <div>
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something Went Wrong..!!"
      ) : (
        <div className="review_user">
          <img src={data.img || "/images/noavatar.jpg"} alt="" />
          <div className="review_info">
            <span>{data.username}</span>
            <div className="review_country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="gig_stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/images/star.png" alt="" />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/images/like.png" alt="" />
        <span>Yes</span>
        <img src="/images/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;
