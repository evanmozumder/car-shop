import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      {reviews.map((review) => (
        <Review review={review} key={review._id}></Review>
      ))}
    </div>
  );
};

export default Reviews;
