//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ContactData = () => {
  return (
    <>
      <div className="contact-center">
        <div className="contact-title">
          <h2>
            Contact <span>Me</span>
          </h2>
          <div className="line" />
        </div>
      </div>

      <div className="msg-section">
        <div className="icon-section">
          <div className="icon-msg">
            <FontAwesomeIcon size="2x" className="icon" icon={faEnvelope} />
            <h5>Send me a measseage</h5>
          </div>
          <p>cristinablanco@gmail.com</p>
        </div>
        <div className="icon-section">
          <div className="icon-msg">
            <FontAwesomeIcon size="2x" className="icon" icon={faPhoneAlt} />
            <h5>Give me a call</h5>
          </div>
          <p>Mobile: +34 637 728 366</p>
        </div>
        <div className="icon-section">
          <div className="icon-msg">
            <FontAwesomeIcon size="2x" className="icon" icon={faUsers} />
            <h5>See me on socials</h5>
          </div>
          <a href="https://www.instagram.com/criis_lien/">
            <FontAwesomeIcon
              size="3x"
              className="icon-social icon-first"
              icon={faInstagram}
            />
          </a>
          <a href="https://www.linkedin.com/in/cristina-blanco-f%C3%A0brega-656861170/?originalSubdomain=es">
            <FontAwesomeIcon
              size="3x"
              className="icon-social"
              icon={faLinkedin}
            />
          </a>
          <a href="https://www.linkedin.com/in/cristina-blanco-f%C3%A0brega-656861170/?originalSubdomain=es">
            <FontAwesomeIcon
              size="3x"
              className="icon-social"
              icon={faTwitter}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactData;
