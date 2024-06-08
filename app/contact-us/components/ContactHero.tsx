import { Reveal } from "@/app/components/ui/Reveal";
import React from "react";

const ContactHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/images/partnership/partnership-hero.png)`,
      }}
      className="min-h-[200px] bg-[#5f0124] text-white flex flex-col justify-center bg-center bg-cover bg-no-repeat"
    >
      <div className="container mx-auto p-4">
        <Reveal className="text-2xl md:text-6xl text-center md:text-left font-semibold">
          Contact Us
        </Reveal>
      </div>
    </div>
  );
};

export default ContactHero;
