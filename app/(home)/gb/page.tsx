import React from "react";
import Cta from "../components/Cta";
import Discover from "../components/Discover";
import Benefits from "../components/Benefits";
import UkHero from "./components/UkHero";
import UkServices from "./components/UkServices";
import TrustedPartners from "../components/TrustedPartners";

const page = () => {
  return (
    <>
      <UkHero />
      <TrustedPartners />
      <UkServices />
      <Benefits />
      <Discover />
      <Cta />
    </>
  );
};

export default page;
