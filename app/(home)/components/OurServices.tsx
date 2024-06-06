import React from "react";
import BusinessStrategy from "./services/BusinessStrategy";
import FxAndPayment from "./services/FxAndPayment";
import MarketingServices from "./services/MarketingServices";

const OurServices = () => {
  return (
    <div className="container mx-auto mt-24 p-4">
      <h2 className="text-center text-3xl md:text-5xl font-medium mb-2">
        Some of our Services
      </h2>
      <p className="text-center w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
        Our business strategy consulting services are designed to help start-ups
        identify opportunities for growth
      </p>

      <div>
        <BusinessStrategy />
        <FxAndPayment />
        <MarketingServices />
      </div>
    </div>
  );
};

export default OurServices;
