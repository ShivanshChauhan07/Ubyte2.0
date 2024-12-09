import React from "react";
import Hero from "../bodyItem/Hero";
import Service from "../bodyItem/Service";
import Steps from "../bodyItem/Steps";

const Body = ({ heroHeight }) => {
  console.log(heroHeight);
  return (
    <>
      <Hero heroHeight={heroHeight} />;
      <Service />
      <Steps />
    </>
  );
};

export default Body;
