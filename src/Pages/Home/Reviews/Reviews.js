import { Container, Grid } from "@mui/material";
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
    <Container sx={{ my: 6 }}>
      <h1>User Reviews</h1>
      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Review review={review} key={review._id}></Review>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
