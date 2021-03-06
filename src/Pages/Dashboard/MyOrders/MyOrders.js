import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user, orderStatus } = useAuth();
  // console.log("order", orderStatus);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://gentle-bastion-31769.herokuapp.com/myOrders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        setMyOrders(data);
      });
  }, []);

  const handleRemove = (id) => {
    // removing products from UI
    const restOrders = myOrders.filter((order) => order._id !== id);
    setMyOrders(restOrders);
    // confirming from user delete or not
    const choice = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (choice) {
      // removing products from server
      fetch(`https://gentle-bastion-31769.herokuapp.com/order/${id}`, {
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

  return (
    <div>
      {myOrders.map((order) => (
        <div key={order._id}>
          <h2>Car Name: {order.productName}</h2>
          <h4>Price: {order.productPrice}</h4>
          <Button
            onClick={() => handleRemove(order._id)}
            variant="contained"
            color="error"
          >
            Remove
          </Button>
          <Button sx={{ mx: 5 }} variant="contained" disabled>
            {order?.status || "Pending"}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
