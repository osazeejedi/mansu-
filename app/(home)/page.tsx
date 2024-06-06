import React from "react";
import Hero from "./components/Hero";
import TrustedPartners from "./components/TrustedPartners";
import OurServices from "./components/OurServices";
import Benefits from "./components/Benefits";
import Discover from "./components/Discover";
import Cta from "./components/Cta";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <OurServices />
      <Benefits />
      <Discover />
      <Cta />
    </>
  );
};

export default Home;
