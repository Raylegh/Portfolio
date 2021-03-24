import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Bottom = () => {
  return (
    <div className="bottom">
      <h5>Copyright © 2020</h5>
      <span>Santi Sellares</span>
      <a href="https://github.com/Raylegh">
        <FontAwesomeIcon size="2x" className="icon" icon={faGithub} />
      </a>
    </div>
  );
};

export default Bottom;
