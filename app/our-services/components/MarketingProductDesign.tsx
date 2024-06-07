import Image from "next/image";
import React from "react";

const MarketingProductDesign = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 mt-10">
      <div className="bg-gradient-to-br from-primary  to-[#5F0F2E] rounded-xl text-white flex flex-col justify-between h-full">
        <Image
          src="/assets/images/services/business-strategy-bg.png"
          alt=""
          width={1000}
          height={200}
          className="mb-20 mix-blend-multiply lg:mb-24 "
        />
        <div className="p-8">
          <h4 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-5">
            Marketing
          </h4>
          <p>
            Our marketing services help businesses build their brand and reach
            their target audience. We work with our clients to develop
            comprehensive marketing strategies that include everything from
            social media to content marketing to paid advertising. Our goal is
            to help our clients increase their visibility and drive more traffic
            to their websites or app.
          </p>
        </div>
      </div>

      <div className="bg-grey-medium rounded-xl h-full flex flex-col justify-between">
        <Image
          src="/assets/images/services/business-strategy-bg.png"
          alt=""
          width={1000}
          height={300}
          className="mb-20 lg:mb-24"
        />
        <div className="p-8">
          <h4 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-5">
            Product Design and Development
          </h4>
          <p>
            Our product design and development services are designed to help
            businesses create products that meet the needs of their target
            audience. We work closely with our clients to understand their users
            and develop products that are user-friendly, intuitive, and
            effective. Our team of designers and developers use agile
            methodologies to ensure that the product is delivered on time and
            within budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingProductDesign;
