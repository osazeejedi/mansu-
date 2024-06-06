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
    <div className="bg-gradient-to-r from-primary to-[#5F0F2E] text-white flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-10 pt-14 lg:pt-0  mt-10">
      <Reveal className="hidden sm:block" position="left">
        <div className="relative h-[400px] w-full sm:w-[400px] order-last lg:order-first">
          <Image
            quality={100}
            src="/assets/images/home/fxAndPayment.png"
            alt="fx and payment"
            sizes="(min-width: 808px) 50vw, 100vw"
            className="object-cover"
            fill
          />
        </div>
      </Reveal>
      <div className="sm:hidden relative h-[400px] w-full sm:w-[400px] order-last lg:order-first">
        <Image
          quality={100}
          src="/assets/images/home/fxAndPayment.png"
          alt="fx and payment"
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover"
          fill
        />
      </div>
      <div className="px-4 md:px-6 lg:px-4 lg:w-1/2">
        <Reveal>
          <h3 className="text-2xl md:text-4xl font-medium mb-5">
            FX and Payment Processing Consultancy Services
          </h3>

          <div className="space-y-4">
            {fxPayments.map(({ item, id }) => (
              <div key={id} className="flex items-start gap-2">
                <div className="bg-white p-1 rounded-full">
                  <MansuLogo />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default FxAndPayment;
