import React from "react";
import AboutHero from "./components/AboutHero";
import Cta from "../(home)/components/Cta";
import Team from "./components/Team";
import OurStory from "./components/OurStory";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <Team />
      <OurStory />
      <Cta />
    </>
  );
};

export default AboutPage;
