import { Button } from "@/app/components/ui/Button";
import React from "react";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(/assets/images/home/heroBg.png)` }}
      className="h-[600px] text-white flex flex-col items-center justify-center"
    >
      <div className="container mx-auto p-4 flex">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-5xl lg:text-6xl w-3/5 mb-3 font-medium">
            Expert Guidance for Business Success
          </h2>
          <p className="text-secondary md:w-2/5 mb-3">
            Mansu provides tailored consultancy services to help businesses grow
            and thrive
          </p>
          <Button className="w-fit">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
