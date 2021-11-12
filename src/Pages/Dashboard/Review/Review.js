import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [review, setReview] = useState({});
  const history = useHistory();

  const handleBlur = (e) => {
    const usersOpinion = e.target.value;
    review.usersOpinion = usersOpinion;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    review.name = user.displayName;
    review.email = user.email;

    fetch("https://gentle-bastion-31769.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("review posted successfully");
          history.push("/");
        }
      });
  };
  return (
    <Box sx={{ my: 5 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-read-only-input"
          label="Name"
          defaultValue={user.displayName}
          InputProps={{
            readOnly: true,
          }}
        />
        <br />
        <TextField
          sx={{ my: 5 }}
          id="outlined-read-only-input"
          label="Email"
          defaultValue={user.email}
          InputProps={{
            readOnly: true,
          }}
        />
        <br />
        <TextField
          id="outlined-multiline-flexible"
          label="Review"
          multiline
          maxRows={4}
          onBlur={handleBlur}
        />
        <br />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Review;
