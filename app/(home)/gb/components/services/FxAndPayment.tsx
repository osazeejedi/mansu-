import MansuLogo from "@/app/components/Icons/MansuLogo";
import { Reveal } from "@/app/components/ui/Reveal";
import Image from "next/image";
import React from "react";

const fxPayments = [
  {
    id: 1,
    item: "Our tailored approach ensures businesses find the right financial partners to meet their needs.",
  },
  {
    id: 2,
    item: "We introduce and partner our clients with banks, foreign exchange brokers, payment solutions, and electronic money institutions.",
  },
  {
    id: 3,
    item: "Mansu offers bespoke consultancy services to bridge gaps for businesses.",
  },
];

const FxAndPayment = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-[#5F0F2E] text-white flex flex-col lg:flex-row items-center  gap-0 lg:gap-10 pt-14 px-8 md:px-14 lg:pt-0  mt-10">
      <div className="w-full md:w-1/2">
        <Reveal
          position="left"
          className="hidden sm:block relative h-[400px] w-full sm:w-[400px] order-last lg:order-first"
        >
          <Image
            quality={100}
            src="/assets/images/home/uk_service_1.png"
            alt="fx and payment"
            sizes="(min-width: 808px) 50vw, 100vw"
            className="object-cover"
            fill
          />
        </Reveal>

        <div className="sm:hidden relative h-[400px] w-full sm:w-[400px]">
          <Image
            quality={100}
            src="/assets/images/home/uk_service_1.png"
            alt="fx and payment"
            sizes="(min-width: 808px) 50vw, 100vw"
            className="object-cover"
            fill
          />
        </div>
      </div>

      <div className="px-4 md:px-6 lg:px-4 lg:w-1/2 order-first lg:order-last">
        <Reveal className="text-2xl md:text-4xl font-medium mb-5">
          Procurement Services
        </Reveal>

        <div className="space-y-4">
          <Reveal>
            <p className="text-sm w-4/5 leading-6">
              We offer a streamlined procurement process through our network of
              reliable suppliers to deliver cost-effective products.
            </p>
          </Reveal>
          {/* {fxPayments.map(({ item, id }) => (
            <Reveal key={id} className="flex items-start gap-2">
              <div className="bg-white p-1 rounded-full">
                <MansuLogo />
              </div>
              <p>{item}</p>
            </Reveal>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default FxAndPayment;
