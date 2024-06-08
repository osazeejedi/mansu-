import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/ui/Reveal";
import React from "react";

const ServicesHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/images/services/service-hero.png`,
      }}
      className="min-h-[450px] bg-[#39140f] text-white flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat"
    >
      <div className="container mx-auto p-4 flex flex-col">
        <div className="w-full md:w-2/3 lg:1/2">
          <Reveal>
            <h3 className="text-3xl md:text-6xl w-11/12 xl:w-2/3 mb-3 font-semibold">
              Accelerate your business
            </h3>
            <p className="my-4 w-10/12 xl:w-6/12">
              Mansu provides tailored consultancy services to help businesses
              grow and thrive
            </p>
            <Button className="w-fit">Get Started</Button>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
