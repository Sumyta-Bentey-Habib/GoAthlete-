import React from "react";
import Banner from "../components/Banner";
import ImageReordering from "../components/ImageReordering";
import Animated from "../components/Animated";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="m-5">
        <Animated></Animated>
      </div>
    </div>
  );
};

export default Home;
