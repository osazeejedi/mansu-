import React from "react";
import Cta from "../components/Cta";
import Discover from "../components/Discover";
import Benefits from "../components/Benefits";
import NgHero from "./components/NgHero";
import NgServices from "./components/NgServices";
import TrustedPartners from "../components/TrustedPartners";

const page = () => {
  return (
    <>
      <NgHero />
      <TrustedPartners />
      <NgServices />
      <Benefits />
      <Discover />
      <Cta />
    </>
  );
};

export default page;
