//React
import React, { useRef } from "react";
//Components
import MainSection from "../components/About/MainSection";
import SkillsSection from "../components/About/SkillsSection";
import AboutSection from "../components/About/AboutSection";
import JobSection from "../components/About/JobSection";

function AboutMe({ darkMode }) {
  //Scroll Button ref
  const buttRef = useRef(null);

  return (
    <>
      <MainSection buttRef={buttRef} />
      <AboutSection forwardedRef={buttRef} darkMode={darkMode} />
      <SkillsSection />
      <JobSection />
    </>
  );
}

export default AboutMe;
