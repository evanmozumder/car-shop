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
      <h1>Latest Arival</h1>
      <img
        style={{ maxWidth: "100%" }}
        src="https://i.ibb.co/HqvQVny/grey-metallic-jeep-with-blue-stripe-it.jpg"
        alt=""
      />
    </div>
  );
};

export default Home;
