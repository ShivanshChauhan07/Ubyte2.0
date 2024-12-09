import React from "react";
import Hero from "../bodyItem/Hero";
import Service from "../bodyItem/Service";

const Body = ({ heroHeight }) => {
  console.log(heroHeight);
  return (
    <>
      <Hero heroHeight={heroHeight} />;
      <Service />
    </>
  );
};

export default Body;
