import AssemblyClusterIcon from "@/app/components/Icons/AssemblyClusterIcon";
import AssemblyDoubleBoxIcon from "@/app/components/Icons/AssemblyDoubleBoxIcon";
import AssemblyIcon from "@/app/components/Icons/AssemblyIcon";
import { Reveal } from "@/app/components/ui/Reveal";
import React from "react";

const benefitsItems = [
  {
    id: 1,
    Icon: AssemblyIcon,
    title: "What you’ll get",
    description:
      "At Mansu, we take a collaborative approach to consultancy. We believe that the best solutions come from working closely with our clients to understand their unique challenges.",
  },
  {
    id: 2,
    Icon: AssemblyDoubleBoxIcon,
    title: "What you’ll get",
    description:
      "At Mansu, we take a collaborative approach to consultancy. We believe that the best solutions come from working closely with our clients to understand their unique challenges.",
  },
  {
    id: 1,
    Icon: AssemblyClusterIcon,
    title: "What you’ll get",
    description:
      "At Mansu, we take a collaborative approach to consultancy. We believe that the best solutions come from working closely with our clients to understand their unique challenges.",
  },
];

const Benefits = () => {
  return (
    <div className="container mx-auto px-4 mt-24">
      <Reveal>
        <h3 className="font-medium md:font-bold text-4xl md:text-5xl lg:text-6xl">
          Benefits of <span className="block">working with us</span>
        </h3>
      </Reveal>

      <div className="grid grid-col-1 md:grid-cols-3 mt-10 gap-8 space-y-4 place-content-center place-items-center justify-around md:divide-x ">
        {benefitsItems.map(({ id, Icon, title, description }) => (
          <Reveal key={id} className="!first:pl-0 pl-0 md:!pl-8">
            <Icon />
            <h5 className="text-2xl font-semibold my-4">{title}</h5>
            <p className="mt-2">{description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
