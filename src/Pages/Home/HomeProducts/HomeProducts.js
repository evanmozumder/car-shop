import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const HomeProducts = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://gentle-bastion-31769.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        data = data.slice(0, 6);
        setCars(data);
      });
  }, []);
  return (
    <Container>
      <Typography
        sx={{ color: "error.main", my: 5, fontWeight: "bold" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Premium Cars
      </Typography>
      <Grid container spacing={2}>
        {cars.map((car) => (
          <Product car={car} key={car._id} />
        ))}
      </Grid>
    </Container>
  );
};

export default HomeProducts;
