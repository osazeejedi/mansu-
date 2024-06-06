import React from "react";

const ContactHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/images/partnership/partnership-hero.png)`,
      }}
      className="min-h-[250px] text-white flex flex-col justify-center bg-center bg-cover bg-no-repeat"
    >
      <div className="container text-2xl md:text-6xl font-semibold mx-auto p-4">
        <h3>Contact Us</h3>
      </div>
    </div>
  );
};

export default ContactHero;
