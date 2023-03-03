import React from "react";
import Contact from "../components/Contact";
import Content from "../components/Content";
import Hero from "../components/Hero";
import OurTeam from "../components/OurTeam";
import Pricing from "../components/Pricing";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Content />
      <Pricing />
      <OurTeam />
      <Contact />
    </>
  );
};

export default LandingPage;
