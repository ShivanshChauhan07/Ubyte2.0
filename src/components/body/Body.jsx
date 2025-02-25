import React from "react";
import Hero from "../bodyItem/Hero";
import Service from "../bodyItem/Service";
import Steps from "../bodyItem/Steps";
import Project from "../bodyItem/Project";
import Self from "../bodyItem/Self";

import Team from "../bodyItem/Team";

const Body = ({ heroHeight }) => {
  return (
    <>
      <Hero heroHeight={heroHeight} />;
      <Service />
      <Steps />
      <Project />
      <Self />
      <Team />
    </>
  );
};

export default Body;
