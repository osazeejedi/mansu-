import { Reveal } from "@/app/components/ui/Reveal";
import React from "react";

const ContactHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/images/partnership/partnership-hero.png)`,
      }}
      className="min-h-[200px] text-white flex flex-col justify-center bg-center bg-cover bg-no-repeat"
    >
      <Reveal className="container mx-auto p-4">
        <h3 className="text-2xl md:text-6xl text-center md:text-left font-semibold">
          Contact Us
        </h3>
      </Reveal>
    </div>
  );
};

export default ContactHero;
