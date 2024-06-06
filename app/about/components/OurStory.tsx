import AssemblyDoubleBoxIcon from "@/app/components/Icons/AssemblyDoubleBoxIcon";
import AssemblyIcon from "@/app/components/Icons/AssemblyIcon";
import MultipleXIcons from "@/app/components/Icons/MultipleXIcons";
import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="container mx-auto mt-24">
      <div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <AssemblyDoubleBoxIcon />

          <h3 className="font-bold uppercase text-4xl">Our Story</h3>
          <p className="font-medium text-xl text-center w-4/5">
            Mansu.io was founded in 2022 by Anthony Graham, who recognized the
            need for a consultancy business that specializes in helping tech
            start-ups and start-ups in general succeed. Since then, we have
            worked with numerous start-ups, providing expert guidance and
            support throughout their growth journey.
          </p>

          <div className="relative z-10 px-4 aspect-video w-full h-full">
            <Image
              quality={100}
              src="/assets/images/about/story.png"
              alt="story"
              fill
              className="object-contain w-full relative mx-4"
            />
          </div>
        </div>
        <div className="relative mx-4 grid grid-cols-1 md:grid-cols-5 mt-10">
          <div className="relative col-span-3 bg-pink-dark rounded-lg min-h-[450px] md:min-h-[550px] p-6 text-white flex flex-col justify-between">
            <Image
              quality={100}
              src="/assets/images/about/mission-overlay.png"
              alt="story"
              fill
              className="object-cover w-full h-full mix-blend-multiply"
            />

            <div className="z-10 flex flex-col justify-between h-full">
              <AssemblyIcon fill="white" />
              <h4 className="uppercase text-3xl font-semibold">
                Our <span className="block">Mission</span>
              </h4>
              <p className="md:text-2xl font-medium">
                Our mission is to empower start-ups to achieve their goals by
                providing tailored solutions that meet their unique needs. We
                understand that every start-up is different, and we work closely
                with our clients to develop customized strategies that help them
                succeed.
              </p>
            </div>
          </div>

          <div className="absolute hidden md:block -top-20 -right-20">
            <MultipleXIcons />
          </div>
        </div>

        <div className="grid grid-cols-1 mx-4 md:grid-cols-5 md:mt-14 mb-28">
          <div className="col-span-2 flex flex-col justify-end">
            <h4 className="text-2xl my-8 md:my-0 w-1/2 md:w-full md:text-5xl font-semibold">
              Fresh Ideas for Every Business
            </h4>
          </div>
          <div className="col-span-3 relative bg-pink rounded-lg min-h-[450px] md:min-h-[550px] p-6 text-white flex flex-col justify-between">
            <Image
              quality={100}
              src="/assets/images/about/our-approach-overlay.png"
              alt="story"
              fill
              className="object-cover w-full h-full mix-blend-multiply"
            />

            <div className="z-10 flex flex-col justify-between h-full">
              <AssemblyIcon fill="white" />
              <h4 className="uppercase text-3xl font-semibold">
                Our <span className="block">Approach</span>
              </h4>
              <p className="md:text-xl font-medium">
                At Mansu.io, we take a collaborative approach to consultancy. We
                believe that the best solutions come from working closely with
                our clients to understand their unique challenges and goals. We
                provide a range of services, including business strategy,
                software development, marketing, and payroll solutions, and
                specialize in research and Intelligence for tech companies, to
                help them succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
