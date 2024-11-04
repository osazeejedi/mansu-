import React from "react";
import Cta from "../components/Cta";
import Discover from "../components/Discover";
import Benefits from "../components/Benefits";
import GhServices from "./components/GhServices";
import GhHero from "./components/GhHero";
import TrustedPartners from "../components/TrustedPartners";

const page = () => {
  return (
    <>
      <GhHero />
      <TrustedPartners />
      <GhServices />
      <Benefits />
      <Discover />
      <Cta />
    </>
  );
};

export default page;
