import React from "react";
import Presentation from "./Presentation";
import Pepite from "./Pepite";
import Recent from "./Recent";
import Utils from "./Utils";

const Home = () => {
  return (
    <div>
      <Presentation />
      <Pepite />
      <Recent />
      <Utils />
    </div>
  );
};

export default Home;
