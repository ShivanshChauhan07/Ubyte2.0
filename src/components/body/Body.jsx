import React from "react";
import Hero from "../bodyItem/Hero";
import Service from "../bodyItem/Service";
import Steps from "../bodyItem/Steps";
import Project from "../bodyItem/Project";
import Self from "../bodyItem/Self";
import Footer from "../bodyItem/Footer";

const Body = ({ heroHeight }) => {
  console.log(heroHeight);
  return (
    <>
      <Hero heroHeight={heroHeight} />;
      <Service />
      <Steps />
      <Project />
      <Self />
      <Footer />
    </>
  );
};

export default Body;
