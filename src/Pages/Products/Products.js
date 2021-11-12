import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Home/Product/Product";
import Header from "../Shared/Header/Header";

const Products = () => {
  const [cars, setCars] = useState([]);

  // getting all products
  useEffect(() => {
    fetch("https://gentle-bastion-31769.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
  return (
    <div>
      <Header></Header>
      <Container>
        <Grid container spacing={2}>
          {cars.map((car) => (
            <Product car={car} key={car._id} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
