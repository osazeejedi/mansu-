import Image from "next/image";
import React from "react";

const TwoPartnershipProviders = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-5 text-white mb-28">
      <div className="bg-gradient-to-br from-[#EF1746] via-[#7C2B8A] to-[#3C1651] rounded-xl">
        <Image
          src="/assets/images/partnership/provider-bg.png"
          alt=""
          width={300}
          height={300}
          className="mb-20 lg:mb-24"
        />
        <div className="p-8">
          <h4 className="text-2xl md:text-5xl font-semibold mb-5">
            Service Providers
          </h4>
          <p className="md:text-xl lg:w-4/5">
            We partner with service providers to offer our clients a
            comprehensive range of services. Our partners include companies that
            provide everything from accounting to legal services to marketing.
          </p>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-primary to-[#5F0F2E] rounded-xl min-h-[500px] flex-flex-col justify-between">
        <div className="p-8">
          <h4 className="text-2xl md:text-5xl font-semibold mb-5">
            Venture Capital Firms
          </h4>
          <p className="md:text-xl">
            We partner with venture capital firms to help their portfolio
            companies achieve their goals. Our consultancy services can help
            businesses identify areas for improvement and develop strategies to
            maximize their potential.
          </p>
        </div>
        <div>
          <Image
            src="/assets/images/partnership/venture-capital-bg.png"
            alt=""
            width={1000}
            height={300}
            className="absolute bottom-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoPartnershipProviders;
