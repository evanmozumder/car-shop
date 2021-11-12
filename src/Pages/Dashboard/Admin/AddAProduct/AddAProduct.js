import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useHistory } from "react-router";

const AddAProduct = () => {
  const [product, setProduct] = useState({});
  const history = useHistory();
  // collecting product data
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProductData = { ...product };
    newProductData[field] = value;
    // console.log(newLoginData);
    setProduct(newProductData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // sending new product info to the databse
    fetch("http://localhost:4000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("product added successfully");
          history.replace("/products");
        }
      });
    // console.log("product", product);
  };
  return (
    <div>
      <h2>Please Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ my: 5 }}
          name="name"
          id="standard-basic"
          label="Name"
          variant="standard"
          onBlur={handleOnBlur}
        />
        <br />
        <TextField
          id="standard-basic"
          name="img"
          label="img link"
          variant="standard"
          onBlur={handleOnBlur}
        />
        <br />
        <TextField
          sx={{ my: 5 }}
          name="price"
          id="outlined-number"
          label="Price"
          type="number"
          onBlur={handleOnBlur}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />
        <TextField
          id="standard-multiline-static"
          label="Description"
          name="description"
          multiline
          rows={4}
          placeholder="description"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <Button sx={{ my: 5 }} type="submit" variant="contained">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddAProduct;
