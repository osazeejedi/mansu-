import { Reveal } from "@/app/components/ui/Reveal";
import Image from "next/image";
import React from "react";

const ServicesItems = () => {
  return (
    <div className="container mx-auto p-4 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 pb-8 mb-10 border-b border-black">
        <p className="col-span-2 text-2xl">
          At Mansu, we offer a range of services to help tech start-ups and
          start-ups in general succeed. Our experienced team of consultants
          works closely with our clients to understand their unique needs and
          provide tailored solutions that meet their goals.
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
              Business Strategy Consulting
            </h4>
            <p>
              Our business strategy consulting services are designed to help
              businesses identify opportunities for growth and develop effective
              strategies to achieve their goals. We work closely with our
              clients to understand their business and market landscape and
              provide actionable recommendations to help them succeed.
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
              Financial Planning and Management
            </h4>
            <p>
              Our financial planning and management services help businesses
              manage their finances and make informed decisions about their
              business. We work closely with our clients to develop financial
              projections, analyze financial data, and develop strategies to
              maximize profitability. Our goal is to help our clients make smart
              financial decisions that support their long-term growth.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ServicesItems;
