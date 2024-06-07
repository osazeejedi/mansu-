import React from "react";
import PartnershipHero from "./components/PartnershipHero";
import Cta from "../(home)/components/Cta";
import PartnershipTypes from "./components/PartnershipTypes";
import TwoPartnershipProviders from "./components/TwoPartnershipProviders";

const Partnership = () => {
  return (
    <>
      <PartnershipHero />
      <PartnershipTypes />
      <TwoPartnershipProviders />
      <Cta />
    </>
  );
};

export default Partnership;
