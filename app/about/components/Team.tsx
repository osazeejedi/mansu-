import LinkedinIcon from "@/app/components/Icons/LinkedinIcon";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/ui/Reveal";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 min-h-[40vh]">
        <div className="flex flex-col justify-between w-full">
          <h3 className="font-semibold text-3xl md:text-5xl">
            Leading <span className="md:block">Team</span>
          </h3>
          <Button className="hidden md:flex w-fit">Join Team</Button>
        </div>

        <Reveal className="!w-full h-full">
          {/* <Image
            quality={100}
            src="/assets/images/about/john.png"
            alt="John"
            width={200}
            height={250}
            className="object-contain w-full"
          /> */}
          <h6 className="font-bold lg:text-2xl my-3">Tony J Graham</h6>

          <div className="flex items-center justify-between">
            <p className="font-medium text-sm">CEO</p>
            <LinkedinIcon />
          </div>
        </Reveal>

        <Reveal className="!w-full h-full">
          {/* <Image
            quality={100}
            src="/assets/images/about/timilehin.png"
            alt="timilehin"
            width={200}
            height={250}
            className="object-contain w-full"
          /> */}
          <h6 className="font-bold lg:text-2xl my-3">Timilehin Omoboboye</h6>
          <div className="flex items-center justify-between gap-5 w-full">
            <p className="font-medium text-sm">
              Sales/Business Development consultant
            </p>
            <LinkedinIcon />
          </div>
        </Reveal>
        <Button className="md:hidden mx-auto mt-10 w-fit">Join Team</Button>
      </div>
    </div>
  );
};

export default Team;
