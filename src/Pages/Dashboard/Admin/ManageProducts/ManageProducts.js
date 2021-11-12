import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Product from "../../../Home/Product/Product";

const ManageProducts = () => {
  const { isLoading } = useAuth();
  // const [allProducts, setAllProducts] = useState([]);
  const [cars, setCars] = useState([]);

  // getting all products
  /* useEffect(() => {
    fetch("https://gentle-bastion-31769.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []); */
  useEffect(() => {
    fetch("https://gentle-bastion-31769.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);

  //removing a order
  const handleRemove = (id) => {
    // confirming from user delete or not
    const choice = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (choice) {
      // removing products from UI
      const restProducts = cars.filter((car) => car._id !== id);
      setCars(restProducts);

      // removing products from server
      fetch(`https://gentle-bastion-31769.herokuapp.com/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Removed Successfully");
          }
        });
    }
  };
  if (isLoading) {
    return <CircularProgress />;
  }
  /* return (
    <div>
      <div>
        {allOrders.map((order) => (
          <div key={order._id} style={{ margin: "20px 0" }}>
            <h3>user: {order.email}</h3>
            <h2>car name: {order.productName}</h2>
            <h6>Price: {order.productPrice}</h6>
            <Button
              onClick={() => handleRemove(order.productId)}
              variant="contained"
              color="error"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}; */

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {cars.map((car) => (
            <Product car={car} key={car._id} handleRemove={handleRemove} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default ManageProducts;
