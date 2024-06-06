import { Button } from "@/app/components/ui/Button";
import React from "react";

const Cta = () => {
  return (
    <div className="relative h-[50vh]">
      <div
        className="absolute w-full h-full hidden lg:block bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(/assets/images/home/home-cta.png)` }}
      ></div>

      <div
        className="absolute w-full h-full lg:hidden bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/images/home/home-cta-mobile.png)`,
        }}
      ></div>

      <div className="p-8 absolute w-full h-full container mx-auto space-y-5 flex flex-col justify-center items-center text-white">
        <h3 className="font-medium text-center leading-tight text-2xl md:text-5xl w-full lg:w-2/3">
          Want to take your business to the next level?
        </h3>
        <p className="md:text-xl text-center  w-full md:w-2/3 lg:1/3">
          Please fill in the form or send us an email on info@mansu.io
        </p>
        <Button variant="white" className="w-fit">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Cta;
