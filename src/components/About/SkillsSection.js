//Animations
import { SkillScroll } from "./useScroll";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <div className="skill-section">
      <div className="skill-title">
        <h2>
          Main <span>Skills</span>
        </h2>
      </div>
      <div className="skills">
        <Skills skill="Photoshop" note="90%" />
        <Skills skill="Illustrator" note="95%" />
        <Skills skill="InDesign" note="80%" />
        <Skills skill="Clo 3D" note="75%" />
        <Skills skill="WGSN" note="35%" />
        <Skills skill="Google ADS" note="55%" />
        <Skills skill="Facebook ADS" note="65%" />
        <Skills skill="Google Analytics" note="40%" />
      </div>
    </div>
  );
};

const Skills = ({ skill, note }) => {
  const [element, controls] = SkillScroll();

  //Skill Animation
  const skillAnim = {
    hidden: { width: "0%" },
    show: { width: note, transition: { duration: 1 } },
  };

  return (
    <div className="skill">
      <div className="skill-info">
        <h4>{skill}</h4>
        <div className="skill-val">
          <span>{note}</span>
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
