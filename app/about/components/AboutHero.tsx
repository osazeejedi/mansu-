import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/ui/Reveal";
import Link from "next/link";
import React from "react";

const AboutHero = () => {
  return (
    <div
      style={{ backgroundImage: `url(/assets/images/about/about-hero.png)` }}
      className="min-h-[450px] text-white flex flex-col items-center justify-center bg-[#4f001f] bg-center bg-cover bg-no-repeat"
    >
      <div className="container mx-auto p-4 text-center flex">
        <div className="flex flex-col justify-center items-center">
          <Reveal className="text-2xl mb-3 font-bold uppercase">
            About Mansu
          </Reveal>
          <p className="md:w-3/5 mb-3">
            At Mansu, excellence is not just a goal; it is the foundation of
            everything we do. We are meticulous in our approach, taking the time
            to thoroughly understand each client{`'`}s unique needs, challenges,
            and goals. By conducting a deep dive analysis, we identify untapped
            opportunities and craft tailored strategies that optimize
            performance and drive growth.
          </p>
          <p className="md:w-3/5 mb-3">
            Our holistic perspective goes beyond conventional solutions. We
            treat every client as a unique investment, carefully considering
            their long-term potential and sustainability. We focus on building
            enduring relationships and delivering value that lasts. Our
            commitment to excellence means that we don{`'`}t just aim for
            immediate results; we strive for sustainable success that grows over
            time, ensuring our clients thrive in a constantly evolving market
            landscape.
          </p>
          <p className="md:w-3/5 mb-3">
            Through this dedication to a comprehensive and personalized
            approach, Mansu positions itself as more than just a service
            provider—we become a strategic partner committed to your long-term
            growth and prosperity.
          </p>
          <Link className="mt-5" href="our-services">
            <Button variant="outline" className="w-fit">
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
