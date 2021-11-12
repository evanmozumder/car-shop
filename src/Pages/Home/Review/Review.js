import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

const Review = ({ review }) => {
  const { name, email, usersOpinion } = review;
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ bgcolor: "success.main" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 20, color: "white" }}
            color="text.secondary"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography sx={{ fontSize: 20, color: "white" }} component="div">
            {email}
          </Typography>
          <Typography
            sx={{ fontSize: 30, color: "white" }}
            color="text.secondary"
          >
            {usersOpinion}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Review;
