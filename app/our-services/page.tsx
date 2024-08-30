import React from "react";
import Cta from "../(home)/components/Cta";
import ServicesHero from "./components/ServicesHero";
import ServicesItems from "./components/ServicesItems";
// import SoftwareDevelopment from "./components/SoftwareDevelopment";
import MarketingProductDesign from "./components/MarketingProductDesign";
import PayrollServices from "./components/PayrollServices";

const OurServices = () => {
  return (
    <>
      <ServicesHero />
      <ServicesItems />

      <MarketingProductDesign />
      <PayrollServices />
      <Cta />
    </>
  );
};

export default OurServices;
