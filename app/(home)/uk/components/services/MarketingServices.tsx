import MansuLogo from "@/app/components/Icons/MansuLogo";
import { Reveal } from "@/app/components/ui/Reveal";
import Image from "next/image";
import React from "react";

const MarketingServicesItems = [
  {
    id: 1,
    item: "Our marketing services assist start-ups in building their brand.",
  },
  {
    id: 2,
    item: "Our consulting services are tailored to assist you.",
  },
  {
    id: 3,
    item: "Our expertise ensures effective and impactful marketing strategies.",
  },
];

const MarketingServices = () => {
  return (
    <div className="bg-background flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-10 pt-6 md:pt-14 lg:pt-0 px-4 md:px-6 mt-10">
      <div className="self-start lg:self-auto">
        <Reveal>
          <h3 className="text-2xl md:text-4xl font-medium mb-5">
            Strategic Partnerships
          </h3>
        </Reveal>
        <div className="space-y-4">
          <Reveal>
            <p className="text-sm w-4/5">
              By leveraging our supplier contracts, we provide competitive
              pricing and secure priority access across product categories.
            </p>
          </Reveal>
          {/* {MarketingServicesItems.map(({ item, id }) => (
            <Reveal key={id} className="flex items-start gap-2">
              <div className="bg-white p-1 rounded-full">
                <MansuLogo />
              </div>
              <p>{item}</p>
            </Reveal>
          ))} */}
        </div>
      </div>

      <Reveal className="hidden sm:block" position="right">
        <div className="relative h-[400px] w-full sm:w-[400px]">
          <Image
            quality={100}
            src={"/assets/images/home/market-services.png"}
            alt="Business Strategy"
            sizes="(min-width: 808px) 50vw, 100vw"
            className="object-cover"
            fill
          />
        </div>
      </Reveal>

      <div className="sm:hidden relative h-[400px] w-full sm:w-[400px]">
        <Image
          quality={100}
          src={"/assets/images/home/market-services.png"}
          alt="Business Strategy"
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default MarketingServices;
