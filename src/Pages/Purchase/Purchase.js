import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Purchase = () => {
  const { user, isLoading, setOrderStatus } = useAuth();
  const { productId } = useParams();
  const [details, setDetails] = useState({});

  const history = useHistory();

  // finding selected product info
  useEffect(() => {
    fetch(`http://localhost:4000/purchase/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("details", data);
        setDetails(data);
      });
  }, []);
  const { name, img, price, description } = details;

  const initialInfo = {
    buyerName: user.displayName,
    email: user.email,
    productId: productId,
  };
  const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newPurchaseData = { ...purchaseInfo };
    newPurchaseData[field] = value;
    // console.log(newLoginData);
    setPurchaseInfo(newPurchaseData);
  };

  const handleSubmit = (e) => {
    purchaseInfo.productName = name;
    purchaseInfo.productPrice = price;
    purchaseInfo.productImg = img;
    purchaseInfo.status = "Pending";

    // console.log("purchase info", purchaseInfo);
    e.preventDefault();
    // console.log("purchased", purchaseInfo);
    fetch("http://localhost:4000/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchaseInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOrderStatus("Pending");
          alert("purchase successfull");
          history.replace("/");
        }
      });
  };

  /* useEffect(() => {
    fetch("http://localhost:4000/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: purchaseInfo,
    });
  }, [purchaseInfo]); */

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Container sx={{ my: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <h2>Please Give Your Info</h2>
          <form style={{ width: "75%" }} onSubmit={handleSubmit}>
            <TextField
              onBlur={handleOnBlur}
              name="name"
              id="standard-basic"
              defaultValue={user.displayName}
              variant="standard"
            />
            <br />
            <TextField
              name="email"
              onBlur={handleOnBlur}
              id="standard-basic"
              defaultValue={user.email}
              variant="standard"
            />
            <br />
            <TextField
              name="phone"
              onBlur={handleOnBlur}
              id="standard-basic"
              label="phone"
              variant="standard"
            />
            <br />
            <TextField
              onBlur={handleOnBlur}
              id="standard-basic"
              name="address"
              label="address"
              variant="standard"
            />
            <br />
            <Button sx={{ my: 5 }} type="submit" variant="contained">
              Purchase
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Purchase;
