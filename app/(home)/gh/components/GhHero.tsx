"use client";

import React from "react";
import Lottie from "react-lottie";
import homeHeroGif from "@/public/assets/lotties/hero-gif-frame.json";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/ui/Reveal";

const GhHero = () => {
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
      className="relative text-white flex flex-col justify-center items-center md:h-[550px] bg-black bg-center bg-cover bg-no-repeat"
    >
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center px-4 pt-14 md:py-14 md:px-4 md:w-5/6 lg:w-4/5">
          <Reveal>
            <h2 className="text-3xl md:text-4xl xl:text-5xl w-full xl:w-4/5 mb-3 font-medium">
              Streamlined Procurement and Logistics for Ghanaian Businesses
            </h2>
            <p className="text-secondary w-4/5 mb-3">
              Mansu provides comprehensive procurement services and
              international logistics solutions to support businesses in Ghana
              with their purchasing needs.
            </p>
            <Button className="w-fit">Get Started</Button>
          </Reveal>
        </div>

        <div className="md:hidden lg:block h-full overflow-hidden">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default GhHero;
