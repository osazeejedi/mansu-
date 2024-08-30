import { Reveal } from "@/app/components/ui/Reveal";
import Image from "next/image";
import React from "react";

const TwoPartnershipProviders = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-5 text-white mb-16">
      <Reveal
        position="left"
        className="bg-gradient-to-br from-[#EF1746] via-[#7C2B8A] to-[#3C1651] rounded-xl"
      >
        <Image
          src="/assets/images/partnership/provider-bg.png"
          alt=""
          width={300}
          height={300}
          className="mb-20 lg:mb-24"
        />
        <div className="p-8">
          <h4 className="text-2xl md:text-5xl font-semibold mb-5">
            Non-profit organizations
          </h4>
          <p className="md:text-xl lg:w-4/5">
            Mansu opens its doors to non-profit organizations driving impact
            helping them streamline their operations and activities to better
            serve the communities they operate in.
          </p>
        </div>
      </Reveal>

      <Reveal
        position="right"
        className="relative h-full bg-gradient-to-r from-primary to-[#5F0F2E] rounded-xl min-h-[500px] flex-flex-col justify-between"
      >
        <div className="p-8">
          <h4 className="text-2xl md:text-5xl font-semibold mb-5">
            Venture Capital Firms
          </h4>
          <p className="md:text-xl">
            With our extensive experience and reach in the global capital
            markets, we partner with global investors to match them with
            thriving investment opportunities in emerging markets.
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
      </Reveal>
    </div>
  );
};

export default TwoPartnershipProviders;
