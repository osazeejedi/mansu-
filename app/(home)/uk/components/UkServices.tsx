import React from "react";
import FxAndPayment from "./services/FxAndPayment";
import BusinessStrategy from "./services/BusinessStrategy";
import MarketingServices from "./services/MarketingServices";

const UkServices = () => {
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
        <FxAndPayment />
        <BusinessStrategy />
        <MarketingServices />
      </div>
    </div>
  );
};

export default UkServices;
