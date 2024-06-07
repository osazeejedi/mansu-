import { Button } from "@/app/components/ui/Button";
import React from "react";

const Cta = () => {
  return (
    <div className="relative min-h-[60vh]">
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

      <div className="p-8 absolute left-0 top-0 bottom-0 right-0 w-full h-full text-white">
        <div className="space-y-5 container mx-auto w-full h-full flex flex-col justify-center items-center">
          <h3 className="font-medium text-center leading-tight text-2xl md:text-5xl w-11/12 lg:w-3/5 xl:1/3">
            Want to take your business to the next level?
          </h3>
          <p className="md:text-xl text-center w-4/5 md:w-2/3">
            Please fill in the form or send us an email on info@mansu.io
          </p>
          <Button variant="white" className="w-fit">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
