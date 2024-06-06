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
    <div className="bg-background flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-10 pt-10 lg:pt-0 px-4 md:px-6 mt-10">
      <Reveal>
        <div className="self-start lg:self-auto">
          <h3 className="text-2xl md:text-4xl font-medium mb-5">
            Business Strategy Consulting
          </h3>

          <div className="space-y-4">
            {BusinessStrategyItems.map(({ item, id }) => (
              <div key={id} className="flex items-start gap-2">
                <div className="bg-white p-1 rounded-full">
                  <MansuLogo />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="hidden sm:block" position="right">
        <div className="relative h-[400px] w-full sm:w-[400px]">
          <Image
            quality={100}
            src={"/assets/images/home/Business-strategy-img.png"}
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
          src={"/assets/images/home/Business-strategy-img.png"}
          alt="Business Strategy"
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default BusinessStrategy;
