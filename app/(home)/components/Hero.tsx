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
      className="relative text-white flex flex-col justify-center items-center md:h-[550px] bg-black bg-center bg-cover bg-no-repeat"
    >
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center px-4 pt-14 md:py-14 md:px-4 md:w-4/5 lg:w-2/3">
          <Reveal>
            <h2 className="text-3xl md:text-5xl xl:text-6xl w-full xl:w-4/5 mb-3 font-medium">
              Expertise that drives results
            </h2>
            <p className="text-secondary w-4/5 mb-3">
              We help businesses excel by tackling profitability challenges. As
              an extension of your team, we understand your vision and use our
              experience to streamline operations and maximize your potential.
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

export default Hero;
