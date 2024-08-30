import { Reveal } from "@/app/components/ui/Reveal";
import React from "react";

const PartnershipTypes = () => {
  return (
    <div className="container mx-auto p-4 mt-24">
      <p className="font-medium text-2xl md:text-3xl mx-auto w-full md:w-4/5 lg:w-3/5 text-center">
        We are always looking for new partnerships with organizations and
        individuals who share our commitment to helping businesses thrive.
      </p>

      <h6 className="font-semibold text-2xl sm:text-3xl w-full md:w-4/5 md:text-5xl mt-20">
        Some of the types of partnerships we’re interested in include:
      </h6>

      <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 border-black border-y py-10">
        <h4 className="font-semibold text-2xl md:text-4xl">Trade unions</h4>
        <p className="lg:col-span-2">
          We are open to partner with trade unions, communities, and
          associations and empower them with the tools, resources, and
          knowledge-base to grow their businesses and compete at the global
          scale.
        </p>
      </Reveal>

      <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 border-black border-b pb-10">
        <h4 className="font-semibold text-2xl md:text-4xl">
          Technology and innovation partners
        </h4>
        <p className="lg:col-span-2">
          We partner with technology and innovation hubs where we provide deep
          expertise and support to emerging technology companies and innovation
          hubs such as incubators and accelerators transforming next generation
          businesses and solutions.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2">
        <div></div>
      </div>
    </div>
  );
};

export default PartnershipTypes;
