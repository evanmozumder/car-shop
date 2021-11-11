import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/myOrders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        setMyOrders(data);
      });
  }, []);

  const handleRemove = (id) => {
    // confirming from user delete or not
    const choice = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (choice) {
      // removing products from UI
      const restOrders = myOrders.filter((order) => order.productId !== id);
      setMyOrders(restOrders);

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

  return (
    <div>
      {myOrders.map((order) => (
        <div key={order._id}>
          <h2>{order.productName}</h2>
          <h6>Price: {order.productPrice}</h6>
          <Button
            onClick={() => handleRemove(order.productId)}
            variant="contained"
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
