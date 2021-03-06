import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Product = ({ car, handleRemove }) => {
  const { path, url } = useRouteMatch();
  const { _id, name, price, img, description, review } = car;
  return (
    <Grid item xs={12} md={4}>
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
        <CardActions>
          {path === "/dashboard/manageProducts" ? (
            <>
              <Button onClick={() => handleRemove(_id)} variant="contained">
                Remove
              </Button>
            </>
          ) : (
            <>
              <Link style={{ textDecoration: "none" }} to={`/purchase/${_id}`}>
                <Button variant="contained">Buy Now</Button>
              </Link>
            </>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
