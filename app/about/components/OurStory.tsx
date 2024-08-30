import AssemblyDoubleBoxIcon from "@/app/components/Icons/AssemblyDoubleBoxIcon";
import AssemblyIcon from "@/app/components/Icons/AssemblyIcon";
import MultipleXIcons from "@/app/components/Icons/MultipleXIcons";
import { Reveal } from "@/app/components/ui/Reveal";
import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="container mx-auto mt-24">
      <div>
        <Reveal className="flex flex-col gap-5 justify-center items-center">
          <AssemblyDoubleBoxIcon />

          <h3 className="font-bold uppercase text-4xl">Our Story</h3>
          <p className="font-medium text-xl text-center w-4/5">
            Building successful businesses, from a domestic engineering firm to
            a football academy, taught me that significant challenges often lie
            beyond the core product or service. These ventures exposed me to
            various obstacles, including operations management, financial
            oversight, marketing strategies, and regulatory navigation. My
            passion for overcoming these hurdles, along with the insights
            gained, inspired me to create Mansu. We leverage this expertise to
            help businesses of all sizes tackle unique challenges through
            tailored, strategic solutions that enable sustainable growth and
            long-term success. At Mansu, we strive to be more than just
            consultants; we aim to be trusted partners in your business journey,
            dedicated to supporting you every step of the way.
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
        </Reveal>
        <Reveal
          position="left"
          className="relative mx-4 grid grid-cols-1 md:grid-cols-5 mt-10"
        >
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
        </Reveal>

        <Reveal
          position="right"
          className="grid grid-cols-1 mx-4 md:grid-cols-5 md:mt-14 mb-28"
        >
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
                At Mansu, excellence is not just a goal; it is the foundation of
                our operations and a core principle guiding every aspect of our
                work. We are meticulous in our approach, ensuring that no detail
                is overlooked. Our commitment to excellence drives us to take a
                deep dive into each client{`'`}s unique needs and challenges,
                allowing us to identify opportunities that others may miss.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default OurStory;
