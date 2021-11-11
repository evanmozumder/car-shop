import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import HomeProducts from "../HomeProducts/HomeProducts";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <HomeProducts></HomeProducts>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
