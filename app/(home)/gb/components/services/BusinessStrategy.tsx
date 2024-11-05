import MansuLogo from "@/app/components/Icons/MansuLogo";
import { Reveal } from "@/app/components/ui/Reveal";
import Image from "next/image";
import React from "react";

const BusinessStrategyItems = [
  {
    id: 1,
    item: "We help start-ups identify opportunities for growth.",
  },
  {
    id: 2,
    item: "Our consulting services are tailored to assist you.",
  },
  {
    id: 3,
    item: "Our expertise supports strategic planning and execution for start-up success.",
  },
];

const BusinessStrategy = () => {
  return (
    <div className="bg-background flex flex-col lg:flex-row items-center  gap-0 lg:gap-10 pt-10 py-4 lg:pt-0 px-8 md:px-14 mt-10">
      <div className="self-start lg:self-auto">
        <Reveal className="text-2xl md:text-4xl font-medium mb-5">
          Offshore Settlement Strategies
        </Reveal>

        <div className="space-y-4">
          <Reveal>
            <p className="text-sm w-4/5 leading-6">
              Our offshore settlement methods ensure smooth financial
              transactions, enhancing flexibility and cost-efficiency.
            </p>
          </Reveal>
          {/* {BusinessStrategyItems.map(({ item, id }) => (
            <Reveal key={id} className="flex items-start gap-2">
              <div className="bg-white p-1 rounded-full">
                <MansuLogo />
              </div>
              <p>{item}</p>
            </Reveal>
          ))} */}
        </div>
      </div>

      {/* <div className="w-full md:w-1/3"> */}
      <Reveal className="hidden sm:block" position="right">
        <div className="relative h-[400px] w-full sm:w-[400px]">
          <Image
            quality={100}
            src={"/assets/images/home/uk_service_2.png"}
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
          src={"/assets/images/home/uk_service_2.png"}
          alt="Business Strategy"
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover"
          fill
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default BusinessStrategy;
