import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const ManageProducts = () => {
  const { isLoading } = useAuth();
  const [allOrders, setAllOrders] = useState([]);
  // getting all order
  useEffect(() => {
    fetch("http://localhost:4000/allOrders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
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
      const restOrders = allOrders.filter((order) => order.productId !== id);
      setAllOrders(restOrders);

      // removing products from server
      fetch(`http://localhost:4000/product/${id}`, {
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
  return (
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
};

export default ManageProducts;
