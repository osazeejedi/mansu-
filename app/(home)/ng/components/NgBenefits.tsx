import { Reveal } from "@/app/components/ui/Reveal";
import AssemblyClusterIcon from "@/app/components/Icons/AssemblyClusterIcon";
import AssemblyDoubleBoxIcon from "@/app/components/Icons/AssemblyDoubleBoxIcon";
import AssemblyIcon from "@/app/components/Icons/AssemblyIcon";
import React from "react";

const benefitsItems = [
  {
    id: 1,
    Icon: AssemblyIcon,
    title: "Deep Dive Analysis",

    description:
      "Mansu prioritizes customer satisfaction with knowledgeable professionals, user-friendly platforms, and a commitment to continuous service improvement.",
  },
  {
    id: 2,
    Icon: AssemblyDoubleBoxIcon,
    title: "Strategic Performance Optimization",

    description:
      "With a dedicated procurement team and market insights, Mansu empowers clients to make informed decisions and achieve cost savings without compromising quality.",
  },
  {
    id: 3,
    Icon: AssemblyClusterIcon,
    title: "Holistic Perspective",

    description:
      "At Mansu, we take a collaborative approach to consultancy. We believe that the best solutions come from working closely with our clients to understand their unique challenges.",
  },
];

const NgBenefits = () => {
  return (
    <div className="container mx-auto px-4 mt-24">
      <Reveal>
        <h3 className="font-medium md:font-bold text-4xl md:text-5xl lg:text-6xl">
          Benefits of <span className="block">working with us</span>
        </h3>
      </Reveal>

      <div className="grid grid-col-1 md:grid-cols-3 mt-10 gap-8 space-y-4 md:place-items-center md:divide-x ">
        {benefitsItems.map(({ id, Icon, title, description }) => (
          <Reveal key={id} className="!first:pl-0 pl-0 md:!pl-8">
            <Icon />

            <p className="mt-2">{description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default NgBenefits;
