//React
import React, { useRef } from "react";
//Components
import MainSection from "../components/About/MainSection";
import SkillsSection from "../components/About/SkillsSection";
import AboutSection from "../components/About/AboutSection";

function AboutMe() {
  //Scroll Button ref
  const buttRef = useRef(null);

  return (
    <>
      <MainSection buttRef={buttRef} />
      <AboutSection forwardedRef={buttRef} />
      <SkillsSection />
    </>
  );
}

export default AboutMe;
