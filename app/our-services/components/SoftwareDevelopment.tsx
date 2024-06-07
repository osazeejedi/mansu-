import React from "react";

const SoftwareDevelopment = () => {
  return (
    <div className="container mx-auto">
      <div
        style={{
          backgroundImage: `url(/assets/images/services/software-dev-bg.png)`,
        }}
        className="relative mt-10 mx-4 text-white rounded-xl h-[60vh] overflow-hidden bg-no-repeat bg-center"
      >
        <div className="absolute top-0 mix-blend-overlay bg-[#340819] w-full h-full"></div>
        <div className="p-8 z-50 flex flex-col w-full h-full justify-end md:justify-center items-start space-y-5">
          <h4 className="text-2xl md:text-5xl font-semibold">
            Software Development
          </h4>
          <p className="md:w-11/12 lg:w-7/12">
            Our software development services help businesses bring their ideas
            to life. We work with our clients to develop custom software
            solutions that meet their specific needs, whether it’s a mobile app,
            a web platform, or something else entirely. Our experienced
            developers use cutting-edge technologies and best practices to
            deliver high-quality software solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
