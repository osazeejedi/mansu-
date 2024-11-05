import React from "react";
import Cta from "../components/Cta";
import Discover from "../components/Discover";
import NgHero from "./components/NgHero";
import NgServices from "./components/NgServices";
import TrustedPartners from "../components/TrustedPartners";
import NgBenefits from "./components/NgBenefits";
import Benefits from "../components/Benefits";

const page = () => {
  return (
    <>
      <NgHero />
      <TrustedPartners />
      <NgServices />
      {/* <NgBenefits /> */}
      <Benefits />
      <Discover />
      <Cta />
    </>
  );
};

export default page;
