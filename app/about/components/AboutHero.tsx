import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/ui/Reveal";
import Link from "next/link";
import React from "react";

const AboutHero = () => {
  return (
    <div
      style={{ backgroundImage: `url(/assets/images/about/about-hero.png)` }}
      className="min-h-[450px] text-white flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat"
    >
      <div className="container mx-auto p-4 text-center flex">
        <div className="flex flex-col justify-center items-center">
          <Reveal className="text-2xl mb-3 font-bold uppercase">
            About Mansu
          </Reveal>
          <p className="md:w-3/5 mb-3">
            Welcome to Mansu.io, a consultancy business that provides expert
            guidance and resources to help tech start-ups succeed. Our team of
            experienced consultants is dedicated to helping new businesses
            navigate the challenges of the start-up industry with confidence.
          </p>
          <Link className="mt-5" href="our-services">
            <Button variant="outline" className="w-fit">
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
