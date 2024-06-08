"use client";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/ui/Reveal";
import React from "react";
import Lottie from "react-lottie";
import homeHeroGif from "@/public/assets/lotties/hero-gif-frame.json";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homeHeroGif,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{ backgroundImage: `url(/assets/images/home/heroBg.png)` }}
      className=" text-white flex flex-col bg-black bg-center bg-cover bg-no-repeat"
    >
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center px-4 py-14 md:p-4 ">
          <Reveal>
            <h2 className="text-3xl md:text-5xl lg:text-6xl w-full xl:w-4/5 mb-3 font-medium">
              Expert Guidance for Business Success
            </h2>
            <p className="text-secondary w-4/5 lg:w-3/5 mb-3">
              Mansu provides tailored consultancy services to help businesses
              grow and thrive
            </p>
            <Button className="w-fit">Get Started</Button>
          </Reveal>
        </div>

        <div className="hidden md:block rotate-90 md:rotate-0 h-full  md:h-full md:w-[500px]">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
