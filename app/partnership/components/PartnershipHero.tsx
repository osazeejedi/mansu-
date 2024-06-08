import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/ui/Reveal";
import React from "react";

const PartnershipHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/images/partnership/partnership-hero.png)`,
      }}
      className="min-h-[450px] bg-[#5f0124] text-white flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat"
    >
      <div className="container mx-auto p-4 flex flex-col">
        <Reveal className="w-full md:w-2/3 lg:1/2">
          <p className="uppercase text-grey-light/50">Partnership</p>
          <h3 className="text-3xl md:text-6xl w-11/12 xl:w-2/3 mb-3 font-semibold">
            Amazing Business Bonds
          </h3>
          <p className="my-4 w-11/12 xl:w-2/3">
            At Mansu, we believe that partnerships are essential to achieving
            our mission of helping businesses succeed. By collaborating with
            other organizations and experts in the industry, we can provide our
            clients with even more resources and support.
          </p>
          <Button className="w-fit">Get Started</Button>
        </Reveal>
      </div>
    </div>
  );
};

export default PartnershipHero;
