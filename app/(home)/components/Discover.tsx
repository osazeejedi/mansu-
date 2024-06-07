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
              Mansu is so much more
            </h3>
          </Reveal>
          <p>
            At Mansu, we take a collaborative approach to consultancy. We
            believe that the best solutions come from working closely with our
            clients to understand their unique challenges and goals.
          </p>

          <Button className="w-fit" variant="white">
            Discover More
          </Button>
        </div>
      </div>
      <div className="h-[500px]  bg-pink-dark flex flex-col justify-between px-4 py-8 overflow-hidden">
        <AssemblyIcon fill="#fff" />
        <Reveal className="text-2xl  w-1/3 font-medium">
          Payroll Services
        </Reveal>
        <MultipleXIcons />
      </div>
      <div className="h-[500px] bg-pink-light flex flex-col justify-between px-4 py-8 overflow-hidden">
        <AssemblyIcon fill="#fff" />
        <Reveal className="text-2xl w-1/3 font-medium">
          Human Resources Consulting
        </Reveal>
        <MultipleXIcons />
      </div>
      <div className="h-[500px] bg-pink flex flex-col justify-between px-4 py-8 overflow-hidden">
        <AssemblyIcon fill="#fff" />
        <Reveal className="text-2xl  w-1/3 font-medium">
          Marketing Services
        </Reveal>
        <MultipleXIcons />
      </div>
    </div>
  );
};

export default Discover;
