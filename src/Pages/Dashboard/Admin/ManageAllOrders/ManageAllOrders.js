import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const ManageAllOrders = () => {
  const { isLoading, setOrderStatus } = useAuth();
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

  // shipping an order
  const handleShipped = (id) => {
    setOrderStatus("Shipped");
  };

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <div>
      <div>
        {allOrders.map((order) => (
          <div key={order._id}>
            <h5>{order.email}</h5>
            <h2>{order.productName}</h2>
            <h6>Price: {order.productPrice}</h6>
            <Button
              onClick={() => handleRemove(order.productId)}
              variant="contained"
              color="error"
            >
              Remove
            </Button>
            <Button
              sx={{ mx: 5 }}
              onClick={() => handleShipped(order.productId)}
              variant="contained"
            >
              Shipped
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrders;
