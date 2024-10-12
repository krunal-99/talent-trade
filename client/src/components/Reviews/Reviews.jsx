import React from "react";
import "./Reviews.css";
import Review from "../Review/Review";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
const Reviews = ({ gigId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => newRequest.get(`/reviews/${gigId}`).then((res) => res.data),
  });
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "Loading"
        : error
        ? "Something Went Wrong..!!"
        : data.map((review) => <Review key={review._id} review={review} />)}
    </div>
  );
};

export default Reviews;
