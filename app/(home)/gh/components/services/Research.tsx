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

const Research = () => {
  return (
    <div className="bg-background flex flex-col lg:flex-row items-center gap-0 lg:gap-10 pt-10 lg:pt-0 px-8 md:px-14 mt-10">
      <div className="self-start lg:self-auto lg:w-1/2">
        <Reveal className="text-2xl md:text-4xl font-medium mb-5">
        Research and Analytics
        </Reveal>

        <div className="space-y-4">
          <Reveal className="flex items-start gap-2">
            <p className="text-sm w-4/5 leading-6">
            Our team of seasoned researchers and analysts possesses extensive experience across a wide range of industries. 
            We conduct thorough, detailed investigations, ensuring that no aspect is overlooked. 
            All findings will be meticulously presented to equip your company with the insights needed for success, allowing you to focus on effective implementation.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal className="hidden sm:block md:w-1/2" position="right">
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

export default Research;
