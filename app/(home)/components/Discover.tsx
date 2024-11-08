import AssemblyIcon from "@/app/components/Icons/AssemblyIcon";
import MultipleXIcons from "@/app/components/Icons/MultipleXIcons";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/ui/Reveal";
import React from "react";

const Discover = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-5 lg:grid-cols-6 mt-28 text-white">
      <div className="col-span-1 sm:col-span-3 md:col-span-2 lg:col-span-3 bg-primary-dark">
        <div className="px-4 sm:w-4/5 md:w-2/3 mx-auto h-[500px] flex flex-col justify-center space-y-6">
          <Reveal>
            <h3 className="font-medium text-2xl sm:text-3xl lg:text-5xl">
              Why work with Mansu
            </h3>
          </Reveal>
          <p>
            Choosing the right partner for your business is crucial to achieving
            sustainable growth and long-term success. At Mansu, we go beyond the
            traditional advisory role by becoming a true partner in your
            journey. Here’s why you should consider working with us:
          </p>

          <Button className="w-fit" variant="white">
            Discover More
          </Button>
        </div>
      </div>
      <div className="h-[500px] hidden  md:flex flex-col justify-between bg-pink-dark px-4 py-8 overflow-hidden">
        <AssemblyIcon fill="#fff" />
        <Reveal className="text-2xl  w-4/5 font-medium">
          Our Commitment to Client Success
        </Reveal>
        <MultipleXIcons />
      </div>
      <div className="h-[500px] bg-pink-light hidden md:flex flex-col justify-between px-4 py-8 overflow-hidden">
        <AssemblyIcon fill="#fff" />
        <Reveal className="text-2xl w-2/3 font-medium">
          Deep Industry Experience
        </Reveal>
        <MultipleXIcons />
      </div>
      <div className="h-[500px] bg-pink hidden md:flex flex-col justify-between px-4 py-8 overflow-hidden">
        <AssemblyIcon fill="#fff" />
        <Reveal className="text-2xl  w-2/3 font-medium">
          Results-Oriented Approach
        </Reveal>
        <MultipleXIcons />
      </div>
    </div>
  );
};

export default Discover;
