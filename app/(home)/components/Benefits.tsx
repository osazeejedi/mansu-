import AssemblyClusterIcon from "@/app/components/Icons/AssemblyClusterIcon";
import AssemblyDoubleBoxIcon from "@/app/components/Icons/AssemblyDoubleBoxIcon";
import AssemblyIcon from "@/app/components/Icons/AssemblyIcon";
import MansuLogo from "@/app/components/Icons/MansuLogo";
import { Reveal } from "@/app/components/ui/Reveal";
import React from "react";

const benefitsItems = [
  {
    id: 1,
    Icon: AssemblyIcon,
    title: "Deep Dive Analysis",
    items: [
      "Comprehensive Assessments",
      "Data-Driven Insights",
      "Client Collaboration",
    ],
    description:
      "At Mansu, we take a collaborative approach to consultancy. We believe that the best solutions come from working closely with our clients to understand their unique challenges.",
  },
  {
    id: 2,
    Icon: AssemblyDoubleBoxIcon,
    title: "Strategic Performance Optimization",
    items: [
      "Tailored Solutions",
      "Resource Allocation",
      "Continuous Improvement",
    ],
    description:
      "At Mansu, we take a collaborative approach to consultancy. We believe that the best solutions come from working closely with our clients to understand their unique challenges.",
  },
  {
    id: 3,
    Icon: AssemblyClusterIcon,
    title: "Holistic Perspective",
    items: [
      "Building Relationships",
      "Sustainability Focus",
      "Empowerment and Education",
    ],
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

      <div className="grid grid-col-1 md:grid-cols-3 mt-10 gap-8 space-y-4 md:place-items-center md:divide-x ">
        {benefitsItems.map(({ id, Icon, title, items, description }) => (
          <Reveal key={id} className="!first:pl-0 pl-0 md:!pl-8">
            <Icon />
            <h5 className="text-2xl font-semibold my-4">{title}</h5>
            <div className="space-y-4">
              {items.map((item, index) => (
                <Reveal key={index} className="flex items-start gap-2">
                  <div className="bg-white p-1 rounded-full">
                    <MansuLogo />
                  </div>
                  <p>{item}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
