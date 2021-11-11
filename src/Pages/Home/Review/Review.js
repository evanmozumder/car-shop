import React from "react";

const Review = ({ review }) => {
  const { name, email, usersOpinion } = review;
  return (
    <div>
      <h2>{name}</h2>
      <h4>{email}</h4>
      <h3>{usersOpinion}</h3>
    </div>
  );
};

export default Review;
