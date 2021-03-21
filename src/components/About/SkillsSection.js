import { useState } from "react";
//Animations
import { SkillScroll } from "./useScroll";
import { motion } from "framer-motion";
//Counter Animation
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const SkillsSection = () => {
  return (
    <div className="skill-section">
      <div className="skill-title">
        <h2>
          Main <span>Skills</span>
        </h2>
      </div>
      <div className="skills">
        <Skills skill="Photoshop" note={90} />
        <Skills skill="Illustrator" note={80} />
        <Skills skill="InDesign" note={90} />
        <Skills skill="Clo 3D" note={75} />
        <Skills skill="WGSN" note={65} />
        <Skills skill="Google ADS" note={88} />
        <Skills skill="Facebook ADS" note={74} />
        <Skills skill="Google Analytics" note={77} />
      </div>
    </div>
  );
};

const Skills = ({ skill, note }) => {
  const [element, controls] = SkillScroll();

  //Skill Animation
  const skillAnim = {
    hidden: { width: "0%" },
    show: { width: note + "%", transition: { duration: 2 } },
  };

  const [focus, setFocus] = useState(false);

  return (
    <div className="skill">
      <div className="skill-info">
        <h4>{skill}</h4>
        <div className="skill-val">
          {/* Counter animation */}
          <CountUp
            start={focus ? 0 : null}
            end={note}
            duration={2.5}
            suffix=" %"
          >
            {({ countUpRef }) => (
              <VisibilitySensor
                onChange={(isVisible) => {
                  if (isVisible) {
                    setFocus(true);
                  }
                }}
              >
                <span className="note" ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </div>
      </div>
      <div className="skill-but">
        <div className="skill-hold">
          <motion.div
            variants={skillAnim}
            animate={controls}
            initial="hidden"
            ref={element}
            className="skill-bar"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
