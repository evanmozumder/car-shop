import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const bannerBg = {
  background: `url("https://premium.goauto.com.au/wp-content/uploads/2019/05/Isuzu_Ute_TVC_TH.jpg")`,
};

const Banner = () => {
  return (
    <Container style={bannerBg}>
      <Link style={{ textDecoration: "none" }} to="/products">
        <Button variant="contained">Explore</Button>
      </Link>
    </Container>
  );
};

export default Banner;
