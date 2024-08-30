import { Reveal } from "@/app/components/ui/Reveal";
import Image from "next/image";
import React from "react";

const ServicesItems = () => {
  return (
    <div className="container mx-auto p-4 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 pb-8 mb-10 border-b border-black">
        <p className="col-span-2 text-2xl">
          At Mansu, we pride ourselves on offering a comprehensive suite of
          services designed to meet the diverse needs of our clients. With a
          global reach and deep industry expertise, we deliver tailored
          solutions that drive sustainable growth and success.
        </p>
        <p className="col-span-1 hidden md:flex justify-end items-end uppercase text-black/50">
          Our Services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
        <div className="bg-grey-medium rounded-xl h-full flex flex-col justify-between">
          <Image
            src="/assets/images/services/business-strategy-bg.png"
            alt=""
            width={1000}
            height={300}
            className="mb-20 lg:mb-24"
          />
          <Reveal className="p-8">
            <h4 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-5">
              Research
            </h4>
            <p>
              Global Network, Tailored Solutions: Our geographically diverse
              team of professionals offers unparalleled research capabilities
              across various industries. We transform this expertise into
              actionable insights that directly impact your bottom line.
            </p>
          </Reveal>
        </div>

        <div className=" bg-gradient-to-br from-[#EF1746] via-[#7C2B8A] to-[#3C1651] rounded-xl text-white">
          <Image
            src="/assets/images/services/business-strategy-bg.png"
            alt=""
            width={1000}
            height={200}
            className="mb-20 mix-blend-multiply lg:mb-24 "
          />
          <Reveal className="p-8 h-full">
            <h4 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-5">
              Procurement
            </h4>
            <p>
              With our global reach and extensive network, we provide
              comprehensive procurement services from start to finish. Whether
              you need advisory and introductions or assistance with delivery
              and settlement, Mansu has you covered.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ServicesItems;
