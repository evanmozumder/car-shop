import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const HomeProducts = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        data = data.slice(0, 6);
        setCars(data);
      });
  }, []);
  return (
    <Container>
      <Grid container spacing={2}>
        {cars.map((car) => (
          <Product car={car} key={car._id} />
        ))}
      </Grid>
    </Container>
  );
};

export default HomeProducts;
